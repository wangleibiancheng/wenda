package life.majiang.community.community.mapper;

import life.majiang.community.community.model.Question;

import java.util.List;

/**
 * @author wanglei
 * @date 2020/9/2 8:40 下午
 * @File : QuestionExtMapper.java
 */

public interface QuestionExtMapper {
    int incView(Question record);
    int incCommentCount(Question record);

    List<Question> selectRelated(Question question);
}