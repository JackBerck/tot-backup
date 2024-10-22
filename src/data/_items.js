const foodAndDrinks = [
  {
    image:
      "https://cdn.rri.co.id/berita/Bengkalis/o/1723436571133-WhatsApp_Image_2024-08-12_at_11.16.24/ufi1v8emgcczn4j.jpeg",
    title: "Nasi padang",
    location: "Jln. Jenderal Soedirman",
    description:
      "Nasi Padang adalah hidangan tradisional Indonesia dari suku Minangkabau di Sumatera Barat. Hidangan ini terdiri dari nasi putih yang disajikan dengan berbagai macam lauk pauk yang sudah dimasak sebelumnya, termasuk rendang (daging sapi pedas), ayam pop (ayam goreng), dan berbagai sayuran serta sambal. Hidangan ini dikenal dengan rasa yang kaya dan penggunaan santan serta rempah-rempah.",
  },
  {
    image:
      "https://www.masakapahariini.com/wp-content/uploads/2024/04/Resep-Sate-Ayam-Madura.jpg",
    title: "Sate Ayam",
    location: "Jln. Malioboro",
    description:
      "Sate Ayam adalah hidangan populer di Indonesia yang terdiri dari potongan daging ayam yang ditusuk dengan tusukan bambu, kemudian dipanggang di atas arang dan disajikan dengan saus kacang yang lezat.",
  },
  {
    image:
      "https://awsimages.detik.net.id/community/media/visual/2024/02/14/resep-gado-gado-siram.jpeg?w=1200",
    title: "Gado-Gado",
    location: "Jln. Diponegoro",
    description:
      "Gado-Gado adalah salad tradisional Indonesia yang terdiri dari campuran sayuran rebus, tahu, tempe, dan lontong, disajikan dengan saus kacang yang kaya rasa.",
  },
  {
    image:
      "https://indonesiakaya.com/wp-content/uploads/2023/04/ren_Artboard_4.jpg",
    title: "Rendang",
    location: "Jln. Sudirman",
    description:
      "Rendang adalah hidangan daging sapi yang dimasak perlahan dengan santan dan rempah-rempah hingga empuk dan beraroma. Hidangan ini berasal dari Minangkabau, Sumatera Barat.",
  },
  {
    image:
      "https://cdn0-production-images-kly.akamaized.net/VTDiAj5ffuLCm1CEjR9VExObwkQ=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2763419/original/071857300_1553761217-shutterstock_1148354906.jpg",
    title: "Bakso",
    location: "Jln. Merdeka",
    description:
      "Bakso adalah bola daging yang terbuat dari campuran daging sapi giling dan tepung tapioka, disajikan dalam kuah kaldu yang gurih dengan mie, tahu, dan sayuran.",
  },
  {
    image:
      "https://asset.kompas.com/crops/MrdYDsxogO0J3wGkWCaGLn2RHVc=/84x60:882x592/750x500/data/photo/2021/11/17/61949959e07d3.jpg",
    title: "Nasi Goreng",
    location: "Jln. Thamrin",
    description:
      "Nasi Goreng adalah hidangan nasi yang digoreng dengan bumbu-bumbu seperti kecap manis, bawang putih, dan cabai, sering disajikan dengan telur mata sapi dan acar.",
  },
  {
    image:
      "https://images.tokopedia.net/img/JFrBQq/2023/11/17/9f4811eb-7151-47c5-8b97-aa7717218534.jpg",
    title: "Mie Goreng",
    location: "Jln. Gatot Subroto",
    description:
      "Mie Goreng adalah hidangan mie yang digoreng dengan bumbu-bumbu seperti kecap manis, bawang putih, dan sayuran, sering disajikan dengan telur dan ayam atau udang.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wWWJt1Rr5ry8IRzb4eRbd3W6WLR2TNQu7g&s",
    title: "Pempek",
    location: "Jln. Palembang",
    description:
      "Pempek adalah makanan khas Palembang yang terbuat dari ikan dan tepung sagu, disajikan dengan kuah cuka yang asam dan pedas. Terdapat berbagai jenis pempek seperti pempek kapal selam dan pempek lenjer.",
  },
];

const events = [
  {
    image:
      "https://www.sahabatyatim.com/wp-content/uploads/2021/05/panti-asuhan-min.jpg",
    title: "Bakti sosial di panti asuhan",
    location: "Jln. Jenderal Soedirman",
    description:
      "Bakti sosial di panti asuhan adalah kegiatan sukarela yang dilakukan oleh sekelompok orang untuk membantu anak-anak yatim piatu dan dhuafa di panti asuhan.",
  },
  {
    image:
      "https://kominfosandi.kamparkab.go.id/wp-content/uploads/2021/09/IMG-20210924-WA0074.jpg",
    title: "Jumat berkah",
    location: "Masjid Agung",
    description:
      "Jumat Berkah adalah kegiatan berbagi makanan gratis setiap hari Jumat kepada jamaah masjid dan masyarakat sekitar yang membutuhkan.",
  },
  {
    image:
      "https://asset-2.tstatic.net/tribunnews/foto/bank/images/aruna-donasi.jpg",
    title: "Donasi buku untuk anak-anak",
    location: "Perpustakaan Daerah",
    description:
      "Donasi buku untuk anak-anak adalah kegiatan pengumpulan buku bacaan untuk disumbangkan ke perpustakaan daerah dan sekolah-sekolah yang membutuhkan.",
  },
  {
    image:
      "https://unik-kediri.ac.id/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-28-at-10.47.25.jpeg",
    title: "Pembagian sembako",
    location: "Balai Desa",
    description:
      "Pembagian sembako adalah kegiatan rutin yang dilakukan untuk membantu masyarakat kurang mampu dengan memberikan paket sembako gratis.",
  },
  {
    image:
      "https://pict.sindonews.net/dyn/1280/salsabila/photo/2023/03/24/1/42671/tradisi-buka-puasa-bersama-di-masjid-qzt.jpg",
    title: "Buka puasa bersama",
    location: "Lapangan Kota",
    description:
      "Buka puasa bersama adalah kegiatan berbagi makanan untuk berbuka puasa bersama masyarakat sekitar selama bulan Ramadan.",
  },
  {
    image:
      "https://kkn.uad.ac.id/wp-content/uploads/2022/07/IMG_0170-1536x1024.jpg",
    title: "Pengobatan gratis",
    location: "Puskesmas",
    description:
      "Pengobatan gratis adalah kegiatan sosial yang menyediakan layanan kesehatan gratis untuk masyarakat kurang mampu.",
  },
];

export { foodAndDrinks, events };
