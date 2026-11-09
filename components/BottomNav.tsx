export function BottomNav({ pathname }: { pathname: string }) {
    return (
        <nav className="bottom-nav">
        <a href="/" className={`nav-item ${pathname === "/" ? "active" : ""}`}>
        <i className="fa-solid fa-house" />
        <span>Beranda</span>
        </a>
        <a
        href="/riwayat"
        className={`nav-item ${pathname === "/riwayat" ? "active" : ""}`}
        >
        <i className="fa-solid fa-clock-rotate-left" />
        <span>Riwayat</span>
        </a>
        <a
        href="/dokter"
        className={`nav-item-center ${pathname.startsWith("/dokter") ? "active" : ""}`}
        >
        <i className="fa-solid fa-stethoscope" />
        </a>
        <a
        href="/profile"
        className={`nav-item ${pathname === "/profile" ? "active" : ""}`}
        >
        <i className="fa-solid fa-user" />
        <span>Profil</span>
        </a>
        <a
        href="/pengaturan"
        className={`nav-item ${pathname === "/pengaturan" ? "active" : ""}`}
        >
        <i className="fa-solid fa-gear" />
        <span>Pengaturan</span>
        </a>
        </nav>
    );
}
