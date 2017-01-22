package com.codegreenllc.react.dto;

import lombok.Data;

@Data
public class Person {
	public Person(String firstName, String lastName){
		this.firstName = firstName;
		this.lastName = lastName;
		
	}
	String firstName, lastName;
}
