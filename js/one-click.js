/**
 * Created by Jingyi on 2016-11-14.
 */

$().ready(function () {
    addFormListenter();
    addAddrListener();
});

//保存被选中的地址的value到input[name="donation-address"]
function addAddrListener() {
    var iptHiddenAddress = $("input[name='contact-address']");
    $("input[name='address']").unbind("change");
    $("input[name='address']").change(function () {
        iptHiddenAddress.val($("input[name='address']:checked").val());
    });
}

function addFormListenter() {
    var nType = typeList.type;
    var typeOptions = [];
    var typeData = [];
    var donationSelectControl = $("#donation-type");
    var iptHiddenType = $("input[name='donation-type']");
    var iptHiddenSize = $("input[name='donation-size']");
    var iptHiddenWeight = $("input[name='donation-weight']");

    //列出捐赠物品的所有类型
    for (var i = 0; i < nType.length; i++) {
        typeOptions[i] = nType[i].title;
        typeData[i] = nType[i].options;
        var typeOption = $("<option>" + typeOptions[i] + "</option>");
        donationSelectControl.append(typeOption);
    }
    //当物品类型改变时，判断当前选项是否有下一级的选项列表，若无则生成输入控件；若有则生成下拉控件

    donationSelectControl.change(function () {
        //移除首个下拉控件的所有兄弟元素以及input[data-class='donations']的value
        donationSelectControl.siblings().remove();
        $("input[data-class='donations']").val('');

        //保存第一个被选中的选项值到input[name="donation-type"]
        iptHiddenType.val($("#donation-type option:selected").val());

        var optionSelectedIndex = $("#donation-type option:selected").index() - 1;
        //当前选项没有下一级选项列表时，生成输入控件
        if (typeData[optionSelectedIndex] === null) {
            var inputControl = $("<div class = 'fl'><input class='form-control form-control-sm common-shadow fl' placeholder='请输入重量' />KG</div>");
            $("#donations-ipt-cont").append(inputControl);

            //保存用户输入的重量值到input[name="donation-weight"]
            addIptListener(inputControl.find("input"), iptHiddenWeight);
        } else {
            //否则生成下拉控件，并输出所有选项
            if (typeData[optionSelectedIndex]) {
                var selectControl = $('<select class = "form-control form-control-sm common-shadow fl"></select>');
                var subOptionLen = typeData[optionSelectedIndex].length;

                //输出二级选项列表
                for (var j = 0; j < subOptionLen; j++) {
                    var subOptions = typeData[optionSelectedIndex][j].name;
                    var subOptionValues = typeData[optionSelectedIndex][j].id;
                    var subOption = $("<option value=" + subOptionValues + "></option>").text(subOptions);
                    selectControl.append(subOption);
                }
                $("#donations-ipt-cont").append(selectControl);

                //保存二级选项被选中的值到input[name="donation-size"]

                addIptListener(selectControl, iptHiddenSize);
            }
        }
    });

    var addIptListener = function (obj, iptHidden) {
        obj.change(function () {
            iptHidden.val(obj.val());
        });
    }
}