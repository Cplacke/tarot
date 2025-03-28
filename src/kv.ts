
export const archive = await Deno.openKv();

const READING = "reading";
const USER = "user";

export const addReadingToArchive = async(body: any) => {
    body.date = new Date(Date.now()).toISOString();
    await archive.set(
        [READING, body.user, body.data.type, body.date], JSON.stringify(body.data)
    )
    console.info(body);
    getKvRecordsCount();
    return body.data;
}

export const addUserRegistration = async (userId: string, userAgent: string) => {
    const data = {
        userId,
        userAgent,
        createdDate: new Date(Date.now()).toISOString()
    }
    await archive.set(
        [USER, userId], JSON.stringify(data)
    )
    getKvRecordsCount();
    return data;
}

const clearKvStorage = async () => {
    let count = 0;
    const entries = archive.list({ prefix: [READING] });
    for await (const entry of entries) {
        await archive.delete(entry.key)
        count++;
    }
    console.info('kv cleared', count, 'records');
}

const getKvPrefeixRecordsCount = async (prefix: string[]) => {
    let count = 0;
    const entries = archive.list({ prefix });
    for await (const entry of entries) {
        count++;
    }
    console.info('kv readings record count', prefix, count);
    return count;
}

const getKvRecordsCount = async () => {
    let total = 0;
    total += await getKvPrefeixRecordsCount([READING]);
    total += await getKvPrefeixRecordsCount([USER]);

    console.info('kv total record count', total);
}

// await clearKvStorage();
await getKvRecordsCount();
