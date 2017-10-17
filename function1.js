var event = msg.payload["events"][0];

msg.replyToken = event["replyToken"];
msg.payload = event["message"]["text"];
msg.params = {};
msg.params.workspace_id ="xxxxxx"
msg.params.username = "xxxxxx"
msg.params.password = "xxxxxx"
msg.params.endpoint = "https://gateway.watsonplatform.net/conversation/api"

return msg