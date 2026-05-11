import { Bot, Context, webhookCallback } from "grammy";

const TOKEN = Deno.env.get("BOT_TOKEN");

const bot = new Bot(TOKEN);

bot.command("start", (ctx: Context) => ctx.reply("Halo! Aku Bot"));
bot.on("message", (ctx: Context) =>
  ctx.reply("Kamu bilang: " + ctx.message.text),
);

const handleUpdate = webhookCallback(bot, "std/http");

const html = `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Flyxteele Bot</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
          body { font-family: sans-serif; background: #121212; color: white; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
          .card { text-align: center; padding: 2rem; border-radius: 20px; background: #1e1e1e; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid #333; }
          h1 { color: #00ff88; margin-bottom: 0.5rem; }
          p { color: #aaa; }
          .status { display: inline-block; padding: 5px 15px; border-radius: 20px; background: #004422; color: #00ff88; font-size: 0.8rem; font-weight: bold; }
      </style>
  </head>
  <body>
      <div class="card">
          <h1>Flyxteele Bot 🦖</h1>
          <p>Bot Telegram berjalan dengan Deno Deploy</p>
          <div class="status">● ONLINE</div>
      </div>
  </body>
  </html>
  `;

Deno.serve(async (req) => {
  const url = new URL(req.url);

  if (req.method === "POST" && url.pathname === "/bot") {
    try {
      return await handleUpdate(req);
    } catch (err) {
      console.error(err);
    }
  }

  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
});
