package com.smartmind.config;

import com.smartmind.model.User;
import com.smartmind.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class DataSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DataSeeder(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        seedAdminUser();
    }

    private void seedAdminUser() {
        // Check if admin already exists
        Optional<User> existingAdmin = userRepository.findByEmail("admin@smartmind.com");

        if (existingAdmin.isEmpty()) {
            // Create new admin user if not exists
            User admin = new User();
            admin.setUsername("admin");
            admin.setEmail("admin@smartmind.com");
            admin.setPassword(passwordEncoder.encode("admin123"));

            userRepository.save(admin);
            System.out.println("Admin user seeded successfully!");
        } else {
            System.out.println("Admin user already exists");
        }
    }
}