'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Movies', [
      {
        tittle: "Baytown Outlaws, The",
        synopsis: "Drainage of Right Finger Phalangeal Joint, Percutaneous Endoscopic Approach",
        trailerUrl: "http://dummyimage.com/218x100.png/dddddd/000000",
        imgUrl: "http://dummyimage.com/114x100.png/dddddd/000000",
        status: true,
        rating: "Honorable",
        createdAt: new Date(),
       updatedAt: new Date()
      }, {
        tittle: "Obsession",
        synopsis: "Revision of Autologous Tissue Substitute in Left Tibia, External Approach",
        trailerUrl: "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
        imgUrl: "http://dummyimage.com/119x100.png/ff4444/ffffff",
        status: true,
        rating: "Mr",
        createdAt: new Date(),
       updatedAt: new Date()
      }, {
        tittle: "Lorna's Silence (Le silence de Lorna)",
        synopsis: "Destruction of Left Abdomen Bursa and Ligament, Percutaneous Endoscopic Approach",
        trailerUrl: "http://dummyimage.com/236x100.png/5fa2dd/ffffff",
        imgUrl: "http://dummyimage.com/123x100.png/5fa2dd/ffffff",
        status: true,
        rating: "Rev",
        createdAt: new Date(),
       updatedAt: new Date()
      }, {
        tittle: "The Rebel",
        synopsis: "Drainage of Trachea with Drainage Device, Via Natural or Artificial Opening Endoscopic",
        trailerUrl: "http://dummyimage.com/171x100.png/dddddd/000000",
        imgUrl: "http://dummyimage.com/146x100.png/cc0000/ffffff",
        status: false,
        rating: "Mrs",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        tittle: "Northwest",
        synopsis: "Introduction of Analgesics, Hypnotics, Sedatives into Lower GI, Via Natural or Artificial Opening Endoscopic",
        trailerUrl: "http://dummyimage.com/207x100.png/ff4444/ffffff",
        imgUrl: "http://dummyimage.com/150x100.png/ff4444/ffffff",
        status: true,
        rating: "Rev",
        createdAt: new Date(),
       updatedAt: new Date()
      }
    
    ], {
      
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Movie', null, {});
  }
};
