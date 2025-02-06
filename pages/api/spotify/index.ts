import axios from 'axios';
import * as cheerio from 'cheerio';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try{
        if(req.method !== 'GET') return res.status(405).json({ message: 'Method not allowed' });

        const { url } = req.query;
        if(!url) return res.status(400).json({ message: 'URL is required' });

        const match = (typeof url === 'string' ? url : url[0]).match(/track\/([^/?]+)/);
        if(!match || !match[1]) return res.status(400).json({ message: 'Invalid URL' });

        const trackId = match[1];
        const embedUrl = `https://open.spotify.com/embed/track/${trackId}`;

        try{
            const response = await axios.get(embedUrl);

            const $ = cheerio.load(response.data);
            const scriptContent = $('#__NEXT_DATA__').html();

            if(!scriptContent) return res.status(500).json({ message: 'Internal server error' });
            const entity = JSON.parse(scriptContent).props.pageProps?.state?.data?.entity;

            const trackInfo = {
                title: entity.title,
                artists: entity.artists[0]?.name || 'Artista desconhecido',
                audioPreview: entity.audioPreview?.url || '',
                image: entity.visualIdentity.image[0]?.url || '',
            }

            return res.status(200).json(trackInfo);
        }catch(e){
            console.error(e);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }catch(e){
        return res.status(429).json({ message: 'Too many requests' });
    }
}