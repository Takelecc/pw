import { personalInfo } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          About <span className="text-accent">Me</span>
        </h2>
        <div className="mt-2 h-1 w-12 rounded bg-accent" />

        <div className="mt-10 grid gap-10 md:grid-cols-5">
          <div className="flex items-start justify-center md:col-span-2">
            <div className="relative">
              {personalInfo.photo ? (
                <div className="h-64 w-64 overflow-hidden rounded-2xl border border-surface-border bg-surface-raised md:h-72 md:w-72">
                  <img
                    src={personalInfo.photo}
                    alt={`${personalInfo.name} photo`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-64 w-64 rounded-2xl border border-surface-border bg-surface-raised md:h-72 md:w-72">
                  <div className="flex h-full items-center justify-center">
                    <span className="font-display text-6xl font-bold text-accent/30">
                      {personalInfo.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>
              )}
              <div className="absolute -right-3 -bottom-3 h-full w-full rounded-2xl border-2 border-accent/30" />
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-lg leading-relaxed text-muted">{personalInfo.bio}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-surface-border bg-surface-raised p-5">
                <p className="text-sm text-muted">Location</p>
                <p className="mt-1 font-medium">{personalInfo.location}</p>
              </div>
              <div className="rounded-xl border border-surface-border bg-surface-raised p-5">
                <p className="text-sm text-muted">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="mt-1 block font-medium text-accent transition-colors hover:text-accent-dim"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
