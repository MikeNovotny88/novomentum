"use client";

const goals = [
  "Increase Productivity",
  "Automate Workflows",
  "Improve Customer Service",
  "Grow Sales",
  "Modernize Microsoft 365",
  "Business Intelligence",
];

export default function BusinessGoals() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
          Where do you want to create momentum?
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Choose your business goal.
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal) => (
            <button
              key={goal}
              className="card p-8 text-left text-xl font-semibold hover:border-cyan-400"
            >
              {goal}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}