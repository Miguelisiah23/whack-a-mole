"use strict";
$(function () {

    let moles = $("div");
    $(document).keyup(function (event) {
        let key = event.keyCode;
        console.log(key);
        if (key.toString() ==='13') {
            $(".circle").css("display","block");
            $("h1").css("display","none");
            whackAMole();
        }

    });


    function whackAMole() {
       setInterval(function (){
         let random = (Math.floor(Math.random() * (9) + 1)).toString();
           moles.each(function (){
               if (random === $(this).attr('id'))
                   $(this).first().addClass("mole");
               setTimeout(function () {
                   $('.mole').removeClass("mole");
               }, 1000);
           });
       },2000);

   }




});