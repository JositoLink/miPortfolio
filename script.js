// Para añadir uno nuevo, copia desde { hasta }, y lo pongo debajo.
const misJuegos = [
    {
        titulo: "La Noche Del Chin",
        herramientas: "Unreal | Blueprints",
        descripcion: "Videojuego 3D: La noche del Chin es un party game de cartas rápido y caótico, basado en faroleo, deducción y ataques, donde te enfrentarás contra 3 NPC´S",
        video: "videos/LaNocheDelChin.mp4",
        link: "laNocheDelChin.html"
    },
    {
        titulo: "Anime No Tatakai",
        herramientas: "Unity | C#",
        descripcion: "Videojuego 2D de tipo TowerDefense, inspirado en el juego WARLORDS: CALL TO ARMS.",
        video: "videos/AnimeNoTatakai.mp4",
        link: "animeNoTatakai.html"
    },
    {
        titulo: "FlappyRengoku",
        herramientas: "Unity | C#",
        descripcion: "Mi primer videojuego 2D: recreación del famoso juego FlappyBird, con temática de anime.",
        video: "videos/FlappyRengoku.mp4",
        link: "flappyRengoku.html"
    },
    {
        titulo: "Homer en el infierno",
        herramientas:  "Blender | Maya",
        descripcion: "Primer proyecto de animación.",
        video: "videos/HomerInfierno.mp4",
        link: "homerInfierno.html"
    }
];

// 2. FUNCIÓN PARA MOSTRAR LOS JUEGOS
function cargarJuegos() {
    const contenedor = document.getElementById('lista-juegos');
    contenedor.innerHTML = "";

    misJuegos.forEach(juego => {
        const html = `
            <a href="${juego.link}" class="proyecto-link">
                <div class="proyecto-card">
                    <div class="video-container">
                        <video autoplay muted loop playsinline>
                            <source src="${juego.video}" type="video/mp4">
                        </video>
                    </div>
                    <div class="info-proyecto">
                        <span class="tags">${juego.herramientas}</span>
                        <h3>${juego.titulo}</h3>
                        <p>${juego.descripcion}</p>
                        <span class="leer-mas">Ver detalles →</span>
                    </div>
                </div>
            </a>
        `;
        contenedor.innerHTML += html;
    });
}

// Ejecutar la función al cargar la página
document.addEventListener('DOMContentLoaded', cargarJuegos);