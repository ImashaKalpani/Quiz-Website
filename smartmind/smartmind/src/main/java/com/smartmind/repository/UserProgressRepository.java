package com.smartmind.repository;

import com.smartmind.model.UserProgress;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserProgressRepository extends MongoRepository<UserProgress, String> {
    List<UserProgress> findByUserId(String userId);
    List<UserProgress> findByUserIdAndStatus(String userId, String status);
    // You might want to get the latest progress or latest completed
    UserProgress findFirstByUserIdAndStatusOrderByLastUpdatedDesc(String userId, String status);
    UserProgress findFirstByUserIdAndStatusOrderByLastUpdatedAsc(String userId, String status); // For 'continue where left off'
}