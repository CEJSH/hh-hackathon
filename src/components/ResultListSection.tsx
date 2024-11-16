"use client";
import { useEffect, useState } from "react";
import ListItemWithDetail from "./ListItemWithDetail";
import Loading from "./Loading";
import { usePopularItemImagesOnly } from "./Top10/hooks/usePopularItem";
import SelectListSection from "./Select/SelectListSection";
import {
  useSelectedItemResults,
  useTaskStatus,
} from "./Select/hooks/useSelectItems";

interface Item {
  rank: number;
  url: string;
  title: string;
  thumbnail: string;
}

export default function ResultListSection() {
  const [selectedCategory, setSelectedCategory] = useState<string[] | null>(
    null
  );
  const [taskId, setTaskId] = useState<string>("");

  const { data, isLoading } = useTaskStatus({
    selected: taskId,
  });
  console.log(data, "data");
  console.log(isLoading, "isLoading");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hadSelected = localStorage.getItem("hackathon");
      if (hadSelected != null) {
        setSelectedCategory(JSON.parse(hadSelected));
      }
    }
  }, []);

  useEffect(() => {
    if (selectedCategory != null) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "http://localhost:8080/api/v1/recommendations/select",
            {
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify({ keywords: selectedCategory }),
            }
          );
          if (!response.ok) {
            throw new Error("Failed to fetch popular item");
          }
          const data = await response.json();
          const taskId = data.data.taskId;
          console.log(taskId);
          setTaskId(taskId);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [selectedCategory]);

  const { data: imageData } = usePopularItemImagesOnly();

  const { data: selectionBasedData } = useSelectedItemResults(taskId, !!taskId);

  const handleSelectComplete = (selected: string[]) => {
    setSelectedCategory((prevValues) => {
      if (prevValues == null) {
        return [...selected];
      }
      return [...prevValues, ...selected];
    });
  };
  if (selectedCategory == null) {
    return <SelectListSection onSelectComplete={handleSelectComplete} />;
  }
  const images = imageData.data;

  const resultImages = selectionBasedData.data.map(
    (item: Item) => item.thumbnail
  );

  return (
    <div className="px-6 py-4 h-full">
      <span className="inline-block font-bold lg:text-xl md:text-lg text-md mb-[8px] md:mb-[12px]">
        유저 맞춤 트레디를 알려드려요
      </span>
      <ul className="h-full grid grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image: string, idx: number) => (
          <li key={`image-${idx}`} className="list-none">
            <ListItemWithDetail imageUrl={image ?? resultImages} idx={1} />
          </li>
        ))}
        {true && <Loading />}
      </ul>
    </div>
  );
}
