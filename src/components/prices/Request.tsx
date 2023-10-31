import { useState, type FormEvent } from "react";
import { useMultistepForm } from "./useMultistepForm";
import UserData from "./UserData";
import ServiceData from "./ServiceData";
import Photos from "./Photos";
import Send from "./Send";

function Request() {
  interface InitialData {
    name: string;
    city: string;
    serviceType: string;
    comment: string;
    photos: {
      angle: (File | undefined)[];
      lateral: (File | undefined)[];
      details: (File | undefined)[];
    };
  }

  const [initialData, setInitialData] = useState<InitialData>({
    name: "",
    city: "",
    serviceType: "",
    comment: "",
    photos: {
      angle: [],
      lateral: [],
      details: [],
    },
  });

  const [formPreviewImages, setFormPreviewImages] = useState<{
    angle: (string | undefined)[];
    lateral: (string | undefined)[];
    details: (string | undefined)[];
  }>({
    angle: [] as string[],
    lateral: [] as string[],
    details: [] as string[],
  });
  const [isLoading, setIsLoading] = useState(false);

  const updateFields = (newData: Partial<InitialData>) => {
    setInitialData({ ...initialData, ...newData });
  };

  const {
    step,
    steps,
    currentStepIndex,
    next,
    back,
    goTo,
    isFirstStep,
    isLastStep,
  } = useMultistepForm([
    <UserData {...initialData} updateFields={updateFields} />,
    <ServiceData {...initialData} updateFields={updateFields} />,
    <Photos
      {...initialData}
      updateFields={updateFields}
      setFormPreviewImages={setFormPreviewImages}
      formPreviewImages={formPreviewImages}
    />,
    <Send isLoading={isLoading} />,
  ]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isLastStep) {
      setIsLoading(true);
      const url = `https://api.cloudinary.com/v1_1/${
        import.meta.env.CLOUD_NAME || import.meta.env.PUBLIC_CLOUD_NAME
      }/image/upload`;
      const photos = Object.entries({ ...initialData.photos }).reduce(
        (prev: Array<File>, cur: any) => {
          return [...prev, ...cur[1]];
        },
        []
      );
      let message = `Hola, estoy interesado en sus servicios, mis datos son:\n\nNombre: ${initialData.name}\nCiudad: ${initialData.city}\nTipo de servicio: ${initialData.serviceType}\nComentario: ${initialData.comment}\nFotos:\n`;

      for (let i = 0; i < photos.length; i++) {
        const formData = new FormData();
        let file = photos[i];
        if (file) {
          formData.append("file", file);
          formData.append(
            "upload_preset",
            `${
              import.meta.env.UPLOAD_PRESET ||
              import.meta.env.PUBLIC_UPLOAD_PRESET
            }`
          );
          formData.append(
            "public_id",
            i < 4
              ? `angulo-${i + 1}`
              : i < 8
              ? `lateral-${(i % 4) + 1}`
              : `detalle-${(i % 4) + 1}`
          );
          formData.append("folder", `${initialData.name}`);
          const response = await fetch(url, {
            method: "POST",
            body: formData,
          });
          const json = await response.json();
          message +=
            i < 4
              ? `Angulo ${i + 1}: ${json.secure_url}\n`
              : i < 8
              ? `Lateral ${(i % 4) + 1}: ${json.secure_url}\n`
              : `Detalle ${(i % 4) + 1}: ${json.secure_url}\n`;
        }
      }
      const encodedMsg = encodeURI(message);
      window.open(
        `https://web.whatsapp.com/send?phone=${
          import.meta.env.PHONE || import.meta.env.PUBLIC_PHONE
        }&text=${encodedMsg}&app_absent=0`, "_self"
      );
      setIsLoading(false);
      setInitialData({
        name: "",
        city: "",
        serviceType: "",
        comment: "",
        photos: {
          angle: [],
          lateral: [],
          details: [],
        },
      });
      setFormPreviewImages({
        angle: [],
        lateral: [],
        details: [],
      })
      goTo(0);
      return;
    }
    next();
  };

  return (
    <div
      id="request"
      className="border border-[#555555] w-[90vw] lg:w-[70vw] mx-auto rounded p-[4vw] mt-[4vw]"
    >
      <p className="font-dm font-bold text-[6vw] lg:text-[3vw] text-white text-center mb-[3vw]">
        Solicita el rescate de tus sneakers!
      </p>
      <p className="font-dm text-[3.5vw] lg:text-[1.6vw] text-white text-center mb-[3vw]">
        Por favor llena el siguiente formulario para planificar el rescate de
        tus sneakers. Siéntete libre de escribir el mayor detalle posible.
      </p>
      <p
        className={`font-dm text-[3.5vw] lg:text-[1.6vw] text-white text-center mb-[3vw] ${
          currentStepIndex === 2 ? "" : "hidden"
        }`}
      >
        Por favor mándanos fotos iluminadas para ver el estado de tus sneakers
      </p>
      <div className="bg-white w-full lg:w-[80%] p-[5vw] mx-auto rounded-lg font-dm">
        <form onSubmit={onSubmit}>
          <div className="flex mx-auto w-full items-center justify-between space-x-[1vw]">
            <div
              className={`flex place-content-center place-items-center ${
                currentStepIndex >= 0 ? "bg-[#AA0000]" : "bg-[#B0B0B0]"
              } rounded-full min-w-[6vw] min-h-[6vw] lg:min-w-[3vw] lg:min-h-[3vw]`}
            >
              <span className="text-[2.2vw] lg:text-[1.3vw] text-white">1</span>
            </div>
            <div
              className={`${
                currentStepIndex > 0 ? "bg-[#AA0000]" : "bg-[#B0B0B0]"
              } w-full h-[1vw] lg:h-[0.5vw] rounded-full`}
            ></div>
            <div
              className={`flex place-content-center place-items-center ${
                currentStepIndex >= 1 ? "bg-[#AA0000]" : "bg-[#B0B0B0]"
              } rounded-full min-w-[6vw] min-h-[6vw] lg:min-w-[3vw] lg:min-h-[3vw]`}
            >
              <span className="text-[2.2vw] lg:text-[1.3vw] text-white">2</span>
            </div>
            <div
              className={`${
                currentStepIndex > 1 ? "bg-[#AA0000]" : "bg-[#B0B0B0]"
              } w-full h-[1vw] lg:h-[0.5vw] rounded-full`}
            ></div>
            <div
              className={`flex place-content-center place-items-center ${
                currentStepIndex >= 2 ? "bg-[#AA0000]" : "bg-[#B0B0B0]"
              } rounded-full min-w-[6vw] min-h-[6vw] lg:min-w-[3vw] lg:min-h-[3vw]`}
            >
              <span className="text-[2.2vw] lg:text-[1.3vw] text-white">3</span>
            </div>
            <div
              className={`${
                currentStepIndex > 2 ? "bg-[#AA0000]" : "bg-[#B0B0B0]"
              } w-full h-[1vw] lg:h-[0.5vw] rounded-full`}
            ></div>
            <div
              className={`flex place-content-center place-items-center ${
                currentStepIndex >= 3 ? "bg-[#AA0000]" : "bg-[#B0B0B0]"
              } rounded-full min-w-[6vw] min-h-[6vw] lg:min-w-[3vw] lg:min-h-[3vw]`}
            >
              <span className="text-[2.2vw] lg:text-[1.3vw] text-white">4</span>
            </div>
          </div>
          <hr className="mx-auto w-full border-gray-300  border lg:border-2 my-[4vw] lg:my-[2vw]" />
          <div className="absolute top-2 right-2">
            {currentStepIndex + 1}/{steps.length}
          </div>
          {step}
          <div
            className={`flex mt-[4vw] ${
              isFirstStep ? "justify-end" : "justify-between"
            }`}
          >
            {!isFirstStep && !isLoading && (
              <button
                className="bg-white text-primary border border-primary font-medium px-[3vw] py-[1.2vw] lg:px-[1.5vw] lg:py-[0.8vw] rounded-full text-[3vw] lg:text-[1vw]"
                onClick={back}
                type="button"
              >
                ANTERIOR
              </button>
            )}
            {!isLoading && (
              <button
                className="bg-primary-dark text-white border border-primary font-medium px-[3vw] py-[1.2vw] lg:px-[1.5vw] lg:py-[0.8vw] rounded-full text-[3vw] lg:text-[1vw]"
                type="submit"
              >
                {isLastStep ? "ENVIAR" : "SIGUIENTE"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Request;
