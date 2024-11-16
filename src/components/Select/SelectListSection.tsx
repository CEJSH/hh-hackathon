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
    setSelected((prevValues) => {
      if (prevValues.includes(buttonName)) {
        const returnArray = prevValues.filter((value) => value != buttonName);
        return returnArray;
      } else return [...prevValues, buttonName as string];
    });
  }, []);

  console.log(selected);
  return (
    <div className="flex flex-col h-full px-[48px]">
      <span className="font-bold text-[20px] text-[#434343] text-center">
        가장 관심가는 분야를 선택해 주세요 (중복 가능)
      </span>
      <div className="p-12 py-6 grid grid-cols-2 gap-4 gap-y-10 h-full mt-4 rounded-md">
        {selectOptions.map((option) => (
          <div
            className="w-full h-full flex justify-center items-center"
            key={option}
          >
            <button
              className={`w-40 h-28 rounded-full bg-violet-100 text-base md:text-md text-[#434343] ${
                selected.includes(option)
                  ? "bg-[#e6f4ff] text-[#003eb3] hover:bg-[#bae0ff]"
                  : "bg-[#1677ff] text-white hover:bg-[#125ec4]"
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
        className="!border-solid box-border !border-2 border-[#1677ff] hover:border-[#e6f4ff] w-3/5 self-center text-center text-sm py-6 rounded-2xl cursor-pointer h-full text-[#434343] mt-4"
      >
        ✔️
      </div>
    </div>
  );
}
