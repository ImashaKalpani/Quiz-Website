package com.smartmind.controller;

import com.smartmind.model.UserProgress;
import com.smartmind.repository.UserProgressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/progress")
public class UserProgressController {

    private final UserProgressRepository userProgressRepository;

    @Autowired
    public UserProgressController(UserProgressRepository userProgressRepository) {
        this.userProgressRepository = userProgressRepository;
    }

    @GetMapping("/user/{userId}")
    public List<UserProgress> getUserProgress(@PathVariable String userId) {
        return userProgressRepository.findByUserId(userId);
    }

    @GetMapping("/user/{userId}/in-progress")
    public ResponseEntity<UserProgress> getInProgressQuiz(@PathVariable String userId) {
        // Find the most recent in-progress quiz for the user
        UserProgress progress = userProgressRepository.findFirstByUserIdAndStatusOrderByLastUpdatedDesc(userId, "IN_PROGRESS");
        return progress != null ? ResponseEntity.ok(progress) : ResponseEntity.notFound().build();
    }

    @GetMapping("/user/{userId}/last-completed")
    public ResponseEntity<UserProgress> getLastCompletedQuiz(@PathVariable String userId) {
        // Find the most recent completed quiz for the user
        UserProgress progress = userProgressRepository.findFirstByUserIdAndStatusOrderByLastUpdatedDesc(userId, "COMPLETED");
        return progress != null ? ResponseEntity.ok(progress) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public UserProgress createOrUpdateProgress(@RequestBody UserProgress progress) {
        progress.setLastUpdated(java.time.LocalDateTime.now());
        return userProgressRepository.save(progress);
    }

    // You might also add endpoints for overall stats (average score, total quizzes, etc.)
}