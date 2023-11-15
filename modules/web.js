const axios = require('axios')

module.exports = { sendRequestToTelegramBot: async function(message) {
        const botToken = '6702238393:AAFFxPI7bojjaH83ThPhU21dBS_N4kWtGQE'; // Здесь укажи токен своего бота
        const chatId = '6357780899'; // мой сербский номер
    
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
