// 自动调整输入框高度
const input = document.getElementById('messageInput');
input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = input.scrollHeight + 'px';
});

// 处理键盘事件
function handleKeyPress(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
}

// 发送消息
function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (message) {
        // 添加用户消息
        addMessage(message, 'user');
        
        // 模拟机器人回复
        setTimeout(() => {
            addMessage('服务器繁忙，请稍后再试。');
        }, 2000);

        input.value = '';
        input.style.height = 'auto';
    }
}

// 添加消息到聊天窗口
function addMessage(text, sender) {
    const messages = document.getElementById('chatMessages');
    const timestamp = new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
    });

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `
        <div class="bubble">${text}</div>
        <div class="timestamp">${timestamp}</div>
    `;

    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}

// 初始化示例对话
window.onload = () => {
    setTimeout(() => {
        addMessage('欢迎使用聊天服务！', 'bot');
    }, 500);
};
// 消息持久化（使用localStorage）
function saveMessages() {
    const messages = document.getElementById('chatMessages').innerHTML;
    localStorage.setItem('chatHistory', messages);
}

// 加载历史消息
function loadMessages() {
    const saved = localStorage.getItem('chatHistory');
    if (saved) {
        document.getElementById('chatMessages').innerHTML = saved;
    }
}

// 在window.onload中调用
window.onload = () => {
    loadMessages();
    // ...原有初始化代码...
};

// 在addMessage函数最后添加
saveMessages();
function sanitizeInput(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}