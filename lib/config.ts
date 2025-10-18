import { StartScreenPrompt } from "@openai/chatkit";

export const WORKFLOW_ID = process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";
  },
];

export const PLACEHOLDER_INPUT = "Stil et spørgsmål";

export const GREETING = "Hvordan kan jeg hjælpe idag?";
