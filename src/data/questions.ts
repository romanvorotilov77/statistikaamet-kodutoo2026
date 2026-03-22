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
    },
    // For testing button 'Üles' in Footer component
    // {
    //   id: 4,
    //   question: "Mis on Eesti rahvuskivi?",
    //   options: ["Graniit", "Lubjakivi", "Paekivi"],
    //   correctAnswer: "Paekivi"
    // },
    // {
    //   id: 5,
    //   question: "Mis on Eesti rahvuskivi?",
    //   options: ["Graniit", "Lubjakivi", "Paekivi"],
    //   correctAnswer: "Paekivi"
    // },
    // {
    //   id: 6,
    //   question: "Mis on Eesti rahvuskivi?",
    //   options: ["Graniit", "Lubjakivi", "Paekivi"],
    //   correctAnswer: "Paekivi"
    // },
    // {
    //   id: 7,
    //   question: "Mis on Eesti rahvuskivi?",
    //   options: ["Graniit", "Lubjakivi", "Paekivi"],
    //   correctAnswer: "Paekivi"
    // },
    // {
    //   id: 8,
    //   question: "Mis on Eesti rahvuskivi?",
    //   options: ["Graniit", "Lubjakivi", "Paekivi"],
    //   correctAnswer: "Paekivi"
    // },
    // {
    //   id: 9,
    //   question: "Mis on Eesti rahvuskivi?",
    //   options: ["Graniit", "Lubjakivi", "Paekivi"],
    //   correctAnswer: "Paekivi"
    // },
    // {
    //   id: 10,
    //   question: "Mis on Eesti rahvuskivi?",
    //   options: ["Graniit", "Lubjakivi", "Paekivi"],
    //   correctAnswer: "Paekivi"
    // },
    // {
    //   id: 11,
    //   question: "Mis on Eesti rahvuskivi?",
    //   options: ["Graniit", "Lubjakivi", "Paekivi"],
    //   correctAnswer: "Paekivi"
    // },
    // {
    //   id: 12,
    //   question: "Mis on Eesti rahvuskivi?",
    //   options: ["Graniit", "Lubjakivi", "Paekivi"],
    //   correctAnswer: "Paekivi"
    // },
    // {
    //   id: 13,
    //   question: "Mis on Eesti rahvuskivi?",
    //   options: ["Graniit", "Lubjakivi", "Paekivi"],
    //   correctAnswer: "Paekivi"
    // },
    // {
    //   id: 14,
    //   question: "Mis on Eesti rahvuskivi?",
    //   options: ["Graniit", "Lubjakivi", "Paekivi"],
    //   correctAnswer: "Paekivi"
    // },
    // {
    //   id: 15,
    //   question: "Mis on Eesti rahvuskivi?",
    //   options: ["Graniit", "Lubjakivi", "Paekivi"],
    //   correctAnswer: "Paekivi"
    // },
    // {
    //   id: 16,
    //   question: "Mis on Eesti rahvuskivi?",
    //   options: ["Graniit", "Lubjakivi", "Paekivi"],
    //   correctAnswer: "Paekivi"
    // },
    // {
    //   id: 17,
    //   question: "Mis on Eesti rahvuskivi?",
    //   options: ["Graniit", "Lubjakivi", "Paekivi"],
    //   correctAnswer: "Paekivi"
    // }
];