import { addUserRegistration, addReadingToArchive } from '../kv.ts'

export const registerNewUser = async (req: Request): Promise<Response> => {

    const body = await req.json();
    const added = await addUserRegistration(body.user, body.userAgent);

    return new Response(
        JSON.stringify({
            added
        }),
        { 
            status: 201, 
            headers: {
                'content-type' : 'application/json'
            }
        }
    );
}

export const addNewReading = async (req: Request): Promise<Response> => {
    const body = await req.json();
    console.info(body);
    const added = await addReadingToArchive(body);

    return new Response(
        JSON.stringify({
            added
        }),
        { 
            status: 201, 
            headers: {
                'content-type' : 'application/json'
            }
        }
    );
}