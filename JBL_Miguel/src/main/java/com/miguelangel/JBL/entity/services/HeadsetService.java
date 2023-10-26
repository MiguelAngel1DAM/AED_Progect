package com.miguelangel.JBL.entity.services;

import java.util.List;

import com.miguelangel.JBL.entity.models.Headset;

public interface HeadsetService {
    Headset getHeadset(long id);
    List<Headset> getAllHeadsets();
    void createHeadset(Headset headset);
    void updateHeadset(Headset headset, long id);
    void deleteHeadset(long id);
}
