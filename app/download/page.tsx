import { headers } from "next/headers";
import DownloadClient from "./DownloadClient";

export type Platform = "mac" | "windows" | "ios" | "android" | "unknown";

function detectPlatform(uaRaw: string): Platform {
  const ua = uaRaw.toLowerCase();

  if (ua.includes("android")) return "android";
  if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod")) return "ios";
  if (ua.includes("windows")) return "windows";
  if (ua.includes("macintosh") || ua.includes("mac os x")) return "mac";

  return "unknown";
}

export default async function Page() {
  const headersList = await headers();
  const ua = headersList.get("user-agent") ?? "";
  const platform = detectPlatform(ua);

  return <DownloadClient platform={platform} />;
}
