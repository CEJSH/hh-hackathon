import { BounceLoader } from "react-spinners";

function FullPageLoader({ message }: { message?: string }) {
  return (
    <div className="bg-white fixed top-0 right-0 left-0 bottom-0 items-center flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <BounceLoader />
        {message != null ? (
          <>
            <div className="h-[120px]" />
            <span className="font-bold text-[20px] leading-[1.45]">
              {message}
            </span>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default FullPageLoader;
