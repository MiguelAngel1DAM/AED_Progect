package com.miguelangel.JBL.entity.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miguelangel.JBL.entity.dao.HeadsetDAO;
import com.miguelangel.JBL.entity.models.Headset;

import java.util.List;

@Service
public class HeadsetServiceImpl implements HeadsetService {

    @Autowired
    private HeadsetDAO headsetDAO;

    @Override
    public Headset getHeadset(long id) {
        return headsetDAO.findById(id).orElse(null);
    }

    @Override
    public List<Headset> getAllHeadsets() {
        return (List<Headset>) headsetDAO.findAll();
    }

    @Override
    public void createHeadset(Headset headset) {
        headsetDAO.save(headset);
    }

    @Override
    public void updateHeadset(Headset headset, long id) {
        headsetDAO.findById(id).ifPresent(existingHeadset -> {
            headset.setId(id);
            headsetDAO.save(headset);
        });
    }

    @Override
    public void deleteHeadset(long id) {
        headsetDAO.deleteById(id);
    }

}
