//@ts-ignore
import { ProjectInfo } from "../User";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="px-14 mx-20 my-10 md-mx:px-4 font-mono" id="Projects">
      <h1 className="text-4xl mb-10 sm-mx:text-3xl xs-mx:text-2xl text-center font-bold text-white">
        <span className="text-primaryColor">02.&nbsp;</span>Projects
      </h1>
      <div className="flex flex-wrap justify-around md-mx:justify-between xs-mx:justify-center sm-mx:justify-center gap-4 md-mx:gap-2">
        {ProjectInfo.map((project: any, index: number) => (
          <ProjectCard
            key={index}
            title={project.title}
            desc={project.desc}
            image={project.image}
            live={project.live}
            link={project.link}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
