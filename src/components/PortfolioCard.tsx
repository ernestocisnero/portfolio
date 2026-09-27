interface PortfolioCardProps {
  title: string;
  description: string;
  url: string;
}

export default function PortfolioCard({
  title,
  description,
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
        <p>{description}</p>
      </div>

      <span aria-hidden="true">↗</span>
    </a>
  );
}