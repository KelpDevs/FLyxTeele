import { Bot, Context } from "grammy";
import { CONFIG } from "./config";
import { handleBuatToko, handleStart } from "./handlers/commands";

export const bot = new Bot(CONFIG.TOKEN);

bot.command("start", handleStart);
bot.command("buat_toko", handleBuatToko);

bot.on("message:text", (ctx) =>
  ctx.reply("Gunakan menu bantuan untuk navigasi."),
);
