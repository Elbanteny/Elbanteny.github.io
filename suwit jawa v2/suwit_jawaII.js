alert('INI ADALAH PERMAINAN SUWIT JAWA, ANDA ADALAH PLAYER BEWARNA HIJAU');
const acakWarna = document.getElementById('acakWarna');
acakWarna.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
})

function getPilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34)
        return 'gajah';
    if (comp >= 0.34 && comp < 0.67)
        return 'orang';
    return 'semut';
}
function getHasil(comp, player) {

    if (player == comp)
        return "SERI";
    if (player == 'gajah')
        return (comp == 'orang') ? 'MENANG' : 'KALAH';
    if (player == 'orang')
        return (comp == 'gajah') ? 'KALAH' : 'MENANG';
    if (player == 'semut')
        return (comp == 'orang') ? 'KALAH' : 'MENANG';

}

let komputerSkor = 0;
let playerSkor = 0;
function infoSkor(hasil) {
    if (hasil == 'MENANG') return playerSkor += 1;
    if (hasil == 'KALAH') return komputerSkor += 1;
    if (hasil == 'SERI') return playerSkor, komputerSkor;
}

function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length)
            i = 0;
    }, 100)
}



const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (choice) {
    choice.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = choice.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();
        infoSkor(hasil);

        setTimeout(function () {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;

            const skorKomputer = document.querySelector('.skor-komputer');
            skorKomputer.innerHTML = 'SKOR : ' + komputerSkor;

            const skorPlayer = document.querySelector('.skor-player');
            skorPlayer.innerHTML = 'SKOR : ' + playerSkor;
        }, 1000)
    });
});






