import { serveDir } from "jsr:@std/http@1.0.25/file-server";
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
