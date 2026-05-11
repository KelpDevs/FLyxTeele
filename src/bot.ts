import { Bot, webhookCallback } from "grammy";
import { CONFIG } from "./config.ts";

const bot = new Bot(CONFIG.TOKEN);

export const handleUpdate = webhookCallback(bot, "std/http");

bot.command("start", (ctx) => ctx.reply("Selamat datang di Flyxteele Bot!"));
