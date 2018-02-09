/**
 * Created by Jingyi on 2016-9-7.
 */
var oolaPagination = function () {
    var slider = $(".pagination-slider");
    var activeIndex = $(".oola-pagination ul li.active").index();
    var ulWidth = $(".oola-pagination ul").width();
    //var len = $(".oola-pagination ul li").length;
    var btnPage = $(".oola-pagination ul li a.page");

    /*计算偏移量*/
    var offsetWidth = function (index) {
        return 46 * (index - 1);
    };

    /*设置分页器滑块停留的位置*/
    function setSlider(offset) {
        slider.animate({
            "left": offset - ulWidth / 2
        }, 400, "swing", function () {
            $(".oola-pagination ul li a.page:hover").css("transform", "scale(1.2)");
        })
    }

    setSlider(offsetWidth(activeIndex));

    /*滑块滑动到鼠标悬停的分页上*/
    btnPage.mouseover(function () {
        var hoverPage = $(this);
        var hoverIndex = hoverPage.parent().index();
        slider.stop();
        setSlider(offsetWidth(hoverIndex));
    });

    /*鼠标离开分页时，滑块回到当前页面的分页上*/
    btnPage.mouseout(function () {
        btnPage.css("transform", "scale(1)");
        slider.stop();
        setSlider(offsetWidth(activeIndex));
    });

    /*鼠标点击分页时，设置其为active page，
     并且重新设置滑块位置*/
    btnPage.click(function () {
        $(".oola-pagination ul li").removeClass("active");
        $(this).parent("li").addClass("active");
        activeIndex = $(".oola-pagination ul li.active").index();
        //setSlider(offsetWidth(activeIndex));
    });
};