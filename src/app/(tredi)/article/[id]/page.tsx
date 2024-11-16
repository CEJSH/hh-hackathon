import Image from "next/image";
import React from "react";

export default function ArticlePage() {
  const article = {
    title: "서버리스 ML 훈련 인프라 구축하기: Vertex AI Pipelines & TFX",
    description: "123",
    id: "id",
    address: "address",
    category: `당근 ML 인프라팀은 Vertex AI Pipelines와 TensorFlow Extended(TFX)를 활용해 머신러닝 모델을 효과적으로 관리하고 있어요. Vertex AI Pipelines는 머신러닝 파이프라인을 Serverless 방식으로 관리할 수 있는 Google Cloud Platform의 서비스로, 데이터 전처리, 모델 훈련, 평가, 배포 등을 자동화하는 데 도움을 줍니다. 당근은 기존에 사용하던 Kubeflow Pipelines(KFP)에서 Vertex AI Pipelines로 마이그레이션하여 GKE 자원을 제거하고, Kubernetes 클러스터 운영 부담을 덜었어요.

TFX는 머신러닝 파이프라인을 위한 end-to-end 플랫폼으로, 데이터 수집, 변환, 훈련, 배포 등을 위한 컴포넌트를 제공하며, 당근은 이를 통해 모델의 신뢰성 및 유효성을 높이고 있어요. Vertex AI Pipelines와 TFX를 함께 활용함으로써 당근은 머신러닝 워크플로우를 더욱 효율적으로 관리하고, 서비스에 필요한 개발에 집중할 수 있게 되었어요.

당근은 또한 각 서비스 조직이 공통된 ML 인프라 및 MLOps 모듈을 개발하는 데 시간을 낭비하지 않도록, 자주 사용되는 TFX 컴포넌트를 Python Package 형태로 관리하고 공유해 효율성을 높이고 있어요. 이를 통해 다양한 서비스 조직이 빠르게 생산성과 편의성을 얻을 수 있고, 비용 및 성능 최적화에도 유리한 구조를 마련하고 있습니다.

Vertex AI Pipelines는 아티팩트 시각화를 지원해 컴포넌트 간의 관계를 명확하게 보여주며, Recurring Run 기능을 통해 주기적인 모델 학습을 자동화할 수 있어요. 또한 리소스 할당 및 모니터링 기능도 제공하여, 효율적인 리소스 관리와 문제 해결을 돕습니다.`,
  };

  return (
    <div className="h-full max-w-5xl px-4 py-8 mx-auto">
      <div className="flex flex-col justify-center items-center py-4 nd:py-0">
        <Image
          width={600}
          height={300}
          src={
            "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*8XnOHIj5JyKK-gDv0P8qGA.png"
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
