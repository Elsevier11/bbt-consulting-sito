
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
Sei un consulente esperto di Intelligenza Artificiale Strategica che lavora per Atalanta BC.
Il tuo compito è rispondere a domande sulla "Proposta Operativa per Atalanta BC" descritta nel documento.

Dettagli chiave:
- Focus: Trasformazione operativa, non solo uso occasionale.
- Aree: Marketing, Commerciale, Eventi, HR, Merchandising, Atalanta Football Camp.
- Obiettivo: Efficienza, qualità, vantaggio competitivo.

Rispondi in modo professionale, dinamico e orientato ai risultati, riflettendo i valori di eccellenza dell'Atalanta. 
Sii sintetico ma esaustivo. Se ti chiedono qualcosa fuori dal perimetro, riporta gentilmente la conversazione sui benefici per il Club.
`;

export const getGeminiResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Mi scuso, ho riscontrato un problema tecnico. Possiamo riprovare?";
  }
};
