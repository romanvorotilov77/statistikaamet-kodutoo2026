export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Mis on Eesti pealinn?",
    options: ["Tartu", "Tallinn", "Pärnu"],
    correctAnswer: "Tallinn"
  },
  {
    id: 2,
      question: "Mis on Eesti suurim saar?",
      options: ["Hiiumaa", "Muhu", "Saaremaa", "Vormsi"],
      correctAnswer: "Saaremaa"
    },
    {
      id: 3,
      question: "Mis on Eesti rahvuslind?",
      options: ["Rasvatihane", "Suitsupääsuke", "Valge-toonekurg"],
      correctAnswer: "Suitsupääsuke"
    }
];