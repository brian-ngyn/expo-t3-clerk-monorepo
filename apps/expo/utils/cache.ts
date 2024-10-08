import { TokenCache } from "@clerk/clerk-expo/dist/cache/types";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

export async function saveToken(key: string, value: string) {
  // console.log("Save token", key, value);
  await SecureStore.setItemAsync(key, value);
}

export async function getToken(key: string) {
  const value = await SecureStore.getItemAsync(key);
  return value;
}

// SecureStore is not supported on the web
// https://github.com/expo/expo/issues/7744#issuecomment-611093485
export const tokenCache: TokenCache | undefined =
  Platform.OS !== "web"
    ? {
        getToken,
        saveToken,
      }
    : undefined;
