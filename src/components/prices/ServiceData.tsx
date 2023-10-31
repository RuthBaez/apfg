interface ServiceDataTypes {
  serviceType: string;
  comment: string;
}

function ServiceData({
  serviceType,
  comment,
  updateFields,
}: ServiceDataTypes & {
  updateFields: (data: Partial<ServiceDataTypes>) => void;
}) {
  return (
    <div className="flex flex-col space-y-[2.5vw] lg:space-y-[2vw]">
      <p className="font-dm font-bold text-[5vw] lg:text-[1.8vw] mb-[3vw] lg:mb-0 text-center">
        Nuestros Servicios
      </p>
      <p className="text-[#6F6C90] text-[3.2vw] lg:text-[1.3vw] text-center">
        Por favor selecciona el servicio que te interesa para tus sneakers
      </p>
      <div className="flex flex-col space-y-[2vw] lg:space-y-0 lg:flex-row justify-between lg:justify-normal">
        <label
          className={`flex w-[80%] mx-auto lg:w-[33%] lg:place-content-center py-[2vw] lg:py-[1vw] border sm:border-2 ${
            serviceType === "lavado"
              ? "border-[#FF4646] border-2"
              : "border-gray-400"
          } rounded md:rounded-md lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl`}
        >
          <input
            type="radio"
            className="opacity-0 w-[1px]"
            value="lavado"
            name="typeService"
            checked={serviceType === "lavado"}
            onChange={(e) => updateFields({ serviceType: e.target.value })}
            required
          />

          <div className="flex space-x-[0.8vw] lg:space-x-0 w-full lg:place-content-center items-center">
            <img
              className="w-[8vw] lg:w-[2.8vw] mx-[5vw] lg:mx-[0.5vw]"
              src="https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/astro-rescue/prices/knkdrewdxxdeojkrcpo1"
              alt=""
            />
            <span className="text-[3.2vw] lg:text-[1vw] font-medium">
              Área de Lavado
            </span>
          </div>
        </label>
        <label
          className={`flex w-[80%] mx-auto lg:w-[33%] lg:place-content-center py-[2vw] lg:py-[1vw] border sm:border-2 ${
            serviceType === "repaint"
              ? "border-[#FF4646] border-2"
              : "border-gray-400"
          } rounded md:rounded-md lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl`}
        >
          <input
            type="radio"
            className="opacity-0 w-[1px]"
            value="repaint"
            name="typeService"
            checked={serviceType === "repaint"}
            onChange={(e) => updateFields({ serviceType: e.target.value })}
            required
          />
          <div className="flex space-x-[0.8vw] lg:space-x-0 w-full lg:place-content-center items-center">
            <img
              className="w-[8vw] lg:w-[2.8vw] mx-[5vw] lg:mx-[0.5vw]"
              src="https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/astro-rescue/prices/pppdlf8sg7eqjxk8ymgd"
              alt=""
            />
            <span className="text-[3.2vw] lg:text-[1vw] font-medium">
              Área de Repaint
            </span>
          </div>
        </label>
        <label
          className={`flex w-[80%] mx-auto lg:w-[33%] lg:place-content-center py-[2vw] lg:py-[1vw] border sm:border-2 ${
            serviceType === "restauracion"
              ? "border-[#FF4646] border-2"
              : "border-gray-400"
          } rounded md:rounded-md lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl`}
        >
          <input
            type="radio"
            className="opacity-0 w-[1px]"
            value="restauracion"
            name="typeService"
            checked={serviceType === "restauracion"}
            onChange={(e) => updateFields({ serviceType: e.target.value })}
            required
          />
          <div className="flex space-x-[0.8vw] lg:space-x-0 w-full lg:place-content-center items-center">
            <img
              className="w-[8vw] lg:w-[2.8vw] mx-[5vw] lg:mx-[0.5vw]"
              src="https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/astro-rescue/prices/fkxehkrd9d9obwq9h3yk"
              alt=""
            />
            <span className="text-[3.2vw] lg:text-[1vw] font-medium">
              Área de Restauración
            </span>
          </div>
        </label>
      </div>
      <textarea
        className="flex w-full lg:place-content-center border sm:border-2 border-[#FF4646] rounded md:rounded-md lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl py-[1.5vw] lg:py-[0.8vw] px-[3vw] lg:px-[1.3vw] text-[3.5vw] lg:text-[1vw]"
        placeholder="Escriba algún comentario."
        value={comment}
        onChange={(e) => updateFields({ comment: e.target.value })}
        rows={5}
      ></textarea>
    </div>
  );
}

export default ServiceData;
