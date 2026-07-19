import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const isDarkPath = (path: string) => /-dark\/?$/.test(path);

export default function ThemeRouteSync() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        const html = document.documentElement;
        if (isDarkPath(pathname)) {
            html.setAttribute("data-bs-theme", "dark");
            return;
        }
        let theme: string | null = null;
        try {
            theme = localStorage.getItem("theme");
        } catch {
            /* ignore */
        }
        if (theme === "dark" || theme === "light") {
            html.setAttribute("data-bs-theme", theme);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            html.setAttribute("data-bs-theme", prefersDark ? "dark" : "light");
        }
    }, [pathname]);

    useEffect(() => {
        if (hash) {
            const el = document.getElementById(hash.substring(1));
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}
