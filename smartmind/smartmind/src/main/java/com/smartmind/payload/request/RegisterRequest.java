// src/main/java/com/smartmind/payload/request/RegisterRequest.java
package com.smartmind.payload.request;

import lombok.Data; // Assuming you use Lombok

@Data
public class RegisterRequest {
    private String username;
    private String email;
    private String password;
}