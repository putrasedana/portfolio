const Footer = () => {
  return (
    <footer className="flex justify-evenly items-center bg-slate-900 text-white py-10 text-center mt-20">
      <p className="font-semibold">Copyright &copy; 2024. All rights reserved.</p>
      <div className="mt-2 flex justify-center items-center">
        <a href="https://www.linkedin.com/in/yourprofile">
          <img src="linkedin.webp" className="w-8 mx-2 " alt="Linkedin Image" />
        </a>
        <a href="https://github.com/yourusername">
          <img src="github.png" className="w-7 mx-2" alt="Github Image" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
