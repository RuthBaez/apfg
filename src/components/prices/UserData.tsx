interface UserDataTypes {
  name: string;
  city: string;
}

function UserData({
  name,
  city,
  updateFields,
}: UserDataTypes & { updateFields: (data: Partial<UserDataTypes>) => void }) {
  return (
    <div>
      <p className="font-dm font-bold text-[5vw] lg:text-[1.8vw] mb-[3vw] lg:mb-[1.5vw]">
        Detalles de Contacto
      </p>
      <div className="flex flex-col space-y-[3vw] lg:space-y-0 lg:flex-row justify-between">
        <div className="flex flex-col w-full mx-auto lg:mx-0 lg:w-[45%]">
          <span className="font-dm text-[3.5vw] lg:text-[1vw] mb-[1.5vw] w-[17vw]">
            Nombre
          </span>
          <input
            className="border rounded-full border-gray-500 py-[1.4vw] px-[4vw] lg:py-[0.5vw] lg:px-[1.5vw] text-[3.5vw] lg:text-[1vw]"
            type="text"
            value={name}
            onChange={(e) => updateFields({ name: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col w-full mx-auto lg:mx-0 lg:w-[45%]">
          <span className="font-dm text-[3.5vw] lg:text-[1vw] mb-[1.5vw] w-[17vw]">
            Ciudad
          </span>
          <input
            className="border rounded-full border-gray-500 py-[1.4vw] px-[4vw] lg:py-[0.5vw] lg:px-[1.5vw] text-[3.5vw] lg:text-[1vw]"
            type="text"
            value={city}
            onChange={(e) => updateFields({ city: e.target.value })}
            required
          />
        </div>
      </div>
    </div>
  );
}

export default UserData;
