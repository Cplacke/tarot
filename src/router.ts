
import { getHeaders } from './util.ts'
import { ThreeTarotReading, FiveTarotReading, MirrorTarotReading, MajorTarotReading } from './pages/TarotReading.jsx'
import { TarotIndex } from './pages/TarotIndex.jsx'
import { Home } from './pages/Home.jsx'

export const router = async (req: Request) => {

    const url = new URL(req.url);
    let body: string | ReadableStream<Uint8Array> = 'Route Not Found';
    let statusCode: number = 404;
    
    // homepage
    if (url.pathname === '/') {
        url.pathname = '/home.html';
        body = Home();
        statusCode = 200;
    } else

    if (url.pathname === '/reading/three') {
        url.pathname = '/reading.html';
        body = ThreeTarotReading();
        statusCode = 200;
    } else
    if (url.pathname === '/reading/five') {
        url.pathname = '/reading.html';
        body = FiveTarotReading();
        statusCode = 200;
    } else
    if (url.pathname === '/reading/mirror') {
        url.pathname = '/reading.html';
        body = MirrorTarotReading();
        statusCode = 200;
    } else
    if (url.pathname === '/reading/major') {
        url.pathname = '/reading.html';
        body = MajorTarotReading();
        statusCode = 200;
    } else

    // card index
    if (url.pathname === '/tarot/index') {
        url.pathname = '/index.html';
        body = TarotIndex();
        statusCode = 200;
    } else

    // serve asset files 
    if (url.pathname.includes('assets')) {
        const file = await Deno.open(`.${url.pathname}`, { read: true });
        body = file.readable;
        statusCode = 200;
    }

    return new Response( body,
        { 
            status: statusCode, 
            headers: getHeaders(url) 
        }
    );

}