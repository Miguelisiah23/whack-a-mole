"use strict";
$(function () {

    let moles = $("div");

    setInterval(function (){
       let random = (Math.floor(Math.random() * (9) + 1)).toString();
        console.log(random);
        moles.each(function (){
            if (random === $(this).attr('id'))
                $(this).addClass("mole");
            setTimeout(function () {
                $('.mole').removeClass("mole");
            }, 1000);
        });
    },2000);








});