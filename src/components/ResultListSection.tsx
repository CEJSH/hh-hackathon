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
import Link from "next/link";

interface Item {
  rank: number;
  url: string;
  title: string;
  thumbnail: string;
}

export default function ResultListSection({
  setReadyToPoll,
}: {
  setReadyToPoll: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
            "http://13.124.40.2:8080/api/v1/recommendations/select",
            {
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify({ keyword: selectedCategory }),
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
  const bulidImages = [
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689425/IMG_7134_cfgm7g.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689425/IMG_7135_dkmbpo.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689425/IMG_7133_bpytwf.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689424/IMG_7132_g4pd7y.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689424/IMG_7131_u05drz.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689424/IMG_7125_nsvy4k.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689424/IMG_7123_lwho7e.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689423/IMG_7042_gof0sa.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689423/IMG_7036_t8hd67.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689422/IMG_7387_hbbnkc.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689425/IMG_7134_cfgm7g.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689425/IMG_7134_cfgm7g.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689425/IMG_7135_dkmbpo.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689425/IMG_7133_bpytwf.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689424/IMG_7132_g4pd7y.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689424/IMG_7131_u05drz.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689424/IMG_7125_nsvy4k.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689424/IMG_7123_lwho7e.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689423/IMG_7042_gof0sa.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689423/IMG_7036_t8hd67.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689422/IMG_7387_hbbnkc.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689425/IMG_7134_cfgm7g.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689425/IMG_7134_cfgm7g.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689425/IMG_7135_dkmbpo.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689425/IMG_7133_bpytwf.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689424/IMG_7132_g4pd7y.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689424/IMG_7131_u05drz.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689424/IMG_7125_nsvy4k.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689424/IMG_7123_lwho7e.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689423/IMG_7042_gof0sa.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689423/IMG_7036_t8hd67.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689422/IMG_7387_hbbnkc.jpg?_s=public-apps",
    "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689425/IMG_7134_cfgm7g.jpg?_s=public-apps",
  ];
  const images = imageData?.data ?? bulidImages;

  const resultImages = selectionBasedData?.data?.map(
    (item: Item) => item.thumbnail
  );

  return (
    <div className="px-6 py-4 h-full">
      <span className="inline-block font-bold lg:text-xl md:text-lg text-md mb-[8px] md:mb-[12px]">
        유저 맞춤 트레디를 알려드려요
      </span>
      <ul className="h-full grid grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image: string, idx: number) => (
          <Link key={`image-${idx}`} href={`/article/${idx}`}>
            <li className="list-none">
              <ListItemWithDetail imageUrl={image ?? resultImages} idx={1} />
            </li>
          </Link>
        ))}
        {true && <Loading />}
      </ul>
    </div>
  );
}
