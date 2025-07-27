package com.smartmind.model;

import lombok.Data;
import lombok.NoArgsConstructor; // Add this import
import lombok.AllArgsConstructor; // Add this import
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor // Add this annotation
@AllArgsConstructor // Add this annotation
@Document(collection = "user_progress")
public class UserProgress {

    @Id
    private String id;
    private String userId; // Reference to the User
    private String quizId; // Reference to the Quiz (you'd have a Quiz model too)
    private String quizTitle; // E.g., "Database Design - Quiz 2"
    private double progressPercentage; // E.g., 45.0
    private String status; // E.g., "IN_PROGRESS", "COMPLETED"
    private Double score; // Nullable, if not completed
    private LocalDateTime lastUpdated; // To track when progress was made
}