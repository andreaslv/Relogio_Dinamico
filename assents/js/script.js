function atualizarFundo(hr) {
    let body = document.body;

    if (hr >= 0 && hr < 5) {
        body.style.background = "linear-gradient(120deg, #0A0A2A, #0B0B10, #FFFDF9)";
    } else if (hr >= 5 && hr < 7) {
        body.style.background = "linear-gradient(120deg, #4B0082, #FF69B4, #FF8C00)";
    } else if (hr >= 7 && hr < 11) {
        body.style.background = "linear-gradient(120deg, #FF4500, #FF8C00, #FFD700)";
    } else if (hr >= 11 && hr < 17) {
        body.style.background = "linear-gradient(120deg, #87CEFA, #1E90FF, #F5F5F5)";
    } else if (hr >= 17 && hr < 19) {
        body.style.background = "linear-gradient(120deg, #FDA50F, #CC4E00, #B03060, #4B0082)";
    } else {
        body.style.background = "linear-gradient(120deg, #191970, #121226, #0B0B10, #FFFDF9)";
    }
}

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

setInterval(function time() {
    let dataToday = new Date();
    let hr = dataToday.getHours();
    let min = dataToday.getMinutes();
    let seg = dataToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(seg < 10) seg = '0' + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

    atualizarFundo(dataToday.getHours());
}, 1000);
