//это фиксированное всплывающее меню при скроле
// window.onscroll = function showHeader() {
//     var header = document.querySelector('.navigation_bar_nav');
//     if (window.pageYOffset > 300) {
//         header.classList.add('header_fixsed');
//     } else {
//         header.classList.remove('header_fixsed');
//     }
// }

//это фиксированное всплывающее меню при скроле 

var gas = {
    offset: 500
}

var header = new Headhesive('.navigation_bar_nav', gas);

 // это tventy-twenty блок

$(function () {
    $(".box").twentytwenty({ 
        default_offset_pct: 0.5,
        no_overlay: true,
        move_slider_on_hover: true
    });
});

// -------------------------------------Это скрывающийся и появляюшийся блок(все результаты)

var acardion = function (state) {
    document.getElementById('hidden_block_tventy_tventy_main').style.overflow = state

}

//-------------------------------------------------------------- это блок появляюшейся карты
var show = function (state) {
    document.getElementById('modalForm_05').style.display = state
    document.getElementById('filter_05').style.display = state
}

//----------------------------------------------------------------- это таб мужчины и женщины

$(document).ready(function () {
    $('.tabs_triggers_iteams').click(function (e) {
        e.preventDefault()

        $('.tabs_triggers_iteams').removeClass('tabs_triggers_iteams--active')
        $('.tabs_content_iteams').removeClass('tabs_content_iteams--active')

        $(this).addClass('tabs_triggers_iteams--active')
        $($(this).attr('href')).addClass('tabs_content_iteams--active')
    });

    $('.tabs_triggers_iteams:first').click();
})

// --------------------------------------------------------------Это акардион--------------------------------------
$(document).ready(function () {
    $('.accordion-iteam_trigger').click(function () {
        $(this).next('.accordion-iteam_content').slideToggle()
    })
})

//---------------------------------------------------------------- это блок появляюшейся формы обратной связи

var show_2 = function (state) {
    document.getElementById('modalForm_06').style.display = state
    document.getElementById('filter_06').style.display = state
}

//----------------------------------------------------------------  это появляюшейся блок ВЫСОКИЕ СТАНДАРТЫ НАШЕЙ КЛИНИКИ

var show_3 = function (state) {  //------ качество графтов

    document.getElementById('modalForm_1').style.display = state
    document.getElementById('filter_1').style.display = state
}

var show_4 = function (state) {  //------ гарантированный результат

    document.getElementById('modalForm_2').style.display = state
    document.getElementById('filter_2').style.display = state
}

var show_5 = function (state) {  //------ Опыт

    document.getElementById('modalForm_3').style.display = state
    document.getElementById('filter_3').style.display = state
}


var show_6 = function (state) {  //------ Современные premium технологии

    document.getElementById('modalForm_4').style.display = state
    document.getElementById('filter_4').style.display = state
}
