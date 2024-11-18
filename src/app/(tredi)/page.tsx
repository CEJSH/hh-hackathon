"use client";
import FullPageLoader from "@/components/FullpageLoader";
import ResultListSection from "@/components/ResultListSection";
import Top10List from "@/components/Top10/Top10List";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, useState } from "react";
const queryClient = new QueryClient();

export default function Home() {
  const [readyToPoll, setReadyToPoll] = useState(false);

  const 선택결과정보를가지나 = true;

  if (readyToPoll) {
    return <FullPageLoader message={"READY"} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={<FullPageLoader message={"검색결과를 기다리는 중입니다"} />}
      >
        <main className="max-w-screen-lg mx-auto h-full">
          <Suspense fallback={<div>로딩중</div>}>
            <Top10List />
          </Suspense>
          {선택결과정보를가지나 && <PollingSection />}
        </main>
      </Suspense>
    </QueryClientProvider>
  );
}

// Polling 로직을 별도 컴포넌트로 분리
function PollingSection() {
  return <ResultListSection />;
}
