import { webhookCallback } from "grammy";
import { bot } from "./bot.ts";
import { renderUI } from "./web/layout.ts";

const handleUpdate = webhookCallback(bot, "std/http");

Deno.serve(async (req) => {
  const url = new URL(req.url);

  if (req.method === "POST" && url.pathname === "/bot") {
    return await handleUpdate(req);
  }

  return new Response(renderUI(), {
    headers: { "content-type": "text/html" },
  });
});
