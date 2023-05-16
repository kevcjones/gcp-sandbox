import { createHash } from 'crypto'

export async function POST(request: Request) {
    const res = await request.json();

    // sha256 is a hashing function
    const hash = createHash('sha256').update(res.email).digest();
    const token = Buffer.from(hash).toString('base64');

    return new Response(JSON.stringify({ "success": true }), {
        status: 200,
        // set
        headers: { 'Set-Cookie': `token=${token}` },
    });
}