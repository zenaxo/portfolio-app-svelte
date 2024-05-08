import { writable } from 'svelte/store';

function createDarkModeStore() {
    const { subscribe, set, update } = writable(true);
    return {
        subscribe,
        toggle: () => update(value => {
            const newValue = !value;
            localStorage.setItem('isDarkModeToggled', JSON.stringify(newValue));
            if (newValue) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
            return newValue;
        }),
        initialize: () => {
            const storedDarkMode = localStorage.getItem('isDarkModeToggled');
            if (storedDarkMode) {
                const isDark = JSON.parse(storedDarkMode);
                set(isDark);
                isDark ? document.body.classList.add('dark') : document.body.classList.remove('dark');
            } else {
                localStorage.setItem('isDarkModeToggled', 'true');
                set(true);
                document.body.classList.add('dark');
            }
        },
        setDarkMode: (value: boolean) => {
            localStorage.setItem('isDarkModeToggled', JSON.stringify(value));
            value ? document.body.classList.add('dark') : document.body.classList.remove('dark');
            set(value);
        },
    };
}

export const isDarkModeToggled = createDarkModeStore();