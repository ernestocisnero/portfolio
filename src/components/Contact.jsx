export default function Contact() {
  const links = [
    { label: "email", href: "mailto:your.email@example.com" },
    { label: "github", href: "https://github.com/yourusername" },
    { label: "linkedin", href: "https://linkedin.com/in/yourprofile" }
  ];

  return (
    <section>
      <h2>contact</h2>
      <div className="contact-links">
        {links.map((link, index) => (
          <a 
            key={index}
            href={link.href} 
            className="contact-link"
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}