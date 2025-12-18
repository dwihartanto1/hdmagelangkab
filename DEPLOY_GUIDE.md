# Panduan Deploy Astro (Mode SSR) ke CyberPanel

Karena kita sudah mengubah website menjadi **Server-Side Rendering (SSR)** agar data Contentful otomatis update, langkah deploy-nya sedikit berbeda.

## Langkah 1: Persiapan di CyberPanel
1.  Login ke CyberPanel.
2.  Buat Website baru (**Websites > Create Website**).
3.  Masuk ke **Websites > List Websites > Manage** pada domain Anda.
4.  Scroll ke bawah dan klik **Setup Node.js App**.
5.  Isi form sebagai berikut:
    *   **App Root**: `/home/domainanda.com/public_html`
    *   **App URL**: (biarkan default `/`)
    *   **App Startup File**: `dist/server/entry.mjs`
6.  Klik **Create**.

## Langkah 2: Upload File Proyek
1.  Hapus semua file di folder `public_html` melalui File Manager.
2.  Upload **semua file proyek** Anda (kecuali folder `node_modules` dan `.git`).
3.  Pastikan file `.env` juga ikut terupload dengan API Key yang benar.

## Langkah 3: Install & Build di Server
Anda perlu menjalankan perintah terminal di CyberPanel (bisa via SSH atau Terminal di panel):
1.  Masuk ke folder proyek:
    ```bash
    cd /home/domainanda.com/public_html
    ```
2.  Install library:
    ```bash
    npm install
    ```
3.  Build proyek:
    ```bash
    npm run build
    ```

## Langkah 4: Jalankan Aplikasi
1.  Kembali ke menu **Setup Node.js App**.
2.  Klik tombol **Restart** atau **Start**.
3.  Website Anda sekarang aktif dan akan otomatis update datanya dari Contentful!

---
**Tips:** Jika Anda kesulitan dengan Setup Node.js di CyberPanel, Anda juga bisa menggunakan layanan seperti **Vercel** atau **Netlify** yang jauh lebih mudah (tinggal hubungkan ke GitHub dan selesai).
