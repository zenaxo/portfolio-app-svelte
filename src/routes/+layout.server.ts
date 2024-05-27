import type { LayoutServerLoad } from "./$types.js";

export const load: LayoutServerLoad = ({ cookies }) => {
    const theme = cookies.get('theme');
    const darkMode = theme === 'dark';
    return { darkMode };
}