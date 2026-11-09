"use client";
import { useEffect } from "react";

export function HomeEffects() {
    useEffect(() => {
        const el = document.getElementById("hd-greeting");
        const hour = new Date().getHours();
        if (el)
            el.textContent =
        hour >= 5 && hour < 11
        ? "Selamat Pagi"
        : hour >= 11 && hour < 15
        ? "Selamat Siang"
        : hour >= 15 && hour < 18
        ? "Selamat Sore"
        : "Selamat Malam";
        const slides = [
            ...document.querySelectorAll<HTMLElement>(".hd-banner-slide"),
        ];
        const dots = [...document.querySelectorAll<HTMLElement>(".hd-dot")];
        let current = 0;
        function show(i: number) {
            slides.forEach((node, j) => node.classList.toggle("active", i === j));
            dots.forEach((node, j) => node.classList.toggle("active", i === j));
            current = i;
        }
        const timer = window.setInterval(
            () => show((current + 1) % slides.length),
            4000,
        );
        const dotHandlers = dots.map((dot, i) => {
            const fn = () => show(i);
            dot.addEventListener("click", fn);
            return fn;
        });
        const search = document.getElementById(
            "search-input",
        ) as HTMLInputElement | null;
        const onInput = () => {
            const q = (search?.value || "").toLowerCase();
            document
            .querySelectorAll<HTMLElement>(".hd-svc,.hd-doc-card,.hd-article")
            .forEach((item) => {
                item.style.display = item.textContent?.toLowerCase().includes(q)
                ? ""
                : "none";
            });
        };
        search?.addEventListener("input", onInput);
        return () => {
            window.clearInterval(timer);
            dots.forEach((dot, i) =>
                dot.removeEventListener("click", dotHandlers[i]),
        );
        search?.removeEventListener("input", onInput);
    };
}, []);
return null;
}
