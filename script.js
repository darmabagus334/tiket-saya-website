// Data Paket
const paketData = [
    {
        nama: "Paket Standar",
        harga: "Rp 30.000",
        fitur: [
            "Film 2D semua judul",
            "Senin-Kamis",
            "Jam tayang sebelum 17.00",
            "Semua cabang bioskop"
        ]
    },
    {
        nama: "Paket Premium",
        harga: "Rp 50.000",
        fitur: [
            "Film 2D + 1 Popcorn",
            "Setiap hari termasuk weekend",
            "Kursi premium",
            "Free minum"
        ]
    }
];

// Fungsi menampilkan paket
function tampilkanPaket() {
    const container = document.querySelector('.paket-container');
    
    paketData.forEach(paket => {
        const card = document.createElement('div');
        card.className = 'paket-card';
        
        let fiturList = '';
        paket.fitur.forEach(fitur => {
            fiturList += `<li>${fitur}</li>`;
        });
        
        card.innerHTML = `
            <h3>${paket.nama}</h3>
            <p class="harga">${paket.harga}</p>
            <ul>${fiturList}</ul>
            <a href="booking.html?paket=${encodeURIComponent(paket.nama)}" class="cta-button">Pilih Paket</a>
        `;
        
        container.appendChild(card);
    });
}

// Jalankan saat halaman dimuat
window.onload = tampilkanPaket;
// Tangani form booking
document.getElementById('formPesan')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const paket = document.getElementById('paket').value;
    
    alert(`Terima kasih ${nama}! Pesanan paket ${paket} Anda telah diterima.`);
    
    // Reset form
    this.reset();
    
    // Redirect ke halaman utama setelah 3 detik
    setTimeout(() => {
        window.location.href = "index.html";
    }, 3000);
});

// Ambil parameter URL untuk pre-select paket
const urlParams = new URLSearchParams(window.location.search);
const selectedPaket = urlParams.get('paket');

if (selectedPaket && document.getElementById('paket')) {
    document.getElementById('paket').value = 
        selectedPaket.includes('Standar') ? 'standar' : 'premium';
}