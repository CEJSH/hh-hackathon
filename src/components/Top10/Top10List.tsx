import { IMAGES } from "@/mock/data";
import Carousel from "./Carousel";

export default function Top10List() {
  return (
    <div className="px-6 py-4 mt-3">
      <div className="flex justify-space text-lg md:text-2xl font-bold">
        추천 아티클
      </div>
      <Carousel images={IMAGES.map((img: string) => img)} />
    </div>
  );
}
