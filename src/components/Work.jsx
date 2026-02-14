
export default function Work() {
  const projects = [
    {
      title: "PlayConnect",
      platform: "iOS",
      description: "Under development...⏳⚽️ Soccer app for conecting players and coaches",
      plink: "",
      status: "In Development"
    },
    {
      title: "LaunchTrack",
      platform: "iOS",
      description: "Currently in version 1.3.0! LaunchTrack - Allows the users to know the upcoming space mission launches. 🚀",
      plink: "/launchTrackPolicy",
      status: "v1.3.0"
    }
  ];

  return (
    <section>
  <h2>Apps</h2>
  <div class="projects-grid">
    {projects.map((project) => (
      <div class="project">
        {project.plink ? (
          <a href={`privacy${project.plink}`} target="_blank">
            <div class="project-header">
              <h3>{project.title}</h3>
              <span class={`project-status ${project.status === "In Development" ? "status-dev" : ""}`}>
                {project.status}
              </span>
            </div>
            <p>{project.description}</p>
            <div class="tech-stack">
              <img class="tech-ico" src="/ios.svg" alt="iOS" />
              <img class="tech-ico" src="/swift.svg" alt="Swift" />
              <img class="tech-ico" src="/xcode.svg" alt="Xcode" />
            </div>
          </a>
        ) : (
          <>
            <div class="project-header">
              <h3>{project.title}</h3>
              <span class={`project-status ${project.status === "In Development" ? "status-dev" : ""}`}>
                {project.status}
              </span>
            </div>
            <p>{project.description}</p>
            <div class="tech-stack">
              <img class="tech-ico" src="/ios.svg" alt="iOS" />
              <img class="tech-ico" src="/swift.svg" alt="Swift" />
              <img class="tech-ico" src="/xcode.svg" alt="Xcode" />
            </div>
          </>
        )}
      </div>
    ))}
  </div>
</section>
  );
}