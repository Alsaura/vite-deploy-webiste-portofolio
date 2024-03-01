const Experience = () => {
  return (
    <section className="hover:shadow-xl py-7 text-white pt-7 lg:px-[120px] max-sm transition duration-300 ease-in-out hover:scale-110">
      <div className="mx-8">
        <div className="">
          <h1 className="custom-font text-3xl">Experience</h1>

          <div className="underline py-2 opacity-35"></div>
        </div>

        <div className="pt-2 md:grid-col-4 md:flex md:flex-row ">
          <div className="flex flex-col pb-2 md:col-span-2 w-full">
            <h1 className="text-lg font-semibold">PT PLN PERSERO Pusertif</h1>
            <span className="font-light">Intenship Frontend Developer</span>
          </div>
          <div className="opacity-60 cursor-pointer hover:opacity-100">
            <span className=" text-lg md:col-span-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
              tempore optio! Velit fuga pariatur aliquid, error officia
              architecto assumenda ipsa, voluptas, facilis laudantium dolorem in
              hic nulla eligendi labore atque.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
