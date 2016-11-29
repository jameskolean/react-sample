package com.codegreenllc.react;

import lombok.Data;

@Data
public class Person {
	Person(String firstName, String lastName){
		this.firstName = firstName;
		this.lastName = lastName;
		
	}
	String firstName, lastName;
}
