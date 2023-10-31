import { FormEvent, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./News.css";

function News() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      name,
      email,
    });
    setEmail("");
    setName("");
  };

  const nodeRef = useRef(null);

  return (
    <section>
      <div className="flex">
        <div className="w-[60%] flex flex-col items-center place-content-center space-y-4 xl:space-y-8">
          <p className="w-[88%] font-bebas text-xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white text-center">
            LE GUSTARÍA REGISTRARSE Y RECIBIR NUESTRAS NOVEDADES?
          </p>
          <button
            className="font-inter bg-white font-black text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-2xl rounded-md py-1 px-8 lg:py-2 lg:px-10 2xl:py-3 2xl:px-15"
            onClick={() => setShow(!show)}
          >
            {`${show ? "Ver menos" : "Ver más"}`}
          </button>
        </div>
        <div className="w-[40%]">
          <div className="w-full pt-[75%] bg-[url('https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/astro-rescue/home/feq1520re6lppcpm6y0o')] bg-contain bg-center bg-no-repeat shadow-[inset_20px_0_20px_0_rgba(0,0,0,1)] lg:shadow-[inset_30px_0_30px_0_rgba(0,0,0,1)] transition-`"></div>
        </div>
      </div>
      <CSSTransition
        in={show}
        nodeRef={nodeRef}
        classNames="fade"
        timeout={400}
        unmountOnExit
      >
        <form onSubmit={handleSubmit} ref={nodeRef}>
          <div className="flex flex-col justify-center space-y-4 lg:space-y-6 text-white mt-8 lg:mt-0 w-[75%] lg:w-[50%] ml-6 lg:ml-16">
            <div>
              <span className="font-antonio lg:font-inter font-bold text-xs sm:text-base lg:text-xl 2xl:text-2xl">
                Regístrate para recibir los correos electrónicos y enterarte de
                todos nuestros servicios.
              </span>
            </div>
            <div className="flex flex-col space-y-4 lg:space-y-6 text-center">
              <p className="font-dm text-[11px] sm:text-sm lg:text-base 2xl:text-xl lg:text-left">
                Nombre*
              </p>
              <input
                className="rounded-full lg:rounded-none bg-black border border-white px-3 py-1 lg:py-2 2xl:py-3 2xl:px-4 mx-auto w-[70%] lg:w-full text-xs sm:text-sm lg:text-base 2xl:text-xl"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="font-dm text-[11px] sm:text-sm lg:text-base 2xl:text-xl lg:text-left">
                Correo electrónico*
              </p>
              <input
                className="rounded-full lg:rounded-none bg-black border border-white px-3 py-1 lg:py-2 2xl:py-3 2xl:px-4 mx-auto w-[70%] lg:w-full text-xs sm:text-sm lg:text-base 2xl:text-xl"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="lg:text-left">
                <button
                  type="submit"
                  className="font-inter font-black text-[8px] sm:text-xs lg:text-base 2xl:text-xl bg-[#AA0000] py-1 px-3 rounded"
                >
                  REGISTRARSE
                </button>
              </div>
            </div>
          </div>
        </form>
      </CSSTransition>
    </section>
  );
}

export default News;
