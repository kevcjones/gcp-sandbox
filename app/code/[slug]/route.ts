import { redirect } from 'next/navigation';

const fakeShortCodes: Record<string, string> = {
    '123': 'https://google.com',
    '456': 'https://facebook.com',
    '789': 'https://twitter.com',
}

type SlugParams = {
    params: {
        slug: string;
    };
};

export async function GET(request: Request, { params }: SlugParams) {
    const slug = params.slug;
    const url = fakeShortCodes[slug];

    if (!url) {
        return redirect('/404');
    }

    return redirect(url);
}