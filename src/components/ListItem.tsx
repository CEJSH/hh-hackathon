import useWindowDimensions from "@/hooks/useWindowDimensions";
import Image from "next/image";
import Link from "next/link";

export default function ListItem({
  imageUrl,
  idx,
  title,
}: {
  imageUrl: string;
  idx: number;
  title?: string[];
  className?: string;
}) {
  const windowDimensions = useWindowDimensions();
  const imageHeight =
    windowDimensions.width >= 1024
      ? "h-44"
      : windowDimensions.width >= 768
      ? "h-32"
      : "h-24";

  return (
    <Link href={}>
      <div className={`${imageHeight}`}>
        <Image
          width={600}
          height={300}
          src={imageUrl}
          alt={`${idx + 1}번째 호텔의 이미지`}
          className="w-full h-full !object-cover rounded-md"
        />
      </div>
      <div className="px-[2px]">
        <span className="h-[45px] inline-block mt-2 text:md sm:text-lg font-bold text-gray-800 !leading-[125%]">
          {title![idx]}
        </span>
        <div>description and summary</div>
      </div>
    </Link>
  );
}
