package com.miguelangel.JBL.entity.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miguelangel.JBL.entity.dao.SalesDAO;
import com.miguelangel.JBL.entity.models.Sale;

import java.util.List;

@Service
public class SalesServiceImpl implements SalesService {

    @Autowired
    private SalesDAO saleDAO;

    @Override
    public Sale getSale(long id) {
        return saleDAO.findById(id).orElse(null);
    }

    @Override
    public List<Sale> getAllSales() {
        return (List<Sale>) saleDAO.findAll();
    }

    @Override
    public void createSale(Sale sale) {
        saleDAO.save(sale);
    }

    @Override
    public void updateSale(Sale sale, long id) {
        saleDAO.findById(id).ifPresent(existingSale -> {
            sale.setIdSale(id);
            saleDAO.save(sale);
        });
    }

    @Override
    public void deleteSale(long id) {
        saleDAO.deleteById(id);
    }
}
