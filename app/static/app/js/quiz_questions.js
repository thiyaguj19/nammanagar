const QUIZ_QUESTIONS = [
  {
    "q": "Which planet is known as the Red Planet?",
    "options": [
      "Venus",
      "Mars",
      "Jupiter",
      "Saturn"
    ],
    "answer": 1
  },
  {
    "q": "What is the chemical symbol for Oxygen?",
    "options": [
      "Ox",
      "O",
      "O2",
      "Og"
    ],
    "answer": 1
  },
  {
    "q": "What organ pumps blood through the human body?",
    "options": [
      "Lungs",
      "Brain",
      "Heart",
      "Liver"
    ],
    "answer": 2
  },
  {
    "q": "What is the boiling point of water at sea level?",
    "options": [
      "90°C",
      "100°C",
      "120°C",
      "80°C"
    ],
    "answer": 1
  },
  {
    "q": "Which gas do plants absorb during photosynthesis?",
    "options": [
      "Oxygen",
      "Nitrogen",
      "Carbon Dioxide",
      "Hydrogen"
    ],
    "answer": 2
  },
  {
    "q": "What is the hardest natural substance on Earth?",
    "options": [
      "Gold",
      "Iron",
      "Diamond",
      "Platinum"
    ],
    "answer": 2
  },
  {
    "q": "How many continents are there on Earth?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 2
  },
  {
    "q": "What is the largest ocean on Earth?",
    "options": [
      "Atlantic",
      "Indian",
      "Arctic",
      "Pacific"
    ],
    "answer": 3
  },
  {
    "q": "Which element has the symbol 'Fe'?",
    "options": [
      "Iron",
      "Gold",
      "Silver",
      "Fluorine"
    ],
    "answer": 0
  },
  {
    "q": "What is the speed of light in vacuum (approx)?",
    "options": [
      "300,000 km/s",
      "150,000 km/s",
      "1,000,000 km/s",
      "500,000 km/s"
    ],
    "answer": 0
  },
  {
    "q": "What is the capital city of France?",
    "options": [
      "Berlin",
      "Madrid",
      "Paris",
      "Rome"
    ],
    "answer": 2
  },
  {
    "q": "Which country is home to the Great Barrier Reef?",
    "options": [
      "Brazil",
      "Australia",
      "India",
      "USA"
    ],
    "answer": 1
  },
  {
    "q": "What is the smallest country in the world?",
    "options": [
      "Monaco",
      "Vatican City",
      "Malta",
      "San Marino"
    ],
    "answer": 1
  },
  {
    "q": "Which river is the longest in the world?",
    "options": [
      "Amazon",
      "Nile",
      "Yangtze",
      "Mississippi"
    ],
    "answer": 1
  },
  {
    "q": "Mount Everest is located in which mountain range?",
    "options": [
      "Andes",
      "Alps",
      "Himalayas",
      "Rockies"
    ],
    "answer": 2
  },
  {
    "q": "What is the capital of Japan?",
    "options": [
      "Seoul",
      "Beijing",
      "Tokyo",
      "Bangkok"
    ],
    "answer": 2
  },
  {
    "q": "Which desert is the largest hot desert in the world?",
    "options": [
      "Gobi",
      "Kalahari",
      "Sahara",
      "Atacama"
    ],
    "answer": 2
  },
  {
    "q": "What is the capital of Canada?",
    "options": [
      "Toronto",
      "Ottawa",
      "Vancouver",
      "Montreal"
    ],
    "answer": 1
  },
  {
    "q": "Who wrote 'Romeo and Juliet'?",
    "options": [
      "William Shakespeare",
      "Charles Dickens",
      "Mark Twain",
      "Jane Austen"
    ],
    "answer": 0
  },
  {
    "q": "Who was the first President of the United States?",
    "options": [
      "Thomas Jefferson",
      "George Washington",
      "Abraham Lincoln",
      "John Adams"
    ],
    "answer": 1
  },
  {
    "q": "In which year did World War II end?",
    "options": [
      "1943",
      "1945",
      "1950",
      "1918"
    ],
    "answer": 1
  },
  {
    "q": "Who painted the Mona Lisa?",
    "options": [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #23: What is 36 - 21?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #24: What is 34 + 39?",
    "options": [
      "68",
      "73",
      "75",
      "83"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #25: What is 15 × 65?",
    "options": [
      "975",
      "987",
      "965",
      "980"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #26: What is 48 - 30?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #27: What is 64 + 36?",
    "options": [
      "95",
      "100",
      "102",
      "110"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #28: What is 72 × 46?",
    "options": [
      "3312",
      "3324",
      "3302",
      "3317"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #29: What is 77 - 25?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #30: What is 25 + 26?",
    "options": [
      "46",
      "51",
      "53",
      "61"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #31: What is 56 × 54?",
    "options": [
      "3024",
      "3036",
      "3014",
      "3029"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #32: What is 43 - 22?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #33: What is 27 + 86?",
    "options": [
      "108",
      "113",
      "115",
      "123"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #34: What is 35 × 97?",
    "options": [
      "3395",
      "3407",
      "3385",
      "3400"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #35: What is 97 - 40?",
    "options": [
      "60",
      "55",
      "57",
      "65"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #36: What is 32 + 54?",
    "options": [
      "81",
      "86",
      "88",
      "96"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #37: What is 79 × 95?",
    "options": [
      "7505",
      "7517",
      "7495",
      "7510"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #38: What is 51 - 32?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #39: What is 37 + 31?",
    "options": [
      "63",
      "68",
      "70",
      "78"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #40: What is 69 × 65?",
    "options": [
      "4485",
      "4497",
      "4475",
      "4490"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #41: What is 80 - 28?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #42: What is 83 + 88?",
    "options": [
      "166",
      "171",
      "173",
      "181"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #43: What is 67 × 29?",
    "options": [
      "1943",
      "1955",
      "1933",
      "1948"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #44: What is 56 - 34?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #45: What is 26 + 74?",
    "options": [
      "95",
      "100",
      "102",
      "110"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #46: What is 98 × 38?",
    "options": [
      "3724",
      "3736",
      "3714",
      "3729"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #47: What is 80 - 53?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #48: What is 22 + 93?",
    "options": [
      "110",
      "115",
      "117",
      "125"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #49: What is 22 × 84?",
    "options": [
      "1848",
      "1860",
      "1838",
      "1853"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #50: What is 90 - 46?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #51: What is 22 + 42?",
    "options": [
      "59",
      "64",
      "66",
      "74"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #52: What is 42 × 80?",
    "options": [
      "3360",
      "3372",
      "3350",
      "3365"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #53: What is 26 - 18?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #54: What is 91 + 46?",
    "options": [
      "132",
      "137",
      "139",
      "147"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #55: What is 63 × 54?",
    "options": [
      "3402",
      "3414",
      "3392",
      "3407"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #56: What is 69 - 12?",
    "options": [
      "60",
      "55",
      "57",
      "65"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #57: What is 76 + 95?",
    "options": [
      "166",
      "171",
      "173",
      "181"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #58: What is 82 × 29?",
    "options": [
      "2378",
      "2390",
      "2368",
      "2383"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #59: What is 81 - 44?",
    "options": [
      "40",
      "35",
      "37",
      "45"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #60: What is 42 + 79?",
    "options": [
      "116",
      "121",
      "123",
      "131"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #61: What is 39 × 89?",
    "options": [
      "3471",
      "3483",
      "3461",
      "3476"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #62: What is 89 - 86?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #63: What is 72 + 57?",
    "options": [
      "124",
      "129",
      "131",
      "139"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #64: What is 62 × 90?",
    "options": [
      "5580",
      "5592",
      "5570",
      "5585"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #65: What is 58 - 10?",
    "options": [
      "51",
      "46",
      "48",
      "56"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #66: What is 53 + 35?",
    "options": [
      "83",
      "88",
      "90",
      "98"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #67: What is 49 × 45?",
    "options": [
      "2205",
      "2217",
      "2195",
      "2210"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #68: What is 50 - 35?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #69: What is 64 + 29?",
    "options": [
      "88",
      "93",
      "95",
      "103"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #70: What is 86 × 64?",
    "options": [
      "5504",
      "5516",
      "5494",
      "5509"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #71: What is 70 - 26?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #72: What is 26 + 74?",
    "options": [
      "95",
      "100",
      "102",
      "110"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #73: What is 57 × 38?",
    "options": [
      "2166",
      "2178",
      "2156",
      "2171"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #74: What is 24 - 21?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #75: What is 53 + 90?",
    "options": [
      "138",
      "143",
      "145",
      "153"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #76: What is 59 × 51?",
    "options": [
      "3009",
      "3021",
      "2999",
      "3014"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #77: What is 66 - 37?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #78: What is 12 + 34?",
    "options": [
      "41",
      "46",
      "48",
      "56"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #79: What is 51 × 60?",
    "options": [
      "3060",
      "3072",
      "3050",
      "3065"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #80: What is 65 - 46?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #81: What is 22 + 12?",
    "options": [
      "29",
      "34",
      "36",
      "44"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #82: What is 56 × 93?",
    "options": [
      "5208",
      "5220",
      "5198",
      "5213"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #83: What is 79 - 12?",
    "options": [
      "70",
      "65",
      "67",
      "75"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #84: What is 57 + 49?",
    "options": [
      "101",
      "106",
      "108",
      "116"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #85: What is 42 × 68?",
    "options": [
      "2856",
      "2868",
      "2846",
      "2861"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #86: What is 94 - 34?",
    "options": [
      "63",
      "58",
      "60",
      "68"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #87: What is 29 + 47?",
    "options": [
      "71",
      "76",
      "78",
      "86"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #88: What is 40 × 87?",
    "options": [
      "3480",
      "3492",
      "3470",
      "3485"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #89: What is 90 - 29?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #90: What is 21 + 36?",
    "options": [
      "52",
      "57",
      "59",
      "67"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #91: What is 14 × 78?",
    "options": [
      "1092",
      "1104",
      "1082",
      "1097"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #92: What is 98 - 49?",
    "options": [
      "52",
      "47",
      "49",
      "57"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #93: What is 52 + 22?",
    "options": [
      "69",
      "74",
      "76",
      "84"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #94: What is 10 × 52?",
    "options": [
      "520",
      "532",
      "510",
      "525"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #95: What is 73 - 46?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #96: What is 13 + 90?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #97: What is 50 × 98?",
    "options": [
      "4900",
      "4912",
      "4890",
      "4905"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #98: What is 72 - 15?",
    "options": [
      "60",
      "55",
      "57",
      "65"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #99: What is 53 + 37?",
    "options": [
      "85",
      "90",
      "92",
      "100"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #100: What is 51 × 19?",
    "options": [
      "969",
      "981",
      "959",
      "974"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #101: What is 57 - 52?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #102: What is 44 + 86?",
    "options": [
      "125",
      "130",
      "132",
      "140"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #103: What is 89 × 99?",
    "options": [
      "8811",
      "8823",
      "8801",
      "8816"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #104: What is 67 - 16?",
    "options": [
      "54",
      "49",
      "51",
      "59"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #105: What is 95 + 46?",
    "options": [
      "136",
      "141",
      "143",
      "151"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #106: What is 26 × 96?",
    "options": [
      "2496",
      "2508",
      "2486",
      "2501"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #107: What is 98 - 91?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #108: What is 95 + 39?",
    "options": [
      "129",
      "134",
      "136",
      "144"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #109: What is 16 × 21?",
    "options": [
      "336",
      "348",
      "326",
      "341"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #110: What is 95 - 24?",
    "options": [
      "74",
      "69",
      "71",
      "79"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #111: What is 43 + 61?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #112: What is 50 × 37?",
    "options": [
      "1850",
      "1862",
      "1840",
      "1855"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #113: What is 98 - 62?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #114: What is 83 + 23?",
    "options": [
      "101",
      "106",
      "108",
      "116"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #115: What is 54 × 67?",
    "options": [
      "3618",
      "3630",
      "3608",
      "3623"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #116: What is 57 - 21?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #117: What is 74 + 80?",
    "options": [
      "149",
      "154",
      "156",
      "164"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #118: What is 40 × 59?",
    "options": [
      "2360",
      "2372",
      "2350",
      "2365"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #119: What is 89 - 46?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #120: What is 15 + 94?",
    "options": [
      "104",
      "109",
      "111",
      "119"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #121: What is 60 × 29?",
    "options": [
      "1740",
      "1752",
      "1730",
      "1745"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #122: What is 63 - 44?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #123: What is 12 + 96?",
    "options": [
      "103",
      "108",
      "110",
      "118"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #124: What is 27 × 19?",
    "options": [
      "513",
      "525",
      "503",
      "518"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #125: What is 86 - 12?",
    "options": [
      "77",
      "72",
      "74",
      "82"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #126: What is 76 + 90?",
    "options": [
      "161",
      "166",
      "168",
      "176"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #127: What is 34 × 37?",
    "options": [
      "1258",
      "1270",
      "1248",
      "1263"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #128: What is 98 - 22?",
    "options": [
      "79",
      "74",
      "76",
      "84"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #129: What is 44 + 76?",
    "options": [
      "115",
      "120",
      "122",
      "130"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #130: What is 47 × 70?",
    "options": [
      "3290",
      "3302",
      "3280",
      "3295"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #131: What is 95 - 70?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #132: What is 56 + 88?",
    "options": [
      "139",
      "144",
      "146",
      "154"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #133: What is 11 × 97?",
    "options": [
      "1067",
      "1079",
      "1057",
      "1072"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #134: What is 50 - 48?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #135: What is 38 + 21?",
    "options": [
      "54",
      "59",
      "61",
      "69"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #136: What is 50 × 56?",
    "options": [
      "2800",
      "2812",
      "2790",
      "2805"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #137: What is 57 - 20?",
    "options": [
      "40",
      "35",
      "37",
      "45"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #138: What is 93 + 14?",
    "options": [
      "102",
      "107",
      "109",
      "117"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #139: What is 94 × 93?",
    "options": [
      "8742",
      "8754",
      "8732",
      "8747"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #140: What is 50 - 19?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #141: What is 55 + 91?",
    "options": [
      "141",
      "146",
      "148",
      "156"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #142: What is 24 × 33?",
    "options": [
      "792",
      "804",
      "782",
      "797"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #143: What is 96 - 20?",
    "options": [
      "79",
      "74",
      "76",
      "84"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #144: What is 84 + 42?",
    "options": [
      "121",
      "126",
      "128",
      "136"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #145: What is 63 × 76?",
    "options": [
      "4788",
      "4800",
      "4778",
      "4793"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #146: What is 71 - 69?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #147: What is 68 + 94?",
    "options": [
      "157",
      "162",
      "164",
      "172"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #148: What is 35 × 10?",
    "options": [
      "350",
      "362",
      "340",
      "355"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #149: What is 87 - 82?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #150: What is 56 + 17?",
    "options": [
      "68",
      "73",
      "75",
      "83"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #151: What is 19 × 44?",
    "options": [
      "836",
      "848",
      "826",
      "841"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #152: What is 80 - 22?",
    "options": [
      "61",
      "56",
      "58",
      "66"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #153: What is 82 + 99?",
    "options": [
      "176",
      "181",
      "183",
      "191"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #154: What is 86 × 90?",
    "options": [
      "7740",
      "7752",
      "7730",
      "7745"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #155: What is 86 - 52?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #156: What is 16 + 65?",
    "options": [
      "76",
      "81",
      "83",
      "91"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #157: What is 99 × 82?",
    "options": [
      "8118",
      "8130",
      "8108",
      "8123"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #158: What is 47 - 22?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #159: What is 54 + 79?",
    "options": [
      "128",
      "133",
      "135",
      "143"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #160: What is 99 × 97?",
    "options": [
      "9603",
      "9615",
      "9593",
      "9608"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #161: What is 95 - 12?",
    "options": [
      "86",
      "81",
      "83",
      "91"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #162: What is 44 + 43?",
    "options": [
      "82",
      "87",
      "89",
      "97"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #163: What is 64 × 24?",
    "options": [
      "1536",
      "1548",
      "1526",
      "1541"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #164: What is 87 - 34?",
    "options": [
      "56",
      "51",
      "53",
      "61"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #165: What is 72 + 99?",
    "options": [
      "166",
      "171",
      "173",
      "181"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #166: What is 64 × 57?",
    "options": [
      "3648",
      "3660",
      "3638",
      "3653"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #167: What is 42 - 39?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #168: What is 52 + 74?",
    "options": [
      "121",
      "126",
      "128",
      "136"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #169: What is 49 × 34?",
    "options": [
      "1666",
      "1678",
      "1656",
      "1671"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #170: What is 88 - 18?",
    "options": [
      "73",
      "68",
      "70",
      "78"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #171: What is 23 + 12?",
    "options": [
      "30",
      "35",
      "37",
      "45"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #172: What is 84 × 99?",
    "options": [
      "8316",
      "8328",
      "8306",
      "8321"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #173: What is 62 - 11?",
    "options": [
      "54",
      "49",
      "51",
      "59"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #174: What is 32 + 41?",
    "options": [
      "68",
      "73",
      "75",
      "83"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #175: What is 34 × 88?",
    "options": [
      "2992",
      "3004",
      "2982",
      "2997"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #176: What is 78 - 18?",
    "options": [
      "63",
      "58",
      "60",
      "68"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #177: What is 88 + 23?",
    "options": [
      "106",
      "111",
      "113",
      "121"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #178: What is 31 × 60?",
    "options": [
      "1860",
      "1872",
      "1850",
      "1865"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #179: What is 62 - 43?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #180: What is 18 + 57?",
    "options": [
      "70",
      "75",
      "77",
      "85"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #181: What is 42 × 19?",
    "options": [
      "798",
      "810",
      "788",
      "803"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #182: What is 56 - 26?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #183: What is 24 + 45?",
    "options": [
      "64",
      "69",
      "71",
      "79"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #184: What is 39 × 45?",
    "options": [
      "1755",
      "1767",
      "1745",
      "1760"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #185: What is 63 - 52?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #186: What is 71 + 98?",
    "options": [
      "164",
      "169",
      "171",
      "179"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #187: What is 73 × 43?",
    "options": [
      "3139",
      "3151",
      "3129",
      "3144"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #188: What is 80 - 39?",
    "options": [
      "44",
      "39",
      "41",
      "49"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #189: What is 43 + 44?",
    "options": [
      "82",
      "87",
      "89",
      "97"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #190: What is 46 × 68?",
    "options": [
      "3128",
      "3140",
      "3118",
      "3133"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #191: What is 80 - 74?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #192: What is 65 + 38?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #193: What is 94 × 51?",
    "options": [
      "4794",
      "4806",
      "4784",
      "4799"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #194: What is 82 - 34?",
    "options": [
      "51",
      "46",
      "48",
      "56"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #195: What is 11 + 69?",
    "options": [
      "75",
      "80",
      "82",
      "90"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #196: What is 23 × 12?",
    "options": [
      "276",
      "288",
      "266",
      "281"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #197: What is 92 - 60?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #198: What is 97 + 17?",
    "options": [
      "109",
      "114",
      "116",
      "124"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #199: What is 44 × 10?",
    "options": [
      "440",
      "452",
      "430",
      "445"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #200: What is 71 - 67?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #201: What is 64 + 29?",
    "options": [
      "88",
      "93",
      "95",
      "103"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #202: What is 29 × 12?",
    "options": [
      "348",
      "360",
      "338",
      "353"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #203: What is 75 - 74?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #204: What is 81 + 19?",
    "options": [
      "95",
      "100",
      "102",
      "110"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #205: What is 69 × 13?",
    "options": [
      "897",
      "909",
      "887",
      "902"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #206: What is 87 - 82?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #207: What is 20 + 37?",
    "options": [
      "52",
      "57",
      "59",
      "67"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #208: What is 46 × 90?",
    "options": [
      "4140",
      "4152",
      "4130",
      "4145"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #209: What is 42 - 33?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #210: What is 70 + 23?",
    "options": [
      "88",
      "93",
      "95",
      "103"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #211: What is 84 × 87?",
    "options": [
      "7308",
      "7320",
      "7298",
      "7313"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #212: What is 40 - 26?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #213: What is 90 + 57?",
    "options": [
      "142",
      "147",
      "149",
      "157"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #214: What is 18 × 77?",
    "options": [
      "1386",
      "1398",
      "1376",
      "1391"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #215: What is 51 - 43?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #216: What is 20 + 86?",
    "options": [
      "101",
      "106",
      "108",
      "116"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #217: What is 24 × 67?",
    "options": [
      "1608",
      "1620",
      "1598",
      "1613"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #218: What is 84 - 26?",
    "options": [
      "61",
      "56",
      "58",
      "66"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #219: What is 79 + 44?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #220: What is 97 × 69?",
    "options": [
      "6693",
      "6705",
      "6683",
      "6698"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #221: What is 75 - 24?",
    "options": [
      "54",
      "49",
      "51",
      "59"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #222: What is 15 + 63?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #223: What is 33 × 39?",
    "options": [
      "1287",
      "1299",
      "1277",
      "1292"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #224: What is 72 - 39?",
    "options": [
      "36",
      "31",
      "33",
      "41"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #225: What is 17 + 51?",
    "options": [
      "63",
      "68",
      "70",
      "78"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #226: What is 24 × 83?",
    "options": [
      "1992",
      "2004",
      "1982",
      "1997"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #227: What is 81 - 37?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #228: What is 34 + 91?",
    "options": [
      "120",
      "125",
      "127",
      "135"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #229: What is 35 × 11?",
    "options": [
      "385",
      "397",
      "375",
      "390"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #230: What is 76 - 55?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #231: What is 86 + 92?",
    "options": [
      "173",
      "178",
      "180",
      "188"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #232: What is 46 × 16?",
    "options": [
      "736",
      "748",
      "726",
      "741"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #233: What is 70 - 26?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #234: What is 60 + 51?",
    "options": [
      "106",
      "111",
      "113",
      "121"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #235: What is 98 × 57?",
    "options": [
      "5586",
      "5598",
      "5576",
      "5591"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #236: What is 69 - 17?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #237: What is 66 + 70?",
    "options": [
      "131",
      "136",
      "138",
      "146"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #238: What is 60 × 14?",
    "options": [
      "840",
      "852",
      "830",
      "845"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #239: What is 59 - 47?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #240: What is 66 + 76?",
    "options": [
      "137",
      "142",
      "144",
      "152"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #241: What is 86 × 33?",
    "options": [
      "2838",
      "2850",
      "2828",
      "2843"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #242: What is 73 - 62?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #243: What is 85 + 68?",
    "options": [
      "148",
      "153",
      "155",
      "163"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #244: What is 54 × 89?",
    "options": [
      "4806",
      "4818",
      "4796",
      "4811"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #245: What is 51 - 39?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #246: What is 30 + 99?",
    "options": [
      "124",
      "129",
      "131",
      "139"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #247: What is 75 × 41?",
    "options": [
      "3075",
      "3087",
      "3065",
      "3080"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #248: What is 90 - 37?",
    "options": [
      "56",
      "51",
      "53",
      "61"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #249: What is 97 + 85?",
    "options": [
      "177",
      "182",
      "184",
      "192"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #250: What is 67 × 76?",
    "options": [
      "5092",
      "5104",
      "5082",
      "5097"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #251: What is 93 - 82?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #252: What is 76 + 22?",
    "options": [
      "93",
      "98",
      "100",
      "108"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #253: What is 75 × 47?",
    "options": [
      "3525",
      "3537",
      "3515",
      "3530"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #254: What is 61 - 11?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #255: What is 39 + 82?",
    "options": [
      "116",
      "121",
      "123",
      "131"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #256: What is 36 × 89?",
    "options": [
      "3204",
      "3216",
      "3194",
      "3209"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #257: What is 20 - 18?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #258: What is 94 + 16?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #259: What is 33 × 21?",
    "options": [
      "693",
      "705",
      "683",
      "698"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #260: What is 97 - 36?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #261: What is 58 + 77?",
    "options": [
      "130",
      "135",
      "137",
      "145"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #262: What is 96 × 75?",
    "options": [
      "7200",
      "7212",
      "7190",
      "7205"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #263: What is 30 - 17?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #264: What is 93 + 70?",
    "options": [
      "158",
      "163",
      "165",
      "173"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #265: What is 52 × 87?",
    "options": [
      "4524",
      "4536",
      "4514",
      "4529"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #266: What is 78 - 64?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #267: What is 45 + 67?",
    "options": [
      "107",
      "112",
      "114",
      "122"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #268: What is 91 × 97?",
    "options": [
      "8827",
      "8839",
      "8817",
      "8832"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #269: What is 69 - 47?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #270: What is 29 + 52?",
    "options": [
      "76",
      "81",
      "83",
      "91"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #271: What is 81 × 37?",
    "options": [
      "2997",
      "3009",
      "2987",
      "3002"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #272: What is 69 - 47?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #273: What is 19 + 68?",
    "options": [
      "82",
      "87",
      "89",
      "97"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #274: What is 88 × 75?",
    "options": [
      "6600",
      "6612",
      "6590",
      "6605"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #275: What is 66 - 28?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #276: What is 10 + 19?",
    "options": [
      "24",
      "29",
      "31",
      "39"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #277: What is 23 × 81?",
    "options": [
      "1863",
      "1875",
      "1853",
      "1868"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #278: What is 96 - 47?",
    "options": [
      "52",
      "47",
      "49",
      "57"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #279: What is 13 + 84?",
    "options": [
      "92",
      "97",
      "99",
      "107"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #280: What is 88 × 79?",
    "options": [
      "6952",
      "6964",
      "6942",
      "6957"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #281: What is 97 - 90?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #282: What is 81 + 72?",
    "options": [
      "148",
      "153",
      "155",
      "163"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #283: What is 23 × 92?",
    "options": [
      "2116",
      "2128",
      "2106",
      "2121"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #284: What is 52 - 24?",
    "options": [
      "31",
      "26",
      "28",
      "36"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #285: What is 96 + 65?",
    "options": [
      "156",
      "161",
      "163",
      "171"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #286: What is 90 × 58?",
    "options": [
      "5220",
      "5232",
      "5210",
      "5225"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #287: What is 63 - 55?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #288: What is 29 + 94?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #289: What is 43 × 19?",
    "options": [
      "817",
      "829",
      "807",
      "822"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #290: What is 75 - 58?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #291: What is 22 + 93?",
    "options": [
      "110",
      "115",
      "117",
      "125"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #292: What is 65 × 84?",
    "options": [
      "5460",
      "5472",
      "5450",
      "5465"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #293: What is 98 - 59?",
    "options": [
      "42",
      "37",
      "39",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #294: What is 46 + 88?",
    "options": [
      "129",
      "134",
      "136",
      "144"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #295: What is 59 × 88?",
    "options": [
      "5192",
      "5204",
      "5182",
      "5197"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #296: What is 53 - 43?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #297: What is 36 + 62?",
    "options": [
      "93",
      "98",
      "100",
      "108"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #298: What is 40 × 98?",
    "options": [
      "3920",
      "3932",
      "3910",
      "3925"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #299: What is 76 - 71?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #300: What is 84 + 14?",
    "options": [
      "93",
      "98",
      "100",
      "108"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #301: What is 29 × 32?",
    "options": [
      "928",
      "940",
      "918",
      "933"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #302: What is 79 - 58?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #303: What is 93 + 85?",
    "options": [
      "173",
      "178",
      "180",
      "188"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #304: What is 64 × 83?",
    "options": [
      "5312",
      "5324",
      "5302",
      "5317"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #305: What is 36 - 24?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #306: What is 28 + 51?",
    "options": [
      "74",
      "79",
      "81",
      "89"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #307: What is 88 × 83?",
    "options": [
      "7304",
      "7316",
      "7294",
      "7309"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #308: What is 60 - 46?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #309: What is 75 + 56?",
    "options": [
      "126",
      "131",
      "133",
      "141"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #310: What is 94 × 78?",
    "options": [
      "7332",
      "7344",
      "7322",
      "7337"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #311: What is 57 - 37?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #312: What is 76 + 73?",
    "options": [
      "144",
      "149",
      "151",
      "159"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #313: What is 46 × 55?",
    "options": [
      "2530",
      "2542",
      "2520",
      "2535"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #314: What is 69 - 66?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #315: What is 64 + 99?",
    "options": [
      "158",
      "163",
      "165",
      "173"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #316: What is 63 × 27?",
    "options": [
      "1701",
      "1713",
      "1691",
      "1706"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #317: What is 50 - 25?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #318: What is 61 + 83?",
    "options": [
      "139",
      "144",
      "146",
      "154"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #319: What is 47 × 91?",
    "options": [
      "4277",
      "4289",
      "4267",
      "4282"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #320: What is 43 - 37?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #321: What is 21 + 56?",
    "options": [
      "72",
      "77",
      "79",
      "87"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #322: What is 40 × 58?",
    "options": [
      "2320",
      "2332",
      "2310",
      "2325"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #323: What is 86 - 72?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #324: What is 42 + 55?",
    "options": [
      "92",
      "97",
      "99",
      "107"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #325: What is 71 × 31?",
    "options": [
      "2201",
      "2213",
      "2191",
      "2206"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #326: What is 77 - 67?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #327: What is 91 + 38?",
    "options": [
      "124",
      "129",
      "131",
      "139"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #328: What is 94 × 57?",
    "options": [
      "5358",
      "5370",
      "5348",
      "5363"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #329: What is 76 - 59?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #330: What is 27 + 22?",
    "options": [
      "44",
      "49",
      "51",
      "59"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #331: What is 84 × 81?",
    "options": [
      "6804",
      "6816",
      "6794",
      "6809"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #332: What is 35 - 29?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #333: What is 96 + 52?",
    "options": [
      "143",
      "148",
      "150",
      "158"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #334: What is 58 × 60?",
    "options": [
      "3480",
      "3492",
      "3470",
      "3485"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #335: What is 42 - 23?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #336: What is 50 + 47?",
    "options": [
      "92",
      "97",
      "99",
      "107"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #337: What is 56 × 33?",
    "options": [
      "1848",
      "1860",
      "1838",
      "1853"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #338: What is 89 - 62?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #339: What is 31 + 60?",
    "options": [
      "86",
      "91",
      "93",
      "101"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #340: What is 57 × 16?",
    "options": [
      "912",
      "924",
      "902",
      "917"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #341: What is 96 - 16?",
    "options": [
      "83",
      "78",
      "80",
      "88"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #342: What is 74 + 58?",
    "options": [
      "127",
      "132",
      "134",
      "142"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #343: What is 32 × 35?",
    "options": [
      "1120",
      "1132",
      "1110",
      "1125"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #344: What is 84 - 64?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #345: What is 44 + 60?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #346: What is 95 × 20?",
    "options": [
      "1900",
      "1912",
      "1890",
      "1905"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #347: What is 68 - 60?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #348: What is 78 + 68?",
    "options": [
      "141",
      "146",
      "148",
      "156"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #349: What is 71 × 42?",
    "options": [
      "2982",
      "2994",
      "2972",
      "2987"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #350: What is 66 - 32?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #351: What is 13 + 39?",
    "options": [
      "47",
      "52",
      "54",
      "62"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #352: What is 87 × 88?",
    "options": [
      "7656",
      "7668",
      "7646",
      "7661"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #353: What is 50 - 41?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #354: What is 80 + 59?",
    "options": [
      "134",
      "139",
      "141",
      "149"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #355: What is 76 × 18?",
    "options": [
      "1368",
      "1380",
      "1358",
      "1373"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #356: What is 75 - 59?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #357: What is 94 + 16?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #358: What is 46 × 75?",
    "options": [
      "3450",
      "3462",
      "3440",
      "3455"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #359: What is 68 - 48?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #360: What is 12 + 54?",
    "options": [
      "61",
      "66",
      "68",
      "76"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #361: What is 90 × 59?",
    "options": [
      "5310",
      "5322",
      "5300",
      "5315"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #362: What is 89 - 24?",
    "options": [
      "68",
      "63",
      "65",
      "73"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #363: What is 39 + 29?",
    "options": [
      "63",
      "68",
      "70",
      "78"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #364: What is 15 × 73?",
    "options": [
      "1095",
      "1107",
      "1085",
      "1100"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #365: What is 64 - 24?",
    "options": [
      "43",
      "38",
      "40",
      "48"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #366: What is 80 + 57?",
    "options": [
      "132",
      "137",
      "139",
      "147"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #367: What is 93 × 36?",
    "options": [
      "3348",
      "3360",
      "3338",
      "3353"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #368: What is 85 - 66?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #369: What is 85 + 75?",
    "options": [
      "155",
      "160",
      "162",
      "170"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #370: What is 27 × 25?",
    "options": [
      "675",
      "687",
      "665",
      "680"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #371: What is 43 - 31?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #372: What is 64 + 93?",
    "options": [
      "152",
      "157",
      "159",
      "167"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #373: What is 71 × 84?",
    "options": [
      "5964",
      "5976",
      "5954",
      "5969"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #374: What is 16 - 14?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #375: What is 56 + 98?",
    "options": [
      "149",
      "154",
      "156",
      "164"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #376: What is 49 × 97?",
    "options": [
      "4753",
      "4765",
      "4743",
      "4758"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #377: What is 79 - 70?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #378: What is 20 + 25?",
    "options": [
      "40",
      "45",
      "47",
      "55"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #379: What is 54 × 82?",
    "options": [
      "4428",
      "4440",
      "4418",
      "4433"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #380: What is 79 - 42?",
    "options": [
      "40",
      "35",
      "37",
      "45"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #381: What is 46 + 10?",
    "options": [
      "51",
      "56",
      "58",
      "66"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #382: What is 40 × 29?",
    "options": [
      "1160",
      "1172",
      "1150",
      "1165"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #383: What is 74 - 59?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #384: What is 27 + 96?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #385: What is 25 × 14?",
    "options": [
      "350",
      "362",
      "340",
      "355"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #386: What is 75 - 43?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #387: What is 90 + 76?",
    "options": [
      "161",
      "166",
      "168",
      "176"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #388: What is 93 × 69?",
    "options": [
      "6417",
      "6429",
      "6407",
      "6422"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #389: What is 61 - 32?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #390: What is 51 + 40?",
    "options": [
      "86",
      "91",
      "93",
      "101"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #391: What is 62 × 90?",
    "options": [
      "5580",
      "5592",
      "5570",
      "5585"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #392: What is 63 - 58?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #393: What is 75 + 57?",
    "options": [
      "127",
      "132",
      "134",
      "142"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #394: What is 85 × 18?",
    "options": [
      "1530",
      "1542",
      "1520",
      "1535"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #395: What is 89 - 70?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #396: What is 69 + 29?",
    "options": [
      "93",
      "98",
      "100",
      "108"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #397: What is 62 × 60?",
    "options": [
      "3720",
      "3732",
      "3710",
      "3725"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #398: What is 79 - 69?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #399: What is 76 + 30?",
    "options": [
      "101",
      "106",
      "108",
      "116"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #400: What is 86 × 49?",
    "options": [
      "4214",
      "4226",
      "4204",
      "4219"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #401: What is 70 - 32?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #402: What is 33 + 33?",
    "options": [
      "61",
      "66",
      "68",
      "76"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #403: What is 54 × 73?",
    "options": [
      "3942",
      "3954",
      "3932",
      "3947"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #404: What is 86 - 28?",
    "options": [
      "61",
      "56",
      "58",
      "66"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #405: What is 13 + 20?",
    "options": [
      "28",
      "33",
      "35",
      "43"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #406: What is 96 × 77?",
    "options": [
      "7392",
      "7404",
      "7382",
      "7397"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #407: What is 93 - 61?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #408: What is 48 + 61?",
    "options": [
      "104",
      "109",
      "111",
      "119"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #409: What is 79 × 23?",
    "options": [
      "1817",
      "1829",
      "1807",
      "1822"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #410: What is 97 - 31?",
    "options": [
      "69",
      "64",
      "66",
      "74"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #411: What is 17 + 26?",
    "options": [
      "38",
      "43",
      "45",
      "53"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #412: What is 68 × 57?",
    "options": [
      "3876",
      "3888",
      "3866",
      "3881"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #413: What is 89 - 57?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #414: What is 30 + 68?",
    "options": [
      "93",
      "98",
      "100",
      "108"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #415: What is 51 × 12?",
    "options": [
      "612",
      "624",
      "602",
      "617"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #416: What is 39 - 36?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #417: What is 97 + 72?",
    "options": [
      "164",
      "169",
      "171",
      "179"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #418: What is 75 × 49?",
    "options": [
      "3675",
      "3687",
      "3665",
      "3680"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #419: What is 76 - 19?",
    "options": [
      "60",
      "55",
      "57",
      "65"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #420: What is 16 + 49?",
    "options": [
      "60",
      "65",
      "67",
      "75"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #421: What is 96 × 24?",
    "options": [
      "2304",
      "2316",
      "2294",
      "2309"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #422: What is 97 - 21?",
    "options": [
      "79",
      "74",
      "76",
      "84"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #423: What is 69 + 26?",
    "options": [
      "90",
      "95",
      "97",
      "105"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #424: What is 11 × 31?",
    "options": [
      "341",
      "353",
      "331",
      "346"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #425: What is 74 - 16?",
    "options": [
      "61",
      "56",
      "58",
      "66"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #426: What is 81 + 74?",
    "options": [
      "150",
      "155",
      "157",
      "165"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #427: What is 58 × 97?",
    "options": [
      "5626",
      "5638",
      "5616",
      "5631"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #428: What is 98 - 81?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #429: What is 90 + 83?",
    "options": [
      "168",
      "173",
      "175",
      "183"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #430: What is 64 × 17?",
    "options": [
      "1088",
      "1100",
      "1078",
      "1093"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #431: What is 68 - 53?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #432: What is 12 + 61?",
    "options": [
      "68",
      "73",
      "75",
      "83"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #433: What is 79 × 46?",
    "options": [
      "3634",
      "3646",
      "3624",
      "3639"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #434: What is 58 - 49?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #435: What is 26 + 26?",
    "options": [
      "47",
      "52",
      "54",
      "62"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #436: What is 82 × 99?",
    "options": [
      "8118",
      "8130",
      "8108",
      "8123"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #437: What is 74 - 45?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #438: What is 13 + 93?",
    "options": [
      "101",
      "106",
      "108",
      "116"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #439: What is 63 × 18?",
    "options": [
      "1134",
      "1146",
      "1124",
      "1139"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #440: What is 91 - 84?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #441: What is 29 + 53?",
    "options": [
      "77",
      "82",
      "84",
      "92"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #442: What is 47 × 87?",
    "options": [
      "4089",
      "4101",
      "4079",
      "4094"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #443: What is 18 - 12?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #444: What is 54 + 62?",
    "options": [
      "111",
      "116",
      "118",
      "126"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #445: What is 64 × 91?",
    "options": [
      "5824",
      "5836",
      "5814",
      "5829"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #446: What is 58 - 33?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #447: What is 29 + 46?",
    "options": [
      "70",
      "75",
      "77",
      "85"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #448: What is 62 × 61?",
    "options": [
      "3782",
      "3794",
      "3772",
      "3787"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #449: What is 56 - 56?",
    "options": [
      "3",
      "-2",
      "0",
      "8"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #450: What is 61 + 17?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #451: What is 35 × 52?",
    "options": [
      "1820",
      "1832",
      "1810",
      "1825"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #452: What is 93 - 28?",
    "options": [
      "68",
      "63",
      "65",
      "73"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #453: What is 55 + 85?",
    "options": [
      "135",
      "140",
      "142",
      "150"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #454: What is 60 × 78?",
    "options": [
      "4680",
      "4692",
      "4670",
      "4685"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #455: What is 62 - 59?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #456: What is 80 + 98?",
    "options": [
      "173",
      "178",
      "180",
      "188"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #457: What is 73 × 69?",
    "options": [
      "5037",
      "5049",
      "5027",
      "5042"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #458: What is 36 - 30?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #459: What is 20 + 99?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #460: What is 57 × 11?",
    "options": [
      "627",
      "639",
      "617",
      "632"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #461: What is 98 - 53?",
    "options": [
      "48",
      "43",
      "45",
      "53"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #462: What is 20 + 72?",
    "options": [
      "87",
      "92",
      "94",
      "102"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #463: What is 70 × 80?",
    "options": [
      "5600",
      "5612",
      "5590",
      "5605"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #464: What is 38 - 33?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #465: What is 46 + 93?",
    "options": [
      "134",
      "139",
      "141",
      "149"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #466: What is 32 × 34?",
    "options": [
      "1088",
      "1100",
      "1078",
      "1093"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #467: What is 87 - 86?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #468: What is 31 + 89?",
    "options": [
      "115",
      "120",
      "122",
      "130"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #469: What is 95 × 74?",
    "options": [
      "7030",
      "7042",
      "7020",
      "7035"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #470: What is 57 - 39?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #471: What is 50 + 20?",
    "options": [
      "65",
      "70",
      "72",
      "80"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #472: What is 76 × 91?",
    "options": [
      "6916",
      "6928",
      "6906",
      "6921"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #473: What is 56 - 20?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #474: What is 37 + 30?",
    "options": [
      "62",
      "67",
      "69",
      "77"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #475: What is 22 × 27?",
    "options": [
      "594",
      "606",
      "584",
      "599"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #476: What is 82 - 76?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #477: What is 19 + 45?",
    "options": [
      "59",
      "64",
      "66",
      "74"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #478: What is 43 × 51?",
    "options": [
      "2193",
      "2205",
      "2183",
      "2198"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #479: What is 87 - 49?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #480: What is 54 + 27?",
    "options": [
      "76",
      "81",
      "83",
      "91"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #481: What is 63 × 65?",
    "options": [
      "4095",
      "4107",
      "4085",
      "4100"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #482: What is 78 - 65?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #483: What is 67 + 88?",
    "options": [
      "150",
      "155",
      "157",
      "165"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #484: What is 12 × 37?",
    "options": [
      "444",
      "456",
      "434",
      "449"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #485: What is 61 - 24?",
    "options": [
      "40",
      "35",
      "37",
      "45"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #486: What is 74 + 43?",
    "options": [
      "112",
      "117",
      "119",
      "127"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #487: What is 76 × 52?",
    "options": [
      "3952",
      "3964",
      "3942",
      "3957"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #488: What is 18 - 13?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #489: What is 35 + 35?",
    "options": [
      "65",
      "70",
      "72",
      "80"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #490: What is 72 × 73?",
    "options": [
      "5256",
      "5268",
      "5246",
      "5261"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #491: What is 88 - 25?",
    "options": [
      "66",
      "61",
      "63",
      "71"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #492: What is 49 + 26?",
    "options": [
      "70",
      "75",
      "77",
      "85"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #493: What is 29 × 89?",
    "options": [
      "2581",
      "2593",
      "2571",
      "2586"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #494: What is 68 - 11?",
    "options": [
      "60",
      "55",
      "57",
      "65"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #495: What is 62 + 22?",
    "options": [
      "79",
      "84",
      "86",
      "94"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #496: What is 39 × 83?",
    "options": [
      "3237",
      "3249",
      "3227",
      "3242"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #497: What is 93 - 70?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #498: What is 75 + 71?",
    "options": [
      "141",
      "146",
      "148",
      "156"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #499: What is 96 × 73?",
    "options": [
      "7008",
      "7020",
      "6998",
      "7013"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #500: What is 77 - 47?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #501: What is 65 + 58?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #502: What is 18 × 62?",
    "options": [
      "1116",
      "1128",
      "1106",
      "1121"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #503: What is 85 - 66?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #504: What is 48 + 70?",
    "options": [
      "113",
      "118",
      "120",
      "128"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #505: What is 13 × 54?",
    "options": [
      "702",
      "714",
      "692",
      "707"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #506: What is 21 - 14?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #507: What is 15 + 50?",
    "options": [
      "60",
      "65",
      "67",
      "75"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #508: What is 16 × 78?",
    "options": [
      "1248",
      "1260",
      "1238",
      "1253"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #509: What is 77 - 65?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #510: What is 63 + 99?",
    "options": [
      "157",
      "162",
      "164",
      "172"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #511: What is 60 × 39?",
    "options": [
      "2340",
      "2352",
      "2330",
      "2345"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #512: What is 80 - 54?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #513: What is 89 + 75?",
    "options": [
      "159",
      "164",
      "166",
      "174"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #514: What is 74 × 92?",
    "options": [
      "6808",
      "6820",
      "6798",
      "6813"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #515: What is 60 - 44?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #516: What is 70 + 70?",
    "options": [
      "135",
      "140",
      "142",
      "150"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #517: What is 53 × 49?",
    "options": [
      "2597",
      "2609",
      "2587",
      "2602"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #518: What is 72 - 23?",
    "options": [
      "52",
      "47",
      "49",
      "57"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #519: What is 59 + 16?",
    "options": [
      "70",
      "75",
      "77",
      "85"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #520: What is 12 × 93?",
    "options": [
      "1116",
      "1128",
      "1106",
      "1121"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #521: What is 88 - 26?",
    "options": [
      "65",
      "60",
      "62",
      "70"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #522: What is 13 + 42?",
    "options": [
      "50",
      "55",
      "57",
      "65"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #523: What is 41 × 62?",
    "options": [
      "2542",
      "2554",
      "2532",
      "2547"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #524: What is 44 - 41?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #525: What is 64 + 46?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #526: What is 45 × 96?",
    "options": [
      "4320",
      "4332",
      "4310",
      "4325"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #527: What is 76 - 50?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #528: What is 68 + 15?",
    "options": [
      "78",
      "83",
      "85",
      "93"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #529: What is 48 × 41?",
    "options": [
      "1968",
      "1980",
      "1958",
      "1973"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #530: What is 37 - 27?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #531: What is 44 + 82?",
    "options": [
      "121",
      "126",
      "128",
      "136"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #532: What is 47 × 44?",
    "options": [
      "2068",
      "2080",
      "2058",
      "2073"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #533: What is 72 - 62?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #534: What is 16 + 27?",
    "options": [
      "38",
      "43",
      "45",
      "53"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #535: What is 28 × 72?",
    "options": [
      "2016",
      "2028",
      "2006",
      "2021"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #536: What is 77 - 10?",
    "options": [
      "70",
      "65",
      "67",
      "75"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #537: What is 65 + 54?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #538: What is 92 × 61?",
    "options": [
      "5612",
      "5624",
      "5602",
      "5617"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #539: What is 29 - 16?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #540: What is 44 + 93?",
    "options": [
      "132",
      "137",
      "139",
      "147"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #541: What is 96 × 86?",
    "options": [
      "8256",
      "8268",
      "8246",
      "8261"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #542: What is 64 - 18?",
    "options": [
      "49",
      "44",
      "46",
      "54"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #543: What is 15 + 93?",
    "options": [
      "103",
      "108",
      "110",
      "118"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #544: What is 82 × 13?",
    "options": [
      "1066",
      "1078",
      "1056",
      "1071"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #545: What is 76 - 26?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #546: What is 33 + 37?",
    "options": [
      "65",
      "70",
      "72",
      "80"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #547: What is 27 × 99?",
    "options": [
      "2673",
      "2685",
      "2663",
      "2678"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #548: What is 81 - 20?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #549: What is 83 + 47?",
    "options": [
      "125",
      "130",
      "132",
      "140"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #550: What is 41 × 64?",
    "options": [
      "2624",
      "2636",
      "2614",
      "2629"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #551: What is 51 - 13?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #552: What is 55 + 38?",
    "options": [
      "88",
      "93",
      "95",
      "103"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #553: What is 43 × 13?",
    "options": [
      "559",
      "571",
      "549",
      "564"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #554: What is 78 - 36?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #555: What is 90 + 12?",
    "options": [
      "97",
      "102",
      "104",
      "112"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #556: What is 49 × 38?",
    "options": [
      "1862",
      "1874",
      "1852",
      "1867"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #557: What is 94 - 64?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #558: What is 86 + 28?",
    "options": [
      "109",
      "114",
      "116",
      "124"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #559: What is 98 × 31?",
    "options": [
      "3038",
      "3050",
      "3028",
      "3043"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #560: What is 95 - 26?",
    "options": [
      "72",
      "67",
      "69",
      "77"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #561: What is 98 + 62?",
    "options": [
      "155",
      "160",
      "162",
      "170"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #562: What is 87 × 73?",
    "options": [
      "6351",
      "6363",
      "6341",
      "6356"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #563: What is 59 - 25?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #564: What is 55 + 53?",
    "options": [
      "103",
      "108",
      "110",
      "118"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #565: What is 98 × 12?",
    "options": [
      "1176",
      "1188",
      "1166",
      "1181"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #566: What is 30 - 17?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #567: What is 38 + 81?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #568: What is 13 × 43?",
    "options": [
      "559",
      "571",
      "549",
      "564"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #569: What is 92 - 54?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #570: What is 38 + 28?",
    "options": [
      "61",
      "66",
      "68",
      "76"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #571: What is 40 × 86?",
    "options": [
      "3440",
      "3452",
      "3430",
      "3445"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #572: What is 80 - 60?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #573: What is 62 + 56?",
    "options": [
      "113",
      "118",
      "120",
      "128"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #574: What is 58 × 81?",
    "options": [
      "4698",
      "4710",
      "4688",
      "4703"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #575: What is 23 - 22?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #576: What is 31 + 23?",
    "options": [
      "49",
      "54",
      "56",
      "64"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #577: What is 25 × 74?",
    "options": [
      "1850",
      "1862",
      "1840",
      "1855"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #578: What is 29 - 21?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #579: What is 29 + 28?",
    "options": [
      "52",
      "57",
      "59",
      "67"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #580: What is 92 × 67?",
    "options": [
      "6164",
      "6176",
      "6154",
      "6169"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #581: What is 41 - 39?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #582: What is 83 + 36?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #583: What is 81 × 58?",
    "options": [
      "4698",
      "4710",
      "4688",
      "4703"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #584: What is 94 - 93?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #585: What is 70 + 62?",
    "options": [
      "127",
      "132",
      "134",
      "142"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #586: What is 72 × 34?",
    "options": [
      "2448",
      "2460",
      "2438",
      "2453"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #587: What is 57 - 24?",
    "options": [
      "36",
      "31",
      "33",
      "41"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #588: What is 75 + 69?",
    "options": [
      "139",
      "144",
      "146",
      "154"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #589: What is 58 × 13?",
    "options": [
      "754",
      "766",
      "744",
      "759"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #590: What is 50 - 19?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #591: What is 16 + 82?",
    "options": [
      "93",
      "98",
      "100",
      "108"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #592: What is 56 × 81?",
    "options": [
      "4536",
      "4548",
      "4526",
      "4541"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #593: What is 96 - 91?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #594: What is 18 + 16?",
    "options": [
      "29",
      "34",
      "36",
      "44"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #595: What is 54 × 52?",
    "options": [
      "2808",
      "2820",
      "2798",
      "2813"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #596: What is 76 - 38?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #597: What is 72 + 88?",
    "options": [
      "155",
      "160",
      "162",
      "170"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #598: What is 48 × 94?",
    "options": [
      "4512",
      "4524",
      "4502",
      "4517"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #599: What is 74 - 24?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #600: What is 63 + 39?",
    "options": [
      "97",
      "102",
      "104",
      "112"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #601: What is 95 × 92?",
    "options": [
      "8740",
      "8752",
      "8730",
      "8745"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #602: What is 50 - 48?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #603: What is 52 + 27?",
    "options": [
      "74",
      "79",
      "81",
      "89"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #604: What is 32 × 83?",
    "options": [
      "2656",
      "2668",
      "2646",
      "2661"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #605: What is 68 - 38?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #606: What is 77 + 65?",
    "options": [
      "137",
      "142",
      "144",
      "152"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #607: What is 46 × 83?",
    "options": [
      "3818",
      "3830",
      "3808",
      "3823"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #608: What is 56 - 27?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #609: What is 25 + 27?",
    "options": [
      "47",
      "52",
      "54",
      "62"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #610: What is 44 × 51?",
    "options": [
      "2244",
      "2256",
      "2234",
      "2249"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #611: What is 46 - 37?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #612: What is 90 + 73?",
    "options": [
      "158",
      "163",
      "165",
      "173"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #613: What is 52 × 59?",
    "options": [
      "3068",
      "3080",
      "3058",
      "3073"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #614: What is 66 - 23?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #615: What is 34 + 41?",
    "options": [
      "70",
      "75",
      "77",
      "85"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #616: What is 63 × 68?",
    "options": [
      "4284",
      "4296",
      "4274",
      "4289"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #617: What is 34 - 24?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #618: What is 97 + 17?",
    "options": [
      "109",
      "114",
      "116",
      "124"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #619: What is 67 × 98?",
    "options": [
      "6566",
      "6578",
      "6556",
      "6571"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #620: What is 95 - 54?",
    "options": [
      "44",
      "39",
      "41",
      "49"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #621: What is 99 + 93?",
    "options": [
      "187",
      "192",
      "194",
      "202"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #622: What is 68 × 13?",
    "options": [
      "884",
      "896",
      "874",
      "889"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #623: What is 62 - 47?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #624: What is 53 + 79?",
    "options": [
      "127",
      "132",
      "134",
      "142"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #625: What is 88 × 12?",
    "options": [
      "1056",
      "1068",
      "1046",
      "1061"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #626: What is 74 - 53?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #627: What is 54 + 17?",
    "options": [
      "66",
      "71",
      "73",
      "81"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #628: What is 98 × 23?",
    "options": [
      "2254",
      "2266",
      "2244",
      "2259"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #629: What is 89 - 47?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #630: What is 40 + 61?",
    "options": [
      "96",
      "101",
      "103",
      "111"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #631: What is 44 × 32?",
    "options": [
      "1408",
      "1420",
      "1398",
      "1413"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #632: What is 74 - 59?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #633: What is 33 + 67?",
    "options": [
      "95",
      "100",
      "102",
      "110"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #634: What is 79 × 58?",
    "options": [
      "4582",
      "4594",
      "4572",
      "4587"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #635: What is 66 - 47?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #636: What is 88 + 61?",
    "options": [
      "144",
      "149",
      "151",
      "159"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #637: What is 34 × 81?",
    "options": [
      "2754",
      "2766",
      "2744",
      "2759"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #638: What is 50 - 48?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #639: What is 85 + 50?",
    "options": [
      "130",
      "135",
      "137",
      "145"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #640: What is 26 × 45?",
    "options": [
      "1170",
      "1182",
      "1160",
      "1175"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #641: What is 64 - 29?",
    "options": [
      "38",
      "33",
      "35",
      "43"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #642: What is 53 + 17?",
    "options": [
      "65",
      "70",
      "72",
      "80"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #643: What is 63 × 48?",
    "options": [
      "3024",
      "3036",
      "3014",
      "3029"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #644: What is 84 - 44?",
    "options": [
      "43",
      "38",
      "40",
      "48"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #645: What is 34 + 74?",
    "options": [
      "103",
      "108",
      "110",
      "118"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #646: What is 65 × 67?",
    "options": [
      "4355",
      "4367",
      "4345",
      "4360"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #647: What is 45 - 20?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #648: What is 30 + 23?",
    "options": [
      "48",
      "53",
      "55",
      "63"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #649: What is 70 × 34?",
    "options": [
      "2380",
      "2392",
      "2370",
      "2385"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #650: What is 60 - 38?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #651: What is 14 + 66?",
    "options": [
      "75",
      "80",
      "82",
      "90"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #652: What is 80 × 92?",
    "options": [
      "7360",
      "7372",
      "7350",
      "7365"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #653: What is 28 - 26?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #654: What is 92 + 55?",
    "options": [
      "142",
      "147",
      "149",
      "157"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #655: What is 61 × 86?",
    "options": [
      "5246",
      "5258",
      "5236",
      "5251"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #656: What is 76 - 18?",
    "options": [
      "61",
      "56",
      "58",
      "66"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #657: What is 70 + 62?",
    "options": [
      "127",
      "132",
      "134",
      "142"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #658: What is 73 × 98?",
    "options": [
      "7154",
      "7166",
      "7144",
      "7159"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #659: What is 60 - 52?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #660: What is 99 + 63?",
    "options": [
      "157",
      "162",
      "164",
      "172"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #661: What is 53 × 95?",
    "options": [
      "5035",
      "5047",
      "5025",
      "5040"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #662: What is 61 - 53?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #663: What is 52 + 51?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #664: What is 17 × 81?",
    "options": [
      "1377",
      "1389",
      "1367",
      "1382"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #665: What is 81 - 15?",
    "options": [
      "69",
      "64",
      "66",
      "74"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #666: What is 71 + 92?",
    "options": [
      "158",
      "163",
      "165",
      "173"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #667: What is 44 × 83?",
    "options": [
      "3652",
      "3664",
      "3642",
      "3657"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #668: What is 56 - 26?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #669: What is 65 + 85?",
    "options": [
      "145",
      "150",
      "152",
      "160"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #670: What is 96 × 40?",
    "options": [
      "3840",
      "3852",
      "3830",
      "3845"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #671: What is 33 - 17?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #672: What is 24 + 81?",
    "options": [
      "100",
      "105",
      "107",
      "115"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #673: What is 95 × 96?",
    "options": [
      "9120",
      "9132",
      "9110",
      "9125"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #674: What is 82 - 23?",
    "options": [
      "62",
      "57",
      "59",
      "67"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #675: What is 15 + 39?",
    "options": [
      "49",
      "54",
      "56",
      "64"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #676: What is 87 × 63?",
    "options": [
      "5481",
      "5493",
      "5471",
      "5486"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #677: What is 76 - 76?",
    "options": [
      "3",
      "-2",
      "0",
      "8"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #678: What is 34 + 97?",
    "options": [
      "126",
      "131",
      "133",
      "141"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #679: What is 51 × 89?",
    "options": [
      "4539",
      "4551",
      "4529",
      "4544"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #680: What is 90 - 40?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #681: What is 98 + 37?",
    "options": [
      "130",
      "135",
      "137",
      "145"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #682: What is 25 × 52?",
    "options": [
      "1300",
      "1312",
      "1290",
      "1305"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #683: What is 43 - 35?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #684: What is 54 + 14?",
    "options": [
      "63",
      "68",
      "70",
      "78"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #685: What is 36 × 91?",
    "options": [
      "3276",
      "3288",
      "3266",
      "3281"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #686: What is 72 - 60?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #687: What is 57 + 59?",
    "options": [
      "111",
      "116",
      "118",
      "126"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #688: What is 87 × 83?",
    "options": [
      "7221",
      "7233",
      "7211",
      "7226"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #689: What is 86 - 40?",
    "options": [
      "49",
      "44",
      "46",
      "54"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #690: What is 90 + 93?",
    "options": [
      "178",
      "183",
      "185",
      "193"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #691: What is 78 × 29?",
    "options": [
      "2262",
      "2274",
      "2252",
      "2267"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #692: What is 78 - 56?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #693: What is 25 + 65?",
    "options": [
      "85",
      "90",
      "92",
      "100"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #694: What is 32 × 91?",
    "options": [
      "2912",
      "2924",
      "2902",
      "2917"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #695: What is 30 - 23?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #696: What is 27 + 46?",
    "options": [
      "68",
      "73",
      "75",
      "83"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #697: What is 92 × 26?",
    "options": [
      "2392",
      "2404",
      "2382",
      "2397"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #698: What is 88 - 62?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #699: What is 54 + 24?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #700: What is 66 × 67?",
    "options": [
      "4422",
      "4434",
      "4412",
      "4427"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #701: What is 58 - 52?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #702: What is 24 + 40?",
    "options": [
      "59",
      "64",
      "66",
      "74"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #703: What is 48 × 29?",
    "options": [
      "1392",
      "1404",
      "1382",
      "1397"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #704: What is 65 - 22?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #705: What is 23 + 58?",
    "options": [
      "76",
      "81",
      "83",
      "91"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #706: What is 25 × 95?",
    "options": [
      "2375",
      "2387",
      "2365",
      "2380"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #707: What is 24 - 11?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #708: What is 94 + 16?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #709: What is 93 × 80?",
    "options": [
      "7440",
      "7452",
      "7430",
      "7445"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #710: What is 58 - 33?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #711: What is 50 + 29?",
    "options": [
      "74",
      "79",
      "81",
      "89"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #712: What is 21 × 62?",
    "options": [
      "1302",
      "1314",
      "1292",
      "1307"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #713: What is 24 - 20?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #714: What is 25 + 98?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #715: What is 28 × 36?",
    "options": [
      "1008",
      "1020",
      "998",
      "1013"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #716: What is 84 - 15?",
    "options": [
      "72",
      "67",
      "69",
      "77"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #717: What is 30 + 81?",
    "options": [
      "106",
      "111",
      "113",
      "121"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #718: What is 51 × 54?",
    "options": [
      "2754",
      "2766",
      "2744",
      "2759"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #719: What is 92 - 20?",
    "options": [
      "75",
      "70",
      "72",
      "80"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #720: What is 91 + 93?",
    "options": [
      "179",
      "184",
      "186",
      "194"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #721: What is 71 × 66?",
    "options": [
      "4686",
      "4698",
      "4676",
      "4691"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #722: What is 41 - 33?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #723: What is 12 + 85?",
    "options": [
      "92",
      "97",
      "99",
      "107"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #724: What is 10 × 82?",
    "options": [
      "820",
      "832",
      "810",
      "825"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #725: What is 61 - 19?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #726: What is 95 + 13?",
    "options": [
      "103",
      "108",
      "110",
      "118"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #727: What is 75 × 45?",
    "options": [
      "3375",
      "3387",
      "3365",
      "3380"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #728: What is 67 - 23?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #729: What is 54 + 45?",
    "options": [
      "94",
      "99",
      "101",
      "109"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #730: What is 99 × 31?",
    "options": [
      "3069",
      "3081",
      "3059",
      "3074"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #731: What is 66 - 35?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #732: What is 47 + 42?",
    "options": [
      "84",
      "89",
      "91",
      "99"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #733: What is 70 × 89?",
    "options": [
      "6230",
      "6242",
      "6220",
      "6235"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #734: What is 85 - 77?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #735: What is 11 + 23?",
    "options": [
      "29",
      "34",
      "36",
      "44"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #736: What is 85 × 95?",
    "options": [
      "8075",
      "8087",
      "8065",
      "8080"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #737: What is 39 - 19?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #738: What is 92 + 36?",
    "options": [
      "123",
      "128",
      "130",
      "138"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #739: What is 86 × 33?",
    "options": [
      "2838",
      "2850",
      "2828",
      "2843"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #740: What is 61 - 51?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #741: What is 47 + 22?",
    "options": [
      "64",
      "69",
      "71",
      "79"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #742: What is 20 × 63?",
    "options": [
      "1260",
      "1272",
      "1250",
      "1265"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #743: What is 93 - 56?",
    "options": [
      "40",
      "35",
      "37",
      "45"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #744: What is 28 + 46?",
    "options": [
      "69",
      "74",
      "76",
      "84"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #745: What is 91 × 75?",
    "options": [
      "6825",
      "6837",
      "6815",
      "6830"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #746: What is 58 - 49?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #747: What is 62 + 15?",
    "options": [
      "72",
      "77",
      "79",
      "87"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #748: What is 77 × 40?",
    "options": [
      "3080",
      "3092",
      "3070",
      "3085"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #749: What is 85 - 76?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #750: What is 43 + 27?",
    "options": [
      "65",
      "70",
      "72",
      "80"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #751: What is 24 × 76?",
    "options": [
      "1824",
      "1836",
      "1814",
      "1829"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #752: What is 40 - 15?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #753: What is 92 + 54?",
    "options": [
      "141",
      "146",
      "148",
      "156"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #754: What is 43 × 57?",
    "options": [
      "2451",
      "2463",
      "2441",
      "2456"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #755: What is 64 - 62?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #756: What is 11 + 54?",
    "options": [
      "60",
      "65",
      "67",
      "75"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #757: What is 38 × 98?",
    "options": [
      "3724",
      "3736",
      "3714",
      "3729"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #758: What is 38 - 29?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #759: What is 80 + 30?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #760: What is 17 × 95?",
    "options": [
      "1615",
      "1627",
      "1605",
      "1620"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #761: What is 97 - 55?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #762: What is 37 + 12?",
    "options": [
      "44",
      "49",
      "51",
      "59"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #763: What is 26 × 97?",
    "options": [
      "2522",
      "2534",
      "2512",
      "2527"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #764: What is 87 - 69?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #765: What is 85 + 62?",
    "options": [
      "142",
      "147",
      "149",
      "157"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #766: What is 69 × 10?",
    "options": [
      "690",
      "702",
      "680",
      "695"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #767: What is 92 - 86?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #768: What is 10 + 29?",
    "options": [
      "34",
      "39",
      "41",
      "49"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #769: What is 76 × 11?",
    "options": [
      "836",
      "848",
      "826",
      "841"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #770: What is 35 - 24?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #771: What is 41 + 72?",
    "options": [
      "108",
      "113",
      "115",
      "123"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #772: What is 57 × 18?",
    "options": [
      "1026",
      "1038",
      "1016",
      "1031"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #773: What is 92 - 36?",
    "options": [
      "59",
      "54",
      "56",
      "64"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #774: What is 29 + 55?",
    "options": [
      "79",
      "84",
      "86",
      "94"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #775: What is 86 × 16?",
    "options": [
      "1376",
      "1388",
      "1366",
      "1381"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #776: What is 32 - 32?",
    "options": [
      "3",
      "-2",
      "0",
      "8"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #777: What is 25 + 56?",
    "options": [
      "76",
      "81",
      "83",
      "91"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #778: What is 25 × 64?",
    "options": [
      "1600",
      "1612",
      "1590",
      "1605"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #779: What is 86 - 38?",
    "options": [
      "51",
      "46",
      "48",
      "56"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #780: What is 33 + 71?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #781: What is 21 × 81?",
    "options": [
      "1701",
      "1713",
      "1691",
      "1706"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #782: What is 95 - 13?",
    "options": [
      "85",
      "80",
      "82",
      "90"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #783: What is 28 + 36?",
    "options": [
      "59",
      "64",
      "66",
      "74"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #784: What is 70 × 40?",
    "options": [
      "2800",
      "2812",
      "2790",
      "2805"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #785: What is 99 - 91?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #786: What is 18 + 13?",
    "options": [
      "26",
      "31",
      "33",
      "41"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #787: What is 73 × 90?",
    "options": [
      "6570",
      "6582",
      "6560",
      "6575"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #788: What is 86 - 55?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #789: What is 45 + 43?",
    "options": [
      "83",
      "88",
      "90",
      "98"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #790: What is 95 × 36?",
    "options": [
      "3420",
      "3432",
      "3410",
      "3425"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #791: What is 98 - 55?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #792: What is 85 + 93?",
    "options": [
      "173",
      "178",
      "180",
      "188"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #793: What is 37 × 55?",
    "options": [
      "2035",
      "2047",
      "2025",
      "2040"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #794: What is 32 - 22?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #795: What is 57 + 40?",
    "options": [
      "92",
      "97",
      "99",
      "107"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #796: What is 21 × 58?",
    "options": [
      "1218",
      "1230",
      "1208",
      "1223"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #797: What is 22 - 14?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #798: What is 44 + 38?",
    "options": [
      "77",
      "82",
      "84",
      "92"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #799: What is 36 × 48?",
    "options": [
      "1728",
      "1740",
      "1718",
      "1733"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #800: What is 88 - 65?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #801: What is 39 + 17?",
    "options": [
      "51",
      "56",
      "58",
      "66"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #802: What is 34 × 23?",
    "options": [
      "782",
      "794",
      "772",
      "787"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #803: What is 54 - 18?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #804: What is 58 + 81?",
    "options": [
      "134",
      "139",
      "141",
      "149"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #805: What is 23 × 38?",
    "options": [
      "874",
      "886",
      "864",
      "879"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #806: What is 79 - 32?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #807: What is 62 + 46?",
    "options": [
      "103",
      "108",
      "110",
      "118"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #808: What is 77 × 93?",
    "options": [
      "7161",
      "7173",
      "7151",
      "7166"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #809: What is 92 - 57?",
    "options": [
      "38",
      "33",
      "35",
      "43"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #810: What is 68 + 27?",
    "options": [
      "90",
      "95",
      "97",
      "105"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #811: What is 60 × 10?",
    "options": [
      "600",
      "612",
      "590",
      "605"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #812: What is 73 - 41?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #813: What is 46 + 76?",
    "options": [
      "117",
      "122",
      "124",
      "132"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #814: What is 28 × 86?",
    "options": [
      "2408",
      "2420",
      "2398",
      "2413"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #815: What is 42 - 29?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #816: What is 70 + 47?",
    "options": [
      "112",
      "117",
      "119",
      "127"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #817: What is 96 × 70?",
    "options": [
      "6720",
      "6732",
      "6710",
      "6725"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #818: What is 49 - 36?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #819: What is 60 + 41?",
    "options": [
      "96",
      "101",
      "103",
      "111"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #820: What is 18 × 43?",
    "options": [
      "774",
      "786",
      "764",
      "779"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #821: What is 79 - 43?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #822: What is 21 + 16?",
    "options": [
      "32",
      "37",
      "39",
      "47"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #823: What is 55 × 59?",
    "options": [
      "3245",
      "3257",
      "3235",
      "3250"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #824: What is 29 - 18?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #825: What is 82 + 26?",
    "options": [
      "103",
      "108",
      "110",
      "118"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #826: What is 71 × 38?",
    "options": [
      "2698",
      "2710",
      "2688",
      "2703"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #827: What is 53 - 12?",
    "options": [
      "44",
      "39",
      "41",
      "49"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #828: What is 32 + 39?",
    "options": [
      "66",
      "71",
      "73",
      "81"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #829: What is 67 × 45?",
    "options": [
      "3015",
      "3027",
      "3005",
      "3020"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #830: What is 40 - 22?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #831: What is 46 + 51?",
    "options": [
      "92",
      "97",
      "99",
      "107"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #832: What is 30 × 44?",
    "options": [
      "1320",
      "1332",
      "1310",
      "1325"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #833: What is 75 - 33?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #834: What is 52 + 85?",
    "options": [
      "132",
      "137",
      "139",
      "147"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #835: What is 81 × 98?",
    "options": [
      "7938",
      "7950",
      "7928",
      "7943"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #836: What is 92 - 13?",
    "options": [
      "82",
      "77",
      "79",
      "87"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #837: What is 80 + 18?",
    "options": [
      "93",
      "98",
      "100",
      "108"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #838: What is 37 × 50?",
    "options": [
      "1850",
      "1862",
      "1840",
      "1855"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #839: What is 79 - 74?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #840: What is 77 + 68?",
    "options": [
      "140",
      "145",
      "147",
      "155"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #841: What is 84 × 77?",
    "options": [
      "6468",
      "6480",
      "6458",
      "6473"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #842: What is 95 - 37?",
    "options": [
      "61",
      "56",
      "58",
      "66"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #843: What is 76 + 35?",
    "options": [
      "106",
      "111",
      "113",
      "121"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #844: What is 25 × 32?",
    "options": [
      "800",
      "812",
      "790",
      "805"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #845: What is 83 - 32?",
    "options": [
      "54",
      "49",
      "51",
      "59"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #846: What is 58 + 20?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #847: What is 13 × 40?",
    "options": [
      "520",
      "532",
      "510",
      "525"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #848: What is 64 - 10?",
    "options": [
      "57",
      "52",
      "54",
      "62"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #849: What is 11 + 49?",
    "options": [
      "55",
      "60",
      "62",
      "70"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #850: What is 73 × 39?",
    "options": [
      "2847",
      "2859",
      "2837",
      "2852"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #851: What is 47 - 10?",
    "options": [
      "40",
      "35",
      "37",
      "45"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #852: What is 52 + 92?",
    "options": [
      "139",
      "144",
      "146",
      "154"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #853: What is 62 × 65?",
    "options": [
      "4030",
      "4042",
      "4020",
      "4035"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #854: What is 50 - 35?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #855: What is 82 + 50?",
    "options": [
      "127",
      "132",
      "134",
      "142"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #856: What is 11 × 32?",
    "options": [
      "352",
      "364",
      "342",
      "357"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #857: What is 43 - 43?",
    "options": [
      "3",
      "-2",
      "0",
      "8"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #858: What is 88 + 90?",
    "options": [
      "173",
      "178",
      "180",
      "188"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #859: What is 50 × 85?",
    "options": [
      "4250",
      "4262",
      "4240",
      "4255"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #860: What is 75 - 21?",
    "options": [
      "57",
      "52",
      "54",
      "62"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #861: What is 92 + 11?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #862: What is 17 × 19?",
    "options": [
      "323",
      "335",
      "313",
      "328"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #863: What is 74 - 70?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #864: What is 63 + 36?",
    "options": [
      "94",
      "99",
      "101",
      "109"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #865: What is 53 × 11?",
    "options": [
      "583",
      "595",
      "573",
      "588"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #866: What is 76 - 32?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #867: What is 14 + 52?",
    "options": [
      "61",
      "66",
      "68",
      "76"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #868: What is 95 × 49?",
    "options": [
      "4655",
      "4667",
      "4645",
      "4660"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #869: What is 67 - 24?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #870: What is 63 + 29?",
    "options": [
      "87",
      "92",
      "94",
      "102"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #871: What is 85 × 59?",
    "options": [
      "5015",
      "5027",
      "5005",
      "5020"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #872: What is 19 - 13?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #873: What is 74 + 83?",
    "options": [
      "152",
      "157",
      "159",
      "167"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #874: What is 60 × 20?",
    "options": [
      "1200",
      "1212",
      "1190",
      "1205"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #875: What is 88 - 76?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #876: What is 22 + 53?",
    "options": [
      "70",
      "75",
      "77",
      "85"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #877: What is 26 × 76?",
    "options": [
      "1976",
      "1988",
      "1966",
      "1981"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #878: What is 77 - 35?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #879: What is 74 + 83?",
    "options": [
      "152",
      "157",
      "159",
      "167"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #880: What is 51 × 74?",
    "options": [
      "3774",
      "3786",
      "3764",
      "3779"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #881: What is 78 - 58?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #882: What is 81 + 28?",
    "options": [
      "104",
      "109",
      "111",
      "119"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #883: What is 10 × 14?",
    "options": [
      "140",
      "152",
      "130",
      "145"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #884: What is 74 - 67?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #885: What is 60 + 56?",
    "options": [
      "111",
      "116",
      "118",
      "126"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #886: What is 38 × 16?",
    "options": [
      "608",
      "620",
      "598",
      "613"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #887: What is 80 - 30?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #888: What is 64 + 83?",
    "options": [
      "142",
      "147",
      "149",
      "157"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #889: What is 19 × 54?",
    "options": [
      "1026",
      "1038",
      "1016",
      "1031"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #890: What is 93 - 63?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #891: What is 36 + 13?",
    "options": [
      "44",
      "49",
      "51",
      "59"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #892: What is 88 × 38?",
    "options": [
      "3344",
      "3356",
      "3334",
      "3349"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #893: What is 46 - 13?",
    "options": [
      "36",
      "31",
      "33",
      "41"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #894: What is 93 + 10?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #895: What is 58 × 33?",
    "options": [
      "1914",
      "1926",
      "1904",
      "1919"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #896: What is 69 - 27?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #897: What is 13 + 92?",
    "options": [
      "100",
      "105",
      "107",
      "115"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #898: What is 57 × 73?",
    "options": [
      "4161",
      "4173",
      "4151",
      "4166"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #899: What is 70 - 23?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #900: What is 78 + 82?",
    "options": [
      "155",
      "160",
      "162",
      "170"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #901: What is 66 × 50?",
    "options": [
      "3300",
      "3312",
      "3290",
      "3305"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #902: What is 46 - 19?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #903: What is 96 + 74?",
    "options": [
      "165",
      "170",
      "172",
      "180"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #904: What is 56 × 72?",
    "options": [
      "4032",
      "4044",
      "4022",
      "4037"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #905: What is 96 - 82?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #906: What is 55 + 75?",
    "options": [
      "125",
      "130",
      "132",
      "140"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #907: What is 99 × 19?",
    "options": [
      "1881",
      "1893",
      "1871",
      "1886"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #908: What is 90 - 35?",
    "options": [
      "58",
      "53",
      "55",
      "63"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #909: What is 43 + 50?",
    "options": [
      "88",
      "93",
      "95",
      "103"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #910: What is 29 × 94?",
    "options": [
      "2726",
      "2738",
      "2716",
      "2731"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #911: What is 94 - 90?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #912: What is 12 + 99?",
    "options": [
      "106",
      "111",
      "113",
      "121"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #913: What is 41 × 57?",
    "options": [
      "2337",
      "2349",
      "2327",
      "2342"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #914: What is 61 - 61?",
    "options": [
      "3",
      "-2",
      "0",
      "8"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #915: What is 92 + 15?",
    "options": [
      "102",
      "107",
      "109",
      "117"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #916: What is 28 × 31?",
    "options": [
      "868",
      "880",
      "858",
      "873"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #917: What is 26 - 11?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #918: What is 30 + 58?",
    "options": [
      "83",
      "88",
      "90",
      "98"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #919: What is 23 × 32?",
    "options": [
      "736",
      "748",
      "726",
      "741"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #920: What is 72 - 41?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #921: What is 45 + 80?",
    "options": [
      "120",
      "125",
      "127",
      "135"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #922: What is 54 × 31?",
    "options": [
      "1674",
      "1686",
      "1664",
      "1679"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #923: What is 63 - 34?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #924: What is 13 + 30?",
    "options": [
      "38",
      "43",
      "45",
      "53"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #925: What is 58 × 98?",
    "options": [
      "5684",
      "5696",
      "5674",
      "5689"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #926: What is 91 - 71?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #927: What is 31 + 50?",
    "options": [
      "76",
      "81",
      "83",
      "91"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #928: What is 43 × 75?",
    "options": [
      "3225",
      "3237",
      "3215",
      "3230"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #929: What is 84 - 27?",
    "options": [
      "60",
      "55",
      "57",
      "65"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #930: What is 17 + 27?",
    "options": [
      "39",
      "44",
      "46",
      "54"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #931: What is 36 × 37?",
    "options": [
      "1332",
      "1344",
      "1322",
      "1337"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #932: What is 64 - 62?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #933: What is 21 + 42?",
    "options": [
      "58",
      "63",
      "65",
      "73"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #934: What is 54 × 59?",
    "options": [
      "3186",
      "3198",
      "3176",
      "3191"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #935: What is 94 - 14?",
    "options": [
      "83",
      "78",
      "80",
      "88"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #936: What is 70 + 25?",
    "options": [
      "90",
      "95",
      "97",
      "105"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #937: What is 83 × 99?",
    "options": [
      "8217",
      "8229",
      "8207",
      "8222"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #938: What is 80 - 61?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #939: What is 82 + 18?",
    "options": [
      "95",
      "100",
      "102",
      "110"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #940: What is 41 × 44?",
    "options": [
      "1804",
      "1816",
      "1794",
      "1809"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #941: What is 98 - 48?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #942: What is 96 + 16?",
    "options": [
      "107",
      "112",
      "114",
      "122"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #943: What is 26 × 70?",
    "options": [
      "1820",
      "1832",
      "1810",
      "1825"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #944: What is 49 - 13?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #945: What is 30 + 50?",
    "options": [
      "75",
      "80",
      "82",
      "90"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #946: What is 22 × 30?",
    "options": [
      "660",
      "672",
      "650",
      "665"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #947: What is 58 - 18?",
    "options": [
      "43",
      "38",
      "40",
      "48"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #948: What is 50 + 93?",
    "options": [
      "138",
      "143",
      "145",
      "153"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #949: What is 20 × 26?",
    "options": [
      "520",
      "532",
      "510",
      "525"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #950: What is 98 - 17?",
    "options": [
      "84",
      "79",
      "81",
      "89"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #951: What is 64 + 54?",
    "options": [
      "113",
      "118",
      "120",
      "128"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #952: What is 26 × 50?",
    "options": [
      "1300",
      "1312",
      "1290",
      "1305"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #953: What is 70 - 16?",
    "options": [
      "57",
      "52",
      "54",
      "62"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #954: What is 60 + 49?",
    "options": [
      "104",
      "109",
      "111",
      "119"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #955: What is 26 × 96?",
    "options": [
      "2496",
      "2508",
      "2486",
      "2501"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #956: What is 86 - 60?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #957: What is 82 + 33?",
    "options": [
      "110",
      "115",
      "117",
      "125"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #958: What is 55 × 94?",
    "options": [
      "5170",
      "5182",
      "5160",
      "5175"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #959: What is 49 - 19?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #960: What is 59 + 15?",
    "options": [
      "69",
      "74",
      "76",
      "84"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #961: What is 98 × 50?",
    "options": [
      "4900",
      "4912",
      "4890",
      "4905"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #962: What is 39 - 16?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #963: What is 30 + 25?",
    "options": [
      "50",
      "55",
      "57",
      "65"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #964: What is 39 × 16?",
    "options": [
      "624",
      "636",
      "614",
      "629"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #965: What is 99 - 24?",
    "options": [
      "78",
      "73",
      "75",
      "83"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #966: What is 25 + 12?",
    "options": [
      "32",
      "37",
      "39",
      "47"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #967: What is 47 × 51?",
    "options": [
      "2397",
      "2409",
      "2387",
      "2402"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #968: What is 92 - 29?",
    "options": [
      "66",
      "61",
      "63",
      "71"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #969: What is 33 + 37?",
    "options": [
      "65",
      "70",
      "72",
      "80"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #970: What is 92 × 59?",
    "options": [
      "5428",
      "5440",
      "5418",
      "5433"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #971: What is 85 - 10?",
    "options": [
      "78",
      "73",
      "75",
      "83"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #972: What is 27 + 50?",
    "options": [
      "72",
      "77",
      "79",
      "87"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #973: What is 15 × 43?",
    "options": [
      "645",
      "657",
      "635",
      "650"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #974: What is 78 - 31?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #975: What is 28 + 65?",
    "options": [
      "88",
      "93",
      "95",
      "103"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #976: What is 59 × 48?",
    "options": [
      "2832",
      "2844",
      "2822",
      "2837"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #977: What is 88 - 75?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #978: What is 31 + 89?",
    "options": [
      "115",
      "120",
      "122",
      "130"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #979: What is 56 × 34?",
    "options": [
      "1904",
      "1916",
      "1894",
      "1909"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #980: What is 66 - 12?",
    "options": [
      "57",
      "52",
      "54",
      "62"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #981: What is 85 + 24?",
    "options": [
      "104",
      "109",
      "111",
      "119"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #982: What is 58 × 95?",
    "options": [
      "5510",
      "5522",
      "5500",
      "5515"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #983: What is 92 - 69?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #984: What is 63 + 54?",
    "options": [
      "112",
      "117",
      "119",
      "127"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #985: What is 94 × 59?",
    "options": [
      "5546",
      "5558",
      "5536",
      "5551"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #986: What is 81 - 43?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #987: What is 41 + 48?",
    "options": [
      "84",
      "89",
      "91",
      "99"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #988: What is 12 × 43?",
    "options": [
      "516",
      "528",
      "506",
      "521"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #989: What is 99 - 86?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #990: What is 18 + 96?",
    "options": [
      "109",
      "114",
      "116",
      "124"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #991: What is 13 × 86?",
    "options": [
      "1118",
      "1130",
      "1108",
      "1123"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #992: What is 73 - 68?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #993: What is 49 + 97?",
    "options": [
      "141",
      "146",
      "148",
      "156"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #994: What is 37 × 57?",
    "options": [
      "2109",
      "2121",
      "2099",
      "2114"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #995: What is 98 - 30?",
    "options": [
      "71",
      "66",
      "68",
      "76"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #996: What is 48 + 84?",
    "options": [
      "127",
      "132",
      "134",
      "142"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #997: What is 28 × 43?",
    "options": [
      "1204",
      "1216",
      "1194",
      "1209"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #998: What is 96 - 53?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #999: What is 20 + 52?",
    "options": [
      "67",
      "72",
      "74",
      "82"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1000: What is 62 × 10?",
    "options": [
      "620",
      "632",
      "610",
      "625"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1001: What is 44 - 29?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1002: What is 56 + 71?",
    "options": [
      "122",
      "127",
      "129",
      "137"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1003: What is 74 × 24?",
    "options": [
      "1776",
      "1788",
      "1766",
      "1781"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1004: What is 79 - 33?",
    "options": [
      "49",
      "44",
      "46",
      "54"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1005: What is 44 + 53?",
    "options": [
      "92",
      "97",
      "99",
      "107"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1006: What is 29 × 93?",
    "options": [
      "2697",
      "2709",
      "2687",
      "2702"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1007: What is 37 - 28?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1008: What is 14 + 29?",
    "options": [
      "38",
      "43",
      "45",
      "53"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1009: What is 63 × 58?",
    "options": [
      "3654",
      "3666",
      "3644",
      "3659"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1010: What is 51 - 49?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1011: What is 40 + 24?",
    "options": [
      "59",
      "64",
      "66",
      "74"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1012: What is 63 × 59?",
    "options": [
      "3717",
      "3729",
      "3707",
      "3722"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1013: What is 62 - 61?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1014: What is 10 + 40?",
    "options": [
      "45",
      "50",
      "52",
      "60"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1015: What is 91 × 20?",
    "options": [
      "1820",
      "1832",
      "1810",
      "1825"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1016: What is 61 - 28?",
    "options": [
      "36",
      "31",
      "33",
      "41"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1017: What is 38 + 76?",
    "options": [
      "109",
      "114",
      "116",
      "124"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1018: What is 18 × 82?",
    "options": [
      "1476",
      "1488",
      "1466",
      "1481"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1019: What is 85 - 22?",
    "options": [
      "66",
      "61",
      "63",
      "71"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1020: What is 34 + 10?",
    "options": [
      "39",
      "44",
      "46",
      "54"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1021: What is 79 × 48?",
    "options": [
      "3792",
      "3804",
      "3782",
      "3797"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1022: What is 45 - 35?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1023: What is 67 + 37?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1024: What is 33 × 80?",
    "options": [
      "2640",
      "2652",
      "2630",
      "2645"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1025: What is 99 - 89?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1026: What is 46 + 34?",
    "options": [
      "75",
      "80",
      "82",
      "90"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1027: What is 31 × 99?",
    "options": [
      "3069",
      "3081",
      "3059",
      "3074"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1028: What is 36 - 12?",
    "options": [
      "27",
      "22",
      "24",
      "32"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1029: What is 20 + 12?",
    "options": [
      "27",
      "32",
      "34",
      "42"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1030: What is 90 × 94?",
    "options": [
      "8460",
      "8472",
      "8450",
      "8465"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1031: What is 79 - 45?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1032: What is 74 + 34?",
    "options": [
      "103",
      "108",
      "110",
      "118"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1033: What is 47 × 82?",
    "options": [
      "3854",
      "3866",
      "3844",
      "3859"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1034: What is 80 - 49?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1035: What is 17 + 60?",
    "options": [
      "72",
      "77",
      "79",
      "87"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1036: What is 65 × 38?",
    "options": [
      "2470",
      "2482",
      "2460",
      "2475"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1037: What is 65 - 39?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1038: What is 87 + 70?",
    "options": [
      "152",
      "157",
      "159",
      "167"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1039: What is 25 × 66?",
    "options": [
      "1650",
      "1662",
      "1640",
      "1655"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1040: What is 93 - 43?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1041: What is 54 + 89?",
    "options": [
      "138",
      "143",
      "145",
      "153"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1042: What is 38 × 65?",
    "options": [
      "2470",
      "2482",
      "2460",
      "2475"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1043: What is 41 - 25?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1044: What is 12 + 59?",
    "options": [
      "66",
      "71",
      "73",
      "81"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1045: What is 80 × 53?",
    "options": [
      "4240",
      "4252",
      "4230",
      "4245"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1046: What is 75 - 39?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1047: What is 85 + 27?",
    "options": [
      "107",
      "112",
      "114",
      "122"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1048: What is 90 × 70?",
    "options": [
      "6300",
      "6312",
      "6290",
      "6305"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1049: What is 45 - 35?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1050: What is 84 + 96?",
    "options": [
      "175",
      "180",
      "182",
      "190"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1051: What is 94 × 81?",
    "options": [
      "7614",
      "7626",
      "7604",
      "7619"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1052: What is 80 - 36?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1053: What is 91 + 62?",
    "options": [
      "148",
      "153",
      "155",
      "163"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1054: What is 87 × 32?",
    "options": [
      "2784",
      "2796",
      "2774",
      "2789"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1055: What is 64 - 32?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1056: What is 38 + 33?",
    "options": [
      "66",
      "71",
      "73",
      "81"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1057: What is 71 × 99?",
    "options": [
      "7029",
      "7041",
      "7019",
      "7034"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1058: What is 81 - 41?",
    "options": [
      "43",
      "38",
      "40",
      "48"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1059: What is 50 + 42?",
    "options": [
      "87",
      "92",
      "94",
      "102"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1060: What is 95 × 21?",
    "options": [
      "1995",
      "2007",
      "1985",
      "2000"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1061: What is 38 - 15?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1062: What is 42 + 48?",
    "options": [
      "85",
      "90",
      "92",
      "100"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1063: What is 94 × 62?",
    "options": [
      "5828",
      "5840",
      "5818",
      "5833"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1064: What is 77 - 42?",
    "options": [
      "38",
      "33",
      "35",
      "43"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1065: What is 54 + 56?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1066: What is 42 × 94?",
    "options": [
      "3948",
      "3960",
      "3938",
      "3953"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1067: What is 94 - 57?",
    "options": [
      "40",
      "35",
      "37",
      "45"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1068: What is 70 + 22?",
    "options": [
      "87",
      "92",
      "94",
      "102"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1069: What is 69 × 27?",
    "options": [
      "1863",
      "1875",
      "1853",
      "1868"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1070: What is 19 - 11?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1071: What is 36 + 22?",
    "options": [
      "53",
      "58",
      "60",
      "68"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1072: What is 15 × 20?",
    "options": [
      "300",
      "312",
      "290",
      "305"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1073: What is 74 - 13?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1074: What is 14 + 47?",
    "options": [
      "56",
      "61",
      "63",
      "71"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1075: What is 55 × 11?",
    "options": [
      "605",
      "617",
      "595",
      "610"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1076: What is 92 - 29?",
    "options": [
      "66",
      "61",
      "63",
      "71"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1077: What is 37 + 20?",
    "options": [
      "52",
      "57",
      "59",
      "67"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1078: What is 95 × 94?",
    "options": [
      "8930",
      "8942",
      "8920",
      "8935"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1079: What is 88 - 36?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1080: What is 34 + 75?",
    "options": [
      "104",
      "109",
      "111",
      "119"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1081: What is 91 × 17?",
    "options": [
      "1547",
      "1559",
      "1537",
      "1552"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1082: What is 83 - 26?",
    "options": [
      "60",
      "55",
      "57",
      "65"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1083: What is 67 + 71?",
    "options": [
      "133",
      "138",
      "140",
      "148"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1084: What is 50 × 40?",
    "options": [
      "2000",
      "2012",
      "1990",
      "2005"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1085: What is 60 - 51?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1086: What is 32 + 69?",
    "options": [
      "96",
      "101",
      "103",
      "111"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1087: What is 42 × 34?",
    "options": [
      "1428",
      "1440",
      "1418",
      "1433"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1088: What is 94 - 79?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1089: What is 21 + 19?",
    "options": [
      "35",
      "40",
      "42",
      "50"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1090: What is 57 × 58?",
    "options": [
      "3306",
      "3318",
      "3296",
      "3311"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1091: What is 54 - 21?",
    "options": [
      "36",
      "31",
      "33",
      "41"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1092: What is 99 + 88?",
    "options": [
      "182",
      "187",
      "189",
      "197"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1093: What is 53 × 71?",
    "options": [
      "3763",
      "3775",
      "3753",
      "3768"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1094: What is 79 - 68?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1095: What is 28 + 45?",
    "options": [
      "68",
      "73",
      "75",
      "83"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1096: What is 61 × 18?",
    "options": [
      "1098",
      "1110",
      "1088",
      "1103"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1097: What is 96 - 19?",
    "options": [
      "80",
      "75",
      "77",
      "85"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1098: What is 69 + 86?",
    "options": [
      "150",
      "155",
      "157",
      "165"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1099: What is 69 × 47?",
    "options": [
      "3243",
      "3255",
      "3233",
      "3248"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1100: What is 45 - 26?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1101: What is 48 + 92?",
    "options": [
      "135",
      "140",
      "142",
      "150"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1102: What is 64 × 70?",
    "options": [
      "4480",
      "4492",
      "4470",
      "4485"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1103: What is 62 - 54?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1104: What is 37 + 46?",
    "options": [
      "78",
      "83",
      "85",
      "93"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1105: What is 55 × 36?",
    "options": [
      "1980",
      "1992",
      "1970",
      "1985"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1106: What is 84 - 60?",
    "options": [
      "27",
      "22",
      "24",
      "32"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1107: What is 64 + 55?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1108: What is 95 × 83?",
    "options": [
      "7885",
      "7897",
      "7875",
      "7890"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1109: What is 98 - 96?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1110: What is 83 + 65?",
    "options": [
      "143",
      "148",
      "150",
      "158"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1111: What is 84 × 19?",
    "options": [
      "1596",
      "1608",
      "1586",
      "1601"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1112: What is 58 - 57?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1113: What is 74 + 62?",
    "options": [
      "131",
      "136",
      "138",
      "146"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1114: What is 85 × 53?",
    "options": [
      "4505",
      "4517",
      "4495",
      "4510"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1115: What is 93 - 26?",
    "options": [
      "70",
      "65",
      "67",
      "75"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1116: What is 51 + 61?",
    "options": [
      "107",
      "112",
      "114",
      "122"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1117: What is 97 × 37?",
    "options": [
      "3589",
      "3601",
      "3579",
      "3594"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1118: What is 96 - 70?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1119: What is 63 + 59?",
    "options": [
      "117",
      "122",
      "124",
      "132"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1120: What is 53 × 82?",
    "options": [
      "4346",
      "4358",
      "4336",
      "4351"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1121: What is 59 - 13?",
    "options": [
      "49",
      "44",
      "46",
      "54"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1122: What is 84 + 69?",
    "options": [
      "148",
      "153",
      "155",
      "163"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1123: What is 96 × 12?",
    "options": [
      "1152",
      "1164",
      "1142",
      "1157"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1124: What is 65 - 36?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1125: What is 10 + 26?",
    "options": [
      "31",
      "36",
      "38",
      "46"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1126: What is 34 × 76?",
    "options": [
      "2584",
      "2596",
      "2574",
      "2589"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1127: What is 68 - 30?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1128: What is 73 + 43?",
    "options": [
      "111",
      "116",
      "118",
      "126"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1129: What is 32 × 11?",
    "options": [
      "352",
      "364",
      "342",
      "357"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1130: What is 95 - 28?",
    "options": [
      "70",
      "65",
      "67",
      "75"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1131: What is 17 + 51?",
    "options": [
      "63",
      "68",
      "70",
      "78"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1132: What is 76 × 90?",
    "options": [
      "6840",
      "6852",
      "6830",
      "6845"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1133: What is 60 - 34?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1134: What is 11 + 19?",
    "options": [
      "25",
      "30",
      "32",
      "40"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1135: What is 71 × 65?",
    "options": [
      "4615",
      "4627",
      "4605",
      "4620"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1136: What is 70 - 32?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1137: What is 39 + 91?",
    "options": [
      "125",
      "130",
      "132",
      "140"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1138: What is 41 × 72?",
    "options": [
      "2952",
      "2964",
      "2942",
      "2957"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1139: What is 93 - 30?",
    "options": [
      "66",
      "61",
      "63",
      "71"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1140: What is 12 + 18?",
    "options": [
      "25",
      "30",
      "32",
      "40"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1141: What is 45 × 29?",
    "options": [
      "1305",
      "1317",
      "1295",
      "1310"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1142: What is 81 - 63?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1143: What is 50 + 78?",
    "options": [
      "123",
      "128",
      "130",
      "138"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1144: What is 44 × 67?",
    "options": [
      "2948",
      "2960",
      "2938",
      "2953"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1145: What is 44 - 29?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1146: What is 26 + 43?",
    "options": [
      "64",
      "69",
      "71",
      "79"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1147: What is 35 × 80?",
    "options": [
      "2800",
      "2812",
      "2790",
      "2805"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1148: What is 51 - 41?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1149: What is 47 + 76?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1150: What is 53 × 96?",
    "options": [
      "5088",
      "5100",
      "5078",
      "5093"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1151: What is 69 - 12?",
    "options": [
      "60",
      "55",
      "57",
      "65"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1152: What is 96 + 47?",
    "options": [
      "138",
      "143",
      "145",
      "153"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1153: What is 16 × 49?",
    "options": [
      "784",
      "796",
      "774",
      "789"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1154: What is 87 - 37?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1155: What is 80 + 26?",
    "options": [
      "101",
      "106",
      "108",
      "116"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1156: What is 27 × 82?",
    "options": [
      "2214",
      "2226",
      "2204",
      "2219"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1157: What is 84 - 71?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1158: What is 61 + 45?",
    "options": [
      "101",
      "106",
      "108",
      "116"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1159: What is 48 × 60?",
    "options": [
      "2880",
      "2892",
      "2870",
      "2885"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1160: What is 85 - 83?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1161: What is 68 + 67?",
    "options": [
      "130",
      "135",
      "137",
      "145"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1162: What is 66 × 11?",
    "options": [
      "726",
      "738",
      "716",
      "731"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1163: What is 80 - 40?",
    "options": [
      "43",
      "38",
      "40",
      "48"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1164: What is 12 + 31?",
    "options": [
      "38",
      "43",
      "45",
      "53"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1165: What is 40 × 58?",
    "options": [
      "2320",
      "2332",
      "2310",
      "2325"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1166: What is 85 - 20?",
    "options": [
      "68",
      "63",
      "65",
      "73"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1167: What is 94 + 99?",
    "options": [
      "188",
      "193",
      "195",
      "203"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1168: What is 42 × 41?",
    "options": [
      "1722",
      "1734",
      "1712",
      "1727"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1169: What is 56 - 53?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1170: What is 13 + 62?",
    "options": [
      "70",
      "75",
      "77",
      "85"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1171: What is 68 × 35?",
    "options": [
      "2380",
      "2392",
      "2370",
      "2385"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1172: What is 63 - 48?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1173: What is 74 + 31?",
    "options": [
      "100",
      "105",
      "107",
      "115"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1174: What is 80 × 18?",
    "options": [
      "1440",
      "1452",
      "1430",
      "1445"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1175: What is 88 - 71?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1176: What is 88 + 92?",
    "options": [
      "175",
      "180",
      "182",
      "190"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1177: What is 81 × 34?",
    "options": [
      "2754",
      "2766",
      "2744",
      "2759"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1178: What is 88 - 15?",
    "options": [
      "76",
      "71",
      "73",
      "81"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1179: What is 63 + 30?",
    "options": [
      "88",
      "93",
      "95",
      "103"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1180: What is 86 × 14?",
    "options": [
      "1204",
      "1216",
      "1194",
      "1209"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1181: What is 57 - 37?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1182: What is 41 + 93?",
    "options": [
      "129",
      "134",
      "136",
      "144"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1183: What is 52 × 66?",
    "options": [
      "3432",
      "3444",
      "3422",
      "3437"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1184: What is 86 - 70?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1185: What is 79 + 64?",
    "options": [
      "138",
      "143",
      "145",
      "153"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1186: What is 17 × 13?",
    "options": [
      "221",
      "233",
      "211",
      "226"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1187: What is 40 - 28?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1188: What is 45 + 87?",
    "options": [
      "127",
      "132",
      "134",
      "142"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1189: What is 64 × 86?",
    "options": [
      "5504",
      "5516",
      "5494",
      "5509"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1190: What is 46 - 19?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1191: What is 63 + 66?",
    "options": [
      "124",
      "129",
      "131",
      "139"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1192: What is 19 × 23?",
    "options": [
      "437",
      "449",
      "427",
      "442"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1193: What is 50 - 45?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1194: What is 89 + 20?",
    "options": [
      "104",
      "109",
      "111",
      "119"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1195: What is 87 × 33?",
    "options": [
      "2871",
      "2883",
      "2861",
      "2876"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1196: What is 95 - 11?",
    "options": [
      "87",
      "82",
      "84",
      "92"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1197: What is 30 + 34?",
    "options": [
      "59",
      "64",
      "66",
      "74"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1198: What is 65 × 21?",
    "options": [
      "1365",
      "1377",
      "1355",
      "1370"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1199: What is 24 - 22?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1200: What is 74 + 95?",
    "options": [
      "164",
      "169",
      "171",
      "179"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1201: What is 12 × 90?",
    "options": [
      "1080",
      "1092",
      "1070",
      "1085"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1202: What is 50 - 30?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1203: What is 98 + 64?",
    "options": [
      "157",
      "162",
      "164",
      "172"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1204: What is 10 × 82?",
    "options": [
      "820",
      "832",
      "810",
      "825"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1205: What is 96 - 24?",
    "options": [
      "75",
      "70",
      "72",
      "80"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1206: What is 63 + 69?",
    "options": [
      "127",
      "132",
      "134",
      "142"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1207: What is 69 × 33?",
    "options": [
      "2277",
      "2289",
      "2267",
      "2282"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1208: What is 68 - 63?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1209: What is 60 + 78?",
    "options": [
      "133",
      "138",
      "140",
      "148"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1210: What is 25 × 10?",
    "options": [
      "250",
      "262",
      "240",
      "255"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1211: What is 86 - 58?",
    "options": [
      "31",
      "26",
      "28",
      "36"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1212: What is 36 + 66?",
    "options": [
      "97",
      "102",
      "104",
      "112"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1213: What is 40 × 13?",
    "options": [
      "520",
      "532",
      "510",
      "525"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1214: What is 58 - 39?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1215: What is 44 + 47?",
    "options": [
      "86",
      "91",
      "93",
      "101"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1216: What is 36 × 72?",
    "options": [
      "2592",
      "2604",
      "2582",
      "2597"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1217: What is 29 - 28?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1218: What is 39 + 54?",
    "options": [
      "88",
      "93",
      "95",
      "103"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1219: What is 67 × 93?",
    "options": [
      "6231",
      "6243",
      "6221",
      "6236"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1220: What is 95 - 64?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1221: What is 92 + 45?",
    "options": [
      "132",
      "137",
      "139",
      "147"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1222: What is 94 × 72?",
    "options": [
      "6768",
      "6780",
      "6758",
      "6773"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1223: What is 98 - 53?",
    "options": [
      "48",
      "43",
      "45",
      "53"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1224: What is 33 + 87?",
    "options": [
      "115",
      "120",
      "122",
      "130"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1225: What is 80 × 97?",
    "options": [
      "7760",
      "7772",
      "7750",
      "7765"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1226: What is 40 - 29?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1227: What is 35 + 29?",
    "options": [
      "59",
      "64",
      "66",
      "74"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1228: What is 49 × 93?",
    "options": [
      "4557",
      "4569",
      "4547",
      "4562"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1229: What is 48 - 25?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1230: What is 24 + 71?",
    "options": [
      "90",
      "95",
      "97",
      "105"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1231: What is 86 × 61?",
    "options": [
      "5246",
      "5258",
      "5236",
      "5251"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1232: What is 99 - 55?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1233: What is 63 + 16?",
    "options": [
      "74",
      "79",
      "81",
      "89"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1234: What is 64 × 33?",
    "options": [
      "2112",
      "2124",
      "2102",
      "2117"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1235: What is 52 - 26?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1236: What is 35 + 66?",
    "options": [
      "96",
      "101",
      "103",
      "111"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1237: What is 43 × 96?",
    "options": [
      "4128",
      "4140",
      "4118",
      "4133"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1238: What is 99 - 57?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1239: What is 75 + 74?",
    "options": [
      "144",
      "149",
      "151",
      "159"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1240: What is 66 × 81?",
    "options": [
      "5346",
      "5358",
      "5336",
      "5351"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1241: What is 82 - 30?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1242: What is 82 + 20?",
    "options": [
      "97",
      "102",
      "104",
      "112"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1243: What is 99 × 58?",
    "options": [
      "5742",
      "5754",
      "5732",
      "5747"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1244: What is 80 - 53?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1245: What is 39 + 80?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1246: What is 84 × 73?",
    "options": [
      "6132",
      "6144",
      "6122",
      "6137"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1247: What is 94 - 20?",
    "options": [
      "77",
      "72",
      "74",
      "82"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1248: What is 18 + 93?",
    "options": [
      "106",
      "111",
      "113",
      "121"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1249: What is 96 × 80?",
    "options": [
      "7680",
      "7692",
      "7670",
      "7685"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1250: What is 32 - 15?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1251: What is 72 + 46?",
    "options": [
      "113",
      "118",
      "120",
      "128"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1252: What is 33 × 62?",
    "options": [
      "2046",
      "2058",
      "2036",
      "2051"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1253: What is 77 - 69?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1254: What is 27 + 56?",
    "options": [
      "78",
      "83",
      "85",
      "93"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1255: What is 26 × 28?",
    "options": [
      "728",
      "740",
      "718",
      "733"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1256: What is 32 - 29?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1257: What is 50 + 59?",
    "options": [
      "104",
      "109",
      "111",
      "119"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1258: What is 85 × 89?",
    "options": [
      "7565",
      "7577",
      "7555",
      "7570"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1259: What is 78 - 44?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1260: What is 86 + 83?",
    "options": [
      "164",
      "169",
      "171",
      "179"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1261: What is 32 × 70?",
    "options": [
      "2240",
      "2252",
      "2230",
      "2245"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1262: What is 88 - 10?",
    "options": [
      "81",
      "76",
      "78",
      "86"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1263: What is 69 + 50?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1264: What is 88 × 33?",
    "options": [
      "2904",
      "2916",
      "2894",
      "2909"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1265: What is 81 - 47?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1266: What is 54 + 51?",
    "options": [
      "100",
      "105",
      "107",
      "115"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1267: What is 79 × 14?",
    "options": [
      "1106",
      "1118",
      "1096",
      "1111"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1268: What is 76 - 17?",
    "options": [
      "62",
      "57",
      "59",
      "67"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1269: What is 72 + 74?",
    "options": [
      "141",
      "146",
      "148",
      "156"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1270: What is 62 × 96?",
    "options": [
      "5952",
      "5964",
      "5942",
      "5957"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1271: What is 59 - 33?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1272: What is 37 + 46?",
    "options": [
      "78",
      "83",
      "85",
      "93"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1273: What is 69 × 23?",
    "options": [
      "1587",
      "1599",
      "1577",
      "1592"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1274: What is 58 - 32?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1275: What is 45 + 47?",
    "options": [
      "87",
      "92",
      "94",
      "102"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1276: What is 52 × 47?",
    "options": [
      "2444",
      "2456",
      "2434",
      "2449"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1277: What is 82 - 53?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1278: What is 51 + 11?",
    "options": [
      "57",
      "62",
      "64",
      "72"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1279: What is 27 × 80?",
    "options": [
      "2160",
      "2172",
      "2150",
      "2165"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1280: What is 97 - 50?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1281: What is 75 + 70?",
    "options": [
      "140",
      "145",
      "147",
      "155"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1282: What is 35 × 24?",
    "options": [
      "840",
      "852",
      "830",
      "845"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1283: What is 85 - 80?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1284: What is 39 + 31?",
    "options": [
      "65",
      "70",
      "72",
      "80"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1285: What is 97 × 44?",
    "options": [
      "4268",
      "4280",
      "4258",
      "4273"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1286: What is 81 - 78?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1287: What is 34 + 89?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1288: What is 48 × 48?",
    "options": [
      "2304",
      "2316",
      "2294",
      "2309"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1289: What is 12 - 10?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1290: What is 64 + 12?",
    "options": [
      "71",
      "76",
      "78",
      "86"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1291: What is 35 × 52?",
    "options": [
      "1820",
      "1832",
      "1810",
      "1825"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1292: What is 38 - 13?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1293: What is 95 + 33?",
    "options": [
      "123",
      "128",
      "130",
      "138"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1294: What is 26 × 35?",
    "options": [
      "910",
      "922",
      "900",
      "915"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1295: What is 80 - 61?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1296: What is 15 + 43?",
    "options": [
      "53",
      "58",
      "60",
      "68"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1297: What is 44 × 98?",
    "options": [
      "4312",
      "4324",
      "4302",
      "4317"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1298: What is 98 - 18?",
    "options": [
      "83",
      "78",
      "80",
      "88"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1299: What is 97 + 66?",
    "options": [
      "158",
      "163",
      "165",
      "173"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1300: What is 87 × 30?",
    "options": [
      "2610",
      "2622",
      "2600",
      "2615"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1301: What is 75 - 34?",
    "options": [
      "44",
      "39",
      "41",
      "49"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1302: What is 15 + 11?",
    "options": [
      "21",
      "26",
      "28",
      "36"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1303: What is 29 × 76?",
    "options": [
      "2204",
      "2216",
      "2194",
      "2209"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1304: What is 38 - 25?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1305: What is 94 + 24?",
    "options": [
      "113",
      "118",
      "120",
      "128"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1306: What is 66 × 57?",
    "options": [
      "3762",
      "3774",
      "3752",
      "3767"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1307: What is 63 - 18?",
    "options": [
      "48",
      "43",
      "45",
      "53"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1308: What is 81 + 12?",
    "options": [
      "88",
      "93",
      "95",
      "103"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1309: What is 87 × 43?",
    "options": [
      "3741",
      "3753",
      "3731",
      "3746"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1310: What is 74 - 73?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1311: What is 88 + 38?",
    "options": [
      "121",
      "126",
      "128",
      "136"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1312: What is 59 × 85?",
    "options": [
      "5015",
      "5027",
      "5005",
      "5020"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1313: What is 27 - 22?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1314: What is 84 + 70?",
    "options": [
      "149",
      "154",
      "156",
      "164"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1315: What is 86 × 86?",
    "options": [
      "7396",
      "7408",
      "7386",
      "7401"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1316: What is 78 - 38?",
    "options": [
      "43",
      "38",
      "40",
      "48"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1317: What is 17 + 11?",
    "options": [
      "23",
      "28",
      "30",
      "38"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1318: What is 73 × 24?",
    "options": [
      "1752",
      "1764",
      "1742",
      "1757"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1319: What is 40 - 19?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1320: What is 28 + 29?",
    "options": [
      "52",
      "57",
      "59",
      "67"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1321: What is 80 × 18?",
    "options": [
      "1440",
      "1452",
      "1430",
      "1445"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1322: What is 81 - 67?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1323: What is 50 + 42?",
    "options": [
      "87",
      "92",
      "94",
      "102"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1324: What is 32 × 16?",
    "options": [
      "512",
      "524",
      "502",
      "517"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1325: What is 85 - 36?",
    "options": [
      "52",
      "47",
      "49",
      "57"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1326: What is 62 + 28?",
    "options": [
      "85",
      "90",
      "92",
      "100"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1327: What is 74 × 34?",
    "options": [
      "2516",
      "2528",
      "2506",
      "2521"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1328: What is 77 - 27?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1329: What is 98 + 39?",
    "options": [
      "132",
      "137",
      "139",
      "147"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1330: What is 95 × 78?",
    "options": [
      "7410",
      "7422",
      "7400",
      "7415"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1331: What is 63 - 10?",
    "options": [
      "56",
      "51",
      "53",
      "61"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1332: What is 30 + 93?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1333: What is 13 × 85?",
    "options": [
      "1105",
      "1117",
      "1095",
      "1110"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1334: What is 69 - 39?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1335: What is 62 + 68?",
    "options": [
      "125",
      "130",
      "132",
      "140"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1336: What is 92 × 50?",
    "options": [
      "4600",
      "4612",
      "4590",
      "4605"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1337: What is 68 - 42?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1338: What is 62 + 95?",
    "options": [
      "152",
      "157",
      "159",
      "167"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1339: What is 70 × 42?",
    "options": [
      "2940",
      "2952",
      "2930",
      "2945"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1340: What is 95 - 30?",
    "options": [
      "68",
      "63",
      "65",
      "73"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1341: What is 33 + 98?",
    "options": [
      "126",
      "131",
      "133",
      "141"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1342: What is 16 × 37?",
    "options": [
      "592",
      "604",
      "582",
      "597"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1343: What is 60 - 33?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1344: What is 20 + 11?",
    "options": [
      "26",
      "31",
      "33",
      "41"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1345: What is 95 × 72?",
    "options": [
      "6840",
      "6852",
      "6830",
      "6845"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1346: What is 33 - 15?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1347: What is 84 + 95?",
    "options": [
      "174",
      "179",
      "181",
      "189"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1348: What is 35 × 50?",
    "options": [
      "1750",
      "1762",
      "1740",
      "1755"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1349: What is 79 - 18?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1350: What is 88 + 59?",
    "options": [
      "142",
      "147",
      "149",
      "157"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1351: What is 12 × 76?",
    "options": [
      "912",
      "924",
      "902",
      "917"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1352: What is 94 - 47?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1353: What is 33 + 86?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1354: What is 33 × 40?",
    "options": [
      "1320",
      "1332",
      "1310",
      "1325"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1355: What is 68 - 56?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1356: What is 56 + 16?",
    "options": [
      "67",
      "72",
      "74",
      "82"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1357: What is 46 × 56?",
    "options": [
      "2576",
      "2588",
      "2566",
      "2581"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1358: What is 71 - 25?",
    "options": [
      "49",
      "44",
      "46",
      "54"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1359: What is 40 + 27?",
    "options": [
      "62",
      "67",
      "69",
      "77"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1360: What is 48 × 29?",
    "options": [
      "1392",
      "1404",
      "1382",
      "1397"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1361: What is 77 - 75?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1362: What is 76 + 17?",
    "options": [
      "88",
      "93",
      "95",
      "103"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1363: What is 42 × 15?",
    "options": [
      "630",
      "642",
      "620",
      "635"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1364: What is 87 - 72?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1365: What is 13 + 77?",
    "options": [
      "85",
      "90",
      "92",
      "100"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1366: What is 88 × 44?",
    "options": [
      "3872",
      "3884",
      "3862",
      "3877"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1367: What is 28 - 13?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1368: What is 74 + 49?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1369: What is 32 × 48?",
    "options": [
      "1536",
      "1548",
      "1526",
      "1541"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1370: What is 35 - 25?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1371: What is 77 + 36?",
    "options": [
      "108",
      "113",
      "115",
      "123"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1372: What is 51 × 43?",
    "options": [
      "2193",
      "2205",
      "2183",
      "2198"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1373: What is 58 - 14?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1374: What is 37 + 54?",
    "options": [
      "86",
      "91",
      "93",
      "101"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1375: What is 79 × 94?",
    "options": [
      "7426",
      "7438",
      "7416",
      "7431"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1376: What is 28 - 17?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1377: What is 62 + 22?",
    "options": [
      "79",
      "84",
      "86",
      "94"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1378: What is 75 × 39?",
    "options": [
      "2925",
      "2937",
      "2915",
      "2930"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1379: What is 66 - 12?",
    "options": [
      "57",
      "52",
      "54",
      "62"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1380: What is 83 + 38?",
    "options": [
      "116",
      "121",
      "123",
      "131"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1381: What is 88 × 17?",
    "options": [
      "1496",
      "1508",
      "1486",
      "1501"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1382: What is 85 - 64?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1383: What is 90 + 78?",
    "options": [
      "163",
      "168",
      "170",
      "178"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1384: What is 12 × 75?",
    "options": [
      "900",
      "912",
      "890",
      "905"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1385: What is 71 - 55?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1386: What is 46 + 82?",
    "options": [
      "123",
      "128",
      "130",
      "138"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1387: What is 55 × 26?",
    "options": [
      "1430",
      "1442",
      "1420",
      "1435"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1388: What is 40 - 22?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1389: What is 84 + 65?",
    "options": [
      "144",
      "149",
      "151",
      "159"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1390: What is 56 × 96?",
    "options": [
      "5376",
      "5388",
      "5366",
      "5381"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1391: What is 81 - 17?",
    "options": [
      "67",
      "62",
      "64",
      "72"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1392: What is 72 + 45?",
    "options": [
      "112",
      "117",
      "119",
      "127"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1393: What is 88 × 28?",
    "options": [
      "2464",
      "2476",
      "2454",
      "2469"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1394: What is 40 - 18?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1395: What is 71 + 52?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1396: What is 36 × 61?",
    "options": [
      "2196",
      "2208",
      "2186",
      "2201"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1397: What is 92 - 49?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1398: What is 88 + 28?",
    "options": [
      "111",
      "116",
      "118",
      "126"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1399: What is 93 × 26?",
    "options": [
      "2418",
      "2430",
      "2408",
      "2423"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1400: What is 66 - 42?",
    "options": [
      "27",
      "22",
      "24",
      "32"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1401: What is 44 + 12?",
    "options": [
      "51",
      "56",
      "58",
      "66"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1402: What is 30 × 11?",
    "options": [
      "330",
      "342",
      "320",
      "335"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1403: What is 49 - 47?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1404: What is 69 + 48?",
    "options": [
      "112",
      "117",
      "119",
      "127"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1405: What is 61 × 55?",
    "options": [
      "3355",
      "3367",
      "3345",
      "3360"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1406: What is 54 - 22?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1407: What is 62 + 65?",
    "options": [
      "122",
      "127",
      "129",
      "137"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1408: What is 11 × 81?",
    "options": [
      "891",
      "903",
      "881",
      "896"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1409: What is 81 - 22?",
    "options": [
      "62",
      "57",
      "59",
      "67"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1410: What is 66 + 45?",
    "options": [
      "106",
      "111",
      "113",
      "121"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1411: What is 19 × 36?",
    "options": [
      "684",
      "696",
      "674",
      "689"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1412: What is 63 - 33?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1413: What is 63 + 48?",
    "options": [
      "106",
      "111",
      "113",
      "121"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1414: What is 96 × 65?",
    "options": [
      "6240",
      "6252",
      "6230",
      "6245"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1415: What is 88 - 29?",
    "options": [
      "62",
      "57",
      "59",
      "67"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1416: What is 29 + 67?",
    "options": [
      "91",
      "96",
      "98",
      "106"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1417: What is 70 × 50?",
    "options": [
      "3500",
      "3512",
      "3490",
      "3505"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1418: What is 79 - 63?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1419: What is 34 + 19?",
    "options": [
      "48",
      "53",
      "55",
      "63"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1420: What is 79 × 51?",
    "options": [
      "4029",
      "4041",
      "4019",
      "4034"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1421: What is 88 - 83?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1422: What is 83 + 73?",
    "options": [
      "151",
      "156",
      "158",
      "166"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1423: What is 25 × 20?",
    "options": [
      "500",
      "512",
      "490",
      "505"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1424: What is 15 - 10?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1425: What is 63 + 54?",
    "options": [
      "112",
      "117",
      "119",
      "127"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1426: What is 70 × 92?",
    "options": [
      "6440",
      "6452",
      "6430",
      "6445"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1427: What is 53 - 16?",
    "options": [
      "40",
      "35",
      "37",
      "45"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1428: What is 26 + 70?",
    "options": [
      "91",
      "96",
      "98",
      "106"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1429: What is 26 × 66?",
    "options": [
      "1716",
      "1728",
      "1706",
      "1721"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1430: What is 68 - 31?",
    "options": [
      "40",
      "35",
      "37",
      "45"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1431: What is 79 + 65?",
    "options": [
      "139",
      "144",
      "146",
      "154"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1432: What is 12 × 84?",
    "options": [
      "1008",
      "1020",
      "998",
      "1013"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1433: What is 44 - 22?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1434: What is 59 + 46?",
    "options": [
      "100",
      "105",
      "107",
      "115"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1435: What is 98 × 41?",
    "options": [
      "4018",
      "4030",
      "4008",
      "4023"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1436: What is 97 - 51?",
    "options": [
      "49",
      "44",
      "46",
      "54"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1437: What is 16 + 45?",
    "options": [
      "56",
      "61",
      "63",
      "71"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1438: What is 99 × 60?",
    "options": [
      "5940",
      "5952",
      "5930",
      "5945"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1439: What is 74 - 47?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1440: What is 27 + 18?",
    "options": [
      "40",
      "45",
      "47",
      "55"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1441: What is 47 × 27?",
    "options": [
      "1269",
      "1281",
      "1259",
      "1274"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1442: What is 94 - 25?",
    "options": [
      "72",
      "67",
      "69",
      "77"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1443: What is 24 + 46?",
    "options": [
      "65",
      "70",
      "72",
      "80"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1444: What is 35 × 34?",
    "options": [
      "1190",
      "1202",
      "1180",
      "1195"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1445: What is 66 - 20?",
    "options": [
      "49",
      "44",
      "46",
      "54"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1446: What is 41 + 98?",
    "options": [
      "134",
      "139",
      "141",
      "149"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1447: What is 74 × 50?",
    "options": [
      "3700",
      "3712",
      "3690",
      "3705"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1448: What is 78 - 60?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1449: What is 65 + 49?",
    "options": [
      "109",
      "114",
      "116",
      "124"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1450: What is 43 × 52?",
    "options": [
      "2236",
      "2248",
      "2226",
      "2241"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1451: What is 51 - 25?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1452: What is 99 + 40?",
    "options": [
      "134",
      "139",
      "141",
      "149"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1453: What is 71 × 83?",
    "options": [
      "5893",
      "5905",
      "5883",
      "5898"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1454: What is 73 - 47?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1455: What is 72 + 28?",
    "options": [
      "95",
      "100",
      "102",
      "110"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1456: What is 78 × 43?",
    "options": [
      "3354",
      "3366",
      "3344",
      "3359"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1457: What is 60 - 34?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1458: What is 62 + 84?",
    "options": [
      "141",
      "146",
      "148",
      "156"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1459: What is 58 × 57?",
    "options": [
      "3306",
      "3318",
      "3296",
      "3311"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1460: What is 84 - 66?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1461: What is 98 + 57?",
    "options": [
      "150",
      "155",
      "157",
      "165"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1462: What is 52 × 71?",
    "options": [
      "3692",
      "3704",
      "3682",
      "3697"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1463: What is 62 - 51?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1464: What is 98 + 32?",
    "options": [
      "125",
      "130",
      "132",
      "140"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1465: What is 88 × 42?",
    "options": [
      "3696",
      "3708",
      "3686",
      "3701"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1466: What is 88 - 79?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1467: What is 76 + 33?",
    "options": [
      "104",
      "109",
      "111",
      "119"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1468: What is 39 × 28?",
    "options": [
      "1092",
      "1104",
      "1082",
      "1097"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1469: What is 29 - 12?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1470: What is 30 + 80?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1471: What is 99 × 47?",
    "options": [
      "4653",
      "4665",
      "4643",
      "4658"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1472: What is 55 - 35?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1473: What is 58 + 17?",
    "options": [
      "70",
      "75",
      "77",
      "85"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1474: What is 60 × 70?",
    "options": [
      "4200",
      "4212",
      "4190",
      "4205"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1475: What is 93 - 85?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1476: What is 64 + 15?",
    "options": [
      "74",
      "79",
      "81",
      "89"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1477: What is 31 × 86?",
    "options": [
      "2666",
      "2678",
      "2656",
      "2671"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1478: What is 99 - 19?",
    "options": [
      "83",
      "78",
      "80",
      "88"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1479: What is 68 + 46?",
    "options": [
      "109",
      "114",
      "116",
      "124"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1480: What is 67 × 60?",
    "options": [
      "4020",
      "4032",
      "4010",
      "4025"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1481: What is 94 - 64?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1482: What is 57 + 49?",
    "options": [
      "101",
      "106",
      "108",
      "116"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1483: What is 84 × 56?",
    "options": [
      "4704",
      "4716",
      "4694",
      "4709"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1484: What is 51 - 26?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1485: What is 16 + 48?",
    "options": [
      "59",
      "64",
      "66",
      "74"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1486: What is 97 × 63?",
    "options": [
      "6111",
      "6123",
      "6101",
      "6116"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1487: What is 41 - 26?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1488: What is 92 + 54?",
    "options": [
      "141",
      "146",
      "148",
      "156"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1489: What is 48 × 57?",
    "options": [
      "2736",
      "2748",
      "2726",
      "2741"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1490: What is 89 - 26?",
    "options": [
      "66",
      "61",
      "63",
      "71"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1491: What is 16 + 87?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1492: What is 22 × 84?",
    "options": [
      "1848",
      "1860",
      "1838",
      "1853"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1493: What is 20 - 17?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1494: What is 47 + 83?",
    "options": [
      "125",
      "130",
      "132",
      "140"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1495: What is 53 × 17?",
    "options": [
      "901",
      "913",
      "891",
      "906"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1496: What is 48 - 26?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1497: What is 74 + 59?",
    "options": [
      "128",
      "133",
      "135",
      "143"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1498: What is 79 × 74?",
    "options": [
      "5846",
      "5858",
      "5836",
      "5851"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1499: What is 47 - 25?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1500: What is 19 + 67?",
    "options": [
      "81",
      "86",
      "88",
      "96"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1501: What is 40 × 25?",
    "options": [
      "1000",
      "1012",
      "990",
      "1005"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1502: What is 98 - 62?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1503: What is 32 + 60?",
    "options": [
      "87",
      "92",
      "94",
      "102"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1504: What is 85 × 82?",
    "options": [
      "6970",
      "6982",
      "6960",
      "6975"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1505: What is 33 - 33?",
    "options": [
      "3",
      "-2",
      "0",
      "8"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1506: What is 60 + 14?",
    "options": [
      "69",
      "74",
      "76",
      "84"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1507: What is 40 × 50?",
    "options": [
      "2000",
      "2012",
      "1990",
      "2005"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1508: What is 95 - 59?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1509: What is 33 + 53?",
    "options": [
      "81",
      "86",
      "88",
      "96"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1510: What is 92 × 15?",
    "options": [
      "1380",
      "1392",
      "1370",
      "1385"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1511: What is 92 - 16?",
    "options": [
      "79",
      "74",
      "76",
      "84"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1512: What is 84 + 22?",
    "options": [
      "101",
      "106",
      "108",
      "116"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1513: What is 68 × 14?",
    "options": [
      "952",
      "964",
      "942",
      "957"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1514: What is 13 - 12?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1515: What is 78 + 43?",
    "options": [
      "116",
      "121",
      "123",
      "131"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1516: What is 18 × 46?",
    "options": [
      "828",
      "840",
      "818",
      "833"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1517: What is 86 - 58?",
    "options": [
      "31",
      "26",
      "28",
      "36"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1518: What is 32 + 90?",
    "options": [
      "117",
      "122",
      "124",
      "132"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1519: What is 91 × 77?",
    "options": [
      "7007",
      "7019",
      "6997",
      "7012"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1520: What is 87 - 56?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1521: What is 51 + 97?",
    "options": [
      "143",
      "148",
      "150",
      "158"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1522: What is 40 × 23?",
    "options": [
      "920",
      "932",
      "910",
      "925"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1523: What is 76 - 62?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1524: What is 28 + 77?",
    "options": [
      "100",
      "105",
      "107",
      "115"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1525: What is 49 × 13?",
    "options": [
      "637",
      "649",
      "627",
      "642"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1526: What is 31 - 16?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1527: What is 42 + 23?",
    "options": [
      "60",
      "65",
      "67",
      "75"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1528: What is 17 × 96?",
    "options": [
      "1632",
      "1644",
      "1622",
      "1637"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1529: What is 51 - 13?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1530: What is 69 + 92?",
    "options": [
      "156",
      "161",
      "163",
      "171"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1531: What is 12 × 17?",
    "options": [
      "204",
      "216",
      "194",
      "209"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1532: What is 84 - 33?",
    "options": [
      "54",
      "49",
      "51",
      "59"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1533: What is 25 + 72?",
    "options": [
      "92",
      "97",
      "99",
      "107"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1534: What is 35 × 84?",
    "options": [
      "2940",
      "2952",
      "2930",
      "2945"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1535: What is 84 - 32?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1536: What is 33 + 13?",
    "options": [
      "41",
      "46",
      "48",
      "56"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1537: What is 30 × 14?",
    "options": [
      "420",
      "432",
      "410",
      "425"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1538: What is 94 - 54?",
    "options": [
      "43",
      "38",
      "40",
      "48"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1539: What is 25 + 91?",
    "options": [
      "111",
      "116",
      "118",
      "126"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1540: What is 42 × 59?",
    "options": [
      "2478",
      "2490",
      "2468",
      "2483"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1541: What is 72 - 28?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1542: What is 29 + 41?",
    "options": [
      "65",
      "70",
      "72",
      "80"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1543: What is 28 × 35?",
    "options": [
      "980",
      "992",
      "970",
      "985"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1544: What is 45 - 32?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1545: What is 26 + 20?",
    "options": [
      "41",
      "46",
      "48",
      "56"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1546: What is 47 × 10?",
    "options": [
      "470",
      "482",
      "460",
      "475"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1547: What is 50 - 17?",
    "options": [
      "36",
      "31",
      "33",
      "41"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1548: What is 45 + 21?",
    "options": [
      "61",
      "66",
      "68",
      "76"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1549: What is 54 × 45?",
    "options": [
      "2430",
      "2442",
      "2420",
      "2435"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1550: What is 33 - 23?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1551: What is 42 + 97?",
    "options": [
      "134",
      "139",
      "141",
      "149"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1552: What is 51 × 49?",
    "options": [
      "2499",
      "2511",
      "2489",
      "2504"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1553: What is 74 - 53?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1554: What is 28 + 46?",
    "options": [
      "69",
      "74",
      "76",
      "84"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1555: What is 11 × 47?",
    "options": [
      "517",
      "529",
      "507",
      "522"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1556: What is 67 - 46?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1557: What is 28 + 80?",
    "options": [
      "103",
      "108",
      "110",
      "118"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1558: What is 25 × 77?",
    "options": [
      "1925",
      "1937",
      "1915",
      "1930"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1559: What is 55 - 30?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1560: What is 51 + 54?",
    "options": [
      "100",
      "105",
      "107",
      "115"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1561: What is 66 × 42?",
    "options": [
      "2772",
      "2784",
      "2762",
      "2777"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1562: What is 91 - 60?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1563: What is 78 + 91?",
    "options": [
      "164",
      "169",
      "171",
      "179"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1564: What is 63 × 23?",
    "options": [
      "1449",
      "1461",
      "1439",
      "1454"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1565: What is 79 - 59?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1566: What is 87 + 23?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1567: What is 61 × 45?",
    "options": [
      "2745",
      "2757",
      "2735",
      "2750"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1568: What is 99 - 53?",
    "options": [
      "49",
      "44",
      "46",
      "54"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1569: What is 75 + 50?",
    "options": [
      "120",
      "125",
      "127",
      "135"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1570: What is 73 × 71?",
    "options": [
      "5183",
      "5195",
      "5173",
      "5188"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1571: What is 65 - 42?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1572: What is 37 + 34?",
    "options": [
      "66",
      "71",
      "73",
      "81"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1573: What is 16 × 27?",
    "options": [
      "432",
      "444",
      "422",
      "437"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1574: What is 50 - 44?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1575: What is 30 + 48?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1576: What is 95 × 85?",
    "options": [
      "8075",
      "8087",
      "8065",
      "8080"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1577: What is 94 - 51?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1578: What is 86 + 28?",
    "options": [
      "109",
      "114",
      "116",
      "124"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1579: What is 56 × 58?",
    "options": [
      "3248",
      "3260",
      "3238",
      "3253"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1580: What is 66 - 30?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1581: What is 37 + 36?",
    "options": [
      "68",
      "73",
      "75",
      "83"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1582: What is 77 × 27?",
    "options": [
      "2079",
      "2091",
      "2069",
      "2084"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1583: What is 19 - 11?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1584: What is 83 + 91?",
    "options": [
      "169",
      "174",
      "176",
      "184"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1585: What is 92 × 31?",
    "options": [
      "2852",
      "2864",
      "2842",
      "2857"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1586: What is 90 - 12?",
    "options": [
      "81",
      "76",
      "78",
      "86"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1587: What is 81 + 23?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1588: What is 64 × 91?",
    "options": [
      "5824",
      "5836",
      "5814",
      "5829"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1589: What is 51 - 45?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1590: What is 84 + 33?",
    "options": [
      "112",
      "117",
      "119",
      "127"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1591: What is 72 × 82?",
    "options": [
      "5904",
      "5916",
      "5894",
      "5909"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1592: What is 71 - 36?",
    "options": [
      "38",
      "33",
      "35",
      "43"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1593: What is 99 + 92?",
    "options": [
      "186",
      "191",
      "193",
      "201"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1594: What is 69 × 15?",
    "options": [
      "1035",
      "1047",
      "1025",
      "1040"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1595: What is 76 - 67?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1596: What is 90 + 34?",
    "options": [
      "119",
      "124",
      "126",
      "134"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1597: What is 67 × 30?",
    "options": [
      "2010",
      "2022",
      "2000",
      "2015"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1598: What is 72 - 20?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1599: What is 21 + 77?",
    "options": [
      "93",
      "98",
      "100",
      "108"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1600: What is 60 × 19?",
    "options": [
      "1140",
      "1152",
      "1130",
      "1145"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1601: What is 99 - 96?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1602: What is 72 + 93?",
    "options": [
      "160",
      "165",
      "167",
      "175"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1603: What is 63 × 34?",
    "options": [
      "2142",
      "2154",
      "2132",
      "2147"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1604: What is 31 - 31?",
    "options": [
      "3",
      "-2",
      "0",
      "8"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1605: What is 66 + 86?",
    "options": [
      "147",
      "152",
      "154",
      "162"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1606: What is 98 × 76?",
    "options": [
      "7448",
      "7460",
      "7438",
      "7453"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1607: What is 92 - 36?",
    "options": [
      "59",
      "54",
      "56",
      "64"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1608: What is 70 + 43?",
    "options": [
      "108",
      "113",
      "115",
      "123"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1609: What is 92 × 80?",
    "options": [
      "7360",
      "7372",
      "7350",
      "7365"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1610: What is 93 - 84?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1611: What is 71 + 86?",
    "options": [
      "152",
      "157",
      "159",
      "167"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1612: What is 51 × 41?",
    "options": [
      "2091",
      "2103",
      "2081",
      "2096"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1613: What is 67 - 44?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1614: What is 59 + 47?",
    "options": [
      "101",
      "106",
      "108",
      "116"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1615: What is 40 × 59?",
    "options": [
      "2360",
      "2372",
      "2350",
      "2365"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1616: What is 57 - 45?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1617: What is 33 + 63?",
    "options": [
      "91",
      "96",
      "98",
      "106"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1618: What is 62 × 92?",
    "options": [
      "5704",
      "5716",
      "5694",
      "5709"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1619: What is 83 - 26?",
    "options": [
      "60",
      "55",
      "57",
      "65"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1620: What is 92 + 92?",
    "options": [
      "179",
      "184",
      "186",
      "194"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1621: What is 48 × 93?",
    "options": [
      "4464",
      "4476",
      "4454",
      "4469"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1622: What is 79 - 42?",
    "options": [
      "40",
      "35",
      "37",
      "45"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1623: What is 38 + 85?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1624: What is 79 × 60?",
    "options": [
      "4740",
      "4752",
      "4730",
      "4745"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1625: What is 71 - 66?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1626: What is 37 + 25?",
    "options": [
      "57",
      "62",
      "64",
      "72"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1627: What is 82 × 96?",
    "options": [
      "7872",
      "7884",
      "7862",
      "7877"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1628: What is 71 - 67?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1629: What is 10 + 73?",
    "options": [
      "78",
      "83",
      "85",
      "93"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1630: What is 18 × 69?",
    "options": [
      "1242",
      "1254",
      "1232",
      "1247"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1631: What is 37 - 15?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1632: What is 72 + 66?",
    "options": [
      "133",
      "138",
      "140",
      "148"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1633: What is 54 × 68?",
    "options": [
      "3672",
      "3684",
      "3662",
      "3677"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1634: What is 84 - 62?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1635: What is 52 + 22?",
    "options": [
      "69",
      "74",
      "76",
      "84"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1636: What is 57 × 49?",
    "options": [
      "2793",
      "2805",
      "2783",
      "2798"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1637: What is 75 - 34?",
    "options": [
      "44",
      "39",
      "41",
      "49"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1638: What is 41 + 52?",
    "options": [
      "88",
      "93",
      "95",
      "103"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1639: What is 70 × 69?",
    "options": [
      "4830",
      "4842",
      "4820",
      "4835"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1640: What is 41 - 32?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1641: What is 50 + 44?",
    "options": [
      "89",
      "94",
      "96",
      "104"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1642: What is 96 × 73?",
    "options": [
      "7008",
      "7020",
      "6998",
      "7013"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1643: What is 79 - 16?",
    "options": [
      "66",
      "61",
      "63",
      "71"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1644: What is 63 + 28?",
    "options": [
      "86",
      "91",
      "93",
      "101"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1645: What is 96 × 55?",
    "options": [
      "5280",
      "5292",
      "5270",
      "5285"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1646: What is 20 - 16?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1647: What is 47 + 28?",
    "options": [
      "70",
      "75",
      "77",
      "85"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1648: What is 32 × 89?",
    "options": [
      "2848",
      "2860",
      "2838",
      "2853"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1649: What is 51 - 28?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1650: What is 76 + 55?",
    "options": [
      "126",
      "131",
      "133",
      "141"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1651: What is 48 × 15?",
    "options": [
      "720",
      "732",
      "710",
      "725"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1652: What is 96 - 63?",
    "options": [
      "36",
      "31",
      "33",
      "41"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1653: What is 15 + 19?",
    "options": [
      "29",
      "34",
      "36",
      "44"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1654: What is 97 × 58?",
    "options": [
      "5626",
      "5638",
      "5616",
      "5631"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1655: What is 87 - 44?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1656: What is 77 + 64?",
    "options": [
      "136",
      "141",
      "143",
      "151"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1657: What is 96 × 47?",
    "options": [
      "4512",
      "4524",
      "4502",
      "4517"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1658: What is 67 - 11?",
    "options": [
      "59",
      "54",
      "56",
      "64"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1659: What is 70 + 28?",
    "options": [
      "93",
      "98",
      "100",
      "108"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1660: What is 30 × 15?",
    "options": [
      "450",
      "462",
      "440",
      "455"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1661: What is 30 - 25?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1662: What is 45 + 43?",
    "options": [
      "83",
      "88",
      "90",
      "98"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1663: What is 53 × 11?",
    "options": [
      "583",
      "595",
      "573",
      "588"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1664: What is 89 - 34?",
    "options": [
      "58",
      "53",
      "55",
      "63"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1665: What is 22 + 67?",
    "options": [
      "84",
      "89",
      "91",
      "99"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1666: What is 97 × 29?",
    "options": [
      "2813",
      "2825",
      "2803",
      "2818"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1667: What is 72 - 50?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1668: What is 16 + 92?",
    "options": [
      "103",
      "108",
      "110",
      "118"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1669: What is 58 × 29?",
    "options": [
      "1682",
      "1694",
      "1672",
      "1687"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1670: What is 68 - 44?",
    "options": [
      "27",
      "22",
      "24",
      "32"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1671: What is 62 + 53?",
    "options": [
      "110",
      "115",
      "117",
      "125"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1672: What is 50 × 49?",
    "options": [
      "2450",
      "2462",
      "2440",
      "2455"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1673: What is 93 - 29?",
    "options": [
      "67",
      "62",
      "64",
      "72"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1674: What is 50 + 61?",
    "options": [
      "106",
      "111",
      "113",
      "121"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1675: What is 35 × 68?",
    "options": [
      "2380",
      "2392",
      "2370",
      "2385"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1676: What is 62 - 38?",
    "options": [
      "27",
      "22",
      "24",
      "32"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1677: What is 30 + 23?",
    "options": [
      "48",
      "53",
      "55",
      "63"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1678: What is 35 × 73?",
    "options": [
      "2555",
      "2567",
      "2545",
      "2560"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1679: What is 87 - 51?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1680: What is 72 + 68?",
    "options": [
      "135",
      "140",
      "142",
      "150"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1681: What is 24 × 62?",
    "options": [
      "1488",
      "1500",
      "1478",
      "1493"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1682: What is 61 - 28?",
    "options": [
      "36",
      "31",
      "33",
      "41"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1683: What is 41 + 77?",
    "options": [
      "113",
      "118",
      "120",
      "128"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1684: What is 87 × 94?",
    "options": [
      "8178",
      "8190",
      "8168",
      "8183"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1685: What is 72 - 15?",
    "options": [
      "60",
      "55",
      "57",
      "65"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1686: What is 73 + 58?",
    "options": [
      "126",
      "131",
      "133",
      "141"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1687: What is 44 × 17?",
    "options": [
      "748",
      "760",
      "738",
      "753"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1688: What is 87 - 18?",
    "options": [
      "72",
      "67",
      "69",
      "77"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1689: What is 81 + 79?",
    "options": [
      "155",
      "160",
      "162",
      "170"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1690: What is 92 × 50?",
    "options": [
      "4600",
      "4612",
      "4590",
      "4605"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1691: What is 80 - 41?",
    "options": [
      "42",
      "37",
      "39",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1692: What is 67 + 97?",
    "options": [
      "159",
      "164",
      "166",
      "174"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1693: What is 59 × 38?",
    "options": [
      "2242",
      "2254",
      "2232",
      "2247"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1694: What is 33 - 23?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1695: What is 70 + 69?",
    "options": [
      "134",
      "139",
      "141",
      "149"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1696: What is 30 × 87?",
    "options": [
      "2610",
      "2622",
      "2600",
      "2615"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1697: What is 70 - 62?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1698: What is 99 + 41?",
    "options": [
      "135",
      "140",
      "142",
      "150"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1699: What is 34 × 69?",
    "options": [
      "2346",
      "2358",
      "2336",
      "2351"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1700: What is 47 - 17?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1701: What is 30 + 45?",
    "options": [
      "70",
      "75",
      "77",
      "85"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1702: What is 58 × 90?",
    "options": [
      "5220",
      "5232",
      "5210",
      "5225"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1703: What is 84 - 29?",
    "options": [
      "58",
      "53",
      "55",
      "63"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1704: What is 17 + 82?",
    "options": [
      "94",
      "99",
      "101",
      "109"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1705: What is 32 × 16?",
    "options": [
      "512",
      "524",
      "502",
      "517"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1706: What is 91 - 59?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1707: What is 82 + 60?",
    "options": [
      "137",
      "142",
      "144",
      "152"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1708: What is 42 × 48?",
    "options": [
      "2016",
      "2028",
      "2006",
      "2021"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1709: What is 85 - 73?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1710: What is 62 + 45?",
    "options": [
      "102",
      "107",
      "109",
      "117"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1711: What is 60 × 16?",
    "options": [
      "960",
      "972",
      "950",
      "965"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1712: What is 12 - 11?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1713: What is 43 + 56?",
    "options": [
      "94",
      "99",
      "101",
      "109"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1714: What is 19 × 99?",
    "options": [
      "1881",
      "1893",
      "1871",
      "1886"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1715: What is 88 - 85?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1716: What is 35 + 69?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1717: What is 61 × 31?",
    "options": [
      "1891",
      "1903",
      "1881",
      "1896"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1718: What is 64 - 30?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1719: What is 58 + 48?",
    "options": [
      "101",
      "106",
      "108",
      "116"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1720: What is 39 × 78?",
    "options": [
      "3042",
      "3054",
      "3032",
      "3047"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1721: What is 79 - 33?",
    "options": [
      "49",
      "44",
      "46",
      "54"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1722: What is 88 + 49?",
    "options": [
      "132",
      "137",
      "139",
      "147"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1723: What is 12 × 96?",
    "options": [
      "1152",
      "1164",
      "1142",
      "1157"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1724: What is 39 - 24?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1725: What is 45 + 15?",
    "options": [
      "55",
      "60",
      "62",
      "70"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1726: What is 64 × 39?",
    "options": [
      "2496",
      "2508",
      "2486",
      "2501"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1727: What is 76 - 48?",
    "options": [
      "31",
      "26",
      "28",
      "36"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1728: What is 81 + 93?",
    "options": [
      "169",
      "174",
      "176",
      "184"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1729: What is 11 × 30?",
    "options": [
      "330",
      "342",
      "320",
      "335"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1730: What is 69 - 10?",
    "options": [
      "62",
      "57",
      "59",
      "67"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1731: What is 91 + 57?",
    "options": [
      "143",
      "148",
      "150",
      "158"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1732: What is 49 × 33?",
    "options": [
      "1617",
      "1629",
      "1607",
      "1622"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1733: What is 79 - 47?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1734: What is 94 + 77?",
    "options": [
      "166",
      "171",
      "173",
      "181"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1735: What is 31 × 26?",
    "options": [
      "806",
      "818",
      "796",
      "811"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1736: What is 94 - 30?",
    "options": [
      "67",
      "62",
      "64",
      "72"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1737: What is 32 + 15?",
    "options": [
      "42",
      "47",
      "49",
      "57"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1738: What is 41 × 46?",
    "options": [
      "1886",
      "1898",
      "1876",
      "1891"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1739: What is 58 - 36?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1740: What is 33 + 92?",
    "options": [
      "120",
      "125",
      "127",
      "135"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1741: What is 63 × 63?",
    "options": [
      "3969",
      "3981",
      "3959",
      "3974"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1742: What is 73 - 19?",
    "options": [
      "57",
      "52",
      "54",
      "62"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1743: What is 87 + 41?",
    "options": [
      "123",
      "128",
      "130",
      "138"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1744: What is 15 × 68?",
    "options": [
      "1020",
      "1032",
      "1010",
      "1025"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1745: What is 66 - 30?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1746: What is 79 + 20?",
    "options": [
      "94",
      "99",
      "101",
      "109"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1747: What is 66 × 17?",
    "options": [
      "1122",
      "1134",
      "1112",
      "1127"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1748: What is 75 - 48?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1749: What is 30 + 51?",
    "options": [
      "76",
      "81",
      "83",
      "91"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1750: What is 19 × 20?",
    "options": [
      "380",
      "392",
      "370",
      "385"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1751: What is 70 - 50?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1752: What is 80 + 85?",
    "options": [
      "160",
      "165",
      "167",
      "175"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1753: What is 39 × 92?",
    "options": [
      "3588",
      "3600",
      "3578",
      "3593"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1754: What is 80 - 38?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1755: What is 46 + 92?",
    "options": [
      "133",
      "138",
      "140",
      "148"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1756: What is 76 × 57?",
    "options": [
      "4332",
      "4344",
      "4322",
      "4337"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1757: What is 73 - 64?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1758: What is 56 + 81?",
    "options": [
      "132",
      "137",
      "139",
      "147"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1759: What is 80 × 72?",
    "options": [
      "5760",
      "5772",
      "5750",
      "5765"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1760: What is 71 - 32?",
    "options": [
      "42",
      "37",
      "39",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1761: What is 63 + 44?",
    "options": [
      "102",
      "107",
      "109",
      "117"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1762: What is 37 × 43?",
    "options": [
      "1591",
      "1603",
      "1581",
      "1596"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1763: What is 79 - 55?",
    "options": [
      "27",
      "22",
      "24",
      "32"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1764: What is 25 + 15?",
    "options": [
      "35",
      "40",
      "42",
      "50"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1765: What is 50 × 23?",
    "options": [
      "1150",
      "1162",
      "1140",
      "1155"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1766: What is 64 - 57?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1767: What is 32 + 24?",
    "options": [
      "51",
      "56",
      "58",
      "66"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1768: What is 57 × 64?",
    "options": [
      "3648",
      "3660",
      "3638",
      "3653"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1769: What is 98 - 66?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1770: What is 39 + 65?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1771: What is 52 × 70?",
    "options": [
      "3640",
      "3652",
      "3630",
      "3645"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1772: What is 63 - 60?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1773: What is 73 + 31?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1774: What is 58 × 91?",
    "options": [
      "5278",
      "5290",
      "5268",
      "5283"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1775: What is 82 - 12?",
    "options": [
      "73",
      "68",
      "70",
      "78"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1776: What is 39 + 98?",
    "options": [
      "132",
      "137",
      "139",
      "147"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1777: What is 10 × 86?",
    "options": [
      "860",
      "872",
      "850",
      "865"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1778: What is 39 - 35?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1779: What is 18 + 29?",
    "options": [
      "42",
      "47",
      "49",
      "57"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1780: What is 78 × 84?",
    "options": [
      "6552",
      "6564",
      "6542",
      "6557"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1781: What is 82 - 23?",
    "options": [
      "62",
      "57",
      "59",
      "67"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1782: What is 77 + 96?",
    "options": [
      "168",
      "173",
      "175",
      "183"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1783: What is 44 × 51?",
    "options": [
      "2244",
      "2256",
      "2234",
      "2249"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1784: What is 37 - 36?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1785: What is 89 + 61?",
    "options": [
      "145",
      "150",
      "152",
      "160"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1786: What is 78 × 13?",
    "options": [
      "1014",
      "1026",
      "1004",
      "1019"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1787: What is 90 - 87?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1788: What is 12 + 28?",
    "options": [
      "35",
      "40",
      "42",
      "50"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1789: What is 66 × 48?",
    "options": [
      "3168",
      "3180",
      "3158",
      "3173"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1790: What is 89 - 17?",
    "options": [
      "75",
      "70",
      "72",
      "80"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1791: What is 64 + 66?",
    "options": [
      "125",
      "130",
      "132",
      "140"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1792: What is 56 × 19?",
    "options": [
      "1064",
      "1076",
      "1054",
      "1069"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1793: What is 95 - 46?",
    "options": [
      "52",
      "47",
      "49",
      "57"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1794: What is 59 + 93?",
    "options": [
      "147",
      "152",
      "154",
      "162"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1795: What is 46 × 68?",
    "options": [
      "3128",
      "3140",
      "3118",
      "3133"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1796: What is 64 - 22?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1797: What is 31 + 54?",
    "options": [
      "80",
      "85",
      "87",
      "95"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1798: What is 22 × 39?",
    "options": [
      "858",
      "870",
      "848",
      "863"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1799: What is 94 - 33?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1800: What is 62 + 50?",
    "options": [
      "107",
      "112",
      "114",
      "122"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1801: What is 72 × 22?",
    "options": [
      "1584",
      "1596",
      "1574",
      "1589"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1802: What is 81 - 46?",
    "options": [
      "38",
      "33",
      "35",
      "43"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1803: What is 94 + 40?",
    "options": [
      "129",
      "134",
      "136",
      "144"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1804: What is 33 × 62?",
    "options": [
      "2046",
      "2058",
      "2036",
      "2051"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1805: What is 86 - 35?",
    "options": [
      "54",
      "49",
      "51",
      "59"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1806: What is 76 + 50?",
    "options": [
      "121",
      "126",
      "128",
      "136"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1807: What is 99 × 33?",
    "options": [
      "3267",
      "3279",
      "3257",
      "3272"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1808: What is 56 - 43?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1809: What is 26 + 55?",
    "options": [
      "76",
      "81",
      "83",
      "91"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1810: What is 21 × 55?",
    "options": [
      "1155",
      "1167",
      "1145",
      "1160"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1811: What is 80 - 10?",
    "options": [
      "73",
      "68",
      "70",
      "78"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1812: What is 67 + 90?",
    "options": [
      "152",
      "157",
      "159",
      "167"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1813: What is 95 × 67?",
    "options": [
      "6365",
      "6377",
      "6355",
      "6370"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1814: What is 26 - 23?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1815: What is 83 + 37?",
    "options": [
      "115",
      "120",
      "122",
      "130"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1816: What is 17 × 11?",
    "options": [
      "187",
      "199",
      "177",
      "192"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1817: What is 15 - 12?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1818: What is 21 + 70?",
    "options": [
      "86",
      "91",
      "93",
      "101"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1819: What is 15 × 30?",
    "options": [
      "450",
      "462",
      "440",
      "455"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1820: What is 52 - 50?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1821: What is 53 + 12?",
    "options": [
      "60",
      "65",
      "67",
      "75"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1822: What is 89 × 28?",
    "options": [
      "2492",
      "2504",
      "2482",
      "2497"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1823: What is 87 - 62?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1824: What is 44 + 82?",
    "options": [
      "121",
      "126",
      "128",
      "136"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1825: What is 39 × 96?",
    "options": [
      "3744",
      "3756",
      "3734",
      "3749"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1826: What is 98 - 93?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1827: What is 16 + 25?",
    "options": [
      "36",
      "41",
      "43",
      "51"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1828: What is 28 × 39?",
    "options": [
      "1092",
      "1104",
      "1082",
      "1097"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1829: What is 33 - 20?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1830: What is 35 + 69?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1831: What is 74 × 15?",
    "options": [
      "1110",
      "1122",
      "1100",
      "1115"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1832: What is 87 - 34?",
    "options": [
      "56",
      "51",
      "53",
      "61"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1833: What is 68 + 87?",
    "options": [
      "150",
      "155",
      "157",
      "165"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1834: What is 22 × 97?",
    "options": [
      "2134",
      "2146",
      "2124",
      "2139"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1835: What is 83 - 67?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1836: What is 82 + 59?",
    "options": [
      "136",
      "141",
      "143",
      "151"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1837: What is 69 × 69?",
    "options": [
      "4761",
      "4773",
      "4751",
      "4766"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1838: What is 93 - 65?",
    "options": [
      "31",
      "26",
      "28",
      "36"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1839: What is 12 + 34?",
    "options": [
      "41",
      "46",
      "48",
      "56"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1840: What is 90 × 24?",
    "options": [
      "2160",
      "2172",
      "2150",
      "2165"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1841: What is 62 - 38?",
    "options": [
      "27",
      "22",
      "24",
      "32"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1842: What is 67 + 77?",
    "options": [
      "139",
      "144",
      "146",
      "154"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1843: What is 39 × 73?",
    "options": [
      "2847",
      "2859",
      "2837",
      "2852"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1844: What is 97 - 95?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1845: What is 61 + 75?",
    "options": [
      "131",
      "136",
      "138",
      "146"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1846: What is 48 × 59?",
    "options": [
      "2832",
      "2844",
      "2822",
      "2837"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1847: What is 83 - 72?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1848: What is 33 + 21?",
    "options": [
      "49",
      "54",
      "56",
      "64"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1849: What is 37 × 87?",
    "options": [
      "3219",
      "3231",
      "3209",
      "3224"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1850: What is 59 - 42?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1851: What is 73 + 62?",
    "options": [
      "130",
      "135",
      "137",
      "145"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1852: What is 29 × 57?",
    "options": [
      "1653",
      "1665",
      "1643",
      "1658"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1853: What is 77 - 32?",
    "options": [
      "48",
      "43",
      "45",
      "53"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1854: What is 83 + 27?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1855: What is 39 × 90?",
    "options": [
      "3510",
      "3522",
      "3500",
      "3515"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1856: What is 60 - 46?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1857: What is 80 + 34?",
    "options": [
      "109",
      "114",
      "116",
      "124"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1858: What is 14 × 83?",
    "options": [
      "1162",
      "1174",
      "1152",
      "1167"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1859: What is 75 - 43?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1860: What is 11 + 76?",
    "options": [
      "82",
      "87",
      "89",
      "97"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1861: What is 99 × 10?",
    "options": [
      "990",
      "1002",
      "980",
      "995"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1862: What is 57 - 23?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1863: What is 52 + 26?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1864: What is 68 × 90?",
    "options": [
      "6120",
      "6132",
      "6110",
      "6125"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1865: What is 93 - 43?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1866: What is 60 + 69?",
    "options": [
      "124",
      "129",
      "131",
      "139"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1867: What is 27 × 24?",
    "options": [
      "648",
      "660",
      "638",
      "653"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1868: What is 89 - 24?",
    "options": [
      "68",
      "63",
      "65",
      "73"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1869: What is 25 + 12?",
    "options": [
      "32",
      "37",
      "39",
      "47"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1870: What is 40 × 31?",
    "options": [
      "1240",
      "1252",
      "1230",
      "1245"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1871: What is 89 - 22?",
    "options": [
      "70",
      "65",
      "67",
      "75"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1872: What is 10 + 63?",
    "options": [
      "68",
      "73",
      "75",
      "83"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1873: What is 41 × 87?",
    "options": [
      "3567",
      "3579",
      "3557",
      "3572"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1874: What is 85 - 35?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1875: What is 90 + 41?",
    "options": [
      "126",
      "131",
      "133",
      "141"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1876: What is 95 × 42?",
    "options": [
      "3990",
      "4002",
      "3980",
      "3995"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1877: What is 73 - 33?",
    "options": [
      "43",
      "38",
      "40",
      "48"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1878: What is 98 + 90?",
    "options": [
      "183",
      "188",
      "190",
      "198"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1879: What is 77 × 95?",
    "options": [
      "7315",
      "7327",
      "7305",
      "7320"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1880: What is 39 - 33?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1881: What is 26 + 50?",
    "options": [
      "71",
      "76",
      "78",
      "86"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1882: What is 17 × 37?",
    "options": [
      "629",
      "641",
      "619",
      "634"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1883: What is 17 - 13?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1884: What is 66 + 48?",
    "options": [
      "109",
      "114",
      "116",
      "124"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1885: What is 39 × 95?",
    "options": [
      "3705",
      "3717",
      "3695",
      "3710"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1886: What is 66 - 48?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1887: What is 97 + 59?",
    "options": [
      "151",
      "156",
      "158",
      "166"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1888: What is 26 × 52?",
    "options": [
      "1352",
      "1364",
      "1342",
      "1357"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1889: What is 66 - 12?",
    "options": [
      "57",
      "52",
      "54",
      "62"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1890: What is 27 + 47?",
    "options": [
      "69",
      "74",
      "76",
      "84"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1891: What is 52 × 94?",
    "options": [
      "4888",
      "4900",
      "4878",
      "4893"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1892: What is 21 - 20?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1893: What is 76 + 99?",
    "options": [
      "170",
      "175",
      "177",
      "185"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1894: What is 97 × 12?",
    "options": [
      "1164",
      "1176",
      "1154",
      "1169"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1895: What is 32 - 32?",
    "options": [
      "3",
      "-2",
      "0",
      "8"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1896: What is 18 + 97?",
    "options": [
      "110",
      "115",
      "117",
      "125"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1897: What is 30 × 16?",
    "options": [
      "480",
      "492",
      "470",
      "485"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1898: What is 55 - 47?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1899: What is 77 + 10?",
    "options": [
      "82",
      "87",
      "89",
      "97"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1900: What is 10 × 41?",
    "options": [
      "410",
      "422",
      "400",
      "415"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1901: What is 74 - 67?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1902: What is 91 + 32?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1903: What is 70 × 11?",
    "options": [
      "770",
      "782",
      "760",
      "775"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1904: What is 69 - 50?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1905: What is 78 + 53?",
    "options": [
      "126",
      "131",
      "133",
      "141"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1906: What is 47 × 23?",
    "options": [
      "1081",
      "1093",
      "1071",
      "1086"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1907: What is 89 - 37?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1908: What is 43 + 34?",
    "options": [
      "72",
      "77",
      "79",
      "87"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1909: What is 49 × 86?",
    "options": [
      "4214",
      "4226",
      "4204",
      "4219"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1910: What is 89 - 55?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1911: What is 40 + 60?",
    "options": [
      "95",
      "100",
      "102",
      "110"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1912: What is 59 × 73?",
    "options": [
      "4307",
      "4319",
      "4297",
      "4312"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1913: What is 89 - 33?",
    "options": [
      "59",
      "54",
      "56",
      "64"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1914: What is 39 + 83?",
    "options": [
      "117",
      "122",
      "124",
      "132"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1915: What is 93 × 70?",
    "options": [
      "6510",
      "6522",
      "6500",
      "6515"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1916: What is 48 - 20?",
    "options": [
      "31",
      "26",
      "28",
      "36"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1917: What is 90 + 60?",
    "options": [
      "145",
      "150",
      "152",
      "160"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1918: What is 23 × 68?",
    "options": [
      "1564",
      "1576",
      "1554",
      "1569"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1919: What is 67 - 15?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1920: What is 17 + 65?",
    "options": [
      "77",
      "82",
      "84",
      "92"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1921: What is 17 × 27?",
    "options": [
      "459",
      "471",
      "449",
      "464"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1922: What is 65 - 57?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1923: What is 52 + 78?",
    "options": [
      "125",
      "130",
      "132",
      "140"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1924: What is 83 × 69?",
    "options": [
      "5727",
      "5739",
      "5717",
      "5732"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1925: What is 93 - 62?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1926: What is 32 + 36?",
    "options": [
      "63",
      "68",
      "70",
      "78"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1927: What is 34 × 55?",
    "options": [
      "1870",
      "1882",
      "1860",
      "1875"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1928: What is 80 - 10?",
    "options": [
      "73",
      "68",
      "70",
      "78"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1929: What is 81 + 82?",
    "options": [
      "158",
      "163",
      "165",
      "173"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1930: What is 13 × 38?",
    "options": [
      "494",
      "506",
      "484",
      "499"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1931: What is 70 - 14?",
    "options": [
      "59",
      "54",
      "56",
      "64"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1932: What is 99 + 85?",
    "options": [
      "179",
      "184",
      "186",
      "194"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1933: What is 84 × 98?",
    "options": [
      "8232",
      "8244",
      "8222",
      "8237"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1934: What is 45 - 36?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1935: What is 88 + 14?",
    "options": [
      "97",
      "102",
      "104",
      "112"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1936: What is 10 × 69?",
    "options": [
      "690",
      "702",
      "680",
      "695"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1937: What is 44 - 37?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1938: What is 53 + 49?",
    "options": [
      "97",
      "102",
      "104",
      "112"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1939: What is 70 × 25?",
    "options": [
      "1750",
      "1762",
      "1740",
      "1755"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1940: What is 67 - 50?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1941: What is 14 + 60?",
    "options": [
      "69",
      "74",
      "76",
      "84"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1942: What is 90 × 95?",
    "options": [
      "8550",
      "8562",
      "8540",
      "8555"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1943: What is 74 - 30?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1944: What is 17 + 75?",
    "options": [
      "87",
      "92",
      "94",
      "102"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1945: What is 32 × 24?",
    "options": [
      "768",
      "780",
      "758",
      "773"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1946: What is 47 - 27?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1947: What is 25 + 51?",
    "options": [
      "71",
      "76",
      "78",
      "86"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1948: What is 94 × 45?",
    "options": [
      "4230",
      "4242",
      "4220",
      "4235"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1949: What is 99 - 85?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1950: What is 43 + 29?",
    "options": [
      "67",
      "72",
      "74",
      "82"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1951: What is 90 × 23?",
    "options": [
      "2070",
      "2082",
      "2060",
      "2075"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1952: What is 46 - 15?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1953: What is 68 + 94?",
    "options": [
      "157",
      "162",
      "164",
      "172"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1954: What is 78 × 39?",
    "options": [
      "3042",
      "3054",
      "3032",
      "3047"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1955: What is 59 - 20?",
    "options": [
      "42",
      "37",
      "39",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1956: What is 42 + 33?",
    "options": [
      "70",
      "75",
      "77",
      "85"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1957: What is 52 × 95?",
    "options": [
      "4940",
      "4952",
      "4930",
      "4945"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1958: What is 83 - 60?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1959: What is 57 + 75?",
    "options": [
      "127",
      "132",
      "134",
      "142"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1960: What is 94 × 23?",
    "options": [
      "2162",
      "2174",
      "2152",
      "2167"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1961: What is 89 - 40?",
    "options": [
      "52",
      "47",
      "49",
      "57"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1962: What is 46 + 32?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1963: What is 57 × 80?",
    "options": [
      "4560",
      "4572",
      "4550",
      "4565"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1964: What is 79 - 15?",
    "options": [
      "67",
      "62",
      "64",
      "72"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1965: What is 52 + 87?",
    "options": [
      "134",
      "139",
      "141",
      "149"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1966: What is 59 × 12?",
    "options": [
      "708",
      "720",
      "698",
      "713"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1967: What is 82 - 30?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1968: What is 71 + 85?",
    "options": [
      "151",
      "156",
      "158",
      "166"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1969: What is 40 × 39?",
    "options": [
      "1560",
      "1572",
      "1550",
      "1565"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1970: What is 36 - 33?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1971: What is 73 + 73?",
    "options": [
      "141",
      "146",
      "148",
      "156"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1972: What is 33 × 70?",
    "options": [
      "2310",
      "2322",
      "2300",
      "2315"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1973: What is 90 - 40?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1974: What is 25 + 18?",
    "options": [
      "38",
      "43",
      "45",
      "53"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1975: What is 22 × 66?",
    "options": [
      "1452",
      "1464",
      "1442",
      "1457"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1976: What is 66 - 49?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1977: What is 83 + 41?",
    "options": [
      "119",
      "124",
      "126",
      "134"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1978: What is 27 × 90?",
    "options": [
      "2430",
      "2442",
      "2420",
      "2435"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1979: What is 98 - 51?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1980: What is 55 + 24?",
    "options": [
      "74",
      "79",
      "81",
      "89"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1981: What is 83 × 35?",
    "options": [
      "2905",
      "2917",
      "2895",
      "2910"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1982: What is 94 - 35?",
    "options": [
      "62",
      "57",
      "59",
      "67"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1983: What is 40 + 38?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1984: What is 68 × 87?",
    "options": [
      "5916",
      "5928",
      "5906",
      "5921"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1985: What is 87 - 35?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1986: What is 25 + 75?",
    "options": [
      "95",
      "100",
      "102",
      "110"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1987: What is 69 × 27?",
    "options": [
      "1863",
      "1875",
      "1853",
      "1868"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1988: What is 87 - 20?",
    "options": [
      "70",
      "65",
      "67",
      "75"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1989: What is 60 + 17?",
    "options": [
      "72",
      "77",
      "79",
      "87"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1990: What is 90 × 20?",
    "options": [
      "1800",
      "1812",
      "1790",
      "1805"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1991: What is 93 - 28?",
    "options": [
      "68",
      "63",
      "65",
      "73"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1992: What is 66 + 37?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1993: What is 19 × 85?",
    "options": [
      "1615",
      "1627",
      "1605",
      "1620"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1994: What is 96 - 61?",
    "options": [
      "38",
      "33",
      "35",
      "43"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1995: What is 34 + 53?",
    "options": [
      "82",
      "87",
      "89",
      "97"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1996: What is 60 × 35?",
    "options": [
      "2100",
      "2112",
      "2090",
      "2105"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #1997: What is 78 - 69?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #1998: What is 64 + 99?",
    "options": [
      "158",
      "163",
      "165",
      "173"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #1999: What is 59 × 85?",
    "options": [
      "5015",
      "5027",
      "5005",
      "5020"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2000: What is 54 - 13?",
    "options": [
      "44",
      "39",
      "41",
      "49"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2001: What is 63 + 71?",
    "options": [
      "129",
      "134",
      "136",
      "144"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2002: What is 70 × 13?",
    "options": [
      "910",
      "922",
      "900",
      "915"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2003: What is 77 - 48?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2004: What is 23 + 32?",
    "options": [
      "50",
      "55",
      "57",
      "65"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2005: What is 47 × 70?",
    "options": [
      "3290",
      "3302",
      "3280",
      "3295"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2006: What is 66 - 19?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2007: What is 50 + 41?",
    "options": [
      "86",
      "91",
      "93",
      "101"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2008: What is 74 × 69?",
    "options": [
      "5106",
      "5118",
      "5096",
      "5111"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2009: What is 51 - 17?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2010: What is 81 + 73?",
    "options": [
      "149",
      "154",
      "156",
      "164"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2011: What is 71 × 20?",
    "options": [
      "1420",
      "1432",
      "1410",
      "1425"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2012: What is 88 - 28?",
    "options": [
      "63",
      "58",
      "60",
      "68"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2013: What is 15 + 54?",
    "options": [
      "64",
      "69",
      "71",
      "79"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2014: What is 72 × 55?",
    "options": [
      "3960",
      "3972",
      "3950",
      "3965"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2015: What is 73 - 27?",
    "options": [
      "49",
      "44",
      "46",
      "54"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2016: What is 78 + 30?",
    "options": [
      "103",
      "108",
      "110",
      "118"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2017: What is 49 × 60?",
    "options": [
      "2940",
      "2952",
      "2930",
      "2945"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2018: What is 51 - 40?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2019: What is 76 + 46?",
    "options": [
      "117",
      "122",
      "124",
      "132"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2020: What is 15 × 49?",
    "options": [
      "735",
      "747",
      "725",
      "740"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2021: What is 98 - 81?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2022: What is 99 + 92?",
    "options": [
      "186",
      "191",
      "193",
      "201"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2023: What is 16 × 61?",
    "options": [
      "976",
      "988",
      "966",
      "981"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2024: What is 66 - 29?",
    "options": [
      "40",
      "35",
      "37",
      "45"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2025: What is 15 + 68?",
    "options": [
      "78",
      "83",
      "85",
      "93"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2026: What is 59 × 61?",
    "options": [
      "3599",
      "3611",
      "3589",
      "3604"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2027: What is 50 - 25?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2028: What is 42 + 88?",
    "options": [
      "125",
      "130",
      "132",
      "140"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2029: What is 56 × 19?",
    "options": [
      "1064",
      "1076",
      "1054",
      "1069"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2030: What is 36 - 16?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2031: What is 86 + 65?",
    "options": [
      "146",
      "151",
      "153",
      "161"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2032: What is 51 × 12?",
    "options": [
      "612",
      "624",
      "602",
      "617"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2033: What is 33 - 19?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2034: What is 25 + 36?",
    "options": [
      "56",
      "61",
      "63",
      "71"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2035: What is 53 × 31?",
    "options": [
      "1643",
      "1655",
      "1633",
      "1648"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2036: What is 94 - 14?",
    "options": [
      "83",
      "78",
      "80",
      "88"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2037: What is 44 + 34?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2038: What is 68 × 16?",
    "options": [
      "1088",
      "1100",
      "1078",
      "1093"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2039: What is 46 - 27?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2040: What is 62 + 19?",
    "options": [
      "76",
      "81",
      "83",
      "91"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2041: What is 12 × 41?",
    "options": [
      "492",
      "504",
      "482",
      "497"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2042: What is 96 - 71?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2043: What is 47 + 11?",
    "options": [
      "53",
      "58",
      "60",
      "68"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2044: What is 68 × 16?",
    "options": [
      "1088",
      "1100",
      "1078",
      "1093"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2045: What is 23 - 19?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2046: What is 38 + 15?",
    "options": [
      "48",
      "53",
      "55",
      "63"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2047: What is 14 × 64?",
    "options": [
      "896",
      "908",
      "886",
      "901"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2048: What is 52 - 31?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2049: What is 16 + 28?",
    "options": [
      "39",
      "44",
      "46",
      "54"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2050: What is 45 × 10?",
    "options": [
      "450",
      "462",
      "440",
      "455"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2051: What is 31 - 30?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2052: What is 64 + 27?",
    "options": [
      "86",
      "91",
      "93",
      "101"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2053: What is 18 × 72?",
    "options": [
      "1296",
      "1308",
      "1286",
      "1301"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2054: What is 50 - 38?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2055: What is 79 + 35?",
    "options": [
      "109",
      "114",
      "116",
      "124"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2056: What is 43 × 23?",
    "options": [
      "989",
      "1001",
      "979",
      "994"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2057: What is 93 - 32?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2058: What is 71 + 55?",
    "options": [
      "121",
      "126",
      "128",
      "136"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2059: What is 23 × 17?",
    "options": [
      "391",
      "403",
      "381",
      "396"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2060: What is 53 - 27?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2061: What is 36 + 83?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2062: What is 24 × 31?",
    "options": [
      "744",
      "756",
      "734",
      "749"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2063: What is 29 - 27?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2064: What is 61 + 41?",
    "options": [
      "97",
      "102",
      "104",
      "112"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2065: What is 92 × 11?",
    "options": [
      "1012",
      "1024",
      "1002",
      "1017"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2066: What is 86 - 46?",
    "options": [
      "43",
      "38",
      "40",
      "48"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2067: What is 30 + 76?",
    "options": [
      "101",
      "106",
      "108",
      "116"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2068: What is 80 × 24?",
    "options": [
      "1920",
      "1932",
      "1910",
      "1925"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2069: What is 48 - 42?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2070: What is 61 + 84?",
    "options": [
      "140",
      "145",
      "147",
      "155"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2071: What is 68 × 76?",
    "options": [
      "5168",
      "5180",
      "5158",
      "5173"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2072: What is 97 - 97?",
    "options": [
      "3",
      "-2",
      "0",
      "8"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2073: What is 97 + 28?",
    "options": [
      "120",
      "125",
      "127",
      "135"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2074: What is 50 × 54?",
    "options": [
      "2700",
      "2712",
      "2690",
      "2705"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2075: What is 94 - 21?",
    "options": [
      "76",
      "71",
      "73",
      "81"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2076: What is 50 + 73?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2077: What is 17 × 34?",
    "options": [
      "578",
      "590",
      "568",
      "583"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2078: What is 37 - 28?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2079: What is 22 + 80?",
    "options": [
      "97",
      "102",
      "104",
      "112"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2080: What is 92 × 40?",
    "options": [
      "3680",
      "3692",
      "3670",
      "3685"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2081: What is 99 - 36?",
    "options": [
      "66",
      "61",
      "63",
      "71"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2082: What is 13 + 55?",
    "options": [
      "63",
      "68",
      "70",
      "78"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2083: What is 68 × 91?",
    "options": [
      "6188",
      "6200",
      "6178",
      "6193"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2084: What is 55 - 45?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2085: What is 73 + 46?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2086: What is 37 × 14?",
    "options": [
      "518",
      "530",
      "508",
      "523"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2087: What is 87 - 79?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2088: What is 66 + 37?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2089: What is 34 × 37?",
    "options": [
      "1258",
      "1270",
      "1248",
      "1263"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2090: What is 58 - 17?",
    "options": [
      "44",
      "39",
      "41",
      "49"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2091: What is 57 + 99?",
    "options": [
      "151",
      "156",
      "158",
      "166"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2092: What is 27 × 20?",
    "options": [
      "540",
      "552",
      "530",
      "545"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2093: What is 72 - 70?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2094: What is 22 + 58?",
    "options": [
      "75",
      "80",
      "82",
      "90"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2095: What is 46 × 24?",
    "options": [
      "1104",
      "1116",
      "1094",
      "1109"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2096: What is 72 - 70?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2097: What is 24 + 55?",
    "options": [
      "74",
      "79",
      "81",
      "89"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2098: What is 64 × 37?",
    "options": [
      "2368",
      "2380",
      "2358",
      "2373"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2099: What is 84 - 70?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2100: What is 51 + 92?",
    "options": [
      "138",
      "143",
      "145",
      "153"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2101: What is 23 × 20?",
    "options": [
      "460",
      "472",
      "450",
      "465"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2102: What is 68 - 16?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2103: What is 38 + 87?",
    "options": [
      "120",
      "125",
      "127",
      "135"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2104: What is 26 × 46?",
    "options": [
      "1196",
      "1208",
      "1186",
      "1201"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2105: What is 64 - 11?",
    "options": [
      "56",
      "51",
      "53",
      "61"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2106: What is 83 + 12?",
    "options": [
      "90",
      "95",
      "97",
      "105"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2107: What is 16 × 91?",
    "options": [
      "1456",
      "1468",
      "1446",
      "1461"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2108: What is 95 - 16?",
    "options": [
      "82",
      "77",
      "79",
      "87"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2109: What is 35 + 18?",
    "options": [
      "48",
      "53",
      "55",
      "63"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2110: What is 99 × 10?",
    "options": [
      "990",
      "1002",
      "980",
      "995"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2111: What is 31 - 26?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2112: What is 15 + 82?",
    "options": [
      "92",
      "97",
      "99",
      "107"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2113: What is 49 × 89?",
    "options": [
      "4361",
      "4373",
      "4351",
      "4366"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2114: What is 48 - 24?",
    "options": [
      "27",
      "22",
      "24",
      "32"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2115: What is 72 + 15?",
    "options": [
      "82",
      "87",
      "89",
      "97"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2116: What is 86 × 43?",
    "options": [
      "3698",
      "3710",
      "3688",
      "3703"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2117: What is 17 - 16?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2118: What is 72 + 92?",
    "options": [
      "159",
      "164",
      "166",
      "174"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2119: What is 42 × 68?",
    "options": [
      "2856",
      "2868",
      "2846",
      "2861"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2120: What is 38 - 31?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2121: What is 49 + 40?",
    "options": [
      "84",
      "89",
      "91",
      "99"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2122: What is 46 × 78?",
    "options": [
      "3588",
      "3600",
      "3578",
      "3593"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2123: What is 33 - 25?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2124: What is 92 + 16?",
    "options": [
      "103",
      "108",
      "110",
      "118"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2125: What is 62 × 30?",
    "options": [
      "1860",
      "1872",
      "1850",
      "1865"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2126: What is 41 - 28?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2127: What is 90 + 38?",
    "options": [
      "123",
      "128",
      "130",
      "138"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2128: What is 13 × 21?",
    "options": [
      "273",
      "285",
      "263",
      "278"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2129: What is 98 - 81?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2130: What is 79 + 24?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2131: What is 32 × 14?",
    "options": [
      "448",
      "460",
      "438",
      "453"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2132: What is 83 - 69?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2133: What is 97 + 80?",
    "options": [
      "172",
      "177",
      "179",
      "187"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2134: What is 41 × 84?",
    "options": [
      "3444",
      "3456",
      "3434",
      "3449"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2135: What is 86 - 27?",
    "options": [
      "62",
      "57",
      "59",
      "67"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2136: What is 74 + 80?",
    "options": [
      "149",
      "154",
      "156",
      "164"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2137: What is 63 × 22?",
    "options": [
      "1386",
      "1398",
      "1376",
      "1391"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2138: What is 45 - 15?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2139: What is 13 + 84?",
    "options": [
      "92",
      "97",
      "99",
      "107"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2140: What is 16 × 36?",
    "options": [
      "576",
      "588",
      "566",
      "581"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2141: What is 83 - 65?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2142: What is 82 + 92?",
    "options": [
      "169",
      "174",
      "176",
      "184"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2143: What is 97 × 17?",
    "options": [
      "1649",
      "1661",
      "1639",
      "1654"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2144: What is 41 - 19?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2145: What is 72 + 18?",
    "options": [
      "85",
      "90",
      "92",
      "100"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2146: What is 71 × 33?",
    "options": [
      "2343",
      "2355",
      "2333",
      "2348"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2147: What is 75 - 72?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2148: What is 77 + 42?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2149: What is 31 × 63?",
    "options": [
      "1953",
      "1965",
      "1943",
      "1958"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2150: What is 88 - 59?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2151: What is 29 + 66?",
    "options": [
      "90",
      "95",
      "97",
      "105"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2152: What is 81 × 29?",
    "options": [
      "2349",
      "2361",
      "2339",
      "2354"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2153: What is 75 - 19?",
    "options": [
      "59",
      "54",
      "56",
      "64"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2154: What is 53 + 25?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2155: What is 18 × 57?",
    "options": [
      "1026",
      "1038",
      "1016",
      "1031"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2156: What is 52 - 52?",
    "options": [
      "3",
      "-2",
      "0",
      "8"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2157: What is 28 + 64?",
    "options": [
      "87",
      "92",
      "94",
      "102"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2158: What is 87 × 84?",
    "options": [
      "7308",
      "7320",
      "7298",
      "7313"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2159: What is 87 - 16?",
    "options": [
      "74",
      "69",
      "71",
      "79"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2160: What is 47 + 74?",
    "options": [
      "116",
      "121",
      "123",
      "131"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2161: What is 67 × 78?",
    "options": [
      "5226",
      "5238",
      "5216",
      "5231"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2162: What is 60 - 35?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2163: What is 62 + 28?",
    "options": [
      "85",
      "90",
      "92",
      "100"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2164: What is 45 × 97?",
    "options": [
      "4365",
      "4377",
      "4355",
      "4370"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2165: What is 93 - 48?",
    "options": [
      "48",
      "43",
      "45",
      "53"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2166: What is 62 + 54?",
    "options": [
      "111",
      "116",
      "118",
      "126"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2167: What is 23 × 72?",
    "options": [
      "1656",
      "1668",
      "1646",
      "1661"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2168: What is 89 - 40?",
    "options": [
      "52",
      "47",
      "49",
      "57"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2169: What is 26 + 90?",
    "options": [
      "111",
      "116",
      "118",
      "126"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2170: What is 59 × 79?",
    "options": [
      "4661",
      "4673",
      "4651",
      "4666"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2171: What is 58 - 45?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2172: What is 83 + 97?",
    "options": [
      "175",
      "180",
      "182",
      "190"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2173: What is 64 × 36?",
    "options": [
      "2304",
      "2316",
      "2294",
      "2309"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2174: What is 80 - 39?",
    "options": [
      "44",
      "39",
      "41",
      "49"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2175: What is 23 + 29?",
    "options": [
      "47",
      "52",
      "54",
      "62"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2176: What is 54 × 34?",
    "options": [
      "1836",
      "1848",
      "1826",
      "1841"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2177: What is 96 - 10?",
    "options": [
      "89",
      "84",
      "86",
      "94"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2178: What is 15 + 71?",
    "options": [
      "81",
      "86",
      "88",
      "96"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2179: What is 59 × 84?",
    "options": [
      "4956",
      "4968",
      "4946",
      "4961"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2180: What is 39 - 19?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2181: What is 61 + 62?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2182: What is 74 × 46?",
    "options": [
      "3404",
      "3416",
      "3394",
      "3409"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2183: What is 70 - 31?",
    "options": [
      "42",
      "37",
      "39",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2184: What is 98 + 70?",
    "options": [
      "163",
      "168",
      "170",
      "178"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2185: What is 67 × 16?",
    "options": [
      "1072",
      "1084",
      "1062",
      "1077"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2186: What is 64 - 38?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2187: What is 33 + 90?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2188: What is 69 × 78?",
    "options": [
      "5382",
      "5394",
      "5372",
      "5387"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2189: What is 65 - 38?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2190: What is 53 + 47?",
    "options": [
      "95",
      "100",
      "102",
      "110"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2191: What is 16 × 31?",
    "options": [
      "496",
      "508",
      "486",
      "501"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2192: What is 99 - 31?",
    "options": [
      "71",
      "66",
      "68",
      "76"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2193: What is 45 + 50?",
    "options": [
      "90",
      "95",
      "97",
      "105"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2194: What is 65 × 95?",
    "options": [
      "6175",
      "6187",
      "6165",
      "6180"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2195: What is 97 - 42?",
    "options": [
      "58",
      "53",
      "55",
      "63"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2196: What is 64 + 30?",
    "options": [
      "89",
      "94",
      "96",
      "104"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2197: What is 82 × 98?",
    "options": [
      "8036",
      "8048",
      "8026",
      "8041"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2198: What is 52 - 50?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2199: What is 34 + 50?",
    "options": [
      "79",
      "84",
      "86",
      "94"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2200: What is 90 × 74?",
    "options": [
      "6660",
      "6672",
      "6650",
      "6665"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2201: What is 85 - 25?",
    "options": [
      "63",
      "58",
      "60",
      "68"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2202: What is 40 + 34?",
    "options": [
      "69",
      "74",
      "76",
      "84"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2203: What is 92 × 92?",
    "options": [
      "8464",
      "8476",
      "8454",
      "8469"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2204: What is 76 - 46?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2205: What is 61 + 71?",
    "options": [
      "127",
      "132",
      "134",
      "142"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2206: What is 77 × 21?",
    "options": [
      "1617",
      "1629",
      "1607",
      "1622"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2207: What is 73 - 24?",
    "options": [
      "52",
      "47",
      "49",
      "57"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2208: What is 33 + 18?",
    "options": [
      "46",
      "51",
      "53",
      "61"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2209: What is 60 × 48?",
    "options": [
      "2880",
      "2892",
      "2870",
      "2885"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2210: What is 69 - 40?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2211: What is 57 + 29?",
    "options": [
      "81",
      "86",
      "88",
      "96"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2212: What is 21 × 47?",
    "options": [
      "987",
      "999",
      "977",
      "992"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2213: What is 98 - 22?",
    "options": [
      "79",
      "74",
      "76",
      "84"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2214: What is 68 + 99?",
    "options": [
      "162",
      "167",
      "169",
      "177"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2215: What is 23 × 69?",
    "options": [
      "1587",
      "1599",
      "1577",
      "1592"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2216: What is 79 - 59?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2217: What is 70 + 57?",
    "options": [
      "122",
      "127",
      "129",
      "137"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2218: What is 62 × 70?",
    "options": [
      "4340",
      "4352",
      "4330",
      "4345"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2219: What is 75 - 39?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2220: What is 24 + 93?",
    "options": [
      "112",
      "117",
      "119",
      "127"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2221: What is 66 × 80?",
    "options": [
      "5280",
      "5292",
      "5270",
      "5285"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2222: What is 65 - 49?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2223: What is 31 + 88?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2224: What is 90 × 33?",
    "options": [
      "2970",
      "2982",
      "2960",
      "2975"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2225: What is 42 - 36?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2226: What is 84 + 86?",
    "options": [
      "165",
      "170",
      "172",
      "180"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2227: What is 64 × 37?",
    "options": [
      "2368",
      "2380",
      "2358",
      "2373"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2228: What is 23 - 21?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2229: What is 13 + 14?",
    "options": [
      "22",
      "27",
      "29",
      "37"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2230: What is 33 × 35?",
    "options": [
      "1155",
      "1167",
      "1145",
      "1160"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2231: What is 63 - 11?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2232: What is 12 + 93?",
    "options": [
      "100",
      "105",
      "107",
      "115"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2233: What is 64 × 61?",
    "options": [
      "3904",
      "3916",
      "3894",
      "3909"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2234: What is 55 - 48?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2235: What is 80 + 65?",
    "options": [
      "140",
      "145",
      "147",
      "155"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2236: What is 72 × 40?",
    "options": [
      "2880",
      "2892",
      "2870",
      "2885"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2237: What is 76 - 36?",
    "options": [
      "43",
      "38",
      "40",
      "48"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2238: What is 42 + 93?",
    "options": [
      "130",
      "135",
      "137",
      "145"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2239: What is 45 × 58?",
    "options": [
      "2610",
      "2622",
      "2600",
      "2615"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2240: What is 68 - 18?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2241: What is 84 + 54?",
    "options": [
      "133",
      "138",
      "140",
      "148"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2242: What is 38 × 79?",
    "options": [
      "3002",
      "3014",
      "2992",
      "3007"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2243: What is 99 - 89?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2244: What is 15 + 89?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2245: What is 28 × 63?",
    "options": [
      "1764",
      "1776",
      "1754",
      "1769"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2246: What is 81 - 73?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2247: What is 79 + 91?",
    "options": [
      "165",
      "170",
      "172",
      "180"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2248: What is 38 × 78?",
    "options": [
      "2964",
      "2976",
      "2954",
      "2969"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2249: What is 50 - 24?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2250: What is 55 + 50?",
    "options": [
      "100",
      "105",
      "107",
      "115"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2251: What is 96 × 36?",
    "options": [
      "3456",
      "3468",
      "3446",
      "3461"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2252: What is 68 - 39?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2253: What is 55 + 13?",
    "options": [
      "63",
      "68",
      "70",
      "78"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2254: What is 36 × 56?",
    "options": [
      "2016",
      "2028",
      "2006",
      "2021"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2255: What is 44 - 14?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2256: What is 73 + 64?",
    "options": [
      "132",
      "137",
      "139",
      "147"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2257: What is 41 × 50?",
    "options": [
      "2050",
      "2062",
      "2040",
      "2055"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2258: What is 72 - 19?",
    "options": [
      "56",
      "51",
      "53",
      "61"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2259: What is 77 + 61?",
    "options": [
      "133",
      "138",
      "140",
      "148"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2260: What is 76 × 90?",
    "options": [
      "6840",
      "6852",
      "6830",
      "6845"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2261: What is 90 - 43?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2262: What is 66 + 60?",
    "options": [
      "121",
      "126",
      "128",
      "136"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2263: What is 52 × 36?",
    "options": [
      "1872",
      "1884",
      "1862",
      "1877"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2264: What is 88 - 81?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2265: What is 53 + 16?",
    "options": [
      "64",
      "69",
      "71",
      "79"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2266: What is 99 × 70?",
    "options": [
      "6930",
      "6942",
      "6920",
      "6935"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2267: What is 56 - 13?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2268: What is 33 + 43?",
    "options": [
      "71",
      "76",
      "78",
      "86"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2269: What is 22 × 70?",
    "options": [
      "1540",
      "1552",
      "1530",
      "1545"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2270: What is 86 - 48?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2271: What is 80 + 95?",
    "options": [
      "170",
      "175",
      "177",
      "185"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2272: What is 23 × 93?",
    "options": [
      "2139",
      "2151",
      "2129",
      "2144"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2273: What is 50 - 18?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2274: What is 47 + 16?",
    "options": [
      "58",
      "63",
      "65",
      "73"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2275: What is 33 × 14?",
    "options": [
      "462",
      "474",
      "452",
      "467"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2276: What is 92 - 21?",
    "options": [
      "74",
      "69",
      "71",
      "79"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2277: What is 85 + 72?",
    "options": [
      "152",
      "157",
      "159",
      "167"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2278: What is 24 × 71?",
    "options": [
      "1704",
      "1716",
      "1694",
      "1709"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2279: What is 64 - 45?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2280: What is 69 + 74?",
    "options": [
      "138",
      "143",
      "145",
      "153"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2281: What is 30 × 66?",
    "options": [
      "1980",
      "1992",
      "1970",
      "1985"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2282: What is 78 - 65?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2283: What is 72 + 67?",
    "options": [
      "134",
      "139",
      "141",
      "149"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2284: What is 42 × 70?",
    "options": [
      "2940",
      "2952",
      "2930",
      "2945"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2285: What is 68 - 54?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2286: What is 99 + 59?",
    "options": [
      "153",
      "158",
      "160",
      "168"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2287: What is 13 × 84?",
    "options": [
      "1092",
      "1104",
      "1082",
      "1097"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2288: What is 35 - 27?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2289: What is 41 + 32?",
    "options": [
      "68",
      "73",
      "75",
      "83"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2290: What is 59 × 25?",
    "options": [
      "1475",
      "1487",
      "1465",
      "1480"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2291: What is 65 - 39?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2292: What is 35 + 50?",
    "options": [
      "80",
      "85",
      "87",
      "95"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2293: What is 92 × 74?",
    "options": [
      "6808",
      "6820",
      "6798",
      "6813"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2294: What is 52 - 29?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2295: What is 89 + 34?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2296: What is 54 × 78?",
    "options": [
      "4212",
      "4224",
      "4202",
      "4217"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2297: What is 71 - 70?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2298: What is 33 + 59?",
    "options": [
      "87",
      "92",
      "94",
      "102"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2299: What is 94 × 33?",
    "options": [
      "3102",
      "3114",
      "3092",
      "3107"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2300: What is 98 - 52?",
    "options": [
      "49",
      "44",
      "46",
      "54"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2301: What is 93 + 92?",
    "options": [
      "180",
      "185",
      "187",
      "195"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2302: What is 65 × 49?",
    "options": [
      "3185",
      "3197",
      "3175",
      "3190"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2303: What is 98 - 32?",
    "options": [
      "69",
      "64",
      "66",
      "74"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2304: What is 68 + 90?",
    "options": [
      "153",
      "158",
      "160",
      "168"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2305: What is 30 × 48?",
    "options": [
      "1440",
      "1452",
      "1430",
      "1445"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2306: What is 74 - 13?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2307: What is 30 + 61?",
    "options": [
      "86",
      "91",
      "93",
      "101"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2308: What is 90 × 39?",
    "options": [
      "3510",
      "3522",
      "3500",
      "3515"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2309: What is 33 - 12?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2310: What is 24 + 61?",
    "options": [
      "80",
      "85",
      "87",
      "95"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2311: What is 14 × 16?",
    "options": [
      "224",
      "236",
      "214",
      "229"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2312: What is 76 - 58?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2313: What is 93 + 47?",
    "options": [
      "135",
      "140",
      "142",
      "150"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2314: What is 69 × 34?",
    "options": [
      "2346",
      "2358",
      "2336",
      "2351"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2315: What is 79 - 13?",
    "options": [
      "69",
      "64",
      "66",
      "74"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2316: What is 34 + 38?",
    "options": [
      "67",
      "72",
      "74",
      "82"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2317: What is 15 × 37?",
    "options": [
      "555",
      "567",
      "545",
      "560"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2318: What is 54 - 27?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2319: What is 77 + 75?",
    "options": [
      "147",
      "152",
      "154",
      "162"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2320: What is 41 × 54?",
    "options": [
      "2214",
      "2226",
      "2204",
      "2219"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2321: What is 30 - 23?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2322: What is 98 + 93?",
    "options": [
      "186",
      "191",
      "193",
      "201"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2323: What is 43 × 25?",
    "options": [
      "1075",
      "1087",
      "1065",
      "1080"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2324: What is 98 - 92?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2325: What is 55 + 37?",
    "options": [
      "87",
      "92",
      "94",
      "102"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2326: What is 33 × 55?",
    "options": [
      "1815",
      "1827",
      "1805",
      "1820"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2327: What is 88 - 72?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2328: What is 56 + 13?",
    "options": [
      "64",
      "69",
      "71",
      "79"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2329: What is 10 × 22?",
    "options": [
      "220",
      "232",
      "210",
      "225"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2330: What is 93 - 51?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2331: What is 53 + 94?",
    "options": [
      "142",
      "147",
      "149",
      "157"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2332: What is 66 × 80?",
    "options": [
      "5280",
      "5292",
      "5270",
      "5285"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2333: What is 83 - 54?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2334: What is 69 + 56?",
    "options": [
      "120",
      "125",
      "127",
      "135"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2335: What is 43 × 59?",
    "options": [
      "2537",
      "2549",
      "2527",
      "2542"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2336: What is 47 - 13?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2337: What is 89 + 48?",
    "options": [
      "132",
      "137",
      "139",
      "147"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2338: What is 10 × 60?",
    "options": [
      "600",
      "612",
      "590",
      "605"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2339: What is 94 - 88?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2340: What is 47 + 49?",
    "options": [
      "91",
      "96",
      "98",
      "106"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2341: What is 98 × 52?",
    "options": [
      "5096",
      "5108",
      "5086",
      "5101"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2342: What is 97 - 19?",
    "options": [
      "81",
      "76",
      "78",
      "86"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2343: What is 51 + 91?",
    "options": [
      "137",
      "142",
      "144",
      "152"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2344: What is 27 × 27?",
    "options": [
      "729",
      "741",
      "719",
      "734"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2345: What is 45 - 34?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2346: What is 72 + 39?",
    "options": [
      "106",
      "111",
      "113",
      "121"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2347: What is 35 × 84?",
    "options": [
      "2940",
      "2952",
      "2930",
      "2945"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2348: What is 85 - 77?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2349: What is 39 + 84?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2350: What is 42 × 87?",
    "options": [
      "3654",
      "3666",
      "3644",
      "3659"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2351: What is 99 - 65?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2352: What is 39 + 39?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2353: What is 41 × 31?",
    "options": [
      "1271",
      "1283",
      "1261",
      "1276"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2354: What is 87 - 30?",
    "options": [
      "60",
      "55",
      "57",
      "65"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2355: What is 61 + 56?",
    "options": [
      "112",
      "117",
      "119",
      "127"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2356: What is 11 × 62?",
    "options": [
      "682",
      "694",
      "672",
      "687"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2357: What is 90 - 28?",
    "options": [
      "65",
      "60",
      "62",
      "70"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2358: What is 30 + 77?",
    "options": [
      "102",
      "107",
      "109",
      "117"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2359: What is 36 × 10?",
    "options": [
      "360",
      "372",
      "350",
      "365"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2360: What is 47 - 15?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2361: What is 59 + 95?",
    "options": [
      "149",
      "154",
      "156",
      "164"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2362: What is 29 × 36?",
    "options": [
      "1044",
      "1056",
      "1034",
      "1049"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2363: What is 83 - 14?",
    "options": [
      "72",
      "67",
      "69",
      "77"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2364: What is 43 + 61?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2365: What is 11 × 31?",
    "options": [
      "341",
      "353",
      "331",
      "346"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2366: What is 40 - 24?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2367: What is 12 + 58?",
    "options": [
      "65",
      "70",
      "72",
      "80"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2368: What is 66 × 48?",
    "options": [
      "3168",
      "3180",
      "3158",
      "3173"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2369: What is 56 - 33?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2370: What is 53 + 32?",
    "options": [
      "80",
      "85",
      "87",
      "95"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2371: What is 14 × 56?",
    "options": [
      "784",
      "796",
      "774",
      "789"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2372: What is 99 - 61?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2373: What is 50 + 57?",
    "options": [
      "102",
      "107",
      "109",
      "117"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2374: What is 75 × 58?",
    "options": [
      "4350",
      "4362",
      "4340",
      "4355"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2375: What is 73 - 30?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2376: What is 58 + 52?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2377: What is 69 × 83?",
    "options": [
      "5727",
      "5739",
      "5717",
      "5732"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2378: What is 24 - 15?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2379: What is 46 + 32?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2380: What is 63 × 10?",
    "options": [
      "630",
      "642",
      "620",
      "635"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2381: What is 37 - 19?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2382: What is 23 + 62?",
    "options": [
      "80",
      "85",
      "87",
      "95"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2383: What is 39 × 51?",
    "options": [
      "1989",
      "2001",
      "1979",
      "1994"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2384: What is 58 - 11?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2385: What is 69 + 55?",
    "options": [
      "119",
      "124",
      "126",
      "134"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2386: What is 18 × 56?",
    "options": [
      "1008",
      "1020",
      "998",
      "1013"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2387: What is 92 - 81?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2388: What is 83 + 83?",
    "options": [
      "161",
      "166",
      "168",
      "176"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2389: What is 30 × 85?",
    "options": [
      "2550",
      "2562",
      "2540",
      "2555"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2390: What is 92 - 21?",
    "options": [
      "74",
      "69",
      "71",
      "79"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2391: What is 21 + 57?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2392: What is 18 × 30?",
    "options": [
      "540",
      "552",
      "530",
      "545"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2393: What is 43 - 22?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2394: What is 93 + 43?",
    "options": [
      "131",
      "136",
      "138",
      "146"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2395: What is 75 × 57?",
    "options": [
      "4275",
      "4287",
      "4265",
      "4280"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2396: What is 81 - 40?",
    "options": [
      "44",
      "39",
      "41",
      "49"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2397: What is 95 + 50?",
    "options": [
      "140",
      "145",
      "147",
      "155"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2398: What is 35 × 48?",
    "options": [
      "1680",
      "1692",
      "1670",
      "1685"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2399: What is 82 - 64?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2400: What is 27 + 67?",
    "options": [
      "89",
      "94",
      "96",
      "104"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2401: What is 14 × 37?",
    "options": [
      "518",
      "530",
      "508",
      "523"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2402: What is 50 - 46?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2403: What is 33 + 20?",
    "options": [
      "48",
      "53",
      "55",
      "63"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2404: What is 38 × 29?",
    "options": [
      "1102",
      "1114",
      "1092",
      "1107"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2405: What is 33 - 20?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2406: What is 86 + 77?",
    "options": [
      "158",
      "163",
      "165",
      "173"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2407: What is 61 × 54?",
    "options": [
      "3294",
      "3306",
      "3284",
      "3299"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2408: What is 69 - 12?",
    "options": [
      "60",
      "55",
      "57",
      "65"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2409: What is 64 + 88?",
    "options": [
      "147",
      "152",
      "154",
      "162"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2410: What is 50 × 30?",
    "options": [
      "1500",
      "1512",
      "1490",
      "1505"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2411: What is 78 - 53?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2412: What is 41 + 83?",
    "options": [
      "119",
      "124",
      "126",
      "134"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2413: What is 92 × 49?",
    "options": [
      "4508",
      "4520",
      "4498",
      "4513"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2414: What is 21 - 15?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2415: What is 13 + 42?",
    "options": [
      "50",
      "55",
      "57",
      "65"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2416: What is 22 × 62?",
    "options": [
      "1364",
      "1376",
      "1354",
      "1369"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2417: What is 79 - 34?",
    "options": [
      "48",
      "43",
      "45",
      "53"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2418: What is 30 + 47?",
    "options": [
      "72",
      "77",
      "79",
      "87"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2419: What is 64 × 15?",
    "options": [
      "960",
      "972",
      "950",
      "965"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2420: What is 56 - 18?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2421: What is 84 + 24?",
    "options": [
      "103",
      "108",
      "110",
      "118"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2422: What is 33 × 52?",
    "options": [
      "1716",
      "1728",
      "1706",
      "1721"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2423: What is 64 - 55?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2424: What is 12 + 17?",
    "options": [
      "24",
      "29",
      "31",
      "39"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2425: What is 91 × 38?",
    "options": [
      "3458",
      "3470",
      "3448",
      "3463"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2426: What is 50 - 17?",
    "options": [
      "36",
      "31",
      "33",
      "41"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2427: What is 34 + 33?",
    "options": [
      "62",
      "67",
      "69",
      "77"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2428: What is 72 × 74?",
    "options": [
      "5328",
      "5340",
      "5318",
      "5333"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2429: What is 81 - 74?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2430: What is 67 + 37?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2431: What is 85 × 26?",
    "options": [
      "2210",
      "2222",
      "2200",
      "2215"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2432: What is 94 - 15?",
    "options": [
      "82",
      "77",
      "79",
      "87"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2433: What is 33 + 55?",
    "options": [
      "83",
      "88",
      "90",
      "98"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2434: What is 87 × 74?",
    "options": [
      "6438",
      "6450",
      "6428",
      "6443"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2435: What is 88 - 84?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2436: What is 96 + 59?",
    "options": [
      "150",
      "155",
      "157",
      "165"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2437: What is 74 × 69?",
    "options": [
      "5106",
      "5118",
      "5096",
      "5111"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2438: What is 83 - 27?",
    "options": [
      "59",
      "54",
      "56",
      "64"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2439: What is 62 + 86?",
    "options": [
      "143",
      "148",
      "150",
      "158"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2440: What is 55 × 88?",
    "options": [
      "4840",
      "4852",
      "4830",
      "4845"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2441: What is 61 - 16?",
    "options": [
      "48",
      "43",
      "45",
      "53"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2442: What is 59 + 57?",
    "options": [
      "111",
      "116",
      "118",
      "126"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2443: What is 28 × 20?",
    "options": [
      "560",
      "572",
      "550",
      "565"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2444: What is 39 - 34?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2445: What is 77 + 33?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2446: What is 73 × 66?",
    "options": [
      "4818",
      "4830",
      "4808",
      "4823"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2447: What is 52 - 41?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2448: What is 83 + 62?",
    "options": [
      "140",
      "145",
      "147",
      "155"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2449: What is 52 × 89?",
    "options": [
      "4628",
      "4640",
      "4618",
      "4633"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2450: What is 38 - 16?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2451: What is 69 + 30?",
    "options": [
      "94",
      "99",
      "101",
      "109"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2452: What is 11 × 68?",
    "options": [
      "748",
      "760",
      "738",
      "753"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2453: What is 68 - 38?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2454: What is 68 + 76?",
    "options": [
      "139",
      "144",
      "146",
      "154"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2455: What is 13 × 57?",
    "options": [
      "741",
      "753",
      "731",
      "746"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2456: What is 41 - 11?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2457: What is 43 + 80?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2458: What is 90 × 53?",
    "options": [
      "4770",
      "4782",
      "4760",
      "4775"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2459: What is 80 - 78?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2460: What is 69 + 78?",
    "options": [
      "142",
      "147",
      "149",
      "157"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2461: What is 43 × 35?",
    "options": [
      "1505",
      "1517",
      "1495",
      "1510"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2462: What is 59 - 20?",
    "options": [
      "42",
      "37",
      "39",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2463: What is 31 + 36?",
    "options": [
      "62",
      "67",
      "69",
      "77"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2464: What is 28 × 73?",
    "options": [
      "2044",
      "2056",
      "2034",
      "2049"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2465: What is 71 - 42?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2466: What is 16 + 53?",
    "options": [
      "64",
      "69",
      "71",
      "79"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2467: What is 95 × 33?",
    "options": [
      "3135",
      "3147",
      "3125",
      "3140"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2468: What is 80 - 19?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2469: What is 99 + 46?",
    "options": [
      "140",
      "145",
      "147",
      "155"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2470: What is 76 × 89?",
    "options": [
      "6764",
      "6776",
      "6754",
      "6769"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2471: What is 45 - 28?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2472: What is 80 + 25?",
    "options": [
      "100",
      "105",
      "107",
      "115"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2473: What is 20 × 69?",
    "options": [
      "1380",
      "1392",
      "1370",
      "1385"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2474: What is 58 - 52?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2475: What is 80 + 84?",
    "options": [
      "159",
      "164",
      "166",
      "174"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2476: What is 48 × 35?",
    "options": [
      "1680",
      "1692",
      "1670",
      "1685"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2477: What is 76 - 30?",
    "options": [
      "49",
      "44",
      "46",
      "54"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2478: What is 10 + 31?",
    "options": [
      "36",
      "41",
      "43",
      "51"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2479: What is 93 × 69?",
    "options": [
      "6417",
      "6429",
      "6407",
      "6422"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2480: What is 85 - 48?",
    "options": [
      "40",
      "35",
      "37",
      "45"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2481: What is 82 + 76?",
    "options": [
      "153",
      "158",
      "160",
      "168"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2482: What is 59 × 87?",
    "options": [
      "5133",
      "5145",
      "5123",
      "5138"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2483: What is 79 - 19?",
    "options": [
      "63",
      "58",
      "60",
      "68"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2484: What is 34 + 46?",
    "options": [
      "75",
      "80",
      "82",
      "90"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2485: What is 29 × 58?",
    "options": [
      "1682",
      "1694",
      "1672",
      "1687"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2486: What is 98 - 89?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2487: What is 67 + 17?",
    "options": [
      "79",
      "84",
      "86",
      "94"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2488: What is 15 × 10?",
    "options": [
      "150",
      "162",
      "140",
      "155"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2489: What is 68 - 29?",
    "options": [
      "42",
      "37",
      "39",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2490: What is 16 + 68?",
    "options": [
      "79",
      "84",
      "86",
      "94"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2491: What is 27 × 31?",
    "options": [
      "837",
      "849",
      "827",
      "842"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2492: What is 86 - 17?",
    "options": [
      "72",
      "67",
      "69",
      "77"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2493: What is 56 + 63?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2494: What is 50 × 50?",
    "options": [
      "2500",
      "2512",
      "2490",
      "2505"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2495: What is 73 - 53?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2496: What is 93 + 28?",
    "options": [
      "116",
      "121",
      "123",
      "131"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2497: What is 51 × 79?",
    "options": [
      "4029",
      "4041",
      "4019",
      "4034"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2498: What is 95 - 91?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2499: What is 61 + 13?",
    "options": [
      "69",
      "74",
      "76",
      "84"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2500: What is 61 × 93?",
    "options": [
      "5673",
      "5685",
      "5663",
      "5678"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2501: What is 85 - 83?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2502: What is 57 + 30?",
    "options": [
      "82",
      "87",
      "89",
      "97"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2503: What is 72 × 71?",
    "options": [
      "5112",
      "5124",
      "5102",
      "5117"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2504: What is 54 - 31?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2505: What is 10 + 31?",
    "options": [
      "36",
      "41",
      "43",
      "51"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2506: What is 71 × 82?",
    "options": [
      "5822",
      "5834",
      "5812",
      "5827"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2507: What is 70 - 23?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2508: What is 81 + 62?",
    "options": [
      "138",
      "143",
      "145",
      "153"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2509: What is 19 × 10?",
    "options": [
      "190",
      "202",
      "180",
      "195"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2510: What is 18 - 15?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2511: What is 87 + 48?",
    "options": [
      "130",
      "135",
      "137",
      "145"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2512: What is 81 × 30?",
    "options": [
      "2430",
      "2442",
      "2420",
      "2435"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2513: What is 38 - 12?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2514: What is 79 + 33?",
    "options": [
      "107",
      "112",
      "114",
      "122"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2515: What is 90 × 31?",
    "options": [
      "2790",
      "2802",
      "2780",
      "2795"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2516: What is 98 - 17?",
    "options": [
      "84",
      "79",
      "81",
      "89"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2517: What is 88 + 69?",
    "options": [
      "152",
      "157",
      "159",
      "167"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2518: What is 22 × 73?",
    "options": [
      "1606",
      "1618",
      "1596",
      "1611"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2519: What is 63 - 41?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2520: What is 15 + 21?",
    "options": [
      "31",
      "36",
      "38",
      "46"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2521: What is 34 × 83?",
    "options": [
      "2822",
      "2834",
      "2812",
      "2827"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2522: What is 56 - 36?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2523: What is 87 + 23?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2524: What is 81 × 74?",
    "options": [
      "5994",
      "6006",
      "5984",
      "5999"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2525: What is 70 - 45?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2526: What is 22 + 21?",
    "options": [
      "38",
      "43",
      "45",
      "53"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2527: What is 35 × 88?",
    "options": [
      "3080",
      "3092",
      "3070",
      "3085"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2528: What is 35 - 28?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2529: What is 66 + 76?",
    "options": [
      "137",
      "142",
      "144",
      "152"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2530: What is 21 × 46?",
    "options": [
      "966",
      "978",
      "956",
      "971"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2531: What is 41 - 11?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2532: What is 12 + 20?",
    "options": [
      "27",
      "32",
      "34",
      "42"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2533: What is 36 × 39?",
    "options": [
      "1404",
      "1416",
      "1394",
      "1409"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2534: What is 32 - 28?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2535: What is 74 + 40?",
    "options": [
      "109",
      "114",
      "116",
      "124"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2536: What is 43 × 69?",
    "options": [
      "2967",
      "2979",
      "2957",
      "2972"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2537: What is 73 - 51?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2538: What is 38 + 28?",
    "options": [
      "61",
      "66",
      "68",
      "76"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2539: What is 49 × 88?",
    "options": [
      "4312",
      "4324",
      "4302",
      "4317"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2540: What is 64 - 26?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2541: What is 81 + 64?",
    "options": [
      "140",
      "145",
      "147",
      "155"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2542: What is 75 × 14?",
    "options": [
      "1050",
      "1062",
      "1040",
      "1055"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2543: What is 90 - 71?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2544: What is 38 + 41?",
    "options": [
      "74",
      "79",
      "81",
      "89"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2545: What is 89 × 87?",
    "options": [
      "7743",
      "7755",
      "7733",
      "7748"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2546: What is 98 - 11?",
    "options": [
      "90",
      "85",
      "87",
      "95"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2547: What is 26 + 59?",
    "options": [
      "80",
      "85",
      "87",
      "95"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2548: What is 21 × 38?",
    "options": [
      "798",
      "810",
      "788",
      "803"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2549: What is 28 - 13?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2550: What is 78 + 16?",
    "options": [
      "89",
      "94",
      "96",
      "104"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2551: What is 81 × 30?",
    "options": [
      "2430",
      "2442",
      "2420",
      "2435"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2552: What is 83 - 42?",
    "options": [
      "44",
      "39",
      "41",
      "49"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2553: What is 96 + 92?",
    "options": [
      "183",
      "188",
      "190",
      "198"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2554: What is 21 × 42?",
    "options": [
      "882",
      "894",
      "872",
      "887"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2555: What is 61 - 32?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2556: What is 79 + 30?",
    "options": [
      "104",
      "109",
      "111",
      "119"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2557: What is 46 × 73?",
    "options": [
      "3358",
      "3370",
      "3348",
      "3363"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2558: What is 55 - 52?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2559: What is 55 + 43?",
    "options": [
      "93",
      "98",
      "100",
      "108"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2560: What is 40 × 82?",
    "options": [
      "3280",
      "3292",
      "3270",
      "3285"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2561: What is 55 - 24?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2562: What is 67 + 22?",
    "options": [
      "84",
      "89",
      "91",
      "99"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2563: What is 83 × 25?",
    "options": [
      "2075",
      "2087",
      "2065",
      "2080"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2564: What is 65 - 29?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2565: What is 68 + 61?",
    "options": [
      "124",
      "129",
      "131",
      "139"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2566: What is 95 × 45?",
    "options": [
      "4275",
      "4287",
      "4265",
      "4280"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2567: What is 95 - 27?",
    "options": [
      "71",
      "66",
      "68",
      "76"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2568: What is 42 + 40?",
    "options": [
      "77",
      "82",
      "84",
      "92"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2569: What is 15 × 65?",
    "options": [
      "975",
      "987",
      "965",
      "980"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2570: What is 51 - 19?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2571: What is 88 + 67?",
    "options": [
      "150",
      "155",
      "157",
      "165"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2572: What is 55 × 88?",
    "options": [
      "4840",
      "4852",
      "4830",
      "4845"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2573: What is 67 - 52?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2574: What is 76 + 26?",
    "options": [
      "97",
      "102",
      "104",
      "112"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2575: What is 19 × 71?",
    "options": [
      "1349",
      "1361",
      "1339",
      "1354"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2576: What is 28 - 27?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2577: What is 33 + 25?",
    "options": [
      "53",
      "58",
      "60",
      "68"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2578: What is 94 × 42?",
    "options": [
      "3948",
      "3960",
      "3938",
      "3953"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2579: What is 84 - 63?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2580: What is 17 + 89?",
    "options": [
      "101",
      "106",
      "108",
      "116"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2581: What is 29 × 92?",
    "options": [
      "2668",
      "2680",
      "2658",
      "2673"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2582: What is 33 - 23?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2583: What is 93 + 81?",
    "options": [
      "169",
      "174",
      "176",
      "184"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2584: What is 98 × 81?",
    "options": [
      "7938",
      "7950",
      "7928",
      "7943"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2585: What is 64 - 20?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2586: What is 74 + 60?",
    "options": [
      "129",
      "134",
      "136",
      "144"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2587: What is 59 × 54?",
    "options": [
      "3186",
      "3198",
      "3176",
      "3191"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2588: What is 89 - 39?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2589: What is 66 + 58?",
    "options": [
      "119",
      "124",
      "126",
      "134"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2590: What is 56 × 23?",
    "options": [
      "1288",
      "1300",
      "1278",
      "1293"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2591: What is 79 - 73?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2592: What is 68 + 78?",
    "options": [
      "141",
      "146",
      "148",
      "156"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2593: What is 25 × 70?",
    "options": [
      "1750",
      "1762",
      "1740",
      "1755"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2594: What is 59 - 53?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2595: What is 83 + 39?",
    "options": [
      "117",
      "122",
      "124",
      "132"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2596: What is 15 × 42?",
    "options": [
      "630",
      "642",
      "620",
      "635"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2597: What is 48 - 32?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2598: What is 19 + 75?",
    "options": [
      "89",
      "94",
      "96",
      "104"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2599: What is 86 × 21?",
    "options": [
      "1806",
      "1818",
      "1796",
      "1811"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2600: What is 46 - 36?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2601: What is 38 + 64?",
    "options": [
      "97",
      "102",
      "104",
      "112"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2602: What is 58 × 70?",
    "options": [
      "4060",
      "4072",
      "4050",
      "4065"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2603: What is 18 - 10?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2604: What is 59 + 31?",
    "options": [
      "85",
      "90",
      "92",
      "100"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2605: What is 31 × 61?",
    "options": [
      "1891",
      "1903",
      "1881",
      "1896"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2606: What is 71 - 63?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2607: What is 27 + 25?",
    "options": [
      "47",
      "52",
      "54",
      "62"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2608: What is 49 × 65?",
    "options": [
      "3185",
      "3197",
      "3175",
      "3190"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2609: What is 95 - 71?",
    "options": [
      "27",
      "22",
      "24",
      "32"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2610: What is 44 + 59?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2611: What is 95 × 37?",
    "options": [
      "3515",
      "3527",
      "3505",
      "3520"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2612: What is 80 - 36?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2613: What is 54 + 15?",
    "options": [
      "64",
      "69",
      "71",
      "79"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2614: What is 32 × 80?",
    "options": [
      "2560",
      "2572",
      "2550",
      "2565"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2615: What is 95 - 15?",
    "options": [
      "83",
      "78",
      "80",
      "88"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2616: What is 24 + 61?",
    "options": [
      "80",
      "85",
      "87",
      "95"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2617: What is 76 × 14?",
    "options": [
      "1064",
      "1076",
      "1054",
      "1069"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2618: What is 97 - 45?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2619: What is 82 + 24?",
    "options": [
      "101",
      "106",
      "108",
      "116"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2620: What is 89 × 85?",
    "options": [
      "7565",
      "7577",
      "7555",
      "7570"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2621: What is 79 - 33?",
    "options": [
      "49",
      "44",
      "46",
      "54"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2622: What is 47 + 74?",
    "options": [
      "116",
      "121",
      "123",
      "131"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2623: What is 77 × 49?",
    "options": [
      "3773",
      "3785",
      "3763",
      "3778"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2624: What is 83 - 53?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2625: What is 32 + 74?",
    "options": [
      "101",
      "106",
      "108",
      "116"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2626: What is 60 × 51?",
    "options": [
      "3060",
      "3072",
      "3050",
      "3065"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2627: What is 75 - 14?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2628: What is 97 + 78?",
    "options": [
      "170",
      "175",
      "177",
      "185"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2629: What is 98 × 84?",
    "options": [
      "8232",
      "8244",
      "8222",
      "8237"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2630: What is 67 - 22?",
    "options": [
      "48",
      "43",
      "45",
      "53"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2631: What is 80 + 14?",
    "options": [
      "89",
      "94",
      "96",
      "104"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2632: What is 67 × 56?",
    "options": [
      "3752",
      "3764",
      "3742",
      "3757"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2633: What is 57 - 22?",
    "options": [
      "38",
      "33",
      "35",
      "43"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2634: What is 95 + 80?",
    "options": [
      "170",
      "175",
      "177",
      "185"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2635: What is 67 × 26?",
    "options": [
      "1742",
      "1754",
      "1732",
      "1747"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2636: What is 47 - 45?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2637: What is 92 + 73?",
    "options": [
      "160",
      "165",
      "167",
      "175"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2638: What is 42 × 48?",
    "options": [
      "2016",
      "2028",
      "2006",
      "2021"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2639: What is 40 - 10?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2640: What is 86 + 65?",
    "options": [
      "146",
      "151",
      "153",
      "161"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2641: What is 70 × 95?",
    "options": [
      "6650",
      "6662",
      "6640",
      "6655"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2642: What is 96 - 21?",
    "options": [
      "78",
      "73",
      "75",
      "83"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2643: What is 77 + 73?",
    "options": [
      "145",
      "150",
      "152",
      "160"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2644: What is 84 × 79?",
    "options": [
      "6636",
      "6648",
      "6626",
      "6641"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2645: What is 95 - 82?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2646: What is 37 + 36?",
    "options": [
      "68",
      "73",
      "75",
      "83"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2647: What is 83 × 36?",
    "options": [
      "2988",
      "3000",
      "2978",
      "2993"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2648: What is 90 - 50?",
    "options": [
      "43",
      "38",
      "40",
      "48"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2649: What is 75 + 77?",
    "options": [
      "147",
      "152",
      "154",
      "162"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2650: What is 75 × 93?",
    "options": [
      "6975",
      "6987",
      "6965",
      "6980"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2651: What is 57 - 42?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2652: What is 41 + 70?",
    "options": [
      "106",
      "111",
      "113",
      "121"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2653: What is 63 × 76?",
    "options": [
      "4788",
      "4800",
      "4778",
      "4793"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2654: What is 77 - 51?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2655: What is 90 + 65?",
    "options": [
      "150",
      "155",
      "157",
      "165"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2656: What is 22 × 13?",
    "options": [
      "286",
      "298",
      "276",
      "291"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2657: What is 27 - 16?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2658: What is 54 + 60?",
    "options": [
      "109",
      "114",
      "116",
      "124"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2659: What is 14 × 32?",
    "options": [
      "448",
      "460",
      "438",
      "453"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2660: What is 61 - 24?",
    "options": [
      "40",
      "35",
      "37",
      "45"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2661: What is 82 + 50?",
    "options": [
      "127",
      "132",
      "134",
      "142"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2662: What is 19 × 88?",
    "options": [
      "1672",
      "1684",
      "1662",
      "1677"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2663: What is 88 - 27?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2664: What is 52 + 26?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2665: What is 44 × 27?",
    "options": [
      "1188",
      "1200",
      "1178",
      "1193"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2666: What is 95 - 24?",
    "options": [
      "74",
      "69",
      "71",
      "79"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2667: What is 68 + 92?",
    "options": [
      "155",
      "160",
      "162",
      "170"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2668: What is 26 × 54?",
    "options": [
      "1404",
      "1416",
      "1394",
      "1409"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2669: What is 98 - 40?",
    "options": [
      "61",
      "56",
      "58",
      "66"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2670: What is 18 + 47?",
    "options": [
      "60",
      "65",
      "67",
      "75"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2671: What is 87 × 24?",
    "options": [
      "2088",
      "2100",
      "2078",
      "2093"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2672: What is 26 - 12?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2673: What is 23 + 90?",
    "options": [
      "108",
      "113",
      "115",
      "123"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2674: What is 58 × 47?",
    "options": [
      "2726",
      "2738",
      "2716",
      "2731"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2675: What is 31 - 16?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2676: What is 21 + 11?",
    "options": [
      "27",
      "32",
      "34",
      "42"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2677: What is 12 × 62?",
    "options": [
      "744",
      "756",
      "734",
      "749"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2678: What is 94 - 85?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2679: What is 99 + 14?",
    "options": [
      "108",
      "113",
      "115",
      "123"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2680: What is 41 × 75?",
    "options": [
      "3075",
      "3087",
      "3065",
      "3080"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2681: What is 39 - 30?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2682: What is 91 + 27?",
    "options": [
      "113",
      "118",
      "120",
      "128"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2683: What is 22 × 18?",
    "options": [
      "396",
      "408",
      "386",
      "401"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2684: What is 54 - 32?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2685: What is 48 + 83?",
    "options": [
      "126",
      "131",
      "133",
      "141"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2686: What is 29 × 76?",
    "options": [
      "2204",
      "2216",
      "2194",
      "2209"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2687: What is 63 - 43?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2688: What is 28 + 82?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2689: What is 43 × 51?",
    "options": [
      "2193",
      "2205",
      "2183",
      "2198"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2690: What is 54 - 31?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2691: What is 52 + 52?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2692: What is 26 × 16?",
    "options": [
      "416",
      "428",
      "406",
      "421"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2693: What is 74 - 34?",
    "options": [
      "43",
      "38",
      "40",
      "48"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2694: What is 82 + 75?",
    "options": [
      "152",
      "157",
      "159",
      "167"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2695: What is 59 × 92?",
    "options": [
      "5428",
      "5440",
      "5418",
      "5433"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2696: What is 58 - 46?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2697: What is 42 + 61?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2698: What is 54 × 85?",
    "options": [
      "4590",
      "4602",
      "4580",
      "4595"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2699: What is 82 - 64?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2700: What is 19 + 27?",
    "options": [
      "41",
      "46",
      "48",
      "56"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2701: What is 83 × 25?",
    "options": [
      "2075",
      "2087",
      "2065",
      "2080"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2702: What is 52 - 31?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2703: What is 54 + 43?",
    "options": [
      "92",
      "97",
      "99",
      "107"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2704: What is 54 × 55?",
    "options": [
      "2970",
      "2982",
      "2960",
      "2975"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2705: What is 93 - 25?",
    "options": [
      "71",
      "66",
      "68",
      "76"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2706: What is 77 + 86?",
    "options": [
      "158",
      "163",
      "165",
      "173"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2707: What is 40 × 12?",
    "options": [
      "480",
      "492",
      "470",
      "485"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2708: What is 70 - 41?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2709: What is 91 + 89?",
    "options": [
      "175",
      "180",
      "182",
      "190"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2710: What is 32 × 57?",
    "options": [
      "1824",
      "1836",
      "1814",
      "1829"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2711: What is 91 - 71?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2712: What is 84 + 17?",
    "options": [
      "96",
      "101",
      "103",
      "111"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2713: What is 80 × 71?",
    "options": [
      "5680",
      "5692",
      "5670",
      "5685"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2714: What is 30 - 10?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2715: What is 18 + 47?",
    "options": [
      "60",
      "65",
      "67",
      "75"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2716: What is 25 × 26?",
    "options": [
      "650",
      "662",
      "640",
      "655"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2717: What is 58 - 22?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2718: What is 21 + 57?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2719: What is 25 × 86?",
    "options": [
      "2150",
      "2162",
      "2140",
      "2155"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2720: What is 49 - 41?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2721: What is 59 + 87?",
    "options": [
      "141",
      "146",
      "148",
      "156"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2722: What is 25 × 90?",
    "options": [
      "2250",
      "2262",
      "2240",
      "2255"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2723: What is 82 - 81?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2724: What is 78 + 77?",
    "options": [
      "150",
      "155",
      "157",
      "165"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2725: What is 66 × 93?",
    "options": [
      "6138",
      "6150",
      "6128",
      "6143"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2726: What is 68 - 68?",
    "options": [
      "3",
      "-2",
      "0",
      "8"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2727: What is 63 + 38?",
    "options": [
      "96",
      "101",
      "103",
      "111"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2728: What is 65 × 71?",
    "options": [
      "4615",
      "4627",
      "4605",
      "4620"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2729: What is 81 - 52?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2730: What is 39 + 39?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2731: What is 53 × 73?",
    "options": [
      "3869",
      "3881",
      "3859",
      "3874"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2732: What is 86 - 61?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2733: What is 28 + 18?",
    "options": [
      "41",
      "46",
      "48",
      "56"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2734: What is 11 × 57?",
    "options": [
      "627",
      "639",
      "617",
      "632"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2735: What is 99 - 25?",
    "options": [
      "77",
      "72",
      "74",
      "82"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2736: What is 96 + 44?",
    "options": [
      "135",
      "140",
      "142",
      "150"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2737: What is 72 × 48?",
    "options": [
      "3456",
      "3468",
      "3446",
      "3461"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2738: What is 72 - 49?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2739: What is 34 + 48?",
    "options": [
      "77",
      "82",
      "84",
      "92"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2740: What is 30 × 87?",
    "options": [
      "2610",
      "2622",
      "2600",
      "2615"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2741: What is 68 - 27?",
    "options": [
      "44",
      "39",
      "41",
      "49"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2742: What is 33 + 39?",
    "options": [
      "67",
      "72",
      "74",
      "82"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2743: What is 37 × 93?",
    "options": [
      "3441",
      "3453",
      "3431",
      "3446"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2744: What is 84 - 46?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2745: What is 23 + 30?",
    "options": [
      "48",
      "53",
      "55",
      "63"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2746: What is 13 × 22?",
    "options": [
      "286",
      "298",
      "276",
      "291"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2747: What is 95 - 46?",
    "options": [
      "52",
      "47",
      "49",
      "57"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2748: What is 58 + 92?",
    "options": [
      "145",
      "150",
      "152",
      "160"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2749: What is 41 × 90?",
    "options": [
      "3690",
      "3702",
      "3680",
      "3695"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2750: What is 24 - 22?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2751: What is 89 + 45?",
    "options": [
      "129",
      "134",
      "136",
      "144"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2752: What is 59 × 27?",
    "options": [
      "1593",
      "1605",
      "1583",
      "1598"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2753: What is 96 - 74?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2754: What is 41 + 35?",
    "options": [
      "71",
      "76",
      "78",
      "86"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2755: What is 55 × 29?",
    "options": [
      "1595",
      "1607",
      "1585",
      "1600"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2756: What is 45 - 39?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2757: What is 27 + 89?",
    "options": [
      "111",
      "116",
      "118",
      "126"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2758: What is 26 × 48?",
    "options": [
      "1248",
      "1260",
      "1238",
      "1253"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2759: What is 51 - 28?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2760: What is 10 + 39?",
    "options": [
      "44",
      "49",
      "51",
      "59"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2761: What is 44 × 94?",
    "options": [
      "4136",
      "4148",
      "4126",
      "4141"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2762: What is 67 - 65?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2763: What is 41 + 45?",
    "options": [
      "81",
      "86",
      "88",
      "96"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2764: What is 10 × 38?",
    "options": [
      "380",
      "392",
      "370",
      "385"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2765: What is 57 - 42?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2766: What is 94 + 34?",
    "options": [
      "123",
      "128",
      "130",
      "138"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2767: What is 96 × 88?",
    "options": [
      "8448",
      "8460",
      "8438",
      "8453"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2768: What is 79 - 37?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2769: What is 25 + 79?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2770: What is 28 × 13?",
    "options": [
      "364",
      "376",
      "354",
      "369"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2771: What is 88 - 75?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2772: What is 96 + 72?",
    "options": [
      "163",
      "168",
      "170",
      "178"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2773: What is 23 × 41?",
    "options": [
      "943",
      "955",
      "933",
      "948"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2774: What is 92 - 59?",
    "options": [
      "36",
      "31",
      "33",
      "41"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2775: What is 45 + 74?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2776: What is 32 × 21?",
    "options": [
      "672",
      "684",
      "662",
      "677"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2777: What is 76 - 17?",
    "options": [
      "62",
      "57",
      "59",
      "67"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2778: What is 84 + 86?",
    "options": [
      "165",
      "170",
      "172",
      "180"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2779: What is 76 × 50?",
    "options": [
      "3800",
      "3812",
      "3790",
      "3805"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2780: What is 21 - 18?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2781: What is 74 + 12?",
    "options": [
      "81",
      "86",
      "88",
      "96"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2782: What is 78 × 24?",
    "options": [
      "1872",
      "1884",
      "1862",
      "1877"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2783: What is 32 - 32?",
    "options": [
      "3",
      "-2",
      "0",
      "8"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2784: What is 96 + 67?",
    "options": [
      "158",
      "163",
      "165",
      "173"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2785: What is 94 × 38?",
    "options": [
      "3572",
      "3584",
      "3562",
      "3577"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2786: What is 52 - 45?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2787: What is 26 + 67?",
    "options": [
      "88",
      "93",
      "95",
      "103"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2788: What is 50 × 69?",
    "options": [
      "3450",
      "3462",
      "3440",
      "3455"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2789: What is 98 - 22?",
    "options": [
      "79",
      "74",
      "76",
      "84"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2790: What is 54 + 42?",
    "options": [
      "91",
      "96",
      "98",
      "106"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2791: What is 72 × 72?",
    "options": [
      "5184",
      "5196",
      "5174",
      "5189"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2792: What is 80 - 73?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2793: What is 23 + 81?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2794: What is 91 × 61?",
    "options": [
      "5551",
      "5563",
      "5541",
      "5556"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2795: What is 97 - 85?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2796: What is 96 + 65?",
    "options": [
      "156",
      "161",
      "163",
      "171"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2797: What is 69 × 92?",
    "options": [
      "6348",
      "6360",
      "6338",
      "6353"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2798: What is 25 - 16?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2799: What is 75 + 48?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2800: What is 69 × 39?",
    "options": [
      "2691",
      "2703",
      "2681",
      "2696"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2801: What is 47 - 21?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2802: What is 73 + 76?",
    "options": [
      "144",
      "149",
      "151",
      "159"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2803: What is 30 × 64?",
    "options": [
      "1920",
      "1932",
      "1910",
      "1925"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2804: What is 88 - 38?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2805: What is 61 + 50?",
    "options": [
      "106",
      "111",
      "113",
      "121"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2806: What is 64 × 32?",
    "options": [
      "2048",
      "2060",
      "2038",
      "2053"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2807: What is 91 - 33?",
    "options": [
      "61",
      "56",
      "58",
      "66"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2808: What is 71 + 42?",
    "options": [
      "108",
      "113",
      "115",
      "123"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2809: What is 41 × 91?",
    "options": [
      "3731",
      "3743",
      "3721",
      "3736"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2810: What is 60 - 29?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2811: What is 93 + 73?",
    "options": [
      "161",
      "166",
      "168",
      "176"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2812: What is 83 × 90?",
    "options": [
      "7470",
      "7482",
      "7460",
      "7475"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2813: What is 86 - 34?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2814: What is 40 + 18?",
    "options": [
      "53",
      "58",
      "60",
      "68"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2815: What is 38 × 25?",
    "options": [
      "950",
      "962",
      "940",
      "955"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2816: What is 51 - 26?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2817: What is 35 + 99?",
    "options": [
      "129",
      "134",
      "136",
      "144"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2818: What is 49 × 34?",
    "options": [
      "1666",
      "1678",
      "1656",
      "1671"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2819: What is 56 - 32?",
    "options": [
      "27",
      "22",
      "24",
      "32"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2820: What is 65 + 64?",
    "options": [
      "124",
      "129",
      "131",
      "139"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2821: What is 68 × 10?",
    "options": [
      "680",
      "692",
      "670",
      "685"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2822: What is 48 - 45?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2823: What is 36 + 95?",
    "options": [
      "126",
      "131",
      "133",
      "141"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2824: What is 17 × 32?",
    "options": [
      "544",
      "556",
      "534",
      "549"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2825: What is 84 - 51?",
    "options": [
      "36",
      "31",
      "33",
      "41"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2826: What is 57 + 35?",
    "options": [
      "87",
      "92",
      "94",
      "102"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2827: What is 79 × 34?",
    "options": [
      "2686",
      "2698",
      "2676",
      "2691"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2828: What is 90 - 42?",
    "options": [
      "51",
      "46",
      "48",
      "56"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2829: What is 71 + 15?",
    "options": [
      "81",
      "86",
      "88",
      "96"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2830: What is 32 × 16?",
    "options": [
      "512",
      "524",
      "502",
      "517"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2831: What is 97 - 96?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2832: What is 22 + 37?",
    "options": [
      "54",
      "59",
      "61",
      "69"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2833: What is 76 × 29?",
    "options": [
      "2204",
      "2216",
      "2194",
      "2209"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2834: What is 96 - 72?",
    "options": [
      "27",
      "22",
      "24",
      "32"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2835: What is 21 + 20?",
    "options": [
      "36",
      "41",
      "43",
      "51"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2836: What is 70 × 34?",
    "options": [
      "2380",
      "2392",
      "2370",
      "2385"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2837: What is 54 - 21?",
    "options": [
      "36",
      "31",
      "33",
      "41"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2838: What is 87 + 97?",
    "options": [
      "179",
      "184",
      "186",
      "194"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2839: What is 84 × 80?",
    "options": [
      "6720",
      "6732",
      "6710",
      "6725"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2840: What is 52 - 27?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2841: What is 63 + 22?",
    "options": [
      "80",
      "85",
      "87",
      "95"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2842: What is 15 × 32?",
    "options": [
      "480",
      "492",
      "470",
      "485"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2843: What is 70 - 23?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2844: What is 96 + 75?",
    "options": [
      "166",
      "171",
      "173",
      "181"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2845: What is 30 × 95?",
    "options": [
      "2850",
      "2862",
      "2840",
      "2855"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2846: What is 78 - 38?",
    "options": [
      "43",
      "38",
      "40",
      "48"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2847: What is 54 + 27?",
    "options": [
      "76",
      "81",
      "83",
      "91"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2848: What is 38 × 82?",
    "options": [
      "3116",
      "3128",
      "3106",
      "3121"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2849: What is 75 - 72?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2850: What is 41 + 90?",
    "options": [
      "126",
      "131",
      "133",
      "141"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2851: What is 60 × 45?",
    "options": [
      "2700",
      "2712",
      "2690",
      "2705"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2852: What is 78 - 55?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2853: What is 36 + 63?",
    "options": [
      "94",
      "99",
      "101",
      "109"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2854: What is 71 × 58?",
    "options": [
      "4118",
      "4130",
      "4108",
      "4123"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2855: What is 21 - 16?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2856: What is 60 + 70?",
    "options": [
      "125",
      "130",
      "132",
      "140"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2857: What is 41 × 84?",
    "options": [
      "3444",
      "3456",
      "3434",
      "3449"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2858: What is 39 - 32?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2859: What is 33 + 67?",
    "options": [
      "95",
      "100",
      "102",
      "110"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2860: What is 17 × 46?",
    "options": [
      "782",
      "794",
      "772",
      "787"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2861: What is 13 - 11?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2862: What is 16 + 54?",
    "options": [
      "65",
      "70",
      "72",
      "80"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2863: What is 26 × 90?",
    "options": [
      "2340",
      "2352",
      "2330",
      "2345"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2864: What is 80 - 48?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2865: What is 42 + 39?",
    "options": [
      "76",
      "81",
      "83",
      "91"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2866: What is 43 × 78?",
    "options": [
      "3354",
      "3366",
      "3344",
      "3359"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2867: What is 86 - 46?",
    "options": [
      "43",
      "38",
      "40",
      "48"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2868: What is 68 + 96?",
    "options": [
      "159",
      "164",
      "166",
      "174"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2869: What is 50 × 99?",
    "options": [
      "4950",
      "4962",
      "4940",
      "4955"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2870: What is 92 - 59?",
    "options": [
      "36",
      "31",
      "33",
      "41"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2871: What is 66 + 56?",
    "options": [
      "117",
      "122",
      "124",
      "132"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2872: What is 54 × 17?",
    "options": [
      "918",
      "930",
      "908",
      "923"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2873: What is 70 - 27?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2874: What is 97 + 49?",
    "options": [
      "141",
      "146",
      "148",
      "156"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2875: What is 34 × 90?",
    "options": [
      "3060",
      "3072",
      "3050",
      "3065"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2876: What is 78 - 29?",
    "options": [
      "52",
      "47",
      "49",
      "57"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2877: What is 34 + 56?",
    "options": [
      "85",
      "90",
      "92",
      "100"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2878: What is 84 × 18?",
    "options": [
      "1512",
      "1524",
      "1502",
      "1517"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2879: What is 76 - 75?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2880: What is 22 + 95?",
    "options": [
      "112",
      "117",
      "119",
      "127"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2881: What is 27 × 71?",
    "options": [
      "1917",
      "1929",
      "1907",
      "1922"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2882: What is 93 - 28?",
    "options": [
      "68",
      "63",
      "65",
      "73"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2883: What is 11 + 26?",
    "options": [
      "32",
      "37",
      "39",
      "47"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2884: What is 32 × 43?",
    "options": [
      "1376",
      "1388",
      "1366",
      "1381"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2885: What is 53 - 47?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2886: What is 35 + 69?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2887: What is 53 × 49?",
    "options": [
      "2597",
      "2609",
      "2587",
      "2602"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2888: What is 48 - 28?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2889: What is 41 + 72?",
    "options": [
      "108",
      "113",
      "115",
      "123"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2890: What is 39 × 10?",
    "options": [
      "390",
      "402",
      "380",
      "395"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2891: What is 89 - 82?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2892: What is 67 + 58?",
    "options": [
      "120",
      "125",
      "127",
      "135"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2893: What is 64 × 34?",
    "options": [
      "2176",
      "2188",
      "2166",
      "2181"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2894: What is 74 - 32?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2895: What is 84 + 99?",
    "options": [
      "178",
      "183",
      "185",
      "193"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2896: What is 36 × 65?",
    "options": [
      "2340",
      "2352",
      "2330",
      "2345"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2897: What is 82 - 43?",
    "options": [
      "42",
      "37",
      "39",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2898: What is 72 + 77?",
    "options": [
      "144",
      "149",
      "151",
      "159"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2899: What is 22 × 11?",
    "options": [
      "242",
      "254",
      "232",
      "247"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2900: What is 28 - 27?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2901: What is 65 + 65?",
    "options": [
      "125",
      "130",
      "132",
      "140"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2902: What is 46 × 31?",
    "options": [
      "1426",
      "1438",
      "1416",
      "1431"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2903: What is 93 - 86?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2904: What is 47 + 94?",
    "options": [
      "136",
      "141",
      "143",
      "151"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2905: What is 90 × 16?",
    "options": [
      "1440",
      "1452",
      "1430",
      "1445"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2906: What is 90 - 62?",
    "options": [
      "31",
      "26",
      "28",
      "36"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2907: What is 96 + 20?",
    "options": [
      "111",
      "116",
      "118",
      "126"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2908: What is 42 × 69?",
    "options": [
      "2898",
      "2910",
      "2888",
      "2903"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2909: What is 87 - 28?",
    "options": [
      "62",
      "57",
      "59",
      "67"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2910: What is 49 + 97?",
    "options": [
      "141",
      "146",
      "148",
      "156"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2911: What is 26 × 26?",
    "options": [
      "676",
      "688",
      "666",
      "681"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2912: What is 58 - 30?",
    "options": [
      "31",
      "26",
      "28",
      "36"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2913: What is 42 + 94?",
    "options": [
      "131",
      "136",
      "138",
      "146"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2914: What is 75 × 27?",
    "options": [
      "2025",
      "2037",
      "2015",
      "2030"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2915: What is 74 - 52?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2916: What is 90 + 72?",
    "options": [
      "157",
      "162",
      "164",
      "172"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2917: What is 69 × 35?",
    "options": [
      "2415",
      "2427",
      "2405",
      "2420"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2918: What is 73 - 26?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2919: What is 73 + 62?",
    "options": [
      "130",
      "135",
      "137",
      "145"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2920: What is 98 × 59?",
    "options": [
      "5782",
      "5794",
      "5772",
      "5787"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2921: What is 74 - 42?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2922: What is 23 + 36?",
    "options": [
      "54",
      "59",
      "61",
      "69"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2923: What is 25 × 75?",
    "options": [
      "1875",
      "1887",
      "1865",
      "1880"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2924: What is 77 - 67?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2925: What is 39 + 86?",
    "options": [
      "120",
      "125",
      "127",
      "135"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2926: What is 74 × 69?",
    "options": [
      "5106",
      "5118",
      "5096",
      "5111"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2927: What is 72 - 38?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2928: What is 72 + 63?",
    "options": [
      "130",
      "135",
      "137",
      "145"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2929: What is 34 × 50?",
    "options": [
      "1700",
      "1712",
      "1690",
      "1705"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2930: What is 63 - 48?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2931: What is 67 + 48?",
    "options": [
      "110",
      "115",
      "117",
      "125"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2932: What is 68 × 28?",
    "options": [
      "1904",
      "1916",
      "1894",
      "1909"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2933: What is 89 - 11?",
    "options": [
      "81",
      "76",
      "78",
      "86"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2934: What is 35 + 53?",
    "options": [
      "83",
      "88",
      "90",
      "98"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2935: What is 34 × 48?",
    "options": [
      "1632",
      "1644",
      "1622",
      "1637"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2936: What is 91 - 55?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2937: What is 62 + 11?",
    "options": [
      "68",
      "73",
      "75",
      "83"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2938: What is 19 × 12?",
    "options": [
      "228",
      "240",
      "218",
      "233"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2939: What is 76 - 23?",
    "options": [
      "56",
      "51",
      "53",
      "61"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2940: What is 11 + 67?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2941: What is 41 × 98?",
    "options": [
      "4018",
      "4030",
      "4008",
      "4023"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2942: What is 84 - 66?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2943: What is 54 + 11?",
    "options": [
      "60",
      "65",
      "67",
      "75"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2944: What is 80 × 80?",
    "options": [
      "6400",
      "6412",
      "6390",
      "6405"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2945: What is 72 - 50?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2946: What is 96 + 27?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2947: What is 92 × 21?",
    "options": [
      "1932",
      "1944",
      "1922",
      "1937"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2948: What is 97 - 95?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2949: What is 19 + 77?",
    "options": [
      "91",
      "96",
      "98",
      "106"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2950: What is 32 × 20?",
    "options": [
      "640",
      "652",
      "630",
      "645"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2951: What is 80 - 70?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2952: What is 54 + 30?",
    "options": [
      "79",
      "84",
      "86",
      "94"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2953: What is 42 × 21?",
    "options": [
      "882",
      "894",
      "872",
      "887"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2954: What is 95 - 94?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2955: What is 97 + 41?",
    "options": [
      "133",
      "138",
      "140",
      "148"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2956: What is 13 × 88?",
    "options": [
      "1144",
      "1156",
      "1134",
      "1149"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2957: What is 83 - 59?",
    "options": [
      "27",
      "22",
      "24",
      "32"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2958: What is 88 + 27?",
    "options": [
      "110",
      "115",
      "117",
      "125"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2959: What is 74 × 91?",
    "options": [
      "6734",
      "6746",
      "6724",
      "6739"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2960: What is 60 - 29?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2961: What is 49 + 66?",
    "options": [
      "110",
      "115",
      "117",
      "125"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2962: What is 81 × 91?",
    "options": [
      "7371",
      "7383",
      "7361",
      "7376"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2963: What is 98 - 19?",
    "options": [
      "82",
      "77",
      "79",
      "87"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2964: What is 91 + 91?",
    "options": [
      "177",
      "182",
      "184",
      "192"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2965: What is 85 × 78?",
    "options": [
      "6630",
      "6642",
      "6620",
      "6635"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2966: What is 33 - 32?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2967: What is 15 + 50?",
    "options": [
      "60",
      "65",
      "67",
      "75"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2968: What is 83 × 61?",
    "options": [
      "5063",
      "5075",
      "5053",
      "5068"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2969: What is 73 - 27?",
    "options": [
      "49",
      "44",
      "46",
      "54"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2970: What is 93 + 98?",
    "options": [
      "186",
      "191",
      "193",
      "201"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2971: What is 18 × 92?",
    "options": [
      "1656",
      "1668",
      "1646",
      "1661"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2972: What is 86 - 54?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2973: What is 60 + 42?",
    "options": [
      "97",
      "102",
      "104",
      "112"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2974: What is 97 × 90?",
    "options": [
      "8730",
      "8742",
      "8720",
      "8735"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2975: What is 83 - 43?",
    "options": [
      "43",
      "38",
      "40",
      "48"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2976: What is 25 + 64?",
    "options": [
      "84",
      "89",
      "91",
      "99"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2977: What is 59 × 35?",
    "options": [
      "2065",
      "2077",
      "2055",
      "2070"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2978: What is 53 - 16?",
    "options": [
      "40",
      "35",
      "37",
      "45"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2979: What is 11 + 50?",
    "options": [
      "56",
      "61",
      "63",
      "71"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2980: What is 33 × 44?",
    "options": [
      "1452",
      "1464",
      "1442",
      "1457"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2981: What is 99 - 40?",
    "options": [
      "62",
      "57",
      "59",
      "67"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2982: What is 16 + 67?",
    "options": [
      "78",
      "83",
      "85",
      "93"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2983: What is 57 × 10?",
    "options": [
      "570",
      "582",
      "560",
      "575"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2984: What is 58 - 28?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2985: What is 75 + 53?",
    "options": [
      "123",
      "128",
      "130",
      "138"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2986: What is 15 × 42?",
    "options": [
      "630",
      "642",
      "620",
      "635"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2987: What is 40 - 37?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2988: What is 10 + 11?",
    "options": [
      "16",
      "21",
      "23",
      "31"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2989: What is 71 × 21?",
    "options": [
      "1491",
      "1503",
      "1481",
      "1496"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2990: What is 44 - 25?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2991: What is 21 + 22?",
    "options": [
      "38",
      "43",
      "45",
      "53"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2992: What is 28 × 82?",
    "options": [
      "2296",
      "2308",
      "2286",
      "2301"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2993: What is 85 - 65?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2994: What is 72 + 84?",
    "options": [
      "151",
      "156",
      "158",
      "166"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2995: What is 25 × 85?",
    "options": [
      "2125",
      "2137",
      "2115",
      "2130"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2996: What is 84 - 23?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #2997: What is 72 + 83?",
    "options": [
      "150",
      "155",
      "157",
      "165"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #2998: What is 24 × 23?",
    "options": [
      "552",
      "564",
      "542",
      "557"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #2999: What is 75 - 72?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3000: What is 46 + 55?",
    "options": [
      "96",
      "101",
      "103",
      "111"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3001: What is 88 × 93?",
    "options": [
      "8184",
      "8196",
      "8174",
      "8189"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3002: What is 60 - 19?",
    "options": [
      "44",
      "39",
      "41",
      "49"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3003: What is 53 + 96?",
    "options": [
      "144",
      "149",
      "151",
      "159"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3004: What is 43 × 74?",
    "options": [
      "3182",
      "3194",
      "3172",
      "3187"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3005: What is 58 - 44?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3006: What is 34 + 15?",
    "options": [
      "44",
      "49",
      "51",
      "59"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3007: What is 22 × 49?",
    "options": [
      "1078",
      "1090",
      "1068",
      "1083"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3008: What is 24 - 10?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3009: What is 38 + 22?",
    "options": [
      "55",
      "60",
      "62",
      "70"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3010: What is 92 × 67?",
    "options": [
      "6164",
      "6176",
      "6154",
      "6169"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3011: What is 90 - 41?",
    "options": [
      "52",
      "47",
      "49",
      "57"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3012: What is 62 + 63?",
    "options": [
      "120",
      "125",
      "127",
      "135"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3013: What is 12 × 70?",
    "options": [
      "840",
      "852",
      "830",
      "845"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3014: What is 93 - 49?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3015: What is 73 + 62?",
    "options": [
      "130",
      "135",
      "137",
      "145"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3016: What is 11 × 49?",
    "options": [
      "539",
      "551",
      "529",
      "544"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3017: What is 39 - 23?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3018: What is 29 + 26?",
    "options": [
      "50",
      "55",
      "57",
      "65"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3019: What is 95 × 13?",
    "options": [
      "1235",
      "1247",
      "1225",
      "1240"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3020: What is 63 - 15?",
    "options": [
      "51",
      "46",
      "48",
      "56"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3021: What is 91 + 14?",
    "options": [
      "100",
      "105",
      "107",
      "115"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3022: What is 20 × 89?",
    "options": [
      "1780",
      "1792",
      "1770",
      "1785"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3023: What is 39 - 24?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3024: What is 80 + 77?",
    "options": [
      "152",
      "157",
      "159",
      "167"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3025: What is 72 × 43?",
    "options": [
      "3096",
      "3108",
      "3086",
      "3101"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3026: What is 57 - 22?",
    "options": [
      "38",
      "33",
      "35",
      "43"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3027: What is 89 + 66?",
    "options": [
      "150",
      "155",
      "157",
      "165"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3028: What is 50 × 49?",
    "options": [
      "2450",
      "2462",
      "2440",
      "2455"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3029: What is 68 - 13?",
    "options": [
      "58",
      "53",
      "55",
      "63"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3030: What is 32 + 88?",
    "options": [
      "115",
      "120",
      "122",
      "130"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3031: What is 28 × 57?",
    "options": [
      "1596",
      "1608",
      "1586",
      "1601"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3032: What is 85 - 16?",
    "options": [
      "72",
      "67",
      "69",
      "77"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3033: What is 81 + 79?",
    "options": [
      "155",
      "160",
      "162",
      "170"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3034: What is 89 × 43?",
    "options": [
      "3827",
      "3839",
      "3817",
      "3832"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3035: What is 68 - 43?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3036: What is 50 + 58?",
    "options": [
      "103",
      "108",
      "110",
      "118"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3037: What is 24 × 60?",
    "options": [
      "1440",
      "1452",
      "1430",
      "1445"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3038: What is 72 - 29?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3039: What is 92 + 29?",
    "options": [
      "116",
      "121",
      "123",
      "131"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3040: What is 94 × 71?",
    "options": [
      "6674",
      "6686",
      "6664",
      "6679"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3041: What is 49 - 36?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3042: What is 16 + 32?",
    "options": [
      "43",
      "48",
      "50",
      "58"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3043: What is 96 × 44?",
    "options": [
      "4224",
      "4236",
      "4214",
      "4229"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3044: What is 89 - 10?",
    "options": [
      "82",
      "77",
      "79",
      "87"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3045: What is 65 + 34?",
    "options": [
      "94",
      "99",
      "101",
      "109"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3046: What is 37 × 35?",
    "options": [
      "1295",
      "1307",
      "1285",
      "1300"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3047: What is 89 - 22?",
    "options": [
      "70",
      "65",
      "67",
      "75"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3048: What is 95 + 70?",
    "options": [
      "160",
      "165",
      "167",
      "175"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3049: What is 50 × 48?",
    "options": [
      "2400",
      "2412",
      "2390",
      "2405"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3050: What is 65 - 45?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3051: What is 14 + 36?",
    "options": [
      "45",
      "50",
      "52",
      "60"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3052: What is 50 × 53?",
    "options": [
      "2650",
      "2662",
      "2640",
      "2655"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3053: What is 90 - 35?",
    "options": [
      "58",
      "53",
      "55",
      "63"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3054: What is 86 + 78?",
    "options": [
      "159",
      "164",
      "166",
      "174"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3055: What is 61 × 56?",
    "options": [
      "3416",
      "3428",
      "3406",
      "3421"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3056: What is 99 - 48?",
    "options": [
      "54",
      "49",
      "51",
      "59"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3057: What is 40 + 55?",
    "options": [
      "90",
      "95",
      "97",
      "105"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3058: What is 86 × 40?",
    "options": [
      "3440",
      "3452",
      "3430",
      "3445"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3059: What is 80 - 22?",
    "options": [
      "61",
      "56",
      "58",
      "66"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3060: What is 42 + 37?",
    "options": [
      "74",
      "79",
      "81",
      "89"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3061: What is 36 × 14?",
    "options": [
      "504",
      "516",
      "494",
      "509"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3062: What is 70 - 43?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3063: What is 94 + 27?",
    "options": [
      "116",
      "121",
      "123",
      "131"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3064: What is 24 × 13?",
    "options": [
      "312",
      "324",
      "302",
      "317"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3065: What is 99 - 47?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3066: What is 17 + 15?",
    "options": [
      "27",
      "32",
      "34",
      "42"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3067: What is 69 × 82?",
    "options": [
      "5658",
      "5670",
      "5648",
      "5663"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3068: What is 79 - 65?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3069: What is 48 + 18?",
    "options": [
      "61",
      "66",
      "68",
      "76"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3070: What is 21 × 90?",
    "options": [
      "1890",
      "1902",
      "1880",
      "1895"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3071: What is 61 - 49?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3072: What is 51 + 52?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3073: What is 81 × 93?",
    "options": [
      "7533",
      "7545",
      "7523",
      "7538"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3074: What is 72 - 44?",
    "options": [
      "31",
      "26",
      "28",
      "36"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3075: What is 54 + 20?",
    "options": [
      "69",
      "74",
      "76",
      "84"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3076: What is 33 × 25?",
    "options": [
      "825",
      "837",
      "815",
      "830"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3077: What is 54 - 15?",
    "options": [
      "42",
      "37",
      "39",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3078: What is 12 + 78?",
    "options": [
      "85",
      "90",
      "92",
      "100"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3079: What is 25 × 56?",
    "options": [
      "1400",
      "1412",
      "1390",
      "1405"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3080: What is 70 - 40?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3081: What is 21 + 51?",
    "options": [
      "67",
      "72",
      "74",
      "82"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3082: What is 19 × 84?",
    "options": [
      "1596",
      "1608",
      "1586",
      "1601"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3083: What is 59 - 31?",
    "options": [
      "31",
      "26",
      "28",
      "36"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3084: What is 59 + 62?",
    "options": [
      "116",
      "121",
      "123",
      "131"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3085: What is 94 × 15?",
    "options": [
      "1410",
      "1422",
      "1400",
      "1415"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3086: What is 92 - 31?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3087: What is 38 + 38?",
    "options": [
      "71",
      "76",
      "78",
      "86"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3088: What is 18 × 42?",
    "options": [
      "756",
      "768",
      "746",
      "761"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3089: What is 42 - 35?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3090: What is 16 + 67?",
    "options": [
      "78",
      "83",
      "85",
      "93"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3091: What is 76 × 55?",
    "options": [
      "4180",
      "4192",
      "4170",
      "4185"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3092: What is 94 - 93?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3093: What is 80 + 69?",
    "options": [
      "144",
      "149",
      "151",
      "159"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3094: What is 89 × 74?",
    "options": [
      "6586",
      "6598",
      "6576",
      "6591"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3095: What is 56 - 37?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3096: What is 87 + 33?",
    "options": [
      "115",
      "120",
      "122",
      "130"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3097: What is 68 × 11?",
    "options": [
      "748",
      "760",
      "738",
      "753"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3098: What is 47 - 46?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3099: What is 80 + 58?",
    "options": [
      "133",
      "138",
      "140",
      "148"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3100: What is 88 × 36?",
    "options": [
      "3168",
      "3180",
      "3158",
      "3173"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3101: What is 96 - 89?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3102: What is 94 + 95?",
    "options": [
      "184",
      "189",
      "191",
      "199"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3103: What is 88 × 15?",
    "options": [
      "1320",
      "1332",
      "1310",
      "1325"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3104: What is 71 - 58?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3105: What is 40 + 64?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3106: What is 88 × 10?",
    "options": [
      "880",
      "892",
      "870",
      "885"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3107: What is 67 - 21?",
    "options": [
      "49",
      "44",
      "46",
      "54"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3108: What is 93 + 91?",
    "options": [
      "179",
      "184",
      "186",
      "194"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3109: What is 90 × 79?",
    "options": [
      "7110",
      "7122",
      "7100",
      "7115"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3110: What is 28 - 10?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3111: What is 60 + 15?",
    "options": [
      "70",
      "75",
      "77",
      "85"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3112: What is 47 × 48?",
    "options": [
      "2256",
      "2268",
      "2246",
      "2261"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3113: What is 41 - 23?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3114: What is 63 + 83?",
    "options": [
      "141",
      "146",
      "148",
      "156"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3115: What is 76 × 21?",
    "options": [
      "1596",
      "1608",
      "1586",
      "1601"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3116: What is 82 - 44?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3117: What is 37 + 77?",
    "options": [
      "109",
      "114",
      "116",
      "124"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3118: What is 38 × 22?",
    "options": [
      "836",
      "848",
      "826",
      "841"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3119: What is 77 - 76?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3120: What is 50 + 57?",
    "options": [
      "102",
      "107",
      "109",
      "117"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3121: What is 20 × 64?",
    "options": [
      "1280",
      "1292",
      "1270",
      "1285"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3122: What is 93 - 41?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3123: What is 90 + 61?",
    "options": [
      "146",
      "151",
      "153",
      "161"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3124: What is 12 × 66?",
    "options": [
      "792",
      "804",
      "782",
      "797"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3125: What is 96 - 34?",
    "options": [
      "65",
      "60",
      "62",
      "70"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3126: What is 77 + 40?",
    "options": [
      "112",
      "117",
      "119",
      "127"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3127: What is 32 × 12?",
    "options": [
      "384",
      "396",
      "374",
      "389"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3128: What is 28 - 14?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3129: What is 86 + 25?",
    "options": [
      "106",
      "111",
      "113",
      "121"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3130: What is 66 × 23?",
    "options": [
      "1518",
      "1530",
      "1508",
      "1523"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3131: What is 91 - 58?",
    "options": [
      "36",
      "31",
      "33",
      "41"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3132: What is 27 + 37?",
    "options": [
      "59",
      "64",
      "66",
      "74"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3133: What is 54 × 80?",
    "options": [
      "4320",
      "4332",
      "4310",
      "4325"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3134: What is 53 - 32?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3135: What is 34 + 72?",
    "options": [
      "101",
      "106",
      "108",
      "116"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3136: What is 10 × 39?",
    "options": [
      "390",
      "402",
      "380",
      "395"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3137: What is 65 - 26?",
    "options": [
      "42",
      "37",
      "39",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3138: What is 63 + 44?",
    "options": [
      "102",
      "107",
      "109",
      "117"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3139: What is 48 × 35?",
    "options": [
      "1680",
      "1692",
      "1670",
      "1685"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3140: What is 89 - 33?",
    "options": [
      "59",
      "54",
      "56",
      "64"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3141: What is 57 + 23?",
    "options": [
      "75",
      "80",
      "82",
      "90"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3142: What is 45 × 22?",
    "options": [
      "990",
      "1002",
      "980",
      "995"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3143: What is 88 - 12?",
    "options": [
      "79",
      "74",
      "76",
      "84"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3144: What is 50 + 61?",
    "options": [
      "106",
      "111",
      "113",
      "121"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3145: What is 15 × 15?",
    "options": [
      "225",
      "237",
      "215",
      "230"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3146: What is 53 - 46?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3147: What is 13 + 43?",
    "options": [
      "51",
      "56",
      "58",
      "66"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3148: What is 97 × 37?",
    "options": [
      "3589",
      "3601",
      "3579",
      "3594"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3149: What is 48 - 36?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3150: What is 73 + 59?",
    "options": [
      "127",
      "132",
      "134",
      "142"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3151: What is 44 × 70?",
    "options": [
      "3080",
      "3092",
      "3070",
      "3085"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3152: What is 97 - 22?",
    "options": [
      "78",
      "73",
      "75",
      "83"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3153: What is 20 + 97?",
    "options": [
      "112",
      "117",
      "119",
      "127"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3154: What is 94 × 86?",
    "options": [
      "8084",
      "8096",
      "8074",
      "8089"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3155: What is 72 - 39?",
    "options": [
      "36",
      "31",
      "33",
      "41"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3156: What is 39 + 26?",
    "options": [
      "60",
      "65",
      "67",
      "75"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3157: What is 73 × 64?",
    "options": [
      "4672",
      "4684",
      "4662",
      "4677"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3158: What is 58 - 54?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3159: What is 87 + 52?",
    "options": [
      "134",
      "139",
      "141",
      "149"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3160: What is 53 × 76?",
    "options": [
      "4028",
      "4040",
      "4018",
      "4033"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3161: What is 98 - 29?",
    "options": [
      "72",
      "67",
      "69",
      "77"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3162: What is 63 + 80?",
    "options": [
      "138",
      "143",
      "145",
      "153"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3163: What is 90 × 64?",
    "options": [
      "5760",
      "5772",
      "5750",
      "5765"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3164: What is 92 - 92?",
    "options": [
      "3",
      "-2",
      "0",
      "8"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3165: What is 62 + 18?",
    "options": [
      "75",
      "80",
      "82",
      "90"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3166: What is 18 × 20?",
    "options": [
      "360",
      "372",
      "350",
      "365"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3167: What is 23 - 11?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3168: What is 25 + 91?",
    "options": [
      "111",
      "116",
      "118",
      "126"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3169: What is 64 × 93?",
    "options": [
      "5952",
      "5964",
      "5942",
      "5957"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3170: What is 94 - 55?",
    "options": [
      "42",
      "37",
      "39",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3171: What is 10 + 38?",
    "options": [
      "43",
      "48",
      "50",
      "58"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3172: What is 34 × 20?",
    "options": [
      "680",
      "692",
      "670",
      "685"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3173: What is 62 - 36?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3174: What is 60 + 25?",
    "options": [
      "80",
      "85",
      "87",
      "95"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3175: What is 12 × 90?",
    "options": [
      "1080",
      "1092",
      "1070",
      "1085"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3176: What is 97 - 34?",
    "options": [
      "66",
      "61",
      "63",
      "71"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3177: What is 91 + 13?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3178: What is 99 × 46?",
    "options": [
      "4554",
      "4566",
      "4544",
      "4559"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3179: What is 43 - 32?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3180: What is 49 + 35?",
    "options": [
      "79",
      "84",
      "86",
      "94"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3181: What is 41 × 90?",
    "options": [
      "3690",
      "3702",
      "3680",
      "3695"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3182: What is 96 - 14?",
    "options": [
      "85",
      "80",
      "82",
      "90"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3183: What is 24 + 34?",
    "options": [
      "53",
      "58",
      "60",
      "68"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3184: What is 10 × 92?",
    "options": [
      "920",
      "932",
      "910",
      "925"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3185: What is 56 - 11?",
    "options": [
      "48",
      "43",
      "45",
      "53"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3186: What is 50 + 41?",
    "options": [
      "86",
      "91",
      "93",
      "101"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3187: What is 58 × 93?",
    "options": [
      "5394",
      "5406",
      "5384",
      "5399"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3188: What is 95 - 15?",
    "options": [
      "83",
      "78",
      "80",
      "88"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3189: What is 25 + 82?",
    "options": [
      "102",
      "107",
      "109",
      "117"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3190: What is 22 × 29?",
    "options": [
      "638",
      "650",
      "628",
      "643"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3191: What is 37 - 36?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3192: What is 82 + 47?",
    "options": [
      "124",
      "129",
      "131",
      "139"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3193: What is 90 × 95?",
    "options": [
      "8550",
      "8562",
      "8540",
      "8555"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3194: What is 95 - 55?",
    "options": [
      "43",
      "38",
      "40",
      "48"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3195: What is 84 + 67?",
    "options": [
      "146",
      "151",
      "153",
      "161"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3196: What is 79 × 32?",
    "options": [
      "2528",
      "2540",
      "2518",
      "2533"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3197: What is 72 - 18?",
    "options": [
      "57",
      "52",
      "54",
      "62"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3198: What is 16 + 78?",
    "options": [
      "89",
      "94",
      "96",
      "104"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3199: What is 70 × 84?",
    "options": [
      "5880",
      "5892",
      "5870",
      "5885"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3200: What is 64 - 41?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3201: What is 65 + 56?",
    "options": [
      "116",
      "121",
      "123",
      "131"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3202: What is 82 × 56?",
    "options": [
      "4592",
      "4604",
      "4582",
      "4597"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3203: What is 91 - 52?",
    "options": [
      "42",
      "37",
      "39",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3204: What is 84 + 15?",
    "options": [
      "94",
      "99",
      "101",
      "109"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3205: What is 92 × 80?",
    "options": [
      "7360",
      "7372",
      "7350",
      "7365"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3206: What is 71 - 45?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3207: What is 43 + 11?",
    "options": [
      "49",
      "54",
      "56",
      "64"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3208: What is 53 × 70?",
    "options": [
      "3710",
      "3722",
      "3700",
      "3715"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3209: What is 37 - 30?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3210: What is 78 + 79?",
    "options": [
      "152",
      "157",
      "159",
      "167"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3211: What is 17 × 89?",
    "options": [
      "1513",
      "1525",
      "1503",
      "1518"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3212: What is 67 - 46?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3213: What is 39 + 88?",
    "options": [
      "122",
      "127",
      "129",
      "137"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3214: What is 18 × 59?",
    "options": [
      "1062",
      "1074",
      "1052",
      "1067"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3215: What is 64 - 56?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3216: What is 11 + 20?",
    "options": [
      "26",
      "31",
      "33",
      "41"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3217: What is 40 × 88?",
    "options": [
      "3520",
      "3532",
      "3510",
      "3525"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3218: What is 95 - 83?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3219: What is 39 + 42?",
    "options": [
      "76",
      "81",
      "83",
      "91"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3220: What is 10 × 23?",
    "options": [
      "230",
      "242",
      "220",
      "235"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3221: What is 32 - 18?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3222: What is 57 + 22?",
    "options": [
      "74",
      "79",
      "81",
      "89"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3223: What is 43 × 27?",
    "options": [
      "1161",
      "1173",
      "1151",
      "1166"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3224: What is 86 - 28?",
    "options": [
      "61",
      "56",
      "58",
      "66"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3225: What is 56 + 97?",
    "options": [
      "148",
      "153",
      "155",
      "163"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3226: What is 16 × 47?",
    "options": [
      "752",
      "764",
      "742",
      "757"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3227: What is 37 - 29?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3228: What is 72 + 72?",
    "options": [
      "139",
      "144",
      "146",
      "154"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3229: What is 48 × 66?",
    "options": [
      "3168",
      "3180",
      "3158",
      "3173"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3230: What is 24 - 18?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3231: What is 77 + 13?",
    "options": [
      "85",
      "90",
      "92",
      "100"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3232: What is 24 × 88?",
    "options": [
      "2112",
      "2124",
      "2102",
      "2117"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3233: What is 46 - 44?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3234: What is 70 + 39?",
    "options": [
      "104",
      "109",
      "111",
      "119"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3235: What is 94 × 16?",
    "options": [
      "1504",
      "1516",
      "1494",
      "1509"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3236: What is 74 - 66?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3237: What is 74 + 80?",
    "options": [
      "149",
      "154",
      "156",
      "164"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3238: What is 52 × 81?",
    "options": [
      "4212",
      "4224",
      "4202",
      "4217"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3239: What is 86 - 64?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3240: What is 26 + 45?",
    "options": [
      "66",
      "71",
      "73",
      "81"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3241: What is 97 × 42?",
    "options": [
      "4074",
      "4086",
      "4064",
      "4079"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3242: What is 96 - 90?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3243: What is 96 + 50?",
    "options": [
      "141",
      "146",
      "148",
      "156"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3244: What is 37 × 63?",
    "options": [
      "2331",
      "2343",
      "2321",
      "2336"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3245: What is 90 - 52?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3246: What is 44 + 14?",
    "options": [
      "53",
      "58",
      "60",
      "68"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3247: What is 45 × 37?",
    "options": [
      "1665",
      "1677",
      "1655",
      "1670"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3248: What is 82 - 54?",
    "options": [
      "31",
      "26",
      "28",
      "36"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3249: What is 52 + 16?",
    "options": [
      "63",
      "68",
      "70",
      "78"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3250: What is 32 × 94?",
    "options": [
      "3008",
      "3020",
      "2998",
      "3013"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3251: What is 99 - 65?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3252: What is 53 + 36?",
    "options": [
      "84",
      "89",
      "91",
      "99"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3253: What is 87 × 51?",
    "options": [
      "4437",
      "4449",
      "4427",
      "4442"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3254: What is 87 - 51?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3255: What is 98 + 19?",
    "options": [
      "112",
      "117",
      "119",
      "127"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3256: What is 60 × 42?",
    "options": [
      "2520",
      "2532",
      "2510",
      "2525"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3257: What is 65 - 21?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3258: What is 14 + 78?",
    "options": [
      "87",
      "92",
      "94",
      "102"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3259: What is 12 × 45?",
    "options": [
      "540",
      "552",
      "530",
      "545"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3260: What is 67 - 24?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3261: What is 70 + 60?",
    "options": [
      "125",
      "130",
      "132",
      "140"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3262: What is 13 × 53?",
    "options": [
      "689",
      "701",
      "679",
      "694"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3263: What is 36 - 23?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3264: What is 73 + 82?",
    "options": [
      "150",
      "155",
      "157",
      "165"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3265: What is 14 × 35?",
    "options": [
      "490",
      "502",
      "480",
      "495"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3266: What is 61 - 53?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3267: What is 51 + 71?",
    "options": [
      "117",
      "122",
      "124",
      "132"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3268: What is 48 × 77?",
    "options": [
      "3696",
      "3708",
      "3686",
      "3701"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3269: What is 37 - 21?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3270: What is 95 + 68?",
    "options": [
      "158",
      "163",
      "165",
      "173"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3271: What is 37 × 95?",
    "options": [
      "3515",
      "3527",
      "3505",
      "3520"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3272: What is 84 - 76?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3273: What is 81 + 72?",
    "options": [
      "148",
      "153",
      "155",
      "163"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3274: What is 27 × 57?",
    "options": [
      "1539",
      "1551",
      "1529",
      "1544"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3275: What is 85 - 33?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3276: What is 85 + 72?",
    "options": [
      "152",
      "157",
      "159",
      "167"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3277: What is 55 × 45?",
    "options": [
      "2475",
      "2487",
      "2465",
      "2480"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3278: What is 94 - 83?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3279: What is 72 + 40?",
    "options": [
      "107",
      "112",
      "114",
      "122"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3280: What is 51 × 87?",
    "options": [
      "4437",
      "4449",
      "4427",
      "4442"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3281: What is 54 - 10?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3282: What is 59 + 93?",
    "options": [
      "147",
      "152",
      "154",
      "162"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3283: What is 48 × 58?",
    "options": [
      "2784",
      "2796",
      "2774",
      "2789"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3284: What is 85 - 54?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3285: What is 59 + 74?",
    "options": [
      "128",
      "133",
      "135",
      "143"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3286: What is 39 × 98?",
    "options": [
      "3822",
      "3834",
      "3812",
      "3827"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3287: What is 77 - 40?",
    "options": [
      "40",
      "35",
      "37",
      "45"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3288: What is 16 + 31?",
    "options": [
      "42",
      "47",
      "49",
      "57"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3289: What is 97 × 89?",
    "options": [
      "8633",
      "8645",
      "8623",
      "8638"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3290: What is 78 - 62?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3291: What is 12 + 36?",
    "options": [
      "43",
      "48",
      "50",
      "58"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3292: What is 60 × 22?",
    "options": [
      "1320",
      "1332",
      "1310",
      "1325"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3293: What is 94 - 52?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3294: What is 62 + 88?",
    "options": [
      "145",
      "150",
      "152",
      "160"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3295: What is 12 × 17?",
    "options": [
      "204",
      "216",
      "194",
      "209"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3296: What is 52 - 49?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3297: What is 62 + 50?",
    "options": [
      "107",
      "112",
      "114",
      "122"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3298: What is 90 × 62?",
    "options": [
      "5580",
      "5592",
      "5570",
      "5585"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3299: What is 18 - 11?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3300: What is 35 + 78?",
    "options": [
      "108",
      "113",
      "115",
      "123"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3301: What is 87 × 90?",
    "options": [
      "7830",
      "7842",
      "7820",
      "7835"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3302: What is 71 - 10?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3303: What is 76 + 50?",
    "options": [
      "121",
      "126",
      "128",
      "136"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3304: What is 70 × 39?",
    "options": [
      "2730",
      "2742",
      "2720",
      "2735"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3305: What is 79 - 22?",
    "options": [
      "60",
      "55",
      "57",
      "65"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3306: What is 76 + 27?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3307: What is 86 × 27?",
    "options": [
      "2322",
      "2334",
      "2312",
      "2327"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3308: What is 19 - 18?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3309: What is 35 + 76?",
    "options": [
      "106",
      "111",
      "113",
      "121"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3310: What is 80 × 45?",
    "options": [
      "3600",
      "3612",
      "3590",
      "3605"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3311: What is 82 - 76?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3312: What is 33 + 58?",
    "options": [
      "86",
      "91",
      "93",
      "101"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3313: What is 98 × 14?",
    "options": [
      "1372",
      "1384",
      "1362",
      "1377"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3314: What is 88 - 68?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3315: What is 66 + 30?",
    "options": [
      "91",
      "96",
      "98",
      "106"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3316: What is 75 × 34?",
    "options": [
      "2550",
      "2562",
      "2540",
      "2555"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3317: What is 75 - 10?",
    "options": [
      "68",
      "63",
      "65",
      "73"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3318: What is 60 + 21?",
    "options": [
      "76",
      "81",
      "83",
      "91"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3319: What is 55 × 90?",
    "options": [
      "4950",
      "4962",
      "4940",
      "4955"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3320: What is 39 - 16?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3321: What is 92 + 59?",
    "options": [
      "146",
      "151",
      "153",
      "161"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3322: What is 41 × 93?",
    "options": [
      "3813",
      "3825",
      "3803",
      "3818"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3323: What is 68 - 44?",
    "options": [
      "27",
      "22",
      "24",
      "32"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3324: What is 85 + 66?",
    "options": [
      "146",
      "151",
      "153",
      "161"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3325: What is 10 × 60?",
    "options": [
      "600",
      "612",
      "590",
      "605"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3326: What is 66 - 49?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3327: What is 49 + 64?",
    "options": [
      "108",
      "113",
      "115",
      "123"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3328: What is 40 × 33?",
    "options": [
      "1320",
      "1332",
      "1310",
      "1325"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3329: What is 83 - 13?",
    "options": [
      "73",
      "68",
      "70",
      "78"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3330: What is 99 + 23?",
    "options": [
      "117",
      "122",
      "124",
      "132"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3331: What is 92 × 46?",
    "options": [
      "4232",
      "4244",
      "4222",
      "4237"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3332: What is 72 - 60?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3333: What is 18 + 44?",
    "options": [
      "57",
      "62",
      "64",
      "72"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3334: What is 76 × 15?",
    "options": [
      "1140",
      "1152",
      "1130",
      "1145"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3335: What is 67 - 42?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3336: What is 82 + 71?",
    "options": [
      "148",
      "153",
      "155",
      "163"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3337: What is 98 × 42?",
    "options": [
      "4116",
      "4128",
      "4106",
      "4121"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3338: What is 85 - 80?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3339: What is 45 + 47?",
    "options": [
      "87",
      "92",
      "94",
      "102"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3340: What is 65 × 29?",
    "options": [
      "1885",
      "1897",
      "1875",
      "1890"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3341: What is 28 - 16?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3342: What is 98 + 56?",
    "options": [
      "149",
      "154",
      "156",
      "164"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3343: What is 11 × 16?",
    "options": [
      "176",
      "188",
      "166",
      "181"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3344: What is 58 - 52?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3345: What is 79 + 87?",
    "options": [
      "161",
      "166",
      "168",
      "176"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3346: What is 15 × 85?",
    "options": [
      "1275",
      "1287",
      "1265",
      "1280"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3347: What is 83 - 71?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3348: What is 68 + 25?",
    "options": [
      "88",
      "93",
      "95",
      "103"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3349: What is 44 × 77?",
    "options": [
      "3388",
      "3400",
      "3378",
      "3393"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3350: What is 48 - 35?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3351: What is 31 + 22?",
    "options": [
      "48",
      "53",
      "55",
      "63"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3352: What is 73 × 68?",
    "options": [
      "4964",
      "4976",
      "4954",
      "4969"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3353: What is 52 - 49?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3354: What is 32 + 37?",
    "options": [
      "64",
      "69",
      "71",
      "79"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3355: What is 80 × 22?",
    "options": [
      "1760",
      "1772",
      "1750",
      "1765"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3356: What is 69 - 35?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3357: What is 33 + 48?",
    "options": [
      "76",
      "81",
      "83",
      "91"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3358: What is 63 × 44?",
    "options": [
      "2772",
      "2784",
      "2762",
      "2777"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3359: What is 92 - 69?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3360: What is 60 + 15?",
    "options": [
      "70",
      "75",
      "77",
      "85"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3361: What is 85 × 46?",
    "options": [
      "3910",
      "3922",
      "3900",
      "3915"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3362: What is 95 - 42?",
    "options": [
      "56",
      "51",
      "53",
      "61"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3363: What is 56 + 95?",
    "options": [
      "146",
      "151",
      "153",
      "161"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3364: What is 31 × 14?",
    "options": [
      "434",
      "446",
      "424",
      "439"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3365: What is 77 - 76?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3366: What is 65 + 46?",
    "options": [
      "106",
      "111",
      "113",
      "121"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3367: What is 67 × 83?",
    "options": [
      "5561",
      "5573",
      "5551",
      "5566"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3368: What is 95 - 90?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3369: What is 50 + 28?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3370: What is 21 × 83?",
    "options": [
      "1743",
      "1755",
      "1733",
      "1748"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3371: What is 94 - 55?",
    "options": [
      "42",
      "37",
      "39",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3372: What is 70 + 21?",
    "options": [
      "86",
      "91",
      "93",
      "101"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3373: What is 12 × 61?",
    "options": [
      "732",
      "744",
      "722",
      "737"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3374: What is 48 - 18?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3375: What is 96 + 13?",
    "options": [
      "104",
      "109",
      "111",
      "119"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3376: What is 71 × 75?",
    "options": [
      "5325",
      "5337",
      "5315",
      "5330"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3377: What is 98 - 24?",
    "options": [
      "77",
      "72",
      "74",
      "82"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3378: What is 49 + 85?",
    "options": [
      "129",
      "134",
      "136",
      "144"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3379: What is 68 × 57?",
    "options": [
      "3876",
      "3888",
      "3866",
      "3881"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3380: What is 60 - 36?",
    "options": [
      "27",
      "22",
      "24",
      "32"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3381: What is 55 + 24?",
    "options": [
      "74",
      "79",
      "81",
      "89"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3382: What is 32 × 31?",
    "options": [
      "992",
      "1004",
      "982",
      "997"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3383: What is 93 - 86?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3384: What is 82 + 40?",
    "options": [
      "117",
      "122",
      "124",
      "132"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3385: What is 66 × 24?",
    "options": [
      "1584",
      "1596",
      "1574",
      "1589"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3386: What is 97 - 68?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3387: What is 96 + 87?",
    "options": [
      "178",
      "183",
      "185",
      "193"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3388: What is 32 × 89?",
    "options": [
      "2848",
      "2860",
      "2838",
      "2853"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3389: What is 61 - 10?",
    "options": [
      "54",
      "49",
      "51",
      "59"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3390: What is 68 + 42?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3391: What is 32 × 20?",
    "options": [
      "640",
      "652",
      "630",
      "645"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3392: What is 36 - 17?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3393: What is 69 + 29?",
    "options": [
      "93",
      "98",
      "100",
      "108"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3394: What is 67 × 33?",
    "options": [
      "2211",
      "2223",
      "2201",
      "2216"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3395: What is 90 - 30?",
    "options": [
      "63",
      "58",
      "60",
      "68"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3396: What is 96 + 49?",
    "options": [
      "140",
      "145",
      "147",
      "155"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3397: What is 81 × 60?",
    "options": [
      "4860",
      "4872",
      "4850",
      "4865"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3398: What is 53 - 14?",
    "options": [
      "42",
      "37",
      "39",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3399: What is 23 + 38?",
    "options": [
      "56",
      "61",
      "63",
      "71"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3400: What is 39 × 68?",
    "options": [
      "2652",
      "2664",
      "2642",
      "2657"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3401: What is 21 - 16?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3402: What is 50 + 28?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3403: What is 28 × 67?",
    "options": [
      "1876",
      "1888",
      "1866",
      "1881"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3404: What is 32 - 12?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3405: What is 92 + 20?",
    "options": [
      "107",
      "112",
      "114",
      "122"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3406: What is 55 × 47?",
    "options": [
      "2585",
      "2597",
      "2575",
      "2590"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3407: What is 44 - 13?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3408: What is 17 + 34?",
    "options": [
      "46",
      "51",
      "53",
      "61"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3409: What is 30 × 61?",
    "options": [
      "1830",
      "1842",
      "1820",
      "1835"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3410: What is 52 - 10?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3411: What is 34 + 55?",
    "options": [
      "84",
      "89",
      "91",
      "99"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3412: What is 76 × 99?",
    "options": [
      "7524",
      "7536",
      "7514",
      "7529"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3413: What is 76 - 72?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3414: What is 35 + 89?",
    "options": [
      "119",
      "124",
      "126",
      "134"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3415: What is 64 × 69?",
    "options": [
      "4416",
      "4428",
      "4406",
      "4421"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3416: What is 98 - 56?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3417: What is 94 + 89?",
    "options": [
      "178",
      "183",
      "185",
      "193"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3418: What is 90 × 69?",
    "options": [
      "6210",
      "6222",
      "6200",
      "6215"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3419: What is 89 - 67?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3420: What is 99 + 28?",
    "options": [
      "122",
      "127",
      "129",
      "137"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3421: What is 75 × 52?",
    "options": [
      "3900",
      "3912",
      "3890",
      "3905"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3422: What is 70 - 47?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3423: What is 93 + 84?",
    "options": [
      "172",
      "177",
      "179",
      "187"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3424: What is 45 × 94?",
    "options": [
      "4230",
      "4242",
      "4220",
      "4235"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3425: What is 64 - 32?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3426: What is 97 + 67?",
    "options": [
      "159",
      "164",
      "166",
      "174"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3427: What is 30 × 99?",
    "options": [
      "2970",
      "2982",
      "2960",
      "2975"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3428: What is 97 - 88?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3429: What is 57 + 24?",
    "options": [
      "76",
      "81",
      "83",
      "91"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3430: What is 72 × 26?",
    "options": [
      "1872",
      "1884",
      "1862",
      "1877"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3431: What is 49 - 29?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3432: What is 51 + 38?",
    "options": [
      "84",
      "89",
      "91",
      "99"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3433: What is 77 × 31?",
    "options": [
      "2387",
      "2399",
      "2377",
      "2392"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3434: What is 98 - 47?",
    "options": [
      "54",
      "49",
      "51",
      "59"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3435: What is 83 + 34?",
    "options": [
      "112",
      "117",
      "119",
      "127"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3436: What is 89 × 67?",
    "options": [
      "5963",
      "5975",
      "5953",
      "5968"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3437: What is 90 - 68?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3438: What is 72 + 35?",
    "options": [
      "102",
      "107",
      "109",
      "117"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3439: What is 55 × 41?",
    "options": [
      "2255",
      "2267",
      "2245",
      "2260"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3440: What is 57 - 41?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3441: What is 66 + 53?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3442: What is 17 × 62?",
    "options": [
      "1054",
      "1066",
      "1044",
      "1059"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3443: What is 93 - 31?",
    "options": [
      "65",
      "60",
      "62",
      "70"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3444: What is 91 + 89?",
    "options": [
      "175",
      "180",
      "182",
      "190"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3445: What is 67 × 57?",
    "options": [
      "3819",
      "3831",
      "3809",
      "3824"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3446: What is 82 - 12?",
    "options": [
      "73",
      "68",
      "70",
      "78"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3447: What is 18 + 84?",
    "options": [
      "97",
      "102",
      "104",
      "112"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3448: What is 43 × 53?",
    "options": [
      "2279",
      "2291",
      "2269",
      "2284"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3449: What is 63 - 36?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3450: What is 64 + 96?",
    "options": [
      "155",
      "160",
      "162",
      "170"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3451: What is 23 × 76?",
    "options": [
      "1748",
      "1760",
      "1738",
      "1753"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3452: What is 90 - 38?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3453: What is 62 + 82?",
    "options": [
      "139",
      "144",
      "146",
      "154"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3454: What is 67 × 51?",
    "options": [
      "3417",
      "3429",
      "3407",
      "3422"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3455: What is 81 - 40?",
    "options": [
      "44",
      "39",
      "41",
      "49"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3456: What is 66 + 64?",
    "options": [
      "125",
      "130",
      "132",
      "140"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3457: What is 56 × 75?",
    "options": [
      "4200",
      "4212",
      "4190",
      "4205"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3458: What is 66 - 48?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3459: What is 85 + 44?",
    "options": [
      "124",
      "129",
      "131",
      "139"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3460: What is 75 × 26?",
    "options": [
      "1950",
      "1962",
      "1940",
      "1955"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3461: What is 74 - 52?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3462: What is 45 + 54?",
    "options": [
      "94",
      "99",
      "101",
      "109"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3463: What is 85 × 10?",
    "options": [
      "850",
      "862",
      "840",
      "855"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3464: What is 82 - 69?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3465: What is 88 + 55?",
    "options": [
      "138",
      "143",
      "145",
      "153"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3466: What is 65 × 82?",
    "options": [
      "5330",
      "5342",
      "5320",
      "5335"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3467: What is 44 - 19?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3468: What is 64 + 69?",
    "options": [
      "128",
      "133",
      "135",
      "143"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3469: What is 51 × 27?",
    "options": [
      "1377",
      "1389",
      "1367",
      "1382"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3470: What is 41 - 26?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3471: What is 60 + 11?",
    "options": [
      "66",
      "71",
      "73",
      "81"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3472: What is 99 × 37?",
    "options": [
      "3663",
      "3675",
      "3653",
      "3668"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3473: What is 62 - 39?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3474: What is 53 + 12?",
    "options": [
      "60",
      "65",
      "67",
      "75"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3475: What is 40 × 63?",
    "options": [
      "2520",
      "2532",
      "2510",
      "2525"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3476: What is 84 - 39?",
    "options": [
      "48",
      "43",
      "45",
      "53"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3477: What is 91 + 25?",
    "options": [
      "111",
      "116",
      "118",
      "126"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3478: What is 38 × 23?",
    "options": [
      "874",
      "886",
      "864",
      "879"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3479: What is 91 - 17?",
    "options": [
      "77",
      "72",
      "74",
      "82"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3480: What is 16 + 97?",
    "options": [
      "108",
      "113",
      "115",
      "123"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3481: What is 27 × 53?",
    "options": [
      "1431",
      "1443",
      "1421",
      "1436"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3482: What is 25 - 23?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3483: What is 28 + 28?",
    "options": [
      "51",
      "56",
      "58",
      "66"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3484: What is 86 × 92?",
    "options": [
      "7912",
      "7924",
      "7902",
      "7917"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3485: What is 80 - 24?",
    "options": [
      "59",
      "54",
      "56",
      "64"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3486: What is 35 + 97?",
    "options": [
      "127",
      "132",
      "134",
      "142"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3487: What is 54 × 41?",
    "options": [
      "2214",
      "2226",
      "2204",
      "2219"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3488: What is 19 - 15?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3489: What is 54 + 71?",
    "options": [
      "120",
      "125",
      "127",
      "135"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3490: What is 94 × 79?",
    "options": [
      "7426",
      "7438",
      "7416",
      "7431"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3491: What is 96 - 55?",
    "options": [
      "44",
      "39",
      "41",
      "49"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3492: What is 73 + 16?",
    "options": [
      "84",
      "89",
      "91",
      "99"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3493: What is 60 × 40?",
    "options": [
      "2400",
      "2412",
      "2390",
      "2405"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3494: What is 59 - 38?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3495: What is 15 + 23?",
    "options": [
      "33",
      "38",
      "40",
      "48"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3496: What is 11 × 75?",
    "options": [
      "825",
      "837",
      "815",
      "830"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3497: What is 59 - 11?",
    "options": [
      "51",
      "46",
      "48",
      "56"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3498: What is 42 + 82?",
    "options": [
      "119",
      "124",
      "126",
      "134"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3499: What is 87 × 49?",
    "options": [
      "4263",
      "4275",
      "4253",
      "4268"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3500: What is 77 - 68?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3501: What is 54 + 81?",
    "options": [
      "130",
      "135",
      "137",
      "145"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3502: What is 69 × 23?",
    "options": [
      "1587",
      "1599",
      "1577",
      "1592"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3503: What is 91 - 71?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3504: What is 83 + 61?",
    "options": [
      "139",
      "144",
      "146",
      "154"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3505: What is 23 × 54?",
    "options": [
      "1242",
      "1254",
      "1232",
      "1247"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3506: What is 18 - 14?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3507: What is 71 + 19?",
    "options": [
      "85",
      "90",
      "92",
      "100"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3508: What is 32 × 16?",
    "options": [
      "512",
      "524",
      "502",
      "517"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3509: What is 97 - 63?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3510: What is 74 + 88?",
    "options": [
      "157",
      "162",
      "164",
      "172"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3511: What is 68 × 55?",
    "options": [
      "3740",
      "3752",
      "3730",
      "3745"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3512: What is 95 - 91?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3513: What is 24 + 89?",
    "options": [
      "108",
      "113",
      "115",
      "123"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3514: What is 51 × 16?",
    "options": [
      "816",
      "828",
      "806",
      "821"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3515: What is 70 - 14?",
    "options": [
      "59",
      "54",
      "56",
      "64"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3516: What is 75 + 88?",
    "options": [
      "158",
      "163",
      "165",
      "173"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3517: What is 40 × 40?",
    "options": [
      "1600",
      "1612",
      "1590",
      "1605"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3518: What is 75 - 34?",
    "options": [
      "44",
      "39",
      "41",
      "49"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3519: What is 72 + 77?",
    "options": [
      "144",
      "149",
      "151",
      "159"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3520: What is 74 × 39?",
    "options": [
      "2886",
      "2898",
      "2876",
      "2891"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3521: What is 64 - 14?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3522: What is 81 + 60?",
    "options": [
      "136",
      "141",
      "143",
      "151"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3523: What is 78 × 46?",
    "options": [
      "3588",
      "3600",
      "3578",
      "3593"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3524: What is 62 - 25?",
    "options": [
      "40",
      "35",
      "37",
      "45"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3525: What is 43 + 34?",
    "options": [
      "72",
      "77",
      "79",
      "87"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3526: What is 28 × 24?",
    "options": [
      "672",
      "684",
      "662",
      "677"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3527: What is 89 - 25?",
    "options": [
      "67",
      "62",
      "64",
      "72"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3528: What is 37 + 45?",
    "options": [
      "77",
      "82",
      "84",
      "92"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3529: What is 39 × 23?",
    "options": [
      "897",
      "909",
      "887",
      "902"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3530: What is 47 - 10?",
    "options": [
      "40",
      "35",
      "37",
      "45"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3531: What is 28 + 96?",
    "options": [
      "119",
      "124",
      "126",
      "134"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3532: What is 57 × 63?",
    "options": [
      "3591",
      "3603",
      "3581",
      "3596"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3533: What is 77 - 73?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3534: What is 42 + 42?",
    "options": [
      "79",
      "84",
      "86",
      "94"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3535: What is 31 × 43?",
    "options": [
      "1333",
      "1345",
      "1323",
      "1338"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3536: What is 85 - 18?",
    "options": [
      "70",
      "65",
      "67",
      "75"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3537: What is 72 + 24?",
    "options": [
      "91",
      "96",
      "98",
      "106"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3538: What is 75 × 22?",
    "options": [
      "1650",
      "1662",
      "1640",
      "1655"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3539: What is 41 - 39?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3540: What is 79 + 23?",
    "options": [
      "97",
      "102",
      "104",
      "112"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3541: What is 46 × 73?",
    "options": [
      "3358",
      "3370",
      "3348",
      "3363"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3542: What is 66 - 47?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3543: What is 50 + 10?",
    "options": [
      "55",
      "60",
      "62",
      "70"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3544: What is 42 × 13?",
    "options": [
      "546",
      "558",
      "536",
      "551"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3545: What is 89 - 23?",
    "options": [
      "69",
      "64",
      "66",
      "74"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3546: What is 59 + 81?",
    "options": [
      "135",
      "140",
      "142",
      "150"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3547: What is 47 × 65?",
    "options": [
      "3055",
      "3067",
      "3045",
      "3060"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3548: What is 55 - 31?",
    "options": [
      "27",
      "22",
      "24",
      "32"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3549: What is 91 + 36?",
    "options": [
      "122",
      "127",
      "129",
      "137"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3550: What is 37 × 54?",
    "options": [
      "1998",
      "2010",
      "1988",
      "2003"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3551: What is 52 - 10?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3552: What is 45 + 46?",
    "options": [
      "86",
      "91",
      "93",
      "101"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3553: What is 43 × 52?",
    "options": [
      "2236",
      "2248",
      "2226",
      "2241"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3554: What is 80 - 72?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3555: What is 30 + 96?",
    "options": [
      "121",
      "126",
      "128",
      "136"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3556: What is 59 × 76?",
    "options": [
      "4484",
      "4496",
      "4474",
      "4489"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3557: What is 37 - 28?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3558: What is 91 + 64?",
    "options": [
      "150",
      "155",
      "157",
      "165"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3559: What is 51 × 55?",
    "options": [
      "2805",
      "2817",
      "2795",
      "2810"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3560: What is 78 - 34?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3561: What is 93 + 53?",
    "options": [
      "141",
      "146",
      "148",
      "156"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3562: What is 21 × 97?",
    "options": [
      "2037",
      "2049",
      "2027",
      "2042"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3563: What is 83 - 71?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3564: What is 55 + 10?",
    "options": [
      "60",
      "65",
      "67",
      "75"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3565: What is 20 × 40?",
    "options": [
      "800",
      "812",
      "790",
      "805"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3566: What is 98 - 56?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3567: What is 85 + 55?",
    "options": [
      "135",
      "140",
      "142",
      "150"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3568: What is 10 × 98?",
    "options": [
      "980",
      "992",
      "970",
      "985"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3569: What is 67 - 27?",
    "options": [
      "43",
      "38",
      "40",
      "48"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3570: What is 95 + 24?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3571: What is 52 × 19?",
    "options": [
      "988",
      "1000",
      "978",
      "993"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3572: What is 63 - 61?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3573: What is 68 + 19?",
    "options": [
      "82",
      "87",
      "89",
      "97"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3574: What is 48 × 61?",
    "options": [
      "2928",
      "2940",
      "2918",
      "2933"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3575: What is 97 - 83?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3576: What is 89 + 56?",
    "options": [
      "140",
      "145",
      "147",
      "155"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3577: What is 50 × 42?",
    "options": [
      "2100",
      "2112",
      "2090",
      "2105"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3578: What is 78 - 43?",
    "options": [
      "38",
      "33",
      "35",
      "43"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3579: What is 55 + 73?",
    "options": [
      "123",
      "128",
      "130",
      "138"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3580: What is 90 × 15?",
    "options": [
      "1350",
      "1362",
      "1340",
      "1355"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3581: What is 82 - 67?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3582: What is 86 + 53?",
    "options": [
      "134",
      "139",
      "141",
      "149"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3583: What is 41 × 28?",
    "options": [
      "1148",
      "1160",
      "1138",
      "1153"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3584: What is 30 - 10?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3585: What is 27 + 87?",
    "options": [
      "109",
      "114",
      "116",
      "124"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3586: What is 44 × 11?",
    "options": [
      "484",
      "496",
      "474",
      "489"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3587: What is 32 - 11?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3588: What is 78 + 68?",
    "options": [
      "141",
      "146",
      "148",
      "156"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3589: What is 46 × 27?",
    "options": [
      "1242",
      "1254",
      "1232",
      "1247"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3590: What is 66 - 62?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3591: What is 51 + 94?",
    "options": [
      "140",
      "145",
      "147",
      "155"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3592: What is 66 × 67?",
    "options": [
      "4422",
      "4434",
      "4412",
      "4427"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3593: What is 56 - 31?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3594: What is 68 + 29?",
    "options": [
      "92",
      "97",
      "99",
      "107"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3595: What is 23 × 71?",
    "options": [
      "1633",
      "1645",
      "1623",
      "1638"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3596: What is 83 - 71?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3597: What is 97 + 23?",
    "options": [
      "115",
      "120",
      "122",
      "130"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3598: What is 88 × 41?",
    "options": [
      "3608",
      "3620",
      "3598",
      "3613"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3599: What is 71 - 39?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3600: What is 72 + 33?",
    "options": [
      "100",
      "105",
      "107",
      "115"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3601: What is 71 × 74?",
    "options": [
      "5254",
      "5266",
      "5244",
      "5259"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3602: What is 50 - 50?",
    "options": [
      "3",
      "-2",
      "0",
      "8"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3603: What is 82 + 97?",
    "options": [
      "174",
      "179",
      "181",
      "189"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3604: What is 33 × 79?",
    "options": [
      "2607",
      "2619",
      "2597",
      "2612"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3605: What is 24 - 23?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3606: What is 75 + 12?",
    "options": [
      "82",
      "87",
      "89",
      "97"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3607: What is 53 × 26?",
    "options": [
      "1378",
      "1390",
      "1368",
      "1383"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3608: What is 79 - 62?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3609: What is 43 + 85?",
    "options": [
      "123",
      "128",
      "130",
      "138"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3610: What is 53 × 91?",
    "options": [
      "4823",
      "4835",
      "4813",
      "4828"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3611: What is 90 - 39?",
    "options": [
      "54",
      "49",
      "51",
      "59"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3612: What is 48 + 45?",
    "options": [
      "88",
      "93",
      "95",
      "103"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3613: What is 74 × 24?",
    "options": [
      "1776",
      "1788",
      "1766",
      "1781"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3614: What is 55 - 36?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3615: What is 56 + 15?",
    "options": [
      "66",
      "71",
      "73",
      "81"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3616: What is 52 × 95?",
    "options": [
      "4940",
      "4952",
      "4930",
      "4945"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3617: What is 41 - 12?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3618: What is 33 + 62?",
    "options": [
      "90",
      "95",
      "97",
      "105"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3619: What is 94 × 83?",
    "options": [
      "7802",
      "7814",
      "7792",
      "7807"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3620: What is 94 - 70?",
    "options": [
      "27",
      "22",
      "24",
      "32"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3621: What is 58 + 28?",
    "options": [
      "81",
      "86",
      "88",
      "96"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3622: What is 86 × 25?",
    "options": [
      "2150",
      "2162",
      "2140",
      "2155"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3623: What is 94 - 85?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3624: What is 91 + 64?",
    "options": [
      "150",
      "155",
      "157",
      "165"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3625: What is 47 × 31?",
    "options": [
      "1457",
      "1469",
      "1447",
      "1462"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3626: What is 95 - 29?",
    "options": [
      "69",
      "64",
      "66",
      "74"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3627: What is 60 + 15?",
    "options": [
      "70",
      "75",
      "77",
      "85"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3628: What is 41 × 47?",
    "options": [
      "1927",
      "1939",
      "1917",
      "1932"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3629: What is 92 - 72?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3630: What is 84 + 50?",
    "options": [
      "129",
      "134",
      "136",
      "144"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3631: What is 23 × 16?",
    "options": [
      "368",
      "380",
      "358",
      "373"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3632: What is 69 - 52?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3633: What is 74 + 66?",
    "options": [
      "135",
      "140",
      "142",
      "150"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3634: What is 44 × 21?",
    "options": [
      "924",
      "936",
      "914",
      "929"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3635: What is 92 - 48?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3636: What is 59 + 78?",
    "options": [
      "132",
      "137",
      "139",
      "147"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3637: What is 84 × 60?",
    "options": [
      "5040",
      "5052",
      "5030",
      "5045"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3638: What is 71 - 59?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3639: What is 88 + 78?",
    "options": [
      "161",
      "166",
      "168",
      "176"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3640: What is 28 × 13?",
    "options": [
      "364",
      "376",
      "354",
      "369"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3641: What is 96 - 47?",
    "options": [
      "52",
      "47",
      "49",
      "57"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3642: What is 93 + 34?",
    "options": [
      "122",
      "127",
      "129",
      "137"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3643: What is 59 × 53?",
    "options": [
      "3127",
      "3139",
      "3117",
      "3132"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3644: What is 75 - 68?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3645: What is 26 + 47?",
    "options": [
      "68",
      "73",
      "75",
      "83"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3646: What is 28 × 14?",
    "options": [
      "392",
      "404",
      "382",
      "397"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3647: What is 79 - 14?",
    "options": [
      "68",
      "63",
      "65",
      "73"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3648: What is 28 + 45?",
    "options": [
      "68",
      "73",
      "75",
      "83"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3649: What is 70 × 49?",
    "options": [
      "3430",
      "3442",
      "3420",
      "3435"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3650: What is 87 - 58?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3651: What is 73 + 35?",
    "options": [
      "103",
      "108",
      "110",
      "118"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3652: What is 33 × 70?",
    "options": [
      "2310",
      "2322",
      "2300",
      "2315"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3653: What is 21 - 14?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3654: What is 53 + 92?",
    "options": [
      "140",
      "145",
      "147",
      "155"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3655: What is 10 × 39?",
    "options": [
      "390",
      "402",
      "380",
      "395"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3656: What is 78 - 51?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3657: What is 30 + 69?",
    "options": [
      "94",
      "99",
      "101",
      "109"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3658: What is 96 × 96?",
    "options": [
      "9216",
      "9228",
      "9206",
      "9221"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3659: What is 84 - 19?",
    "options": [
      "68",
      "63",
      "65",
      "73"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3660: What is 23 + 92?",
    "options": [
      "110",
      "115",
      "117",
      "125"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3661: What is 99 × 38?",
    "options": [
      "3762",
      "3774",
      "3752",
      "3767"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3662: What is 79 - 20?",
    "options": [
      "62",
      "57",
      "59",
      "67"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3663: What is 17 + 96?",
    "options": [
      "108",
      "113",
      "115",
      "123"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3664: What is 70 × 71?",
    "options": [
      "4970",
      "4982",
      "4960",
      "4975"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3665: What is 64 - 57?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3666: What is 72 + 47?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3667: What is 51 × 13?",
    "options": [
      "663",
      "675",
      "653",
      "668"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3668: What is 74 - 22?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3669: What is 10 + 20?",
    "options": [
      "25",
      "30",
      "32",
      "40"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3670: What is 66 × 69?",
    "options": [
      "4554",
      "4566",
      "4544",
      "4559"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3671: What is 69 - 38?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3672: What is 82 + 55?",
    "options": [
      "132",
      "137",
      "139",
      "147"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3673: What is 12 × 16?",
    "options": [
      "192",
      "204",
      "182",
      "197"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3674: What is 38 - 23?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3675: What is 40 + 35?",
    "options": [
      "70",
      "75",
      "77",
      "85"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3676: What is 12 × 36?",
    "options": [
      "432",
      "444",
      "422",
      "437"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3677: What is 76 - 27?",
    "options": [
      "52",
      "47",
      "49",
      "57"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3678: What is 42 + 88?",
    "options": [
      "125",
      "130",
      "132",
      "140"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3679: What is 48 × 60?",
    "options": [
      "2880",
      "2892",
      "2870",
      "2885"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3680: What is 91 - 32?",
    "options": [
      "62",
      "57",
      "59",
      "67"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3681: What is 10 + 14?",
    "options": [
      "19",
      "24",
      "26",
      "34"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3682: What is 22 × 71?",
    "options": [
      "1562",
      "1574",
      "1552",
      "1567"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3683: What is 94 - 61?",
    "options": [
      "36",
      "31",
      "33",
      "41"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3684: What is 22 + 66?",
    "options": [
      "83",
      "88",
      "90",
      "98"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3685: What is 74 × 15?",
    "options": [
      "1110",
      "1122",
      "1100",
      "1115"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3686: What is 75 - 56?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3687: What is 53 + 77?",
    "options": [
      "125",
      "130",
      "132",
      "140"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3688: What is 97 × 49?",
    "options": [
      "4753",
      "4765",
      "4743",
      "4758"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3689: What is 67 - 51?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3690: What is 45 + 74?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3691: What is 55 × 76?",
    "options": [
      "4180",
      "4192",
      "4170",
      "4185"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3692: What is 94 - 60?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3693: What is 45 + 48?",
    "options": [
      "88",
      "93",
      "95",
      "103"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3694: What is 58 × 23?",
    "options": [
      "1334",
      "1346",
      "1324",
      "1339"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3695: What is 73 - 14?",
    "options": [
      "62",
      "57",
      "59",
      "67"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3696: What is 62 + 11?",
    "options": [
      "68",
      "73",
      "75",
      "83"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3697: What is 10 × 99?",
    "options": [
      "990",
      "1002",
      "980",
      "995"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3698: What is 99 - 15?",
    "options": [
      "87",
      "82",
      "84",
      "92"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3699: What is 23 + 80?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3700: What is 42 × 74?",
    "options": [
      "3108",
      "3120",
      "3098",
      "3113"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3701: What is 92 - 17?",
    "options": [
      "78",
      "73",
      "75",
      "83"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3702: What is 92 + 20?",
    "options": [
      "107",
      "112",
      "114",
      "122"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3703: What is 87 × 32?",
    "options": [
      "2784",
      "2796",
      "2774",
      "2789"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3704: What is 71 - 66?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3705: What is 39 + 81?",
    "options": [
      "115",
      "120",
      "122",
      "130"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3706: What is 58 × 83?",
    "options": [
      "4814",
      "4826",
      "4804",
      "4819"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3707: What is 97 - 25?",
    "options": [
      "75",
      "70",
      "72",
      "80"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3708: What is 56 + 15?",
    "options": [
      "66",
      "71",
      "73",
      "81"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3709: What is 98 × 50?",
    "options": [
      "4900",
      "4912",
      "4890",
      "4905"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3710: What is 99 - 87?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3711: What is 93 + 37?",
    "options": [
      "125",
      "130",
      "132",
      "140"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3712: What is 35 × 42?",
    "options": [
      "1470",
      "1482",
      "1460",
      "1475"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3713: What is 67 - 63?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3714: What is 36 + 33?",
    "options": [
      "64",
      "69",
      "71",
      "79"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3715: What is 15 × 75?",
    "options": [
      "1125",
      "1137",
      "1115",
      "1130"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3716: What is 96 - 16?",
    "options": [
      "83",
      "78",
      "80",
      "88"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3717: What is 41 + 77?",
    "options": [
      "113",
      "118",
      "120",
      "128"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3718: What is 77 × 55?",
    "options": [
      "4235",
      "4247",
      "4225",
      "4240"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3719: What is 98 - 94?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3720: What is 64 + 63?",
    "options": [
      "122",
      "127",
      "129",
      "137"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3721: What is 78 × 88?",
    "options": [
      "6864",
      "6876",
      "6854",
      "6869"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3722: What is 49 - 49?",
    "options": [
      "3",
      "-2",
      "0",
      "8"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3723: What is 33 + 66?",
    "options": [
      "94",
      "99",
      "101",
      "109"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3724: What is 62 × 67?",
    "options": [
      "4154",
      "4166",
      "4144",
      "4159"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3725: What is 35 - 13?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3726: What is 77 + 47?",
    "options": [
      "119",
      "124",
      "126",
      "134"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3727: What is 50 × 79?",
    "options": [
      "3950",
      "3962",
      "3940",
      "3955"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3728: What is 94 - 85?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3729: What is 61 + 17?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3730: What is 85 × 89?",
    "options": [
      "7565",
      "7577",
      "7555",
      "7570"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3731: What is 69 - 56?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3732: What is 97 + 38?",
    "options": [
      "130",
      "135",
      "137",
      "145"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3733: What is 57 × 62?",
    "options": [
      "3534",
      "3546",
      "3524",
      "3539"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3734: What is 80 - 30?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3735: What is 13 + 68?",
    "options": [
      "76",
      "81",
      "83",
      "91"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3736: What is 47 × 14?",
    "options": [
      "658",
      "670",
      "648",
      "663"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3737: What is 79 - 15?",
    "options": [
      "67",
      "62",
      "64",
      "72"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3738: What is 19 + 58?",
    "options": [
      "72",
      "77",
      "79",
      "87"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3739: What is 48 × 92?",
    "options": [
      "4416",
      "4428",
      "4406",
      "4421"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3740: What is 98 - 15?",
    "options": [
      "86",
      "81",
      "83",
      "91"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3741: What is 59 + 89?",
    "options": [
      "143",
      "148",
      "150",
      "158"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3742: What is 66 × 30?",
    "options": [
      "1980",
      "1992",
      "1970",
      "1985"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3743: What is 58 - 36?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3744: What is 63 + 29?",
    "options": [
      "87",
      "92",
      "94",
      "102"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3745: What is 96 × 91?",
    "options": [
      "8736",
      "8748",
      "8726",
      "8741"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3746: What is 62 - 44?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3747: What is 91 + 23?",
    "options": [
      "109",
      "114",
      "116",
      "124"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3748: What is 87 × 95?",
    "options": [
      "8265",
      "8277",
      "8255",
      "8270"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3749: What is 56 - 44?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3750: What is 21 + 28?",
    "options": [
      "44",
      "49",
      "51",
      "59"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3751: What is 80 × 11?",
    "options": [
      "880",
      "892",
      "870",
      "885"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3752: What is 89 - 74?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3753: What is 41 + 29?",
    "options": [
      "65",
      "70",
      "72",
      "80"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3754: What is 25 × 36?",
    "options": [
      "900",
      "912",
      "890",
      "905"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3755: What is 41 - 25?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3756: What is 58 + 24?",
    "options": [
      "77",
      "82",
      "84",
      "92"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3757: What is 41 × 80?",
    "options": [
      "3280",
      "3292",
      "3270",
      "3285"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3758: What is 32 - 16?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3759: What is 40 + 40?",
    "options": [
      "75",
      "80",
      "82",
      "90"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3760: What is 40 × 20?",
    "options": [
      "800",
      "812",
      "790",
      "805"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3761: What is 80 - 26?",
    "options": [
      "57",
      "52",
      "54",
      "62"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3762: What is 73 + 12?",
    "options": [
      "80",
      "85",
      "87",
      "95"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3763: What is 57 × 28?",
    "options": [
      "1596",
      "1608",
      "1586",
      "1601"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3764: What is 78 - 14?",
    "options": [
      "67",
      "62",
      "64",
      "72"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3765: What is 84 + 10?",
    "options": [
      "89",
      "94",
      "96",
      "104"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3766: What is 60 × 42?",
    "options": [
      "2520",
      "2532",
      "2510",
      "2525"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3767: What is 97 - 47?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3768: What is 64 + 51?",
    "options": [
      "110",
      "115",
      "117",
      "125"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3769: What is 55 × 72?",
    "options": [
      "3960",
      "3972",
      "3950",
      "3965"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3770: What is 64 - 30?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3771: What is 30 + 34?",
    "options": [
      "59",
      "64",
      "66",
      "74"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3772: What is 15 × 45?",
    "options": [
      "675",
      "687",
      "665",
      "680"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3773: What is 91 - 90?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3774: What is 36 + 74?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3775: What is 49 × 25?",
    "options": [
      "1225",
      "1237",
      "1215",
      "1230"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3776: What is 87 - 78?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3777: What is 26 + 26?",
    "options": [
      "47",
      "52",
      "54",
      "62"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3778: What is 56 × 87?",
    "options": [
      "4872",
      "4884",
      "4862",
      "4877"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3779: What is 99 - 18?",
    "options": [
      "84",
      "79",
      "81",
      "89"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3780: What is 60 + 36?",
    "options": [
      "91",
      "96",
      "98",
      "106"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3781: What is 51 × 73?",
    "options": [
      "3723",
      "3735",
      "3713",
      "3728"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3782: What is 99 - 30?",
    "options": [
      "72",
      "67",
      "69",
      "77"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3783: What is 89 + 26?",
    "options": [
      "110",
      "115",
      "117",
      "125"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3784: What is 18 × 60?",
    "options": [
      "1080",
      "1092",
      "1070",
      "1085"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3785: What is 86 - 27?",
    "options": [
      "62",
      "57",
      "59",
      "67"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3786: What is 83 + 27?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3787: What is 47 × 31?",
    "options": [
      "1457",
      "1469",
      "1447",
      "1462"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3788: What is 89 - 74?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3789: What is 90 + 20?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3790: What is 80 × 52?",
    "options": [
      "4160",
      "4172",
      "4150",
      "4165"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3791: What is 96 - 60?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3792: What is 68 + 47?",
    "options": [
      "110",
      "115",
      "117",
      "125"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3793: What is 61 × 83?",
    "options": [
      "5063",
      "5075",
      "5053",
      "5068"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3794: What is 37 - 31?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3795: What is 23 + 71?",
    "options": [
      "89",
      "94",
      "96",
      "104"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3796: What is 80 × 68?",
    "options": [
      "5440",
      "5452",
      "5430",
      "5445"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3797: What is 71 - 16?",
    "options": [
      "58",
      "53",
      "55",
      "63"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3798: What is 53 + 90?",
    "options": [
      "138",
      "143",
      "145",
      "153"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3799: What is 61 × 60?",
    "options": [
      "3660",
      "3672",
      "3650",
      "3665"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3800: What is 24 - 23?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3801: What is 58 + 15?",
    "options": [
      "68",
      "73",
      "75",
      "83"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3802: What is 80 × 21?",
    "options": [
      "1680",
      "1692",
      "1670",
      "1685"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3803: What is 97 - 95?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3804: What is 41 + 17?",
    "options": [
      "53",
      "58",
      "60",
      "68"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3805: What is 84 × 58?",
    "options": [
      "4872",
      "4884",
      "4862",
      "4877"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3806: What is 84 - 20?",
    "options": [
      "67",
      "62",
      "64",
      "72"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3807: What is 81 + 16?",
    "options": [
      "92",
      "97",
      "99",
      "107"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3808: What is 47 × 93?",
    "options": [
      "4371",
      "4383",
      "4361",
      "4376"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3809: What is 95 - 43?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3810: What is 45 + 80?",
    "options": [
      "120",
      "125",
      "127",
      "135"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3811: What is 53 × 78?",
    "options": [
      "4134",
      "4146",
      "4124",
      "4139"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3812: What is 63 - 10?",
    "options": [
      "56",
      "51",
      "53",
      "61"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3813: What is 14 + 11?",
    "options": [
      "20",
      "25",
      "27",
      "35"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3814: What is 10 × 80?",
    "options": [
      "800",
      "812",
      "790",
      "805"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3815: What is 61 - 61?",
    "options": [
      "3",
      "-2",
      "0",
      "8"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3816: What is 94 + 48?",
    "options": [
      "137",
      "142",
      "144",
      "152"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3817: What is 96 × 20?",
    "options": [
      "1920",
      "1932",
      "1910",
      "1925"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3818: What is 69 - 43?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3819: What is 39 + 90?",
    "options": [
      "124",
      "129",
      "131",
      "139"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3820: What is 96 × 30?",
    "options": [
      "2880",
      "2892",
      "2870",
      "2885"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3821: What is 24 - 12?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3822: What is 63 + 39?",
    "options": [
      "97",
      "102",
      "104",
      "112"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3823: What is 72 × 79?",
    "options": [
      "5688",
      "5700",
      "5678",
      "5693"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3824: What is 59 - 49?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3825: What is 65 + 91?",
    "options": [
      "151",
      "156",
      "158",
      "166"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3826: What is 45 × 77?",
    "options": [
      "3465",
      "3477",
      "3455",
      "3470"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3827: What is 86 - 30?",
    "options": [
      "59",
      "54",
      "56",
      "64"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3828: What is 84 + 68?",
    "options": [
      "147",
      "152",
      "154",
      "162"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3829: What is 73 × 66?",
    "options": [
      "4818",
      "4830",
      "4808",
      "4823"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3830: What is 96 - 69?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3831: What is 68 + 63?",
    "options": [
      "126",
      "131",
      "133",
      "141"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3832: What is 47 × 54?",
    "options": [
      "2538",
      "2550",
      "2528",
      "2543"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3833: What is 91 - 75?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3834: What is 13 + 98?",
    "options": [
      "106",
      "111",
      "113",
      "121"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3835: What is 41 × 41?",
    "options": [
      "1681",
      "1693",
      "1671",
      "1686"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3836: What is 89 - 64?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3837: What is 18 + 67?",
    "options": [
      "80",
      "85",
      "87",
      "95"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3838: What is 48 × 22?",
    "options": [
      "1056",
      "1068",
      "1046",
      "1061"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3839: What is 61 - 44?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3840: What is 52 + 86?",
    "options": [
      "133",
      "138",
      "140",
      "148"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3841: What is 46 × 72?",
    "options": [
      "3312",
      "3324",
      "3302",
      "3317"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3842: What is 58 - 51?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3843: What is 83 + 79?",
    "options": [
      "157",
      "162",
      "164",
      "172"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3844: What is 85 × 23?",
    "options": [
      "1955",
      "1967",
      "1945",
      "1960"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3845: What is 82 - 73?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3846: What is 86 + 91?",
    "options": [
      "172",
      "177",
      "179",
      "187"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3847: What is 38 × 77?",
    "options": [
      "2926",
      "2938",
      "2916",
      "2931"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3848: What is 51 - 45?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3849: What is 86 + 58?",
    "options": [
      "139",
      "144",
      "146",
      "154"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3850: What is 39 × 32?",
    "options": [
      "1248",
      "1260",
      "1238",
      "1253"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3851: What is 53 - 47?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3852: What is 54 + 95?",
    "options": [
      "144",
      "149",
      "151",
      "159"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3853: What is 57 × 59?",
    "options": [
      "3363",
      "3375",
      "3353",
      "3368"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3854: What is 27 - 18?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3855: What is 76 + 58?",
    "options": [
      "129",
      "134",
      "136",
      "144"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3856: What is 98 × 13?",
    "options": [
      "1274",
      "1286",
      "1264",
      "1279"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3857: What is 66 - 20?",
    "options": [
      "49",
      "44",
      "46",
      "54"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3858: What is 16 + 61?",
    "options": [
      "72",
      "77",
      "79",
      "87"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3859: What is 43 × 79?",
    "options": [
      "3397",
      "3409",
      "3387",
      "3402"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3860: What is 77 - 10?",
    "options": [
      "70",
      "65",
      "67",
      "75"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3861: What is 20 + 47?",
    "options": [
      "62",
      "67",
      "69",
      "77"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3862: What is 21 × 85?",
    "options": [
      "1785",
      "1797",
      "1775",
      "1790"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3863: What is 32 - 22?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3864: What is 87 + 83?",
    "options": [
      "165",
      "170",
      "172",
      "180"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3865: What is 68 × 33?",
    "options": [
      "2244",
      "2256",
      "2234",
      "2249"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3866: What is 96 - 36?",
    "options": [
      "63",
      "58",
      "60",
      "68"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3867: What is 19 + 24?",
    "options": [
      "38",
      "43",
      "45",
      "53"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3868: What is 13 × 12?",
    "options": [
      "156",
      "168",
      "146",
      "161"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3869: What is 75 - 67?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3870: What is 24 + 35?",
    "options": [
      "54",
      "59",
      "61",
      "69"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3871: What is 45 × 45?",
    "options": [
      "2025",
      "2037",
      "2015",
      "2030"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3872: What is 72 - 11?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3873: What is 11 + 75?",
    "options": [
      "81",
      "86",
      "88",
      "96"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3874: What is 34 × 42?",
    "options": [
      "1428",
      "1440",
      "1418",
      "1433"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3875: What is 77 - 31?",
    "options": [
      "49",
      "44",
      "46",
      "54"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3876: What is 36 + 13?",
    "options": [
      "44",
      "49",
      "51",
      "59"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3877: What is 22 × 99?",
    "options": [
      "2178",
      "2190",
      "2168",
      "2183"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3878: What is 77 - 32?",
    "options": [
      "48",
      "43",
      "45",
      "53"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3879: What is 72 + 15?",
    "options": [
      "82",
      "87",
      "89",
      "97"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3880: What is 67 × 66?",
    "options": [
      "4422",
      "4434",
      "4412",
      "4427"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3881: What is 71 - 13?",
    "options": [
      "61",
      "56",
      "58",
      "66"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3882: What is 42 + 25?",
    "options": [
      "62",
      "67",
      "69",
      "77"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3883: What is 98 × 53?",
    "options": [
      "5194",
      "5206",
      "5184",
      "5199"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3884: What is 88 - 19?",
    "options": [
      "72",
      "67",
      "69",
      "77"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3885: What is 51 + 19?",
    "options": [
      "65",
      "70",
      "72",
      "80"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3886: What is 84 × 79?",
    "options": [
      "6636",
      "6648",
      "6626",
      "6641"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3887: What is 99 - 39?",
    "options": [
      "63",
      "58",
      "60",
      "68"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3888: What is 58 + 94?",
    "options": [
      "147",
      "152",
      "154",
      "162"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3889: What is 76 × 51?",
    "options": [
      "3876",
      "3888",
      "3866",
      "3881"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3890: What is 62 - 26?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3891: What is 27 + 56?",
    "options": [
      "78",
      "83",
      "85",
      "93"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3892: What is 51 × 69?",
    "options": [
      "3519",
      "3531",
      "3509",
      "3524"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3893: What is 78 - 22?",
    "options": [
      "59",
      "54",
      "56",
      "64"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3894: What is 76 + 27?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3895: What is 45 × 30?",
    "options": [
      "1350",
      "1362",
      "1340",
      "1355"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3896: What is 70 - 54?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3897: What is 45 + 30?",
    "options": [
      "70",
      "75",
      "77",
      "85"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3898: What is 27 × 75?",
    "options": [
      "2025",
      "2037",
      "2015",
      "2030"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3899: What is 68 - 32?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3900: What is 85 + 27?",
    "options": [
      "107",
      "112",
      "114",
      "122"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3901: What is 74 × 82?",
    "options": [
      "6068",
      "6080",
      "6058",
      "6073"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3902: What is 76 - 19?",
    "options": [
      "60",
      "55",
      "57",
      "65"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3903: What is 69 + 97?",
    "options": [
      "161",
      "166",
      "168",
      "176"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3904: What is 74 × 43?",
    "options": [
      "3182",
      "3194",
      "3172",
      "3187"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3905: What is 28 - 15?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3906: What is 19 + 51?",
    "options": [
      "65",
      "70",
      "72",
      "80"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3907: What is 21 × 12?",
    "options": [
      "252",
      "264",
      "242",
      "257"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3908: What is 56 - 11?",
    "options": [
      "48",
      "43",
      "45",
      "53"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3909: What is 70 + 35?",
    "options": [
      "100",
      "105",
      "107",
      "115"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3910: What is 33 × 66?",
    "options": [
      "2178",
      "2190",
      "2168",
      "2183"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3911: What is 76 - 41?",
    "options": [
      "38",
      "33",
      "35",
      "43"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3912: What is 10 + 98?",
    "options": [
      "103",
      "108",
      "110",
      "118"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3913: What is 77 × 26?",
    "options": [
      "2002",
      "2014",
      "1992",
      "2007"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3914: What is 83 - 30?",
    "options": [
      "56",
      "51",
      "53",
      "61"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3915: What is 36 + 83?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3916: What is 54 × 21?",
    "options": [
      "1134",
      "1146",
      "1124",
      "1139"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3917: What is 46 - 45?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3918: What is 53 + 94?",
    "options": [
      "142",
      "147",
      "149",
      "157"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3919: What is 95 × 33?",
    "options": [
      "3135",
      "3147",
      "3125",
      "3140"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3920: What is 71 - 28?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3921: What is 73 + 66?",
    "options": [
      "134",
      "139",
      "141",
      "149"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3922: What is 97 × 89?",
    "options": [
      "8633",
      "8645",
      "8623",
      "8638"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3923: What is 89 - 68?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3924: What is 49 + 65?",
    "options": [
      "109",
      "114",
      "116",
      "124"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3925: What is 23 × 49?",
    "options": [
      "1127",
      "1139",
      "1117",
      "1132"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3926: What is 30 - 16?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3927: What is 91 + 78?",
    "options": [
      "164",
      "169",
      "171",
      "179"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3928: What is 34 × 97?",
    "options": [
      "3298",
      "3310",
      "3288",
      "3303"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3929: What is 84 - 78?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3930: What is 96 + 88?",
    "options": [
      "179",
      "184",
      "186",
      "194"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3931: What is 22 × 54?",
    "options": [
      "1188",
      "1200",
      "1178",
      "1193"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3932: What is 54 - 35?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3933: What is 33 + 65?",
    "options": [
      "93",
      "98",
      "100",
      "108"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3934: What is 76 × 85?",
    "options": [
      "6460",
      "6472",
      "6450",
      "6465"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3935: What is 81 - 34?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3936: What is 33 + 93?",
    "options": [
      "121",
      "126",
      "128",
      "136"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3937: What is 73 × 98?",
    "options": [
      "7154",
      "7166",
      "7144",
      "7159"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3938: What is 97 - 25?",
    "options": [
      "75",
      "70",
      "72",
      "80"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3939: What is 71 + 84?",
    "options": [
      "150",
      "155",
      "157",
      "165"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3940: What is 68 × 33?",
    "options": [
      "2244",
      "2256",
      "2234",
      "2249"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3941: What is 85 - 71?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3942: What is 32 + 24?",
    "options": [
      "51",
      "56",
      "58",
      "66"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3943: What is 95 × 25?",
    "options": [
      "2375",
      "2387",
      "2365",
      "2380"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3944: What is 84 - 51?",
    "options": [
      "36",
      "31",
      "33",
      "41"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3945: What is 19 + 45?",
    "options": [
      "59",
      "64",
      "66",
      "74"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3946: What is 14 × 63?",
    "options": [
      "882",
      "894",
      "872",
      "887"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3947: What is 93 - 68?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3948: What is 58 + 91?",
    "options": [
      "144",
      "149",
      "151",
      "159"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3949: What is 17 × 18?",
    "options": [
      "306",
      "318",
      "296",
      "311"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3950: What is 66 - 25?",
    "options": [
      "44",
      "39",
      "41",
      "49"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3951: What is 92 + 29?",
    "options": [
      "116",
      "121",
      "123",
      "131"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3952: What is 51 × 33?",
    "options": [
      "1683",
      "1695",
      "1673",
      "1688"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3953: What is 25 - 23?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3954: What is 99 + 94?",
    "options": [
      "188",
      "193",
      "195",
      "203"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3955: What is 28 × 58?",
    "options": [
      "1624",
      "1636",
      "1614",
      "1629"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3956: What is 98 - 31?",
    "options": [
      "70",
      "65",
      "67",
      "75"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3957: What is 36 + 96?",
    "options": [
      "127",
      "132",
      "134",
      "142"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3958: What is 11 × 66?",
    "options": [
      "726",
      "738",
      "716",
      "731"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3959: What is 64 - 11?",
    "options": [
      "56",
      "51",
      "53",
      "61"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3960: What is 46 + 24?",
    "options": [
      "65",
      "70",
      "72",
      "80"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3961: What is 12 × 96?",
    "options": [
      "1152",
      "1164",
      "1142",
      "1157"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3962: What is 96 - 57?",
    "options": [
      "42",
      "37",
      "39",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3963: What is 13 + 35?",
    "options": [
      "43",
      "48",
      "50",
      "58"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3964: What is 77 × 26?",
    "options": [
      "2002",
      "2014",
      "1992",
      "2007"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3965: What is 72 - 64?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3966: What is 33 + 72?",
    "options": [
      "100",
      "105",
      "107",
      "115"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3967: What is 56 × 55?",
    "options": [
      "3080",
      "3092",
      "3070",
      "3085"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3968: What is 83 - 25?",
    "options": [
      "61",
      "56",
      "58",
      "66"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3969: What is 71 + 54?",
    "options": [
      "120",
      "125",
      "127",
      "135"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3970: What is 80 × 83?",
    "options": [
      "6640",
      "6652",
      "6630",
      "6645"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3971: What is 76 - 32?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3972: What is 54 + 31?",
    "options": [
      "80",
      "85",
      "87",
      "95"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3973: What is 74 × 90?",
    "options": [
      "6660",
      "6672",
      "6650",
      "6665"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3974: What is 87 - 57?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3975: What is 97 + 93?",
    "options": [
      "185",
      "190",
      "192",
      "200"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3976: What is 17 × 77?",
    "options": [
      "1309",
      "1321",
      "1299",
      "1314"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3977: What is 82 - 35?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3978: What is 86 + 94?",
    "options": [
      "175",
      "180",
      "182",
      "190"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3979: What is 82 × 48?",
    "options": [
      "3936",
      "3948",
      "3926",
      "3941"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3980: What is 93 - 21?",
    "options": [
      "75",
      "70",
      "72",
      "80"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3981: What is 37 + 60?",
    "options": [
      "92",
      "97",
      "99",
      "107"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3982: What is 80 × 32?",
    "options": [
      "2560",
      "2572",
      "2550",
      "2565"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3983: What is 86 - 13?",
    "options": [
      "76",
      "71",
      "73",
      "81"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3984: What is 99 + 63?",
    "options": [
      "157",
      "162",
      "164",
      "172"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3985: What is 10 × 86?",
    "options": [
      "860",
      "872",
      "850",
      "865"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3986: What is 92 - 80?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3987: What is 13 + 69?",
    "options": [
      "77",
      "82",
      "84",
      "92"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3988: What is 68 × 20?",
    "options": [
      "1360",
      "1372",
      "1350",
      "1365"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3989: What is 64 - 36?",
    "options": [
      "31",
      "26",
      "28",
      "36"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3990: What is 93 + 98?",
    "options": [
      "186",
      "191",
      "193",
      "201"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3991: What is 86 × 78?",
    "options": [
      "6708",
      "6720",
      "6698",
      "6713"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3992: What is 30 - 27?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3993: What is 41 + 49?",
    "options": [
      "85",
      "90",
      "92",
      "100"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3994: What is 36 × 84?",
    "options": [
      "3024",
      "3036",
      "3014",
      "3029"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3995: What is 97 - 91?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3996: What is 86 + 95?",
    "options": [
      "176",
      "181",
      "183",
      "191"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #3997: What is 10 × 10?",
    "options": [
      "100",
      "112",
      "90",
      "105"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #3998: What is 96 - 93?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #3999: What is 97 + 73?",
    "options": [
      "165",
      "170",
      "172",
      "180"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4000: What is 10 × 31?",
    "options": [
      "310",
      "322",
      "300",
      "315"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4001: What is 68 - 38?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4002: What is 11 + 38?",
    "options": [
      "44",
      "49",
      "51",
      "59"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4003: What is 27 × 88?",
    "options": [
      "2376",
      "2388",
      "2366",
      "2381"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4004: What is 73 - 41?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4005: What is 78 + 59?",
    "options": [
      "132",
      "137",
      "139",
      "147"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4006: What is 27 × 71?",
    "options": [
      "1917",
      "1929",
      "1907",
      "1922"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4007: What is 72 - 64?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4008: What is 35 + 64?",
    "options": [
      "94",
      "99",
      "101",
      "109"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4009: What is 84 × 81?",
    "options": [
      "6804",
      "6816",
      "6794",
      "6809"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4010: What is 65 - 42?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4011: What is 83 + 41?",
    "options": [
      "119",
      "124",
      "126",
      "134"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4012: What is 33 × 37?",
    "options": [
      "1221",
      "1233",
      "1211",
      "1226"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4013: What is 32 - 27?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4014: What is 88 + 43?",
    "options": [
      "126",
      "131",
      "133",
      "141"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4015: What is 80 × 95?",
    "options": [
      "7600",
      "7612",
      "7590",
      "7605"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4016: What is 94 - 28?",
    "options": [
      "69",
      "64",
      "66",
      "74"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4017: What is 41 + 39?",
    "options": [
      "75",
      "80",
      "82",
      "90"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4018: What is 97 × 92?",
    "options": [
      "8924",
      "8936",
      "8914",
      "8929"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4019: What is 81 - 77?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4020: What is 40 + 67?",
    "options": [
      "102",
      "107",
      "109",
      "117"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4021: What is 23 × 25?",
    "options": [
      "575",
      "587",
      "565",
      "580"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4022: What is 86 - 64?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4023: What is 52 + 84?",
    "options": [
      "131",
      "136",
      "138",
      "146"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4024: What is 43 × 38?",
    "options": [
      "1634",
      "1646",
      "1624",
      "1639"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4025: What is 76 - 49?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4026: What is 95 + 75?",
    "options": [
      "165",
      "170",
      "172",
      "180"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4027: What is 89 × 36?",
    "options": [
      "3204",
      "3216",
      "3194",
      "3209"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4028: What is 98 - 47?",
    "options": [
      "54",
      "49",
      "51",
      "59"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4029: What is 42 + 80?",
    "options": [
      "117",
      "122",
      "124",
      "132"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4030: What is 33 × 55?",
    "options": [
      "1815",
      "1827",
      "1805",
      "1820"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4031: What is 80 - 53?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4032: What is 24 + 88?",
    "options": [
      "107",
      "112",
      "114",
      "122"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4033: What is 89 × 24?",
    "options": [
      "2136",
      "2148",
      "2126",
      "2141"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4034: What is 51 - 35?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4035: What is 19 + 10?",
    "options": [
      "24",
      "29",
      "31",
      "39"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4036: What is 42 × 31?",
    "options": [
      "1302",
      "1314",
      "1292",
      "1307"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4037: What is 71 - 53?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4038: What is 92 + 32?",
    "options": [
      "119",
      "124",
      "126",
      "134"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4039: What is 66 × 41?",
    "options": [
      "2706",
      "2718",
      "2696",
      "2711"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4040: What is 48 - 29?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4041: What is 69 + 60?",
    "options": [
      "124",
      "129",
      "131",
      "139"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4042: What is 94 × 73?",
    "options": [
      "6862",
      "6874",
      "6852",
      "6867"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4043: What is 92 - 51?",
    "options": [
      "44",
      "39",
      "41",
      "49"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4044: What is 32 + 33?",
    "options": [
      "60",
      "65",
      "67",
      "75"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4045: What is 15 × 38?",
    "options": [
      "570",
      "582",
      "560",
      "575"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4046: What is 96 - 85?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4047: What is 37 + 97?",
    "options": [
      "129",
      "134",
      "136",
      "144"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4048: What is 32 × 95?",
    "options": [
      "3040",
      "3052",
      "3030",
      "3045"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4049: What is 50 - 46?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4050: What is 42 + 86?",
    "options": [
      "123",
      "128",
      "130",
      "138"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4051: What is 63 × 84?",
    "options": [
      "5292",
      "5304",
      "5282",
      "5297"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4052: What is 71 - 58?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4053: What is 95 + 40?",
    "options": [
      "130",
      "135",
      "137",
      "145"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4054: What is 17 × 57?",
    "options": [
      "969",
      "981",
      "959",
      "974"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4055: What is 30 - 25?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4056: What is 68 + 64?",
    "options": [
      "127",
      "132",
      "134",
      "142"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4057: What is 15 × 36?",
    "options": [
      "540",
      "552",
      "530",
      "545"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4058: What is 80 - 66?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4059: What is 88 + 53?",
    "options": [
      "136",
      "141",
      "143",
      "151"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4060: What is 11 × 55?",
    "options": [
      "605",
      "617",
      "595",
      "610"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4061: What is 53 - 26?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4062: What is 12 + 24?",
    "options": [
      "31",
      "36",
      "38",
      "46"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4063: What is 97 × 39?",
    "options": [
      "3783",
      "3795",
      "3773",
      "3788"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4064: What is 81 - 21?",
    "options": [
      "63",
      "58",
      "60",
      "68"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4065: What is 63 + 45?",
    "options": [
      "103",
      "108",
      "110",
      "118"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4066: What is 73 × 44?",
    "options": [
      "3212",
      "3224",
      "3202",
      "3217"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4067: What is 94 - 73?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4068: What is 80 + 45?",
    "options": [
      "120",
      "125",
      "127",
      "135"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4069: What is 89 × 95?",
    "options": [
      "8455",
      "8467",
      "8445",
      "8460"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4070: What is 71 - 57?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4071: What is 96 + 29?",
    "options": [
      "120",
      "125",
      "127",
      "135"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4072: What is 29 × 56?",
    "options": [
      "1624",
      "1636",
      "1614",
      "1629"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4073: What is 95 - 25?",
    "options": [
      "73",
      "68",
      "70",
      "78"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4074: What is 18 + 60?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4075: What is 83 × 50?",
    "options": [
      "4150",
      "4162",
      "4140",
      "4155"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4076: What is 60 - 29?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4077: What is 84 + 80?",
    "options": [
      "159",
      "164",
      "166",
      "174"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4078: What is 33 × 82?",
    "options": [
      "2706",
      "2718",
      "2696",
      "2711"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4079: What is 44 - 38?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4080: What is 72 + 78?",
    "options": [
      "145",
      "150",
      "152",
      "160"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4081: What is 23 × 82?",
    "options": [
      "1886",
      "1898",
      "1876",
      "1891"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4082: What is 99 - 10?",
    "options": [
      "92",
      "87",
      "89",
      "97"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4083: What is 16 + 81?",
    "options": [
      "92",
      "97",
      "99",
      "107"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4084: What is 75 × 91?",
    "options": [
      "6825",
      "6837",
      "6815",
      "6830"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4085: What is 69 - 63?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4086: What is 29 + 62?",
    "options": [
      "86",
      "91",
      "93",
      "101"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4087: What is 27 × 47?",
    "options": [
      "1269",
      "1281",
      "1259",
      "1274"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4088: What is 80 - 17?",
    "options": [
      "66",
      "61",
      "63",
      "71"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4089: What is 71 + 13?",
    "options": [
      "79",
      "84",
      "86",
      "94"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4090: What is 28 × 32?",
    "options": [
      "896",
      "908",
      "886",
      "901"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4091: What is 86 - 82?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4092: What is 13 + 51?",
    "options": [
      "59",
      "64",
      "66",
      "74"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4093: What is 66 × 30?",
    "options": [
      "1980",
      "1992",
      "1970",
      "1985"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4094: What is 84 - 45?",
    "options": [
      "42",
      "37",
      "39",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4095: What is 75 + 41?",
    "options": [
      "111",
      "116",
      "118",
      "126"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4096: What is 30 × 40?",
    "options": [
      "1200",
      "1212",
      "1190",
      "1205"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4097: What is 23 - 12?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4098: What is 91 + 61?",
    "options": [
      "147",
      "152",
      "154",
      "162"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4099: What is 75 × 47?",
    "options": [
      "3525",
      "3537",
      "3515",
      "3530"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4100: What is 83 - 80?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4101: What is 12 + 35?",
    "options": [
      "42",
      "47",
      "49",
      "57"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4102: What is 81 × 94?",
    "options": [
      "7614",
      "7626",
      "7604",
      "7619"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4103: What is 69 - 29?",
    "options": [
      "43",
      "38",
      "40",
      "48"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4104: What is 42 + 97?",
    "options": [
      "134",
      "139",
      "141",
      "149"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4105: What is 51 × 15?",
    "options": [
      "765",
      "777",
      "755",
      "770"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4106: What is 34 - 28?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4107: What is 82 + 48?",
    "options": [
      "125",
      "130",
      "132",
      "140"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4108: What is 94 × 92?",
    "options": [
      "8648",
      "8660",
      "8638",
      "8653"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4109: What is 89 - 25?",
    "options": [
      "67",
      "62",
      "64",
      "72"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4110: What is 94 + 18?",
    "options": [
      "107",
      "112",
      "114",
      "122"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4111: What is 95 × 29?",
    "options": [
      "2755",
      "2767",
      "2745",
      "2760"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4112: What is 89 - 32?",
    "options": [
      "60",
      "55",
      "57",
      "65"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4113: What is 73 + 16?",
    "options": [
      "84",
      "89",
      "91",
      "99"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4114: What is 90 × 86?",
    "options": [
      "7740",
      "7752",
      "7730",
      "7745"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4115: What is 90 - 83?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4116: What is 91 + 34?",
    "options": [
      "120",
      "125",
      "127",
      "135"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4117: What is 17 × 67?",
    "options": [
      "1139",
      "1151",
      "1129",
      "1144"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4118: What is 97 - 78?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4119: What is 40 + 47?",
    "options": [
      "82",
      "87",
      "89",
      "97"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4120: What is 57 × 92?",
    "options": [
      "5244",
      "5256",
      "5234",
      "5249"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4121: What is 59 - 24?",
    "options": [
      "38",
      "33",
      "35",
      "43"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4122: What is 26 + 94?",
    "options": [
      "115",
      "120",
      "122",
      "130"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4123: What is 85 × 32?",
    "options": [
      "2720",
      "2732",
      "2710",
      "2725"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4124: What is 91 - 59?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4125: What is 14 + 95?",
    "options": [
      "104",
      "109",
      "111",
      "119"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4126: What is 69 × 69?",
    "options": [
      "4761",
      "4773",
      "4751",
      "4766"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4127: What is 25 - 13?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4128: What is 78 + 53?",
    "options": [
      "126",
      "131",
      "133",
      "141"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4129: What is 53 × 32?",
    "options": [
      "1696",
      "1708",
      "1686",
      "1701"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4130: What is 60 - 35?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4131: What is 42 + 56?",
    "options": [
      "93",
      "98",
      "100",
      "108"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4132: What is 86 × 95?",
    "options": [
      "8170",
      "8182",
      "8160",
      "8175"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4133: What is 97 - 55?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4134: What is 35 + 65?",
    "options": [
      "95",
      "100",
      "102",
      "110"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4135: What is 37 × 64?",
    "options": [
      "2368",
      "2380",
      "2358",
      "2373"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4136: What is 28 - 18?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4137: What is 67 + 90?",
    "options": [
      "152",
      "157",
      "159",
      "167"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4138: What is 53 × 77?",
    "options": [
      "4081",
      "4093",
      "4071",
      "4086"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4139: What is 53 - 12?",
    "options": [
      "44",
      "39",
      "41",
      "49"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4140: What is 61 + 75?",
    "options": [
      "131",
      "136",
      "138",
      "146"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4141: What is 78 × 23?",
    "options": [
      "1794",
      "1806",
      "1784",
      "1799"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4142: What is 69 - 65?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4143: What is 36 + 41?",
    "options": [
      "72",
      "77",
      "79",
      "87"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4144: What is 27 × 42?",
    "options": [
      "1134",
      "1146",
      "1124",
      "1139"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4145: What is 27 - 10?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4146: What is 85 + 33?",
    "options": [
      "113",
      "118",
      "120",
      "128"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4147: What is 15 × 77?",
    "options": [
      "1155",
      "1167",
      "1145",
      "1160"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4148: What is 99 - 48?",
    "options": [
      "54",
      "49",
      "51",
      "59"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4149: What is 79 + 45?",
    "options": [
      "119",
      "124",
      "126",
      "134"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4150: What is 57 × 69?",
    "options": [
      "3933",
      "3945",
      "3923",
      "3938"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4151: What is 71 - 27?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4152: What is 47 + 54?",
    "options": [
      "96",
      "101",
      "103",
      "111"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4153: What is 24 × 25?",
    "options": [
      "600",
      "612",
      "590",
      "605"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4154: What is 46 - 38?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4155: What is 73 + 30?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4156: What is 31 × 69?",
    "options": [
      "2139",
      "2151",
      "2129",
      "2144"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4157: What is 77 - 51?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4158: What is 39 + 47?",
    "options": [
      "81",
      "86",
      "88",
      "96"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4159: What is 52 × 30?",
    "options": [
      "1560",
      "1572",
      "1550",
      "1565"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4160: What is 57 - 48?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4161: What is 75 + 52?",
    "options": [
      "122",
      "127",
      "129",
      "137"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4162: What is 37 × 15?",
    "options": [
      "555",
      "567",
      "545",
      "560"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4163: What is 28 - 20?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4164: What is 77 + 65?",
    "options": [
      "137",
      "142",
      "144",
      "152"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4165: What is 12 × 32?",
    "options": [
      "384",
      "396",
      "374",
      "389"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4166: What is 60 - 54?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4167: What is 51 + 42?",
    "options": [
      "88",
      "93",
      "95",
      "103"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4168: What is 50 × 74?",
    "options": [
      "3700",
      "3712",
      "3690",
      "3705"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4169: What is 99 - 51?",
    "options": [
      "51",
      "46",
      "48",
      "56"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4170: What is 62 + 19?",
    "options": [
      "76",
      "81",
      "83",
      "91"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4171: What is 99 × 49?",
    "options": [
      "4851",
      "4863",
      "4841",
      "4856"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4172: What is 45 - 11?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4173: What is 16 + 92?",
    "options": [
      "103",
      "108",
      "110",
      "118"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4174: What is 57 × 79?",
    "options": [
      "4503",
      "4515",
      "4493",
      "4508"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4175: What is 18 - 11?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4176: What is 93 + 72?",
    "options": [
      "160",
      "165",
      "167",
      "175"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4177: What is 70 × 39?",
    "options": [
      "2730",
      "2742",
      "2720",
      "2735"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4178: What is 42 - 11?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4179: What is 88 + 85?",
    "options": [
      "168",
      "173",
      "175",
      "183"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4180: What is 44 × 75?",
    "options": [
      "3300",
      "3312",
      "3290",
      "3305"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4181: What is 78 - 50?",
    "options": [
      "31",
      "26",
      "28",
      "36"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4182: What is 97 + 93?",
    "options": [
      "185",
      "190",
      "192",
      "200"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4183: What is 75 × 59?",
    "options": [
      "4425",
      "4437",
      "4415",
      "4430"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4184: What is 90 - 67?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4185: What is 44 + 49?",
    "options": [
      "88",
      "93",
      "95",
      "103"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4186: What is 14 × 61?",
    "options": [
      "854",
      "866",
      "844",
      "859"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4187: What is 94 - 51?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4188: What is 46 + 47?",
    "options": [
      "88",
      "93",
      "95",
      "103"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4189: What is 14 × 90?",
    "options": [
      "1260",
      "1272",
      "1250",
      "1265"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4190: What is 39 - 34?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4191: What is 40 + 85?",
    "options": [
      "120",
      "125",
      "127",
      "135"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4192: What is 61 × 96?",
    "options": [
      "5856",
      "5868",
      "5846",
      "5861"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4193: What is 30 - 10?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4194: What is 78 + 74?",
    "options": [
      "147",
      "152",
      "154",
      "162"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4195: What is 44 × 44?",
    "options": [
      "1936",
      "1948",
      "1926",
      "1941"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4196: What is 89 - 41?",
    "options": [
      "51",
      "46",
      "48",
      "56"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4197: What is 59 + 87?",
    "options": [
      "141",
      "146",
      "148",
      "156"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4198: What is 26 × 19?",
    "options": [
      "494",
      "506",
      "484",
      "499"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4199: What is 26 - 13?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4200: What is 77 + 61?",
    "options": [
      "133",
      "138",
      "140",
      "148"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4201: What is 43 × 17?",
    "options": [
      "731",
      "743",
      "721",
      "736"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4202: What is 96 - 81?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4203: What is 81 + 40?",
    "options": [
      "116",
      "121",
      "123",
      "131"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4204: What is 58 × 65?",
    "options": [
      "3770",
      "3782",
      "3760",
      "3775"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4205: What is 61 - 18?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4206: What is 88 + 49?",
    "options": [
      "132",
      "137",
      "139",
      "147"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4207: What is 22 × 64?",
    "options": [
      "1408",
      "1420",
      "1398",
      "1413"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4208: What is 68 - 58?",
    "options": [
      "13",
      "8",
      "10",
      "18"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4209: What is 21 + 13?",
    "options": [
      "29",
      "34",
      "36",
      "44"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4210: What is 16 × 12?",
    "options": [
      "192",
      "204",
      "182",
      "197"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4211: What is 85 - 27?",
    "options": [
      "61",
      "56",
      "58",
      "66"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4212: What is 11 + 92?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4213: What is 81 × 81?",
    "options": [
      "6561",
      "6573",
      "6551",
      "6566"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4214: What is 98 - 64?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4215: What is 60 + 74?",
    "options": [
      "129",
      "134",
      "136",
      "144"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4216: What is 14 × 78?",
    "options": [
      "1092",
      "1104",
      "1082",
      "1097"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4217: What is 74 - 13?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4218: What is 39 + 79?",
    "options": [
      "113",
      "118",
      "120",
      "128"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4219: What is 25 × 27?",
    "options": [
      "675",
      "687",
      "665",
      "680"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4220: What is 92 - 47?",
    "options": [
      "48",
      "43",
      "45",
      "53"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4221: What is 45 + 79?",
    "options": [
      "119",
      "124",
      "126",
      "134"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4222: What is 30 × 81?",
    "options": [
      "2430",
      "2442",
      "2420",
      "2435"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4223: What is 56 - 13?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4224: What is 27 + 64?",
    "options": [
      "86",
      "91",
      "93",
      "101"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4225: What is 86 × 54?",
    "options": [
      "4644",
      "4656",
      "4634",
      "4649"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4226: What is 32 - 18?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4227: What is 57 + 30?",
    "options": [
      "82",
      "87",
      "89",
      "97"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4228: What is 83 × 14?",
    "options": [
      "1162",
      "1174",
      "1152",
      "1167"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4229: What is 75 - 21?",
    "options": [
      "57",
      "52",
      "54",
      "62"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4230: What is 17 + 45?",
    "options": [
      "57",
      "62",
      "64",
      "72"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4231: What is 60 × 82?",
    "options": [
      "4920",
      "4932",
      "4910",
      "4925"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4232: What is 62 - 48?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4233: What is 78 + 25?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4234: What is 94 × 91?",
    "options": [
      "8554",
      "8566",
      "8544",
      "8559"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4235: What is 94 - 55?",
    "options": [
      "42",
      "37",
      "39",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4236: What is 20 + 70?",
    "options": [
      "85",
      "90",
      "92",
      "100"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4237: What is 87 × 33?",
    "options": [
      "2871",
      "2883",
      "2861",
      "2876"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4238: What is 32 - 30?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4239: What is 75 + 41?",
    "options": [
      "111",
      "116",
      "118",
      "126"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4240: What is 41 × 98?",
    "options": [
      "4018",
      "4030",
      "4008",
      "4023"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4241: What is 57 - 40?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4242: What is 15 + 58?",
    "options": [
      "68",
      "73",
      "75",
      "83"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4243: What is 20 × 64?",
    "options": [
      "1280",
      "1292",
      "1270",
      "1285"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4244: What is 71 - 13?",
    "options": [
      "61",
      "56",
      "58",
      "66"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4245: What is 52 + 35?",
    "options": [
      "82",
      "87",
      "89",
      "97"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4246: What is 71 × 63?",
    "options": [
      "4473",
      "4485",
      "4463",
      "4478"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4247: What is 80 - 30?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4248: What is 49 + 74?",
    "options": [
      "118",
      "123",
      "125",
      "133"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4249: What is 30 × 91?",
    "options": [
      "2730",
      "2742",
      "2720",
      "2735"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4250: What is 71 - 51?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4251: What is 80 + 37?",
    "options": [
      "112",
      "117",
      "119",
      "127"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4252: What is 97 × 17?",
    "options": [
      "1649",
      "1661",
      "1639",
      "1654"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4253: What is 62 - 57?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4254: What is 10 + 90?",
    "options": [
      "95",
      "100",
      "102",
      "110"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4255: What is 64 × 12?",
    "options": [
      "768",
      "780",
      "758",
      "773"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4256: What is 33 - 15?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4257: What is 16 + 89?",
    "options": [
      "100",
      "105",
      "107",
      "115"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4258: What is 38 × 79?",
    "options": [
      "3002",
      "3014",
      "2992",
      "3007"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4259: What is 56 - 30?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4260: What is 67 + 19?",
    "options": [
      "81",
      "86",
      "88",
      "96"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4261: What is 46 × 46?",
    "options": [
      "2116",
      "2128",
      "2106",
      "2121"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4262: What is 54 - 40?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4263: What is 47 + 98?",
    "options": [
      "140",
      "145",
      "147",
      "155"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4264: What is 90 × 19?",
    "options": [
      "1710",
      "1722",
      "1700",
      "1715"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4265: What is 43 - 10?",
    "options": [
      "36",
      "31",
      "33",
      "41"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4266: What is 85 + 86?",
    "options": [
      "166",
      "171",
      "173",
      "181"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4267: What is 76 × 18?",
    "options": [
      "1368",
      "1380",
      "1358",
      "1373"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4268: What is 94 - 58?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4269: What is 91 + 57?",
    "options": [
      "143",
      "148",
      "150",
      "158"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4270: What is 69 × 10?",
    "options": [
      "690",
      "702",
      "680",
      "695"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4271: What is 86 - 51?",
    "options": [
      "38",
      "33",
      "35",
      "43"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4272: What is 82 + 70?",
    "options": [
      "147",
      "152",
      "154",
      "162"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4273: What is 36 × 34?",
    "options": [
      "1224",
      "1236",
      "1214",
      "1229"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4274: What is 84 - 37?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4275: What is 10 + 16?",
    "options": [
      "21",
      "26",
      "28",
      "36"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4276: What is 78 × 21?",
    "options": [
      "1638",
      "1650",
      "1628",
      "1643"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4277: What is 65 - 58?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4278: What is 56 + 62?",
    "options": [
      "113",
      "118",
      "120",
      "128"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4279: What is 12 × 57?",
    "options": [
      "684",
      "696",
      "674",
      "689"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4280: What is 74 - 71?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4281: What is 43 + 60?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4282: What is 78 × 57?",
    "options": [
      "4446",
      "4458",
      "4436",
      "4451"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4283: What is 40 - 32?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4284: What is 46 + 84?",
    "options": [
      "125",
      "130",
      "132",
      "140"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4285: What is 78 × 67?",
    "options": [
      "5226",
      "5238",
      "5216",
      "5231"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4286: What is 71 - 59?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4287: What is 74 + 79?",
    "options": [
      "148",
      "153",
      "155",
      "163"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4288: What is 69 × 95?",
    "options": [
      "6555",
      "6567",
      "6545",
      "6560"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4289: What is 51 - 25?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4290: What is 17 + 15?",
    "options": [
      "27",
      "32",
      "34",
      "42"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4291: What is 31 × 97?",
    "options": [
      "3007",
      "3019",
      "2997",
      "3012"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4292: What is 90 - 62?",
    "options": [
      "31",
      "26",
      "28",
      "36"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4293: What is 29 + 25?",
    "options": [
      "49",
      "54",
      "56",
      "64"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4294: What is 15 × 72?",
    "options": [
      "1080",
      "1092",
      "1070",
      "1085"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4295: What is 78 - 57?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4296: What is 86 + 10?",
    "options": [
      "91",
      "96",
      "98",
      "106"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4297: What is 65 × 81?",
    "options": [
      "5265",
      "5277",
      "5255",
      "5270"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4298: What is 78 - 31?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4299: What is 49 + 23?",
    "options": [
      "67",
      "72",
      "74",
      "82"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4300: What is 18 × 65?",
    "options": [
      "1170",
      "1182",
      "1160",
      "1175"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4301: What is 92 - 72?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4302: What is 25 + 35?",
    "options": [
      "55",
      "60",
      "62",
      "70"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4303: What is 77 × 60?",
    "options": [
      "4620",
      "4632",
      "4610",
      "4625"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4304: What is 42 - 10?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4305: What is 22 + 96?",
    "options": [
      "113",
      "118",
      "120",
      "128"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4306: What is 82 × 64?",
    "options": [
      "5248",
      "5260",
      "5238",
      "5253"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4307: What is 54 - 53?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4308: What is 73 + 74?",
    "options": [
      "142",
      "147",
      "149",
      "157"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4309: What is 38 × 11?",
    "options": [
      "418",
      "430",
      "408",
      "423"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4310: What is 93 - 32?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4311: What is 43 + 90?",
    "options": [
      "128",
      "133",
      "135",
      "143"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4312: What is 82 × 79?",
    "options": [
      "6478",
      "6490",
      "6468",
      "6483"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4313: What is 97 - 82?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4314: What is 85 + 72?",
    "options": [
      "152",
      "157",
      "159",
      "167"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4315: What is 25 × 96?",
    "options": [
      "2400",
      "2412",
      "2390",
      "2405"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4316: What is 64 - 52?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4317: What is 89 + 66?",
    "options": [
      "150",
      "155",
      "157",
      "165"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4318: What is 34 × 15?",
    "options": [
      "510",
      "522",
      "500",
      "515"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4319: What is 34 - 12?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4320: What is 97 + 42?",
    "options": [
      "134",
      "139",
      "141",
      "149"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4321: What is 51 × 61?",
    "options": [
      "3111",
      "3123",
      "3101",
      "3116"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4322: What is 90 - 38?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4323: What is 73 + 51?",
    "options": [
      "119",
      "124",
      "126",
      "134"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4324: What is 46 × 30?",
    "options": [
      "1380",
      "1392",
      "1370",
      "1385"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4325: What is 77 - 45?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4326: What is 10 + 62?",
    "options": [
      "67",
      "72",
      "74",
      "82"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4327: What is 37 × 77?",
    "options": [
      "2849",
      "2861",
      "2839",
      "2854"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4328: What is 56 - 24?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4329: What is 56 + 64?",
    "options": [
      "115",
      "120",
      "122",
      "130"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4330: What is 99 × 23?",
    "options": [
      "2277",
      "2289",
      "2267",
      "2282"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4331: What is 57 - 43?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4332: What is 50 + 18?",
    "options": [
      "63",
      "68",
      "70",
      "78"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4333: What is 98 × 79?",
    "options": [
      "7742",
      "7754",
      "7732",
      "7747"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4334: What is 39 - 32?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4335: What is 98 + 93?",
    "options": [
      "186",
      "191",
      "193",
      "201"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4336: What is 33 × 65?",
    "options": [
      "2145",
      "2157",
      "2135",
      "2150"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4337: What is 31 - 14?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4338: What is 90 + 78?",
    "options": [
      "163",
      "168",
      "170",
      "178"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4339: What is 61 × 46?",
    "options": [
      "2806",
      "2818",
      "2796",
      "2811"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4340: What is 78 - 63?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4341: What is 30 + 57?",
    "options": [
      "82",
      "87",
      "89",
      "97"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4342: What is 99 × 81?",
    "options": [
      "8019",
      "8031",
      "8009",
      "8024"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4343: What is 83 - 46?",
    "options": [
      "40",
      "35",
      "37",
      "45"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4344: What is 27 + 94?",
    "options": [
      "116",
      "121",
      "123",
      "131"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4345: What is 77 × 30?",
    "options": [
      "2310",
      "2322",
      "2300",
      "2315"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4346: What is 93 - 54?",
    "options": [
      "42",
      "37",
      "39",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4347: What is 22 + 54?",
    "options": [
      "71",
      "76",
      "78",
      "86"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4348: What is 84 × 25?",
    "options": [
      "2100",
      "2112",
      "2090",
      "2105"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4349: What is 44 - 42?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4350: What is 89 + 64?",
    "options": [
      "148",
      "153",
      "155",
      "163"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4351: What is 11 × 56?",
    "options": [
      "616",
      "628",
      "606",
      "621"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4352: What is 35 - 15?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4353: What is 24 + 19?",
    "options": [
      "38",
      "43",
      "45",
      "53"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4354: What is 81 × 28?",
    "options": [
      "2268",
      "2280",
      "2258",
      "2273"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4355: What is 98 - 91?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4356: What is 42 + 21?",
    "options": [
      "58",
      "63",
      "65",
      "73"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4357: What is 96 × 47?",
    "options": [
      "4512",
      "4524",
      "4502",
      "4517"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4358: What is 57 - 45?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4359: What is 74 + 16?",
    "options": [
      "85",
      "90",
      "92",
      "100"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4360: What is 84 × 86?",
    "options": [
      "7224",
      "7236",
      "7214",
      "7229"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4361: What is 72 - 68?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4362: What is 64 + 27?",
    "options": [
      "86",
      "91",
      "93",
      "101"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4363: What is 77 × 29?",
    "options": [
      "2233",
      "2245",
      "2223",
      "2238"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4364: What is 51 - 29?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4365: What is 94 + 64?",
    "options": [
      "153",
      "158",
      "160",
      "168"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4366: What is 28 × 26?",
    "options": [
      "728",
      "740",
      "718",
      "733"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4367: What is 62 - 37?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4368: What is 15 + 17?",
    "options": [
      "27",
      "32",
      "34",
      "42"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4369: What is 31 × 14?",
    "options": [
      "434",
      "446",
      "424",
      "439"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4370: What is 36 - 15?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4371: What is 14 + 96?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4372: What is 53 × 13?",
    "options": [
      "689",
      "701",
      "679",
      "694"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4373: What is 38 - 24?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4374: What is 63 + 33?",
    "options": [
      "91",
      "96",
      "98",
      "106"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4375: What is 84 × 58?",
    "options": [
      "4872",
      "4884",
      "4862",
      "4877"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4376: What is 31 - 26?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4377: What is 61 + 83?",
    "options": [
      "139",
      "144",
      "146",
      "154"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4378: What is 43 × 23?",
    "options": [
      "989",
      "1001",
      "979",
      "994"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4379: What is 99 - 56?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4380: What is 14 + 33?",
    "options": [
      "42",
      "47",
      "49",
      "57"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4381: What is 71 × 66?",
    "options": [
      "4686",
      "4698",
      "4676",
      "4691"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4382: What is 74 - 57?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4383: What is 99 + 25?",
    "options": [
      "119",
      "124",
      "126",
      "134"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4384: What is 57 × 47?",
    "options": [
      "2679",
      "2691",
      "2669",
      "2684"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4385: What is 81 - 12?",
    "options": [
      "72",
      "67",
      "69",
      "77"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4386: What is 34 + 95?",
    "options": [
      "124",
      "129",
      "131",
      "139"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4387: What is 82 × 67?",
    "options": [
      "5494",
      "5506",
      "5484",
      "5499"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4388: What is 47 - 27?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4389: What is 51 + 43?",
    "options": [
      "89",
      "94",
      "96",
      "104"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4390: What is 95 × 97?",
    "options": [
      "9215",
      "9227",
      "9205",
      "9220"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4391: What is 57 - 53?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4392: What is 61 + 89?",
    "options": [
      "145",
      "150",
      "152",
      "160"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4393: What is 76 × 35?",
    "options": [
      "2660",
      "2672",
      "2650",
      "2665"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4394: What is 79 - 32?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4395: What is 89 + 59?",
    "options": [
      "143",
      "148",
      "150",
      "158"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4396: What is 53 × 47?",
    "options": [
      "2491",
      "2503",
      "2481",
      "2496"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4397: What is 68 - 40?",
    "options": [
      "31",
      "26",
      "28",
      "36"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4398: What is 99 + 84?",
    "options": [
      "178",
      "183",
      "185",
      "193"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4399: What is 87 × 90?",
    "options": [
      "7830",
      "7842",
      "7820",
      "7835"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4400: What is 35 - 35?",
    "options": [
      "3",
      "-2",
      "0",
      "8"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4401: What is 79 + 66?",
    "options": [
      "140",
      "145",
      "147",
      "155"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4402: What is 66 × 22?",
    "options": [
      "1452",
      "1464",
      "1442",
      "1457"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4403: What is 45 - 14?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4404: What is 95 + 15?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4405: What is 51 × 99?",
    "options": [
      "5049",
      "5061",
      "5039",
      "5054"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4406: What is 65 - 58?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4407: What is 84 + 61?",
    "options": [
      "140",
      "145",
      "147",
      "155"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4408: What is 92 × 11?",
    "options": [
      "1012",
      "1024",
      "1002",
      "1017"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4409: What is 89 - 63?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4410: What is 13 + 12?",
    "options": [
      "20",
      "25",
      "27",
      "35"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4411: What is 14 × 92?",
    "options": [
      "1288",
      "1300",
      "1278",
      "1293"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4412: What is 55 - 24?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4413: What is 22 + 81?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4414: What is 39 × 37?",
    "options": [
      "1443",
      "1455",
      "1433",
      "1448"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4415: What is 87 - 49?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4416: What is 46 + 30?",
    "options": [
      "71",
      "76",
      "78",
      "86"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4417: What is 77 × 29?",
    "options": [
      "2233",
      "2245",
      "2223",
      "2238"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4418: What is 66 - 57?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4419: What is 21 + 30?",
    "options": [
      "46",
      "51",
      "53",
      "61"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4420: What is 85 × 57?",
    "options": [
      "4845",
      "4857",
      "4835",
      "4850"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4421: What is 96 - 21?",
    "options": [
      "78",
      "73",
      "75",
      "83"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4422: What is 83 + 57?",
    "options": [
      "135",
      "140",
      "142",
      "150"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4423: What is 39 × 63?",
    "options": [
      "2457",
      "2469",
      "2447",
      "2462"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4424: What is 51 - 43?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4425: What is 92 + 42?",
    "options": [
      "129",
      "134",
      "136",
      "144"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4426: What is 29 × 40?",
    "options": [
      "1160",
      "1172",
      "1150",
      "1165"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4427: What is 72 - 22?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4428: What is 98 + 18?",
    "options": [
      "111",
      "116",
      "118",
      "126"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4429: What is 66 × 22?",
    "options": [
      "1452",
      "1464",
      "1442",
      "1457"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4430: What is 75 - 22?",
    "options": [
      "56",
      "51",
      "53",
      "61"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4431: What is 16 + 84?",
    "options": [
      "95",
      "100",
      "102",
      "110"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4432: What is 80 × 15?",
    "options": [
      "1200",
      "1212",
      "1190",
      "1205"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4433: What is 92 - 69?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4434: What is 74 + 98?",
    "options": [
      "167",
      "172",
      "174",
      "182"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4435: What is 74 × 22?",
    "options": [
      "1628",
      "1640",
      "1618",
      "1633"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4436: What is 89 - 50?",
    "options": [
      "42",
      "37",
      "39",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4437: What is 53 + 22?",
    "options": [
      "70",
      "75",
      "77",
      "85"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4438: What is 63 × 70?",
    "options": [
      "4410",
      "4422",
      "4400",
      "4415"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4439: What is 92 - 39?",
    "options": [
      "56",
      "51",
      "53",
      "61"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4440: What is 56 + 40?",
    "options": [
      "91",
      "96",
      "98",
      "106"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4441: What is 57 × 93?",
    "options": [
      "5301",
      "5313",
      "5291",
      "5306"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4442: What is 95 - 27?",
    "options": [
      "71",
      "66",
      "68",
      "76"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4443: What is 84 + 47?",
    "options": [
      "126",
      "131",
      "133",
      "141"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4444: What is 46 × 66?",
    "options": [
      "3036",
      "3048",
      "3026",
      "3041"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4445: What is 61 - 49?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4446: What is 32 + 35?",
    "options": [
      "62",
      "67",
      "69",
      "77"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4447: What is 23 × 42?",
    "options": [
      "966",
      "978",
      "956",
      "971"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4448: What is 34 - 10?",
    "options": [
      "27",
      "22",
      "24",
      "32"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4449: What is 15 + 23?",
    "options": [
      "33",
      "38",
      "40",
      "48"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4450: What is 51 × 66?",
    "options": [
      "3366",
      "3378",
      "3356",
      "3371"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4451: What is 31 - 22?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4452: What is 41 + 97?",
    "options": [
      "133",
      "138",
      "140",
      "148"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4453: What is 70 × 32?",
    "options": [
      "2240",
      "2252",
      "2230",
      "2245"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4454: What is 41 - 13?",
    "options": [
      "31",
      "26",
      "28",
      "36"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4455: What is 46 + 33?",
    "options": [
      "74",
      "79",
      "81",
      "89"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4456: What is 94 × 33?",
    "options": [
      "3102",
      "3114",
      "3092",
      "3107"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4457: What is 85 - 80?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4458: What is 83 + 67?",
    "options": [
      "145",
      "150",
      "152",
      "160"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4459: What is 56 × 14?",
    "options": [
      "784",
      "796",
      "774",
      "789"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4460: What is 96 - 19?",
    "options": [
      "80",
      "75",
      "77",
      "85"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4461: What is 55 + 35?",
    "options": [
      "85",
      "90",
      "92",
      "100"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4462: What is 97 × 73?",
    "options": [
      "7081",
      "7093",
      "7071",
      "7086"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4463: What is 98 - 53?",
    "options": [
      "48",
      "43",
      "45",
      "53"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4464: What is 22 + 28?",
    "options": [
      "45",
      "50",
      "52",
      "60"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4465: What is 22 × 34?",
    "options": [
      "748",
      "760",
      "738",
      "753"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4466: What is 44 - 17?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4467: What is 16 + 99?",
    "options": [
      "110",
      "115",
      "117",
      "125"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4468: What is 47 × 80?",
    "options": [
      "3760",
      "3772",
      "3750",
      "3765"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4469: What is 92 - 45?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4470: What is 22 + 38?",
    "options": [
      "55",
      "60",
      "62",
      "70"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4471: What is 33 × 85?",
    "options": [
      "2805",
      "2817",
      "2795",
      "2810"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4472: What is 64 - 30?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4473: What is 98 + 69?",
    "options": [
      "162",
      "167",
      "169",
      "177"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4474: What is 27 × 29?",
    "options": [
      "783",
      "795",
      "773",
      "788"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4475: What is 21 - 19?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4476: What is 21 + 89?",
    "options": [
      "105",
      "110",
      "112",
      "120"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4477: What is 67 × 30?",
    "options": [
      "2010",
      "2022",
      "2000",
      "2015"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4478: What is 60 - 11?",
    "options": [
      "52",
      "47",
      "49",
      "57"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4479: What is 69 + 95?",
    "options": [
      "159",
      "164",
      "166",
      "174"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4480: What is 82 × 57?",
    "options": [
      "4674",
      "4686",
      "4664",
      "4679"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4481: What is 95 - 86?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4482: What is 78 + 93?",
    "options": [
      "166",
      "171",
      "173",
      "181"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4483: What is 75 × 59?",
    "options": [
      "4425",
      "4437",
      "4415",
      "4430"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4484: What is 80 - 23?",
    "options": [
      "60",
      "55",
      "57",
      "65"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4485: What is 52 + 60?",
    "options": [
      "107",
      "112",
      "114",
      "122"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4486: What is 85 × 20?",
    "options": [
      "1700",
      "1712",
      "1690",
      "1705"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4487: What is 34 - 25?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4488: What is 13 + 79?",
    "options": [
      "87",
      "92",
      "94",
      "102"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4489: What is 49 × 23?",
    "options": [
      "1127",
      "1139",
      "1117",
      "1132"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4490: What is 68 - 63?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4491: What is 10 + 91?",
    "options": [
      "96",
      "101",
      "103",
      "111"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4492: What is 56 × 11?",
    "options": [
      "616",
      "628",
      "606",
      "621"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4493: What is 49 - 14?",
    "options": [
      "38",
      "33",
      "35",
      "43"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4494: What is 32 + 51?",
    "options": [
      "78",
      "83",
      "85",
      "93"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4495: What is 46 × 81?",
    "options": [
      "3726",
      "3738",
      "3716",
      "3731"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4496: What is 61 - 12?",
    "options": [
      "52",
      "47",
      "49",
      "57"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4497: What is 30 + 69?",
    "options": [
      "94",
      "99",
      "101",
      "109"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4498: What is 77 × 29?",
    "options": [
      "2233",
      "2245",
      "2223",
      "2238"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4499: What is 91 - 47?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4500: What is 35 + 41?",
    "options": [
      "71",
      "76",
      "78",
      "86"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4501: What is 78 × 79?",
    "options": [
      "6162",
      "6174",
      "6152",
      "6167"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4502: What is 42 - 27?",
    "options": [
      "18",
      "13",
      "15",
      "23"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4503: What is 12 + 42?",
    "options": [
      "49",
      "54",
      "56",
      "64"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4504: What is 83 × 89?",
    "options": [
      "7387",
      "7399",
      "7377",
      "7392"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4505: What is 89 - 38?",
    "options": [
      "54",
      "49",
      "51",
      "59"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4506: What is 24 + 80?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4507: What is 91 × 74?",
    "options": [
      "6734",
      "6746",
      "6724",
      "6739"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4508: What is 49 - 31?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4509: What is 47 + 97?",
    "options": [
      "139",
      "144",
      "146",
      "154"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4510: What is 64 × 67?",
    "options": [
      "4288",
      "4300",
      "4278",
      "4293"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4511: What is 94 - 78?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4512: What is 88 + 72?",
    "options": [
      "155",
      "160",
      "162",
      "170"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4513: What is 87 × 91?",
    "options": [
      "7917",
      "7929",
      "7907",
      "7922"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4514: What is 91 - 82?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4515: What is 58 + 32?",
    "options": [
      "85",
      "90",
      "92",
      "100"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4516: What is 69 × 51?",
    "options": [
      "3519",
      "3531",
      "3509",
      "3524"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4517: What is 80 - 71?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4518: What is 95 + 84?",
    "options": [
      "174",
      "179",
      "181",
      "189"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4519: What is 11 × 33?",
    "options": [
      "363",
      "375",
      "353",
      "368"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4520: What is 74 - 19?",
    "options": [
      "58",
      "53",
      "55",
      "63"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4521: What is 42 + 26?",
    "options": [
      "63",
      "68",
      "70",
      "78"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4522: What is 89 × 37?",
    "options": [
      "3293",
      "3305",
      "3283",
      "3298"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4523: What is 93 - 16?",
    "options": [
      "80",
      "75",
      "77",
      "85"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4524: What is 28 + 22?",
    "options": [
      "45",
      "50",
      "52",
      "60"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4525: What is 13 × 75?",
    "options": [
      "975",
      "987",
      "965",
      "980"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4526: What is 76 - 47?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4527: What is 45 + 22?",
    "options": [
      "62",
      "67",
      "69",
      "77"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4528: What is 99 × 25?",
    "options": [
      "2475",
      "2487",
      "2465",
      "2480"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4529: What is 74 - 50?",
    "options": [
      "27",
      "22",
      "24",
      "32"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4530: What is 66 + 66?",
    "options": [
      "127",
      "132",
      "134",
      "142"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4531: What is 30 × 70?",
    "options": [
      "2100",
      "2112",
      "2090",
      "2105"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4532: What is 94 - 13?",
    "options": [
      "84",
      "79",
      "81",
      "89"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4533: What is 68 + 53?",
    "options": [
      "116",
      "121",
      "123",
      "131"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4534: What is 31 × 99?",
    "options": [
      "3069",
      "3081",
      "3059",
      "3074"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4535: What is 26 - 24?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4536: What is 44 + 98?",
    "options": [
      "137",
      "142",
      "144",
      "152"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4537: What is 56 × 80?",
    "options": [
      "4480",
      "4492",
      "4470",
      "4485"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4538: What is 76 - 38?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4539: What is 47 + 12?",
    "options": [
      "54",
      "59",
      "61",
      "69"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4540: What is 26 × 75?",
    "options": [
      "1950",
      "1962",
      "1940",
      "1955"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4541: What is 44 - 16?",
    "options": [
      "31",
      "26",
      "28",
      "36"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4542: What is 38 + 76?",
    "options": [
      "109",
      "114",
      "116",
      "124"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4543: What is 16 × 83?",
    "options": [
      "1328",
      "1340",
      "1318",
      "1333"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4544: What is 84 - 52?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4545: What is 71 + 65?",
    "options": [
      "131",
      "136",
      "138",
      "146"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4546: What is 80 × 17?",
    "options": [
      "1360",
      "1372",
      "1350",
      "1365"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4547: What is 48 - 28?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4548: What is 14 + 56?",
    "options": [
      "65",
      "70",
      "72",
      "80"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4549: What is 23 × 87?",
    "options": [
      "2001",
      "2013",
      "1991",
      "2006"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4550: What is 69 - 44?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4551: What is 57 + 88?",
    "options": [
      "140",
      "145",
      "147",
      "155"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4552: What is 21 × 31?",
    "options": [
      "651",
      "663",
      "641",
      "656"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4553: What is 90 - 43?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4554: What is 37 + 88?",
    "options": [
      "120",
      "125",
      "127",
      "135"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4555: What is 78 × 91?",
    "options": [
      "7098",
      "7110",
      "7088",
      "7103"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4556: What is 80 - 15?",
    "options": [
      "68",
      "63",
      "65",
      "73"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4557: What is 31 + 72?",
    "options": [
      "98",
      "103",
      "105",
      "113"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4558: What is 20 × 28?",
    "options": [
      "560",
      "572",
      "550",
      "565"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4559: What is 26 - 19?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4560: What is 45 + 18?",
    "options": [
      "58",
      "63",
      "65",
      "73"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4561: What is 54 × 88?",
    "options": [
      "4752",
      "4764",
      "4742",
      "4757"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4562: What is 72 - 11?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4563: What is 65 + 91?",
    "options": [
      "151",
      "156",
      "158",
      "166"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4564: What is 58 × 89?",
    "options": [
      "5162",
      "5174",
      "5152",
      "5167"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4565: What is 75 - 59?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4566: What is 87 + 62?",
    "options": [
      "144",
      "149",
      "151",
      "159"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4567: What is 95 × 60?",
    "options": [
      "5700",
      "5712",
      "5690",
      "5705"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4568: What is 56 - 20?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4569: What is 55 + 83?",
    "options": [
      "133",
      "138",
      "140",
      "148"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4570: What is 99 × 59?",
    "options": [
      "5841",
      "5853",
      "5831",
      "5846"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4571: What is 52 - 16?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4572: What is 50 + 62?",
    "options": [
      "107",
      "112",
      "114",
      "122"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4573: What is 44 × 35?",
    "options": [
      "1540",
      "1552",
      "1530",
      "1545"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4574: What is 50 - 48?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4575: What is 51 + 33?",
    "options": [
      "79",
      "84",
      "86",
      "94"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4576: What is 51 × 25?",
    "options": [
      "1275",
      "1287",
      "1265",
      "1280"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4577: What is 44 - 28?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4578: What is 67 + 85?",
    "options": [
      "147",
      "152",
      "154",
      "162"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4579: What is 60 × 45?",
    "options": [
      "2700",
      "2712",
      "2690",
      "2705"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4580: What is 64 - 58?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4581: What is 47 + 98?",
    "options": [
      "140",
      "145",
      "147",
      "155"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4582: What is 27 × 98?",
    "options": [
      "2646",
      "2658",
      "2636",
      "2651"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4583: What is 78 - 28?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4584: What is 72 + 27?",
    "options": [
      "94",
      "99",
      "101",
      "109"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4585: What is 43 × 66?",
    "options": [
      "2838",
      "2850",
      "2828",
      "2843"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4586: What is 74 - 34?",
    "options": [
      "43",
      "38",
      "40",
      "48"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4587: What is 38 + 22?",
    "options": [
      "55",
      "60",
      "62",
      "70"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4588: What is 34 × 16?",
    "options": [
      "544",
      "556",
      "534",
      "549"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4589: What is 86 - 84?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4590: What is 24 + 38?",
    "options": [
      "57",
      "62",
      "64",
      "72"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4591: What is 14 × 81?",
    "options": [
      "1134",
      "1146",
      "1124",
      "1139"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4592: What is 85 - 47?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4593: What is 43 + 14?",
    "options": [
      "52",
      "57",
      "59",
      "67"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4594: What is 49 × 32?",
    "options": [
      "1568",
      "1580",
      "1558",
      "1573"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4595: What is 72 - 34?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4596: What is 87 + 63?",
    "options": [
      "145",
      "150",
      "152",
      "160"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4597: What is 60 × 59?",
    "options": [
      "3540",
      "3552",
      "3530",
      "3545"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4598: What is 54 - 23?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4599: What is 80 + 39?",
    "options": [
      "114",
      "119",
      "121",
      "129"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4600: What is 24 × 94?",
    "options": [
      "2256",
      "2268",
      "2246",
      "2261"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4601: What is 73 - 50?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4602: What is 49 + 19?",
    "options": [
      "63",
      "68",
      "70",
      "78"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4603: What is 10 × 77?",
    "options": [
      "770",
      "782",
      "760",
      "775"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4604: What is 81 - 29?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4605: What is 96 + 85?",
    "options": [
      "176",
      "181",
      "183",
      "191"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4606: What is 64 × 84?",
    "options": [
      "5376",
      "5388",
      "5366",
      "5381"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4607: What is 71 - 54?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4608: What is 53 + 68?",
    "options": [
      "116",
      "121",
      "123",
      "131"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4609: What is 11 × 57?",
    "options": [
      "627",
      "639",
      "617",
      "632"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4610: What is 24 - 16?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4611: What is 77 + 47?",
    "options": [
      "119",
      "124",
      "126",
      "134"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4612: What is 19 × 82?",
    "options": [
      "1558",
      "1570",
      "1548",
      "1563"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4613: What is 46 - 18?",
    "options": [
      "31",
      "26",
      "28",
      "36"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4614: What is 91 + 33?",
    "options": [
      "119",
      "124",
      "126",
      "134"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4615: What is 96 × 16?",
    "options": [
      "1536",
      "1548",
      "1526",
      "1541"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4616: What is 30 - 19?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4617: What is 11 + 68?",
    "options": [
      "74",
      "79",
      "81",
      "89"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4618: What is 39 × 82?",
    "options": [
      "3198",
      "3210",
      "3188",
      "3203"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4619: What is 46 - 43?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4620: What is 30 + 33?",
    "options": [
      "58",
      "63",
      "65",
      "73"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4621: What is 35 × 67?",
    "options": [
      "2345",
      "2357",
      "2335",
      "2350"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4622: What is 64 - 55?",
    "options": [
      "12",
      "7",
      "9",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4623: What is 13 + 25?",
    "options": [
      "33",
      "38",
      "40",
      "48"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4624: What is 50 × 69?",
    "options": [
      "3450",
      "3462",
      "3440",
      "3455"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4625: What is 38 - 17?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4626: What is 10 + 62?",
    "options": [
      "67",
      "72",
      "74",
      "82"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4627: What is 33 × 39?",
    "options": [
      "1287",
      "1299",
      "1277",
      "1292"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4628: What is 89 - 72?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4629: What is 90 + 25?",
    "options": [
      "110",
      "115",
      "117",
      "125"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4630: What is 38 × 28?",
    "options": [
      "1064",
      "1076",
      "1054",
      "1069"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4631: What is 80 - 55?",
    "options": [
      "28",
      "23",
      "25",
      "33"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4632: What is 26 + 47?",
    "options": [
      "68",
      "73",
      "75",
      "83"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4633: What is 46 × 23?",
    "options": [
      "1058",
      "1070",
      "1048",
      "1063"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4634: What is 97 - 96?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4635: What is 81 + 35?",
    "options": [
      "111",
      "116",
      "118",
      "126"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4636: What is 80 × 50?",
    "options": [
      "4000",
      "4012",
      "3990",
      "4005"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4637: What is 91 - 26?",
    "options": [
      "68",
      "63",
      "65",
      "73"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4638: What is 77 + 87?",
    "options": [
      "159",
      "164",
      "166",
      "174"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4639: What is 28 × 62?",
    "options": [
      "1736",
      "1748",
      "1726",
      "1741"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4640: What is 59 - 30?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4641: What is 84 + 87?",
    "options": [
      "166",
      "171",
      "173",
      "181"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4642: What is 44 × 47?",
    "options": [
      "2068",
      "2080",
      "2058",
      "2073"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4643: What is 95 - 76?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4644: What is 39 + 30?",
    "options": [
      "64",
      "69",
      "71",
      "79"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4645: What is 67 × 71?",
    "options": [
      "4757",
      "4769",
      "4747",
      "4762"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4646: What is 69 - 52?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4647: What is 12 + 56?",
    "options": [
      "63",
      "68",
      "70",
      "78"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4648: What is 72 × 98?",
    "options": [
      "7056",
      "7068",
      "7046",
      "7061"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4649: What is 70 - 24?",
    "options": [
      "49",
      "44",
      "46",
      "54"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4650: What is 54 + 82?",
    "options": [
      "131",
      "136",
      "138",
      "146"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4651: What is 53 × 60?",
    "options": [
      "3180",
      "3192",
      "3170",
      "3185"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4652: What is 83 - 80?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4653: What is 71 + 38?",
    "options": [
      "104",
      "109",
      "111",
      "119"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4654: What is 20 × 51?",
    "options": [
      "1020",
      "1032",
      "1010",
      "1025"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4655: What is 40 - 17?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4656: What is 12 + 12?",
    "options": [
      "19",
      "24",
      "26",
      "34"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4657: What is 40 × 64?",
    "options": [
      "2560",
      "2572",
      "2550",
      "2565"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4658: What is 69 - 11?",
    "options": [
      "61",
      "56",
      "58",
      "66"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4659: What is 56 + 79?",
    "options": [
      "130",
      "135",
      "137",
      "145"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4660: What is 78 × 29?",
    "options": [
      "2262",
      "2274",
      "2252",
      "2267"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4661: What is 55 - 47?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4662: What is 96 + 38?",
    "options": [
      "129",
      "134",
      "136",
      "144"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4663: What is 48 × 44?",
    "options": [
      "2112",
      "2124",
      "2102",
      "2117"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4664: What is 51 - 22?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4665: What is 38 + 80?",
    "options": [
      "113",
      "118",
      "120",
      "128"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4666: What is 50 × 73?",
    "options": [
      "3650",
      "3662",
      "3640",
      "3655"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4667: What is 62 - 58?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4668: What is 84 + 66?",
    "options": [
      "145",
      "150",
      "152",
      "160"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4669: What is 62 × 28?",
    "options": [
      "1736",
      "1748",
      "1726",
      "1741"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4670: What is 42 - 10?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4671: What is 17 + 35?",
    "options": [
      "47",
      "52",
      "54",
      "62"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4672: What is 73 × 80?",
    "options": [
      "5840",
      "5852",
      "5830",
      "5845"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4673: What is 73 - 47?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4674: What is 54 + 91?",
    "options": [
      "140",
      "145",
      "147",
      "155"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4675: What is 72 × 64?",
    "options": [
      "4608",
      "4620",
      "4598",
      "4613"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4676: What is 73 - 69?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4677: What is 89 + 80?",
    "options": [
      "164",
      "169",
      "171",
      "179"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4678: What is 40 × 73?",
    "options": [
      "2920",
      "2932",
      "2910",
      "2925"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4679: What is 72 - 20?",
    "options": [
      "55",
      "50",
      "52",
      "60"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4680: What is 23 + 19?",
    "options": [
      "37",
      "42",
      "44",
      "52"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4681: What is 87 × 85?",
    "options": [
      "7395",
      "7407",
      "7385",
      "7400"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4682: What is 73 - 53?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4683: What is 89 + 50?",
    "options": [
      "134",
      "139",
      "141",
      "149"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4684: What is 56 × 45?",
    "options": [
      "2520",
      "2532",
      "2510",
      "2525"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4685: What is 45 - 19?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4686: What is 79 + 39?",
    "options": [
      "113",
      "118",
      "120",
      "128"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4687: What is 33 × 42?",
    "options": [
      "1386",
      "1398",
      "1376",
      "1391"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4688: What is 53 - 22?",
    "options": [
      "34",
      "29",
      "31",
      "39"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4689: What is 53 + 23?",
    "options": [
      "71",
      "76",
      "78",
      "86"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4690: What is 44 × 99?",
    "options": [
      "4356",
      "4368",
      "4346",
      "4361"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4691: What is 44 - 42?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4692: What is 35 + 40?",
    "options": [
      "70",
      "75",
      "77",
      "85"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4693: What is 61 × 74?",
    "options": [
      "4514",
      "4526",
      "4504",
      "4519"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4694: What is 73 - 18?",
    "options": [
      "58",
      "53",
      "55",
      "63"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4695: What is 46 + 52?",
    "options": [
      "93",
      "98",
      "100",
      "108"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4696: What is 10 × 26?",
    "options": [
      "260",
      "272",
      "250",
      "265"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4697: What is 77 - 28?",
    "options": [
      "52",
      "47",
      "49",
      "57"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4698: What is 17 + 26?",
    "options": [
      "38",
      "43",
      "45",
      "53"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4699: What is 16 × 73?",
    "options": [
      "1168",
      "1180",
      "1158",
      "1173"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4700: What is 83 - 29?",
    "options": [
      "57",
      "52",
      "54",
      "62"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4701: What is 25 + 49?",
    "options": [
      "69",
      "74",
      "76",
      "84"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4702: What is 91 × 40?",
    "options": [
      "3640",
      "3652",
      "3630",
      "3645"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4703: What is 46 - 26?",
    "options": [
      "23",
      "18",
      "20",
      "28"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4704: What is 47 + 95?",
    "options": [
      "137",
      "142",
      "144",
      "152"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4705: What is 41 × 86?",
    "options": [
      "3526",
      "3538",
      "3516",
      "3531"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4706: What is 87 - 26?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4707: What is 37 + 58?",
    "options": [
      "90",
      "95",
      "97",
      "105"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4708: What is 81 × 20?",
    "options": [
      "1620",
      "1632",
      "1610",
      "1625"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4709: What is 43 - 20?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4710: What is 58 + 17?",
    "options": [
      "70",
      "75",
      "77",
      "85"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4711: What is 55 × 22?",
    "options": [
      "1210",
      "1222",
      "1200",
      "1215"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4712: What is 51 - 29?",
    "options": [
      "25",
      "20",
      "22",
      "30"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4713: What is 86 + 23?",
    "options": [
      "104",
      "109",
      "111",
      "119"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4714: What is 47 × 66?",
    "options": [
      "3102",
      "3114",
      "3092",
      "3107"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4715: What is 73 - 57?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4716: What is 20 + 81?",
    "options": [
      "96",
      "101",
      "103",
      "111"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4717: What is 17 × 67?",
    "options": [
      "1139",
      "1151",
      "1129",
      "1144"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4718: What is 30 - 17?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4719: What is 10 + 83?",
    "options": [
      "88",
      "93",
      "95",
      "103"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4720: What is 43 × 56?",
    "options": [
      "2408",
      "2420",
      "2398",
      "2413"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4721: What is 36 - 32?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4722: What is 40 + 19?",
    "options": [
      "54",
      "59",
      "61",
      "69"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4723: What is 45 × 59?",
    "options": [
      "2655",
      "2667",
      "2645",
      "2660"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4724: What is 94 - 48?",
    "options": [
      "49",
      "44",
      "46",
      "54"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4725: What is 28 + 25?",
    "options": [
      "48",
      "53",
      "55",
      "63"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4726: What is 44 × 24?",
    "options": [
      "1056",
      "1068",
      "1046",
      "1061"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4727: What is 98 - 45?",
    "options": [
      "56",
      "51",
      "53",
      "61"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4728: What is 83 + 52?",
    "options": [
      "130",
      "135",
      "137",
      "145"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4729: What is 79 × 40?",
    "options": [
      "3160",
      "3172",
      "3150",
      "3165"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4730: What is 22 - 21?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4731: What is 79 + 79?",
    "options": [
      "153",
      "158",
      "160",
      "168"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4732: What is 98 × 69?",
    "options": [
      "6762",
      "6774",
      "6752",
      "6767"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4733: What is 43 - 17?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4734: What is 88 + 68?",
    "options": [
      "151",
      "156",
      "158",
      "166"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4735: What is 89 × 44?",
    "options": [
      "3916",
      "3928",
      "3906",
      "3921"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4736: What is 69 - 21?",
    "options": [
      "51",
      "46",
      "48",
      "56"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4737: What is 15 + 25?",
    "options": [
      "35",
      "40",
      "42",
      "50"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4738: What is 81 × 70?",
    "options": [
      "5670",
      "5682",
      "5660",
      "5675"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4739: What is 81 - 51?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4740: What is 60 + 61?",
    "options": [
      "116",
      "121",
      "123",
      "131"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4741: What is 75 × 89?",
    "options": [
      "6675",
      "6687",
      "6665",
      "6680"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4742: What is 51 - 24?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4743: What is 43 + 64?",
    "options": [
      "102",
      "107",
      "109",
      "117"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4744: What is 27 × 25?",
    "options": [
      "675",
      "687",
      "665",
      "680"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4745: What is 65 - 16?",
    "options": [
      "52",
      "47",
      "49",
      "57"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4746: What is 81 + 70?",
    "options": [
      "146",
      "151",
      "153",
      "161"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4747: What is 96 × 30?",
    "options": [
      "2880",
      "2892",
      "2870",
      "2885"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4748: What is 59 - 25?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4749: What is 41 + 38?",
    "options": [
      "74",
      "79",
      "81",
      "89"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4750: What is 67 × 47?",
    "options": [
      "3149",
      "3161",
      "3139",
      "3154"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4751: What is 85 - 28?",
    "options": [
      "60",
      "55",
      "57",
      "65"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4752: What is 83 + 62?",
    "options": [
      "140",
      "145",
      "147",
      "155"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4753: What is 32 × 72?",
    "options": [
      "2304",
      "2316",
      "2294",
      "2309"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4754: What is 73 - 47?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4755: What is 82 + 20?",
    "options": [
      "97",
      "102",
      "104",
      "112"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4756: What is 93 × 95?",
    "options": [
      "8835",
      "8847",
      "8825",
      "8840"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4757: What is 47 - 29?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4758: What is 80 + 78?",
    "options": [
      "153",
      "158",
      "160",
      "168"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4759: What is 21 × 54?",
    "options": [
      "1134",
      "1146",
      "1124",
      "1139"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4760: What is 59 - 48?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4761: What is 68 + 58?",
    "options": [
      "121",
      "126",
      "128",
      "136"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4762: What is 47 × 15?",
    "options": [
      "705",
      "717",
      "695",
      "710"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4763: What is 98 - 23?",
    "options": [
      "78",
      "73",
      "75",
      "83"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4764: What is 75 + 14?",
    "options": [
      "84",
      "89",
      "91",
      "99"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4765: What is 85 × 72?",
    "options": [
      "6120",
      "6132",
      "6110",
      "6125"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4766: What is 91 - 19?",
    "options": [
      "75",
      "70",
      "72",
      "80"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4767: What is 58 + 62?",
    "options": [
      "115",
      "120",
      "122",
      "130"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4768: What is 70 × 68?",
    "options": [
      "4760",
      "4772",
      "4750",
      "4765"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4769: What is 85 - 28?",
    "options": [
      "60",
      "55",
      "57",
      "65"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4770: What is 39 + 13?",
    "options": [
      "47",
      "52",
      "54",
      "62"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4771: What is 79 × 50?",
    "options": [
      "3950",
      "3962",
      "3940",
      "3955"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4772: What is 67 - 34?",
    "options": [
      "36",
      "31",
      "33",
      "41"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4773: What is 53 + 76?",
    "options": [
      "124",
      "129",
      "131",
      "139"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4774: What is 35 × 10?",
    "options": [
      "350",
      "362",
      "340",
      "355"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4775: What is 71 - 20?",
    "options": [
      "54",
      "49",
      "51",
      "59"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4776: What is 74 + 76?",
    "options": [
      "145",
      "150",
      "152",
      "160"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4777: What is 59 × 99?",
    "options": [
      "5841",
      "5853",
      "5831",
      "5846"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4778: What is 32 - 26?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4779: What is 16 + 91?",
    "options": [
      "102",
      "107",
      "109",
      "117"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4780: What is 87 × 71?",
    "options": [
      "6177",
      "6189",
      "6167",
      "6182"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4781: What is 72 - 69?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4782: What is 49 + 32?",
    "options": [
      "76",
      "81",
      "83",
      "91"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4783: What is 62 × 48?",
    "options": [
      "2976",
      "2988",
      "2966",
      "2981"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4784: What is 69 - 65?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4785: What is 78 + 97?",
    "options": [
      "170",
      "175",
      "177",
      "185"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4786: What is 44 × 30?",
    "options": [
      "1320",
      "1332",
      "1310",
      "1325"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4787: What is 91 - 22?",
    "options": [
      "72",
      "67",
      "69",
      "77"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4788: What is 26 + 53?",
    "options": [
      "74",
      "79",
      "81",
      "89"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4789: What is 88 × 63?",
    "options": [
      "5544",
      "5556",
      "5534",
      "5549"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4790: What is 73 - 52?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4791: What is 55 + 89?",
    "options": [
      "139",
      "144",
      "146",
      "154"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4792: What is 59 × 29?",
    "options": [
      "1711",
      "1723",
      "1701",
      "1716"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4793: What is 88 - 37?",
    "options": [
      "54",
      "49",
      "51",
      "59"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4794: What is 53 + 85?",
    "options": [
      "133",
      "138",
      "140",
      "148"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4795: What is 81 × 47?",
    "options": [
      "3807",
      "3819",
      "3797",
      "3812"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4796: What is 71 - 29?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4797: What is 43 + 49?",
    "options": [
      "87",
      "92",
      "94",
      "102"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4798: What is 27 × 47?",
    "options": [
      "1269",
      "1281",
      "1259",
      "1274"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4799: What is 94 - 77?",
    "options": [
      "20",
      "15",
      "17",
      "25"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4800: What is 44 + 10?",
    "options": [
      "49",
      "54",
      "56",
      "64"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4801: What is 34 × 18?",
    "options": [
      "612",
      "624",
      "602",
      "617"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4802: What is 63 - 19?",
    "options": [
      "47",
      "42",
      "44",
      "52"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4803: What is 85 + 81?",
    "options": [
      "161",
      "166",
      "168",
      "176"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4804: What is 14 × 69?",
    "options": [
      "966",
      "978",
      "956",
      "971"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4805: What is 99 - 73?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4806: What is 32 + 13?",
    "options": [
      "40",
      "45",
      "47",
      "55"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4807: What is 50 × 15?",
    "options": [
      "750",
      "762",
      "740",
      "755"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4808: What is 26 - 14?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4809: What is 79 + 76?",
    "options": [
      "150",
      "155",
      "157",
      "165"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4810: What is 79 × 93?",
    "options": [
      "7347",
      "7359",
      "7337",
      "7352"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4811: What is 92 - 63?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4812: What is 52 + 79?",
    "options": [
      "126",
      "131",
      "133",
      "141"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4813: What is 86 × 78?",
    "options": [
      "6708",
      "6720",
      "6698",
      "6713"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4814: What is 78 - 43?",
    "options": [
      "38",
      "33",
      "35",
      "43"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4815: What is 77 + 81?",
    "options": [
      "153",
      "158",
      "160",
      "168"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4816: What is 64 × 35?",
    "options": [
      "2240",
      "2252",
      "2230",
      "2245"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4817: What is 93 - 30?",
    "options": [
      "66",
      "61",
      "63",
      "71"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4818: What is 87 + 55?",
    "options": [
      "137",
      "142",
      "144",
      "152"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4819: What is 39 × 27?",
    "options": [
      "1053",
      "1065",
      "1043",
      "1058"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4820: What is 58 - 35?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4821: What is 62 + 11?",
    "options": [
      "68",
      "73",
      "75",
      "83"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4822: What is 49 × 29?",
    "options": [
      "1421",
      "1433",
      "1411",
      "1426"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4823: What is 75 - 17?",
    "options": [
      "61",
      "56",
      "58",
      "66"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4824: What is 71 + 55?",
    "options": [
      "121",
      "126",
      "128",
      "136"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4825: What is 16 × 44?",
    "options": [
      "704",
      "716",
      "694",
      "709"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4826: What is 94 - 12?",
    "options": [
      "85",
      "80",
      "82",
      "90"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4827: What is 19 + 59?",
    "options": [
      "73",
      "78",
      "80",
      "88"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4828: What is 24 × 19?",
    "options": [
      "456",
      "468",
      "446",
      "461"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4829: What is 88 - 29?",
    "options": [
      "62",
      "57",
      "59",
      "67"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4830: What is 92 + 99?",
    "options": [
      "186",
      "191",
      "193",
      "201"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4831: What is 59 × 16?",
    "options": [
      "944",
      "956",
      "934",
      "949"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4832: What is 62 - 54?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4833: What is 31 + 53?",
    "options": [
      "79",
      "84",
      "86",
      "94"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4834: What is 42 × 96?",
    "options": [
      "4032",
      "4044",
      "4022",
      "4037"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4835: What is 75 - 26?",
    "options": [
      "52",
      "47",
      "49",
      "57"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4836: What is 45 + 73?",
    "options": [
      "113",
      "118",
      "120",
      "128"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4837: What is 44 × 97?",
    "options": [
      "4268",
      "4280",
      "4258",
      "4273"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4838: What is 98 - 92?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4839: What is 71 + 99?",
    "options": [
      "165",
      "170",
      "172",
      "180"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4840: What is 67 × 91?",
    "options": [
      "6097",
      "6109",
      "6087",
      "6102"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4841: What is 85 - 10?",
    "options": [
      "78",
      "73",
      "75",
      "83"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4842: What is 97 + 82?",
    "options": [
      "174",
      "179",
      "181",
      "189"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4843: What is 26 × 87?",
    "options": [
      "2262",
      "2274",
      "2252",
      "2267"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4844: What is 87 - 52?",
    "options": [
      "38",
      "33",
      "35",
      "43"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4845: What is 81 + 47?",
    "options": [
      "123",
      "128",
      "130",
      "138"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4846: What is 53 × 97?",
    "options": [
      "5141",
      "5153",
      "5131",
      "5146"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4847: What is 83 - 54?",
    "options": [
      "32",
      "27",
      "29",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4848: What is 84 + 90?",
    "options": [
      "169",
      "174",
      "176",
      "184"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4849: What is 98 × 73?",
    "options": [
      "7154",
      "7166",
      "7144",
      "7159"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4850: What is 72 - 22?",
    "options": [
      "53",
      "48",
      "50",
      "58"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4851: What is 52 + 61?",
    "options": [
      "108",
      "113",
      "115",
      "123"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4852: What is 20 × 42?",
    "options": [
      "840",
      "852",
      "830",
      "845"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4853: What is 85 - 62?",
    "options": [
      "26",
      "21",
      "23",
      "31"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4854: What is 94 + 50?",
    "options": [
      "139",
      "144",
      "146",
      "154"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4855: What is 99 × 55?",
    "options": [
      "5445",
      "5457",
      "5435",
      "5450"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4856: What is 76 - 29?",
    "options": [
      "50",
      "45",
      "47",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4857: What is 82 + 35?",
    "options": [
      "112",
      "117",
      "119",
      "127"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4858: What is 46 × 61?",
    "options": [
      "2806",
      "2818",
      "2796",
      "2811"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4859: What is 53 - 21?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4860: What is 12 + 30?",
    "options": [
      "37",
      "42",
      "44",
      "52"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4861: What is 90 × 43?",
    "options": [
      "3870",
      "3882",
      "3860",
      "3875"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4862: What is 49 - 41?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4863: What is 11 + 85?",
    "options": [
      "91",
      "96",
      "98",
      "106"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4864: What is 70 × 63?",
    "options": [
      "4410",
      "4422",
      "4400",
      "4415"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4865: What is 66 - 45?",
    "options": [
      "24",
      "19",
      "21",
      "29"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4866: What is 16 + 28?",
    "options": [
      "39",
      "44",
      "46",
      "54"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4867: What is 89 × 68?",
    "options": [
      "6052",
      "6064",
      "6042",
      "6057"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4868: What is 49 - 48?",
    "options": [
      "4",
      "-1",
      "1",
      "9"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4869: What is 95 + 80?",
    "options": [
      "170",
      "175",
      "177",
      "185"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4870: What is 78 × 94?",
    "options": [
      "7332",
      "7344",
      "7322",
      "7337"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4871: What is 65 - 49?",
    "options": [
      "19",
      "14",
      "16",
      "24"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4872: What is 88 + 65?",
    "options": [
      "148",
      "153",
      "155",
      "163"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4873: What is 79 × 22?",
    "options": [
      "1738",
      "1750",
      "1728",
      "1743"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4874: What is 82 - 55?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4875: What is 74 + 68?",
    "options": [
      "137",
      "142",
      "144",
      "152"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4876: What is 13 × 99?",
    "options": [
      "1287",
      "1299",
      "1277",
      "1292"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4877: What is 62 - 24?",
    "options": [
      "41",
      "36",
      "38",
      "46"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4878: What is 33 + 12?",
    "options": [
      "40",
      "45",
      "47",
      "55"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4879: What is 81 × 64?",
    "options": [
      "5184",
      "5196",
      "5174",
      "5189"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4880: What is 55 - 41?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4881: What is 84 + 94?",
    "options": [
      "173",
      "178",
      "180",
      "188"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4882: What is 49 × 52?",
    "options": [
      "2548",
      "2560",
      "2538",
      "2553"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4883: What is 54 - 19?",
    "options": [
      "38",
      "33",
      "35",
      "43"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4884: What is 77 + 79?",
    "options": [
      "151",
      "156",
      "158",
      "166"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4885: What is 88 × 93?",
    "options": [
      "8184",
      "8196",
      "8174",
      "8189"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4886: What is 89 - 53?",
    "options": [
      "39",
      "34",
      "36",
      "44"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4887: What is 55 + 80?",
    "options": [
      "130",
      "135",
      "137",
      "145"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4888: What is 82 × 38?",
    "options": [
      "3116",
      "3128",
      "3106",
      "3121"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4889: What is 69 - 43?",
    "options": [
      "29",
      "24",
      "26",
      "34"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4890: What is 69 + 74?",
    "options": [
      "138",
      "143",
      "145",
      "153"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4891: What is 76 × 98?",
    "options": [
      "7448",
      "7460",
      "7438",
      "7453"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4892: What is 93 - 75?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4893: What is 53 + 54?",
    "options": [
      "102",
      "107",
      "109",
      "117"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4894: What is 76 × 28?",
    "options": [
      "2128",
      "2140",
      "2118",
      "2133"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4895: What is 54 - 20?",
    "options": [
      "37",
      "32",
      "34",
      "42"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4896: What is 24 + 16?",
    "options": [
      "35",
      "40",
      "42",
      "50"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4897: What is 75 × 11?",
    "options": [
      "825",
      "837",
      "815",
      "830"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4898: What is 63 - 31?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4899: What is 90 + 59?",
    "options": [
      "144",
      "149",
      "151",
      "159"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4900: What is 32 × 13?",
    "options": [
      "416",
      "428",
      "406",
      "421"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4901: What is 79 - 47?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4902: What is 93 + 78?",
    "options": [
      "166",
      "171",
      "173",
      "181"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4903: What is 64 × 65?",
    "options": [
      "4160",
      "4172",
      "4150",
      "4165"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4904: What is 18 - 18?",
    "options": [
      "3",
      "-2",
      "0",
      "8"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4905: What is 15 + 20?",
    "options": [
      "30",
      "35",
      "37",
      "45"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4906: What is 60 × 25?",
    "options": [
      "1500",
      "1512",
      "1490",
      "1505"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4907: What is 80 - 17?",
    "options": [
      "66",
      "61",
      "63",
      "71"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4908: What is 51 + 67?",
    "options": [
      "113",
      "118",
      "120",
      "128"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4909: What is 52 × 54?",
    "options": [
      "2808",
      "2820",
      "2798",
      "2813"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4910: What is 54 - 51?",
    "options": [
      "6",
      "1",
      "3",
      "11"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4911: What is 36 + 99?",
    "options": [
      "130",
      "135",
      "137",
      "145"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4912: What is 99 × 41?",
    "options": [
      "4059",
      "4071",
      "4049",
      "4064"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4913: What is 37 - 32?",
    "options": [
      "8",
      "3",
      "5",
      "13"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4914: What is 47 + 70?",
    "options": [
      "112",
      "117",
      "119",
      "127"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4915: What is 82 × 75?",
    "options": [
      "6150",
      "6162",
      "6140",
      "6155"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4916: What is 75 - 57?",
    "options": [
      "21",
      "16",
      "18",
      "26"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4917: What is 13 + 91?",
    "options": [
      "99",
      "104",
      "106",
      "114"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4918: What is 56 × 21?",
    "options": [
      "1176",
      "1188",
      "1166",
      "1181"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4919: What is 99 - 95?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4920: What is 71 + 92?",
    "options": [
      "158",
      "163",
      "165",
      "173"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4921: What is 84 × 11?",
    "options": [
      "924",
      "936",
      "914",
      "929"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4922: What is 74 - 62?",
    "options": [
      "15",
      "10",
      "12",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4923: What is 66 + 89?",
    "options": [
      "150",
      "155",
      "157",
      "165"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4924: What is 68 × 97?",
    "options": [
      "6596",
      "6608",
      "6586",
      "6601"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4925: What is 57 - 15?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4926: What is 59 + 75?",
    "options": [
      "129",
      "134",
      "136",
      "144"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4927: What is 88 × 57?",
    "options": [
      "5016",
      "5028",
      "5006",
      "5021"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4928: What is 59 - 48?",
    "options": [
      "14",
      "9",
      "11",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4929: What is 71 + 46?",
    "options": [
      "112",
      "117",
      "119",
      "127"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4930: What is 14 × 58?",
    "options": [
      "812",
      "824",
      "802",
      "817"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4931: What is 91 - 46?",
    "options": [
      "48",
      "43",
      "45",
      "53"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4932: What is 72 + 84?",
    "options": [
      "151",
      "156",
      "158",
      "166"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4933: What is 37 × 50?",
    "options": [
      "1850",
      "1862",
      "1840",
      "1855"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4934: What is 95 - 31?",
    "options": [
      "67",
      "62",
      "64",
      "72"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4935: What is 67 + 91?",
    "options": [
      "153",
      "158",
      "160",
      "168"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4936: What is 46 × 71?",
    "options": [
      "3266",
      "3278",
      "3256",
      "3271"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4937: What is 17 - 11?",
    "options": [
      "9",
      "4",
      "6",
      "14"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4938: What is 74 + 82?",
    "options": [
      "151",
      "156",
      "158",
      "166"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4939: What is 94 × 74?",
    "options": [
      "6956",
      "6968",
      "6946",
      "6961"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4940: What is 75 - 45?",
    "options": [
      "33",
      "28",
      "30",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4941: What is 43 + 85?",
    "options": [
      "123",
      "128",
      "130",
      "138"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4942: What is 79 × 54?",
    "options": [
      "4266",
      "4278",
      "4256",
      "4271"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4943: What is 87 - 30?",
    "options": [
      "60",
      "55",
      "57",
      "65"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4944: What is 30 + 43?",
    "options": [
      "68",
      "73",
      "75",
      "83"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4945: What is 99 × 38?",
    "options": [
      "3762",
      "3774",
      "3752",
      "3767"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4946: What is 87 - 85?",
    "options": [
      "5",
      "0",
      "2",
      "10"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4947: What is 76 + 26?",
    "options": [
      "97",
      "102",
      "104",
      "112"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4948: What is 18 × 60?",
    "options": [
      "1080",
      "1092",
      "1070",
      "1085"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4949: What is 88 - 24?",
    "options": [
      "67",
      "62",
      "64",
      "72"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4950: What is 84 + 38?",
    "options": [
      "117",
      "122",
      "124",
      "132"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4951: What is 20 × 65?",
    "options": [
      "1300",
      "1312",
      "1290",
      "1305"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4952: What is 68 - 36?",
    "options": [
      "35",
      "30",
      "32",
      "40"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4953: What is 23 + 28?",
    "options": [
      "46",
      "51",
      "53",
      "61"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4954: What is 46 × 78?",
    "options": [
      "3588",
      "3600",
      "3578",
      "3593"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4955: What is 67 - 48?",
    "options": [
      "22",
      "17",
      "19",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4956: What is 13 + 33?",
    "options": [
      "41",
      "46",
      "48",
      "56"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4957: What is 66 × 55?",
    "options": [
      "3630",
      "3642",
      "3620",
      "3635"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4958: What is 64 - 37?",
    "options": [
      "30",
      "25",
      "27",
      "35"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4959: What is 22 + 36?",
    "options": [
      "53",
      "58",
      "60",
      "68"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4960: What is 73 × 86?",
    "options": [
      "6278",
      "6290",
      "6268",
      "6283"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4961: What is 98 - 34?",
    "options": [
      "67",
      "62",
      "64",
      "72"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4962: What is 76 + 24?",
    "options": [
      "95",
      "100",
      "102",
      "110"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4963: What is 67 × 56?",
    "options": [
      "3752",
      "3764",
      "3742",
      "3757"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4964: What is 55 - 13?",
    "options": [
      "45",
      "40",
      "42",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4965: What is 73 + 90?",
    "options": [
      "158",
      "163",
      "165",
      "173"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4966: What is 26 × 95?",
    "options": [
      "2470",
      "2482",
      "2460",
      "2475"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4967: What is 73 - 15?",
    "options": [
      "61",
      "56",
      "58",
      "66"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4968: What is 94 + 53?",
    "options": [
      "142",
      "147",
      "149",
      "157"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4969: What is 46 × 29?",
    "options": [
      "1334",
      "1346",
      "1324",
      "1339"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4970: What is 98 - 84?",
    "options": [
      "17",
      "12",
      "14",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4971: What is 92 + 28?",
    "options": [
      "115",
      "120",
      "122",
      "130"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4972: What is 25 × 26?",
    "options": [
      "650",
      "662",
      "640",
      "655"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4973: What is 83 - 38?",
    "options": [
      "48",
      "43",
      "45",
      "53"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4974: What is 35 + 63?",
    "options": [
      "93",
      "98",
      "100",
      "108"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4975: What is 41 × 83?",
    "options": [
      "3403",
      "3415",
      "3393",
      "3408"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4976: What is 84 - 22?",
    "options": [
      "65",
      "60",
      "62",
      "70"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4977: What is 67 + 70?",
    "options": [
      "132",
      "137",
      "139",
      "147"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4978: What is 41 × 42?",
    "options": [
      "1722",
      "1734",
      "1712",
      "1727"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4979: What is 62 - 58?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4980: What is 65 + 70?",
    "options": [
      "130",
      "135",
      "137",
      "145"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4981: What is 33 × 36?",
    "options": [
      "1188",
      "1200",
      "1178",
      "1193"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4982: What is 82 - 21?",
    "options": [
      "64",
      "59",
      "61",
      "69"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4983: What is 74 + 27?",
    "options": [
      "96",
      "101",
      "103",
      "111"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4984: What is 82 × 60?",
    "options": [
      "4920",
      "4932",
      "4910",
      "4925"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4985: What is 87 - 79?",
    "options": [
      "11",
      "6",
      "8",
      "16"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4986: What is 77 + 75?",
    "options": [
      "147",
      "152",
      "154",
      "162"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4987: What is 81 × 64?",
    "options": [
      "5184",
      "5196",
      "5174",
      "5189"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4988: What is 81 - 68?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4989: What is 28 + 93?",
    "options": [
      "116",
      "121",
      "123",
      "131"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4990: What is 90 × 40?",
    "options": [
      "3600",
      "3612",
      "3590",
      "3605"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4991: What is 69 - 26?",
    "options": [
      "46",
      "41",
      "43",
      "51"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4992: What is 19 + 45?",
    "options": [
      "59",
      "64",
      "66",
      "74"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4993: What is 72 × 23?",
    "options": [
      "1656",
      "1668",
      "1646",
      "1661"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4994: What is 80 - 73?",
    "options": [
      "10",
      "5",
      "7",
      "15"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4995: What is 61 + 81?",
    "options": [
      "137",
      "142",
      "144",
      "152"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4996: What is 54 × 18?",
    "options": [
      "972",
      "984",
      "962",
      "977"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #4997: What is 97 - 84?",
    "options": [
      "16",
      "11",
      "13",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Math Trivia #4998: What is 46 + 82?",
    "options": [
      "123",
      "128",
      "130",
      "138"
    ],
    "answer": 1
  },
  {
    "q": "Math Trivia #4999: What is 36 × 62?",
    "options": [
      "2232",
      "2244",
      "2222",
      "2237"
    ],
    "answer": 0
  },
  {
    "q": "Math Trivia #5000: What is 26 - 22?",
    "options": [
      "7",
      "2",
      "4",
      "12"
    ],
    "answer": 2
  }
];
