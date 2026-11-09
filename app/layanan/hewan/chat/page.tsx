"use client";
import { LegacyEffects } from "@/components/LegacyEffects";

export default function ChatHewanHtmlPage() {
    return (
        <>
            <main className="animal-chat">
                <h1 id="doctorName"></h1>
                <p>Dokter Hewan</p>
                <div id="chatBox" className="animal-chat-box">
                    <div className="doctor-message">Halo, ada yang bisa saya bantu mengenai hewan kesayanganmu?</div>
                </div>
                <form id="chatForm" className="animal-chat-form">
                    <input type="text" id="messageInput" placeholder="Tulis pesan..." />
                    <button type="submit">Kirim</button>
                </form>
            </main>
            <LegacyEffects scripts={["js/chat_hewan.js"]} />
        </>
    );
}
