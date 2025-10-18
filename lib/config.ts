import { StartScreenPrompt } from "@openai/chatkit";
import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID = process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";
export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
 theme: {
    colorScheme: 'dark',
    radius: 'round',
    density: 'compact',
    color: {
      accent: {
        primary: '#303030',
        level: 1
      },
      surface: {
        background: '#0f3008',
        foreground: '#303030'
      }
    },
    typography: {
      baseSize: 14,
      fontFamily: 'Lora, serif',
      fontSources: [
        {
          family: 'Lora',
          src: 'https://fonts.gstatic.com/s/lora/v37/0QIvMX1D_JOuMwr7I_FMl_E.woff2',
          weight: 400,
          style: 'normal',
          display: 'swap'
    }
      // ...and 7 more font sources
      ]
    }
  },
  composer: {
    placeholder: 'Stil et spørgsmål',
    attachments: {
      enabled: false
    },
  },
  startScreen: {
    greeting: 'Hvad kan jeg hjælpe med idag?',
    prompts: [],
  },
  // Optional fields not shown: locale, initialThread, threadItemActions, header, onClientTool, entities, widgets
};
