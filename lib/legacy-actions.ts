"use client";

export function handleLegacyAction(expression: string) {
  const match = expression.match(/^([a-zA-Z][a-zA-Z0-9_]*)\((.*)\)$/);
  if (!match) return;
  const operation = match[1];
  const arg = match[2].trim().replace(/^["']|["']$/g,'');
  const enc = encodeURIComponent(arg);
  switch(operation) {
    case 'goBack': {const from = sessionStorage.getItem('bmi_origin'); if(from) window.location.assign(from); else window.history.back(); break;}
    case 'goToSection': document.getElementById(arg)?.scrollIntoView({behavior:'smooth'}); break;
    case 'goToShop': case 'openAnimalProduct': window.location.assign('/toko'); break;
    case 'goToInformation': window.location.assign('/layanan/kulit/info'); break;
    case 'openAnimalInfo': window.location.assign('/layanan/hewan/info'); break;
    case 'openDietInfo': window.location.assign('/layanan/gizi/info'); break;
    case 'openAnimalChat': window.location.assign(`/layanan/hewan/chat${arg ? '?doctor='+enc : ''}`); break;
    case 'openDietChat': window.location.assign(`/layanan/gizi/chat${arg ? '?doctor='+enc : ''}`); break;
    case 'openChat': window.location.assign(`/dokter/chat?doctor=${enc}`); break;
    case 'showProblem': window.alert(`Kamu memilih masalah kulit: ${arg}`); break;
    default: console.warn('Tombol belum dikenali:', operation);
  }
}
