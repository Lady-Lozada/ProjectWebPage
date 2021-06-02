let textGaleria = document.getElementById("textGaleria");
let image, cont, info;

image = [
    "../image/galeria/1.jpg",
    "../image/galeria/2.jpg",
    "../image/galeria/20.jpg",
    "../image/galeria/3.jpg",
    "../image/galeria/4.jpg",
    "../image/galeria/5.jpg",
    "../image/galeria/6.jpg",
    "../image/galeria/7.jpg",
    "../image/galeria/8.jpg",
    "../image/galeria/9.jpg",
    "../image/galeria/10.jpg",
    "../image/galeria/11.jpg",
    "../image/galeria/12.jpg",
    "../image/galeria/19.jpg",
    "../image/galeria/13.jpg",
    "../image/galeria/14.jpg",
    "../image/galeria/15.jpg",
    "../image/galeria/16.jpg",
    "../image/galeria/17.jpg",
    "../image/galeria/18.jpg",
];

info = "<ul class='ul'>";

for(cont = 0; cont < image.length; cont++){
    info += "<li>"+ "<a href='" + image[cont] + "'>" + "<img src='" + image[cont] + "'>" + "</li>";
}
info += "</ul>";

textGaleria.innerHTML = info;