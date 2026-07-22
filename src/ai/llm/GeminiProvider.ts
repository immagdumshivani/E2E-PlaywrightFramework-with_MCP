import { GoogleGenAI } from "@google/genai";
import { AIProvider } from "./AIProvider";
import { AIConfig } from "../config/AIConfig";

export class GeminiProvider implements AIProvider {
  private client: GoogleGenAI;

  constructor() {
    if (!AIConfig.apiKey) {
      throw new Error("GEMINI_API_KEY is missing");
    }

    this.client = new GoogleGenAI({
      apiKey: AIConfig.apiKey,
    });
  }

  async generate(prompt: string): Promise<string> {
    try {
      const response = await this.client.models.generateContent({
        model: AIConfig.model,
        contents: prompt,
      });

      return response.text ?? "";
    } catch (error) {
      console.error("Gemini Error:", error);
      throw error;
    }
  }
}
