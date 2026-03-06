export async function GET() {
    const pages = [
        '',
        'album',
        'press',
        'onde',
        'never-shine-in-black',
        'useless',
    ];

    const baseUrl = 'https://repsilon.pages.dev';

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `    <url>
        <loc>${baseUrl}/${page}</loc>
    </url>`).join('\n')}
</urlset>`;

    return new Response(body, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}