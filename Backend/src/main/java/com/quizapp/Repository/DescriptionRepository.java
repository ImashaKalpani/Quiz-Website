package com.quizapp.Repository;

import com.quizapp.Model.Description;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DescriptionRepository extends MongoRepository<Description, String> {
    Optional<Description> findByModuleId(String moduleId);
}
