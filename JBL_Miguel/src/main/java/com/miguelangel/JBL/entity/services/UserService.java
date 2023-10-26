package com.miguelangel.JBL.entity.services;

import java.util.List;

import com.miguelangel.JBL.entity.models.Users;

public interface UserService {
    Users getUser(long id);
    List<Users> getAllUsers();
    void createUser(Users user);
    void updateUser(Users user, long id);
    void deleteUser(long id);
}
