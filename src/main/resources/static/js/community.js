
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
                if (response.code == 2003) {
                    var isAccepted = confirm(response.message);
                    // 弹出确认框
                    if (isAccepted) {
                        window.open("https://github.com/login/oauth/authorize?client_id=bae014af2b73eb6f170f&redirect_uri=http://localhost:8887/callback&scope=user&state=1");
                        window.localStorage.setItem("closable", true);
                        // localStorage 和 sessionStorage属性允许在浏览器中存储 key/value 对的数据。localStorage 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去删除。localStorage 属性是只读的。
                        // 保存数据语法：localStorage.setItem("key", "value");
                        // 读取数据语法：var lastname = localStorage.getItem("key");
                        // 删除数据语法：localStorage.removeItem("key");
                    }
                } else {
                    alert(response.message);
                }

            }
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
