function openAnimalChat(doctorName) {
    if (!doctorName) {
        doctorName = "Dokter Hewan";
    }

    window.location.href = "/layanan/hewan/chat?doctor=" + encodeURIComponent(doctorName);
}

function openAnimalInfo() {
    window.location.href = "/layanan/hewan/info";
}

function openAnimalProduct() {
    window.location.href = "/toko";
}
