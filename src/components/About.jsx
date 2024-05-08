const About = () => {
  return (
    <section id="about" className="pt-16 bg-slate-950 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-14 text-green-500">About Me</h2>
      <div className="flex flex-col items-center xl:flex-row xl:space-x-10 xl:px-20 xl:items-center">
        <img src="about-img.png" className="rounded-2xl w-[350px] mb-6 xl:mb-0" alt="About Image" />
        <div className="text-lg text-center text-gray-300 xl:text-left">
          <p className="mb-6">
            Hi, My name is I Made Putra Sedana, a passionate and dedicated beginner web developer based in Bali. My journey in web development started with my curiosity and a desire to create things on the internet. I&apos;ve been learning
            through various online resources, including YouTube tutorials and the Dicoding website.
          </p>
          <p className="mb-6">
            I am currently studying at Primakara University, majoring in Information System, and I am currently in my fourth semester. During my studies, I&apos;ve taken courses in essential programming topics like Data Structures and
            Algorithms, Object-Oriented Programming and Basic Database.
          </p>
          <p>Feel free to explore my portfolio and reach out if you&apos;d like to connect or collaborate on a project!</p>
        </div>
      </div>
    </section>
  );
};

export default About;
