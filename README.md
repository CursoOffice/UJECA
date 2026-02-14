<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Preinscripción | Congreso Juvenil 2026</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
<link rel="icon" href="img/favicon.ico">

<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Poppins',sans-serif;background:#0f172a;color:white;text-align:center}

/* PANTALLA BLOQUEO */
.lock-screen{
min-height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:20px;
background:linear-gradient(135deg,#141e46,#c0392b);
}

.lock-screen img{height:110px;margin-bottom:20px}
.lock-screen h1{font-size:2rem;margin-bottom:10px}
.lock-screen p{opacity:.9;margin-bottom:25px}

.countdown{
display:flex;
gap:15px;
flex-wrap:wrap;
justify-content:center;
margin-top:20px;
}
.countdown div{
background:rgba(255,255,255,.15);
padding:15px 18px;
border-radius:12px;
min-width:80px;
font-size:1.3rem;
}

/* FORMULARIO */
.form-page{display:none;background:#f4f7fb;color:#333;min-height:100vh}

header{background:#141e46;color:white;padding:20px}
header img{height:70px;margin-bottom:10px}

iframe{
width:100%;
max-width:850px;
height:950px;
border:none;
border-radius:15px;
box-shadow:0 15px 35px rgba(0,0,0,0.15);
margin:40px auto;
display:block;
}

footer{background:#0f2027;color:white;padding:20px;margin-top:30px}
</style>
</head>

<body>

<!-- PANTALLA BLOQUEADA -->
<section id="lockScreen" class="lock-screen">
<img src="img/logo.png">
<h1>Inscripciones próximamente</h1>
<p>El formulario estará disponible el 15 de Febrero de 2026</p>

<div class="countdown">
<div><span id="d">0</span><br>Días</div>
<div><span id="h">0</span><br>Horas</div>
<div><span id="m">0</span><br>Min</div>
<div><span id="s">0</span><br>Seg</div>
</div>
</section>

<!-- FORMULARIO REAL -->
<section id="formPage" class="form-page">
<header>
<img src="img/logo.png">
<h2>Preinscripción Congreso Juvenil 2026</h2>
<p>Circuito 2 - Zona 6</p>
</header>

<iframe 
src="https://docs.google.com/forms/d/e/1FAIpQLSfJeRfjRysZH4qcuW61IkezIdhXQoBJrIFlZGjjLMLj6QoccQ/viewform?embedded=true"
loading="lazy"></iframe>

<footer>
© 2026 Unión Juvenil Evangélica del Caribe - UJECA
</footer>
</section>

<script>
const openDate = new Date("February 15, 2026 00:00:00").getTime();

const lockScreen = document.getElementById("lockScreen");
const formPage = document.getElementById("formPage");

function updateCountdown(){
const now = new Date().getTime();
const distance = openDate - now;

if(distance <= 0){
lockScreen.style.display="none";
formPage.style.display="block";
return;
}

document.getElementById("d").innerText=Math.floor(distance/(1000*60*60*24));
document.getElementById("h").innerText=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
document.getElementById("m").innerText=Math.floor((distance%(1000*60*60))/(1000*60));
document.getElementById("s").innerText=Math.floor((distance%(1000*60))/1000);
}

updateCountdown();
setInterval(updateCountdown,1000);
</script>

</body>
</html>
