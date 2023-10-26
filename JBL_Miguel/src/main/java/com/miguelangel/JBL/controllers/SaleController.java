package com.miguelangel.JBL.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.miguelangel.JBL.entity.models.Sale;
import com.miguelangel.JBL.entity.models.Headset;
import com.miguelangel.JBL.entity.models.Users;
import com.miguelangel.JBL.entity.services.SalesService;
import com.miguelangel.JBL.entity.services.HeadsetService;
import com.miguelangel.JBL.entity.services.UserService;
import java.util.Collections;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/sales")
public class SaleController {

    @Autowired
    private SalesService saleService;

    @Autowired
    private HeadsetService headsetService;

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<Sale> getSale(@PathVariable long id) {
        Sale sale = saleService.getSale(id);
        if (sale == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(sale);
    }

    @GetMapping
    public List<Sale> getAllSales() {
        return saleService.getAllSales();
    }
    
    @PostMapping
    public ResponseEntity<?> createSale(
        @RequestParam("clienteId") long clienteId,
        @RequestParam("productoId") long productoId) {

        Headset headset = headsetService.getHeadset(productoId);
        Users user = userService.getUser(clienteId);

        if (headset == null || user == null) {
            return ResponseEntity.notFound().build();
        }

        Sale sale = new Sale();
        sale.setHeadset(headset);
        sale.setUser(user);

        saleService.createSale(sale);

        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateSale(
        @PathVariable long id,
        @RequestParam("headsetId") long headsetId,
        @RequestParam("userId") long userId) {
        Sale existingSale = saleService.getSale(id);

        if (existingSale == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Venta no encontrada");
        }


        Headset headset = headsetService.getHeadset(headsetId);
        Users user = userService.getUser(userId);

        if (headset == null || user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Headset o User no encontrado");
        }

        existingSale.setHeadset(headset);
        existingSale.setUser(user);

        saleService.updateSale(existingSale, id);

        return ResponseEntity.status(HttpStatus.OK).body("Venta actualizada exitosamente");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSale(@PathVariable long id) {
        Sale existingSale = saleService.getSale(id);

        if (existingSale == null) {
            return ResponseEntity.notFound().build();
        }

        saleService.deleteSale(id);

        return ResponseEntity.ok().build();
    }
}
