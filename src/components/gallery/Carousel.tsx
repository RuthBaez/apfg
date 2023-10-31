import { useCarousel } from "@components/home/useCarousel";

interface Testimonial {
  img: string;
  text: string;
}

function Carousel() {
  const testimonials = [
    {
      img: "https://res.cloudinary.com/de5c9p8wb/image/upload/v1692202129/SUCIO%C3%87_lse2gf.png",
      text: "https://res.cloudinary.com/de5c9p8wb/image/upload/v1692202114/LIMPIO_wfchzv.png",
    },
    {
      img: "https://res.cloudinary.com/de5c9p8wb/image/upload/v1692202129/SUCIO%C3%87_lse2gf.png",
      text: "https://res.cloudinary.com/de5c9p8wb/image/upload/v1692202114/LIMPIO_wfchzv.png",
    },
    {
      img: "https://res.cloudinary.com/de5c9p8wb/image/upload/v1692202129/SUCIO%C3%87_lse2gf.png",
      text: "https://res.cloudinary.com/de5c9p8wb/image/upload/v1692202114/LIMPIO_wfchzv.png",
    },
  ];
 
  const {currentIndex, next, previous} = useCarousel<Testimonial>(testimonials);

  return (
    <div className="my-[4vw] flex flex-col space-y-[4vw]">
      <p className="text-[5vw] text-white font-bebas z-10 text-center">
        MIRA LOS RESULTADOS
      </p>
      <div className=" w-[90vw] lg:w-[60vw] h-[32vw] lg:h-[22vw] overflow-hidden mx-auto">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((test: Testimonial) => (
            <div className="w-full flex place-content-center place-items-center shrink-0 h-[32vw] lg:h-[22vw] px-[6vw]" key={test.text}>
              <div>
                <img
                  src={test.img}
                  className="w-full"
                />
              </div>
              <div className="px-8 text-2xl sm:text-4xl text-white font-bold my-4 text-center sm:my-0">
                VS
              </div>
              <div>
                <img
                  src={test.text}
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center space-x-[4vw] ml-[3vw]">
          <button onClick={previous} className="flex items-center">
            <span className="text-[5vw] text-white whitespace-nowrap leading-tight font-bebas z-10 text-center justify-center mr-[1vw]">
              ANTES
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-square-rounded-chevron-left w-8 h-8 sm:w-12 sm:h-12 xl:w-[76px] xl:h-[76px]"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M13 15l-3 -3l3 -3" />
              <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
            </svg>
          </button>
          <button onClick={next} className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-square-rounded-chevron-right w-8 h-8 sm:w-12 sm:h-12 xl:w-[76px] xl:h-[76px]"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M11 9l3 3l-3 3" />
              <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
            </svg>
            <span className="ml-[1vw] text-[5vw] text-white whitespace-nowrap leading-tight font-bebas z-10 text-center justify-center">
              DESPUES
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
