import { useState } from "react";

interface UpdatePhotos {
  angle: (File | undefined)[];
  lateral: (File | undefined)[];
  details: (File | undefined)[];
}
interface PreviewPhotos {
  angle: (string | undefined)[];
  lateral: (string | undefined)[];
  details: (string | undefined)[];
}

interface InputFilesProps {
  title: string;
  type: "angle" | "lateral" | "details";
  photos: UpdatePhotos;
  required: boolean;
}

function InputFiles({
  title,
  type,
  photos,
  required,
  updateFields,
  setFormPreviewImages,
  formPreviewImages,
}: InputFilesProps & {
  updateFields: (photos: { photos: UpdatePhotos }) => void;
  setFormPreviewImages: (photos: any) => void;
  formPreviewImages: PreviewPhotos;
}) {
  const initialPhotos: { [key: string]: string }[] = [
    {
      angle:
        formPreviewImages[type][0] ||
        "https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/astro-rescue/prices/rirbeoxncxx9o1i0bjdz",
      lateral:
        formPreviewImages[type][0] ||
        "https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/astro-rescue/prices/obbgie4mkzzzkw9nqq19",
      details: formPreviewImages[type][0] || "",
    },
    {
      angle:
        formPreviewImages[type][1] ||
        "https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/astro-rescue/prices/j9pyn3dwme44lw1tyuoa",
      lateral:
        formPreviewImages[type][1] ||
        "https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/astro-rescue/prices/s1xinktolhwlr71rcwad",
      details: formPreviewImages[type][1] || "",
    },
    {
      angle:
        formPreviewImages[type][2] ||
        "https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/astro-rescue/prices/vfaydqqjw6tzgv2e0x4h",
      lateral:
        formPreviewImages[type][2] ||
        "https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/astro-rescue/prices/nxfowypaphdx1tqrkdzq",
      details: formPreviewImages[type][2] || "",
    },
    {
      angle:
        formPreviewImages[type][3] ||
        "https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/astro-rescue/prices/c2ychwh3m9ymu1schhqf",
      lateral:
        formPreviewImages[type][3] ||
        "https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/astro-rescue/prices/mduymcrpbd8khj9m0zoq",
      details: formPreviewImages[type][3] || "",
    },
  ];

  const [bgImages, setBgImages] =
    useState<{ [key: string]: string }[]>(initialPhotos);
  const [progress, setProgress] = useState(0);
  const [isTooLarge, setIsTooLarge] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  const updatePhoto = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(0);
    setCurrentImageIndex(i);
    const file = e.target.files![0];
    if (file.size <= 10485760) {
      const copyPhotos = { ...photos };
      copyPhotos[type][i] = file;
      updateFields({ photos: { ...copyPhotos } });
      e.target.value = "";
      if (file) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.addEventListener("loadend", () => {
          setBgImages((prev) => {
            const copyPrev = [...prev];
            copyPrev[i][type] = (fileReader.result as string) || "";
            return copyPrev;
          });
          setFormPreviewImages((prev: any) => {
            const copyPrev = { ...prev };
            copyPrev[type][i] = (fileReader.result as string) || "";
            return copyPrev;
          });
          setProgress(100);
        });
        fileReader.addEventListener("progress", (data) => {
          if (data) {
            setProgress((data.loaded / data.total) * 100);
          }
        });
      }
      setIsTooLarge(false)
    } else {
      setIsTooLarge(true)
    }
  };

  const deletePhoto = (i: number) => {
    const copyBgImages = { ...bgImages };
    copyBgImages[i][type] = initialPhotos[i][type];
    const copyPhotos = { ...photos };
    copyPhotos[type][i] = undefined;
    updateFields({ photos: { ...copyPhotos } });
    const copyFormPreviewImages = { ...formPreviewImages };
    copyFormPreviewImages[type][i] = undefined;
    setFormPreviewImages(copyFormPreviewImages);
  };

  return (
    <>
      <p className="font-dm font-bold text-[3.2vw] lg:text-[1.8vw] mb-[1vw]">
        {title}
      </p>
      <div className="w-full grid grid-cols-2 gap-[4vw] rounded-xl bg-black p-[4vw] mb-[6vw]">
        {[...Array(4)].map((item, index) => (
          <div key={`${type}-${index}`}>
            {photos[type][index] ? (
              <div className="relative flex justify-center place-items-center border border-white h-[25vw] lg:h-[13vw]">
                {progress !== 100 && currentImageIndex === index && (
                  <div className="flex place-items-center place-content-center w-full h-full bg-black z-50">
                    <svg
                      className={`absolute animate-spin w-[50%] ${
                        progress === 100 ? "hidden" : ""
                      }`}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="mingcuteLoadingFill0"
                          x1="50%"
                          x2="50%"
                          y1="5.271%"
                          y2="91.793%"
                        >
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop
                            offset="100%"
                            stopColor="#ffffff"
                            stopOpacity=".55"
                          />
                        </linearGradient>
                        <linearGradient
                          id="mingcuteLoadingFill1"
                          x1="50%"
                          x2="50%"
                          y1="15.24%"
                          y2="87.15%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#ffffff"
                            stopOpacity="0"
                          />
                          <stop
                            offset="100%"
                            stopColor="#ffffff"
                            stopOpacity=".55"
                          />
                        </linearGradient>
                      </defs>
                      <g fill="none">
                        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                        <path
                          fill="url(#mingcuteLoadingFill0)"
                          d="M8.749.021a1.5 1.5 0 0 1 .497 2.958A7.502 7.502 0 0 0 3 10.375a7.5 7.5 0 0 0 7.5 7.5v3c-5.799 0-10.5-4.7-10.5-10.5C0 5.23 3.726.865 8.749.021Z"
                          transform="translate(1.5 1.625)"
                        />
                        <path
                          fill="url(#mingcuteLoadingFill1)"
                          d="M15.392 2.673a1.5 1.5 0 0 1 2.119-.115A10.475 10.475 0 0 1 21 10.375c0 5.8-4.701 10.5-10.5 10.5v-3a7.5 7.5 0 0 0 5.007-13.084a1.5 1.5 0 0 1-.115-2.118Z"
                          transform="translate(1.5 1.625)"
                        />
                      </g>
                    </svg>
                  </div>
                )}
                <img
                  className="absolute w-full h-full object-contain"
                  src={bgImages[index][type]}
                  alt=""
                />
                <div
                  className="absolute flex place-content-center place-items-center bg-[#676767] bg-opacity-0 hover:bg-opacity-80 opacity-0 hover:opacity-100 w-full h-full z-10"
                  onClick={() => deletePhoto(index)}
                >
                  <img
                    className="absolute w-[30%]"
                    src="https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/astro-rescue/prices/ahenmeylabrdzcnciuqm"
                    alt=""
                  />
                </div>
              </div>
            ) : (
              <>
                <label
                  className="relative flex justify-center place-items-center border border-white h-[25vw] lg:h-[13vw]"
                  htmlFor={`${type}-${index}`}
                >
                  <div className="absolute bg-[#676767] opacity-50 w-[70%] h-[70%] z-10"></div>
                  <div className="absolute text-white text-[1.5vw] font-black font-inter italic text-center z-10 leading-none">
                    <span className="text-[9vw] lg:text-[4vw]">+</span>
                    <br />
                    <span className="text-[3vw] lg:text-[1.3vw]">Subir</span>
                  </div>
                  <img
                    className="absolute w-[60%]"
                    src={initialPhotos[index][type]}
                    alt=""
                  />
                  <input
                    className="opacity-0 w-[1px]"
                    type="file"
                    accept="image/*"
                    onChange={(e) => updatePhoto(index, e)}
                    id={`${type}-${index}`}
                    required={required}
                  />
                </label>
                {isTooLarge && currentImageIndex === index && (
                  <p className="text-[2.5vw] lg:text-[1vw] text-primary-default text-center mt-1">
                    El archivo es muy grande. Máximo permitido 10mb
                  </p>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default InputFiles;
