import { Bot, Context, webhookCallback } from "grammy";
import { load } from "jsr:@std/dotenv";

const TOKEN = Deno.env.get("BOT_TOKEN");

const bot = new Bot(TOKEN);

bot.command("start", (ctx: Context) => ctx.reply("Halo! Aku Bot"));
bot.on("message", (ctx: Context) =>
  ctx.reply("Kamu bilang: " + ctx.message.text),
);

const handleUpdate = webhookCallback(bot, "std/http");

Deno.serve(async (req) => {
  const url = new URL(req.url);

  if (req.method === "POST" && url.pathname === "/bot") {
    try {
      return await handleUpdate(req);
    } catch (err) {
      console.error(err);
    }
  }

  return new Response("bot is running");
});
