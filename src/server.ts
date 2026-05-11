import { serveDir } from "jsr:@std/http@1.0.25/file-server";
import { handleUpdate } from "./bot.ts";

Deno.serve(async (req) => {
  const url = new URL(req.url);

  if (url.pathname === "/bot") {
    if (req.method === "POST") {
      return await handleUpdate(req);
    }
    return new Response("Bot is running");
  }

  return serveDir(req, {
    fsRoot: "_site",
    quiet: true,
  });
});
