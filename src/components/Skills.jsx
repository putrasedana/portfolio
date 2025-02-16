import skills from "../utils/skills";

const Skills = () => {
  return (
    <div id="skills" className="bg-slate-900 flex justify-center">
      <div className="w-[80%]">
        <h2 className="text-3xl font-bold text-center text-green-500 py-16 ">
          Skills
        </h2>
        <div className="flex gap-10 pb-20 justify-center flex-wrap">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex flex-col items-center justify-center gap-2 bg-slate-950 text-white p-6 rounded-sm text-sm font-medium shadow-sm transition">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-20 h-20 object-contain"
                />
              </div>

              <p className="text-white mt-2 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
