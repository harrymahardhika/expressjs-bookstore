# ExpressJS: Book Library

## Instalasi

1. Clone repository ini
2. Jalankan perintah `npm install` untuk menginstall semua dependency
3. Salin file `.env.example` menjadi `.env`, kemudian sesuaikan konfigurasi database Anda
4. Jalankan perintah `npm start` untuk menjalankan aplikasi

## Penjelasan Struktur Direktori Aplikasi ExpressJS

1. **app**: Ini adalah direktori utama dari aplikasi Anda.

2. **database.js**: Ini adalah file yang berisi konfigurasi dan pengaturan untuk koneksi database aplikasi. File ini digunakan untuk menghubungkan aplikasi dengan sistem database, seperti MongoDB atau SQL.

3. **repositories**: Direktori ini berisi file JavaScript untuk berbagai kelas repository, yang bertugas untuk berinteraksi dengan database dan mengelola data. Setiap file dalam direktori ini berkaitan dengan entitas tertentu dalam aplikasi Anda.

   - **Author.js**: Ini adalah repository yang digunakan untuk mengelola data terkait penulis.
   - **Book.js**: Repository untuk mengelola data buku.
   - **Category.js**: Repository untuk mengelola data terkait kategori atau genre buku.
   - **Publisher.js**: Repository untuk mengelola data penerbit.

4. **router.js**: File ini adalah router utama dalam aplikasi Anda. Ia bertanggung jawab untuk mengatur rute dan navigasi antara berbagai bagian aplikasi Anda.

5. **routes**: Direktori ini berisi file rute yang mendefinisikan rute khusus dan pengendali rute untuk aplikasi Anda. Setiap file berhubungan dengan seperangkat rute terkait.

   - **authors.js**: Mengelola rute terkait penulis, seperti menampilkan daftar penulis, menambahkan penulis baru, dan mengedit informasi penulis.
   - **books.js**: Mengelola rute terkait buku, termasuk menampilkan daftar buku, menambahkan buku baru, dan memperbarui detail buku.
   - **categories.js**: Menangani rute untuk mengelola kategori atau genre buku.
   - **publishers.js**: Berisi rute untuk mengelola penerbit.

6. **support**: Direktori ini berisi file utilitas atau dukungan untuk aplikasi Anda.

   - **Repository.js**: Ini adalah file dukungan yang memberikan fungsionalitas tambahan kepada kelas repository dalam direktori "repositories".
   - **Validator.js**: File ini digunakan untuk menangani validasi data dan memastikan integritas data dalam aplikasi Anda.

7. **validators**: Direktori ini berisi kelas atau fungsi validasi data, yang memastikan bahwa data yang diproses dalam aplikasi Anda sesuai dan memenuhi kriteria yang diperlukan.

   - **AuthorValidator.js**: Berisi aturan validasi dan fungsi untuk data terkait penulis.
   - **BookValidator.js**: Menangani validasi data untuk data buku.
   - **CategoryValidator.js**: Digunakan untuk validasi data terkait kategori atau genre.
   - **PublisherValidator.js**: Menyediakan aturan validasi untuk data terkait penerbit.

Dengan struktur direktori ini, Anda memiliki landasan untuk memahami bagaimana aplikasi JavaScript Anda terorganisir, termasuk komponen-komponen kunci yang digunakan dalam pengelolaan database buku dan informasi terkait. Semoga ini membantu Anda sebagai pemula dalam pemrograman JavaScript!
