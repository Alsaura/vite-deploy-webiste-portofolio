import logo from "../assets/images/LOGO.png";

const Navbar = () => {
  return (
    <section className="backdrop-blur-xl sticky top-0 z-50">
      <div className=" text-white font-light mb-10">
        <div className="lg:px-[120px] p-4">
          <ul className="px-[120] md:px-[40px] flex flex-row justify-between items-center">
            <li className="opacity-70">
              <a href="www.youtube.com">HOME</a>
            </li>
            <li>
              <img src={logo} alt="" />
            </li>
            <button>
              <li className="opacity-70  lg:py-3 lg:px-4 p-2 text-sm md:text-base lg:text-base border-2 border-gray-600 rounded-full">
                Download CV
              </li>
            </button>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
