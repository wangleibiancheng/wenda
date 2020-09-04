package life.majiang.community.community.dto;

import lombok.Data;

import java.util.List;

/**
 * @author wanglei
 * @date 2020/9/4 2:26 下午
 * @File : TagDTO.java
 */

@Data
public class TagDTO {
    private String categoryName;
    private List<String> tags;
}