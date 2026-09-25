const QUIZ_QUESTIONS = [
  {
    "q": "What is the capital city of India?",
    "options": [
      "Mumbai",
      "New Delhi",
      "Kolkata",
      "Chennai"
    ],
    "answer": 1
  },
  {
    "q": "Which city is known as the Financial Capital of India?",
    "options": [
      "Bengaluru",
      "New Delhi",
      "Mumbai",
      "Hyderabad"
    ],
    "answer": 2
  },
  {
    "q": "Which river flows through New Delhi?",
    "options": [
      "Ganga",
      "Yamuna",
      "Godavari",
      "Narmada"
    ],
    "answer": 1
  },
  {
    "q": "Which city is known as the Pink City of India?",
    "options": [
      "Jaipur",
      "Udaipur",
      "Jodhpur",
      "Bikaner"
    ],
    "answer": 0
  },
  {
    "q": "Which state is known as 'God's Own Country'?",
    "options": [
      "Tamil Nadu",
      "Kerala",
      "Goa",
      "Karnataka"
    ],
    "answer": 1
  },
  {
    "q": "Which is the smallest state in India by area?",
    "options": [
      "Sikkim",
      "Goa",
      "Tripura",
      "Mizoram"
    ],
    "answer": 1
  },
  {
    "q": "Which Indian city is known as the Silicon Valley of India?",
    "options": [
      "Hyderabad",
      "Pune",
      "Bengaluru",
      "Chennai"
    ],
    "answer": 2
  },
  {
    "q": "What is the national sport of India?",
    "options": [
      "Cricket",
      "Field Hockey",
      "Kabaddi",
      "Football"
    ],
    "answer": 1
  },
  {
    "q": "Who is known as the 'Wizard of Hockey'?",
    "options": [
      "Dhyan Chand",
      "Balbir Singh Sr.",
      "Dhanraj Pillay",
      "PR Sreejesh"
    ],
    "answer": 0
  },
  {
    "q": "In which year did India win its first ICC ODI World Cup under Kapil Dev?",
    "options": [
      "1975",
      "1983",
      "1992",
      "2011"
    ],
    "answer": 1
  },
  {
    "q": "Who was the captain when India won the 2011 ICC ODI World Cup?",
    "options": [
      "Rahul Dravid",
      "Sourav Ganguly",
      "MS Dhoni",
      "Virat Kohli"
    ],
    "answer": 2
  },
  {
    "q": "Who is known as the 'God of Cricket'?",
    "options": [
      "Virat Kohli",
      "MS Dhoni",
      "Ricky Ponting",
      "Sachin Tendulkar"
    ],
    "answer": 3
  },
  {
    "q": "Which stadium in India is the largest cricket stadium in the world?",
    "options": [
      "Eden Gardens",
      "Wankhede Stadium",
      "Narendra Modi Stadium",
      "M. Chinnaswamy Stadium"
    ],
    "answer": 2
  },
  {
    "q": "In which year was the inaugural season of the IPL held?",
    "options": [
      "2007",
      "2008",
      "2009",
      "2010"
    ],
    "answer": 1
  },
  {
    "q": "Which team won the first season of the IPL in 2008?",
    "options": [
      "Chennai Super Kings",
      "Mumbai Indians",
      "Rajasthan Royals",
      "Kolkata Knight Riders"
    ],
    "answer": 2
  },
  {
    "q": "Who was the winning captain of Rajasthan Royals in IPL 2008?",
    "options": [
      "Shane Warne",
      "Rahul Dravid",
      "Graeme Smith",
      "Shane Watson"
    ],
    "answer": 0
  },
  {
    "q": "Which batsman scored the highest individual score in IPL history (175*)?",
    "options": [
      "AB de Villiers",
      "Chris Gayle",
      "Virat Kohli",
      "KL Rahul"
    ],
    "answer": 1
  },
  {
    "q": "Which player holds the record for the most runs in IPL history?",
    "options": [
      "Shikhar Dhawan",
      "Rohit Sharma",
      "Virat Kohli",
      "David Warner"
    ],
    "answer": 2
  },
  {
    "q": "Who captained Chennai Super Kings (CSK) to all 5 of their IPL titles?",
    "options": [
      "Suresh Raina",
      "MS Dhoni",
      "Ravindra Jadeja",
      "Ruturaj Gaikwad"
    ],
    "answer": 1
  },
  {
    "q": "Who captained Mumbai Indians (MI) to all 5 of their IPL trophy victories?",
    "options": [
      "Sachin Tendulkar",
      "Harbhajan Singh",
      "Rohit Sharma",
      "Hardik Pandya"
    ],
    "answer": 2
  },
  {
    "q": "What award is given to the top run-scorer of an IPL season?",
    "options": [
      "Purple Cap",
      "Orange Cap",
      "Golden Bat",
      "Green Cap"
    ],
    "answer": 1
  },
  {
    "q": "What award is given to the top wicket-taker of an IPL season?",
    "options": [
      "Purple Cap",
      "Orange Cap",
      "Golden Ball",
      "Blue Cap"
    ],
    "answer": 0
  },
  {
    "q": "Which team won the 2024 IPL season?",
    "options": [
      "Sunrisers Hyderabad",
      "Kolkata Knight Riders",
      "Rajasthan Royals",
      "Chennai Super Kings"
    ],
    "answer": 1
  },
  {
    "q": "What is the maximum number of overseas players allowed in an IPL playing XI?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #25: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #26: If an IPL team scores 176 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.80",
      "9.80",
      "8.30",
      "10.80"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #27: In a standard T20 match between Punjab Kings and Chennai Super Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #28: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #29: If an IPL team scores 179 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.95",
      "9.95",
      "8.45",
      "10.95"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #30: In a standard T20 match between Chennai Super Kings and Royal Challengers Bengaluru, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #31: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #32: If an IPL team scores 182 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.10",
      "10.10",
      "8.60",
      "11.10"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #33: In a standard T20 match between Royal Challengers Bengaluru and Delhi Capitals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #34: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #35: If an IPL team scores 185 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.25",
      "10.25",
      "8.75",
      "11.25"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #36: In a standard T20 match between Delhi Capitals and Lucknow Super Giants, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #37: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #38: If an IPL team scores 188 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.40",
      "10.40",
      "8.90",
      "11.40"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #39: In a standard T20 match between Lucknow Super Giants and Kolkata Knight Riders, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #40: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #41: If an IPL team scores 191 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.55",
      "10.55",
      "9.05",
      "11.55"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #42: In a standard T20 match between Kolkata Knight Riders and Sunrisers Hyderabad, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #43: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #44: If an IPL team scores 194 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.70",
      "10.70",
      "9.20",
      "11.70"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #45: In a standard T20 match between Sunrisers Hyderabad and Gujarat Titans, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #46: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #47: If an IPL team scores 197 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.85",
      "10.85",
      "9.35",
      "11.85"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #48: In a standard T20 match between Gujarat Titans and Mumbai Indians, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #49: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #50: If an IPL team scores 200 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.00",
      "11.00",
      "9.50",
      "12.00"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #51: In a standard T20 match between Mumbai Indians and Rajasthan Royals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #52: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #53: If an IPL team scores 203 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.15",
      "11.15",
      "9.65",
      "12.15"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #54: In a standard T20 match between Rajasthan Royals and Punjab Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #55: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #56: If an IPL team scores 206 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.30",
      "11.30",
      "9.80",
      "12.30"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #57: In a standard T20 match between Punjab Kings and Chennai Super Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #58: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #59: If an IPL team scores 209 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.45",
      "11.45",
      "9.95",
      "12.45"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #60: In a standard T20 match between Chennai Super Kings and Royal Challengers Bengaluru, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #61: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #62: If an IPL team scores 212 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.60",
      "11.60",
      "10.10",
      "12.60"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #63: In a standard T20 match between Royal Challengers Bengaluru and Delhi Capitals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #64: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #65: If an IPL team scores 215 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.75",
      "11.75",
      "10.25",
      "12.75"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #66: In a standard T20 match between Delhi Capitals and Lucknow Super Giants, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #67: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #68: If an IPL team scores 218 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.90",
      "11.90",
      "10.40",
      "12.90"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #69: In a standard T20 match between Lucknow Super Giants and Kolkata Knight Riders, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #70: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #71: If an IPL team scores 221 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.05",
      "12.05",
      "10.55",
      "13.05"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #72: In a standard T20 match between Kolkata Knight Riders and Sunrisers Hyderabad, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #73: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #74: If an IPL team scores 224 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.20",
      "12.20",
      "10.70",
      "13.20"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #75: In a standard T20 match between Sunrisers Hyderabad and Gujarat Titans, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #76: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #77: If an IPL team scores 227 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.35",
      "12.35",
      "10.85",
      "13.35"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #78: In a standard T20 match between Gujarat Titans and Mumbai Indians, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #79: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #80: If an IPL team scores 150 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.50",
      "8.50",
      "7.00",
      "9.50"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #81: In a standard T20 match between Mumbai Indians and Rajasthan Royals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #82: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #83: If an IPL team scores 153 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.65",
      "8.65",
      "7.15",
      "9.65"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #84: In a standard T20 match between Rajasthan Royals and Punjab Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #85: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #86: If an IPL team scores 156 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.80",
      "8.80",
      "7.30",
      "9.80"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #87: In a standard T20 match between Punjab Kings and Chennai Super Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #88: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #89: If an IPL team scores 159 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.95",
      "8.95",
      "7.45",
      "9.95"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #90: In a standard T20 match between Chennai Super Kings and Royal Challengers Bengaluru, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #91: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #92: If an IPL team scores 162 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.10",
      "9.10",
      "7.60",
      "10.10"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #93: In a standard T20 match between Royal Challengers Bengaluru and Delhi Capitals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #94: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #95: If an IPL team scores 165 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.25",
      "9.25",
      "7.75",
      "10.25"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #96: In a standard T20 match between Delhi Capitals and Lucknow Super Giants, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #97: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #98: If an IPL team scores 168 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.40",
      "9.40",
      "7.90",
      "10.40"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #99: In a standard T20 match between Lucknow Super Giants and Kolkata Knight Riders, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #100: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #101: If an IPL team scores 171 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.55",
      "9.55",
      "8.05",
      "10.55"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #102: In a standard T20 match between Kolkata Knight Riders and Sunrisers Hyderabad, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #103: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #104: If an IPL team scores 174 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.70",
      "9.70",
      "8.20",
      "10.70"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #105: In a standard T20 match between Sunrisers Hyderabad and Gujarat Titans, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #106: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #107: If an IPL team scores 177 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.85",
      "9.85",
      "8.35",
      "10.85"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #108: In a standard T20 match between Gujarat Titans and Mumbai Indians, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #109: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #110: If an IPL team scores 180 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.00",
      "10.00",
      "8.50",
      "11.00"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #111: In a standard T20 match between Mumbai Indians and Rajasthan Royals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #112: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #113: If an IPL team scores 183 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.15",
      "10.15",
      "8.65",
      "11.15"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #114: In a standard T20 match between Rajasthan Royals and Punjab Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #115: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #116: If an IPL team scores 186 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.30",
      "10.30",
      "8.80",
      "11.30"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #117: In a standard T20 match between Punjab Kings and Chennai Super Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #118: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #119: If an IPL team scores 189 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.45",
      "10.45",
      "8.95",
      "11.45"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #120: In a standard T20 match between Chennai Super Kings and Royal Challengers Bengaluru, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #121: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #122: If an IPL team scores 192 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.60",
      "10.60",
      "9.10",
      "11.60"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #123: In a standard T20 match between Royal Challengers Bengaluru and Delhi Capitals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #124: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #125: If an IPL team scores 195 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.75",
      "10.75",
      "9.25",
      "11.75"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #126: In a standard T20 match between Delhi Capitals and Lucknow Super Giants, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #127: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #128: If an IPL team scores 198 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.90",
      "10.90",
      "9.40",
      "11.90"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #129: In a standard T20 match between Lucknow Super Giants and Kolkata Knight Riders, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #130: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #131: If an IPL team scores 201 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.05",
      "11.05",
      "9.55",
      "12.05"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #132: In a standard T20 match between Kolkata Knight Riders and Sunrisers Hyderabad, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #133: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #134: If an IPL team scores 204 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.20",
      "11.20",
      "9.70",
      "12.20"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #135: In a standard T20 match between Sunrisers Hyderabad and Gujarat Titans, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #136: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #137: If an IPL team scores 207 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.35",
      "11.35",
      "9.85",
      "12.35"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #138: In a standard T20 match between Gujarat Titans and Mumbai Indians, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #139: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #140: If an IPL team scores 210 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.50",
      "11.50",
      "10.00",
      "12.50"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #141: In a standard T20 match between Mumbai Indians and Rajasthan Royals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #142: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #143: If an IPL team scores 213 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.65",
      "11.65",
      "10.15",
      "12.65"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #144: In a standard T20 match between Rajasthan Royals and Punjab Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #145: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #146: If an IPL team scores 216 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.80",
      "11.80",
      "10.30",
      "12.80"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #147: In a standard T20 match between Punjab Kings and Chennai Super Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #148: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #149: If an IPL team scores 219 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.95",
      "11.95",
      "10.45",
      "12.95"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #150: In a standard T20 match between Chennai Super Kings and Royal Challengers Bengaluru, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #151: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #152: If an IPL team scores 222 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.10",
      "12.10",
      "10.60",
      "13.10"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #153: In a standard T20 match between Royal Challengers Bengaluru and Delhi Capitals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #154: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #155: If an IPL team scores 225 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.25",
      "12.25",
      "10.75",
      "13.25"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #156: In a standard T20 match between Delhi Capitals and Lucknow Super Giants, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #157: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #158: If an IPL team scores 228 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.40",
      "12.40",
      "10.90",
      "13.40"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #159: In a standard T20 match between Lucknow Super Giants and Kolkata Knight Riders, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #160: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #161: If an IPL team scores 151 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.55",
      "8.55",
      "7.05",
      "9.55"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #162: In a standard T20 match between Kolkata Knight Riders and Sunrisers Hyderabad, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #163: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #164: If an IPL team scores 154 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.70",
      "8.70",
      "7.20",
      "9.70"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #165: In a standard T20 match between Sunrisers Hyderabad and Gujarat Titans, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #166: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #167: If an IPL team scores 157 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.85",
      "8.85",
      "7.35",
      "9.85"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #168: In a standard T20 match between Gujarat Titans and Mumbai Indians, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #169: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #170: If an IPL team scores 160 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.00",
      "9.00",
      "7.50",
      "10.00"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #171: In a standard T20 match between Mumbai Indians and Rajasthan Royals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #172: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #173: If an IPL team scores 163 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.15",
      "9.15",
      "7.65",
      "10.15"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #174: In a standard T20 match between Rajasthan Royals and Punjab Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #175: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #176: If an IPL team scores 166 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.30",
      "9.30",
      "7.80",
      "10.30"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #177: In a standard T20 match between Punjab Kings and Chennai Super Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #178: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #179: If an IPL team scores 169 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.45",
      "9.45",
      "7.95",
      "10.45"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #180: In a standard T20 match between Chennai Super Kings and Royal Challengers Bengaluru, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #181: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #182: If an IPL team scores 172 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.60",
      "9.60",
      "8.10",
      "10.60"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #183: In a standard T20 match between Royal Challengers Bengaluru and Delhi Capitals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #184: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #185: If an IPL team scores 175 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.75",
      "9.75",
      "8.25",
      "10.75"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #186: In a standard T20 match between Delhi Capitals and Lucknow Super Giants, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #187: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #188: If an IPL team scores 178 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.90",
      "9.90",
      "8.40",
      "10.90"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #189: In a standard T20 match between Lucknow Super Giants and Kolkata Knight Riders, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #190: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #191: If an IPL team scores 181 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.05",
      "10.05",
      "8.55",
      "11.05"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #192: In a standard T20 match between Kolkata Knight Riders and Sunrisers Hyderabad, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #193: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #194: If an IPL team scores 184 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.20",
      "10.20",
      "8.70",
      "11.20"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #195: In a standard T20 match between Sunrisers Hyderabad and Gujarat Titans, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #196: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #197: If an IPL team scores 187 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.35",
      "10.35",
      "8.85",
      "11.35"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #198: In a standard T20 match between Gujarat Titans and Mumbai Indians, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #199: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #200: If an IPL team scores 190 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.50",
      "10.50",
      "9.00",
      "11.50"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #201: In a standard T20 match between Mumbai Indians and Rajasthan Royals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #202: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #203: If an IPL team scores 193 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.65",
      "10.65",
      "9.15",
      "11.65"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #204: In a standard T20 match between Rajasthan Royals and Punjab Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #205: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #206: If an IPL team scores 196 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.80",
      "10.80",
      "9.30",
      "11.80"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #207: In a standard T20 match between Punjab Kings and Chennai Super Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #208: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #209: If an IPL team scores 199 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.95",
      "10.95",
      "9.45",
      "11.95"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #210: In a standard T20 match between Chennai Super Kings and Royal Challengers Bengaluru, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #211: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #212: If an IPL team scores 202 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.10",
      "11.10",
      "9.60",
      "12.10"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #213: In a standard T20 match between Royal Challengers Bengaluru and Delhi Capitals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #214: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #215: If an IPL team scores 205 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.25",
      "11.25",
      "9.75",
      "12.25"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #216: In a standard T20 match between Delhi Capitals and Lucknow Super Giants, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #217: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #218: If an IPL team scores 208 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.40",
      "11.40",
      "9.90",
      "12.40"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #219: In a standard T20 match between Lucknow Super Giants and Kolkata Knight Riders, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #220: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #221: If an IPL team scores 211 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.55",
      "11.55",
      "10.05",
      "12.55"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #222: In a standard T20 match between Kolkata Knight Riders and Sunrisers Hyderabad, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #223: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #224: If an IPL team scores 214 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.70",
      "11.70",
      "10.20",
      "12.70"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #225: In a standard T20 match between Sunrisers Hyderabad and Gujarat Titans, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #226: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #227: If an IPL team scores 217 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.85",
      "11.85",
      "10.35",
      "12.85"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #228: In a standard T20 match between Gujarat Titans and Mumbai Indians, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #229: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #230: If an IPL team scores 220 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.00",
      "12.00",
      "10.50",
      "13.00"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #231: In a standard T20 match between Mumbai Indians and Rajasthan Royals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #232: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #233: If an IPL team scores 223 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.15",
      "12.15",
      "10.65",
      "13.15"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #234: In a standard T20 match between Rajasthan Royals and Punjab Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #235: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #236: If an IPL team scores 226 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.30",
      "12.30",
      "10.80",
      "13.30"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #237: In a standard T20 match between Punjab Kings and Chennai Super Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #238: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #239: If an IPL team scores 229 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.45",
      "12.45",
      "10.95",
      "13.45"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #240: In a standard T20 match between Chennai Super Kings and Royal Challengers Bengaluru, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #241: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #242: If an IPL team scores 152 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.60",
      "8.60",
      "7.10",
      "9.60"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #243: In a standard T20 match between Royal Challengers Bengaluru and Delhi Capitals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #244: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #245: If an IPL team scores 155 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.75",
      "8.75",
      "7.25",
      "9.75"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #246: In a standard T20 match between Delhi Capitals and Lucknow Super Giants, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #247: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #248: If an IPL team scores 158 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.90",
      "8.90",
      "7.40",
      "9.90"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #249: In a standard T20 match between Lucknow Super Giants and Kolkata Knight Riders, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #250: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #251: If an IPL team scores 161 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.05",
      "9.05",
      "7.55",
      "10.05"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #252: In a standard T20 match between Kolkata Knight Riders and Sunrisers Hyderabad, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #253: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #254: If an IPL team scores 164 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.20",
      "9.20",
      "7.70",
      "10.20"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #255: In a standard T20 match between Sunrisers Hyderabad and Gujarat Titans, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #256: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #257: If an IPL team scores 167 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.35",
      "9.35",
      "7.85",
      "10.35"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #258: In a standard T20 match between Gujarat Titans and Mumbai Indians, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #259: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #260: If an IPL team scores 170 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.50",
      "9.50",
      "8.00",
      "10.50"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #261: In a standard T20 match between Mumbai Indians and Rajasthan Royals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #262: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #263: If an IPL team scores 173 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.65",
      "9.65",
      "8.15",
      "10.65"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #264: In a standard T20 match between Rajasthan Royals and Punjab Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #265: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #266: If an IPL team scores 176 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.80",
      "9.80",
      "8.30",
      "10.80"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #267: In a standard T20 match between Punjab Kings and Chennai Super Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #268: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #269: If an IPL team scores 179 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.95",
      "9.95",
      "8.45",
      "10.95"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #270: In a standard T20 match between Chennai Super Kings and Royal Challengers Bengaluru, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #271: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #272: If an IPL team scores 182 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.10",
      "10.10",
      "8.60",
      "11.10"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #273: In a standard T20 match between Royal Challengers Bengaluru and Delhi Capitals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #274: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #275: If an IPL team scores 185 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.25",
      "10.25",
      "8.75",
      "11.25"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #276: In a standard T20 match between Delhi Capitals and Lucknow Super Giants, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #277: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #278: If an IPL team scores 188 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.40",
      "10.40",
      "8.90",
      "11.40"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #279: In a standard T20 match between Lucknow Super Giants and Kolkata Knight Riders, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #280: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #281: If an IPL team scores 191 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.55",
      "10.55",
      "9.05",
      "11.55"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #282: In a standard T20 match between Kolkata Knight Riders and Sunrisers Hyderabad, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #283: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #284: If an IPL team scores 194 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.70",
      "10.70",
      "9.20",
      "11.70"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #285: In a standard T20 match between Sunrisers Hyderabad and Gujarat Titans, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #286: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #287: If an IPL team scores 197 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.85",
      "10.85",
      "9.35",
      "11.85"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #288: In a standard T20 match between Gujarat Titans and Mumbai Indians, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #289: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #290: If an IPL team scores 200 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.00",
      "11.00",
      "9.50",
      "12.00"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #291: In a standard T20 match between Mumbai Indians and Rajasthan Royals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #292: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #293: If an IPL team scores 203 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.15",
      "11.15",
      "9.65",
      "12.15"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #294: In a standard T20 match between Rajasthan Royals and Punjab Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #295: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #296: If an IPL team scores 206 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.30",
      "11.30",
      "9.80",
      "12.30"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #297: In a standard T20 match between Punjab Kings and Chennai Super Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #298: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #299: If an IPL team scores 209 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.45",
      "11.45",
      "9.95",
      "12.45"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #300: In a standard T20 match between Chennai Super Kings and Royal Challengers Bengaluru, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #301: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #302: If an IPL team scores 212 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.60",
      "11.60",
      "10.10",
      "12.60"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #303: In a standard T20 match between Royal Challengers Bengaluru and Delhi Capitals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #304: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #305: If an IPL team scores 215 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.75",
      "11.75",
      "10.25",
      "12.75"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #306: In a standard T20 match between Delhi Capitals and Lucknow Super Giants, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #307: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #308: If an IPL team scores 218 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.90",
      "11.90",
      "10.40",
      "12.90"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #309: In a standard T20 match between Lucknow Super Giants and Kolkata Knight Riders, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #310: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #311: If an IPL team scores 221 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.05",
      "12.05",
      "10.55",
      "13.05"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #312: In a standard T20 match between Kolkata Knight Riders and Sunrisers Hyderabad, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #313: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #314: If an IPL team scores 224 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.20",
      "12.20",
      "10.70",
      "13.20"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #315: In a standard T20 match between Sunrisers Hyderabad and Gujarat Titans, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #316: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #317: If an IPL team scores 227 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.35",
      "12.35",
      "10.85",
      "13.35"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #318: In a standard T20 match between Gujarat Titans and Mumbai Indians, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #319: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #320: If an IPL team scores 150 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.50",
      "8.50",
      "7.00",
      "9.50"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #321: In a standard T20 match between Mumbai Indians and Rajasthan Royals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #322: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #323: If an IPL team scores 153 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.65",
      "8.65",
      "7.15",
      "9.65"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #324: In a standard T20 match between Rajasthan Royals and Punjab Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #325: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #326: If an IPL team scores 156 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.80",
      "8.80",
      "7.30",
      "9.80"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #327: In a standard T20 match between Punjab Kings and Chennai Super Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #328: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #329: If an IPL team scores 159 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.95",
      "8.95",
      "7.45",
      "9.95"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #330: In a standard T20 match between Chennai Super Kings and Royal Challengers Bengaluru, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #331: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #332: If an IPL team scores 162 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.10",
      "9.10",
      "7.60",
      "10.10"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #333: In a standard T20 match between Royal Challengers Bengaluru and Delhi Capitals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #334: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #335: If an IPL team scores 165 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.25",
      "9.25",
      "7.75",
      "10.25"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #336: In a standard T20 match between Delhi Capitals and Lucknow Super Giants, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #337: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #338: If an IPL team scores 168 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.40",
      "9.40",
      "7.90",
      "10.40"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #339: In a standard T20 match between Lucknow Super Giants and Kolkata Knight Riders, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #340: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #341: If an IPL team scores 171 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.55",
      "9.55",
      "8.05",
      "10.55"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #342: In a standard T20 match between Kolkata Knight Riders and Sunrisers Hyderabad, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #343: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #344: If an IPL team scores 174 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.70",
      "9.70",
      "8.20",
      "10.70"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #345: In a standard T20 match between Sunrisers Hyderabad and Gujarat Titans, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #346: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #347: If an IPL team scores 177 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.85",
      "9.85",
      "8.35",
      "10.85"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #348: In a standard T20 match between Gujarat Titans and Mumbai Indians, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #349: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #350: If an IPL team scores 180 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.00",
      "10.00",
      "8.50",
      "11.00"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #351: In a standard T20 match between Mumbai Indians and Rajasthan Royals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #352: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #353: If an IPL team scores 183 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.15",
      "10.15",
      "8.65",
      "11.15"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #354: In a standard T20 match between Rajasthan Royals and Punjab Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #355: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #356: If an IPL team scores 186 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.30",
      "10.30",
      "8.80",
      "11.30"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #357: In a standard T20 match between Punjab Kings and Chennai Super Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #358: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #359: If an IPL team scores 189 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.45",
      "10.45",
      "8.95",
      "11.45"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #360: In a standard T20 match between Chennai Super Kings and Royal Challengers Bengaluru, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #361: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #362: If an IPL team scores 192 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.60",
      "10.60",
      "9.10",
      "11.60"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #363: In a standard T20 match between Royal Challengers Bengaluru and Delhi Capitals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #364: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #365: If an IPL team scores 195 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.75",
      "10.75",
      "9.25",
      "11.75"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #366: In a standard T20 match between Delhi Capitals and Lucknow Super Giants, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #367: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #368: If an IPL team scores 198 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.90",
      "10.90",
      "9.40",
      "11.90"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #369: In a standard T20 match between Lucknow Super Giants and Kolkata Knight Riders, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #370: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #371: If an IPL team scores 201 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.05",
      "11.05",
      "9.55",
      "12.05"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #372: In a standard T20 match between Kolkata Knight Riders and Sunrisers Hyderabad, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #373: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #374: If an IPL team scores 204 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.20",
      "11.20",
      "9.70",
      "12.20"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #375: In a standard T20 match between Sunrisers Hyderabad and Gujarat Titans, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #376: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #377: If an IPL team scores 207 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.35",
      "11.35",
      "9.85",
      "12.35"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #378: In a standard T20 match between Gujarat Titans and Mumbai Indians, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #379: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #380: If an IPL team scores 210 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.50",
      "11.50",
      "10.00",
      "12.50"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #381: In a standard T20 match between Mumbai Indians and Rajasthan Royals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #382: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #383: If an IPL team scores 213 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.65",
      "11.65",
      "10.15",
      "12.65"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #384: In a standard T20 match between Rajasthan Royals and Punjab Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #385: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #386: If an IPL team scores 216 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.80",
      "11.80",
      "10.30",
      "12.80"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #387: In a standard T20 match between Punjab Kings and Chennai Super Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #388: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #389: If an IPL team scores 219 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.95",
      "11.95",
      "10.45",
      "12.95"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #390: In a standard T20 match between Chennai Super Kings and Royal Challengers Bengaluru, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #391: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #392: If an IPL team scores 222 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.10",
      "12.10",
      "10.60",
      "13.10"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #393: In a standard T20 match between Royal Challengers Bengaluru and Delhi Capitals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #394: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #395: If an IPL team scores 225 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.25",
      "12.25",
      "10.75",
      "13.25"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #396: In a standard T20 match between Delhi Capitals and Lucknow Super Giants, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #397: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #398: If an IPL team scores 228 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.40",
      "12.40",
      "10.90",
      "13.40"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #399: In a standard T20 match between Lucknow Super Giants and Kolkata Knight Riders, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #400: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #401: If an IPL team scores 151 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.55",
      "8.55",
      "7.05",
      "9.55"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #402: In a standard T20 match between Kolkata Knight Riders and Sunrisers Hyderabad, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #403: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #404: If an IPL team scores 154 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.70",
      "8.70",
      "7.20",
      "9.70"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #405: In a standard T20 match between Sunrisers Hyderabad and Gujarat Titans, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #406: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #407: If an IPL team scores 157 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.85",
      "8.85",
      "7.35",
      "9.85"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #408: In a standard T20 match between Gujarat Titans and Mumbai Indians, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #409: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #410: If an IPL team scores 160 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.00",
      "9.00",
      "7.50",
      "10.00"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #411: In a standard T20 match between Mumbai Indians and Rajasthan Royals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #412: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #413: If an IPL team scores 163 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.15",
      "9.15",
      "7.65",
      "10.15"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #414: In a standard T20 match between Rajasthan Royals and Punjab Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #415: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #416: If an IPL team scores 166 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.30",
      "9.30",
      "7.80",
      "10.30"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #417: In a standard T20 match between Punjab Kings and Chennai Super Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #418: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #419: If an IPL team scores 169 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.45",
      "9.45",
      "7.95",
      "10.45"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #420: In a standard T20 match between Chennai Super Kings and Royal Challengers Bengaluru, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #421: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #422: If an IPL team scores 172 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.60",
      "9.60",
      "8.10",
      "10.60"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #423: In a standard T20 match between Royal Challengers Bengaluru and Delhi Capitals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #424: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #425: If an IPL team scores 175 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.75",
      "9.75",
      "8.25",
      "10.75"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #426: In a standard T20 match between Delhi Capitals and Lucknow Super Giants, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #427: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #428: If an IPL team scores 178 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.90",
      "9.90",
      "8.40",
      "10.90"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #429: In a standard T20 match between Lucknow Super Giants and Kolkata Knight Riders, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #430: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #431: If an IPL team scores 181 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.05",
      "10.05",
      "8.55",
      "11.05"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #432: In a standard T20 match between Kolkata Knight Riders and Sunrisers Hyderabad, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #433: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #434: If an IPL team scores 184 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.20",
      "10.20",
      "8.70",
      "11.20"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #435: In a standard T20 match between Sunrisers Hyderabad and Gujarat Titans, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #436: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #437: If an IPL team scores 187 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.35",
      "10.35",
      "8.85",
      "11.35"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #438: In a standard T20 match between Gujarat Titans and Mumbai Indians, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #439: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #440: If an IPL team scores 190 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.50",
      "10.50",
      "9.00",
      "11.50"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #441: In a standard T20 match between Mumbai Indians and Rajasthan Royals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #442: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #443: If an IPL team scores 193 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.65",
      "10.65",
      "9.15",
      "11.65"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #444: In a standard T20 match between Rajasthan Royals and Punjab Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #445: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #446: If an IPL team scores 196 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.80",
      "10.80",
      "9.30",
      "11.80"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #447: In a standard T20 match between Punjab Kings and Chennai Super Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #448: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #449: If an IPL team scores 199 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "9.95",
      "10.95",
      "9.45",
      "11.95"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #450: In a standard T20 match between Chennai Super Kings and Royal Challengers Bengaluru, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #451: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #452: If an IPL team scores 202 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.10",
      "11.10",
      "9.60",
      "12.10"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #453: In a standard T20 match between Royal Challengers Bengaluru and Delhi Capitals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #454: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #455: If an IPL team scores 205 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.25",
      "11.25",
      "9.75",
      "12.25"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #456: In a standard T20 match between Delhi Capitals and Lucknow Super Giants, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #457: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #458: If an IPL team scores 208 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.40",
      "11.40",
      "9.90",
      "12.40"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #459: In a standard T20 match between Lucknow Super Giants and Kolkata Knight Riders, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #460: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #461: If an IPL team scores 211 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.55",
      "11.55",
      "10.05",
      "12.55"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #462: In a standard T20 match between Kolkata Knight Riders and Sunrisers Hyderabad, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #463: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #464: If an IPL team scores 214 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.70",
      "11.70",
      "10.20",
      "12.70"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #465: In a standard T20 match between Sunrisers Hyderabad and Gujarat Titans, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #466: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #467: If an IPL team scores 217 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "10.85",
      "11.85",
      "10.35",
      "12.85"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #468: In a standard T20 match between Gujarat Titans and Mumbai Indians, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #469: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #470: If an IPL team scores 220 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.00",
      "12.00",
      "10.50",
      "13.00"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #471: In a standard T20 match between Mumbai Indians and Rajasthan Royals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #472: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #473: If an IPL team scores 223 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.15",
      "12.15",
      "10.65",
      "13.15"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #474: In a standard T20 match between Rajasthan Royals and Punjab Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #475: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #476: If an IPL team scores 226 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.30",
      "12.30",
      "10.80",
      "13.30"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #477: In a standard T20 match between Punjab Kings and Chennai Super Kings, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #478: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #479: If an IPL team scores 229 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "11.45",
      "12.45",
      "10.95",
      "13.45"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #480: In a standard T20 match between Chennai Super Kings and Royal Challengers Bengaluru, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #481: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #482: If an IPL team scores 152 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.60",
      "8.60",
      "7.10",
      "9.60"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #483: In a standard T20 match between Royal Challengers Bengaluru and Delhi Capitals, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #484: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #485: If an IPL team scores 155 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.75",
      "8.75",
      "7.25",
      "9.75"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #486: In a standard T20 match between Delhi Capitals and Lucknow Super Giants, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #487: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #488: If an IPL team scores 158 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "7.90",
      "8.90",
      "7.40",
      "9.90"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #489: In a standard T20 match between Lucknow Super Giants and Kolkata Knight Riders, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #490: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #491: If an IPL team scores 161 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.05",
      "9.05",
      "7.55",
      "10.05"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #492: In a standard T20 match between Kolkata Knight Riders and Sunrisers Hyderabad, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #493: Lucknow is the capital or primary metro city of which region?",
    "options": [
      "Uttar Pradesh",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #494: If an IPL team scores 164 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.20",
      "9.20",
      "7.70",
      "10.20"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #495: In a standard T20 match between Sunrisers Hyderabad and Gujarat Titans, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "50 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #496: Chennai is the capital or primary metro city of which region?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #497: If an IPL team scores 167 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.35",
      "9.35",
      "7.85",
      "10.35"
    ],
    "answer": 0
  },
  {
    "q": "IPL & Cricket Quiz #498: In a standard T20 match between Gujarat Titans and Mumbai Indians, how many maximum overs can each team bowl?",
    "options": [
      "10 Overs",
      "20 Overs",
      "30 Overs",
      "40 Overs"
    ],
    "answer": 1
  },
  {
    "q": "India Trivia #499: Bengaluru is the capital or primary metro city of which region?",
    "options": [
      "Karnataka",
      "Punjab",
      "Goa",
      "Assam"
    ],
    "answer": 0
  },
  {
    "q": "Cricket Stats #500: If an IPL team scores 170 runs in 20 overs, what is their average required run rate per over?",
    "options": [
      "8.50",
      "9.50",
      "8.00",
      "10.50"
    ],
    "answer": 0
  }
];
