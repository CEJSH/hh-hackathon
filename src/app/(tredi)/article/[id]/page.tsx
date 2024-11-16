import Image from "next/image";
import React from "react";
interface ParamsProps {
  params: { id: string };
  searchParams: { page: string };
}
export default function ArticlePage({ params, searchParams }: ParamsProps) {
  console.log(params, searchParams);
  const article = {
    title: "123",
    description: "123",
    id: "id",
    address: "address",
    category: "category",
  };

  return (
    <div className="h-full max-w-5xl px-4 py-8 mx-auto">
      <div className="flex flex-col justify-center items-center py-4 nd:py-0">
        <Image
          width={600}
          height={300}
          src={
            "https://res.cloudinary.com/dzznz3aqo/image/upload/fl_preserve_transparency/v1731689423/IMG_7036_t8hd67.jpg?_s=public-apps"
          }
          alt={`이미지`}
          className={`w-full h-[200px] md:h-[240px] lg:h-[300px] object-cover rounded-md`}
        />
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            {article?.title}
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            {article?.title}
          </p>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          {article?.category}
        </dd>
      </div>
    </div>
  );
}
