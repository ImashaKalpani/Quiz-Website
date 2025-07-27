package com.smartmind.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer; // Import Customizer
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Disable CSRF for API (common for stateless APIs)
                .cors(Customizer.withDefaults()) // <--- ADD OR ENSURE THIS LINE IS PRESENT AND CORRECT
                .authorizeHttpRequests(auth -> auth
                        // Allow access to authentication endpoints (login, register)
                        .requestMatchers("/api/auth/**").permitAll()
                        // Temporarily allow access to /api/years for the Home page
                        .requestMatchers("/api/years/**").permitAll()
                        // Temporarily allow access to /api/progress for the Home page
                        .requestMatchers("/api/progress/**").permitAll()
                        // All other requests still require authentication (good for future protected resources)
                        .anyRequest().authenticated()
                );

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}