package life.majiang.community.community.dto;

import lombok.Data;

/**
 * @author wanglei
 * @date 2020/8/24 3:43 下午
 * @File : AccessTokenDTO.java
 */
@Data
public class AccessTokenDTO {
    private String client_id;
    private String client_secret;
    private String code;
    private String redirect_uri;
    private String state;
}
