'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Hapus data lama (Opsional jika ingin memastikan tidak ada duplikasi)
    await queryInterface.bulkDelete('Movies', null, {});

    // Masukkan data baru
    await queryInterface.bulkInsert('Movies', [
      {
        tittle: "sibuta dari goa hantu",
        synopsis: "Si Buta dari Gua Hantu adalah karakter utama dalam serial cerita silat yang diciptakan oleh Ganes TH. Komik ini pertama kali terbit pada tahun 1967 dan diadaptasi menjadi film layar lebar pada tahun 1970",
        trailerUrl: "http://dummyimage.com/218x100.png/dddddd/000000",
        imgUrl: "http://dummyimage.com/114x100.png/dddddd/000000",
        status: "new",
        rating: "A",
        createdAt: new Date(),
       updatedAt: new Date()

      },
      {
        tittle: "Saur Sepuh",
        synopsis: "Berlatar di zaman Majapahit, film ini menceritakan tentang Bhre Wirabhumi yang mendirikan Kerajaan Pamotan untuk menandingi Majapahit. Brama Kumbara dari Kerajaan Madangkara mencoba mendamaikan perselisihan",
        trailerUrl: "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
        imgUrl: "http://dummyimage.com/119x100.png/ff4444/ffffff",
        status: "new",
        rating: "B",
        createdAt: new Date(),
       updatedAt: new Date()
      },
      // Tambahkan data lainnya sesuai kebutuhan
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Menghapus data yang dimasukkan pada up() jika migrasi di-undo
    await queryInterface.bulkDelete('Movies', null, {});
  }
};
