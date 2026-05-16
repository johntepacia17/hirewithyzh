import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const alt = "hirewithyzh | Hire with Ease";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#FAF7F2",
          color: "#1A1A1A",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "78px 92px",
          width: "100%"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "44px",
            width: "100%"
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: "24px"
            }}
          >
            <svg
              aria-label="hirewithyzh"
              height="112"
              role="img"
              viewBox="0 0 112 112"
              width="112"
            >
              <path d="M65 10 98 42 77 42 77 76 53 76 53 42 32 42Z" fill="#6B1320" />
              <path d="M77 76C77 91 66 101 51 101H28V80H49C53 80 56 77 56 73V42H77Z" fill="#1A1A1A" />
            </svg>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px"
              }}
            >
              <div
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "52px",
                  fontWeight: 700,
                  letterSpacing: "-0.05em"
                }}
              >
                hirewithyzh
              </div>
              <div
                style={{
                  color: "#6B6B6B",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase"
                }}
              >
                Hire With Ease
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              maxWidth: "960px"
            }}
          >
            <div
              style={{
                color: "#6B1320",
                fontFamily: "Arial, sans-serif",
                fontSize: "22px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase"
              }}
            >
              {siteConfig.hero.eyebrow}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "84px",
                fontWeight: 600,
                letterSpacing: "-0.04em",
                lineHeight: 0.98
              }}
            >
              <span>Hire top Filipino talent, with&nbsp;</span>
              <span
                style={{
                  color: "#6B1320",
                  fontStyle: "italic"
                }}
              >
                ease
              </span>
              <span>.</span>
            </div>
            <div
              style={{
                color: "#3D3D3D",
                fontFamily: "Arial, sans-serif",
                fontSize: "32px",
                lineHeight: 1.35,
                maxWidth: "880px"
              }}
            >
              Top Filipino talent for global companies, delivered through a
              personal recruitment experience.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
