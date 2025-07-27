package com.smartmind.repository;

import com.smartmind.model.Year;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface YearRepository extends MongoRepository<Year, String> {
}