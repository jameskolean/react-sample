package com.codegreenllc.react.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class User {

	User(String firstname, String lastname){
		this.firstname = firstname;
		this.lastname = lastname;
		
	}
	String id,firstname, lastname;
	boolean active;
}
