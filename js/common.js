//  Created by Dicky on 2016/9/29.
$().ready(function () {
    if (typeof(pageFlag) == "undefined") {
        pageFlag = "whatever";
    }
    switch (pageFlag) {
        case "index":
            (function () {
                var mySwiper = new Swiper('#swiper-exchange', {
                    autoplay: 3000,
                    speed: 1000,
                    loop: true,
                    slidesPerView: 5,//'auto'
                    slidesPerGroup: 5,
                    spaceBetween: 24,
                    pagination: "#swiper-pagination-exchange",
                    paginationClickable: true,
                    autoplayDisableOnInteraction: false
                });
                var productFig = $(".product-item");
                productFig.mouseover(function () {
                    mySwiper.stopAutoplay();
                });
                productFig.mouseout(function () {
                    mySwiper.startAutoplay();
                });
                var dataGrow = (function () {
                    function show_num(n, index) {
                        var len = String(n).length;
                        for (var i = 0; i < len; i++) {
                            var num = String(n).charAt(i);
                            var current;
                            if (num != ',') {
                                current = $("<i></i>");
                                $(".num:eq(" + index + ")").append(current);
                                var y = -parseInt(num) * 34; //y轴位置
                            } else {
                                $(".num:eq(" + index + ")").append("<span style='font-size: 22px'>,</span>");
                            }
                            current.animate({ //滚动动画
                                    backgroundPositionY: String(y) + 'px'
                                }, 1000, 'swing'
                            );
                        }
                    }

                    for (var index = 0; index < $(".num[data-value]").length; index++) {
                        var currData = $('.num[data-value]').eq(index).attr('data-value');
                        show_num(currData, index);
                    }
                })();
            })();
            break;
        case "mall":
            console.log("cccccmalll");
            break;
        case "recycle":
            (function () {
                //banner swiper
                var headSwiper = new Swiper('#swiper-head', {
                    effect: 'fade',
                    autoplay: 3000,
                    speed: 1000,
                    loop: true,
                    autoplayDisableOnInteraction: false,
                    pagination: ".swiper-pagination",
                    paginationClickable: true
                });
                var swiperHead = $("#swiper-head");
                swiperHead.mouseover(function () {
                    headSwiper.stopAutoplay();
                });
                swiperHead.mouseout(function () {
                    headSwiper.startAutoplay();
                });

                $(".banner-cont .swiper-button-next").click(function(){headSwiper.slideNext(false,1000)});
                $(".banner-cont .swiper-button-prev").click(function(){headSwiper.slidePrev(false,1000)});

                //comments swiper
                var mySwiper = new Swiper('#swiper-comment', {
                    autoplay: 3000,
                    speed: 1000,
                    loop: true,
                    slidesPerView: 5,//'auto'
                    slidesPerGroup: 5,
                    spaceBetween: 24,
                    pagination: "#swiper-pagination-comment",
                    paginationClickable: true,
                    autoplayDisableOnInteraction: false,
                    // preventClicks: false
                });
                var commentCont = $(".comment-cont");
                commentCont.mouseover(function () {
                    mySwiper.stopAutoplay();
                });
                commentCont.mouseout(function () {
                    mySwiper.startAutoplay();
                });

                var rolllingSwiper = new Swiper("#rolling-title", {
                    direction: 'vertical',
                    autoplay: 1500,
                    speed: 1000,
                    loop: true
                });
                var rollingTitles = $("#rolling-title");
                rollingTitles.mouseover(function () {
                    rolllingSwiper.stopAutoplay();
                });
                rollingTitles.mouseout(function () {
                    rolllingSwiper.startAutoplay();
                });
            })();
            break;
        case "pts-mall":
            (function () {
                var headSwiper = new Swiper("#swiper-head", {
                    effect: 'fade',
                    autoplay: 3000,
                    speed: 1000,
                    loop: true,
                    pagination: ".swiper-pagination",
                    paginationClickable: true,
                    autoplayDisableOnInteraction: false,
                    simulateTouch:false,

                });
                var swiperHead = $("#swiper-head");
                swiperHead.mouseover(function () {
                    headSwiper.stopAutoplay();
                });
                swiperHead.mouseout(function () {
                    headSwiper.startAutoplay();
                });

                $(".banner-cont .swiper-button-next").click(function(){headSwiper.slideNext(false,1000)});
                $(".banner-cont .swiper-button-prev").click(function(){headSwiper.slidePrev(false,1000)});

                var rolllingSwiper = new Swiper("#rolling-title", {
                    direction: 'vertical',
                    autoplay: 1500,
                    speed: 1000,
                    loop: true
                });
                var rollingTitles = $("#rolling-title");
                rollingTitles.mouseover(function () {
                    rolllingSwiper.stopAutoplay();
                });
                rollingTitles.mouseout(function () {
                    rolllingSwiper.startAutoplay();
                });
            })();
            break;
        case "pts-mall-product":
            (function () {
                var productSwiper = new Swiper('.product-swiper',{
                    autoplay: 3000,
                    speed: 800,
                    loop: true,
                    pagination: '.swiper-pagination',
                    autoplayDisableOnInteraction : false,
                    paginationClickable: true,
                    updateOnImagesReady : true,
                    preloadImages:false,
                    lazyLoading: true,
                    simulateTouch : false,
                    lazyLoadingOnTransitionStart : true
                });
                var swiperProduct = $(".product-swiper");
                swiperProduct.mouseover(function () {
                    productSwiper.stopAutoplay();
                });
                swiperProduct.mouseout(function () {
                    productSwiper.startAutoplay();
                });

                //增减兑换数量
                var addBtn = $(".add-btn-group a.add");
                var reduceBtn = $(".add-btn-group a.reduce");
                var amountIpt = $("input.amount-ipt");
                var amountVal;

                addBtn.click(function () {
                    amountVal = parseInt(amountIpt.val());
                    if(amountIpt.val() < 999){
                        amountIpt.val(amountVal+1);
                        reduceBtn.removeClass("click-disabled");
                    }
                });
                reduceBtn.click(function () {
                    amountVal = parseInt(amountIpt.val());
                    if(amountIpt.val() > 1)
                        amountIpt.val(amountVal-1);
                });
            })();
            break;
        case "pts-mall-submit":
            (function () {
                $(".ipt-remarks").keyup(function () {
                    var wordCount = $(".ipt-remarks").val().length;
                    $(".word-count").html(wordCount);
                });
            })();
            break;
        case "recycle-list":
            (function () {
                var moreListener = function () {
                    $("#btn-brand-more").click(function () {
                        var brandCont = $(this).parents(".brand-cont");
                        if(brandCont.hasClass("on")){
                            brandCont.removeClass("on");
                        }else {
                            brandCont.addClass("on");
                        }
                    });
                };
                moreListener();
            })();
            break;
        case "my-center":
            (function () {
                var toggleListener = function () {
                    $(".box-tab li").click(function () {
                        $(this).addClass("active").siblings().removeClass("active");
                        var currLiIndex = $(this).index();
                        var currCont = $(this).parents(".box-header").next();
                        currCont.find(".list").hide().eq(currLiIndex).show();
                    });
                };
                toggleListener();
            })();
            break;
        case "my-recycle":
            (function () {
                $("span.star-grd").click(function () {
                    var index = $(this).index();
                    var grdCont = $(this).parent();
                    var grdStar = $("span.star-grd");
                    var grdCount = $("span.grd-count");
                    var count = $(this).attr("data-grd");
                    grdCont.find(grdStar).removeClass("on");
                    for(var i = 0; i <= index; i++){
                        grdCont.find(grdStar).eq(i).addClass("on");
                    }
                    grdCont.find(grdCount).html(count + "分");
                });
            })();
            break;
        default:
            break;
    }
});