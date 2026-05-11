import { Bot, Context, webhookCallback } from "grammy";
import { load } from "jsr:@std/dotenv";

const env = await load();

const bot = new Bot(env.BOT_TOKEN);

bot.command("start", (ctx: Context) => ctx.reply("Halo! Aku Bot"));
bot.on("message", (ctx: Context) =>
  ctx.reply("Kamu bilang: " + ctx.message.text),
);

const handleUpdate = webhookCallback(bot, "std/http");

Deno.serve(async (req) => {
  const url = new URL(req.url);

  if (req.method === "POST" && url.params === "/bot") {
    try {
      return await handleUpdate(req);
    } catch (err) {
      console.error(err);
    }
  }

  return new Response("bot is running");
});
