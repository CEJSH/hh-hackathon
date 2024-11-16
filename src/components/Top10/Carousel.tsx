"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ListItem from "../ListItem";
import useWindowDimensions from "@/hooks/useWindowDimensions";

function Carousel({ images }: { images: string[] }) {
  const windowDimensions = useWindowDimensions();
  const titles = [
    "GCP Vertex AI Pipelines 사용기",
    "왓챠 추천 서비스 MLOps 적용기 Part2",
    "돈이 되는 Data Analytics",
    "Transactional Outbox message-relay 개선하기",
    "멀티 테넌트 데이터를 격리하고 더 안전하게 만드는 방법",
    "Redis Vs Mongo DB By Item View Count",
    "Service와 Repository를 완전히 분리하기 (with. DDD)",
    "대용량 엑셀 다운로드 OOM(Out Of Memory) 해결 과정",
    "콘텐츠를 조립하는 결제탭 피드 서버의 코드 아키텍처",
    "CSS의 :has() 가상 클래스 사용법",
  ];
  return (
    <Swiper
      className="h-fit"
      spaceBetween={14}
      slidesPerView={
        windowDimensions.width >= 1024
          ? 4
          : windowDimensions.width >= 768
          ? 3
          : 2
      }
    >
      {images?.map((imageUrl, idx) => (
        <SwiperSlide key={imageUrl} className="h-fit">
          <ListItem imageUrl={imageUrl} idx={idx} title={titles} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
