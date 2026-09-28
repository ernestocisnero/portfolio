interface Link{
  title: string;
  description: string;
  phase: string;
  url: string;
}

export const profile = {
  name: "Ernesto Cisnero",
  bio: "iOS developer building thoughtful native apps.",
};

export const links: Link[] = [
  {
    title: "Rootizen",
    description: "U.S. Citizenship study app. To help you pass the civics test and become a citizen.",
    phase: "In development",
    url: "#apps",
  }
//   {
//     title: "GitHub",
//     description: "Code, experiments, and projects",
//     url: "https://github.com/",
//   },
//   {
//     title: "LinkedIn",
//     description: "Connect with me",
//     url: "https://linkedin.com/",
//   },
//   {
//     title: "Email Me",
//     description: "Get in touch",
//     url: "mailto:hello@example.com",
//   },
];