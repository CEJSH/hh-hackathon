import FullPageLoader from "./FullpageLoader";
import { Dispatch, SetStateAction } from "react";
// import { getSearchPageLink } from "@/src/shared/utils/link/page";

export const SearchForm = ({
  readyToPoll,
  setReadyToPoll,
}: {
  readyToPoll: boolean;
  setReadyToPoll: Dispatch<SetStateAction<boolean>>;
}) => {
  // const [data, setData] = useState([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const queryInput = form.elements.namedItem("query") as HTMLInputElement;
    const queryValue = queryInput?.value ?? "";

    if (queryValue !== "") {
      const fetchData = async () => {
        console.log(queryValue);
        try {
          const response = await fetch(
            "http://13.124.40.2:8080/api/v1/recommendations/search",
            {
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify({ keyword: queryValue }),
            }
          );
          if (!response.ok) {
            throw new Error("Failed to fetch popular item");
          }
          const data = await response.json();
          console.log(data);
          setReadyToPoll(true);
          // console.log(taskId);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  };
  if (readyToPoll) {
    return <FullPageLoader message={"검색결과를 기다리는 중입니다"} />;
  }

  return (
    <form
      className="flex w-full max-w-[692px] h-[40px] sm:px-2 md:px-1"
      onSubmit={handleSubmit}
    >
      <input
        defaultValue={""}
        name="query"
        type="text"
        className="w-full text-gray-900 outline-none px-3 py-2 h-[40px] bg-gray-50 border border-gray-300 rounded-l-[20px] text-base font-normal focus:border-blue-300 placeholder:text-gray-400"
        placeholder="검색"
      />
      <button
        type="submit"
        className="w-[64px] h-[40px] bg-gray-200 border border-gray-300 border-l-0 rounded-r-[20px] cursor-pointer"
      >
        🔍
      </button>
    </form>
  );
};
