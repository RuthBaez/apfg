import InputFiles from "./InputFiles";

interface PhotoPropsTypes {
  photos: {
    angle: (File | undefined)[];
    lateral: (File | undefined)[];
    details: (File | undefined)[];
  };
}
interface PreviewPhotos {
  angle: (string | undefined)[];
  lateral: (string | undefined)[];
  details: (string | undefined)[];
}

function Photos({
  photos,
  updateFields,
  setFormPreviewImages,
  formPreviewImages,
}: PhotoPropsTypes & {
  updateFields: (partialPhotos: PhotoPropsTypes) => void;
  setFormPreviewImages: (previewPhotos: PreviewPhotos) => void;
  formPreviewImages: PreviewPhotos;
}) {
  return (
    <>
      <InputFiles
        title="ÁNGULOS"
        type="angle"
        photos={photos}
        updateFields={updateFields}
        setFormPreviewImages={setFormPreviewImages}
        formPreviewImages={formPreviewImages}
        required
        />
      <InputFiles
        title="LATERALES"
        type="lateral"
        photos={photos}
        updateFields={updateFields}
        setFormPreviewImages={setFormPreviewImages}
        formPreviewImages={formPreviewImages}
        required
        />
      <InputFiles
        title="DETALLES"
        type="details"
        photos={photos}
        updateFields={updateFields}
        setFormPreviewImages={setFormPreviewImages}
        formPreviewImages={formPreviewImages}
        required={false}
      />
    </>
  );
}

export default Photos;
