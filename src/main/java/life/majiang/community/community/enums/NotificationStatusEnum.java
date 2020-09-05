package life.majiang.community.community.enums;

/**
 * @author wanglei
 * @date 2020/9/5 10:12 上午
 * @File : NotificationStatusEnum.java
 */

public enum NotificationStatusEnum {
    UNREAD(0), READ(1);
    private int status;

    public int getStatus() {
        return status;
    }

    NotificationStatusEnum(int status) {
        this.status = status;
    }
}
