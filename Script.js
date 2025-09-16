function sendMessage() {
    let userInput = document.getElementById('user-input').value;
    let chatBox = document.getElementById('chat-box');
    let botResponse = getResponse(userInput);
    chatBox.innerHTML += "<p><b>You:</b> " + userInput + "</p>";
    chatBox.innerHTML += "<p><b>Bot:</b> " + botResponse + "</p>";
    document.getElementById('user-input').value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(text) {
    text = text.toLowerCase();
    if (text.includes("hello")) return "Hi! How are you?";
    if (text.includes("name")) return "I'm Chatty Bot 😎";
    if (text.includes("how are you")) return "I am good! Thanks for asking 😊";
    return "I didn't understand 😅";
}
