package com.codegreenllc.react.repository;

import org.springframework.data.repository.CrudRepository;

import com.codegreenllc.react.entity.UserEntity;

public interface UserRepository extends CrudRepository<UserEntity, String> {

}
