document.addEventListener("DOMContentLoaded", function () {
   var carousel = document.getElementById("carouselExample");
   var carouselInstance = new bootstrap.Carousel(carousel, {
     interval: 1000 // Intervalo de 3 segundos
   });

   $(document).ready(function() {
    $("#navbar").on('hide.bs.collapse', function () {
        $("#contenedorOpciones").hide();
    });

    $("#mostrarOpciones").click(function() {
        $("#contenedorOpciones").toggle();
    });
});

 });

