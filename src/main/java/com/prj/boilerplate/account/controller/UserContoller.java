package com.prj.boilerplate.account.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserContoller {
	
	@PostMapping("/signup")
	public String signUp() {
		return "signUp";
	}
	
	@PostMapping("/signin")
	public String signIn() {
		return "signIn";
	}
}
