import { useCarousel } from "./useCarousel";

function OurServiceCarousel({
  cardsContent,
}: {
  cardsContent: Record<string, string>[];
}) {
  const { currentIndex, next, previous } =
    useCarousel<Record<string, string>>(cardsContent);

  return (
    <div className="relative overflow-hidden h-full">
      <button className="absolute top-1/2 transform -translate-y-1/2 left-[4vw] z-10" onClick={previous}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-square-rounded-chevron-left w-12 h-12 xl:w-[76px] xl:h-[76px]"
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
      <div
        className="flex transition-transform ease-out duration-500 h-full items-center"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cardsContent.map((card, index) => (
          <div
            className="flex justify-center items-center w-[100%] shrink-0 py-4"
            key={card.title}
          >
            <div className="relative w-[90%] xl:w-[80%] h-[95%] ">
              <div className="relative border-[5px] border-white rounded-3xl h-83 w-60 p-5 pt-8 flex flex-col space-y-2 mx-auto">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-16 h-16 mx-auto"
                />
                <h3 className="font-dm text-center text-white font-bold">
                  {card.title}
                </h3>
                <p className="font-dm text-white">{card.text}</p>
                <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 bg-primary-dark w-32 h-2 rounded-b-full"></div>
                <div className="absolute flex -top-7 left-1/2 transform -translate-x-1/2 border-2 border-primary-dark bg-white rounded-full w-10 h-10 place-content-center place-items-center text-primary-dark font-bold text-xl">
                  {" "}
                  {index + 1}{" "}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="absolute top-1/2 transform -translate-y-1/2 right-[4vw] z-10" onClick={next}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-square-rounded-chevron-right w-12 h-12 xl:w-[76px] xl:h-[76px]"
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
  );
}

export default OurServiceCarousel;
