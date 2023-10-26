package com.miguelangel.JBL.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.miguelangel.JBL.entity.models.Headset;
import com.miguelangel.JBL.entity.services.HeadsetService;

import java.util.List;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/headsets")
public class HeadsetController {

    @Autowired
    private HeadsetService headsetService;

    @GetMapping("/{id}")
    public Headset getHeadset(@PathVariable long id) {
        return headsetService.getHeadset(id);
    }

    @GetMapping
    public List<Headset> getAllHeadsets() {
        return headsetService.getAllHeadsets();
    }

    @PostMapping
    public ResponseEntity<String> createHeadset(@RequestBody Headset headset) {
        try {
            headsetService.createHeadset(headset);
            return ResponseEntity.status(HttpStatus.CREATED).body("{\"message\": \"Auricular creado exitosamente\"}");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"error\": \"Error al crear el auricular\"}");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateHeadset(
        @PathVariable long id,
        @RequestBody Headset headset){
        Headset existingHeadset = headsetService.getHeadset(id);

        if (existingHeadset == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Auricular no encontrado");
        }

        existingHeadset.setName(headset.getName());

        headsetService.updateHeadset(existingHeadset, id);

        return ResponseEntity.status(HttpStatus.OK).body("Auricular actualizado exitosamente");
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable long id) {
    	headsetService.deleteHeadset(id);
    }
}
