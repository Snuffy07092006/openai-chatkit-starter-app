import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Hvordan kan jeg leje et lagerrum?",
    prompt: "Hvordan kan jeg leje et lagerrum?",
    icon: "circle-question",
  },
];
export const PLACEHOLDER_INPUT = "Stil et spørgsmål";

export const GREETING = "Hvad kan jeg hjælpe med idag?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
   accent: {
        primary: '#303030',
        level: 1
      },
      surface: {
        background: '#0f3008',
        foreground: '#303030'
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
