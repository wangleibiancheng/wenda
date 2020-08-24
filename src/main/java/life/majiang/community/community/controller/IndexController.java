package life.majiang.community.community.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

/**
 * Created by codedrinker on 2019/4/24.
 */
@Controller
public class IndexController {
    @GetMapping("/")
    public String index() {

        return "index";
    }
}
