const About = () => {
  return (
    <section id="about" className="pt-16 bg-slate-950 px-6 md:px-20">
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
          <p className="mb-6">
            My name is I Made Putra Sedana, a passionate and dedicated beginner
            web developer based in Bali. My journey in web development started
            with my curiosity and a desire to create things on the internet.
            I&apos;ve been learning through various online resources, including
            YouTube tutorials and Dicoding website.
          </p>
          <p className="mb-6">
            I am studying at Primakara University, majoring in Information
            System, and I am currently in my fifth semester. During my studies,
            I&apos;ve taken courses in essential programming topics like Data
            Structures and Algorithms, Object-Oriented Programming and Basic
            Database.
          </p>
          <p className="mb-6">
            My interest in becoming a developer is also driven by the
            transformative potential of AI, which makes programming easier and
            more efficient. The integration of AI in development fascinates me,
            and I am eager to explore its role in shaping the future of
            technology.
          </p>
          <p>
            Feel free to explore my portfolio and reach out if you&apos;d like
            to connect or collaborate on a project!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
