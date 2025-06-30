
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

    const umum = [
        "Aku ngerti banget perasaan kamu. Jangan sungkan cerita ya, aku siap dengerin.",
        "Semangat ya! Kamu pasti bisa melewati ini, aku percaya sama kamu.",
        "Jangan nyerah ya, setiap masalah pasti ada jalan keluarnya.",
        "Aku tahu ini sulit, tapi kamu lebih kuat dari yang kamu kira.",
        "Jangan lupa, kamu gak sendirian. Aku ada di sini buat kamu.",
        "Aku turut prihatin dengan apa yang kamu alami, tapi yakinlah semuanya akan baik-baik saja.",
        "Kamu hebat sudah berani cerita. Itu langkah awal yang baik.",
        "Jangan biarkan masalah ini menguasai dirimu, kamu lebih kuat dari itu.",
        "Aku bangga kamu sudah bertahan sampai sekarang. Teruslah berjuang!",
        "Aku yakin kamu bisa menemukan kebahagiaan lagi setelah ini."
    ];
    const kehilangan = [
        "Aku turut berduka atas kehilanganmu. Ingatlah kenangan indah bersamanya.",
        "Waktu akan menyembuhkan luka, tapi jangan lupakan dia. Jadikan kenangan itu penyemangat.",
        "Kehilangan memang berat, tapi kamu punya keluarga dan teman-teman yang sayang kamu.",
        "Jangan biarkan kesedihan menguasai dirimu. Dia akan selalu ada di hatimu.",
        "Kamu tidak sendirian dalam kesedihan ini, kita semua ada di sini untukmu."
    ];
    const cinta = [
        "Putus cinta itu bukan akhir dunia. Kamu berhak bahagia, cari kebahagiaanmu yang lain.",
        "Jangan biarkan sakit hati menghentikanmu untuk menemukan cinta sejati.",
        "Kamu berhak mendapatkan yang terbaik, jangan mau menerima kurang dari itu.",
        "Cinta yang tulus akan datang pada waktunya, jangan memaksakan.",
        "Kamu cantik dan berharga, jangan biarkan seseorang merusak itu."
    ];
    const kerja = [
        "Jangan stres dengan pekerjaan/sekolah. Kamu sudah berusaha keras.",
        "Ambil waktu istirahat sejenak, lalu kembali dengan semangat baru.",
        "Kamu pasti bisa melewati tantangan ini, jangan ragu dengan kemampuanmu.",
        "Jangan takut salah, jadikan kesalahan sebagai pelajaran.",
        "Ingat tujuanmu, fokus pada apa yang ingin kamu capai."
    ];
    const keluarga = [
        "Keluarga memang bisa jadi sumber masalah, tapi mereka juga tempatmu kembali.",
        "Bicarakan masalahmu dengan keluargamu, jangan dipendam sendiri.",
        "Kamu punya hak untuk bahagia, jangan biarkan keluarga menghalangimu.",
        "Cinta keluarga adalah yang terpenting, tapi jangan lupakan dirimu sendiri.",
        "Kamu tidak harus selalu sempurna di mata keluarga, yang penting kamu bahagia."
    ];
    const keuangan = [
        "Jangan terlalu khawatir dengan masalah keuangan. Kita akan cari solusinya bersama.",
        "Buat anggaran dan rencanakan pengeluaranmu. Itu akan sangat membantu.",
        "Jangan malu mencari bantuan, banyak orang yang mau membantu.",
        "Rezeki itu sudah diatur, jangan terlalu memikirkan hal yang di luar kendalimu.",
        "Fokus pada usahamu, rezeki akan datang pada waktunya."
    ];
    const mental = [
        "Aku tahu kamu sedang berjuang, tapi kamu tidak sendirian.",
        "Jangan ragu untuk mencari bantuan profesional jika kamu merasa kewalahan.",
        "Kamu berhak bahagia dan sehat secara mental. Jangan biarkan penyakit menguasaimu.",
        "Istirahatlah jika kamu butuh, jangan memaksakan diri.",
        "Kamu lebih kuat dari yang kamu kira, kamu bisa melewati ini."
    ];
    const bullying = [
        "Aku turut prihatin kamu mengalami perundungan. Kamu tidak pantas diperlakukan seperti itu.",
        "Jangan pernah merasa sendirian. Banyak orang yang peduli padamu.",
        "Laporkan perundungan yang kamu alami, jangan biarkan mereka terus menyakitimu."
    ];

    if (lower.includes("kehilangan")) return random(kehilangan);
    if (lower.includes("cinta") || lower.includes("putus")) return random(cinta);
    if (lower.includes("kerja") || lower.includes("sekolah") || lower.includes("tugas")) return random(kerja);
    if (lower.includes("keluarga")) return random(keluarga);
    if (lower.includes("uang") || lower.includes("keuangan")) return random(keuangan);
    if (lower.includes("mental") || lower.includes("depresi") || lower.includes("stres")) return random(mental);
    if (lower.includes("bully") || lower.includes("dibully") || lower.includes("perundungan")) return random(bullying);

    return random(umum);
}

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
