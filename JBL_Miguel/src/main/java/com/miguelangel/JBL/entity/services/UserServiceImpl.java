package com.miguelangel.JBL.entity.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miguelangel.JBL.entity.dao.UserDAO;
import com.miguelangel.JBL.entity.models.Users;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDAO;

    @Override
    public Users getUser(long id) {
        return userDAO.findById(id).orElse(null);
    }

    @Override
    public List<Users> getAllUsers() {
        return (List<Users>) userDAO.findAll();
    }

    @Override
    public void createUser(Users user) {
        userDAO.save(user);
    }

    @Override
    public void updateUser(Users user, long id) {
        userDAO.findById(id).ifPresent(existingUser -> {
            user.setId(id);
            userDAO.save(user);
        });
    }

    @Override
    public void deleteUser(long id) {
        userDAO.deleteById(id);
    }
}
