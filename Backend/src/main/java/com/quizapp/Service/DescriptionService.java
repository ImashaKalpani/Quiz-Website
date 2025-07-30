package com.quizapp.Service;

import com.quizapp.Model.Description;
import com.quizapp.Repository.DescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class DescriptionService {

    @Autowired
    private DescriptionRepository descriptionRepository;

    public Description saveDescription(Description description) {
        return descriptionRepository.save(description);
    }

    public Optional<Description> getDescriptionByModuleId(String moduleId) {
        return descriptionRepository.findByModuleId(moduleId);
    }

    public Description updateDescription(String moduleId, Description updatedDescription) {
        Optional<Description> existing = descriptionRepository.findByModuleId(moduleId);
        if (existing.isPresent()) {
            updatedDescription.setId(existing.get().getId());
            return descriptionRepository.save(updatedDescription);
        } else {
            throw new RuntimeException("Description not found for moduleId: " + moduleId);
        }
    }
}
