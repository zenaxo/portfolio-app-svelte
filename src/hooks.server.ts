import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
    let theme: string | null = null;

    const newTheme = event.url.searchParams.get("theme");
    const cookieTheme = event.cookies.get("theme");

    if (newTheme) {
        theme = newTheme;
    } else if (cookieTheme) {
        theme = cookieTheme;
    } else {
        event.cookies.set('theme', 'dark', {
            path: '/',
        });
        theme = 'dark';
    }

    if (newTheme && (newTheme === 'dark' || newTheme === 'light')) {
        event.cookies.set('theme', newTheme, {
            path: '/',
            maxAge: 60 * 60 * 24 * 365,
        });
    }

    return await resolve(event, {
        transformPageChunk: ({ html }) =>
            html.replace('data-theme=""', `data-theme="${theme}"`),
    });
}) satisfies Handle;
