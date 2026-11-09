"use client";
import { useEffect } from "react";

export function LegacyEffects({ scripts }: { scripts: string[] }) {
    useEffect(() => {
        const key = `heidoc-loaded:${window.location.pathname}`;
        const registry = window as Window & {
            __heidocLegacyLoaded?: Record<string, boolean>;
        };
        registry.__heidocLegacyLoaded ??= {};
        if (registry.__heidocLegacyLoaded[key]) return;
        registry.__heidocLegacyLoaded[key] = true;
        
        const loadScript = (src: string) =>
            new Promise<void>((resolve) => {
            const tag = document.createElement("script");
            tag.src = `/legacy/${src}`;
            tag.async = false;
            tag.onload = () => resolve();
            tag.onerror = () => {
                console.warn("Gagal memuat fitur demo", src);
                resolve();
            };
            document.body.appendChild(tag);
        });
        
        (async () => {
            for (const src of scripts) await loadScript(src);
            document.dispatchEvent(new Event("DOMContentLoaded"));
        })();
        
    }, []);
    return null;
}
