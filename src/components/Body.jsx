import About from "./About";
import Projects from "./Projects";
import Showcase from "./Showcase";
import projects from "../utils/projects";
import projects_fullstack from "../utils/projects-fullstack";

const Body = () => {
  return (
    <main>
      <Showcase />
      <About />
      <>
        <h2 className="text-3xl font-bold text-center text-green-500 mt-28">Projects</h2>
        <Projects projects={projects} title="Front-End" />
        <Projects projects={projects_fullstack} title="PHP & MYSQL" />
      </>
    </main>
  );
};

export default Body;
