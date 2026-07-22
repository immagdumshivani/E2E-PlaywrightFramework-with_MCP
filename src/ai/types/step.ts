export type ActionType = "goto" | "click" | "fill" | "verifyVisible";

export interface Step {
  action: ActionType;
  locator?: string;
  value?: string;
  url?: string;
}
