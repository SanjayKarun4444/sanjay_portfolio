import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "../app/globals.css";

const SOCIALS = [
  {
    label: "LinkedIn",
    handle: "@sanjaykarun",
    href: "https://www.linkedin.com/in/sanjaykarun/",
    icon: "/linkedin_image.png",
  },
  {
    label: "Instagram",
    handle: "@sanjayky_",
    href: "https://www.instagram.com/sanjayky_/",
    icon: "/instagram_image.jpeg",
  },
  {
    label: "SoundCloud",
    handle: "sanjay-karunamoorthy",
    href: "https://soundcloud.com/sanjay-karunamoorthy",
    icon: "/soundcloud_image.png",
  },
];

export default function Social() {
  return (
    <ThemeProvider attribute="class">
      <Navbar />

      <main className="mx-auto max-w-3xl px-4 py-10">
        <section style={{ paddingTop: "var(--sp-8)", paddingBottom: "var(--sp-12)" }}>

          <span className="eyebrow">Connect</span>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-hero)",
            fontWeight: 600,
            letterSpacing: "var(--ls-tight)",
            lineHeight: "var(--lh-hero)",
            color: "var(--color-text-1)",
            marginTop: "var(--sp-2)",
            marginBottom: "var(--sp-8)",
          }}>
            Socials
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-2)" }}>
            {SOCIALS.map(({ label, handle, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--sp-3)",
                  padding: "var(--sp-3) var(--sp-4)",
                  textDecoration: "none",
                  /* Override the default anchor opacity-on-hover from globals.
                     The card hover handles the visual feedback instead. */
                  opacity: 1,
                }}
              >
                <img
                  src={icon}
                  alt={label}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "var(--radius-md)",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p style={{ color: "var(--color-text-1)", fontWeight: 500, margin: 0, fontSize: "var(--text-body)" }}>
                    {label}
                  </p>
                  <p style={{ color: "var(--color-text-3)", fontSize: "var(--text-caption)", margin: 0, marginTop: "2px" }}>
                    {handle}
                  </p>
                </div>
                <span style={{ marginLeft: "auto", color: "var(--color-text-3)", fontSize: "var(--text-caption)" }}>
                  ↗
                </span>
              </a>
            ))}
          </div>

        </section>
      </main>

      <Footer />
    </ThemeProvider>
  );
}
