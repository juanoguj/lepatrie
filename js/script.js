imagenes = [
    "blazer.jpg",
    "bolsa.jpg",
    "camisa.jpg",
    "chaleca.jpg",
    "guantes.jpg",
    "mini.jpg",
    "polleda.jpg",
    "pollera.jpg",
    "remegulable.jpg",
    "saco.jpg",
    "top.jpg",
    "entera.jpg"
];

function mostrarProductos() {
    random_index = Math.floor(Math.random() * imagenes.length);
    selected_img = imagenes[random_index];
    document.getElementById("img").src = `./images/${selected_img}`
};