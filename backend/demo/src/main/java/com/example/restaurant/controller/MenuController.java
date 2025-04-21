package com.example.restaurant.controller;
import org.springframework.data.domain.Sort;
import com.example.restaurant.model.Menu;
import com.example.restaurant.repository.MenuRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "*") // Allow frontend to call this
public class MenuController {

    private final MenuRepository menuRepository;

    public MenuController(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;

    }

    @GetMapping("/all")
    public List<Menu> getAllMenus() {
        return menuRepository.findAll();
    }

    @GetMapping("/category/{category}")
    public List<Menu> getByCategory(@PathVariable String category) {
        return menuRepository.findByCategory(category, null);
    }

    @GetMapping("/filter")
    public List<Menu> filterAndSort(
            @RequestParam String category,
            @RequestParam(defaultValue = "asc") String direction) {
        
        Sort sort = direction.equalsIgnoreCase("asc") ? Sort.by("category").ascending() : Sort.by("category").descending();
        
        return menuRepository.findByCategory(category, sort);
    }

  

    
}


