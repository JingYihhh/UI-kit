/**
 * Created by Dicky on 2016/7/15.
 */
var categoryList = (function () {
    var categoryContListener = function () {
        $(".slide-bottom dt").click(function (e, l) {
            var _this = this;
            var dl = $(_this).parents("dl");
            if (dl.hasClass("on")) return;
            $(".slide-bottom dd").stop();
            $(".slide-bottom dd").slideUp(function () {
                $(".slide-bottom dl").removeClass("on");
            });
            dl.find("dd").slideDown(function () {
                dl.addClass("on");
            });
        });

        $(".slide-right dl").mouseover(function () {
            var index = $(this).index();
            $(".slide-right dl").removeClass("on");
            $(this).addClass("on");
        });
        $(".slide-right dl").mouseout(function () {
            $(".slide-right dl").removeClass("on");
        })
    };


    return {
        categoryContListener: categoryContListener
    }
})();

$().ready(function () {
    categoryList.categoryContListener();
});