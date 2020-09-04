package life.majiang.community.community.dto;

import lombok.Data;

/**
 * @author wanglei
 * @date 2020/9/2 9:35 下午
 * @File : CommentDTO.java
 */

@Data
public class CommentCreateDTO {
    private Long parentId;
    private String content;
    private Integer type;
}
