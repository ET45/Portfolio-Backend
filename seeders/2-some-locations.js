"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "locations",
      [
        {
          name: "Halsworthy",
          description:
            "The largest and most powerfull city of the world of Eazatha!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Berxley Village",
          description: "One of the productive villages of Halsworthy.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kentsukawa",
          description: "Large island city with a uniqe tradition and culture.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Farncombe",
          description: "Halsworthy's village that famed with it's hunters.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lenita",
          description: "Huge land with many diffrent tribes.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Theosaria",
          description: "Small city with temples that that raise paladin.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Unknown",
          description: "For unspecified or mysterious backgrounds.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("locations", null, {});
  },
};
