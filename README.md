# HD Magelang

Layanan untuk mengonlinekan RDM Madrasah di Kabupaten Magelang.

Website ini menampilkan daftar madrasah dengan kategorisasi BA, RA, MI, MTs, MA. Setiap sekolah ditampilkan dalam card yang berisi logo dan nama, dengan link ke website masing-masing.

Data madrasah dikelola melalui Contentful CMS.

## Setup

1. Clone repository ini.
2. Install dependencies: `npm install`
3. Setup Contentful:
   - Buat account di [Contentful](https://contentful.com).
   - Content Type ID: `card`
   - Fields:
     - `namaMadrasah` (Short text)
     - `kategori` (Short text) - Nilai: BA, RA, MI, MTs, MA
     - `linkRdm` (Short text) - URL website
  *   `logo` (Media)

---
*Last updated: December 23, 2025*
4. Konfigurasi `.env`:
   - Isi `CONTENTFUL_SPACE_ID` dan `CONTENTFUL_ACCESS_TOKEN`.
5. Jalankan dev server: `npm run dev`
6. Build untuk production: `npm run build`

## Deployment (Vercel - Rekomendasi)

Ini adalah cara paling efisien. Konten akan **otomatis update** setiap kali halaman di-refresh.

1.  Simpan kode ini ke **GitHub**.
2.  Buka [Vercel](https://vercel.com) dan buat proyek baru.
3.  Hubungkan dengan repository GitHub Anda.
4.  Di bagian **Environment Variables**, masukkan:
    *   `CONTENTFUL_SPACE_ID`
    *   `CONTENTFUL_ACCESS_TOKEN`
5.  Klik **Deploy**.
6.  Selesai! Setiap kali Anda mengubah data di Contentful, cukup refresh website Anda untuk melihat hasilnya.

## Deployment (CyberPanel - Manual)

Jika tetap ingin menggunakan CyberPanel:
1.  Ubah `output: "server"` menjadi `output: "static"` di `astro.config.mjs`.
2.  Jalankan `npm run build`.
3.  Upload isi folder `dist` ke `public_html`.

## Tech Stack

- Astro
- Contentful CMS