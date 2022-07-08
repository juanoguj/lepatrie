imagenes = [
    "blazer.jpg",
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
    document.getElementById("img").src = `./images/${selected_img}`;
    random_index = Math.floor(Math.random() * imagenes.length);
    selected_img = imagenes[random_index];
    document.getElementById("img2").src = `./images/${selected_img}`;
    random_index = Math.floor(Math.random() * imagenes.length);
    selected_img = imagenes[random_index];
    document.getElementById("img3").src = `./images/${selected_img}`;
    random_index = Math.floor(Math.random() * imagenes.length);
    selected_img = imagenes[random_index];
    document.getElementById("img4").src = `./images/${selected_img}`;
    random_index = Math.floor(Math.random() * imagenes.length);
    selected_img = imagenes[random_index];
    document.getElementById("img5").src = `./images/${selected_img}`;
    random_index = Math.floor(Math.random() * imagenes.length);
    selected_img = imagenes[random_index];
    document.getElementById("img6").src = `./images/${selected_img}`;
    random_index = Math.floor(Math.random() * imagenes.length);
    selected_img = imagenes[random_index];
    document.getElementById("img7").src = `./images/${selected_img}`;
    random_index = Math.floor(Math.random() * imagenes.length);
    selected_img = imagenes[random_index];
    document.getElementById("img8").src = `./images/${selected_img}`;
    random_index = Math.floor(Math.random() * imagenes.length);
    selected_img = imagenes[random_index];
    document.getElementById("img9").src = `./images/${selected_img}`;
    random_index = Math.floor(Math.random() * imagenes.length);
    selected_img = imagenes[random_index];
    document.getElementById("img10").src = `./images/${selected_img}`;
    random_index = Math.floor(Math.random() * imagenes.length);
    selected_img = imagenes[random_index];
    document.getElementById("img11").src = `./images/${selected_img}`;
    random_index = Math.floor(Math.random() * imagenes.length);
    selected_img = imagenes[random_index];
    document.getElementById("img12").src = `./images/${selected_img}`;
};