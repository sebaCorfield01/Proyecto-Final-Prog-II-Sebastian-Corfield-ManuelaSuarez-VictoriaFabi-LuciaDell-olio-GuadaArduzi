$(document).ready(function(){
    // Marca inicialmente el botón "Todos" como activo
    $('.contenedor .button-generos[category="todos"]').addClass('ct_item-active');

    // Evento click en los botones de género
    $('.button-generos').click(function(){
        // Obtiene la categoría del botón seleccionado
        var catProduct = $(this).attr('category');
        console.log(catProduct);
        
        // Remueve la clase activa de todos los botones y agrega solo al seleccionado
        $('.button-generos').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        $('.div-juegos').hide();

        $('.div-juegos[category = "'+catProduct+'"]').show();

    });
    $('.button-generos[category="todos"]').click(function(){
        $('.div-juegos').show();
    });
});
 