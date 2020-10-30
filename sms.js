const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: 'b6fc4829',
  apiSecret: 'QxiEVgYn3LhWjaU5',
});

const from = 'Vonage APIs';
const to = '27813128152';
const text = 'Hello Luyanda, this is a test message from node!';

nexmo.message.sendSms(from, to, text);