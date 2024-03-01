import images from "../assets/images/Hero.png";
import person from "../assets/images/person.png";

const Portofolio = () => {
  return (
    <section className=" text-white justify-center lg:px-[120px] lg:py-[80px] md:px-8 ">
      <div className="p-4 items-center gap-4">
        <div className="text-center w-full md:grid-cols-12 md:gap-4 flex md:flex-row flex-col md:justify-between justify-stretch items-center gap-y-5">
          <div className="col-span-7">
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-normal transition-transform ">
              PORTOFOLIO
            </h1>
            <h1 className="custom-font text-7xl md:text-[80px] md:text-start m-0 lg:text-[140px]">
              DESIGN LAB
            </h1>
          </div>
          <div className="col-span-5">
            <img className="w-[350px] lg:w-[500px] " src={images} alt="Hero" />
          </div>
        </div>
        <div className="underline py-9"></div>
        <div className="px-4 ">
          <div className="pt-8 flex flex-col md:items-center md:flex-row md:justify-between">
            <div className="rounded-full h-[64px] w-[64px] md:h-[120px] md:w-[120px] flex justify-center md:justify-between items-center">
              <img className="bg-blue-300 rounded-full" src={person} alt="" />
            </div>
            <div className="md:flex md:flex-col md:grid-cols-2 lg:text-2xl gap-x-4 ">
              <h1 className="md:col-span-1 pt-5 font-semibold py-2 ">
                <h1 className="md:text-4xl text-2xl">
                  Alsaura
                  <span className="custom-font "> Alifi </span>Siddik
                </h1>
                Creative Design // Front-end Developer
              </h1>
              <span className="md:col-span-1 text-gray-300 text-base lg:text-2xl opacity-70 md:w-[400px]">
                Leading digital agency with solid design and development
                expertise. We build readymade websites and online business
                services.
              </span>
              <div className="flex lg:justify-between py-10 md:gap-6 gap-6">
                <div>
                  <a
                    href="https://www.linkedin.com/in/alsauraas/"
                    target="_blank"
                  >
                    <img
                      className="md:w-[25px] w-[25px] lg:w-full opacity-45 hover:opacity-100"
                      src="/public/icon/LinkedIn - White.png"
                      alt=""
                    />
                  </a>
                </div>
                <div>
                  <a href="https://github.com/Alsaura" target="_blank">
                    <img
                      className="md:w-[25px] w-[25px] lg:w-full opacity-45
                    hover:opacity-100"
                      src="/public/icon/Github - White.png"
                      alt=""
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/alsaura_as/"
                    target="_blank"
                  >
                    <img
                      className="md:w-[25px] w-[25px] lg:w-full opacity-45
                    hover:opacity-100"
                      src="/public/icon/Instagram - White.png"
                      alt=""
                    />
                  </a>
                </div>
                <div>
                  <a href="https://dribbble.com/ALSAURA" target="_blank">
                    <img
                      className="md:w-[25px] w-[25px] lg:w-full opacity-45
                    hover:opacity-100"
                      src="/public/icon/Dribbble - White.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
