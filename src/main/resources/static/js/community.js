/**
 * 提交回复
 */
function post() {
    var questionId = $("#question_id").val();
    // 用了 jquery 框架， $("#setid") 意思就是 得到 id为 setid 的元素，后面加上.val()很明显就是得到 元素的 值了
    var content = $("#comment_content").val();
    comment2target(questionId, 1, content);
}

function comment2target(targetId, type, content) {
    if (!content) {
        alert("不能回复空内容~~~");
        return;
    }
    $.ajax({
        type: "POST",
        url: "/comment",
        contentType: 'application/json',
        data: JSON.stringify({
            "parentId": targetId,
            "content": content,
            "type": type
        }),
        // 通过 JSON.stringify() 把 JavaScript 对象转换为字符串。
        success: function (response) {
            if (response.code == 200) {
                window.location.reload();
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
function comment(e) {
    var commentId = e.getAttribute("data-id");
    var content = $("#input-" + commentId).val();
    comment2target(commentId, 2, content);
}

/**
 * 展开二级评论
 */
function collapseComments(e) {
    var id = e.getAttribute("data-id");
    var comments = $("#comment-" + id);

    // 获取一下二级评论的展开状态
    var collapse = e.getAttribute("data-collapse");
    if (collapse) {
        // 折叠二级评论
        comments.removeClass("in");
        e.removeAttribute("data-collapse");
        e.classList.remove("active");
    } else {
        var subCommentContainer = $("#comment-" + id);
        if (subCommentContainer.children().length != 1) {
            //展开二级评论
            comments.addClass("in");
            // 标记二级评论展开状态
            e.setAttribute("data-collapse", "in");
            e.classList.add("active");
        }else {
            $.getJSON("/comment/" + id, function (data) {
                $.each(data.data.reverse(), function (index, comment) {
                    var mediaLeftElement = $("<div/>", {
                        "class": "media-left"
                    }).append($("<img/>", {
                        "class": "media-object img-rounded",
                        "src": comment.user.avatarUrl
                    }));

                    var mediaBodyElement = $("<div/>", {
                        "class": "media-body"
                    }).append($("<h5/>", {
                        "class": "media-heading",
                        "html": comment.user.name
                    })).append($("<div/>", {
                        "html": comment.content
                    })).append($("<div/>", {
                        "class": "menu"
                    }).append($("<span/>", {
                        "class": "pull-right",
                        "html": moment(comment.gmtCreate).format('YYYY-MM-DD')
                    })));

                    var mediaElement = $("<div/>", {
                        "class": "media"
                    }).append(mediaLeftElement).append(mediaBodyElement);

                    var commentElement = $("<div/>", {
                        "class": "col-lg-12 col-md-12 col-sm-12 col-xs-12 comments"
                    }).append(mediaElement);

                    subCommentContainer.prepend(commentElement);
                });
                //展开二级评论
                comments.addClass("in");
                // 标记二级评论展开状态
                e.setAttribute("data-collapse", "in");
                e.classList.add("active");
            });
        }
    }
	}

function showSelectTag() {
    $("#select-tag").show();
}

function selectTag(e) {
    var value = e.getAttribute("data-tag");
    var previous = $("#tag").val();
    if (previous.indexOf(value) == -1) {
        if (previous) {
            $("#tag").val(previous + ',' + value);
        } else {
            $("#tag").val(value);
        }
    }
}