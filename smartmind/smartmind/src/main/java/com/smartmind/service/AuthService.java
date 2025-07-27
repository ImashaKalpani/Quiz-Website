package com.smartmind.service;

import com.smartmind.model.User;
import com.smartmind.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // --- EXISTING METHOD ---
    public User authenticate(String email, String password) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found with email: " + email));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        // Return user without password for security
        return new User(user.getId(), user.getUsername(), user.getEmail(), null);
    }

    // --- NEW METHOD FOR REGISTRATION ---
    public User registerUser(String username, String email, String rawPassword) {
        // Optional: Check if user with this email already exists
        if (userRepository.existsByEmail(email)) {
            throw new RuntimeException("User with this email already exists");
        }

        User newUser = new User();
        newUser.setUsername(username);
        newUser.setEmail(email);
        // Hash the password BEFORE saving
        newUser.setPassword(passwordEncoder.encode(rawPassword));

        // Save the new user to MongoDB
        User savedUser = userRepository.save(newUser);
        System.out.println("User registered and saved to DB: " + savedUser.getEmail()); // For debugging

        // Return the saved user (without the password for security)
        return new User(savedUser.getId(), savedUser.getUsername(), savedUser.getEmail(), null);
    }
}