import { useCarousel } from "./useCarousel";

interface Testimonial {
  client: string;
  comment: string;
  stars: number;
}

function Carousel() {
  const testimonials = [
    {
      client: "Kathleen Smith",
      comment:
        "Son una empresa verdaderamente sería, me gusta la manera en la que trabajan y coordinan los envíos.",
      stars: 5,
    },
    {
      client: "Gabriela Sánchez",
      comment:
        "Honestamente me sorprendió la manera en que revivieron mis sneakers, eso fue muy eficiente, un trabajo excelente.",
      stars: 5,
    },
    {
      client: "Ruth Baéz",
      comment:
        "Me encanta como dejaron mis sneakers, parecían unas nuevas, el antes y después fue hermoso.",
      stars: 5,
    },
    {
      client: "Patricia Fernandez",
      comment:
        "El equipo de esta tienda es increíble, son muy amables y el servicio es personalizado, se nota que saben lo que hacen.",
      stars: 5,
    },
  ];
 
  const {currentIndex, next, previous} = useCarousel(testimonials);

  return (
    <div className="flex w-full mt-[4vw]">
      <div className="w-[60%] overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((test: Testimonial) => (
            <div className="flex justify-center items-center w-[100%] h-[182px] sm:h-[250px] lg:h-[300px] 2xl:h-[432px] shrink-0 py-4" key={test.client}>
              <div className="relative w-[90%] xl:w-[80%] h-[95%] ">
                <div
                  className="absolute z-10 top-0 right-0 flex flex-col justify-center space-y-1 lg:space-y-5 2xl:space-y-10 px-2 md:px-8 w-[85%] h-[90%] bg-white shadow"
                  key={test.client}
                >
                  <div className="flex space-x-1 justify-between">
                    <p className="font-rubik font-medium text-[15px] sm:text-xl lg:text-3xl  2xl:text-5xl">
                      {test.client}
                    </p>
                    <svg
                      className="w-5 h-5 md:w-8 md:h-8 xl:w-12 xl:h-12"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="10.5"
                        cy="10"
                        rx="10.5"
                        ry="10"
                        fill="#AA0000"
                        fillOpacity="0.96"
                      />
                      <path
                        d="M9.60438 6C9.74745 6 9.87007 6.06908 9.97226 6.20725C10.054 6.34542 10.0949 6.51123 10.0949 6.70466C10.0949 6.92574 10.0642 7.14681 10.0029 7.36788L8.3781 13.0466C8.27591 13.323 8.17372 13.544 8.07153 13.7098C7.9489 13.9033 7.75474 14 7.48905 14L6.47737 14C6.31387 14 6.19124 13.9171 6.10949 13.7513C6.0073 13.5855 5.97664 13.3644 6.01752 13.0881L6.69197 7.20207C6.71241 6.87047 6.79416 6.58031 6.93723 6.33161C7.08029 6.11054 7.29489 6 7.58102 6L9.60438 6ZM14.5095 6C14.6526 6 14.7752 6.06909 14.8774 6.20725C14.9591 6.34542 15 6.51123 15 6.70466C15 6.92574 14.9693 7.14681 14.908 7.36788L13.2832 13.0466C13.181 13.323 13.0686 13.544 12.946 13.7098C12.8234 13.9033 12.6394 14 12.3942 14H11.3825C11.219 14 11.0964 13.9171 11.0146 13.7513C10.9124 13.5855 10.8818 13.3644 10.9226 13.0881L11.5971 7.20207C11.6175 6.87047 11.6993 6.58031 11.8423 6.33161C11.9854 6.11054 12.1898 6 12.4555 6L14.5095 6Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <p className="font-krub font-medium text-[8px] sm:text-[10px] md:text-xs lg:text-base 2xl:text-xl">
                    {test.comment}
                  </p>
                  <div className="flex">
                    {[...Array(test.stars)].map((e, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
                      >
                        <path
                          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                          fill="#FDAF3B"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 bg-gradient-to-b from-[#B31D1D] via-[#CF7878] to-[#F7F7F7] z-0 opacity-60 w-[85%] h-[90%]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[40%] flex flex-col justify-center md:justify-start md:pt-6 space-y-2 xl:space-y-8 text-center">
        <p className="font-bebas text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] text-white">
          ¿QUÉ OPINAN NUESTROS CLIENTES?
        </p>
        <div className="flex justify-center space-x-2 xl:space-x-8">
          <button onClick={previous}>
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
          <button onClick={next}>
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
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
