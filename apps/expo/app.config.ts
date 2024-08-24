import { ExpoConfig, ConfigContext } from "@expo/config";

const CLERK_PUBLISHABLE_KEY = "";

const defineConfig = (_ctx: ConfigContext): ExpoConfig => ({
  android: {
    adaptiveIcon: {
      backgroundColor: "#ffffff",
      foregroundImage: "./assets/images/adaptive-icon.png",
    },
  },
  experiments: {
    typedRoutes: true,
  },
  extra: {
    CLERK_PUBLISHABLE_KEY,
    eas: {
      projectId: "",
    },
  },
  icon: "./assets/images/icon.png",
  ios: {
    bundleIdentifier: "com.example.myapp",
    supportsTablet: true,
  },
  name: "my-expo-app",
  orientation: "portrait",
  plugins: ["expo-router"],
  scheme: "myapp",
  slug: "my-expo-app",
  splash: {
    backgroundColor: "#ffffff",
    image: "./assets/images/splash.png",
    resizeMode: "contain",
  },
  userInterfaceStyle: "automatic",
  version: "1.0.0",
  web: {
    bundler: "metro",
    favicon: "./assets/images/favicon.png",
    output: "static",
  },
});

export default defineConfig;
