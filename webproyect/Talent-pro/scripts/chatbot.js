// chatbot.js - Lógica básica para el chatbot de carreras

document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-chat');
    const chatWindow = document.getElementById('chat-window');

    if (chatInput && sendBtn && chatWindow) {
        sendBtn.addEventListener('click', function() {
            const userMsg = chatInput.value.trim();
            if (userMsg) {
                agregarMensaje('Tú', userMsg);
                // Respuesta simulada del bot
                setTimeout(() => {
                    agregarMensaje('Bot', 'Esta es una respuesta automática. Pronto podrás preguntar sobre carreras aquí.');
                }, 600);
                chatInput.value = '';
            }
        });
    }

    function agregarMensaje(remitente, mensaje) {
        const msgDiv = document.createElement('div');
        msgDiv.innerHTML = `<strong>${remitente}:</strong> ${mensaje}`;
        chatWindow.appendChild(msgDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
});