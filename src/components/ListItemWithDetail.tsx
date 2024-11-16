import React from "react";
import Image from "next/image";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function ListItemWithDetail({
  imageUrl,
  idx,
}: {
  imageUrl: string;
  idx: number;
}) {
  const windowDimensions = useWindowDimensions();
  const imageHeight =
    windowDimensions.width >= 1024
      ? "h-48"
      : windowDimensions.width >= 768
      ? "h-40"
      : "h-32";
  return (
    <>
      <div className={`${imageHeight}`}>
        <Image
          width={600}
          height={300}
          src={imageUrl}
          alt={`${idx + 1}번째 호텔의 이미지`}
          className="w-full h-full !object-cover rounded-md"
        />
      </div>
      <div className="text-[#434343]">
        <span className="text:md sm:text-lg font-bold">title</span>
        <div>
          Hi this is tredi. just wait for a minute please data is being loaded
          something interesting is coming to u...
        </div>
      </div>
    </>
  );
}
