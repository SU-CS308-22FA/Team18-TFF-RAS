const referees = [
  {
    name: "Zorbay Küçük",
    // apiName: "Zorbay Kucuk",
    apiName: "Z. Küçük",
    id: "1385054",
    image:
      "https://img.a.transfermarkt.technology/portrait/big/17151-1591989130.jpeg?lm=1",
  },
  {
    name: "Yaşar Kemal Uğurlu",
    apiName: "Y. Uğurlu",
    id: "20554",
    image:
      "https://img.a.transfermarkt.technology/portrait/medium/351-1526478925.jpg?lm=1",
  },
  {
    name: "Yasin Kol",
    apiName: "Y. Kol",
    id: "1144469",
    image:
      "https://img.a.transfermarkt.technology/portrait/medium/5172-1592093561.jpeg?lm=1",
  },
  {
    name: "Volkan Bayarslan",
    apiName: "V. Bayarslan",
    id: "20204",
    image:
      "https://img.a.transfermarkt.technology/portrait/big/4569-1592093653.jpeg?lm=1",
  },
  {
    name: "Ümit Öztürk",
    apiName: "Ü. Öztürk",
    id: "1091989",
    image:
      "https://img.a.transfermarkt.technology/portrait/big/9552-1591989293.jpeg?lm=1",
  },
  {
    name: "Tugay Kaan Numanoğlu",
    apiName: "T. Numanoğlu",
    id: "1091799",
    image:
      "https://img.a.transfermarkt.technology/portrait/big/9954-1592093506.jpeg?lm=1",
  },
  {
    name: "Suat Arslanboğa",
    apiName: "S. Arslanboğa",
    id: "19445",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Suat_Arslanbo%C4%9Fa.JPG/640px-Suat_Arslanbo%C4%9Fa.JPG",
  },
  {
    name: "Sarper Barış Saka",
    apiName: "S. Saka",
    id: "1092081",
    image: "http://kayserispor.gen.tr/uploads/sarperbarissaka.jpg",
  },
  {
    name: "Mustafa Kürşad Filiz",
    apiName: "M. Filiz",
    id: "1091628",
    image:
      "https://i.goalzz.com/?i=o%2Fr%2F7%2F221%2Fmustafa-kursad-filiz-1.jpg",
  },
  {
    name: "Mete Kalkavan",
    apiName: "M. Kalkavan",
    id: "18972",
    image:
      "https://www.tff.org/Resources/TFF/Auto/78875f9f75334638bff3a5aadf58a761.jpg",
  },
  {
    name: "Mert Güzenge",
    apiName: "Mert Guzenge",
    id: "1140611",
    image: "http://kayserispor.gen.tr/uploads/mert-guzenge.jpg",
  },
  {
    name: "Kadir Sağlam",
    apiName: "K. Sağlam",
    id: "20668",
    image: "http://kayserispor.gen.tr/uploads/kadir-saglam.jpg",
  },
  {
    name: "Hüseyin Göçek",
    apiName: "H. Göçek",
    id: "19493",
    image:
      "https://img.a.transfermarkt.technology/portrait/big/964-1592093214.jpeg?lm=1",
  },
  {
    name: "Halil Umut Meler",
    apiName: "H. Meler",
    id: "21156",
    image:
      "https://www.tff.org/Resources/TFF/Auto/d34cd4b6c1c64fb6a49777e04341da96.png",
  },
  {
    name: "Erkan Özdamar",
    apiName: "E. Özdamar",
    id: "1144690",
    image: "http://kayserispor.gen.tr/uploads/erkan-ozdamar.jpg",
  },
  {
    name: "Çağdaş Altay",
    apiName: "Ç. Altay",
    id: "21019",
    image:
      "https://img.a.transfermarkt.technology/portrait/big/9821-1491668264.jpeg?lm=1",
  },
  {
    name: "Burak Şeker",
    apiName: "B. Şeker",
    id: "1090884",
    image: "http://kayserispor.gen.tr/uploads/burak-seker.jpg",
  },
  {
    name: "Bahattin Şimşek",
    apiName: "B. Şimşek",
    id: "1140355",
    image:
      "https://img.a.transfermarkt.technology/portrait/big/9565-1592093603.jpeg?lm=1",
  },
  {
    name: "Atilla Karaoğlan",
    apiName: "A. Karaoğlan",
    id: "1064324",
    image:
      "https://img.a.transfermarkt.technology/portrait/big/12534-1591989351.jpeg?lm=1",
  },
  {
    name: "Arda Kardeşler",
    apiName: "A. Kardeşler",
    id: "1152086",
    image:
      "https://img.a.transfermarkt.technology/portrait/big/9930-1565351940.jpg?lm=1",
  },
  {
    name: "Ali Şansalan",
    apiName: "A. Şansalan",
    id: "1141865",
    image:
      "https://www.tff.org/Resources/TFF/Auto/98ab90d0b38946d2b34b31e6e2825302.jpg",
  },
  {
    name: "Ali Palabıyık",
    apiName: "A. Palabıyık",
    id: "20160",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/2019-06-11_Fu%C3%9Fball%2C_M%C3%A4nner%2C_L%C3%A4nderspiel%2C_Deutschland-Estland_StP_2082_LR10_by_Stepro.jpg",
  },
  {
    name: "Abdulkadir Bitigen",
    id: "20372",
    apiName: "Abdulkadir Bitigen",
    image: "http://ankahaber.net/public/upload/Haber/11025/11025_12638.Jpeg",
  },
];

const ratingLabels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export { referees, ratingLabels };
