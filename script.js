// Data Paket Tiket
const paketTiket = [
    {
        nama: "Tiket Reguler",
        harga: "Rp 30.000",
        fitur: [
            "Tiket 1 orang",
            "Bioskop standar",
            "Pilihan jam biasa"
        ]
    },
    {
        nama: "Tiket Eksekutif",
        harga: "Rp 50.000",
        fitur: [
            "Tiket 1 orang",
            "Bioskop nyaman",
            "Pilihan jam fleksibel",
            "Snack gratis"
        ]
    },
    {
        nama: "Tiket Keluarga",
        harga: "Rp 100.000",
        fitur: [
            "Untuk 4 orang",
            "Bioskop VIP",
            "Pilihan jam fleksibel",
            "Snack gratis",
            "Parkir gratis"
        ]
    }
];

// Fungsi untuk menampilkan paket tiket
function tampilkanPaket() {
    const container = document.querySelector('.paket-container');
    
    paketTiket.forEach(paket => {
        const card = document.createElement('div');
        card.className = 'paket-card';
        
        let fiturHTML = '';
        paket.fitur.forEach(fitur => {
            fiturHTML += `<li>${fitur}</li>`;
        });
        
        card.innerHTML = `
            <h3>${paket.nama}</h3>
            <div class="harga">${paket.harga}</div>
            <ul>${fiturHTML}</ul>
            <a href="booking.html" class="cta-button">Pesan Sekarang</a>
        `;
        
        container.appendChild(card);
    });
}

// Jalankan fungsi saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', tampilkanPaket);