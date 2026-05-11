import { Context } from "grammy";
import { kv, Store } from "../db";

export const handleStart = (ctx: Context) => {
  return ctx.reply(
    "Selamat datang di SaaS Bot Toko! Gunakan /buat_toko [nama] untuk mulai.",
  );
};

export const handleBuatToko = async (ctx: Context) => {
  const userId = ctx.from?.id;
  const storeName = ctx.match as string;

  if (!userId || !storeName) return ctx.reply("Gunakan: /buat_toko [NamaToko]");

  const newStore: Store = {
    ownerId: userId,
    name: storeName,
    products: [],
    createdAt: new Date().toISOString();
  }

  await kv.set(["stores", userId], newStore);
  await ctx.reply(`Toko "${storeName}" berhasil dibuat!`);
};
