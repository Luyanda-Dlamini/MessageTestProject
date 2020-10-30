const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: 'b6fc4829',
  apiSecret: 'QxiEVgYn3LhWjaU5',
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
}, {
  apiHost: BASE_URL
})

vonage.channel.send(
  { "type": "whatsapp", "number": 27603696206 },
  { "type": "whatsapp", "number": 14157386170 },
  {
    "content": {
      "type": "text",
      "text": "This is a WhatsApp Message text message sent using the Messages API"
    }
  },
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data.message_uuid);
    }
  }
);
