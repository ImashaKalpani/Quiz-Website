package com.smartmind.model;

import lombok.AllArgsConstructor; // Add this import
import lombok.Data;
import lombok.NoArgsConstructor; // Also good practice to explicitly add NoArgsConstructor if you use AllArgsConstructor
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor // Add this
@AllArgsConstructor // Add this
@Document(collection = "years")
public class Year {

    @Id
    private String id;

    private String name;
    private String description;
    private int modules;
    private String color;
}