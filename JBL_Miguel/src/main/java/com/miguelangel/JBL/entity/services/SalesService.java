package com.miguelangel.JBL.entity.services;

import java.util.List;

import com.miguelangel.JBL.entity.models.Sale;

public interface SalesService {
    Sale getSale(long id);
    List<Sale> getAllSales();
    void createSale(Sale sale);
    void updateSale(Sale sale, long id);
    void deleteSale(long id);
}
