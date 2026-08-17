import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      "@assets": "./public/assets",
    },
    rules: {
      "./public/assets/**/*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  webpack(config) {
    config.resolve.alias["@assets"] = path.join(__dirname, "public/assets");
    config.module.rules.push({
      test: /\.svg$/,
      include: path.join(__dirname, "public/assets"),
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
