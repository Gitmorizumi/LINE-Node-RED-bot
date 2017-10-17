var messageText = msg.payload.output.text[0];

msg.payload = {"messages": [{"type": "text", "text": messageText}], "replyToken": msg.replyToken};
msg.headers = { "Content-Type": "application/json", "Authorization": "Bearer xxxxxx"};
return msg