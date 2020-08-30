package life.majiang.community.community.model;

import lombok.Data;

/**
 * @author wanglei
 * @date 2020/8/25 11:08 上午
 * @File : User.java
 */
@Data
public class User {
    private Integer id;
    private String name;
    private String accountId;
    private String token;
    private Long gmtCreate;
    private Long gmtModified;
    private String avatarUrl;
}
