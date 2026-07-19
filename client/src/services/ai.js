import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});
console.log(import.meta.env.VITE_GEMINI_API_KEY, "api");
console.log("Hello")

export async function analyzeMessage(message) {
  try {
    const prompt = `
You are an expert cybersecurity analyst.

Analyze the following message and determine whether it is safe or a scam.

Return ONLY valid JSON.

{
  "status": "Safe | Suspicious | Likely Scam",
  "confidence": 95,
  "category": "",
  "summary": "",
  "reasons": [],
  "recommendation": ""
}

Message:
${message}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: prompt,
    });

    const text = response.text.trim();

    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned);
  } catch (error) {
    console.error(error);

    return {
      status: "Error",
      confidence: 0,
      category: "Unknown",
      summary: "Unable to analyze the message.",
      reasons: ["AI service failed."],
      recommendation: "Please try again.",
    };
  }
}