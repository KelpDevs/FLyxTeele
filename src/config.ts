export const CONFIG = {
  TOKEN: Deno.env.get("BOT_TOKEN") || "",
  IS_DEV: Deno.env.get("DENO_DEPLOYMENT_ID") == undefined,
};

if (!CONFIG.TOKEN) {
  throw new Error("BOT_TOKEN is missing!");
}
