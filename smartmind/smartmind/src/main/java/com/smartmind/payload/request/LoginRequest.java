// src/main/java/com/smartmind/payload/request/LoginRequest.java
package com.smartmind.payload.request;

import lombok.Data; // Assuming you use Lombok

@Data
public class LoginRequest {
    private String email;
    private String password;
}