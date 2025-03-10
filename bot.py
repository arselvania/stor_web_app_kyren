import telebot
from telebot import types
from flask import Flask, request, jsonify, send_from_directory
import os
from config import *  # مطمئن شو که متغیرهای `TOKEN` و `WEBHOOK_URL` اینجا هستن

# تنظیمات Flask
app = Flask(__name__)

# تنظیمات تلگرام بات
bot = telebot.TeleBot(TOKEN)

# 📌 🔥 ست کردن وبهوک برای دریافت پیام‌های تلگرام
@app.route('/webhook', methods=['POST'])
def webhook():
    json_str = request.get_json()
    print("📩 پیام دریافتی از تلگرام:", json_str)  # لاگ پیام دریافتی
    update = telebot.types.Update.de_json(json_str)
    bot.process_new_updates([update])
    return jsonify({"status": "OK"}), 200

# 📌 🔥 نمایش صفحه HTML
@app.route("/")
def serve_index():
    return send_from_directory(os.getcwd(), "index.html")  # فایل `index.html` در روت اجرا می‌شود.

# 📌 🔥 هندلر `/start` در تلگرام بات
@bot.message_handler(commands=['start'])
def send_welcome(message):
    keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True)
    
    web_app = types.WebAppInfo(WEB_APP_URL)
    shop_button = types.KeyboardButton("🛍 ورود به فروشگاه", web_app=web_app)
    
    keyboard.add(shop_button)
    bot.send_message(message.chat.id, "به فروشگاه کایرن خوش آمدید!", reply_markup=keyboard)

# 📌 🔥 دریافت داده از وب‌اپ
@bot.message_handler(content_types=['web_app_data'])
def handle_web_app_data(message):
    data = message.web_app_data.data
    bot.send_message(message.chat.id, f"✅ داده دریافت شد: {data}")

if __name__ == "__main__":
    bot.remove_webhook()
    bot.set_webhook(url=WEBHOOK_URL)
    print("🚀 Flask & Telegram Bot is running...")
    app.run(host='0.0.0.0', port=5000, debug=True)
