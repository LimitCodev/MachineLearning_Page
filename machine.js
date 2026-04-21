function iluminar(idImagen) {
    document.getElementById(idImagen).style.borderColor = "#ffffff";
    document.getElementById(idImagen).style.boxShadow = "0px 0px 15px #ffcc00";
}
function apagar(idImagen) {
    document.getElementById(idImagen).style.borderColor = "#ffcc00";
    document.getElementById(idImagen).style.boxShadow = "none";
}
