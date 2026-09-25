const fs = require('fs');

// Base question templates across multiple categories
const baseQuestions = [
  // General Science
  { q: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 1 },
  { q: "What is the chemical symbol for Oxygen?", options: ["Ox", "O", "O2", "Og"], answer: 1 },
  { q: "What organ pumps blood through the human body?", options: ["Lungs", "Brain", "Heart", "Liver"], answer: 2 },
  { q: "What is the boiling point of water at sea level?", options: ["90°C", "100°C", "120°C", "80°C"], answer: 1 },
  { q: "Which gas do plants absorb during photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 2 },
  { q: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: 2 },
  { q: "How many continents are there on Earth?", options: ["5", "6", "7", "8"], answer: 2 },
  { q: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: 3 },
  { q: "Which element has the symbol 'Fe'?", options: ["Iron", "Gold", "Silver", "Fluorine"], answer: 0 },
  { q: "What is the speed of light in vacuum (approx)?", options: ["300,000 km/s", "150,000 km/s", "1,000,000 km/s", "500,000 km/s"], answer: 0 },

  // World Geography & Nations
  { q: "What is the capital city of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: 2 },
  { q: "Which country is home to the Great Barrier Reef?", options: ["Brazil", "Australia", "India", "USA"], answer: 1 },
  { q: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "Malta", "San Marino"], answer: 1 },
  { q: "Which river is the longest in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: 1 },
  { q: "Mount Everest is located in which mountain range?", options: ["Andes", "Alps", "Himalayas", "Rockies"], answer: 2 },
  { q: "What is the capital of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Bangkok"], answer: 2 },
  { q: "Which desert is the largest hot desert in the world?", options: ["Gobi", "Kalahari", "Sahara", "Atacama"], answer: 2 },
  { q: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], answer: 1 },

  // Literature & History
  { q: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"], answer: 0 },
  { q: "Who was the first President of the United States?", options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"], answer: 1 },
  { q: "In which year did World War II end?", options: ["1943", "1945", "1950", "1918"], answer: 1 },
  { q: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: 2 }
];

const allQuestions = [...baseQuestions];

// Generate structured arithmetic/logic questions to scale smoothly up to 1000 unique questions
for (let i = allQuestions.length + 1; i <= 5000; i++) {
  const num1 = Math.floor(Math.random() * 90) + 10;
  const num2 = Math.floor(Math.random() * 90) + 10;
  const operation = i % 3;

  if (operation === 0) {
    const sum = num1 + num2;
    allQuestions.push({
      q: `Math Trivia #${i}: What is ${num1} + ${num2}?`,
      options: [`${sum - 5}`, `${sum}`, `${sum + 2}`, `${sum + 10}`],
      answer: 1
    });
  } else if (operation === 1) {
    const product = num1 * num2;
    allQuestions.push({
      q: `Math Trivia #${i}: What is ${num1} × ${num2}?`,
      options: [`${product}`, `${product + 12}`, `${product - 10}`, `${product + 5}`],
      answer: 0
    });
  } else {
    const diff = Math.max(num1, num2) - Math.min(num1, num2);
    allQuestions.push({
      q: `Math Trivia #${i}: What is ${Math.max(num1, num2)} - ${Math.min(num1, num2)}?`,
      options: [`${diff + 3}`, `${diff - 2}`, `${diff}`, `${diff + 8}`],
      answer: 2
    });
  }
}

// Format output as JS array definition
const fileData = `const QUIZ_QUESTIONS = ${JSON.stringify(allQuestions, null, 2)};\n`;

// Write directly into Django static JS path
fs.writeFileSync('app/static/app/js/quiz_questions.js', fileData);
console.log(' Successfully generated 1,000 questions in app/static/app/js/quiz_questions.js!');