"use client";

import { useState } from "react";
import Button from "@/components/ui/button";
import SectionTitle from "@/components/shared/section-title";

const questions = [
  "Do you use Microsoft 365?",
  "Do employees spend time on repetitive tasks?",
  "Do you currently use AI tools?",
  "Do you use a CRM?",
  "Would you like to automate customer communication?",
];

export default function AIAssessment() {
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(0);

  const answer = (yes: boolean) => {
    const nextScore = yes ? score + 20 : score;

    if (current < questions.length - 1) {
      setScore(nextScore);
      setCurrent(current + 1);
    } else {
      setScore(nextScore);
      setCurrent(questions.length);
    }
  };

  const reset = () => {
    setScore(0);
    setCurrent(0);
  };

  return (
    <section className="py-32" id="assessment">
      <div className="mx-auto max-w-4xl px-6">

        <SectionTitle
          eyebrow="AI Readiness"
          title="How ready is your business for AI?"
          description="Answer five quick questions to see where your organization stands."
        />

        <div className="card p-10">

          {current < questions.length ? (
            <>
              <h3 className="text-3xl font-bold">
                {questions[current]}
              </h3>

              <div className="mt-10 flex gap-4">

                <button
                  onClick={() => answer(true)}
                  className="rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-black hover:bg-cyan-300"
                >
                  Yes
                </button>

                <button
                  onClick={() => answer(false)}
                  className="rounded-xl border border-white/10 px-8 py-4 hover:border-cyan-400"
                >
                  No
                </button>

              </div>

            </>
          ) : (
            <>
              <h3 className="text-5xl font-black">
                Your AI Readiness Score
              </h3>

              <p className="mt-8 text-7xl font-black text-cyan-400">
                {score}%
              </p>

              <p className="mt-8 text-lg leading-8 text-slate-400">
                Your score gives a quick indication of how prepared your organization is to benefit from AI and automation. A strategy session can help identify practical next steps tailored to your business.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Button href="#contact">
                  Schedule Strategy Session
                </Button>

                <button
                  onClick={reset}
                  className="rounded-xl border border-white/10 px-8 py-4"
                >
                  Take Again
                </button>

              </div>

            </>
          )}

        </div>

      </div>
    </section>
  );
}