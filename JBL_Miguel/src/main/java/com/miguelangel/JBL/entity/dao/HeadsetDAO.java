package com.miguelangel.JBL.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.miguelangel.JBL.entity.models.Headset;

public interface HeadsetDAO extends CrudRepository<Headset, Long> {
	
}
