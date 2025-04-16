package com.example.restaurant.controller;

import com.example.restaurant.model.Menu;
import com.example.restaurant.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/api/menu")
public class MenuController {
    @Autowired
    private MenuRepository repository;

    @GetMapping("/all")
    public List<Menu> getAll() {
        return repository.findAll();
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
