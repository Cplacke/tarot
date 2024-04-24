
import { getHeaders } from './util.ts'
import { App } from './pages/App.jsx'

export const router = async (req: Request) => {

    const url = new URL(req.url);
    let body: string | ReadableStream<Uint8Array> = 'Route Not Found';
    let statusCode: number = 404;
    
    // homepage
    if (url.pathname === '/') {
        url.pathname = '/app.html';
        body = App();
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