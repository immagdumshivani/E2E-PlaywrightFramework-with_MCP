import OpenAI from "openai";
import { AIProvider } from "./AIProvider";
import { AIConfig } from "../config/AIConfig";

export class OpenAIProvider implements AIProvider {
  private client: OpenAI;

  constructor() {
    if (!AIConfig.apiKey) {
      throw new Error("OPENAI_API_KEY is missing");
    }

    this.client = new OpenAI({
      apiKey: AIConfig.apiKey,
    });
  }

  async generate(prompt: string): Promise<string> {
    try {
      const response = await this.client.responses.create({
        model: AIConfig.model,

        input: prompt,
      });

      return response.output_text;
    } catch (error) {
      console.error("OpenAI Error:", error);

      throw error;
    }
  }
}
