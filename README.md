<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Congreso Juvenil 2026 | UJECA</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Fuente -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

<!-- Favicon LOCAL -->
<link rel="icon" href="img/favicon.ico">

<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Poppins',sans-serif;color:#333}

/* NAVBAR */
.navbar{position:fixed;width:100%;top:0;display:flex;justify-content:space-between;align-items:center;padding:10px 40px;background:#141e46;color:white;z-index:1000}
.logo-container{display:flex;align-items:center;gap:10px}
.logo-container img{height:45px}
.nav-btn{background:#f39c12;padding:8px 20px;border-radius:50px;text-decoration:none;color:white}

/* HERO */
.hero{
margin-top:70px;
background:url('img/banner.jpg') center/cover no-repeat;
min-height:95vh;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
color:white;
position:relative;
}
.hero::before{
content:'';
position:absolute;
inset:0;
background:linear-gradient(90deg,rgba(235,36,36,.8),rgba(20,30,70,.9));
}
.hero-content{position:relative;z-index:1;padding:20px}
.hero-content img{height:120px;margin-bottom:10px}
.hero h1{font-size:3rem}
.hero p{font-size:1.3rem;margin-bottom:20px}
.btn-primary{background:#f39c12;color:white;padding:14px 35px;border-radius:50px;text-decoration:none}

/* CONTADOR */
.countdown{display:flex;justify-content:center;gap:15px;margin-top:20px;flex-wrap:wrap}
.countdown div{background:rgba(255,255,255,.2);padding:10px 15px;border-radius:10px}

/* SECCIONES */
.info,.invitados,.form-section{padding:70px 20px;text-align:center}
.invitados{background:#eef2f7}
.cards{display:flex;justify-content:center;gap:25px;flex-wrap:wrap}
.card{background:white;padding:20px;width:220px;border-radius:12px;box-shadow:0 10px 25px rgba(0,0,0,.1)}
.card img{width:100%;border-radius:12px;margin-bottom:10px}

iframe{width:100%;max-width:800px;height:900px;border:none;border-radius:12px}

/* FOOTER */
footer{background:#0f2027;color:white;text-align:center;padding:20px}

/* WHATSAPP */
.whatsapp-float{position:fixed;bottom:20px;right:20px}
.whatsapp-float a{display:flex;align-items:center;justify-content:center;width:60px;height:60px;background:#25D366;color:white;border-radius:50%;font-size:30px;text-decoration:none}
</style>
</head>

<body>

<!-- NAVBAR -->
<nav class="navbar">
    <div class="logo-container">
        <img src="img/logo.png" alt="UJERCA">
        <strong>UJECA</strong>
    </div>
    <a href="#formulario" class="nav-btn">Inscribirme</a>
</nav>

<!-- HERO -->
<header class="hero">
<div class="hero-content">
    <img src="img/logo.png" alt="Logo Congreso">
    <h1>Congreso Juvenil 2026</h1>
    <p>Circuito 2 - Zona 6</p>

    <div class="countdown">
        <div><span id="days">0</span><br>Días</div>
        <div><span id="hours">0</span><br>Horas</div>
        <div><span id="minutes">0</span><br>Min</div>
        <div><span id="seconds">0</span><br>Seg</div>
    </div>

    <br>
    <a href="#formulario" class="btn-primary">Preinscribirme</a>
</div>
</header>

<!-- INFO -->
<section class="info">
<h2>Un Encuentro que Transformará tu Vida</h2>
<p>📅 15 - 17 Julio 2026</p>
<p>📍 Circuito 2 Zona 6 - Caribe</p>
<p>Un tiempo especial de adoración, palabra y crecimiento espiritual.</p>
</section>

<!-- INVITADOS -->
<section class="invitados">
<h2>Invitados Especiales</h2>
<div class="cards">
<div class="card">
<img src="img/1.png">
<h3>Invitado 1</h3>
<p>Orador principal</p>
</div>

<div class="card">
<img src="img/2.png">
<h3>Invitado 2</h3>
<p>Talleres</p>
</div>

<div class="card">
<img src="img/3.png">
<h3>Grupo de Alabanza</h3>
<p>Adoración en vivo</p>
</div>
</div>
</section>

<!-- FORM -->
<section id="formulario" class="form-section">
<h2>Formulario de Preinscripción</h2>

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfJeRfjRysZH4qcuW61IkezIdhXQoBJrIFlZGjjLMLj6QoccQ/viewform?embedded=true">
Cargando…
</iframe>

</section>

<footer>
© 2026 UJERCA - Congreso Juvenil
</footer>

<!-- WhatsApp -->
<div class="whatsapp-float">
<a href="https://wa.me/573000000000" target="_blank">📱</a>
</div>

<script>
// FECHA REAL
const countdownDate = new Date("July 15, 2026 09:00:00").getTime();

setInterval(()=>{
const now = new Date().getTime();
const distance = countdownDate - now;

document.getElementById("days").innerText = Math.floor(distance/(1000*60*60*24));
document.getElementById("hours").innerText = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
document.getElementById("minutes").innerText = Math.floor((distance%(1000*60*60))/(1000*60));
document.getElementById("seconds").innerText = Math.floor((distance%(1000*60))/1000);
},1000);
</script>

</body>
</html>
