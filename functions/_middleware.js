import caseManifest from "./_case-manifest.js";

// Se una richiesta finisce in 404, prova a risolvere il percorso ignorando
// maiuscole/minuscole (cartelle e file su Cloudflare Pages sono case-sensitive
// per natura del filesystem). In caso di corrispondenza, reindirizza (301)
// al percorso con il case corretto.
export async function onRequest(context) {
  const response = await context.next();
  if (response.status !== 404) return response;

  const url = new URL(context.request.url);
  const pathname = decodeURIComponent(url.pathname);

  const candidates = [pathname];
  if (pathname.endsWith("/")) {
    candidates.push(pathname.slice(0, -1));
    candidates.push(pathname + "index.html");
  } else {
    candidates.push(pathname + "/");
    candidates.push(pathname + "/index.html");
  }

  for (const candidate of candidates) {
    const match = caseManifest[candidate.toLowerCase()];
    if (!match) continue;

    let target = match;
    if (target.endsWith("/index.html")) {
      target = target.slice(0, -"index.html".length);
    }
    if (target === pathname) continue;

    url.pathname = target;
    return Response.redirect(url.toString(), 301);
  }

  return response;
}
