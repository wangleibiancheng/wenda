package life.majiang.community.community.exception;

/**
 * @author wanglei
 * @date 2020/9/2 4:01 下午
 * @File : CustomizeErrorCode.java
 */
//参考博客：枚举的介绍https://www.cnblogs.com/duanrantao/p/10457879.html
public enum CustomizeErrorCode implements ICustomizeErrorCode {
//这个是一个对象而不是一个常量
QUESTION_NOT_FOUND(2001, "你找到问题不在了，要不要换个试试？"),
    TARGET_PARAM_NOT_FOUND(2002, "未选中任何问题或评论进行回复"),
    NO_LOGIN(2003, "当前操作需要登录，请登陆后重试"),
    SYS_ERROR(2004, "服务冒烟了，要不然你稍后再试试！！！"),
    TYPE_PARAM_WRONG(2005, "评论类型错误或不存在"),
    COMMENT_NOT_FOUND(2006, "回复的评论不存在了，要不要换个试试？"),
    CONTENT_IS_EMPTY(2007, "输入内容不能为空"),
    READ_NOTIFICATION_FAIL(2008, "兄弟你这是读别人的信息呢？"),
    NOTIFICATION_NOT_FOUND(2009, "消息莫非是不翼而飞了？"),;
//    其实UESTION_NOT_FOUND就是一个message
    private String message;
    private Integer code;
    @Override
    public String getMessage() {
        return message;
    }
    @Override
    public Integer getCode() {
        return code;
    }

    //构造器进行初始化，比如传进来的东西 CustomizeErrorCode.QUESTION_NOT_FOUND，会直接将这个传提给message
    CustomizeErrorCode(Integer code,String message) {
        this.code = code;
        this.message = message;
    }


}
