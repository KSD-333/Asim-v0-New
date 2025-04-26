let chatVisible = false;

function toggleChat() {
    chatVisible = !chatVisible;
    document.querySelector('.chat-body').style.display = chatVisible ? 'block' : 'none';
    document.querySelector('.input-container').style.display = chatVisible ? 'flex' : 'none';
}

function processInput() {
    const userInput = document.getElementById('userInput');
    const crop = userInput.value.toLowerCase().trim();
    addUserMessage(crop);
    userInput.value = '';
    
    showTypingIndicator();
    
    setTimeout(() => {
        hideTypingIndicator();
        if (products[crop]) {
            showProductInfo(crop);
        } else {
            addBotMessage(`Sorry, I don't have information about ${crop}. Try asking about wheat, tomato, or potato!`);
        }
    }, 1000);
}

function showProductInfo(crop) {
    const product = products[crop];
    const info = `
        <strong>${product.name} Information:</strong><br>
        - Type: ${product.type}<br>
        - Growing Season: ${product.season}<br>
        - Growth Period: ${product.growth}<br>
        - Ideal Climate: ${product.climate}<br>
        - Soil Type: ${product.soil}<br>
        - Water Needs: ${product.water}
    `;
    addBotMessage(info);
}

function addUserMessage(text) {
    const chatBody = document.getElementById('chatBody');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message user-message';
    messageDiv.innerHTML = text;
    chatBody.appendChild(messageDiv);
    scrollToBottom();
}

function addBotMessage(text) {
    const chatBody = document.getElementById('chatBody');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message bot-message';
    messageDiv.innerHTML = text;
    chatBody.appendChild(messageDiv);
    scrollToBottom();
}

function showTypingIndicator() {
    document.getElementById('typing').style.display = 'block';
    scrollToBottom();
}

function hideTypingIndicator() {
    document.getElementById('typing').style.display = 'none';
}

function scrollToBottom() {
    const chatBody = document.getElementById('chatBody');
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Handle Enter key
document.getElementById('userInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') processInput();
});
