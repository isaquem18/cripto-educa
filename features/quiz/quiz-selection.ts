import { quizQuestions } from "./quiz-questions";
import type { QuizTopic } from "./stores/quiz-session-store";
import type { QuizQuestion } from "./types";

export const QUESTIONS_PER_QUIZ = 10;

export function shuffle<Item>(items: Item[]) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

export function questionsForTopic(topic: QuizTopic) {
  return topic === "all" ? quizQuestions : quizQuestions.filter((question) => question.track === topic);
}

export function pickQuestionIds(topic: QuizTopic) {
  return shuffle(questionsForTopic(topic))
    .slice(0, QUESTIONS_PER_QUIZ)
    .map((question) => question.id);
}

const questionsById = new Map<string, QuizQuestion>(quizQuestions.map((question) => [question.id, question]));

export function getQuestion(id: string) {
  const question = questionsById.get(id);
  if (!question) {
    throw new Error(`Unknown quiz question: ${id}`);
  }
  return question;
}
