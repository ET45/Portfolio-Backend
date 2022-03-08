"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "characters",
      [
        {
          name: "CryptoVenturer #01 Ellie",
          image:
            "https://lh3.googleusercontent.com/yjhkRWjTetPLGuzD8MI8DZG7DNaqE61D7o1enUcswbPpyVsv8N4xtV7-20TMim4mr5gbby7eWiATR6UR6BqbaFwNrLbK_4LCxfZV=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443548794359644161",
          description: "Wise hunter from a village of Farncombe.",
          class: "Hunter",
          skill: "Arrow Burst",
          gender: "Female",
          hometown: "Farncombe",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 4,
        },
        {
          name: "CryptoVenturer #02 Elowen",
          image:
            "https://lh3.googleusercontent.com/qimngYMuDvmIDpid9jQsM5x6FdMzTph_3Sooy0bRG6l5keOfbmtezpbxwWI0pRhmQruxNxCae5UT2IrKKoH9koG7yIU4QNnE3Y0x38c=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443549893871271937",
          description:
            "Proud Knight and the general of the town guards of Halsworthy.",
          class: "Knight",
          skill: "Analytic Leadership",
          gender: "Male",
          hometown: "Halsworthy",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 1,
        },
        {
          name: "CryptoVenturer #03 William",
          image:
            "https://lh3.googleusercontent.com/j6je1x0wV5az_BeLGW0AN6vx9zbQnRVUwY_wwLqv8lDXY98Oe1gOUmCsLytCxou9QJsHlF_c3_czgVfh_9p5GWeutzggLcalHzYj=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443550993382899713",
          description: "Leader of the Purely Red rebel band.",
          class: "Bandit",
          skill: "Intimidate",
          gender: "Male",
          hometown: "Berxley Village",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 2,
        },
        {
          name: "CryptoVenturer #04 Harked",
          image:
            "https://lh3.googleusercontent.com/rEyVXXt0rekFoy0LPyFStsgMIHj_lwfIxB7w21sAem3ZpEeWfNdmwaBLGQgIpjYwwZgobw8VdUKona4EF5A43_R2e9Rr-0zriXMSUg=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443552092894527489",
          description:
            "Captain of the barbarian ship Twilight of the Axe Gods.",
          class: "Barbarian",
          skill: "Rage",
          gender: "Male",
          hometown: "Unknown",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 7,
        },
        {
          name: "CryptoVenturer #05 Bellmoral",
          image:
            "https://lh3.googleusercontent.com/EQnwnUyKPM6Akzg_NKFj27xMQxq3elWDm8iDlE5NtuCiNIkYQipsc-X5C48Oc1meqvuam2Pb98TzxL4ksj1dPalk19QnABL7d-zJ=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443553192406155265",
          description:
            "Skilled diplomat of the barbarian ship Twilight of the Axe Gods and a trusty ally of Captain Harked.",
          class: "Diplomat",
          skill: "Persuasion",
          gender: "Male",
          hometown: "Unknown",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 7,
        },
        {
          name: "CryptoVenturer #06 Tsunenobu",
          image:
            "https://lh3.googleusercontent.com/3FC5lkDdp_u-9CImCT32W44IkfajDEpfri0UgzU5nnXRX-01xlT9Q4IZgigUAsGH1EUWuV3ZUZMyDVIuVaW61Ubkiu3DVchJPfeY=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443554291917783041",
          description:
            "A skilled Samurai bodyguard from a distant land, raised in Yahaba Sword School.",
          class: "Samurai",
          skill: "Bleeding Edge",
          gender: "Male",
          hometown: "Kentsukawa",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 3,
        },
        {
          name: "CryptoVenturer #07 Hannelore",
          image:
            "https://lh3.googleusercontent.com/1bslWnCKx9WFY7TWqJGB-CZBgBnL3rr4fV0Doq0vt8a5-1sHvtB__SqPJMW7MSUMJbPgw5F_mImvwdIUmaSqrYI5ivz6IOEqd4P05w=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443555391429410817",
          description:
            "A paladin raised in the Temple of Theosaria. Known as Lilacward because of her choice of armor.",
          class: "Paladin",
          skill: "Holy Impalement",
          gender: "Female",
          hometown: "Theosaria",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 6,
        },
        {
          name: "CryptoVenturer #08 Corby",
          image:
            "https://lh3.googleusercontent.com/PxdAYDKVJwho6HmderQd8Q5rkbtdRipL9WcbkGvMeN23bpq1KVABNWEuQrdBaaVKQt-xUOGaQ_29_JV-3wFbnAbqyGodxBEWNdhmnw=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443556490941038593",
          description: "A young gate guardian from Halsworthy.",
          class: "Fighter",
          skill: "Shield Bash",
          gender: "Male",
          hometown: "Halsworthy",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 1,
        },
        {
          name: "CryptoVenturer #09 Donovan",
          image:
            "https://lh3.googleusercontent.com/tIrZi0ODTSxk9yf8sXT1s4STwpt3Gf4l2MBy_sUW7VYjJ5A0US6pW1KfmAnsf5SMuOETGPTb41JFZNnU8__WC87I4NHp3uJfSfvPIQ=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443557590452666369",
          description:
            "Second in command of the Purely Red rebel band. Lost his eye protecting William, his childhood friend.",
          class: "Rogue",
          skill: "Oathbreaker's Backstab",
          gender: "Male",
          hometown: "Berxley Village",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 2,
        },
        {
          name: "CryptoVenturer #10 Lonnie",
          image:
            "https://lh3.googleusercontent.com/diD87k2Yc8PpwBPFo3vUWFyCDTDSPRtsCtyM1vbS2k5_Kd0Cdhin9RjFnVD-iWYyFYBsGJ84qtr3neugQDBx3ro1r3D41XOU59aDfw=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443558689964294145",
          description:
            "A Merchant with a secret mission given by the rulers of Halsworthy.",
          class: "Spy",
          skill: "Disguise",
          gender: "Male",
          hometown: "Halsworthy",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 1,
        },
        {
          name: "CryptoVenturer #11 Shirai",
          image:
            "https://lh3.googleusercontent.com/m9NAonCG-_NR7GIzDAW1baty1UcuyIHSryO1P4UoLQ5HRsMmb_Wii69dv3At_G_6PPLYyESv-qDF7FRFNXsoaLXKFUVL-OjmQ1YL=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443559789475921921",
          description:
            "A Reaper of souls from the misty lands of Kentsukawa, cursed by the evil spirits, he now has to collect souls to redeem himself.",
          class: "Reaper",
          skill: "Soul Reaper",
          gender: "Male",
          hometown: "Kentsukawa",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 3,
        },
        {
          name: "CryptoVenturer #12 Aidan",
          image:
            "https://lh3.googleusercontent.com/UHwFju0yb1vrex7HDLa4sNy_YnsRSGn0v5ZlgCnCpYW0wrp9cQG2n5swYq_b-BQ513I4Xfrmg7APRQiwv-Jvqe7t5_eBSdB_9ZOp2g=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443560888987549697",
          description:
            "A strong, proud, noble-born knight that serves Halsworthy. He is known by many as the Lawful Blade.",
          class: "Noble Knight",
          skill: "Devastating Strike",
          gender: "Male",
          hometown: "Halsworthy",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 1,
        },
        {
          name: "CryptoVenturer #13 Ayako",
          image:
            "https://lh3.googleusercontent.com/a-A7bZ67-iECWAdpxwf68uuXpwCd6vduXQQHMVOVrlcoD6r6Wa_IRN2vflzT6GU1SertQr6U1io1xV2S5qyrQMnfa9G7_EbT5mAbKw=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443561988499177473",
          description:
            "A spy sent by the Kentsukawan authorities to gather intelligence from Halsworthy nobles.",
          class: "Spy",
          skill: "Charm",
          gender: "Female",
          hometown: "Kentsukawa",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 3,
        },
        {
          name: "CryptoVenturer #14 Gylbart",
          image:
            "https://lh3.googleusercontent.com/yZ1wxaE2dUxl409qqnTOPjDFGmlbG0a7Jdbwi379WK3S4zlkXiyFlUfv7p0XdTOK4sMaUZYSu6X5h4UAfMximHOidcAaYHUxb2V_sA=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443563088010805249",
          description:
            "A Halsworthian knight who is the star of the elite corps, chosen from the strongest knights that have proven themselves in the field.",
          class: "Knight",
          skill: "Behead",
          gender: "Male",
          hometown: "Halsworthy",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 1,
        },
        {
          name: "CryptoVenurer #15 Tomas",
          image:
            "https://lh3.googleusercontent.com/3-qawpSeSMxFeQ5Qzs08rFC-Olt6SLwqMraMHkhyUHx7PnaLstracH35_Tv87uEflStuxZswqi4wdN1mGRZ1xn1q4q-6p0ZEQQeP_Q=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443564187522433025",
          description:
            "Member of the Purely Red rebel band. A skilled swordsman.",
          class: "Bandit",
          skill: "Swift Sword",
          gender: "Male",
          hometown: "Berxley Village",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 2,
        },
        {
          name: "CryptoVenturer #16 Taulvel",
          image:
            "https://lh3.googleusercontent.com/k6sMEUH2f0jOvhPJCwsuEc-3l-PZYiQIQgDfBOrihT3PYj2amUg3MV3P4ZVGL7dDXov2W2y1PxTkNv2FZD4lD0tmvfBcs5HY2zRXbQ=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443565287034060801",
          description:
            "One-eyed mad archer of the Twilight of the Axe Gods barbarian ship.",
          class: "Hunter",
          skill: "One-eye Shot",
          gender: "Male",
          hometown: "Unkown",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 7,
        },
        {
          name: "CryptoVenturer #17 Bayley",
          image:
            "https://lh3.googleusercontent.com/iRQUYfhhARUCskyCuY30uYdIX4z_dZC3yI3FoVAZvyS8fmepvwpPgkgl6tDoyJSFnaFb2mX-V7FAx8RsLpbmK6-ceC_1pN-IRx0d=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443566386545688577",
          description:
            "Skilled warrior of Halsworthy town guards. Trained by the spear masters of Temple of Theosaria.",
          class: "Crusader",
          skill: "Pierce",
          gender: "Male",
          hometown: "Halsworthy",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 1,
        },
        {
          name: "CryptoVenturer #18 Bell",
          image:
            "https://lh3.googleusercontent.com/KwxuzWMBr1vIHL2nYW1iRIYeUumh9z06pRKlyu6pb2hUSdA9v7W1Q9RRp6jmrSD34CCNfwC97gOkPYDCk7Bpp32M6KssGLAgy5LMSg=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443567486057316353",
          description:
            "Farncombe village Alchemist that enjoys helping his fellow villagers using his knowledge and skills.",
          class: "Alchemist",
          skill: "Transmute",
          gender: "Male",
          hometown: "Farncombe",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 4,
        },
        {
          name: "CryptoVenturer #19 Nigel",
          image:
            "https://lh3.googleusercontent.com/NHm6uH6JWLDthT9pxAkR7GXdQpmp3-G0_TFdyFRGCH4Uw3VxajlHegistH3FFI7INZ39EOvbvTVFnGVlFGs8Yr_kdgyEH1vwv_rqCBo=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443568585568944129",
          description:
            "Former court scholar of Halsworthy, now venturing around at Eazatha as a hermit. His academic background and knowledge makes up for his lacking raw strength.",
          class: "Scholar",
          skill: "Academic Superiority",
          gender: "Male",
          hometown: "Halsworthy",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 1,
        },
        {
          name: "CryptoVenturer #20 Ubarin",
          image:
            "https://lh3.googleusercontent.com/XKKIyXsn7jbtF8KJbHF3Oc5Rv72D-BSO4AA_KbUA0QpDaTUvv8o90n4_qcQktJleEZTlgABF1LjUWUxJWUSKX7yd3P0wCIW2ogLp=w600",
          link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/72667608849864227059809180087652648768815904362030701562513443569685080571905",
          description:
            "Herbalist from a distant land. There are rumors about people who saw him use divine powers.",
          class: "Herbalist",
          skill: "Heaven's Cure",
          gender: "Male",
          hometown: "Lenita",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          locationId: 5,
        },
      ],
      {}
    );

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("characters", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
