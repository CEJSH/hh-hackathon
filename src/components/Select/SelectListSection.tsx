import { MouseEvent, useCallback, useState } from "react";

export default function SelectListSection({
  onSelectComplete,
}: {
  onSelectComplete: (values: string[]) => void;
}) {
  const [selected, setSelected] = useState<string[]>([]);

  const selectOptions = ["Web", "DB", "AI", "Big Data"];
  const handleButtonClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const $button = e.target as HTMLButtonElement;
    const buttonName = $button.name;
    console.log($button.dataset);
    setSelected((prevValues) => [...prevValues, buttonName as string]);
  }, []);

  console.log(selected);
  return (
    <div className="flex flex-col">
      <span className="font-bold text-[20px] text-[#434343] text-center">
        가장 관심가는 분야를 선택해 주세요 (중복 가능)
      </span>
      <div className="p-12 py-8 grid grid-cols-2 gap-16 gap-y-18 h-[40dvh] mt-4 rounded-md">
        {selectOptions.map((option) => (
          <div
            className="w-full h-full flex justify-center items-center"
            key={option}
          >
            <button
              className={`w-1/2 h-full rounded-md bg-violet-100 text-md md:text-lg text-[#434343] ${
                selected.includes(option)
                  ? "bg-white text-gray-300"
                  : "bg-violet-100 text-[#434343]"
              }`}
              name={option}
              onClick={handleButtonClick}
            >
              {option}
            </button>
          </div>
        ))}
      </div>
      <div
        onClick={() => {
          onSelectComplete(selected);
        }}
        className="bg-teal-50 w-3/5 self-center text-center text-sm px-6 py-6 rounded-2xl cursor-pointer h-full text-[#434343] mt-4"
      >
        ✔️
      </div>
    </div>
  );
}
