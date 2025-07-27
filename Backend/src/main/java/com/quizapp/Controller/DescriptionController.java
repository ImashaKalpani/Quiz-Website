package com.quizapp.Controller;

import com.quizapp.Model.Description;
import com.quizapp.Service.DescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/descriptions")
@CrossOrigin(origins = "*") // Allow frontend access
public class DescriptionController {

    @Autowired
    private DescriptionService descriptionService;

    // Save a new description
    @PostMapping
    public ResponseEntity<Description> createDescription(@RequestBody Description description) {
        return ResponseEntity.ok(descriptionService.saveDescription(description));
    }

    // Get description by moduleId
    @GetMapping("/{moduleId}")
    public ResponseEntity<Description> getDescriptionByModuleId(@PathVariable String moduleId) {
        Optional<Description> description = descriptionService.getDescriptionByModuleId(moduleId);
        return description.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    // Update description for a module
    @PutMapping("/{moduleId}")
    public ResponseEntity<Description> updateDescription(@PathVariable String moduleId, @RequestBody Description updatedDescription) {
        return ResponseEntity.ok(descriptionService.updateDescription(moduleId, updatedDescription));
    }
}
