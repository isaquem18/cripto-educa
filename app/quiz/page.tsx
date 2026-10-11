import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { QuizRunner } from "@/features/quiz/components/quiz-runner";
import { quizQuestions } from "@/features/quiz/quiz-questions";

export const metadata: Metadata = {
  title: "Crypto knowledge quiz",
  description:
    "Test what you know about cryptocurrency, blockchains, exchanges, security and risk management with instant feedback and explanations.",
  alternates: { canonical: "/quiz" },
};

export default function QuizPage() {
  return (
    <>
      <PageHeader
        eyebrow="Quiz"
        title="Test your crypto knowledge"
        description={`${quizQuestions.length} questions covering fundamentals, exchanges, security and risk. Every answer comes with an explanation and a link to the lesson that covers it.`}
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <QuizRunner />
      </div>
    </>
  );
}
