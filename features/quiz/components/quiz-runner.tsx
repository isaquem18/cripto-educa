"use client";

import Link from "next/link";
import { useShallow } from "zustand/react/shallow";
import { buttonClasses } from "@/components/ui/button-link";
import { getLesson } from "@/features/learn/lessons";
import { tracks } from "@/features/learn/tracks";
import { getQuestion, pickQuestionIds, questionsForTopic, QUESTIONS_PER_QUIZ } from "../quiz-selection";
import { useQuizHistoryStore } from "../stores/quiz-history-store";
import { useQuizSessionStore, type QuizTopic } from "../stores/quiz-session-store";

const OPTION_LETTERS = ["A", "B", "C", "D", "E", "F"];
const EXCELLENT_SCORE_RATIO = 0.8;
const GOOD_SCORE_RATIO = 0.6;

const topicLabels: Record<QuizTopic, string> = {
  all: "All topics",
  fundamentals: "Fundamentals",
  exchanges: "Exchanges",
  security: "Security",
  investing: "Risk & strategy",
};

function QuizSetup() {
  const topic = useQuizSessionStore((state) => state.topic);
  const setTopic = useQuizSessionStore((state) => state.setTopic);
  const start = useQuizSessionStore((state) => state.start);
  const attempts = useQuizHistoryStore((state) => state.attempts);
  const topicOptions: QuizTopic[] = ["all", ...tracks.map((track) => track.id)];
  const availableQuestions = questionsForTopic(topic).length;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-foreground">Choose a topic</h2>
        <p className="mt-2 text-sm text-muted">
          Each round has up to {QUESTIONS_PER_QUIZ} random questions with instant feedback and explanations.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2" role="radiogroup" aria-label="Quiz topic">
          {topicOptions.map((option) => (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={topic === option}
              onClick={() => setTopic(option)}
              className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                topic === option
                  ? "border-accent bg-accent/10 text-foreground"
                  : "border-border text-muted hover:border-accent/40 hover:text-foreground"
              }`}
            >
              {topicLabels[option]}
              <span className="mt-0.5 block text-xs font-normal text-muted">
                {questionsForTopic(option).length} questions in the pool
              </span>
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => start(pickQuestionIds(topic))}
          className={`${buttonClasses("primary")} mt-8 w-full sm:w-auto`}
        >
          Start quiz · {Math.min(QUESTIONS_PER_QUIZ, availableQuestions)} questions
        </button>
      </div>
      <aside className="rounded-2xl border border-border bg-surface p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Recent attempts</h2>
        {attempts.length === 0 ? (
          <p className="mt-4 text-sm text-muted">Your results will appear here. They are stored only in this browser.</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {attempts.map((attempt) => (
              <li key={attempt.completedAt} className="flex items-center justify-between gap-3 text-sm">
                <span className="text-foreground/85">{topicLabels[attempt.topic as QuizTopic] ?? attempt.topic}</span>
                <span className="tabular-nums font-semibold text-foreground">
                  {attempt.correctAnswers}/{attempt.totalQuestions}
                </span>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}

function QuizQuestionCard() {
  const { questionIds, currentIndex, selectedOptionByQuestionId, answer, goToNext, topic } = useQuizSessionStore(
    useShallow((state) => ({
      questionIds: state.questionIds,
      currentIndex: state.currentIndex,
      selectedOptionByQuestionId: state.selectedOptionByQuestionId,
      answer: state.answer,
      goToNext: state.goToNext,
      topic: state.topic,
    })),
  );
  const recordAttempt = useQuizHistoryStore((state) => state.recordAttempt);
  const question = getQuestion(questionIds[currentIndex]);
  const selectedOption = selectedOptionByQuestionId[question.id];
  const hasAnswered = selectedOption !== undefined;
  const isLastQuestion = currentIndex === questionIds.length - 1;
  const relatedLesson = question.relatedLessonSlug ? getLesson(question.relatedLessonSlug) : null;
  const progressPercent = Math.round(((currentIndex + (hasAnswered ? 1 : 0)) / questionIds.length) * 100);

  function handleNext() {
    if (isLastQuestion) {
      const correctAnswers = questionIds.filter(
        (questionId) => selectedOptionByQuestionId[questionId] === getQuestion(questionId).correctOptionIndex,
      ).length;
      recordAttempt({
        topic,
        correctAnswers,
        totalQuestions: questionIds.length,
        completedAt: new Date().toISOString(),
      });
    }
    goToNext();
  }

  function optionClasses(optionIndex: number) {
    if (!hasAnswered) {
      return "border-border hover:border-accent/50 hover:bg-surface-raised";
    }
    if (optionIndex === question.correctOptionIndex) {
      return "border-positive bg-positive/10";
    }
    if (optionIndex === selectedOption) {
      return "border-negative bg-negative/10";
    }
    return "border-border opacity-60";
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6 flex items-center justify-between gap-4 text-sm text-muted">
        <span>
          Question {currentIndex + 1} of {questionIds.length}
        </span>
        <span>{topicLabels[topic]}</span>
      </div>
      <div className="mb-8 h-1.5 overflow-hidden rounded-full bg-surface-raised" aria-hidden="true">
        <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${progressPercent}%` }} />
      </div>
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold leading-snug text-foreground sm:text-2xl">{question.question}</h2>
        <ul className="mt-6 space-y-3">
          {question.options.map((option, optionIndex) => (
            <li key={option}>
              <button
                type="button"
                disabled={hasAnswered}
                onClick={() => answer(question.id, optionIndex)}
                className={`flex w-full items-start gap-4 rounded-xl border px-4 py-3.5 text-left text-[15px] leading-6 text-foreground transition-colors disabled:cursor-default ${optionClasses(optionIndex)}`}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-surface-raised text-xs font-bold text-muted">
                  {OPTION_LETTERS[optionIndex]}
                </span>
                <span className="pt-0.5">{option}</span>
              </button>
            </li>
          ))}
        </ul>
        {hasAnswered && (
          <div
            aria-live="polite"
            className={`mt-6 rounded-xl border p-4 ${
              selectedOption === question.correctOptionIndex
                ? "border-positive/40 bg-positive/5"
                : "border-negative/40 bg-negative/5"
            }`}
          >
            <p className={`font-semibold ${selectedOption === question.correctOptionIndex ? "text-positive" : "text-negative"}`}>
              {selectedOption === question.correctOptionIndex ? "Correct!" : "Not quite."}
            </p>
            <p className="mt-1 text-sm leading-6 text-foreground/85">{question.explanation}</p>
            {relatedLesson && (
              <Link href={`/learn/${relatedLesson.slug}`} className="mt-2 inline-block text-sm font-medium text-accent hover:text-accent-strong">
                Review: {relatedLesson.title} →
              </Link>
            )}
          </div>
        )}
        <div className="mt-8 flex justify-end">
          <button type="button" onClick={handleNext} disabled={!hasAnswered} className={buttonClasses("primary")}>
            {isLastQuestion ? "See results" : "Next question"}
          </button>
        </div>
      </div>
    </div>
  );
}

