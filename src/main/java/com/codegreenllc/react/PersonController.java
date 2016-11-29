package com.codegreenllc.react;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {

	@RequestMapping("/person")
	List<Person> home() {
		List<Person> result = new ArrayList<Person>();
		result.add( new Person("Elmer","Phudd"));
		return result;
	}

}