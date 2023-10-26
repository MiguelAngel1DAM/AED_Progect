package com.miguelangel.JBL.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.miguelangel.JBL.entity.models.Users;

public interface UserDAO extends CrudRepository<Users, Long> {
    
}

