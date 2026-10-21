import { renderBrandOgImage } from "@/lib/seo/brand-og-image";
import { OG_CONTENT_TYPE, OG_SIZE } from "@/lib/seo/event-og-image";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "JoinTheEvent | Open Source Event Platform";

export default function Image() {
  return renderBrandOgImage({
    subtitle:
      "Create, manage, and discover events. The open source modern event management platform.",
    title: "Events, end to end.",
  });
}
