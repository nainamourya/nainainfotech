import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";

const hostname = "https://www.nainainfotech.com";

const links = [
  { url: "/", priority: 1.0 },
  { url: "/about", priority: 0.8 },
  { url: "/services/website-design", priority: 0.9 },
  { url: "/services/advanced-seo", priority: 0.9 },
  { url: "/services/logo-design", priority: 0.9 },
  { url: "/services/post-design", priority: 0.9 },
  { url: "/blog", priority: 0.7 },
  { url: "/contact", priority: 0.7 },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });

  links.forEach((link) => sitemap.write(link));
  sitemap.end();

  const sitemapData = await streamToPromise(sitemap);
  fs.writeFileSync("./public/sitemap.xml", sitemapData.toString());

  console.log("✅ Sitemap generated successfully!");
}

generateSitemap();
