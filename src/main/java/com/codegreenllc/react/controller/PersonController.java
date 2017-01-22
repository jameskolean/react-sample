package com.codegreenllc.react.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codegreenllc.react.dto.Person;

@RestController
public class PersonController {

	@RequestMapping("/person")
	List<Person> home() {
		List<Person> result = new ArrayList<Person>();
		result.add( new Person("Elmer","Phudd"));
		return result;
	}

}