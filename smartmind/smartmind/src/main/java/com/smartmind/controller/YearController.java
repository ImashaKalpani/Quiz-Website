package com.smartmind.controller;

import com.smartmind.model.Year;
import com.smartmind.repository.YearRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/years") // All endpoints in this controller start with /api/years
public class YearController {

    private final YearRepository yearRepository;

    @Autowired
    public YearController(YearRepository yearRepository) {
        this.yearRepository = yearRepository;
    }

    @GetMapping
    public List<Year> getAllYears() {
        return yearRepository.findAll();
    }

    // You might also add a POST mapping to populate initial data for testing
    // @PostMapping("/seed")
    // public List<Year> seedYearsData(@RequestBody List<Year> years) {
    //     return yearRepository.saveAll(years);
    // }
}