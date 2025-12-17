import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 빌드 시 TypeScript/ESLint 에러 무시
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 이미지 도메인 설정
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
