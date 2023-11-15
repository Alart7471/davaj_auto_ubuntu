const axios = require('axios')

module.exports = { sendRequestToTelegramBot: async function(message) {
        const botToken = '****************************************'; // token
        const chatId = '***************'; // my
    
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const payload = {
          chat_id: chatId,
          text: message,
        };

        try {
            await axios.post(url, payload);
            console.log(`Отправил сообщение ${message} на ${chatId}`);
          } catch (error) {
            console.log(error)
            console.error('Ошибка при отправке запроса:');
          }
    }
}
