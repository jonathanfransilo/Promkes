document.addEventListener('DOMContentLoaded', () => {
    // Memastikan elemen ada sebelum mencoba mengaksesnya
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Jika tombol atau body tidak ditemukan, hentikan eksekusi script
    if (!themeToggleBtn || !body) {
        console.error("Elemen 'theme-toggle' atau 'body' tidak ditemukan. Pastikan ID dan struktur HTML sudah benar.");
        return; 
    }

    // Fungsi untuk mengubah tema
    function toggleTheme() {
        if (body.dataset.theme === 'light') {
            body.dataset.theme = 'dark';
            themeToggleBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun'); // Ganti ikon bulan ke matahari
        } else {
            body.dataset.theme = 'light';
            themeToggleBtn.querySelector('i').classList.replace('fa-sun', 'fa-moon'); // Ganti ikon matahari ke bulan
        }
        // Simpan preferensi tema ke localStorage
        localStorage.setItem('websiteTheme', body.dataset.theme);
    }

    // Periksa preferensi tema saat halaman dimuat
    const savedTheme = localStorage.getItem('websiteTheme');
    if (savedTheme) {
        body.dataset.theme = savedTheme;
        if (savedTheme === 'dark') {
            themeToggleBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        } else {
            themeToggleBtn.querySelector('i').classList.replace('fa-sun', 'fa-moon');
        }
    } else {
        // Jika belum ada preferensi, cek preferensi sistem operasi
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.dataset.theme = 'dark';
            themeToggleBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        }
    }

    // Tambahkan event listener ke tombol
    themeToggleBtn.addEventListener('click', toggleTheme);
});