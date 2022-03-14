package com.prj.boilerplate;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class indexController {

	@GetMapping(path = "/")
	public String index() {
		return "index";
	}
	
}
