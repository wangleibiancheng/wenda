
function post() {
    var questionId = $("#question_id").val();
    // 用了 jquery 框架， $("#setid") 意思就是 得到 id为 setid 的元素，后面加上.val()很明显就是得到 元素的 值了
    var content = $("#comment_content").val();
    $.ajax({
        type: "POST",
        url: "/comment",
        contentType: 'application/json',
        data: JSON.stringify({
            "parentId": questionId,
            "content": content,
            "type": 1
        }),
        // 通过 JSON.stringify() 把 JavaScript 对象转换为字符串。
        success: function (response) {
            if (response.code == 200) {
                $("#comment_section").hide();
            } else {
                alert(response.message);
            }
            console.log(response);
        },
        dataType: "json"
    });
}
// jQuery实现ajax
// $.ajax({
//     url: "http://www.hzhuti.com",    //请求的url地址
//     dataType: "json",   //返回格式为json
//     async: true, //请求是否异步，默认为异步，这也是ajax重要特性
//     data: {
//         "id": "value"
//     },    //参数值
//     type: "GET",   //请求方式
//     beforeSend: function() {
//         //请求前的处理
//     },
//     success: function(req) {
//         //请求成功时处理，一般只用到这一个
//     },
//     complete: function() {
//         //请求完成的处理
//     },
//     error: function() {
//         //请求出错处理
//     }
// });

// 区别：带引号
// js对象：var obj = { name:"Bill Gates", age:62, city:"Seattle"};
// json ：
// {
//     "person": {
//         "name": "pig",
//             "age": "18",
//             "sex": "man",
//             "hometown": {
//             "province": "江西省",
//                 "city": "抚州市",
//                 "county": "崇仁县"
//         }
//     }
// }
