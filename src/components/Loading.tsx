"use client";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function Loading() {
  const windowDimensions = useWindowDimensions();
  const imageHeight =
    windowDimensions.width >= 1024
      ? "h-48"
      : windowDimensions.width >= 768
      ? "h-48"
      : "h-46";
  return (
    <>
      {[...Array(10)].map((e, i) => {
        return (
          <div key={i}>
            <div
              className={`${imageHeight} animate-pulse bg-gray-200 rounded-md`}
            >
              <div className="w-full h-full !object-cover rounded-md" />
            </div>
            <div>
              <div className="animate-pulse w-[100px] bg-gray-200 h-4 mt-2 rounded-sm"></div>
              <div className="animate-pulse w-full bg-gray-200 h-6 mt-2 rounded-sm"></div>
            </div>
          </div>
        );
      })}
    </>
  );
}
