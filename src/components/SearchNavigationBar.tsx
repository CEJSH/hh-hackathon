"use client";
import Image from "next/image";
import { SearchForm } from "./SearchForm";
import Link from "next/link";
import { useState } from "react";

export const NAVIGATION_BAR_HEIGHT = "56px";

export const SearchNavigationBar = () => {
  const [readyToPoll, setReadyToPoll] = useState(false);
  return (
    <nav className="w-full fixed z-[9000] top-0 left-0 h-[56px] bg-gray-50 sm:p-0 md:px-4 flex justify-between items-center">
      <div className="flex justify-start items-center h-full flex-1">
        <Link href={"/"}>
          <div className="flex items-center box-content w-[94px] h-[20px] px-[14px] fill-gray-900">
            <Image alt="logo" src="/logo.png" width={94} height={20} />
          </div>
        </Link>
      </div>
      <div className="flex justify-center items-center h-full flex-grow">
        <SearchForm readyToPoll={readyToPoll} setReadyToPoll={setReadyToPoll} />
      </div>
      <div className="flex justify-end items-center h-full sm:flex-0 md:flex-1" />
    </nav>
  );
};
