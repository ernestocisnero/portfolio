interface PortfolioCardProps {
  title: string;
  description: string;
  phase: string;
  url: string;
}

export default function PortfolioCard({
  title,
  description,
  phase,
  url,
}: PortfolioCardProps) {
  return (
    <a
      href={url}
      className="portfolio-card"
      target={url.startsWith("http") ? "_blank" : undefined}
      rel={url.startsWith("http") ? "noreferrer" : undefined}
    >
      <div>
        <h2>{title}</h2>
        <p className="portfolio-card-description">{description}</p>
        <p className="portfolio-card-phase" style={{ color: 'var(--appInDevelopment-color)' }}>
          {phase}
        </p>
      </div>

      <span aria-hidden="true">↗</span>
    </a>
  );
}
