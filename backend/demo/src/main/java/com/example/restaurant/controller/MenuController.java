package com.example.restaurant.controller;

import org.springframework.data.domain.Sort;
import com.example.restaurant.model.Menu;
import com.example.restaurant.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    // Add sorting functionality to sort by category
    @GetMapping("/filter")
    public List<Menu> filterAndSort(
            @RequestParam String category,
            @RequestParam(defaultValue = "asc") String direction) {
        
        // Sort by category in the specified direction
        Sort sort = direction.equalsIgnoreCase("asc") ? Sort.by("category").ascending() : Sort.by("category").descending();
        
        // Find menus by category with sorting applied
        return menuRepository.findByCategory(category, sort);
    }
}



// @RestController
// @RequestMapping("/api/menu")
// @CrossOrigin(origins = "*")
// public class MenuController {

//     @Autowired
//     private MenuRepository menuRepository;

//     // Test endpoint to check if menu items exist
//     @GetMapping("/test")
//     public ResponseEntity<List<Menu>> testMenuItems() {
//         List<Menu> menus = menuRepository.findAll();
//         if (menus.isEmpty()) {
//             return ResponseEntity.noContent().build();  // No data found
//         } else {
//             return ResponseEntity.ok(menus);  // Data found
//         }
//     }

//     // Get all menu items
//     @GetMapping
//     public ResponseEntity<List<Menu>> getAllMenuItems() {
//         List<Menu> menus = menuRepository.findAll();
//         if (menus.isEmpty()) {
//             return ResponseEntity.noContent().build();  // No data found
//         }
//         System.err.println("hii " + ResponseEntity.ok(menus));
//         return ResponseEntity.ok(menus);  // Data found
//     }

//     @GetMapping("/count")
//     public ResponseEntity<Long> countMenuItems() {
//         long count = menuRepository.count();
//         return ResponseEntity.ok(count);
//     }

//     @GetMapping("/{id}")
//     public ResponseEntity<Menu> getMenuItemById(@PathVariable Long id) {
//         return menuRepository.findById(id)
//                 .map(ResponseEntity::ok)
//                 .orElse(ResponseEntity.notFound().build());
//     }


      


//     // Filter menu items by category (uncommented and fixed)
//     // @GetMapping("/filter")
//     // public ResponseEntity<List<Menu>> filterByCategory(@RequestParam String category) {
//     //     List<Menu> menus = menuRepository.findByCategory(category);
//     //     if (menus.isEmpty()) {
//     //         return ResponseEntity.noContent().build();  // No data found for this category
//     //     }
//     //     return ResponseEntity.ok(menus);  // Data found
//     // }
// }
