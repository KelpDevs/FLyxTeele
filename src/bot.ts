import { Bot, webhookCallback } from "grammy";
import { serveDir } from "https://jsr.io/@std/http/1.0.25/file_server.ts";

const kv = await Deno.openKv();
const bot = new Bot(Deno.env.get("BOT_TOKEN") || "");

bot.command("start", (ctx) => ctx.reply("Selamat datang di Flyxteele Bot!"));

export const handleUpdate = webhookCallback(bot, "std/http");
