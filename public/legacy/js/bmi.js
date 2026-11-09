document.addEventListener('DOMContentLoaded', function () {
    const maleOpt = document.getElementById('opt-male');
    const femaleOpt = document.getElementById('opt-female');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const btnCalculate = document.getElementById('btn-calculate');
    const resultBox = document.getElementById('result-box');
    const resultValue = document.getElementById('result-value');
    const resultStatus = document.getElementById('result-status');

    maleOpt.addEventListener('click', function () {
        maleOpt.classList.add('active');
        femaleOpt.classList.remove('active');
    });

    femaleOpt.addEventListener('click', function () {
        femaleOpt.classList.add('active');
        maleOpt.classList.remove('active');
    });

    function checkInputs() {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (height > 0 && weight > 0) {
            btnCalculate.classList.add('active');
            btnCalculate.removeAttribute('disabled');
        } else {
            btnCalculate.classList.remove('active');
            btnCalculate.setAttribute('disabled', 'true');
        }
    }

    heightInput.addEventListener('input', checkInputs);
    weightInput.addEventListener('input', checkInputs);

    btnCalculate.addEventListener('click', function () {
        const height = parseFloat(heightInput.value) / 100;
        const weight = parseFloat(weightInput.value);

        if (!height || !weight) return;

        const bmi = (weight / (height * height)).toFixed(1);
        let status = '';

        if (bmi < 18.5) {
            status = 'Berat Badan Rendah';
        } else if (bmi >= 18.5 && bmi <= 22.9) {
            status = 'Berat Badan Normal';
        } else if (bmi >= 23 && bmi <= 24.9) {
            status = 'Berat Badan Berlebih';
        } else {
            status = 'Obesitas';
        }

        resultValue.textContent = bmi;
        resultStatus.textContent = status;
        resultBox.style.display = 'block';

        var tanggal = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
        tambahRiwayat({
            type: 'bmi',
            title: 'Hasil BMI: ' + bmi,
            desc: status + ' - ' + tanggal,
            status: status.includes('Normal') ? 'Normal' : 'Perlu Perhatian'
        });
    });
});

(function () {
    var ref = document.referrer;
    if (ref.indexOf('/layanan/bmi/faq') === -1) {
        if (ref.indexOf('/profile') !== -1) {
            sessionStorage.setItem('bmi_origin', '/profile');
        } else if (ref.indexOf('/layanan') !== -1) {
            sessionStorage.setItem('bmi_origin', '/layanan');
        } else {
            sessionStorage.setItem('bmi_origin', '/');
        }
    }
})();

function goBack() {
    var origin = sessionStorage.getItem('bmi_origin');
    if (origin) {
        window.location.href = origin;
    } else {
        window.location.href = '/';
    }
}