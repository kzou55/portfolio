import type { Project } from "./types";
import { technology } from "./types";

export const projects: Project[] = [
    {
        name: "Calorie & Nutrition Tracker",
        startDate: "September 2025",
        endDate: "Present",
        description: "A full-stack web application to help users track daily food intake, calories, and key nutritional values.",
        techStack: [
            technology.react, 
            technology.html,
            technology.typescript,
            technology.tailwind,
            technology.springboot,
            technology.postgresql,
            technology.java
        ],
        link: "https://calorie-nutrition-tracker.vercel.app/",
        repoLinks: ["https://github.com/kzou55/calorie-nutrition-tracker"]
    },
    {
        name: "Portfolio",
        startDate: "December 2025",
        endDate: "December 2025",
        description: "Personal Website designed and developed by me",
        techStack: [
            technology.react, 
            technology.html,
            technology.typescript,
            technology.tailwind,
        ],
        link: "https://kzou55.github.io/portfolio/",
        repoLinks: ["https://github.com/kzou55/portfolio"]
    },
    {
        name: "Pokemon Team Builder Website ",
        startDate: "November 2022",
        endDate: "December 2022",
        description: "An interactive Pokemon team builder web application that utilizes the PokeAPI",
        techStack: [
            technology.react, 
            technology.html,
            technology.css,
            technology.node,
            technology.bootstrap,
            technology.postgresql,
            technology.mongodb,
            technology.express,
        ],
        link: "",
        repoLinks: ["https://github.com/Benderson7/webdev-final-project", "https://github.com/Benderson7/webdev-final-project-server"]
    },
    {
        name: "Easy Animator",
        startDate: "May 2020",
        endDate: "June 2020",
        description: "uilt an animation program using the Model-View-Controller design pattern",
        techStack: [
            technology.java,
            technology.javaswing,
            technology.junit
        ],
        link: "",
        repoLinks: []
    },
]