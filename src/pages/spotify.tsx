import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import "../app/globals.css";
import React, { useEffect, useState } from "react";

interface Profile {
  display_name: string;
  images: { url: string }[];
  external_urls: { spotify: string };
  id: string;
}

const SPOTIFY_GREEN = "#1DB954";

export default function SpotifyPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nowPlaying, setNowPlaying] = useState<any>(null);

  useEffect(() => {
    async function getSanjayProfile() {
      try {
        const res = await fetch('https://api.spotify.com/v1/users/sanjayky_');
        if (!res.ok) throw new Error('Failed to fetch Sanjay\'s Spotify profile');
        const data = await res.json();
        setProfile(data);
      } catch (err: any) {
        setProfile(null);
      }
    }
    async function getNowPlaying() {
      try {
        const res = await fetch('/api/spotify-nowplaying');
        if (!res.ok) throw new Error('Failed to fetch now playing');
        const data = await res.json();
        setNowPlaying(data);
      } catch (err) {
        setNowPlaying(null);
      }
    }
    getSanjayProfile();
    getNowPlaying();
  }, []);

  return (
    <ThemeProvider attribute="class">
      <div>
        <Navbar />
      </div>
      <main
        className="mx-auto max-w-3xl px-3 py-10 min-h-screen flex flex-col justify-center items-center"
        style={{
          background: `linear-gradient(135deg, ${SPOTIFY_GREEN} 0%, #191414 100%)`,
          borderRadius: "1.5rem",
          boxShadow: "0 8px 32px 0 rgba(30,185,84,0.25)",
        }}
      >
        <section className="w-full space-y-8 py-8">
          <H1 className="text-center text-white drop-shadow-lg">Sanjay&apos;s Spotify Profile</H1>
          {profile && (
            <div className="flex flex-col items-center mb-6">
              {profile.images && profile.images[0] && (
                <img
                  src={profile.images[0].url}
                  alt={profile.display_name}
                  className="w-20 h-20 rounded-full mb-2 border-4 border-green-400"
                />
              )}
              <div className="text-white font-bold text-lg">{profile.display_name}</div>
              <div className="text-green-200 text-xs">{profile.id}</div>
              <a href={profile.external_urls?.spotify} target="_blank" rel="noopener noreferrer" className="text-green-300 underline text-xs mt-1">Spotify Profile</a>
            </div>
          )}
          <H2 className="text-center text-green-200">Currently Playing</H2>
          {nowPlaying && nowPlaying.is_playing && nowPlaying.item ? (
            <div className="flex flex-col items-center justify-center">
              <img
                src={nowPlaying.item.album.images[0]?.url}
                alt={nowPlaying.item.name}
                className="w-32 h-32 rounded shadow mb-3"
              />
              <div className="text-white font-semibold text-lg text-center">
                {nowPlaying.item.name}
              </div>
              <div className="text-green-300 text-sm text-center">
                {nowPlaying.item.artists.map((a: any) => a.name).join(", ")}
              </div>
            </div>
          ) : (
            <p className="text-center text-white">Not playing anything right now.</p>
          )}
        </section>
        <section className="w-full mt-10 flex flex-col items-center">
          <H2 className="text-center text-green-200 mb-2">My Favorite Songs</H2>
          <div className="w-full flex justify-center">
            <iframe
              title="Spotify Embed: Top 50 Playlist"
              src={`https://open.spotify.com/embed/playlist/5lAk4UbhajcspVNCU49KQc?utm_source=generator&theme=0`}
              width="100%"
              height="600"
              style={{ minHeight: "500px", borderRadius: "1rem" }}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </section>
      </main>
      <div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
