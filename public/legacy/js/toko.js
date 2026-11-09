const KUNCI_KERANJANG = 'keranjang_toko';

let keranjang = [];
try {
    keranjang = JSON.parse(localStorage.getItem(KUNCI_KERANJANG)) || [];
} catch (e) {}

const cartPanel = document.getElementById('cart-panel');
const cartOverlay = document.getElementById('cart-overlay');
const cartList = document.getElementById('cart-list');
const cartCount = document.getElementById('cart-count');

function rupiah(angka) {
    return 'Rp' + angka.toLocaleString('id-ID');
}

function simpanKeranjang() {
    localStorage.setItem(KUNCI_KERANJANG, JSON.stringify(keranjang));
}

function totalHarga() {
    return keranjang.reduce(function (total, item) {
        return total + item.harga * item.jumlah;
    }, 0);
}

function totalJumlah() {
    return keranjang.reduce(function (total, item) {
        return total + item.jumlah;
    }, 0);
}

function tampilkanKeranjang() {
    cartList.innerHTML = '';

    keranjang.forEach(function (item, i) {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML =
            '<div class="cart-item-info">' +
            '<p class="cart-item-name"></p>' +
            '<p class="cart-item-price">' + rupiah(item.harga * item.jumlah) + '</p>' +
            '</div>' +
            '<div class="cart-qty">' +
            '<button type="button" data-index="' + i + '" data-aksi="kurang">−</button>' +
            '<span>' + item.jumlah + '</span>' +
            '<button type="button" data-index="' + i + '" data-aksi="tambah">+</button>' +
            '</div>';
        li.querySelector('.cart-item-name').textContent = item.nama;
        cartList.appendChild(li);
    });

    const kosong = keranjang.length === 0;
    document.getElementById('cart-empty').hidden = !kosong;
    document.getElementById('cart-foot').hidden = kosong;
    document.getElementById('cart-total').textContent = rupiah(totalHarga());

    cartCount.textContent = totalJumlah();
    cartCount.hidden = kosong;
}

function bukaKeranjang() {
    document.getElementById('cart-view').hidden = false;
    document.getElementById('cart-done').hidden = true;
    cartPanel.classList.add('open');
    cartOverlay.classList.add('open');
}

function tutupKeranjang() {
    cartPanel.classList.remove('open');
    cartOverlay.classList.remove('open');
}

document.querySelectorAll('.btn-add').forEach(function (button) {
    button.addEventListener('click', function () {
        const card = button.closest('.product-card');
        const nama = card.querySelector('.product-name').textContent;
        const harga = Number(card.dataset.harga);

        const ada = keranjang.find(function (item) {
            return item.nama === nama;
        });
        if (ada) {
            ada.jumlah++;
        } else {
            keranjang.push({ nama: nama, harga: harga, jumlah: 1 });
        }

        simpanKeranjang();
        tampilkanKeranjang();

        button.textContent = '✓ Ditambahkan';
        button.classList.add('btn-add-success');
        setTimeout(function () {
            button.textContent = 'Tambah +';
            button.classList.remove('btn-add-success');
        }, 800);
    });
});

cartList.addEventListener('click', function (e) {
    const aksi = e.target.dataset.aksi;
    if (!aksi) return;

    const i = Number(e.target.dataset.index);
    keranjang[i].jumlah += aksi === 'tambah' ? 1 : -1;
    if (keranjang[i].jumlah === 0) keranjang.splice(i, 1);

    simpanKeranjang();
    tampilkanKeranjang();
});

document.getElementById('cart-open').addEventListener('click', bukaKeranjang);
document.getElementById('cart-close').addEventListener('click', tutupKeranjang);
cartOverlay.addEventListener('click', tutupKeranjang);
document.getElementById('cart-lanjut').addEventListener('click', tutupKeranjang);

document.getElementById('cart-checkout').addEventListener('click', function () {
    if (keranjang.length === 0) return;

    const kode = 'TK-' + Date.now().toString(36).toUpperCase().slice(-5);
    const ringkasan = keranjang.map(function (item) {
        return item.nama + ' x' + item.jumlah;
    }).join(', ');

    tambahRiwayat({
        type: 'pesanan',
        title: 'Pesanan Toko Kesehatan',
        desc: ringkasan + ' - ' + rupiah(totalHarga()),
        status: 'Diproses',
        kode: kode
    });

    keranjang = [];
    simpanKeranjang();
    tampilkanKeranjang();

    document.getElementById('cart-kode').textContent = kode;
    document.getElementById('cart-view').hidden = true;
    document.getElementById('cart-done').hidden = false;
});

const categoryButtons = document.querySelectorAll('.category-btn');
const productCards = document.querySelectorAll('.product-card');

categoryButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        categoryButtons.forEach(function (b) {
            b.classList.remove('active');
        });
        button.classList.add('active');

        const selectedCategory = button.dataset.category;

        productCards.forEach(function (card) {
            const matches = selectedCategory === 'semua' || card.dataset.category === selectedCategory;
            card.style.display = matches ? '' : 'none';
        });
    });
});

tampilkanKeranjang();