/**
 * Created by jingyi_h on 2017/3/9.
 */

$().ready(function () {
    (function () {
        var questList = $("ol.question-list");
        var btnQuest = questList.find("dt a[btn-name='btn-question']");

        btnQuest.click(function () {
            $(this).parents("li").siblings().find("dd.qna-answer").slideUp("fast");
            $(this).parent("dt").siblings("dd.qna-answer").slideToggle("fast");
        });
    })();
});