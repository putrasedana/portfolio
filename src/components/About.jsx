const About = () => {
  return (
    <section id="about" className="pt-16 pb-28 bg-slate-950 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-14 text-green-500">
        About Me
      </h2>
      <div className="flex flex-col items-center xl:flex-row xl:space-x-10 xl:px-20 xl:items-center">
        <img
          src="about-img.png"
          className="rounded-2xl xl:w-[35%] border mb-6 xl:mb-0"
          alt="About Image"
        />
        <div className="text-lg text-center xl:w-[60%] text-gray-300 xl:text-left">
          <p className="mb-4 text-justify">
            Hi! My name is I Made Putra Sedana, and I&apos;m a passionate web
            developer based in Bali. My journey into web development began with
            curiosity and a strong desire to create and build things for the
            web. I&apos;ve been learning through various online platforms,
            including YouTube tutorials, documentation, FreeCodeCamp, and
            Dicoding Academy.
          </p>
          <p className="mb-4 text-justify">
            Currently, I&apos;m a sixth-semester student at Primakara
            University, majoring in Information Systems. Throughout my studies,
            I&apos;ve gained a solid foundation in programming, covering topics
            such as Data Structures & Algorithms, Object-Oriented Programming,
            and Database Fundamentals.
          </p>
          <p className=" mb-4 text-justify">
            Beyond web development, I&apos;m also fascinated by how AI can
            enhance programming, making it more efficient and innovative.
            I&apos;m excited to explore how AI tools can streamline development
            and shape the future of technology.
          </p>
          <p className="text-justify">
            Feel free to check out my portfolio and connect with me—I&apos;d
            love to collaborate on exciting projects!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
