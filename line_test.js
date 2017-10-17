var event = msg.payload["events"][0];
if(event["message"]["type"] != "text"){
    return msg;
}
var message = event["message"]["text"];
var replyToken = event["replyToken"];
var replyMessage = {"type": "text", "text": message}
msg.payload = {"messages": [replyMessage], "replyToken": replyToken};
msg.headers  ={"Content-Type": "application/json", "Authorization": "Bearer XXXXX"};

return msg
