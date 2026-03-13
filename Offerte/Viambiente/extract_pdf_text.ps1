$ErrorActionPreference = 'Stop'

$source = @"
using System;
using System.Runtime.InteropServices;
using System.Text;

[Flags]
public enum IFILTER_INIT : uint
{
    CANON_PARAGRAPHS = 0x1,
    HARD_LINE_BREAKS = 0x2,
    CANON_HYPHENS = 0x4,
    CANON_SPACES = 0x8,
    APPLY_INDEX_ATTRIBUTES = 0x10,
    APPLY_CRAWL_ATTRIBUTES = 0x100,
    APPLY_OTHER_ATTRIBUTES = 0x20,
    INDEXING_ONLY = 0x40,
    SEARCH_LINKS = 0x80,
    FILTER_OWNED_VALUE_OK = 0x200
}

public enum IFILTER_FLAGS : uint
{
    OLE_PROPERTIES = 1
}

public enum CHUNK_BREAKTYPE : uint
{
    NO_BREAK = 0,
    END_OF_WORD = 1,
    END_OF_SENTENCE = 2,
    END_OF_PARAGRAPH = 3,
    END_OF_CHAPTER = 4
}

[Flags]
public enum CHUNKSTATE : uint
{
    TEXT = 0x1,
    VALUE = 0x2,
    FILTER_OWNED_VALUE = 0x4
}

[StructLayout(LayoutKind.Sequential)]
public struct PROPSPEC
{
    public uint ulKind;
    public IntPtr unionValue;
}

[StructLayout(LayoutKind.Sequential)]
public struct FULLPROPSPEC
{
    public Guid guidPropSet;
    public PROPSPEC psProperty;
}

[StructLayout(LayoutKind.Sequential)]
public struct STAT_CHUNK
{
    public uint idChunk;
    public CHUNK_BREAKTYPE breakType;
    public CHUNKSTATE flags;
    public uint locale;
    public FULLPROPSPEC attribute;
    public uint idChunkSource;
    public uint cwcStartSource;
    public uint cwcLenSource;
}

[StructLayout(LayoutKind.Sequential)]
public struct FILTERREGION
{
    public uint idChunk;
    public uint cwcStart;
    public uint cwcExtent;
    public uint locale;
}

[ComImport]
[Guid("89BCB740-6119-101A-BCB7-00DD010655AF")]
[InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
public interface IFilter
{
    [PreserveSig]
    int Init(IFILTER_INIT grfFlags, uint cAttributes, IntPtr aAttributes, ref IFILTER_FLAGS pdwFlags);

    [PreserveSig]
    int GetChunk(out STAT_CHUNK pStat);

    [PreserveSig]
    int GetText(ref uint pcwcBuffer, IntPtr awcBuffer);

    [PreserveSig]
    int GetValue(ref IntPtr ppPropValue);

    [PreserveSig]
    int BindRegion(ref FILTERREGION origPos, ref Guid riid, ref object ppunk);
}

public static class PdfFilterReader
{
    [DllImport("query.dll", CharSet = CharSet.Unicode)]
    private static extern int LoadIFilter(string pwcsPath, IntPtr pUnkOuter, out IntPtr ppIUnk);

    private const int S_OK = 0;
    private const int FILTER_S_LAST_TEXT = 0x00041709;
    private const int FILTER_E_END_OF_CHUNKS = unchecked((int)0x80041700);
    private const int FILTER_E_NO_MORE_TEXT = unchecked((int)0x80041701);
    private const int FILTER_E_NO_TEXT = unchecked((int)0x80041705);

    public static string Extract(string path)
    {
        IntPtr filterPtr;
        int hr = LoadIFilter(path, IntPtr.Zero, out filterPtr);
        if (hr != S_OK || filterPtr == IntPtr.Zero)
        {
            Marshal.ThrowExceptionForHR(hr);
        }

        IFilter filter = null;
        try
        {
            object raw = Marshal.GetObjectForIUnknown(filterPtr);
            filter = (IFilter)raw;

            IFILTER_FLAGS outFlags = 0;
            var initFlags =
                IFILTER_INIT.CANON_PARAGRAPHS |
                IFILTER_INIT.HARD_LINE_BREAKS |
                IFILTER_INIT.CANON_HYPHENS |
                IFILTER_INIT.CANON_SPACES;
            hr = filter.Init(initFlags, 0, IntPtr.Zero, ref outFlags);
            if (hr != S_OK && hr != 1)
            {
                Marshal.ThrowExceptionForHR(hr);
            }

            var sb = new StringBuilder();
            while (true)
            {
                STAT_CHUNK chunk;
                hr = filter.GetChunk(out chunk);
                if (hr == FILTER_E_END_OF_CHUNKS)
                {
                    break;
                }
                if (hr != S_OK)
                {
                    Marshal.ThrowExceptionForHR(hr);
                }
                if ((chunk.flags & CHUNKSTATE.TEXT) == 0)
                {
                    continue;
                }

                while (true)
                {
                    uint size = 4096;
                    IntPtr buffer = Marshal.AllocCoTaskMem(((int)size + 1) * 2);
                    try
                    {
                        hr = filter.GetText(ref size, buffer);
                        if (hr == FILTER_E_NO_MORE_TEXT || hr == FILTER_E_NO_TEXT)
                        {
                            break;
                        }
                        if (hr != S_OK && hr != FILTER_S_LAST_TEXT)
                        {
                            Marshal.ThrowExceptionForHR(hr);
                        }
                        if (size == 0)
                        {
                            break;
                        }

                        string text = Marshal.PtrToStringUni(buffer, (int)size);
                        if (!String.IsNullOrEmpty(text))
                        {
                            sb.Append(text);
                        }
                    }
                    finally
                    {
                        Marshal.FreeCoTaskMem(buffer);
                    }
                }

                sb.AppendLine();
                sb.AppendLine();
            }

            return sb.ToString();
        }
        finally
        {
            if (filterPtr != IntPtr.Zero)
            {
                Marshal.Release(filterPtr);
            }
        }
    }
}
"@

Add-Type -TypeDefinition $source

$pdfPath = $args[0]
if (-not $pdfPath) {
    throw "Usage: .\\extract_pdf_text.ps1 <pdf-path>"
}

[PdfFilterReader]::Extract($pdfPath)
