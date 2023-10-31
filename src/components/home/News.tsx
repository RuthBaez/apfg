import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./News.css";

const newCards = [
  {
    title: "MISIÓN",
    description:
      "Brindar servicios Generales, de alta calidad con recursos humanos capacitados, comprometidos, y con sentimiento de posesión propia de la empresa, para satisfacer los requerimientos de nuestros clientes.",
  },
  {
    title: "VISIÓN",
    description:
      "Ser la empresa líder en servicios Generales, expandiendo nuestra presencia a nivel nacional y garantizando un excelente servicio.",
  },
];

function News() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="mx-auto max-w-screen-xl px-4">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[60%] flex flex-col items-center place-content-center space-y-4 xl:space-y-8">
          <p className="w-full lg:w-[88%] font-bebas text-xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white text-center mt-10">
            NUESTRA MISIÓN Y VISIÓN
          </p>
          <button
            className="font-inter bg-white font-black text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-2xl rounded-md py-1 px-8 lg:py-2 lg:px-10 2xl:py-3 2xl:px-15"
            onClick={() => setShowMore(!showMore)}
          >
            {`${showMore ? "Ver menos" : "Ver más"}`}
          </button>
        </div>
        <div className="w-full lg:w-[40%] mt-4 lg:mt-0">
        <div className="w-full bg-[url('https://res.cloudinary.com/de5c9p8wb/image/upload/f_webp,fl_awebp,q_auto/v1698714475/loveclear_ngrhjg')] bg-cover bg-center bg-no-repeat shadow-[inset_20px_0_20px_0_rgba(0,0,0,1)] lg:shadow-[inset_30px_0_30px_0_rgba(0,0,0,1)] transition- pt-[100%] lg:pt-[30%] xl:pt-[100%]"></div>
        </div>
      </div>
      <CSSTransition
        in={showMore}
        classNames="fade"
        timeout={400}
        unmountOnExit
      >
        <div className="flex flex-col lg:flex-row justify-center mt-8">
          {showMore &&
            newCards.map((card, index) => (
              <div
                key={index}
                className="relative border-[5px] border-white rounded-3xl w-full lg:w-[50%] xl:w-[40%] p-4 lg:p-5 xl:p-6 flex flex-col space-y-2 mx-auto mt-4 lg:mt-0"
              >
                <h3 className="font-dm text-center text-white font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                  {card.title}
                </h3>
                <p className="font-dm text-white text-base sm:text-lg lg:text-xl xl:text-2xl">
                  {card.description}
                </p>
                <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 bg-primary-dark w-32 h-2 rounded-b-full"></div>
                <div className="absolute flex -top-7 left-1/2 transform -translate-x-1/2 border-2 border-primary-dark bg-white rounded-full w-10 h-10 place-content-center place-items-center text-primary-dark font-bold text-xl">
                  {index + 1}
                </div>
              </div>
            ))}
        </div>
      </CSSTransition>
    </section>
  );
}

export default News;
