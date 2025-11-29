export default function Contact() {
  const links = [
    { label: "📧 Email", href: "mailto:ernestocisnero92@gmail.com" }
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