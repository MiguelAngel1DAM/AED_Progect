package com.miguelangel.JBL.entity.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miguelangel.JBL.entity.dao.HeadsetInfoDAO;
import com.miguelangel.JBL.entity.models.headsetsInfo;

@Service
public class HeadsetsInfoServiceImpl implements headsetInfoService {

    @Autowired
    private HeadsetInfoDAO headsetInfoDAO;

    @Override
    public headsetsInfo getHeadsetInfoById(Long id) {
        return headsetInfoDAO.findById(id).orElse(null);
    }

    @Override
    public void createHeadsetInfo(headsetsInfo headsetInfo) {
        headsetInfoDAO.save(headsetInfo);
    }

    @Override
    public void updateHeadsetInfo(headsetsInfo headsetInfo) {
        Long id = headsetInfo.getInfoId();
        if (headsetInfoDAO.existsById(id)) {
            headsetInfoDAO.save(headsetInfo);
        }
    }

    @Override
    public void deleteHeadsetInfo(Long id) {
        headsetInfoDAO.deleteById(id);
    }
}
