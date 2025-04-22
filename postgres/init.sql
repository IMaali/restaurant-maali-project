
-- Create the 'menu' table
CREATE TABLE menu (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    price NUMERIC(6, 2),
    image TEXT,
    calorie INTEGER,
    category VARCHAR(100),
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION
);


INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng)
VALUES 
(50, 'Umami roll', 'Fresh salmon with creamy avocado and spicy mayo wrapped in seaweed.', 42, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSMMIKCs5kxdu_eO9hJkt-990-Bw6QDSMOA&s', 52, 'Sushi', 35.6895, 139.6917),

(51, 'Matcha latte', 'Hot or iced Japanese green tea latte with creamy milk and a hint of vanilla.', 31, 'https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg', 120, 'Drinks', 34.0522, -118.2437),

(52, 'Sunrise toast', 'Sourdough toast topped with avocado, egg, and radish slices.', 25, 'https://images.aws.nestle.recipes/resized/2020_06_23T12_09_03_mrs_ImageRecipes_142102lrg_1080_850.jpg', 350, 'Breakfast', 51.5074, -0.1278),

(53, 'Miso soup', 'Classic miso broth with tofu, seaweed, and scallions.', 16, 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2024-01-miso-soup%2Fmiso-soup-030', 90, 'Soups', 35.0116, 135.7681),

(54, 'Tempura udon', 'Udon noodles in savory broth topped with crispy shrimp tempura.', 49, 'https://sudachirecipes.com/wp-content/uploads/2023/10/ebiten-udon-thumbnail.jpg', 430, 'Soups', 37.7749, -122.4194),

(55, 'Berry smoothie', 'A refreshing blend of blueberries, strawberries, banana, and almond milk.', 28, 'https://evergreenkitchen.ca/wp-content/uploads/2024/03/Blueberry-Raspberry-Smoothie-Evergreen-Kitchen-1.jpg', 180, 'Drinks', -33.8688, 151.2093),

(56, 'Omelette deluxe', 'Three-egg omelet with spinach, cheese, tomatoes, and mushrooms.', 33, 'https://www.olgasflavorfactory.com/wp-content/uploads/2015/08/Deluxe-Veggie-Omelet-1-19.webp', 400, 'Breakfast', 48.8566, 2.3522),

(57, 'Dragon roll', 'Eel and cucumber inside, topped with avocado and unagi sauce.', 51, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3p5W8stdd73FLPH1J3hOZTVNTh7Bgj0JNJA&s', 70, 'Sushi', 43.6532, -79.3832),

(58, 'Yakisoba', 'Stir-fried noodles with vegetables, chicken, and yakisoba sauce.', 37, 'https://www.jocooks.com/wp-content/uploads/2021/06/yakisoba-1-11-500x500.jpg', 460, 'Breakfast', 40.7128, -74.0060),

(59, 'Ramen classic', 'Tonkotsu ramen with pork slices, egg, and scallions.', 60, 'https://images.immediate.co.uk/production/volatile/sites/30/2024/02/Classic-chicken-ramen-e1f9a1f.jpg', 510, 'Soups', 41.9028, 12.4964),

(60, 'Salmon nigiri', 'Fresh salmon slice over seasoned rice, garnished with wasabi.', 35, 'https://sushistaycation.com/wp-content/uploads/2024/03/salmon_nigiri_sake_thumbnail.jpg', 60, 'Sushi', 35.6762, 139.6503),

(61, 'Iced mocha', 'Chilled espresso with chocolate syrup and milk, served over ice.', 27, 'https://www.orchidsandsweettea.com/wp-content/uploads/2022/03/Chocolate-Iced-Latte-3-of-6-e1647455475532.jpg', 180, 'Drinks', 34.6937, 135.5023),

(62, 'Banana pancakes', 'Fluffy pancakes with caramelized bananas and maple syrup.', 31, 'https://www.allrecipes.com/thmb/6x0Lw9L4MEU8INHnK4tXGRV9XWI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20334-banana-pancakes-i-DDMFS-4x3-9f291f03044247d48c9ec26917952402.jpg', 490, 'Breakfast', 37.9838, 23.7275),

(63, 'Chicken pho', 'Vietnamese noodle soup with chicken, herbs, and bean sprouts.', 43, 'https://www.servedfromscratch.com/wp-content/uploads/2014/12/Crock-Pot-Chicken-Pho-18-2.jpg', 340, 'Soups', 10.7626, 106.6602),

(64, 'Veggie wrap', 'Whole wheat tortilla filled with grilled vegetables and hummus.', 29, 'https://tastesbetterfromscratch.com/wp-content/uploads/2014/04/Veggie-Wrap-2.jpg', 280, 'Breakfast', 52.5200, 13.4050),

(65, 'Espresso shot', 'Rich and bold single shot of freshly brewed espresso.', 15, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsCBmgWEmiPcEx452zMtGuT0LWyx2IA0FRQ&s', 5, 'Drinks', 59.3293, 18.0686),

(66, 'Tofu scramble', 'Savory tofu mixed with turmeric, spinach, and mushrooms.', 27, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ACnq3ovsGjJlkCNLxAMaXlw07gcfbeoOjg&s', 310, 'Breakfast', 55.7558, 37.6176),

(67, 'Rainbow roll', 'Crab and avocado inside, topped with assorted sashimi slices.', 49, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFseqAC9mCt0ODA2cvQUFxP8DFTtHK1gOqVg&s', 85, 'Sushi', 1.3521, 103.8198),

(68, 'Creamy tomato soup', 'Rich and creamy tomato soup topped with croutons.', 25, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSbDuWMZIhLbZI9Mt28vpZ41FCzRFQ2ON6Q&s', 210, 'Soups', 19.4326, -99.1332),

(69, 'Mango smoothie', 'Smooth blend of ripe mango, yogurt, and a touch of honey.', 26, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGlIPQ9p5q5aWmeS2XnA-8Q-iS8FuGwGwNIQ&s', 160, 'Drinks', 13.7563, 100.5018);
