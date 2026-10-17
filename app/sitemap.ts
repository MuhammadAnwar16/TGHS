import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://taxilagardens.pk";

  const routes = [
    "",
    "/about",
    "/plots",
    "/master-plan",
    "/approvals",
    "/location",
    "/amenities",
    "/gallery",
    "/updates",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" || route === "/plots" || route === "/updates" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/plots" || route === "/master-plan" ? 0.9 : 0.8,
  }));
}
