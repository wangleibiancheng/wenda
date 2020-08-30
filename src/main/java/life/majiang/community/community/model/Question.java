package life.majiang.community.community.model;

import lombok.Data;

/**
 * @author wanglei
 * @date 2020/8/30 2:45 下午
 * @File : Question.java
 */
@Data
public class Question {
    private Integer id;
    private String title;
    private String description;
    private String tag;
    private Long gmtCreate;
    private Long gmtModified;
    private Integer creator;
    private Integer viewCount;
    private Integer commentCount;
    private Integer likeCount;
}
