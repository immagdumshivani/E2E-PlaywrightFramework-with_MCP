import dotenv from "dotenv";

dotenv.config();
const result = dotenv.config();
console.log(result);

console.log("Gemini Key:", process.env.GEMINI_API_KEY ? "Loaded" : "Missing");
export const AIConfig = Object.freeze({
  provider: process.env.AI_PROVIDER || "gemini",

  apiKey: process.env.GEMINI_API_KEY!,

  model: process.env.AI_MODEL || "gemini-2.5-flash",

  temperature: Number(process.env.AI_TEMPERATURE || 0),

  maxTokens: Number(process.env.AI_MAX_TOKENS || 1000),
});
