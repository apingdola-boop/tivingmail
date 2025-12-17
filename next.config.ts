import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 빌드 시 TypeScript 에러 무시
  typescript: {
    ignoreBuildErrors: true,
  },
  // 이미지 최적화 비활성화 (정적 배포용)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
