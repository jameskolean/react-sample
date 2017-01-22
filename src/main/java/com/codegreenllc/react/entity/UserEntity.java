package com.codegreenllc.react.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=true)
@Entity(name = "USER")
public class UserEntity extends PersistableImpl {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8331945258267466004L;
	private String firstname;
	private String lastname;
	private boolean active;

}
