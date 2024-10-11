function cl(t) {
    console.log(t)
}
$(".order-btn").click(function (t) {
    t.preventDefault(), swal({
        title: "Оформление заказа",
        html: '<input type="text" class="order-name" placeholder="Как вас зовут? *" /><br /><input type="text" class="order-contacts" id="phone" placeholder="+7 (___) ___-__-__ *" /><br /><textarea class="order-task" placeholder="Опишите задачу"></textarea><br /><input type="text" class="order-captcha" placeholder="Сколько будет 7 + 8? *" />',
        showCancelButton: !0,
        closeOnConfirm: !1,
        confirmButtonText: "Отправить",
        cancelButtonText: "Отмена"
    }, function () {
        "" == $(".order-name").val() || "" == $(".order-contacts").val() ? swal({
            title: "Ошибка!",
            html: 'Все поля, отмеченные "<span style="color: #f27474;">★</span>", обязательны для заполнения!',
            type: "error",
            closeOnConfirm: !1,
            confirmButtonText: "⇐ Назад",
            confirmButtonColor: "#3cd3e3"
        }, function (t) {
            t && $(".order-btn").click()
        }) : $.ajax({
            type: "POST",
            url: "/al2016kz.php",
            data: {
                event: "order_task",
                name: $(".order-name").val(),
                contacts: $(".order-contacts").val(),
                task: $(".order-task").val(),
                referrer: window.location.href
            },
            cache: !1,
            success: function (t) {
                dataLayer.push({
                    event: "formsend"
                }), swal("Заказ успешно отправлен!", "В ближайшее время мы свяжемся с вами.", "success")
            }
        })
    })
}), window.onload = function () {
    $(document).on("keydown", "#phone", function (t) {
        $("#phone").mask("+0 (000) 000 00 00", {
            placeholder: "+_ (___) ___ __ __"
        })
    })
}, $(".right-menu").click(function () {
    $(".mobile-menu-right").toggleClass("menu-right-active")
}), jQuery(document).ready(function () {
    $(".hover").hover(function () {
        var t = $(this).attr("data-hover");
        $("#dropdown-" + t).addClass("dropdown-hidden")
    }, function () {
        var t = $(this).attr("data-hover");
        $("#dropdown-" + t).removeClass("dropdown-hidden")
    }), $(".hidden-menu").hover(function () {
        $(this).attr("data-hover");
        $(this).addClass("dropdown-hidden")
    }, function () {
        $(this).attr("data-hover");
        $(this).removeClass("dropdown-hidden")
    })
}), 
// $(document).ready(function (t) {
//     if (t(".slider-tv").slick(), t(".b-header-slider").slick({
//             dots: !0,
//             arrows: !1,
//             infinite: !0,
//             speed: 900,
//             variableWidth: !1,
//             rows: 1,
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             responsive: [{
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     infinite: !0,
//                     variableWidth: !1
//                 }
//             }, {
//                 breakpoint: 992,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     variableWidth: !1
//                 }
//             }, {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     variableWidth: !1
//                 }
//             }]
//         }), t(".b-services-slider__wrapper").slick({
//             dots: !1,
//             arrows: !0,
//             infinite: !0,
//             speed: 300,
//             variableWidth: !1,
//             rows: 1,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             responsive: [{
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: !0,
//                     variableWidth: !1
//                 }
//             }, {
//                 breakpoint: 992,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     variableWidth: !1
//                 }
//             }, {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     variableWidth: !1
//                 }
//             }]
//         }), t(".fancybox").fancybox({}), t(".top-navbar").length) {
//         var e = t(".top-navbar");
//         o(e, t(".top-navbar-start").offset().top), t(window).on("scroll", function () {
//             o(e, t(".top-navbar-start").offset().top)
//         })
//     }

//     function o(e, o) {
//         var a = t(window).scrollTop();
//         e.scrollTop();
//         a > o ? e.hasClass("sticked") || e.addClass("sticked") : e.removeClass("sticked")
//     }
//     if (t(".tab-item").length && (t(".tab-wrap-link .tab-item.active").length || t(".tab-wrap-link .tab-item").eq(0).addClass("active"), t(".tab-wrap-cont .tab-item-cont.active").length || t(".tab-wrap-cont .tab-item-cont").eq(0).addClass("active"), t(".tab-item").each(function (e) {
//             t(this).click(function () {
//                 t(this).addClass("active").siblings().removeClass("active"), t(".tab-wrap-cont .tab-item-cont").eq(e).addClass("active").siblings().removeClass("active")
//             })
//         })), t(".portfolio-changer-btn").length) {
//         t(".portfolio-list");
//         let e = t(".portfolio-grid"),
//             o = t(".portfolio-block-grid"),
//             a = t(".portfolio-block-list");
//         t(".portfolio-cats");
//         t(".portfolio-changer-btn").on("click", function () {
//             e.hasClass("on") ? (a.removeClass("off").addClass("on"), o.removeClass("off").addClass("on"), e.addClass("off").removeClass("on")) : (a.removeClass("on").addClass("off"), o.removeClass("on").addClass("off"), e.addClass("on").removeClass("off")), t(window).trigger("resize").trigger("scroll")
//         })
//     }
//     if (t(".filter-links").length) {
//         let e = t(".filter-links").find(".filter-link"),
//             o = t(".filter-item");
//         e.each(function () {
//             t(this).click(function () {
//                 t(this).addClass("active").siblings().removeClass("active");
//                 let e = t(this).data("tagname");
//                 "all" == e ? (o.each(function () {
//                     t(this).removeClass("unselecta").addClass("selecta")
//                 }), t(".portfolio-car-nav").slick("slickUnfilter"), t(".portfolio-car-slider").slick("slickUnfilter"), t(".portfolio-car-nav").slick("slickGoTo", 2), t(".portfolio-car-slider").slick("slickGoTo", 2)) : (o.each(function (o) {
//                     t(this).data("tagname") == e ? (t(this).addClass("selecta").removeClass("unselecta"), t(".portfolio-car-nav").slick("slickUnfilter"), t(".portfolio-car-slider").slick("slickUnfilter"), t(".portfolio-car-nav").slick("slickFilter", ".selecta"), t(".portfolio-car-slider").slick("slickFilter", ".selecta")) : t(this).addClass("unselecta").removeClass("selecta")
//                 }), t(".portfolio-car-nav").slick("slickUnfilter"), t(".portfolio-car-slider").slick("slickUnfilter"), t(".portfolio-car-nav").slick("slickFilter", ".selecta"), t(".portfolio-car-slider").slick("slickFilter", ".selecta"))
//             })
//         })
//     }

//     function a(e, o, a) {
//         var s = t(window).scrollTop(),
//             i = t(window).height(),
//             l = o || 100;
//         e.each(function () {
//             var e = t(this).parent().parent().parent().offset().top;
//             t(this).data("delay") ? playAt = e - i + l + parseInt(t(this).data("delay"), 10) : playAt = e - i + l, playAt < s ? t(this).css({
//                 animationName: a,
//                 visibility: "visible"
//             }) : t(this).css({
//                 animationName: "none",
//                 visibility: "hidden"
//             })
//         })
//     }
//     if (t(".nohref").on("click", function (t) {
//             t.preventDefault()
//         }), a(t(".bounceInUp")), a(t(".rollIn")), t(window).scroll(function (e) {
//             a(t(".bounceInUp"), 150, "bounceInUp"), a(t(".rollIn"), 150, "rollIn")
//         }), t(".portfolio-changer-btn").length) {
//         let e = t(".portfolio-list");
//         t(".portfolio-grid"), t(".portfolio-block-list"), t(".portfolio-cats");
//         e.hasClass("on"), t(window).trigger("resize").trigger("scroll")
//     }
// }), 

$(".order-internet-magazin").click(function (t) {
    t.preventDefault(), swal({
        title: "Оформление заказа",
        html: '<input type="text" class="order-name" placeholder="Как вас зовут? *" /><br /><input type="text" class="order-contacts" id="phone" placeholder="+7 (___) ___-__-__ *" /><br /><textarea class="order-task" placeholder="Опишите задачу"></textarea><br /><input type="text" class="order-captcha" placeholder="Сколько будет 7 + 8? *" />',
        showCancelButton: !0,
        closeOnConfirm: !1,
        confirmButtonText: "Отправить",
        cancelButtonText: "Отмена"
    }, function () {
        "" == $(".order-name").val() || "" == $(".order-contacts").val() ? swal({
            title: "Ошибка!",
            html: 'Все поля, отмеченные "<span style="color: #f27474;">★</span>", обязательны для заполнения!',
            type: "error",
            closeOnConfirm: !1,
            confirmButtonText: "⇐ Назад",
            confirmButtonColor: "#3cd3e3"
        }, function (t) {
            t && $(".order-btn").click()
        }) : $.ajax({
            type: "POST",
            url: "/al2016kz.php",
            data: {
                event: "order_task",
                name: $(".order-name").val(),
                contacts: $(".order-contacts").val(),
                task: $(".order-task").val(),
                referrer: window.location.href
            },
            cache: !1,
            success: function (t) {
                "done" == t && (dataLayer.push({
                    event: "formsend"
                }), swal("Заказ успешно отправлен!", "В ближайшее время мы свяжемся с вами.", "success"))
            }
        })
    })
});
