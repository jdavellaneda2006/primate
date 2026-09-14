const primates = [
  {
    nombre: "mono",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Platyrrhini.jpg",
    color: "Cafe",
    ubicacion: [51.7845, 2.3456],
    dimension: 23,
    alimentacion: "Bananas",
    pais: "Colombia",
    clasificacion: ["mamifero", "primate"],
    familia: "Platirrinios",
    enPeligro: false,
  },
  {
    nombre: "chimpancé",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Chimpanzee_(Pan_troglodytes).jpg",
    color: "Marrón oscuro",
    ubicacion: [1.6508, 13.5636],
    dimension: 90,
    alimentacion: "Frutas e insectos",
    pais: "República Democrática del Congo",
    clasificacion: ["mamifero", "primate"],
    familia: "Hominidae",
    enPeligro: true,
  },
  {
    nombre: "gorila",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Western_lowland_gorilla_(Gorilla_gorilla_gorilla).jpg",
    color: "Negro",
    ubicacion: [0.8037, 11.6094],
    dimension: 170,
    alimentacion: "Hojas y frutas",
    pais: "Gabón",
    clasificacion: ["mamifero", "primate"],
    familia: "Hominidae",
    enPeligro: true,
  },
  {
    nombre: "orangután",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Orangutan_Kalimantan_(Pongo_pygmaeus).jpg",
    color: "Naranja rojizo",
    ubicacion: [0.9619, 114.5548],
    dimension: 140,
    alimentacion: "Frutas",
    pais: "Indonesia",
    clasificacion: ["mamifero", "primate"],
    familia: "Hominidae",
    enPeligro: true,
  },
  {
    nombre: "mono aullador",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Red-handed_howler_monkey_(Alouatta_belzebul).jpg",
    color: "Negro y rojizo",
    ubicacion: [-3.4653, -62.2159],
    dimension: 55,
    alimentacion: "Hojas y frutas",
    pais: "Brasil",
    clasificacion: ["mamifero", "primate"],
    familia: "Atelidae",
    enPeligro: true,
  },
  {
    nombre: "lémur de cola anillada",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Ring-tailed_lemur_(Lemur_catta).jpg",
    color: "Gris con cola blanca y negra",
    ubicacion: [-23.7, 45.5],
    dimension: 45,
    alimentacion: "Frutas, hojas e insectos",
    pais: "Madagascar",
    clasificacion: ["mamifero", "primate"],
    familia: "Lemuridae",
    enPeligro: true,
  },
  {
    nombre: "mandril",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Mandrill.jpg",
    color: "Multicolor (rostro azul y rojo)",
    ubicacion: [0.4162, 9.4673],
    dimension: 80,
    alimentacion: "Frutas, insectos y pequeños animales",
    pais: "Camerún",
    clasificacion: ["mamifero", "primate"],
    familia: "Cercopithecidae",
    enPeligro: true,
  },
  {
    nombre: "tamarino cabeciblanco",
    imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Lisztaffe_-_Cottontop_Tamarin_-_Saguinus_oedipus.jpg",
    color: "Blanco y café",
    ubicacion: [8.7479, -75.8814],
    dimension: 24,
    alimentacion: "Frutas e insectos",
    pais: "Colombia",
    clasificacion: ["mamifero", "primate"],
    familia: "Callitrichidae",
    enPeligro: true,
  },
];

function crearTarjeta(primate) {
  const badge = primate.enPeligro
    ? '<span class="badge si">Sí</span>'
    : '<span class="badge no">No</span>';

  return `
    <div class="tarjeta-primate">
      <img class="imagen" src="${primate.imagen}" alt="Imagen de ${primate.nombre}">
      <div class="card-body">
        <h1 class="tituloNombre">${primate.nombre}</h1>
        <p class="subtitulo">Ficha del primate</p>

        <div class="fila">
          <span class="etiqueta">🧬 Clasificación</span>
          <span class="valor">${primate.clasificacion.join(", ")}</span>
        </div>
        <div class="fila">
          <span class="etiqueta">🎨 Color</span>
          <span class="valor">${primate.color}</span>
        </div>
        <div class="fila">
          <span class="etiqueta">👪 Familia</span>
          <span class="valor">${primate.familia}</span>
        </div>
        <div class="fila">
          <span class="etiqueta">📍 Ubicación</span>
          <span class="valor">${primate.ubicacion.join(", ")}</span>
        </div>
        <div class="fila">
          <span class="etiqueta">🌎 País</span>
          <span class="valor">${primate.pais}</span>
        </div>
        <div class="fila">
          <span class="etiqueta">📏 Dimensión</span>
          <span class="valor">${primate.dimension}mm.</span>
        </div>
        <div class="fila">
          <span class="etiqueta">🍌 Alimentación</span>
          <span class="valor">${primate.alimentacion}</span>
        </div>
        <div class="fila">
          <span class="etiqueta">⚠️ En peligro</span>
          <span class="valor">${badge}</span>
        </div>
      </div>
    </div>
  `;
}

const contenedor = document.getElementById("contenedor-primates");
contenedor.innerHTML = primates.map(crearTarjeta).join("");

console.log(`Se renderizaron ${primates.length} primates.`);
