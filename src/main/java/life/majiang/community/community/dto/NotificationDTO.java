package life.majiang.community.community.dto;

import lombok.Data;

/**
 * @author wanglei
 * @date 2020/9/5 9:42 上午
 * @File : NotificationDTO.java
 */

@Data
public class NotificationDTO {
    private Long id;
    private Long gmtCreate;
    private Integer status;
    private Long notifier;
    private String notifierName;
    private String outerTitle;
    private Long outerid;
    private String typeName;
    private Integer type;
}