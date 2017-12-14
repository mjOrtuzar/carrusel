$(document).ready(function(){
    var imgItems = $(".slider li").length;//numero de imagenes
    
    for(i=1;i<=imgItems ;i++){ //itera la cantidad de imgItems y va añadiendo iconos segun la cantidad de imagenes que haya
        $(".pagination").append("<li>"+"<span class='fa fa-circle'>"+"</span>"+"</li>");
    }

    $(".slider li").hide();
    $(".slider li:first").show();
    $(".pagination li:first").css({'color': '#CD6E2E'});

    $(".pagination li").click(pagination);
    $(".right span").click(nextSlider);
    $(".left span").click(prevSlider);

    //funciones

    function pagination(){
        var paginationPos = $(this).index() + 1; //traigo el valor de la posicion del elemento
        console.log(paginationPos);
        $(".slider li").hide();
        $(".slider li:nth-child("+ paginationPos +")").fadeIn();
    }


})