function QuizResults() {
  const { questionIds, selectedOptionByQuestionId, restart, topic } = useQuizSessionStore(
    useShallow((state) => ({
      questionIds: state.questionIds,
      selectedOptionByQuestionId: state.selectedOptionByQuestionId,
      restart: state.restart,
      topic: state.topic,
    })),
  );
  const questions = questionIds.map(getQuestion);
  const correctAnswers = questions.filter(
    (question) => selectedOptionByQuestionId[question.id] === question.correctOptionIndex,
  ).length;
  const scoreRatio = questions.length === 0 ? 0 : correctAnswers / questions.length;
  const missedQuestions = questions.filter(
    (question) => selectedOptionByQuestionId[question.id] !== question.correctOptionIndex,
  );
  const verdict =
    scoreRatio >= EXCELLENT_SCORE_RATIO
      ? "Excellent work! You have a solid grasp of this topic."
      : scoreRatio >= GOOD_SCORE_RATIO
        ? "Good job. Review the questions you missed to close the gaps."
        : "Keep going. The lessons below will help you build a stronger foundation.";

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="text-sm uppercase tracking-wider text-muted">{topicLabels[topic]} · result</p>
        <p className="mt-3 text-6xl font-semibold tabular-nums text-foreground">
          {correctAnswers}
          <span className="text-3xl text-muted">/{questions.length}</span>
        </p>
        <p className="mt-4 text-foreground/85">{verdict}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={restart} className={buttonClasses("primary")}>
            Take another quiz
          </button>
          <Link href="/learn" className={buttonClasses("secondary")}>
            Browse lessons
          </Link>
        </div>
      </div>
      {missedQuestions.length > 0 && (
        <section aria-labelledby="review-title" className="mt-10">
          <h2 id="review-title" className="text-lg font-semibold text-foreground">
            Review what you missed
          </h2>
          <ul className="mt-4 space-y-4">
            {missedQuestions.map((question) => {
              const relatedLesson = question.relatedLessonSlug ? getLesson(question.relatedLessonSlug) : null;
              return (
                <li key={question.id} className="rounded-2xl border border-border bg-surface p-5">
                  <p className="font-medium text-foreground">{question.question}</p>
                  <p className="mt-2 text-sm text-positive">Answer: {question.options[question.correctOptionIndex]}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{question.explanation}</p>
                  {relatedLesson && (
                    <Link href={`/learn/${relatedLesson.slug}`} className="mt-2 inline-block text-sm font-medium text-accent hover:text-accent-strong">
                      Read: {relatedLesson.title} →
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}

export function QuizRunner() {
  const phase = useQuizSessionStore((state) => state.phase);

  if (phase === "playing") {
    return <QuizQuestionCard />;
  }

  if (phase === "finished") {
    return <QuizResults />;
  }

  return <QuizSetup />;
}
