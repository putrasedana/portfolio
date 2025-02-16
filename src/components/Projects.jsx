import Project from "./Project";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = ({ projects, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="bg-slate-950 mt-14">
      <h3 className="text-white text-2xl ml-4 mb-4 font-semibold md:ml-16 xl:ml-[11.8rem]">
        {title}
      </h3>
      <Slider {...settings} className="md:px-16">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </Slider>
    </section>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-60 right-4 z-10 xl:top-1/2 xl:right-16 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full cursor-pointer hover:text-green-500"
      onClick={onClick}
    >
      <i className="fas fa-arrow-right text-2xl"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-60 left-4 z-10 xl:top-1/2 xl:left-16 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full cursor-pointer hover:text-green-500"
      onClick={onClick}
    >
      <i className="fas fa-arrow-left text-2xl"></i>
    </div>
  );
};

export default Projects;
