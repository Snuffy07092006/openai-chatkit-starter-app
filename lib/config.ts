import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const PLACEHOLDER_INPUT = "Stil et spørgsmål";

export const GREETING = "Hvad kan jeg hjælpe med idag?";

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
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
