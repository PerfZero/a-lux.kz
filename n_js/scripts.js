$(document).ready(function() {

    if ($('.brands_slider').length) {
        var brandsSlider = $('.brands_slider');

        brandsSlider.owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            nav: false,
            dots: false,
            autoWidth: true,
            items: 8,
            margin: 42
        });

        if ($('.brands_prev').length) {
            var prev = $('.brands_prev');
            prev.on('click', function() {
                brandsSlider.trigger('prev.owl.carousel');
            });
        }

        if ($('.brands_next').length) {
            var next = $('.brands_next');
            next.on('click', function() {
                brandsSlider.trigger('next.owl.carousel');
            });
        }
    }
});

jQuery(document).ready(function(e) {
        function s(s, t, o) {
            var i = e(window).scrollTop(),
                n = e(window).height(),
                l = t || 100,
                r = o || "fade-in";
            s.each(function() {
                var s = e(this).offset().top;
                e(this).data("delay") ? playAt = s - n + l + parseInt(e(this).data("delay"), 10) : playAt = s - n + l, playAt < i ? e(this).addClass(r) : e(this).removeClass(r)
            })
        }

        //        function t(e) {
        //            var s = parseInt(e, 10),
        //                t = {};
        //            return s > 1 ? (t.bd = s, t.b1 = parseInt(s / 2, 10) + 1, t.b2 = parseInt(s / 2, 10)) : t.bd = t.b1 = t.b2 = 1, t
        //        }
        //        if (s(e(".scrollin")), e(window).scroll(function () {
        //                s(e(".scrollin"), 150, "scrolled")
        //            }), o(".carousel").length) {
        //            var o = e(".carousel");
        //            o.each(function () {
        //                var s = e(this),
        //                    o = t(s.data("s2show") ? s.data("s2show") : 4),
        //                    i = s.data("autoplay"),
        //                    n = s.find(".carousel-as-nav").length ? s.find(".carousel-as-nav-inner") : "",
        //                    l = s.find(".carousel-inner"),
        //                    r = l.slick({
        //                        arrows: !1,
        //                        slidesToShow: o.bd,
        //                        dots: !!s.attr("data-dots"),
        //                        autoplay: i,
        //                        autoplaySpeed: 7500,
        //                        asNavFor: n,
        //                        responsive: [{
        //                            breakpoint: 992,
        //                            settings: {
        //                                slidesToShow: o.b1
        //                            }
        //                        }, {
        //                            breakpoint: 768,
        //                            settings: {
        //                                slidesToShow: o.b2
        //                            }
        //                        }, {
        //                            breakpoint: 520,
        //                            settings: {
        //                                slidesToShow: 1
        //                            }
        //                        }]
        //                    });
        //                s.find(".carousel-arrow.left").click(function () {
        //                    r.slick("slickPrev")
        //                }), s.find(".carousel-arrow.right").click(function () {
        //                    r.slick("slickNext")
        //                });
        //                var a = s.find(".carousel-nav"),
        //                    c = a.find(".carousel-nav-item"),
        //                    d = a.find(".active");
        //                if (d.length || c.eq(0).addClass("active"), r.on("afterChange", function (e, s, t) {
        //                        c.siblings().removeClass("active"), c.eq(t).addClass("active")
        //                    }), c.each(function (s) {
        //                        e(this).click(function () {
        //                            r.slick("slickGoTo", s);
        //                            var t = e(this);
        //                            r.on("afterChange", function (e, s, o) {
        //                                t.siblings().removeClass("active"), c.eq(o).addClass("active")
        //                            })
        //                        })
        //                    }), s.find(".carousel-as-nav").length) {
        //                    var u = s.find(".carousel-as-nav"),
        //                        f = s.find(".carousel-as-nav-inner");
        //                    o = t(u.data("s2show") ? u.data("s2show") : 6), i = u.data("autoplay");
        //                    var m = f.slick({
        //                        slidesToShow: o.bd,
        //                        asNavFor: r,
        //                        arrows: !1,
        //                        infinite: !1,
        //                        variableWidth: !0,
        //                        centerMode: !0,
        //                        autoplay: i,
        //                        focusOnSelect: !0,
        //                        responsive: [{
        //                            breakpoint: 992,
        //                            settings: {
        //                                slidesToShow: o.b1
        //                            }
        //                        }, {
        //                            breakpoint: 768,
        //                            settings: {
        //                                slidesToShow: o.b2
        //                            }
        //                        }, {
        //                            breakpoint: 520,
        //                            settings: {
        //                                slidesToShow: 2
        //                            }
        //                        }]
        //                    });
        //                    u.find(".carousel-arrow.left").click(function () {
        //                        m.slick("slickPrev")
        //                    }), u.find(".carousel-arrow.right").click(function () {
        //                        m.slick("slickNext")
        //                    })
        //                }
        //            })
        //        }
        if (e("#mobile-button").length) {
            var i = e(".mobile-button"),
                n = e("#mobile-menu"),
                l = e("#mobile-menu .mobile-menu-inner"),
                r = e(".mobile-menu-overlay"),
                a = e(".collect-in");
            a.each(function() {
                var s = e(this).children().clone();
                l.append(s)
            }), i.click(function() {
                r.toggleClass("open"), e("body").toggleClass("open"), e(this).toggleClass("open"), n.toggleClass("open")
            }), r.click(function() {
                i.trigger("click")
            })
        }
    }),

    // $(document).ready(function () {
    //         document.documentElement.clientWidth < 901 && $(".features-slider-1").slick({
    //             prevArrow: '<button class="carousel-arrow right my-sl-ar my-sl-ar-l"></button>',
    //             nextArrow: '<button class="carousel-arrow left my-sl-ar my-sl-ar-r"></button>',
    //             responsive: [{
    //                 breakpoint: 900,
    //                 settings: {
    //                     slidesToShow: 2,
    //                     slidesToScroll: 1,
    //                     infinite: !0
    //                 }
    //             }, {
    //                 breakpoint: 650,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1,
    //                     infinite: !0
    //                 }
    //             }]
    //         })
    //     }), $(document).ready(function () {
    //         document.documentElement.clientWidth < 901 && $(".serv-slider").slick({
    //             prevArrow: '<button class="carousel-arrow right my-sl-ar my-sl-ar-l"></button>',
    //             nextArrow: '<button class="carousel-arrow left my-sl-ar my-sl-ar-r"></button>',
    //             responsive: [{
    //                 breakpoint: 900,
    //                 settings: {
    //                     slidesToShow: 2,
    //                     slidesToScroll: 1,
    //                     infinite: !0
    //                 }
    // }, {
    //                 breakpoint: 650,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1,
    //                     infinite: !0
    //                 }
    // }]
    //         })
    //     }),
    //     $(document).ready(function () {
    //         document.documentElement.clientWidth < 901 && $(".reviwes-sl-itself").slick({
    //             prevArrow: '<button class="carousel-arrow right my-sl-ar my-sl-ar-l text-sl-ar"></button>',
    //             nextArrow: '<button class="carousel-arrow left my-sl-ar my-sl-ar-r text-sl-ar"></button>',
    //             responsive: [{
    //                 breakpoint: 900,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1,
    //                     infinite: !0
    //                 }
    //         }, {
    //                 breakpoint: 650,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1,
    //                     infinite: !0
    //                 }
    //         }]
    //         })
    //     }), $(document).ready(function () {
    //         document.documentElement.clientWidth < 901 && $(".about-slider").slick({
    //             prevArrow: '<button class="carousel-arrow right my-sl-ar my-sl-ar-l text-sl-ar"></button>',
    //             nextArrow: '<button class="carousel-arrow left my-sl-ar my-sl-ar-r text-sl-ar"></button>',
    //             responsive: [{
    //                 breakpoint: 900,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1,
    //                     infinite: !0
    //                 }
    //         }, {
    //                 breakpoint: 650,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1,
    //                     infinite: !0
    //                 }
    //         }]
    //         })
    //     }), document.documentElement.clientWidth < 620 && (document.getElementsByClassName("mod").className = "left");

    $(".order-btn").click(function(t) {
        t.preventDefault(), swal({
            title: "Оформление заказа",
            html: '<input type="text" class="order-name" placeholder="Как вас зовут? *" /><br /><input type="text" class="order-contacts" id="phone" placeholder="+7 (___) ___-__-__ *" /><br /><textarea class="order-task" placeholder="Опишите задачу"></textarea><br /><input type="text" class="order-captcha" placeholder="Сколько будет 7 + 8? *" />',
            showCancelButton: !0,
            closeOnConfirm: !1,
            confirmButtonText: "Отправить",
            cancelButtonText: "Отмена"
        }, function() {
            "" == $(".order-name").val() || "" == $(".order-contacts").val() ? swal({
                title: "Ошибка!",
                html: 'Все поля, отмеченные "<span style="color: #f27474;">★</span>", обязательны для заполнения!',
                type: "error",
                closeOnConfirm: !1,
                confirmButtonText: "⇐ Назад",
                confirmButtonColor: "#3cd3e3"
            }, function(t) {
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
                success: function(t) {
                    dataLayer.push({
                        event: "formsend"
                    }), swal("Заказ успешно отправлен!", "В ближайшее время мы свяжемся с вами.", "success")
                }
            })
        })
    }), window.onload = function() {
        $(document).on("keydown", "#phone", function(t) {
            $("#phone").mask("+0 (000) 000 00 00", {
                placeholder: "+_ (___) ___ __ __"
            })
        })
    }, $(".right-menu").click(function() {
        $(".mobile-menu-right").toggleClass("menu-right-active")
    }), jQuery(document).ready(function() {
        $(".hover").hover(function() {
            var t = $(this).attr("data-hover");
            $("#dropdown-" + t).addClass("dropdown-hidden")
        }, function() {
            var t = $(this).attr("data-hover");
            $("#dropdown-" + t).removeClass("dropdown-hidden")
        }), $(".hidden-menu").hover(function() {
            $(this).attr("data-hover");
            $(this).addClass("dropdown-hidden")
        }, function() {
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
    // $(".order-internet-magazin").click(function (t) {
    //     t.preventDefault(), swal({
    //         title: "Оформление заказа",
    //         html: '<input type="text" class="order-name" placeholder="Как вас зовут? *" /><br /><input type="text" class="order-contacts" id="phone" placeholder="+7 (___) ___-__-__ *" /><br /><textarea class="order-task" placeholder="Опишите задачу"></textarea><br /><input type="text" class="order-captcha" placeholder="Сколько будет 7 + 8? *" />',
    //         showCancelButton: !0,
    //         closeOnConfirm: !1,
    //         confirmButtonText: "Отправить",
    //         cancelButtonText: "Отмена"
    //     }, function () {
    //         "" == $(".order-name").val() || "" == $(".order-contacts").val() ? swal({
    //             title: "Ошибка!",
    //             html: 'Все поля, отмеченные "<span style="color: #f27474;">★</span>", обязательны для заполнения!',
    //             type: "error",
    //             closeOnConfirm: !1,
    //             confirmButtonText: "⇐ Назад",
    //             confirmButtonColor: "#3cd3e3"
    //         }, function (t) {
    //             t && $(".order-btn").click()
    //         }) : $.ajax({
    //             type: "POST",
    //             url: "/al2016kz.php",
    //             data: {
    //                 event: "order_task",
    //                 name: $(".order-name").val(),
    //                 contacts: $(".order-contacts").val(),
    //                 task: $(".order-task").val(),
    //                 referrer: window.location.href
    //             },
    //             cache: !1,
    //             success: function (t) {
    //                 "done" == t && (dataLayer.push({
    //                     event: "formsend"
    //                 }), swal("Заказ успешно отправлен!", "В ближайшее время мы свяжемся с вами.", "success"))
    //             }
    //         })
    //     })
    // });

    /*document.getElementById("uslugs").onmouseover=function(){
      document.getElementById("dropdown-services2").style.display = "block";
    }*/
    /*document.getElementById("uslugs").onmouseout=function(){
      document.getElementById("dropdown-services2").style.display = "none";
    }*/


    // var currentTab = 0;
    // showTab(currentTab);

    // function showTab(n) {

    //     var x = document.getElementsByClassName("tab");
    //     x[n].style.display = "block";

    //     if (n == 0) {
    //         document.getElementById("wrapper2").style.display = "none";
    //     } else {
    //         document.getElementById("wrapper2").style.display = "flex";
    //     }
    //     if (n == (x.length - 1)) {
    //         document.getElementById("wrapper3").style.display = "block";
    //     } else {
    //         // document.getElementById("nextBtn").innerHTML = "Далее";
    //     }

    //     fixStepIndicator(n)
    // }

    function nextPrev(n) {
        var x = document.getElementsByClassName("tab");
        if (n == 1 && !validateForm()) return false;
        if (currentTab + n >= x.length) {
            // document.getElementById("regForm").submit();
            $.ajax({
                type: 'POST',
                url: '/al2016kz.php',
                data: {
                    event: 'order_task',
                    name: $('.order-name').val(),
                    contacts: $('.order-contacts').val(),
                    task: "SMM заказ"
                },
                cache: false,
                success: function(responce) {
                    if (responce == 'done') {
                        swal('Заказ успешно отправлен!', 'В ближайшее время мы свяжемся с вами.', 'success');
                    }
                }
            });
            return false;
        } else {
            x[currentTab].style.display = "none";
            currentTab = currentTab + n;
            showTab(currentTab);
        }
    }

function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            y[i].className += " invalid";
            valid = false;
        }
    }
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid;
}

function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
}