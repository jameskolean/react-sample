package com.codegreenllc.react.service;


import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.codegreenllc.react.dto.User;
import com.codegreenllc.react.entity.UserEntity;
import com.codegreenllc.react.repository.UserRepository;


@Service
@Transactional
public class UserService  {

	@Autowired
	UserRepository userRepository;

	
	public User save(final User user) {
		UserEntity entity = new UserEntity();
		entity.setActive(user.isActive());
		entity.setFirstname(user.getFirstname());
		entity.setLastname(user.getLastname());
		UserEntity saved = userRepository.save(entity);
User result = new User();
result.setId(saved.getId());
result.setActive(saved.isActive());
result.setFirstname(saved.getFirstname());
result.setLastname(saved.getLastname());
		return result;
	}


}
