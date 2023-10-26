package com.miguelangel.JBL.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.miguelangel.JBL.entity.models.Sale;

public interface SalesDAO extends CrudRepository<Sale, Long> {
    
}

