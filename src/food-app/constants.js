export const COLORS = {
    // PRIMARY: '#96163',
    PRIMARY: '#f4511e',
    LIGHT: '#fff',
    DARK: '#000',
    DARK_ALT: '#262626',
}

export const CATEGORIES = [
    {
        id: 1,
        category: 'Breakfast',
    },
    {
        id: 2,
        category: 'Lunch',
    },
    {
        id: 3,
        category: 'Dinner',
    },
    {
        id: 4,
        category: 'Asian',
    },
    {
        id: 5,
        category: 'Italian',
    },
    {
        id: 6,
        category: 'Desserts',
    },
    {
        id: 7,
        category: 'Vegetarian',
    },
    {
        id: 8,
        category: 'Sea Food',
    }

]

export const RecipeList = [
    {
        id: 1,
        name: 'Tuma Tartare',
        image: require('../../assets/food-app/fastfood2.jpg'),
        rating: '4.2',
        ingrediants: ['Fresh Tuma', 'Lime Juice', 'Red Onion', 'Avocado'],
        time: '40 mins',
        difficulty: 'Medium',
        calories: '420 cal',
        color: '#FFD700',
        description: 'A delightful tartare made from fresh Tuma, seasoned with lime juice, red onion, and avocado.',
        steps: [
            'Chop the fresh Tuma into small pieces.',
            'Mix with lime juice, finely chopped red onion, and diced avocado.',
            'Season with salt and pepper to taste.',
            'Serve chilled.'
        ],
        categoryId: 1
    },
    {
        id: 2,
        name: 'Grilled Chicken Salad',
        image: require('../../assets/food-app/salad.jpg'),
        rating: '4.5',
        ingrediants: ['Chicken Breast', 'Mixed Greens', 'Cherry Tomatoes', 'Olive Oil', 'Balsamic Vinegar'],
        time: '30 mins',
        difficulty: 'Easy',
        calories: '320 cal',
        color: '#8FBC8F',
        description: 'A healthy grilled chicken salad with mixed greens and cherry tomatoes, dressed with olive oil and balsamic vinegar.',
        steps: [
            'Grill the chicken breast until fully cooked.',
            'Slice the chicken into strips.',
            'Mix the greens and cherry tomatoes in a bowl.',
            'Add the chicken on top and drizzle with olive oil and balsamic vinegar.'
        ],
        categoryId: 2
    },
    {
        id: 3,
        name: 'Margarita Pizza',
        image: require('../../assets/food-app/pizza.jpg'),
        rating: '4.7',
        ingrediants: ['Pizza Dough', 'Tomato Sauce', 'Mozzarella Cheese', 'Fresh Basil'],
        time: '25 mins',
        difficulty: 'Medium',
        calories: '600 cal',
        color: '#FF6347',
        description: 'Classic Margarita pizza with a crispy crust, rich tomato sauce, and melted mozzarella cheese, topped with fresh basil.',
        steps: [
            'Preheat the oven to 475°F (245°C).',
            'Roll out the pizza dough on a floured surface.',
            'Spread the tomato sauce over the dough.',
            'Add mozzarella cheese and fresh basil leaves.',
            'Bake for 12-15 minutes until the crust is golden and the cheese is bubbly.'
        ],
        categoryId: 3
    },
    {
        id: 4,
        name: 'Fruit Salad',
        image: require('../../assets/food-app/fruits.jpg'),
        rating: '4.3',
        ingrediants: ['Strawberries', 'Blueberries', 'Kiwi', 'Orange', 'Honey'],
        time: '15 mins',
        difficulty: 'Easy',
        calories: '180 cal',
        color: '#FFA07A',
        description: 'A refreshing fruit salad with a mix of strawberries, blueberries, kiwi, and orange, lightly drizzled with honey.',
        steps: [
            'Chop the strawberries, kiwi, and orange into bite-sized pieces.',
            'Mix all the fruits in a bowl.',
            'Drizzle with honey and gently toss to combine.',
            'Serve chilled.'
        ],
        categoryId: 4
    },
    {
        id: 5,
        name: 'Avocado Toast',
        image: require('../../assets/food-app/green.jpg'),
        rating: '4.6',
        ingrediants: ['Avocado', 'Whole Grain Bread', 'Lemon Juice', 'Salt', 'Pepper'],
        time: '10 mins',
        difficulty: 'Easy',
        calories: '250 cal',
        color: '#98FB98',
        description: 'Simple and delicious avocado toast with whole grain bread, seasoned with lemon juice, salt, and pepper.',
        steps: [
            'Toast the whole grain bread until golden brown.',
            'Mash the avocado with a fork and add lemon juice, salt, and pepper to taste.',
            'Spread the avocado mixture over the toasted bread.',
            'Serve immediately.'
        ],
        categoryId: 5
    },
    {
        id: 6,
        name: 'Beef Tacos',
        image: require('../../assets/food-app/fastfood.jpg'),
        rating: '4.4',
        ingrediants: ['Ground Beef', 'Taco Shells', 'Lettuce', 'Cheddar Cheese', 'Sour Cream'],
        time: '20 mins',
        difficulty: 'Medium',
        calories: '500 cal',
        color: '#F4A460',
        description: 'Tasty beef tacos with seasoned ground beef, fresh lettuce, cheddar cheese, and a dollop of sour cream.',
        steps: [
            'Cook the ground beef in a skillet over medium heat until browned.',
            'Season the beef with taco seasoning.',
            'Fill the taco shells with the beef, lettuce, and cheddar cheese.',
            'Top with sour cream and serve.'
        ],
        categoryId: 6
    },
    {
        id: 7,
        name: 'Smoothie Bowl',
        image: require('../../assets/food-app/greenDream.jpg'),
        rating: '4.8',
        ingrediants: ['Frozen Berries', 'Banana', 'Greek Yogurt', 'Granola', 'Honey'],
        time: '10 mins',
        difficulty: 'Easy',
        calories: '300 cal',
        color: '#AFEEEE',
        description: 'A refreshing and healthy smoothie bowl made with blended frozen berries and banana, topped with Greek yogurt, granola, and honey.',
        steps: [
            'Blend the frozen berries and banana until smooth.',
            'Pour the smoothie into a bowl.',
            'Top with Greek yogurt, granola, and a drizzle of honey.',
            'Serve immediately.'
        ],
        categoryId: 7
    },
    {
        id: 8,
        name: 'Quinoa Salad',
        image: require('../../assets/food-app/flower.jpg'),
        rating: '4.2',
        ingrediants: ['Quinoa', 'Cucumber', 'Cherry Tomatoes', 'Feta Cheese', 'Olive Oil'],
        time: '25 mins',
        difficulty: 'Medium',
        calories: '350 cal',
        color: '#FFB6C1',
        description: 'A light and nutritious quinoa salad with fresh cucumber, cherry tomatoes, feta cheese, and a drizzle of olive oil.',
        steps: [
            'Cook the quinoa according to package instructions and let it cool.',
            'Chop the cucumber and cherry tomatoes.',
            'Mix the quinoa, cucumber, cherry tomatoes, and feta cheese in a bowl.',
            'Drizzle with olive oil and toss to combine.',
            'Serve chilled.'
        ],
        categoryId: 8
    },
    {
        id: 9,
        name: 'Veggie Stir Fry',
        image: require('../../assets/food-app/greenSky.jpg'),
        rating: '4.3',
        ingrediants: ['Broccoli', 'Bell Peppers', 'Carrots', 'Soy Sauce', 'Garlic'],
        time: '30 mins',
        difficulty: 'Medium',
        calories: '400 cal',
        color: '#90EE90',
        description: 'A colorful and healthy veggie stir fry with broccoli, bell peppers, and carrots, seasoned with soy sauce and garlic.',
        steps: [
            'Chop the vegetables into bite-sized pieces.',
            'Heat a large skillet or wok over medium-high heat and add a bit of oil.',
            'Add the garlic and stir-fry for 1 minute.',
            'Add the broccoli, bell peppers, and carrots, and stir-fry until tender-crisp.',
            'Add soy sauce and toss to coat the vegetables.',
            'Serve hot.'
        ],
        categoryId: 1
    },
    {
        id: 10,
        name: 'Spaghetti Carbonara',
        image: require('../../assets/food-app/water.jpg'),
        rating: '4.7',
        ingrediants: ['Spaghetti', 'Eggs', 'Parmesan Cheese', 'Pancetta', 'Black Pepper'],
        time: '20 mins',
        difficulty: 'Hard',
        calories: '650 cal',
        color: '#87CEEB',
        description: 'A rich and creamy spaghetti carbonara made with eggs, Parmesan cheese, pancetta, and black pepper.',
        steps: [
            'Cook the spaghetti according to package instructions.',
            'In a bowl, whisk together the eggs and Parmesan cheese.',
            'Cook the pancetta in a skillet until crispy.',
            'Drain the spaghetti and return it to the pot.',
            'Quickly add the egg mixture and pancetta to the spaghetti, stirring continuously until creamy.',
            'Season with black pepper and serve immediately.'
        ],
        categoryId: 2
    },
    {
        id: 11,
        name: 'Chicken Parmesan',
        image: require('../../assets/food-app/fastfood2.jpg'),
        rating: '4.6',
        ingrediants: ['Chicken Breast', 'Breadcrumbs', 'Mozzarella Cheese', 'Tomato Sauce', 'Parmesan Cheese'],
        time: '45 mins',
        difficulty: 'Medium',
        calories: '700 cal',
        color: '#FFD700',
        description: 'A classic chicken Parmesan with breaded chicken breast, melted mozzarella cheese, and rich tomato sauce.',
        steps: [
            'Preheat the oven to 375°F (190°C).',
            'Coat the chicken breast in breadcrumbs.',
            'Place the chicken in a baking dish and top with tomato sauce and mozzarella cheese.',
            'Bake for 25-30 minutes until the chicken is cooked through and the cheese is melted and bubbly.',
            'Sprinkle with Parmesan cheese and serve.'
        ],
        categoryId: 3
    },
    {
        id: 12,
        name: 'Caprese Salad',
        image: require('../../assets/food-app/green.jpg'),
        rating: '4.5',
        ingrediants: ['Tomatoes', 'Mozzarella Cheese', 'Basil', 'Olive Oil', 'Balsamic Glaze'],
        time: '10 mins',
        difficulty: 'Easy',
        calories: '250 cal',
        color: '#98FB98',
        description: 'A simple and elegant Caprese salad with ripe tomatoes, fresh mozzarella, basil, olive oil, and balsamic glaze.',
        steps: [
            'Slice the tomatoes and mozzarella cheese.',
            'Arrange the tomato and mozzarella slices on a plate, alternating each slice.',
            'Tuck fresh basil leaves between the slices.',
            'Drizzle with olive oil and balsamic glaze.',
            'Season with salt and pepper and serve immediately.'
        ],
        categoryId: 4
    },
    {
        id: 13,
        name: 'Fish Tacos',
        image: require('../../assets/food-app/fastfood.jpg'),
        rating: '4.4',
        ingrediants: ['White Fish', 'Taco Shells', 'Cabbage', 'Lime', 'Cilantro'],
        time: '20 mins',
        difficulty: 'Medium',
        calories: '350 cal',
        color: '#F4A460',
        description: 'Delicious fish tacos with seasoned white fish, crunchy cabbage, fresh lime, and cilantro.',
        steps: [
            'Cook the white fish in a skillet until flaky.',
            'Warm the taco shells in the oven or on a skillet.',
            'Fill the taco shells with the cooked fish, shredded cabbage, and chopped cilantro.',
            'Squeeze fresh lime juice over the top and serve.'
        ],
        categoryId: 5
    },
    {
        id: 14,
        name: 'Lemon Herb Chicken',
        image: require('../../assets/food-app/greenDream.jpg'),
        rating: '4.7',
        ingrediants: ['Chicken Thighs', 'Lemon', 'Garlic', 'Rosemary', 'Olive Oil'],
        time: '35 mins',
        difficulty: 'Medium',
        calories: '400 cal',
        color: '#AFEEEE',
        description: 'Flavorful lemon herb chicken with juicy chicken thighs, garlic, rosemary, and a touch of lemon.',
        steps: [
            'Preheat the oven to 375°F (190°C).',
            'Season the chicken thighs with salt, pepper, minced garlic, and rosemary.',
            'Heat olive oil in a skillet and sear the chicken thighs until golden brown.',
            'Transfer the chicken to a baking dish, add lemon slices on top, and bake for 25 minutes.',
            'Serve hot with a drizzle of pan juices.'
        ],
        categoryId: 6
    },
    {
        id: 15,
        name: 'Chocolate Cake',
        image: require('../../assets/food-app/fruits.jpg'),
        rating: '4.9',
        ingrediants: ['Flour', 'Cocoa Powder', 'Sugar', 'Eggs', 'Butter'],
        time: '50 mins',
        difficulty: 'Hard',
        calories: '550 cal',
        color: '#FFA07A',
        description: 'A decadent chocolate cake with rich cocoa flavor, perfect for any chocolate lover.',
        steps: [
            'Preheat the oven to 350°F (175°C).',
            'In a bowl, mix flour, cocoa powder, and sugar.',
            'Add eggs and melted butter, and mix until smooth.',
            'Pour the batter into a greased baking pan and bake for 35-40 minutes.',
            'Let the cake cool before serving.'
        ],
        categoryId: 7
    },
    {
        id: 16,
        name: 'Baked Salmon',
        image: require('../../assets/food-app/greenSky.jpg'),
        rating: '4.8',
        ingrediants: ['Salmon Fillet', 'Lemon', 'Dill', 'Garlic', 'Olive Oil'],
        time: '30 mins',
        difficulty: 'Easy',
        calories: '400 cal',
        color: '#90EE90',
        description: 'Tender baked salmon fillet with a hint of lemon and dill, perfect for a healthy dinner.',
        steps: [
            'Preheat the oven to 400°F (200°C).',
            'Place the salmon fillet on a baking sheet.',
            'Drizzle with olive oil and season with minced garlic, lemon slices, and fresh dill.',
            'Bake for 20-25 minutes until the salmon is cooked through.',
            'Serve with a side of vegetables or salad.'
        ],
        categoryId: 8
    },
    {
        id: 17,
        name: 'Pancakes',
        image: require('../../assets/food-app/flower.jpg'),
        rating: '4.5',
        ingrediants: ['Flour', 'Milk', 'Eggs', 'Butter', 'Maple Syrup'],
        time: '20 mins',
        difficulty: 'Easy',
        calories: '300 cal',
        color: '#FFB6C1',
        description: 'Fluffy pancakes served with butter and maple syrup, a perfect breakfast treat.',
        steps: [
            'In a bowl, mix flour, milk, and eggs until smooth.',
            'Heat a skillet over medium heat and melt a bit of butter.',
            'Pour batter onto the skillet to form pancakes.',
            'Cook until bubbles form on the surface, then flip and cook until golden brown.',
            'Serve with butter and maple syrup.'
        ],
        categoryId: 1
    },
    {
        id: 18,
        name: 'Shrimp Scampi',
        image: require('../../assets/food-app/water.jpg'),
        rating: '4.7',
        ingrediants: ['Shrimp', 'Garlic', 'Lemon', 'White Wine', 'Pasta'],
        time: '25 mins',
        difficulty: 'Medium',
        calories: '450 cal',
        color: '#87CEEB',
        description: 'A delicious shrimp scampi with garlic, lemon, and white wine, served over pasta.',
        steps: [
            'Cook the pasta according to package instructions.',
            'In a skillet, heat olive oil and cook minced garlic until fragrant.',
            'Add shrimp and cook until pink.',
            'Pour in white wine and lemon juice, and let it simmer.',
            'Toss the cooked pasta with the shrimp mixture and serve.'
        ],
        categoryId: 2
    },
    {
        id: 19,
        name: 'Beef Stroganoff',
        image: require('../../assets/food-app/fastfood.jpg'),
        rating: '4.6',
        ingrediants: ['Beef', 'Mushrooms', 'Onions', 'Sour Cream', 'Pasta'],
        time: '40 mins',
        difficulty: 'Medium',
        calories: '500 cal',
        color: '#F4A460',
        description: 'A hearty beef stroganoff with tender beef, mushrooms, and onions in a creamy sour cream sauce, served over pasta.',
        steps: [
            'Cook the pasta according to package instructions.',
            'In a skillet, cook the beef until browned and set aside.',
            'In the same skillet, cook the onions and mushrooms until soft.',
            'Return the beef to the skillet and add sour cream, stirring to combine.',
            'Serve the beef mixture over the cooked pasta.'
        ],
        categoryId: 3
    },
    {
        id: 20,
        name: 'Caesar Salad',
        image: require('../../assets/food-app/salad.jpg'),
        rating: '4.4',
        ingrediants: ['Romaine Lettuce', 'Caesar Dressing', 'Croutons', 'Parmesan Cheese'],
        time: '15 mins',
        difficulty: 'Easy',
        calories: '350 cal',
        color: '#8FBC8F',
        description: 'A classic Caesar salad with crisp romaine lettuce, creamy Caesar dressing, crunchy croutons, and grated Parmesan cheese.',
        steps: [
            'Chop the romaine lettuce and place in a bowl.',
            'Add Caesar dressing and toss to coat the lettuce.',
            'Top with croutons and grated Parmesan cheese.',
            'Serve immediately.'
        ],
        categoryId: 4
    },
    {
        id: 21,
        name: 'Caesar Salad',
        image: require('../../assets/food-app/salad.jpg'),
        rating: '4.4',
        ingrediants: ['Romaine Lettuce', 'Caesar Dressing', 'Croutons', 'Parmesan Cheese'],
        time: '15 mins',
        difficulty: 'Easy',
        calories: '350 cal',
        color: '#8FBC8F',
        description: 'A classic Caesar salad with crisp romaine lettuce, creamy Caesar dressing, crunchy croutons, and grated Parmesan cheese.',
        steps: [
            'Chop the romaine lettuce and place in a bowl.',
            'Add Caesar dressing and toss to coat the lettuce.',
            'Top with croutons and grated Parmesan cheese.',
            'Serve immediately.'
        ],
        categoryId: 1
    },
    {
        id: 22,
        name: 'Chicken Fajitas',
        image: require('../../assets/food-app/fastfood.jpg'),
        rating: '4.5',
        ingrediants: ['Chicken Breast', 'Bell Peppers', 'Onions', 'Fajita Seasoning', 'Tortillas'],
        time: '30 mins',
        difficulty: 'Medium',
        calories: '400 cal',
        color: '#FFA500',
        description: 'Delicious chicken fajitas with seasoned chicken, bell peppers, and onions served with warm tortillas.',
        steps: [
            'Slice the chicken, bell peppers, and onions.',
            'Cook the chicken in a skillet with fajita seasoning until fully cooked.',
            'Add bell peppers and onions, and cook until tender.',
            'Serve with warm tortillas.'
        ],
        categoryId: 2
    },
    {
        id: 23,
        name: 'Spaghetti Bolognese',
        image: require('../../assets/food-app/green.jpg'),
        rating: '4.6',
        ingrediants: ['Spaghetti', 'Ground Beef', 'Tomato Sauce', 'Onions', 'Garlic'],
        time: '45 mins',
        difficulty: 'Medium',
        calories: '600 cal',
        color: '#FF6347',
        description: 'Classic spaghetti Bolognese with a rich and flavorful meat sauce served over spaghetti noodles.',
        steps: [
            'Cook the spaghetti according to package instructions.',
            'In a skillet, cook the ground beef until browned.',
            'Add chopped onions and minced garlic, and cook until softened.',
            'Pour in tomato sauce and simmer for 20 minutes.',
            'Serve the meat sauce over the cooked spaghetti.'
        ],
        categoryId: 3
    },
    {
        id: 24,
        name: 'Greek Salad',
        image: require('../../assets/food-app/greenDream.jpg'),
        rating: '4.3',
        ingrediants: ['Cucumber', 'Tomatoes', 'Feta Cheese', 'Olives', 'Red Onion'],
        time: '15 mins',
        difficulty: 'Easy',
        calories: '250 cal',
        color: '#98FB98',
        description: 'A fresh and healthy Greek salad with cucumber, tomatoes, feta cheese, olives, and red onion.',
        steps: [
            'Chop the cucumber, tomatoes, and red onion.',
            'Mix with feta cheese and olives in a bowl.',
            'Drizzle with olive oil and season with salt and pepper.',
            'Serve chilled.'
        ],
        categoryId: 4
    },
    {
        id: 25,
        name: 'Veggie Burger',
        image: require('../../assets/food-app/pizza.jpg'),
        rating: '4.4',
        ingrediants: ['Veggie Patty', 'Burger Buns', 'Lettuce', 'Tomato', 'Onion'],
        time: '20 mins',
        difficulty: 'Easy',
        calories: '350 cal',
        color: '#8FBC8F',
        description: 'A delicious veggie burger with a hearty veggie patty, fresh lettuce, tomato, and onion, served on a soft bun.',
        steps: [
            'Cook the veggie patty according to package instructions.',
            'Toast the burger buns.',
            'Assemble the burger with lettuce, tomato, onion, and the cooked veggie patty.',
            'Serve with your favorite condiments.'
        ],
        categoryId: 5
    },
    {
        id: 26,
        name: 'Chicken Alfredo',
        image: require('../../assets/food-app/water.jpg'),
        rating: '4.7',
        ingrediants: ['Fettuccine', 'Chicken Breast', 'Heavy Cream', 'Parmesan Cheese', 'Garlic'],
        time: '35 mins',
        difficulty: 'Medium',
        calories: '700 cal',
        color: '#FFF8DC',
        description: 'Creamy chicken Alfredo with tender chicken breast, rich Alfredo sauce, and fettuccine noodles.',
        steps: [
            'Cook the fettuccine according to package instructions.',
            'In a skillet, cook the chicken breast until fully cooked.',
            'Remove the chicken and add minced garlic to the skillet.',
            'Add heavy cream and Parmesan cheese, stirring until thickened.',
            'Slice the chicken and add it to the sauce.',
            'Serve the sauce over the cooked fettuccine.'
        ],
        categoryId: 3
    },
    {
        id: 27,
        name: 'BBQ Ribs',
        image: require('../../assets/food-app/fastfood2.jpg'),
        rating: '4.8',
        ingrediants: ['Pork Ribs', 'BBQ Sauce', 'Brown Sugar', 'Garlic Powder', 'Paprika'],
        time: '2 hrs',
        difficulty: 'Hard',
        calories: '900 cal',
        color: '#A52A2A',
        description: 'Tender and flavorful BBQ ribs coated in a homemade BBQ sauce with a smoky, sweet taste.',
        steps: [
            'Preheat the oven to 300°F (150°C).',
            'Rub the ribs with brown sugar, garlic powder, and paprika.',
            'Place the ribs on a baking sheet and cover with foil.',
            'Bake for 1.5 hours.',
            'Remove the foil and brush with BBQ sauce.',
            'Bake for another 30 minutes until tender and sticky.'
        ],
        categoryId: 6
    },
    {
        id: 28,
        name: 'Vegetable Curry',
        image: require('../../assets/food-app/greenSky.jpg'),
        rating: '4.5',
        ingrediants: ['Mixed Vegetables', 'Coconut Milk', 'Curry Powder', 'Garlic', 'Ginger'],
        time: '40 mins',
        difficulty: 'Medium',
        calories: '450 cal',
        color: '#FFD700',
        description: 'A rich and creamy vegetable curry with a blend of mixed vegetables, coconut milk, and aromatic spices.',
        steps: [
            'Chop the mixed vegetables into bite-sized pieces.',
            'In a pot, sauté minced garlic and ginger.',
            'Add curry powder and cook for 1 minute.',
            'Pour in coconut milk and bring to a simmer.',
            'Add the vegetables and cook until tender.',
            'Serve hot with rice or naan.'
        ],
        categoryId: 7
    },
    {
        id: 29,
        name: 'Chicken Caesar Wrap',
        image: require('../../assets/food-app/fruits.jpg'),
        rating: '4.4',
        ingrediants: ['Chicken Breast', 'Romaine Lettuce', 'Caesar Dressing', 'Tortilla Wrap', 'Parmesan Cheese'],
        time: '20 mins',
        difficulty: 'Easy',
        calories: '350 cal',
        color: '#98FB98',
        description: 'A tasty chicken Caesar wrap with grilled chicken, fresh romaine lettuce, Caesar dressing, and Parmesan cheese.',
        steps: [
            'Cook the chicken breast and slice into strips.',
            'Chop the romaine lettuce.',
            'Spread Caesar dressing on the tortilla wrap.',
            'Add chicken, lettuce, and Parmesan cheese.',
            'Roll up the wrap and serve.'
        ],
        categoryId: 2
    },
    {
        id: 30,
        name: 'Beef Stir Fry',
        image: require('../../assets/food-app/fastfood.jpg'),
        rating: '4.5',
        ingrediants: ['Beef Strips', 'Bell Peppers', 'Broccoli', 'Soy Sauce', 'Garlic'],
        time: '25 mins',
        difficulty: 'Medium',
        calories: '500 cal',
        color: '#FF4500',
        description: 'A quick and easy beef stir fry with tender beef strips, fresh bell peppers, broccoli, and savory soy sauce.',
        steps: [
            'Slice the beef into thin strips.',
            'Chop the bell peppers and broccoli.',
            'In a skillet, cook the beef until browned.',
            'Add minced garlic, bell peppers, and broccoli.',
            'Pour in soy sauce and cook until the vegetables are tender.',
            'Serve hot with rice.'
        ],
        categoryId: 6
    },
    {
        id: 31,
        name: 'Tomato Soup',
        image: require('../../assets/food-app/green.jpg'),
        rating: '4.6',
        ingrediants: ['Tomatoes', 'Onion', 'Garlic', 'Vegetable Broth', 'Basil'],
        time: '30 mins',
        difficulty: 'Easy',
        calories: '200 cal',
        color: '#FF6347',
        description: 'A comforting and rich tomato soup made with fresh tomatoes, onions, garlic, and basil.',
        steps: [
            'Chop the tomatoes, onion, and garlic.',
            'In a pot, sauté the onion and garlic until soft.',
            'Add the tomatoes and vegetable broth.',
            'Bring to a boil, then simmer for 20 minutes.',
            'Blend the soup until smooth.',
            'Season with salt, pepper, and fresh basil.'
        ],
        categoryId: 8
    },
    {
        id: 32,
        name: 'Mango Smoothie',
        image: require('../../assets/food-app/fruits.jpg'),
        rating: '4.7',
        ingrediants: ['Mango', 'Banana', 'Yogurt', 'Honey', 'Orange Juice'],
        time: '10 mins',
        difficulty: 'Easy',
        calories: '250 cal',
        color: '#FFD700',
        description: 'A refreshing mango smoothie with sweet mango, banana, yogurt, honey, and a splash of orange juice.',
        steps: [
            'Peel and chop the mango and banana.',
            'In a blender, combine the mango, banana, yogurt, honey, and orange juice.',
            'Blend until smooth.',
            'Pour into glasses and serve chilled.'
        ],
        categoryId: 4
    },
    {
        id: 33,
        name: 'Grilled Cheese Sandwich',
        image: require('../../assets/food-app/fastfood2.jpg'),
        rating: '4.4',
        ingrediants: ['Bread', 'Cheddar Cheese', 'Butter'],
        time: '15 mins',
        difficulty: 'Easy',
        calories: '300 cal',
        color: '#FFD700',
        description: 'A classic grilled cheese sandwich with melted cheddar cheese between golden, buttery bread slices.',
        steps: [
            'Butter the bread slices on one side.',
            'Place cheddar cheese between the slices, with the buttered sides facing out.',
            'Heat a skillet over medium heat and cook the sandwich until the bread is golden and the cheese is melted.',
            'Serve hot.'
        ],
        categoryId: 1
    },
    {
        id: 34,
        name: 'Quinoa Salad',
        image: require('../../assets/food-app/greenDream.jpg'),
        rating: '4.5',
        ingrediants: ['Quinoa', 'Cherry Tomatoes', 'Cucumber', 'Feta Cheese', 'Olive Oil'],
        time: '20 mins',
        difficulty: 'Easy',
        calories: '350 cal',
        color: '#98FB98',
        description: 'A healthy quinoa salad with cherry tomatoes, cucumber, feta cheese, and a light olive oil dressing.',
        steps: [
            'Cook the quinoa according to package instructions.',
            'Chop the cherry tomatoes and cucumber.',
            'In a bowl, mix the cooked quinoa with the tomatoes, cucumber, and feta cheese.',
            'Drizzle with olive oil and season with salt and pepper.',
            'Serve chilled.'
        ],
        categoryId: 4
    },
    {
        id: 35,
        name: 'Chicken Tikka Masala',
        image: require('../../assets/food-app/greenSky.jpg'),
        rating: '4.7',
        ingrediants: ['Chicken Breast', 'Yogurt', 'Tomato Sauce', 'Garam Masala', 'Garlic'],
        time: '50 mins',
        difficulty: 'Hard',
        calories: '600 cal',
        color: '#FFD700',
        description: 'A flavorful chicken tikka masala with marinated chicken cooked in a creamy tomato sauce.',
        steps: [
            'Marinate the chicken breast in yogurt, garlic, and garam masala for at least 30 minutes.',
            'Cook the marinated chicken in a skillet until fully cooked.',
            'In a pot, sauté garlic, add tomato sauce, and bring to a simmer.',
            'Add the cooked chicken and simmer for 20 minutes.',
            'Serve hot with rice or naan.'
        ],
        categoryId: 7
    },
    {
        id: 36,
        name: 'Avocado Toast',
        image: require('../../assets/food-app/fastfood.jpg'),
        rating: '4.3',
        ingrediants: ['Avocado', 'Bread', 'Lime', 'Salt', 'Pepper'],
        time: '10 mins',
        difficulty: 'Easy',
        calories: '200 cal',
        color: '#98FB98',
        description: 'A simple and delicious avocado toast with mashed avocado, lime juice, salt, and pepper on toasted bread.',
        steps: [
            'Toast the bread slices.',
            'Mash the avocado with lime juice, salt, and pepper.',
            'Spread the mashed avocado on the toasted bread.',
            'Serve immediately.'
        ],
        categoryId: 5
    },
    {
        id: 37,
        name: 'Pumpkin Soup',
        image: require('../../assets/food-app/green.jpg'),
        rating: '4.6',
        ingrediants: ['Pumpkin', 'Onion', 'Garlic', 'Vegetable Broth', 'Cream'],
        time: '40 mins',
        difficulty: 'Medium',
        calories: '300 cal',
        color: '#FFA07A',
        description: 'A creamy pumpkin soup with a blend of fresh pumpkin, onion, garlic, vegetable broth, and cream.',
        steps: [
            'Peel and chop the pumpkin, onion, and garlic.',
            'In a pot, sauté the onion and garlic until soft.',
            'Add the pumpkin and vegetable broth, and bring to a boil.',
            'Simmer until the pumpkin is tender.',
            'Blend the soup until smooth and stir in the cream.',
            'Serve hot.'
        ],
        categoryId: 8
    },
    {
        id: 38,
        name: 'Chocolate Chip Cookies',
        image: require('../../assets/food-app/fruits.jpg'),
        rating: '4.9',
        ingrediants: ['Flour', 'Sugar', 'Butter', 'Chocolate Chips', 'Eggs'],
        time: '30 mins',
        difficulty: 'Medium',
        calories: '200 cal',
        color: '#FFD700',
        description: 'Delicious and chewy chocolate chip cookies with a perfect balance of sweetness and chocolate.',
        steps: [
            'Preheat the oven to 350°F (175°C).',
            'In a bowl, mix flour, sugar, and butter until creamy.',
            'Add eggs and chocolate chips, and mix until combined.',
            'Drop spoonfuls of dough onto a baking sheet.',
            'Bake for 10-12 minutes until golden brown.',
            'Let cool before serving.'
        ],
        categoryId: 2
    },
    {
        id: 39,
        name: 'Eggplant Parmesan',
        image: require('../../assets/food-app/pizza.jpg'),
        rating: '4.5',
        ingrediants: ['Eggplant', 'Marinara Sauce', 'Mozzarella Cheese', 'Parmesan Cheese', 'Breadcrumbs'],
        time: '50 mins',
        difficulty: 'Hard',
        calories: '600 cal',
        color: '#8FBC8F',
        description: 'A classic eggplant Parmesan with crispy breaded eggplant slices, marinara sauce, and melted cheeses.',
        steps: [
            'Preheat the oven to 375°F (190°C).',
            'Slice the eggplant and coat with breadcrumbs.',
            'Bake the eggplant slices until golden brown.',
            'In a baking dish, layer the eggplant with marinara sauce and cheeses.',
            'Bake for 20-25 minutes until bubbly and golden.',
            'Serve hot.'
        ],
        categoryId: 3
    },
    {
        id: 40,
        name: 'Stuffed Peppers',
        image: require('../../assets/food-app/greenDream.jpg'),
        rating: '4.4',
        ingrediants: ['Bell Peppers', 'Ground Beef', 'Rice', 'Tomato Sauce', 'Cheese'],
        time: '60 mins',
        difficulty: 'Hard',
        calories: '500 cal',
        color: '#FFD700',
        description: 'Hearty stuffed peppers filled with seasoned ground beef, rice, and topped with melted cheese.',
        steps: [
            'Preheat the oven to 375°F (190°C).',
            'Cut the tops off the bell peppers and remove seeds.',
            'In a skillet, cook ground beef until browned.',
            'Mix the cooked beef with rice and tomato sauce.',
            'Stuff the bell peppers with the mixture and place in a baking dish.',
            'Top with cheese and bake for 35-40 minutes.',
            'Serve hot.'
        ],
        categoryId: 6
    }
];
