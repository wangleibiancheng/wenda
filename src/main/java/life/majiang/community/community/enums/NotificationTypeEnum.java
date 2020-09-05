package life.majiang.community.community.enums;

/**
 * @author wanglei
 * @date 2020/9/5 9:50 上午
 * @File : NotificationTypeEnum.java
 */

public enum NotificationTypeEnum {
    REPLY_QUESTION(1,"回复了评论"),
    REPLY_COMMENT(2,"回复了问题")
    ;
    private int type;
    private String name;

    public int getType() {
        return type;
    }

    public String getName() {
        return name;
    }

    NotificationTypeEnum(int type, String name) {
        this.type = type;
        this.name = name;
    }
    public  static String nameOfType(int type){
        for (NotificationTypeEnum notificationTypeEnum:NotificationTypeEnum.values()) {
         if (type==notificationTypeEnum.getType())
             return notificationTypeEnum.getName();
        }
        return "";
    }
}
