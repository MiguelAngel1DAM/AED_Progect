	package com.miguelangel.JBL.controllers;
	
	import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestParam;
	
	import org.springframework.web.bind.annotation.*;
	
	import com.miguelangel.JBL.entity.models.Users;
	import com.miguelangel.JBL.entity.services.UserService;
	
	import java.util.List;
	
	@RestController
	@CrossOrigin(origins = "*")
	@RequestMapping("/users")
	public class UsersController {
	
	    @Autowired
	    private UserService userService;
	
	    @GetMapping("/{id}")
	    public Users getUser(@PathVariable long id) {
	        return userService.getUser(id);
	    }
	
	    @GetMapping
	    public List<Users> getAllUsers() {
	        return userService.getAllUsers();
	    }
	
	    @PostMapping
	    public ResponseEntity<String> createUser(@RequestBody Users user) {
	        try {
	            userService.createUser(user);
	            return ResponseEntity.status(HttpStatus.CREATED).body("{\"message\": \"Usuario creado exitosamente\"}");
	        } catch (Exception e) {
	            e.printStackTrace();
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"error\": \"Error al crear el usuario\"}");
	        }
	    }

	
	    @PutMapping("/{id}")
	    public ResponseEntity<String> updateUser(
	        @PathVariable long id,
	        @RequestParam("name") String name,
	        @RequestParam("email") String email) {
	        Users existingUser = userService.getUser(id);
	        
	        if (existingUser == null) {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario no encontrado");
	        }
	        
	        existingUser.setName(name);
	        existingUser.setEmail(email);
	        
	        userService.updateUser(existingUser, id);

	        return ResponseEntity.status(HttpStatus.OK).body("Usuario actualizado exitosamente");
	    }

	
	    @DeleteMapping("/{id}")
	    public void deleteUser(@PathVariable long id) {
	        userService.deleteUser(id);
	    }
	}
