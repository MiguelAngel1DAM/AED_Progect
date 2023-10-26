package com.miguelangel.JBL.entity.models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "sales")
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long idSale;

    @ManyToOne
    @JoinColumn(name = "userId")
    private Users user;

    @ManyToOne
    @JoinColumn(name = "headsetId")
    private Headset headset;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "saleDate")
    private Date saleDate;

    // Getters y setters
    public long getIdSale() {
        return idSale;
    }

    public void setIdSale(long idSale) {
        this.idSale = idSale;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public Headset getHeadset() {
        return headset;
    }

    public void setHeadset(Headset headset) {
        this.headset = headset;
    }

    public Date getSaleDate() {
        return saleDate;
    }

    public void setSaleDate(Date saleDate) {
        this.saleDate = saleDate;
    }
}
