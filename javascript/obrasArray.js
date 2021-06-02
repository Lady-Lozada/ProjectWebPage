let textObras = document.getElementById("textObras");
let image, cont, info;

image = [
    "../image/obras/1.webp",
    "../image/obras/2.webp",
    "../image/obras/3.webp",
    "../image/obras/18.webp",
    "../image/obras/7.webp",
    "../image/obras/5.webp",
    "../image/obras/15.webp",
    "../image/obras/6.webp",
    "../image/obras/8.webp",
    "../image/obras/9.webp",
    "../image/obras/10.webp",
    "../image/obras/11.webp",
    "../image/obras/12.webp",
    "../image/obras/14.webp",
    "../image/obras/16.webp",
    "../image/obras/13.webp",
    "../image/obras/17.webp",
    "../image/obras/4.webp",
    "../image/obras/19.webp",
    "../image/obras/20.webp",
];

info = "<ul class='ul'>";

for(cont = 0; cont < image.length; cont++){
    info += "<li>"+ "<a href='" + image[cont] + "'>" + "<img src='" + image[cont] + "'>" + "</li>";
}
info += "</ul>";

textObras.innerHTML = info;