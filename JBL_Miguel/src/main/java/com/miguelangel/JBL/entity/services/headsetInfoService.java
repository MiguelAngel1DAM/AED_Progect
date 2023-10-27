package com.miguelangel.JBL.entity.services;

import com.miguelangel.JBL.entity.models.headsetsInfo;

public interface headsetInfoService {
    headsetsInfo getHeadsetInfoById(Long id);
    void createHeadsetInfo(headsetsInfo headsetInfo);
    void updateHeadsetInfo(headsetsInfo headsetInfo);
    void deleteHeadsetInfo(Long id);
}
