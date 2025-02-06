import { NextApiRequest, NextApiResponse } from "next";
import spotify from '@ksolo/spotify-search';

spotify.setCredentials(process.env.SPOTIFY_CLIENT_ID!, process.env.SPOTIFY_CLIENT_SECRET!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET') return res.status(405).json({ message: 'Method not allowed' });

    const { query } = req.query;
    if(!query) return res.status(400).json({ message: 'Query is required' });

    try{
        const response = await spotify.search(query as string);
        const tracks = response.tracks.items.slice(0, 5).map((track: any) => ({ url: track.external_urls.spotify }))
        return res.status(200).json({ data: tracks });
    }catch(e){
        console.error(e);
        return res.status(500).json({ message: 'Internal server error' });
    }
}