import { projects } from "../data/portfolio";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Featured <span className="text-accent">Projects</span>
        </h2>
        <div className="mt-2 h-1 w-12 rounded bg-accent" />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <article
              key={project.title}
              className="group rounded-xl border border-surface-border bg-surface-raised p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-4 h-40 rounded-lg bg-gradient-to-br from-accent/10 to-surface border border-surface-border" />
              <h3 className="font-display text-xl font-semibold group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-surface px-2 py-0.5 font-mono text-xs text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-4">
                <a
                  href={project.liveUrl}
                  className="text-sm font-medium text-accent transition-colors hover:text-accent-dim"
                >
                  Live Demo →
                </a>
                <a
                  href={project.githubUrl}
                  className="text-sm text-muted transition-colors hover:text-text"
                >
                  Source Code
                </a>
              </div>
            </article>
          ))}
        </div>

        {other.length > 0 && (
          <>
            <h3 className="mt-16 font-display text-2xl font-bold">Other Projects</h3>
            <div className="mt-6 grid gap-4">
              {other.map((project) => (
                <article
                  key={project.title}
                  className="group flex flex-col justify-between gap-4 rounded-xl border border-surface-border bg-surface-raised p-5 transition-all hover:border-accent/30 sm:flex-row sm:items-center"
                >
                  <div>
                    <h4 className="font-display font-semibold group-hover:text-accent transition-colors">
                      {project.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted">{project.description}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs text-accent/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-4">
                    <a
                      href={project.liveUrl}
                      className="text-sm text-accent hover:text-accent-dim"
                    >
                      Demo →
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-sm text-muted hover:text-text"
                    >
                      Code
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
