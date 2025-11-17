const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
    let DataHoje = new Date();
    let hr = DataHoje.getHours();
    let min = DataHoje.getMinutes();
    let s = DataHoje.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) hr = '0' + min;

    if (s < 10) hr = '0' + s;

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = s

});