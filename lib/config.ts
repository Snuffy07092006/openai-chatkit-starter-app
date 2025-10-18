import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "What can you do?",
    prompt: "What can you do?",
    icon: "circle-question",
  },
];
export const PLACEHOLDER_INPUT = "Stil et spørgsmål";

export const GREETING = "Hvordan kan jeg hjælpe idag?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 120,
      tint: 8,
      shade: theme === "dark" ? -3 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#0f3008" : "#303030",
      level: 1,
    },
  },
  radius: "round",
  typography: {
    baseSize: 14,
    fontFamily: 'Lora, serif',
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
