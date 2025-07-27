// Example: src/main/java/com/smartmind/controller/AuthController.java
package com.smartmind.controller;

import com.smartmind.model.User;
import com.smartmind.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.smartmind.payload.request.LoginRequest;
import com.smartmind.payload.request.RegisterRequest;

// You might need to create a DTO like this (RegisterRequest.java)
// public class RegisterRequest {
//     private String username;
//     private String email;
//     private String password;
//     // Getters and Setters
// }

// For Login:
// public class LoginRequest {
//     private String email;
//     private String password;
//     // Getters and Setters
// }

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        try {
            // Call the new registerUser method from AuthService
            User registeredUser = authService.registerUser(
                    registerRequest.getUsername(),
                    registerRequest.getEmail(),
                    registerRequest.getPassword()
            );
            return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            // Handle cases where email already exists or other registration errors
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        try {
            User authenticatedUser = authService.authenticate(
                    loginRequest.getEmail(),
                    loginRequest.getPassword()
            );
            return ResponseEntity.ok(authenticatedUser);
        } catch (RuntimeException e) {
            // Return 401 Unauthorized for invalid credentials
            return new ResponseEntity<>("Invalid email or password", HttpStatus.UNAUTHORIZED);
        }
    }
}