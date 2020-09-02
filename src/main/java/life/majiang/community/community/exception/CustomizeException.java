package life.majiang.community.community.exception;

/**
 * @author wanglei
 * @date 2020/9/2 3:56 下午
 * @File : CustomizeException.java
 */
//参考博客https://blog.csdn.net/hguisu/article/details/6155636
public class CustomizeException extends RuntimeException {
    private String message;

    public CustomizeException(ICustomizeErrorCode errorCode) {
        this.message = errorCode.getMessage();
    }

    public CustomizeException(String message) {
        this.message = message;
    }

    @Override
    public String getMessage() {
        return message;
    }
}