package life.majiang.community.community.exception;

/**
 * @author wanglei
 * @date 2020/9/2 4:01 下午
 * @File : CustomizeErrorCode.java
 */
//参考博客：枚举的介绍https://www.cnblogs.com/duanrantao/p/10457879.html
public enum CustomizeErrorCode implements ICustomizeErrorCode {
//这个是一个对象而不是一个常量
    QUESTION_NOT_FOUND("你找到问题不在了，要不要换个试试？");
//    其实UESTION_NOT_FOUND就是一个message
    private String message;
    @Override
    public String getMessage() {
        return message;
    }
//构造器进行初始化，比如传进来的东西 CustomizeErrorCode.QUESTION_NOT_FOUND，会直接将这个传提给message
    CustomizeErrorCode(String message) {
        this.message = message;
    }


}
