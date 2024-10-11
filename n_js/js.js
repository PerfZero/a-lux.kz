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

        function t(e) {
            var s = parseInt(e, 10),
                t = {};
            return s > 1 ? (t.bd = s, t.b1 = parseInt(s / 2, 10) + 1, t.b2 = parseInt(s / 2, 10)) : t.bd = t.b1 = t.b2 = 1, t
        }
        if (s(e(".scrollin")), e(window).scroll(function() {
                s(e(".scrollin"), 150, "scrolled")
            }), e(".carousel").length) {
            var o = e(".carousel");
            o.each(function() {
                var s = e(this),
                    o = t(s.data("s2show") ? s.data("s2show") : 4),
                    i = s.data("autoplay"),
                    n = s.find(".carousel-as-nav").length ? s.find(".carousel-as-nav-inner") : "",
                    l = s.find(".carousel-inner"),
                    r = l.slick({
                        arrows: !1,
                        slidesToShow: o.bd,
                        dots: !!s.attr("data-dots"),
                        autoplay: i,
                        autoplaySpeed: 7500,
                        asNavFor: n,
                        responsive: [{
                            breakpoint: 992,
                            settings: {
                                slidesToShow: o.b1
                            }
                        }, {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: o.b2
                            }
                        }, {
                            breakpoint: 520,
                            settings: {
                                slidesToShow: 1
                            }
                        }]
                    });
                s.find(".carousel-arrow.left").click(function() {
                    r.slick("slickPrev")
                }), s.find(".carousel-arrow.right").click(function() {
                    r.slick("slickNext")
                });
                var a = s.find(".carousel-nav"),
                    c = a.find(".carousel-nav-item"),
                    d = a.find(".active");
                if (d.length || c.eq(0).addClass("active"), r.on("afterChange", function(e, s, t) {
                        c.siblings().removeClass("active"), c.eq(t).addClass("active")
                    }), c.each(function(s) {
                        e(this).click(function() {
                            r.slick("slickGoTo", s);
                            var t = e(this);
                            r.on("afterChange", function(e, s, o) {
                                t.siblings().removeClass("active"), c.eq(o).addClass("active")
                            })
                        })
                    }), s.find(".carousel-as-nav").length) {
                    var u = s.find(".carousel-as-nav"),
                        f = s.find(".carousel-as-nav-inner");
                    o = t(u.data("s2show") ? u.data("s2show") : 6), i = u.data("autoplay");
                    var m = f.slick({
                        slidesToShow: o.bd,
                        asNavFor: r,
                        arrows: !1,
                        infinite: !1,
                        variableWidth: !0,
                        centerMode: !0,
                        autoplay: i,
                        focusOnSelect: !0,
                        responsive: [{
                            breakpoint: 992,
                            settings: {
                                slidesToShow: o.b1
                            }
                        }, {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: o.b2
                            }
                        }, {
                            breakpoint: 520,
                            settings: {
                                slidesToShow: 2
                            }
                        }]
                    });
                    u.find(".carousel-arrow.left").click(function() {
                        m.slick("slickPrev")
                    }), u.find(".carousel-arrow.right").click(function() {
                        m.slick("slickNext")
                    })
                }
            })
        }
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
    })
    //  $(document).ready(function() {
    //     document.documentElement.clientWidth < 901 && $(".serv-slider").slick({
    //         prevArrow: '<button class="carousel-arrow right my-sl-ar my-sl-ar-l"></button>',
    //         nextArrow: '<button class="carousel-arrow left my-sl-ar my-sl-ar-r"></button>',
    //         responsive: [{
    //             breakpoint: 900,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //                 infinite: !0
    //             }
    //         }, {
    //             breakpoint: 650,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: !0
    //             }
    //         }]
    //     })
    // }), $(document).ready(function() {
    //     document.documentElement.clientWidth < 901 && $(".slider-LuxCMS").slick({
    //         prevArrow: '<button class="carousel-arrow right my-sl-ar my-sl-ar-l text-sl-ar"></button>',
    //         nextArrow: '<button class="carousel-arrow left my-sl-ar my-sl-ar-r text-sl-ar"></button>',
    //         responsive: [{
    //             breakpoint: 900,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: !0
    //             }
    //         }, {
    //             breakpoint: 650,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: !0
    //             }
    //         }]
    //     })
    // }), $(document).ready(function() {
    //     document.documentElement.clientWidth < 901 && $(".reviwes-sl-itself").slick({
    //         prevArrow: '<button class="carousel-arrow right my-sl-ar my-sl-ar-l text-sl-ar"></button>',
    //         nextArrow: '<button class="carousel-arrow left my-sl-ar my-sl-ar-r text-sl-ar"></button>',
    //         responsive: [{
    //             breakpoint: 900,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: !0
    //             }
    //         }, {
    //             breakpoint: 650,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: !0
    //             }
    //         }]
    //     })
    // }), $(document).ready(function() {
    //     document.documentElement.clientWidth < 901 && $(".about-slider").slick({
    //         prevArrow: '<button class="carousel-arrow right my-sl-ar my-sl-ar-l text-sl-ar"></button>',
    //         nextArrow: '<button class="carousel-arrow left my-sl-ar my-sl-ar-r text-sl-ar"></button>',
    //         responsive: [{
    //             breakpoint: 900,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: !0
    //             }
    //         }, {
    //             breakpoint: 650,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: !0
    //             }
    //         }]
    //     })
    // }), document.documentElement.clientWidth < 620 && (document.getElementsByClassName("mod").className = "left");