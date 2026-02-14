
export default function Work() {
  const projects = [
    {
      title: "PlayConnect",
      platform: "iOS",
      description: "Under development...⏳⚽️ Soccer app for conecting players and coaches"
    },
    {
      title: "LaunchTrack",
      platform: "iOS",
      description: "Currently in version 1.3.0! LaunchTrack - Allows the users to know the upcoming space mission launches. 🚀"
    }
  ];

  return (
    <section>
      <h2>Apps</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <a href="/privacy/launchTrackPolicy">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div>
            <img className="tech-ico" src="/ios.svg" alt="" />
            <img className="tech-ico" src="/swift.svg" alt="" />
            <img className="tech-ico" src="/xcode.svg" alt="" />
          </div>
          </a>
        </div>
      ))}
    </section>
  );
}