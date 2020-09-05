package life.majiang.community.community.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * @author wanglei
 * @date 2020/8/31 1:41 下午
 * @File : PaginationDTO.java
 */
@Data
public class PaginationDTO<T>  {
//  List<T>和List的用法是一模一样的,不同的是,List支持任何类型而List<T>只支持T类型,T是在定义时指定的类型.
//  主要用于强制规范一个集合内存放的数据类型必须一致,这样避免了一些不必要的错误,还可以减少拆,装箱操作,提高程序的运行效率.
    private List<T> data;
    private boolean showPrevious;
    private boolean showFirstPage;
    private boolean showNext;
    private boolean showEndPage;
    private Integer page;
    private List<Integer> pages = new ArrayList<>();
    private Integer totalPage;

    public void setPagination(Integer totalPage, Integer page) {
        this.totalPage = totalPage;
        this.page = page;
        pages.add(page);
        for (int i = 1; i <= 3; i++) {
            if (page - i > 0) {
                pages.add(0, page - i);
            }

            if (page + i <= totalPage) {
                pages.add(page + i);
            }
        }
        // 是否展示上一页
        if (page == 1) {
            showPrevious = false;
        } else {
            showPrevious = true;
        }

        // 是否展示下一页
        if (page == totalPage) {
            showNext = false;
        } else {
            showNext = true;
        }

        // 是否展示第一页
        if (pages.contains(1)) {
            showFirstPage = false;
        } else {
            showFirstPage = true;
        }

        // 是否展示最后一页
        if (pages.contains(totalPage)) {
            showEndPage = false;
        } else {
            showEndPage = true;
        }
    }

}
