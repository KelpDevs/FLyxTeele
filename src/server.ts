import { serveDir } from "https://jsr.io/@std/http/1.0.25/file_server.ts";
import { handleUpdate } from "./bot.ts";

Deno.serve(async (req) => {
  const url = new URL(req.url);

  if (req.method === "POST" && url.pathname === "/bot") {
    return await handleUpdate(req);
  }

  return serveDir(req, {
    fsRoot: "_site",
    quiet: true,
  });
});
