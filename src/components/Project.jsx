const Project = ({ project }) => {
  return (
    <div className="flex flex-col bg-slate-900 pb-0 pt-12 items-center text-white rounded-md md:p-10 xl:flex-row xl:p-10 xl:w-4/5 xl:mx-auto">
      <img
        src={project.image}
        alt="Project Image"
        className="w-[300px] object-contain h-60 mx-auto sm:w-[420px]"
      />
      <div className="text-center p-6 space-y-4">
        <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
        <p className="text-gray-300 xl:pl-6 text-justify">{project.desc}</p>
        <div className="flex space-x-4 justify-center py-5">
          {project.images.map((image, index) => (
            <img
              key={index}
              style={{ width: "40px", height: "40px", objectFit: "contain" }}
              src={image}
              alt="HTML"
            />
          ))}
        </div>
        <div className="flex space-x-8 justify-center">
          <a
            href={project.links[0]}
            target="_blank"
            className="flex items-center"
          >
            <span>Code</span>
            <img className="w-6 ml-1" src="github.png" alt="Github" />
          </a>
          <a href={project.links[1]} target="_blank" className=" text-white">
            Live Preview{" "}
            <i className="fas fa-arrow-right transform -rotate-45 text-green-500"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
