import { skills } from "../data/portfolio";

const categories = [...new Set(skills.map((s) => s.category))];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Skills & <span className="text-accent">Tools</span>
        </h2>
        <div className="mt-2 h-1 w-12 rounded bg-accent" />

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-xl border border-surface-border bg-surface-raised p-6"
            >
              <h3 className="font-display text-lg font-semibold text-accent">
                {category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-lg border border-surface-border bg-surface px-3 py-1.5 text-sm text-text transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
