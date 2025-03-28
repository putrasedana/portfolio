import About from "./About";
import Projects from "./Projects";
import Showcase from "./Showcase";
import projects from "../utils/projects";
import Skills from "./Skills";

const Body = () => {
  const frontendProjects = projects.filter(
    (project) => project.stack === "Front-end"
  );

  const backendProjects = projects.filter(
    (project) => project.stack === "Back-end"
  );

  const phpProjects = projects.filter((project) => project.stack === "PHP");

  return (
    <main>
      <Showcase />
      <About />
      <Skills />
      <>
        <h2
          id="projects"
          className="text-3xl font-bold text-center text-green-500 mt-10 pt-16"
        >
          Projects
        </h2>
        <Projects projects={frontendProjects} title="Front-end" />
        <Projects projects={backendProjects} title="Back-end" />
        <Projects projects={phpProjects} title="PHP & MySQL" />
      </>
    </main>
  );
};

export default Body;
