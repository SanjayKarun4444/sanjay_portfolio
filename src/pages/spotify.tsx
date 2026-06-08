import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "../app/globals.css";
import React, { useEffect, useState } from "react";

interface SpotifyProfile {
  display_name: string;
  images: { url: string }[];
  external_urls: { spotify: string };
  id: string;
}

interface NowPlaying {
  is_playing: boolean;
  item?: {
    name: string;
    album: { images: { url: string }[] };
    artists: { name: string }[];
  };
}

export default function SpotifyPage() {
  const [profile, setProfile] = useState<SpotifyProfile | null>(null);
  const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const [profileRes, nowRes] = await Promise.allSettled([
          fetch("https://api.spotify.com/v1/users/sanjayky_"),
          fetch("/api/spotify-nowplaying"),
        ]);
        if (profileRes.status === "fulfilled" && profileRes.value.ok) {
          setProfile(await profileRes.value.json());
        }
        if (nowRes.status === "fulfilled" && nowRes.value.ok) {
          setNowPlaying(await nowRes.value.json());
        }
      } catch {
        /* Non-critical — page degrades gracefully without data */
      }
    }
    loadData();
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Navbar />

      <main className="mx-auto max-w-3xl px-4 py-10">
        <section style={{ paddingTop: "var(--sp-8)", paddingBottom: "var(--sp-12)" }}>

          <span className="eyebrow">Music</span>
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
            What I&apos;m Listening To
          </h1>

          {/* Profile card */}
          {profile && (
            <div className="card" style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--sp-3)",
              padding: "var(--sp-3) var(--sp-4)",
              marginBottom: "var(--sp-4)",
            }}>
              {profile.images?.[0] && (
                <img
                  src={profile.images[0].url}
                  alt={profile.display_name}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "var(--radius-full)",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
              )}
              <div>
                <p style={{ color: "var(--color-text-1)", fontWeight: 500, margin: 0 }}>
                  {profile.display_name}
                </p>
                <p style={{ color: "var(--color-text-3)", fontSize: "var(--text-caption)", margin: 0 }}>
                  {profile.id}
                </p>
              </div>
              <a
                href={profile.external_urls?.spotify}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: "auto",
                  fontSize: "var(--text-caption)",
                  color: "var(--color-accent)",
                  opacity: 1,
                }}
              >
                Open ↗
              </a>
            </div>
          )}

          {/* Now playing */}
          {nowPlaying?.is_playing && nowPlaying.item && (
            <div className="card" style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--sp-3)",
              padding: "var(--sp-3) var(--sp-4)",
              marginBottom: "var(--sp-4)",
            }}>
              <img
                src={nowPlaying.item.album.images[0]?.url}
                alt={nowPlaying.item.name}
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius-md)",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <div>
                <p style={{ color: "var(--color-text-1)", fontWeight: 500, margin: 0, fontSize: "var(--text-body)" }}>
                  {nowPlaying.item.name}
                </p>
                <p style={{ color: "var(--color-text-2)", fontSize: "var(--text-caption)", margin: 0 }}>
                  {nowPlaying.item.artists.map((a) => a.name).join(", ")}
                </p>
              </div>
              <span style={{
                marginLeft: "auto",
                fontSize: "var(--text-caption)",
                color: "var(--color-accent)",
                fontWeight: 500,
              }}>
                Now Playing
              </span>
            </div>
          )}

          {/* Embedded playlist */}
          <div>
            <span className="eyebrow" style={{ marginBottom: "var(--sp-2)", display: "block" }}>Favorites</span>
            <iframe
              title="Spotify: Favorite Songs"
              src="https://open.spotify.com/embed/playlist/5lAk4UbhajcspVNCU49KQc?utm_source=generator&theme=0"
              width="100%"
              height="500"
              style={{
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border)",
                display: "block",
              }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              frameBorder="0"
            />
          </div>

        </section>
      </main>

      <Footer />
    </ThemeProvider>
  );
}
