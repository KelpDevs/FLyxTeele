import { Bot, webhookCallback } from "grammy";

const bot = new Bot(Deno.env.get("BOT_TOKEN") || "");

bot.command("start", (ctx) => ctx.reply("Selamat datang di Flyxteele Bot!"));

export const handleUpdate = webhookCallback(bot, "std/http");
