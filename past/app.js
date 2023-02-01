document.getElementById('player').addEventListener("mouseover", sumarPuntos);
puntos = 0;
tiempo = 60;
necesarios = 30;
function sumarPuntos() {
    puntos++;
    document.getElementById('puntos').innerHTML="Puntos <br>" +puntos+ '/'+necesarios+'<br>';
    var randomN1 = Math.round(Math.random()*450);
    var randomN2 = Math.round(Math.random()*450);
    document.getElementById('player').style.marginTop = randomN1+'px';
    document.getElementById('player').style.marginLeft = randomN2+'px';
}

