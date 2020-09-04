package life.majiang.community.community.mapper;

import life.majiang.community.community.model.Comment;

/**
 * @author wanglei
 * @date 2020/9/4 11:33 上午
 * @File : CommentExtMapper.java
 */

public interface CommentExtMapper {
    int incCommentCount(Comment comment);
}