let primate = {
nombre: "mono",
imagen: "https://commons.wikimedia.org/wiki/Special:FilePath/Platyrrhini.jpg",
color: "Cafe", 
ubicacion :[51.7845 , 2.3456],
dimension : 23, 
alimentacion : "Bananas",
pais: "Colombia",
clasificacion : ["mamifero", "primate"],
familia : "Platirrinios",
enPeligro: false,
}
document.getElementById("tituloNombre").textContent = primate.nombre;
document.getElementById("imagen").src = primate.imagen;
document.getElementById("color").textContent = primate.color;
document.getElementById("ubicacion").textContent = primate.ubicacion.join(", ");
document.getElementById("dimension").textContent =   primate.dimension + "mm.";
document.getElementById("alimentacion").textContent = primate.alimentacion;
document.getElementById("pais").textContent = primate.pais;
document.getElementById("clasificacion").textContent = primate.clasificacion.join(", ");
document.getElementById("familia").textContent = primate.familia;
document.getElementById("enPeligro").innerHTML = primate.enPeligro
  ? '<span class="badge si">Sí</span>'
  : '<span class="badge no">No</span>';

console.log(primate.pais);
console.log(primate.clasificacion[0]);
//definicion de las variables vinculadas al html (tengo hambre)
