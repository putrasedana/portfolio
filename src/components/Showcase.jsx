import { FaFileAlt } from "react-icons/fa";

const Showcase = () => {
  return (
    <section
      id="showcase"
      className="bg-slate-900 flex flex-col items-center justify-center text-white pt-10 pb-32 px-6 md:px-20 text-center xl:flex-row-reverse xl:text-left xl:px-36 xl:pt-[5rem] mt-16"
    >
      <img
        src="/foto-portfolio.jpeg"
        alt="Profile Image"
        className="w-[23rem] rounded-full border-4 mb-10 border-slate-950"
      />
      <div className="xl:px-6 xl:pr-16">
        <h1 className="text-4xl font-semibold mb-4">
          Hi! I&apos;m Putra Sedana,
          <span className="text-green-500"> Web Developer</span> <br /> Based in
          Bali
        </h1>
        <p className="text-lg text-gray-300 mb-4 text-justify">
          As a passionate and driven web developer, I am seeking an opportunity
          to apply and enhance my skills in a real-world setting. Through
          hands-on experience, I aim to contribute to meaningful projects while
          continuing to learn and grow in the field of web development.
        </p>
        <div className="flex items-center justify-center mt-6 xl:justify-start">
          <a
            href="https://drive.google.com/file/d/1Y_DJZnbCCs2md5oLSnAx3Rdo3nt3Y-Qc/view?usp=sharing"
            target="_blank"
            className="font-semibold flex items-center border-2 border-green-600 bg-green-600 rounded-sm 
            py-2 px-3 mr-6 hover:border-green-600 hover:border-2 hover:bg-transparent ease-out duration-300"
          >
            <FaFileAlt className="mr-1 " size={20} />
            My CV
          </a>
          <a href="#projects" className="py-2 px-3 text-white text-lg">
            Projects{" "}
            <i className="fas fa-arrow-right transform -rotate-45 text-green-500"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
