package com.quizapp.Controller;

import com.quizapp.Model.Module;
import com.quizapp.Service.ModuleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/modules")
@CrossOrigin(origins = "*")
public class ModuleController {

    private final ModuleService moduleService;

    public ModuleController(ModuleService moduleService) {
        this.moduleService = moduleService;
    }

    // GET: /api/modules
    @GetMapping
    public List<Module> getAllModules() {
        return moduleService.getAllModules();
    }

    // GET: /api/modules/year/{yearId}
    @GetMapping("/year/{yearId}")
    public List<Module> getModulesByYear(@PathVariable int yearId) {
        return moduleService.getModulesByYear(yearId);
    }

    // GET: /api/modules/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Module> getModuleById(@PathVariable String id) {
        return moduleService.getModuleById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // POST: /api/modules
    @PostMapping
    public Module createModule(@RequestBody Module module) {
        return moduleService.createModule(module);
    }

    // PUT: /api/modules/{id}
    @PutMapping("/{id}")
    public ResponseEntity<Module> updateModule(@PathVariable String id, @RequestBody Module module) {
        return moduleService.updateModule(id, module)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // DELETE: /api/modules/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteModule(@PathVariable String id) {
        moduleService.deleteModule(id);
        return ResponseEntity.noContent().build();
    }
}