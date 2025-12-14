const technology = {
  react: "React",
  java: "Java",
  junit: "JUnit",
  javaswing: "Java Swing",
  springboot: "Spring Boot",
  typescript: "TypeScript",
  javascript: "JavaScript",
  node: "Node.js",
  postgresql: "PostgreSQL",
  tailwind: "TailwindCSS",
  express: "Express",
  html: "HTML5",
  css: "CSS3",
  vercel: "Vercel",
  mongodb: "MongoDB",
  bootstrap: "BootStrap",
} as const;

type Technology = (typeof technology)[keyof typeof technology];

type Project = {
    name: string;
    startDate: string;
    endDate: string;
    description: string;
    techStack: Technology[];
    link: string,
    repoLinks: string[]; 
};

type Job = {
    company: string;
    logo: string;
    dateStart: string;
    dateEnd: string;
    description: string;
    techStack: Technology[];
    companyLink: string;
    jobTitle: string;
};


export { technology};
export type { Technology, Project, Job };