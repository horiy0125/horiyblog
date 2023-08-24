export const envVariables = {
  CHANNEL_ID: Deno.env.get("CHANNEL_ID") || "",
  CHANNEL_SECRET: Deno.env.get("CHANNEL_SECRET") || "",
  CHANNEL_ACCESS_TOKEN: Deno.env.get("CHANNEL_ACCESS_TOKEN") || "",
} as const;
