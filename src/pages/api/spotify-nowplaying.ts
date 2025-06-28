import type { NextApiRequest, NextApiResponse } from 'next';

// You should store these in environment variables for security
const client_id = process.env.SPOTIFY_CLIENT_ID!;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!;

async function getAccessToken() {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });
  if (!response.ok) throw new Error('Failed to refresh Spotify access token');
  const data = await response.json();
  return data.access_token;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const access_token = await getAccessToken();
    const nowPlayingRes = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    if (nowPlayingRes.status === 204 || nowPlayingRes.status > 400) {
      return res.status(200).json({ is_playing: false });
    }
    const data = await nowPlayingRes.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch currently playing track' });
  }
}
