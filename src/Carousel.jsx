import rasm from "./assets/images/rasm.avif";

const Carousel = () => {
  return (
    <section>
      <div
        className={`bg-[url('/assets/images/bg.avif')] h-[400px] sm:h-[600px] bg-center bg-cover rounded-md flex items-end`}
      >
        <div className="pb-[50px] px-[50px] text-white">
          <h1 className="font-bold text-2xl mb-4 md:text-[3rem]">
            Katering xizmati
          </h1>
          <p className="hidden sm:block md:text-[20px] max-w-[700px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            molestiae recusandae at cupiditate, necessitatibus mollitia quam
            incidunt in? Impedit voluptatibus soluta deserunt officia molestias?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
