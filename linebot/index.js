const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var timerObj
app.post('/webhook', (req, res) => {
	clearTimeout(timerObj)
	let reply_token = req.body.events[0].replyToken
	timerObj = setTimeout(() => {
		reply(reply_token)
		res.sendStatus(200)
	},10000)	
})
app.get('/webhook', function (req, res) {
	res.send('LineAPI test')
})
app.listen(port)
function reply(reply_token) {
  let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer {b+AeOURrY9DutsCGAz8zuCLteAS+koZ94V3lIEjSYHew/VU0FKLpyyMSUSM75rQjEmhOI0lcg6lrVd0JPJlHW6pshE4SVmlUJ84I1zNCnFersW7+Qi2oenfnLmXb9vjI5PUjVoqytsqh3/p4ho3n/wdB04t89/1O/w1cDnyilFU=}'
  }
  let body = JSON.stringify({
		replyToken: reply_token,
		messages: [
			{
				type: "sticker",
				packageId: 11538,
				stickerId: 51626499
			},
			{
				type: 'text',			
				text: 'ขอบคุณที่ส่งข้อความถึงเรา ขออภัยในความล่าช้า แอดมินจะรีบมาตอบกลับโดยเร็วที่สุดนะคะ'
			}
		]
  })
  request.post({
      url: 'https://api.line.me/v2/bot/message/reply',
      headers: headers,
      body: body
  }, (err, res, body) => {
      console.log('status = ' + res.statusCode);
	});
}