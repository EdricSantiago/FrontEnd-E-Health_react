export const SESSION_KEY = 'heidoc_user';
const ACCOUNTS_KEY = 'heidoc_accounts_v1';
const SCOPED_KEYS = ['profile_data','riwayat_user','keranjang_toko','janji_dokter','asuransi_user','heidoc_settings'];

type Account = { username: string; salt: string; passwordHash: string };

function getAccounts(): Account[] {
    try {
        const data: unknown = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || '[]');
        return Array.isArray(data) ? data as Account[] : [];
    } catch { return []; }
}

async function digest(value: string) {
    const bytes = new TextEncoder().encode(value);
    const hash = await crypto.subtle.digest('SHA-256', bytes);
    return [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2,'0')).join('');
}

export function currentUser(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(SESSION_KEY);
}

function saveScoped(username: string) {
    const previous: Record<string,string> = {};
    for (const key of SCOPED_KEYS) {
        const value = localStorage.getItem(key);
        if (value !== null) previous[key] = value;
    }
    localStorage.setItem(`heidoc_data_${username.toLowerCase()}`, JSON.stringify(previous));
}

function restoreScoped(username: string) {
    const key = `heidoc_data_${username.toLowerCase()}`;
    for (const item of SCOPED_KEYS) localStorage.removeItem(item);
    try {
        const data = JSON.parse(localStorage.getItem(key) || '{}') as Record<string,string>;
        for (const item of SCOPED_KEYS) if (typeof data[item] === 'string') localStorage.setItem(item,data[item]);
    } catch { /* Empty demo data */ }
}

function startSession(username: string) {
    const old = currentUser();
    if (old && old.toLowerCase() !== username.toLowerCase()) saveScoped(old);
    restoreScoped(username);
    localStorage.setItem(SESSION_KEY, username);
}

export function logout() {
    const old = currentUser();
    if (old) saveScoped(old);
    for (const key of SCOPED_KEYS) localStorage.removeItem(key);
    localStorage.removeItem(SESSION_KEY);
}

export async function login(username: string, password: string): Promise<string> {
    const name = username.trim();
    if (!name || !password) throw new Error('Masukkan username dan password.');
    if (name.toLowerCase() === 'demo' && password === 'demo123') {
        startSession('demo'); return 'demo';
    }
    const found = getAccounts().find(account => account.username.toLowerCase() === name.toLowerCase());
    if (!found || (await digest(`${found.salt}:${password}`)) !== found.passwordHash) {
        throw new Error('Username atau password tidak sesuai.');
    }
    startSession(found.username);
    return found.username;
}

export async function register(username: string, password: string): Promise<string> {
    const name = username.trim();
    if (!/^[a-zA-Z0-9_.-]{3,24}$/.test(name)) throw new Error('Username 3–24 karakter; gunakan huruf, angka, _, - atau titik.');
    if (password.length < 6) throw new Error('Password minimal 6 karakter.');
    if (name.toLowerCase() === 'demo' || getAccounts().some(account => account.username.toLowerCase() === name.toLowerCase())) {
        throw new Error('Username sudah digunakan.');
    }
    const salt = Array.from(crypto.getRandomValues(new Uint8Array(16))).map(b => b.toString(16).padStart(2,'0')).join('');
    const accounts = getAccounts();
    accounts.push({ username: name, salt, passwordHash: await digest(`${salt}:${password}`) });
    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
    startSession(name);
    return name;
}
