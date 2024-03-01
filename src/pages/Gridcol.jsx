import desig1 from "../assets/images/design1.jpg";

const Gridcol = () => {
  return (
    <section className="py-10 lg:py-[200px] lg:max-h-auto text-white">
      <div className="px-8 gap-4 grid lg:grid-cols-6 lg:gap-4 w-full h-full lg:px-[120px]  ">
        <div className="lg:col-span-4 lg:row-span-2 rounded-lg relative overflow-hidden bg-cover bg-no-repeat">
          <img
            src={desig1}
            alt="Image 1"
            className="w-auto h-full object-cover rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer"
          />
        </div>
        <div className="lg:col-span-2 lg:row-span-2 lg:col-start-5 w-full">
          <img
            src="https://cdn.dribbble.com/users/9829527/screenshots/20559260/media/e3711653ae2384d3cc48be69c24f40ce.jpg?resize=1000x750&vertical=center"
            alt="Image 2"
            className="w-auto h-full object-cover rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer"
          />
        </div>
        <div className="lg:col-span-2 lg:row-span-3 lg:row-start-4 w-full ">
          <img
            src="https://cdn.dribbble.com/users/9829527/screenshots/20548291/media/abb3c36ae6520139f54725c6c99ba0e0.png"
            alt="Image 3"
            className="w-full h-full object-cover rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer"
          />
        </div>
        <div className="lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-4 w-full ">
          <img
            src="https://cdn.dribbble.com/users/9829527/screenshots/20548943/media/1a9298df5db2a19dbc739b099a69ac33.png"
            alt="Image 4"
            className="w-full h-full object-cover rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer"
          />
        </div>
        <div className="lg:col-span-2 lg:row-span-2 lg:col-start-5 lg:row-start-4 w-full">
          <img
            src="https://cdn.dribbble.com/users/9829527/screenshots/20548233/media/e26ed02ee44801d65daf64936c717568.png?resize=1000x750&vertical=center"
            alt="Image 5"
            className="w-full h-full object-cover rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer"
          />
        </div>
        <div className="lg:col-span-4 lg:row-span-1 lg:col-start-3 lg:row-start-6 w-full rounded-lg">
          <img
            src="https://cdn.dribbble.com/users/9829527/screenshots/20548123/media/befc406239a4731f7546079f607e0aea.png"
            alt="Image 6"
            className="w-full h-full object-cover rounded-xl transform duration-500 hover:-translate-y-2 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Gridcol;
