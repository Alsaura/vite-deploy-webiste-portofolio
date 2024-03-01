const Biodata = () => {
  return (
    <section className="text-white lg:px-[120px] hover:shadow-xl py-7">
      <div className="mx-8 max-sm transition duration-300 ease-in-out hover:scale-110 ">
        <div className="">
          <h1 className="custom-font text-3xl ">Education</h1>
          <div className="underline py-2 opacity-35"></div>
        </div>

        <div className="pt-2 md:flex md:flex-row md:grid-cols-4">
          <div className="flex flex-col justify-between md:col-span-2 md:w-full ">
            <h1 className="text-lg font-semibold">Institut Teknologi PLN</h1>
            <span className="opacity-50">2019-2023</span>
          </div>
          <div className="md:col-span-2 cursor-pointer opacity-60 hover:opacity-100">
            <span className=" text-lg  ">
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

export default Biodata;
