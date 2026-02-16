<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cargando...</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:'Poppins',sans-serif;}

body{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(135deg,#9d0208,#d62828,#ff6b6b);
    color:white;
    overflow:hidden;
}

/* PARTICULAS */
#particles{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
z-index:-1;
opacity:.25;
}

/* CONTENEDOR */
.loader-container{
text-align:center;
animation:fadeIn 1s ease;
}

.logo{
    width:140px;
    margin-bottom:25px;
    animation:flotar 3s ease-in-out infinite;
}

h1{font-weight:600;margin-bottom:10px;}
#estado{opacity:.85;margin-top:10px;font-size:14px;}

/* BARRA */
.bar{
    width:260px;
    height:8px;
    background:rgba(255,255,255,.3);
    border-radius:20px;
    overflow:hidden;
    margin:25px auto 0 auto;
}

.progreso{
    height:100%;
    width:0%;
    background:white;
    animation:cargar 4.2s linear forwards;
}

/* ANIMACIONES */
@keyframes cargar{from{width:0%}to{width:100%}}
@keyframes flotar{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
@keyframes fadeIn{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
.fade-out{animation:salir 1s forwards;}
@keyframes salir{to{opacity:0;transform:scale(1.1)}}
</style>
</head>

<body>

<canvas id="particles"></canvas>

<div class="loader-container" id="loader">
    <img src="img/logo.png" class="logo">
    <h1 id="textoCarga">Iniciando plataforma...</h1>
    <p id="estado">Preparando recursos...</p>
    <div class="bar"><div class="progreso"></div></div>
</div>

<script>
const mensajes = [
"Iniciando plataforma...",
"Conectando con el sistema de inscripciones...",
"Preparando base de datos...",
"Verificando disponibilidad de cupos...",
"Todo listo 🎉"
];

let i = 0;
const texto = document.getElementById("textoCarga");
const estado = document.getElementById("estado");

const intervalo = setInterval(()=>{
    if(i < mensajes.length){
        texto.innerText = mensajes[i];
        estado.innerText = "Paso " + (i+1) + " de " + mensajes.length;
        i++;
    }
},900);

window.addEventListener("load",()=>{
    setTimeout(()=>{
        clearInterval(intervalo);
        document.getElementById("loader").classList.add("fade-out");
        setTimeout(()=>{window.location.href="home.html";},900);
    },4200);
});


/* PARTICULAS */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize",resize);

let particles = [];

for(let i=0;i<60;i++){
    particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2+1,
        dx:(Math.random()-.5)*0.5,
        dy:(Math.random()-.5)*0.5
    });
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="white";

    particles.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();

        p.x+=p.dx;
        p.y+=p.dy;

        if(p.x<0||p.x>canvas.width)p.dx*=-1;
        if(p.y<0||p.y>canvas.height)p.dy*=-1;
    });

    requestAnimationFrame(draw);
}
draw();
</script>

</body>
</html>
