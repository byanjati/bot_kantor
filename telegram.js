var TelegramBot = require('node-telegram-bot-api');

var token = '121644051:AAFtkpyulp0Rw8FISDn9667H6iHFA5FtolA';

var bot = new TelegramBot(token, {polling: true});

bot.on('message', function(msg){
	var chatId = msg.chat.id;
	var photo = 'bot.gif';
	// bot.sendPhoto(chatId, photo, {caption: "I'm a bot!"});
	// bot.sendMessage(chatId,"Namaku Indah_tron");

	if (msg.text == '/getdailyreport') {
	    // From file
	    bot.sendMessage(chatId, "https://goo.gl/peCNIX");
  	}

	if (msg.text.toLowerCase().indexOf("ndah") >= 0){
		bot.sendMessage(chatId, "kenapa kak ?");
	}
});

