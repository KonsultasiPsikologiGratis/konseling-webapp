
function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (!message) return;

    addMessage("user", message);
    input.value = "";

    setTimeout(() => {
        const response = getBotResponse(message);
        addMessage("bot", response);
    }, 500);
}

function addMessage(sender, text) {
    const chatBox = document.getElementById("chatBox");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}`;
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    const lower = message.toLowerCase();
    if (lower.includes("sedih") || lower.includes("lelah")) {
        return "Aku di sini untuk mendengarkanmu. Kadang, istirahat sejenak adalah hal terbaik yang bisa kita lakukan.";
    } else if (lower.includes("sendiri")) {
        return "Kamu tidak sendiri. Banyak orang pernah merasakan hal yang sama. Aku bersamamu di sini.";
    } else if (lower.includes("terima kasih")) {
        return "Sama-sama 😊 Aku senang bisa membantumu.";
    } else {
        return "Aku mengerti. Ceritakan saja pelan-pelan. Aku mendengarkan.";
    }
}
