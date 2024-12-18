import About from "./About";
import Projects from "./Projects";
import Showcase from "./Showcase";
import projects from "../utils/projects";

const Body = () => {
  const frontEndProjects = projects.filter(
    (project) => project.stack === "Front-End"
  );

  const backEndProjects = projects.filter(
    (project) => project.stack === "Back-End"
  );

  return (
    <main>
      <Showcase />
      <About />
      <>
        <h2 className="text-3xl font-bold text-center text-green-500 mt-28">
          Projects
        </h2>
        <Projects projects={frontEndProjects} title="Front-End" />
        <Projects projects={backEndProjects} title="Back-End" />
      </>
    </main>
  );
};

export default Body;
