package com.example.restaurant.controller;
import org.springframework.data.domain.Sort;
import com.example.restaurant.model.Menu;
import com.example.restaurant.repository.MenuRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "*") 
public class MenuController {

    private final MenuRepository menuRepository;

    public MenuController(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;

    }
        // GET all items ..
    @GetMapping("/all")
    public List<Menu> getAllMenus() {
        return menuRepository.findAll();
    }

    // Filter & Search , Featch items by category , name , description ..
    @GetMapping("/filter")
    public List<Menu> filterAndSort(
        @RequestParam(required = false) String category,
        @RequestParam(required = false) String name,
        @RequestParam(required = false) String description,
        @RequestParam(defaultValue = "asc") String direction) {

    Sort sort = direction.equalsIgnoreCase("asc") ? Sort.by("name").ascending() : Sort.by("name").descending();

    if (name != null && !name.isEmpty()) {
        return menuRepository.findByNameContainingIgnoreCase(name, sort);
    }

    if (description != null && !description.isEmpty()) {
        return menuRepository.findByDescriptionContainingIgnoreCase(description, sort);
    }

    if (category != null && !category.isEmpty()) {
        return menuRepository.findByCategory(category, sort);
    }

    return menuRepository.findAll(sort);
}
    
}


