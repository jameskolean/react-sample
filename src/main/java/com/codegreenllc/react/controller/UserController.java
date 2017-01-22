package com.codegreenllc.react.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.codegreenllc.react.dto.User;
import com.codegreenllc.react.service.UserService;

@RestController
@RequestMapping("api/")
public class UserController {
	List<User> users = new ArrayList<User>();
	@Autowired
	UserService userService;

	@RequestMapping(method = RequestMethod.GET, path = "user", produces = "application/json")
	List<User> list() {
		return users;
	}

	@RequestMapping(method = RequestMethod.POST, path = "user", produces = "application/json")
	User create(@RequestBody final User user, final HttpServletRequest request) {
		System.out.println("Controller in " + user.toString());
		User result = userService.save(user);
		System.out.println("Controller out " + user.toString());
		return result;
	}

}