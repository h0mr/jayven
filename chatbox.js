document.addEventListener('DOMContentLoaded', function() {
    const chatWindow = document.getElementById('chat-window');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    const preConfiguredMessages = [
        "Hello! How can I assist you today?",
        "I'm just a simple assistant here to chat with you!",
        "Feel free to ask me anything about Javen's portfolio or projects.",
        "You can also check out Javen's contact page for more info!",
        "Have a great day!"
    ];

    let messageIndex = 0;

    function addMessage(message, type) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', type);
        messageElement.textContent = message;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function sendUserMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, 'user-message');
            userInput.value = '';
            setTimeout(sendBotMessage, 1000);
        }
    }

    function sendBotMessage() {
        if (messageIndex < preConfiguredMessages.length) {
            addMessage(preConfiguredMessages[messageIndex], 'bot-message');
            messageIndex++;
        }
    }

    sendBtn.addEventListener('click', sendUserMessage);

    userInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });
});