import React, { useState } from 'react';
import Modal from "react-modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import Select, { components } from 'react-select';
import { Link } from 'react-router-dom';
import "./MainPage.css";
import SavedRecipes from "./SavedRecipes";
import validIngredients from "../assets/ingredients.txt";
import { BiSolidFoodMenu } from "react-icons/bi";
import { PiCookingPotBold } from "react-icons/pi";
import ToggleButton from './ToggleButton';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const ingredientsList = [
    { label: 'salt', value: 'salt' },
    { label: 'sugar', value: 'sugar' },
    { label: 'flour', value: 'flour' },
    { label: 'butter', value: 'butter' },
    { label: 'oil', value: 'oil' },
    { label: 'eggs', value: 'eggs' },
    { label: 'milk', value: 'milk' },
    { label: 'bread', value: 'bread' },
    { label: 'garlic', value: 'garlic' },
    { label: 'onion', value: 'onion' },
    { label: 'pepper', value: 'pepper' },
    { label: 'tomato', value: 'tomato' },
    { label: 'cheese', value: 'cheese' },
    { label: 'chicken', value: 'chicken' },
    { label: 'beef', value: 'beef' },
    { label: 'pork', value: 'pork' },
    { label: 'lamb', value: 'lamb' },
    { label: 'rice', value: 'rice' },
    { label: 'pasta', value: 'pasta' },
    { label: 'vinegar', value: 'vinegar' },
    { label: 'lemon', value: 'lemon' },
    { label: 'lime', value: 'lime' },
    { label: 'cilantro', value: 'cilantro' },
    { label: 'parsley', value: 'parsley' },
    { label: 'oregano', value: 'oregano' },
    { label: 'basil', value: 'basil' },
    { label: 'thyme', value: 'thyme' },
    { label: 'rosemary', value: 'rosemary' },
    { label: 'cinnamon', value: 'cinnamon' },
    { label: 'nutmeg', value: 'nutmeg' },
    { label: 'ginger', value: 'ginger' },
    { label: 'cumin', value: 'cumin' },
    { label: 'paprika', value: 'paprika' },
    { label: 'honey', value: 'honey' },
    { label: 'maple syrup', value: 'maple syrup' },
    { label: 'brown sugar', value: 'brown sugar' },
    { label: 'baking powder', value: 'baking powder' },
    { label: 'baking soda', value: 'baking soda' },
    { label: 'vanilla extract', value: 'vanilla extract' },
    { label: 'almond extract', value: 'almond extract' },
    { label: 'cocoa powder', value: 'cocoa powder' },
    { label: 'chocolate chips', value: 'chocolate chips' },
    { label: 'oats', value: 'oats' },
    { label: 'nuts', value: 'nuts' },
    { label: 'raisins', value: 'raisins' },
    { label: 'cranberries', value: 'cranberries' },
    { label: 'yogurt', value: 'yogurt' },
    { label: 'sour cream', value: 'sour cream' },
    { label: 'cream cheese', value: 'cream cheese' },
    { label: 'cottage cheese', value: 'cottage cheese' },
    { label: 'feta cheese', value: 'feta cheese' },
    { label: 'mozzarella', value: 'mozzarella' },
    { label: 'cheddar', value: 'cheddar' },
    { label: 'parmesan', value: 'parmesan' },
    { label: 'ricotta', value: 'ricotta' },
    { label: 'blue cheese', value: 'blue cheese' },
    { label: 'gouda', value: 'gouda' },
    { label: 'brie', value: 'brie' },
    { label: 'salmon', value: 'salmon' },
    { label: 'tuna', value: 'tuna' },
    { label: 'shrimp', value: 'shrimp' },
    { label: 'crab', value: 'crab' },
    { label: 'lobster', value: 'lobster' },
    { label: 'scallops', value: 'scallops' },
    { label: 'mussels', value: 'mussels' },
    { label: 'clams', value: 'clams' },
    { label: 'tilapia', value: 'tilapia' },
    { label: 'cod', value: 'cod' },
    { label: 'halibut', value: 'halibut' },
    { label: 'trout', value: 'trout' },
    { label: 'anchovies', value: 'anchovies' },
    { label: 'tofu', value: 'tofu' },
    { label: 'chickpeas', value: 'chickpeas' },
    { label: 'black beans', value: 'black beans' },
    { label: 'kidney beans', value: 'kidney beans' },
    { label: 'lentils', value: 'lentils' },
    { label: 'quinoa', value: 'quinoa' },
    { label: 'couscous', value: 'couscous' },
    { label: 'barley', value: 'barley' },
    { label: 'spinach', value: 'spinach' },
    { label: 'kale', value: 'kale' },
    { label: 'lettuce', value: 'lettuce' },
    { label: 'arugula', value: 'arugula' },
    { label: 'cabbage', value: 'cabbage' },
    { label: 'broccoli', value: 'broccoli' },
    { label: 'cauliflower', value: 'cauliflower' },
    { label: 'Brussels sprouts', value: 'Brussels sprouts' },
    { label: 'carrots', value: 'carrots' },
    { label: 'bell peppers', value: 'bell peppers' },
    { label: 'zucchini', value: 'zucchini' },
    { label: 'eggplant', value: 'eggplant' },
    { label: 'cucumber', value: 'cucumber' },
    { label: 'radish', value: 'radish' },
    { label: 'celery', value: 'celery' },
    { label: 'asparagus', value: 'asparagus' },
    { label: 'green beans', value: 'green beans' },
    { label: 'peas', value: 'peas' },
    { label: 'corn', value: 'corn' },
    { label: 'potatoes', value: 'potatoes' },
    { label: 'sweet potatoes', value: 'sweet potatoes' },
    { label: 'butternut squash', value: 'butternut squash' },
    { label: 'acorn squash', value: 'acorn squash' },
    { label: 'pumpkin', value: 'pumpkin' },
    { label: 'beets', value: 'beets' },
    { label: 'parsnips', value: 'parsnips' },
    { label: 'turnips', value: 'turnips' },
    { label: 'rutabaga', value: 'rutabaga' },
    { label: 'artichokes', value: 'artichokes' },
    { label: 'mushrooms', value: 'mushrooms' },
    { label: 'avocado', value: 'avocado' },
    { label: 'olives', value: 'olives' },
    { label: 'pesto', value: 'pesto' },
    { label: 'hummus', value: 'hummus' },
    { label: 'salsa', value: 'salsa' },
    { label: 'guacamole', value: 'guacamole' },
    { label: 'tzatziki', value: 'tzatziki' },
    { label: 'barbecue sauce', value: 'barbecue sauce' },
    { label: 'hot sauce', value: 'hot sauce' },
    { label: 'salsa verde', value: 'salsa verde' },
    { label: 'chimichurri', value: 'chimichurri' },
    { label: 'tahini', value: 'tahini' },
    { label: 'miso', value: 'miso' },
    { label: 'curry paste', value: 'curry paste' },
    { label: 'coconut milk', value: 'coconut milk' },
    { label: 'broth', value: 'broth' },
    { label: 'stock', value: 'stock' },
    { label: 'tomato sauce', value: 'tomato sauce' },
    { label: 'tomato paste', value: 'tomato paste' },
    { label: 'canned tomatoes', value: 'canned tomatoes' },
    { label: 'crushed tomatoes', value: 'crushed tomatoes' },
    { label: 'diced tomatoes', value: 'diced tomatoes' },
    { label: 'tomato puree', value: 'tomato puree' },
    { label: 'tomato juice', value: 'tomato juice' },
    { label: 'chicken broth', value: 'chicken broth' },
    { label: 'beef broth', value: 'beef broth' },
    { label: 'vegetable broth', value: 'vegetable broth' },
    { label: 'coconut oil', value: 'coconut oil' },
    { label: 'olive oil', value: 'olive oil' },
    { label: 'canola oil', value: 'canola oil' },
    { label: 'sesame oil', value: 'sesame oil' },
    { label: 'peanut oil', value: 'peanut oil' },
    { label: 'sunflower oil', value: 'sunflower oil' },
    { label: 'corn oil', value: 'corn oil' },
    { label: 'vegetable oil', value: 'vegetable oil' },
    { label: 'mayo', value: 'mayo' },
    { label: 'mustard', value: 'mustard' },
    { label: 'ketchup', value: 'ketchup' },
    { label: 'barbecue sauce', value: 'barbecue sauce' },
    { label: 'hot sauce', value: 'hot sauce' },
    { label: 'Worcestershire sauce', value: 'Worcestershire sauce' },
    { label: 'soy sauce', value: 'soy sauce' },
    { label: 'teriyaki sauce', value: 'teriyaki sauce' },
    { label: 'hoisin sauce', value: 'hoisin sauce' },
    { label: 'fish sauce', value: 'fish sauce' },
    { label: 'balsamic vinegar', value: 'balsamic vinegar' },
    { label: 'red wine vinegar', value: 'red wine vinegar' },
    { label: 'white wine vinegar', value: 'white wine vinegar' },
    { label: 'apple cider vinegar', value: 'apple cider vinegar' },
    { label: 'rice vinegar', value: 'rice vinegar' },
    { label: 'malt vinegar', value: 'malt vinegar' },
    { label: 'pickle', value: 'pickle' },
    { label: 'relish', value: 'relish' },
    { label: 'jalapeños', value: 'jalapeños' },
    { label: 'capers', value: 'capers' },
    { label: 'sun-dried tomatoes', value: 'sun-dried tomatoes' },
    { label: 'anchovies', value: 'anchovies' },
    { label: 'horseradish', value: 'horseradish' },
    { label: 'tahini', value: 'tahini' },
    { label: 'miso paste', value: 'miso paste' },
    { label: 'peanut butter', value: 'peanut butter' },
    { label: 'almond butter', value: 'almond butter' },
    { label: 'cashew butter', value: 'cashew butter' },
    { label: 'sunflower butter', value: 'sunflower butter' },
    { label: 'tahini', value: 'tahini' },
    { label: 'jam', value: 'jam' },
    { label: 'jelly', value: 'jelly' },
    { label: 'preserves', value: 'preserves' },
    { label: 'Nutella', value: 'Nutella' },
];

const NOvegetarian = [
    'chicken', 'beef', 'pork', 'lamb', 'shellfish', 'lobster', 'shrimp', 'crab', 'clams', 'mussels', 'scallops',
    'fish', 'salmon', 'tuna', 'trout', 'halibut', 'cod', 'tilapia', 'anchovies', 'chicken broth', 'beef broth', 
    'salami', 'ham', 'turkey'
]

const NOvegan = [
    'chicken', 'beef', 'pork', 'lamb', 'shellfish', 'lobster', 'shrimp', 'crab', 'clams', 'mussels', 'scallops',
    'fish', 'salmon', 'tuna', 'trout', 'halibut', 'cod', 'tilapia', 'anchovies', 'chicken broth', 'beef broth', 
    'salami', 'ham', 'turkey', 'eggs', 'mayo', 'Worcestershire sauce', 'milk', 'cream', 'cheese', 'yogurt', 'sour cream', 
    'sour cream', 'cream cheese', 'cottage cheese', 'feta cheese', 'mozzarella', 'cheddar', 'parmesan', 
    'ricotta', 'blue cheese', 'gouda', 'brie'
]

const NOdairy = [
    'milk', 'cream', 'cheese', 'yogurt', 'sour cream', 'sour cream', 'cream cheese', 'cottage cheese',
    'feta cheese', 'mozzarella', 'cheddar', 'parmesan', 'ricotta', 'blue cheese', 'gouda', 'brie'
]

const NOgluten = [
    'flour', 'bread', 'pasta', 'hoagie', 'rolls', 'buns', 'pretzels'
]

const recipes = [
    {
        "url":"https://www.allrecipes.com/recipe/179774/sugar-salad/",
        "title":"Sugar Salad",
        "cook":"10 mins",
        "description":"Simply put, this is green leaf lettuce dressed with a mixture of vegetable oil, apple cider vinegar, and sugar.",
        "directions":"Step1: Whisk the vegetable oil, vinegar, and sugar in a small bowl. Place the lettuce in a large bowl. Drizzle the oil mixture over the lettuce and toss to coat.",
        "images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3332502.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90",
        "ingredients":"0.25 cup vegetable oil, 2 tablespoons apple cider vinegar, 2 tablespoons white sugar, 1 head green leaf lettuce, torn into bite-size pieces",
        "prep":"10 mins",
        "servings":"4",
        "total":"10 mins",
        "timestamp":"2024-01-14T22:09:25Z",
        "saved":false
    },
    {
        "url":"https://www.allrecipes.com/recipe/233761/cucumber-soup-with-tomatoes/",
        "title":"Cucumber Soup with Tomatoes",
        "cook":"30 mins",
        "description":"This five-ingredient recipe for cucumber soup with tomatoes is a quick and refreshing summertime lunch or dinner.",
        "directions":"Step1: Place 2 cucumbers in a blender; pour in chicken stock. Blend cucumber mixture until smooth and pureed; pour cucumber puree into a large bowl. Step2: Chop the remaining 2 cucumbers. Stir chopped cucumbers, tomato, lime juice, and cayenne pepper into pureed cucumber until well mixed. Refrigerate until chilled, at least 30 minutes.",
        "images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8278890.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90",
        "ingredients":"4 cucumbers - peeled, quartered, and seeded, 1 (14.5 ounce) can chicken broth, 1 cup chopped tomato, 0.25 cup fresh lime juice, 0.125 teaspoon cayenne pepper",
        "prep":"15 mins",
        "servings":"4",
        "total":"45 mins",
        "timestamp":"2024-01-14T22:09:47Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/8408202/simple-salami-sandwich/",
        "title":"Simple Salami Sandwich",
        "cook":"10 mins",
        "description":"Salami, lettuce, tomato, and a zesty olive mix combine in this delicious and easy salami sandwich that's perfect for a quick lunch.",
        "directions":"Step1: Place bottom bun on a plate and spread mustard over the bun. Top with salami, cheese, tomato, and lettuce leaf. Step2: Combine black olives, green olives, and salad dressing in a bowl. Place mixture on top of the lettuce. Top with remaining half of bun. Serve immediately.",
        "images":"https://www.allrecipes.com/thmb/vuldFQTawIhbIlFvAMjWaAY3PtA=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/4520479-avocado-breakfast-sandwich-Buckwheat-Queen-1x1-1-0c41845d9017421a86e742a0d19302d2.jpg",
        "ingredients":"1 hoagie bun, toasted and split, 1 teaspoon yellow mustard, 6 salami, 2 slices Colby-Jack cheese, 2 slices tomato, 1 leaf red leaf lettuce, 2 teaspoons sliced ripe olives, drained, 2 teaspoons sliced green olives with pimiento, 2 teaspoons zesty Italian-style salad dressing",
        "prep":"10 mins",
        "servings":"1",
        "total":"10 mins",
        "timestamp":"2024-01-14T22:09:55Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/276320/grandmas-chicken-soup/",
        "title":"Grandma's Chicken Soup",
        "cook":"3 hrs 30 mins",
        "description":"Grandma's chicken soup is good for what ails you! You'll feel better after a bowl of this homemade chicken soup, loaded with carrots, celery, and onions.",
        "directions":"Step1: Clean chicken and remove some, but not all, fat. Place in a 2-quart soup pot with carrots, celery, tomatoes, and onion. Tie all dill sprigs into a bunch with kitchen string; add to the pot with salt and pepper. Add water until chicken is covered by 2 inches. Step2: Cook over medium-low heat until chicken is just about cooked through, about 3 hours. Remove chicken to a platter and allow to cool slightly, 15 to 20 minutes. Cut meat off the bones, place meat back into the pot, and discard the bones. Cook over medium-low heat until heated through, about 30 minutes longer. Remove dill before serving.",
        "images":"https://www.allrecipes.com/thmb/zpyP_53LTRV70oJh65IlvscmjfI=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/1270830-db69c9b96f6b46d087478942e8559338.jpg",
        "ingredients":"1 (5 pound) whole chicken, 1 pound carrots, peeled and sliced, 1 pound celery, sliced, 2 tomatoes, seeded and chopped, 1 large onion, chopped, 1 bunch fresh dill, 1 tablespoon kosher salt, 1 tablespoon ground black pepper, 10 cups warm water as needed",
        "prep":"35 mins",
        "servings":"8",
        "total":"4 hrs 20 mins",
        "timestamp":"2024-01-14T22:10:01Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/136476/easy-french-dip-sandwiches/",
        "title":"Easy French Dip Sandwiches",
        "cook":"10 mins",
        "description":"This French dip sandwich is made in 15 minutes with thinly sliced roast beef soaked in flavorful au jus, served warm with melted provolone cheese.",
        "directions":"Step1: Preheat the oven to 350 degrees F (175 degrees C). Step2: Open hoagie rolls and lay them out on a baking sheet. Step3: Heat beef consommé and water in a medium saucepan over medium-high heat to make a rich beef broth. Step4: Place roast beef in broth and warm for 3 minutes. Step5: Arrange meat on hoagie rolls and top each roll with 2 slices of provolone. Step6: Bake sandwiches in the preheated oven until cheese melts, about 5 minutes. Step7: Serve sandwiches with small bowls of warm broth for dipping.",
        "images":"https://www.allrecipes.com/thmb/rwhPXXvcIGXCgQYQSqP6uRUaeZI=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/136476-Easy-French-Dip-Sandwiches-ddmps-4x3-104757-5b722084131b4259a91e073b0ae539ba.jpg",
        "ingredients":"4 hoagie rolls, split lengthwise, 1 (10.5 ounce) can beef consomme, 1 cup water, 1 pound thinly sliced deli roast beef, 8 slices provolone cheese",
        "prep":"5 mins",
        "servings":"4",
        "total":"15 mins",
        "timestamp":"2024-01-14T22:10:08Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/232375/natashas-chicken-burgers/",
        "title":"Natasha's Chicken Burgers",
        "cook":"10 mins",
        "description":"A chicken burger that's easy to make with ground chicken, seasoned bread crumbs, grated onion, and garlic. They taste delicious and are ready in a snap!",
        "directions":"Step1: Mix ground chicken, 1/4 cup bread crumbs, onion, egg, and garlic in a bowl. Season with salt and pepper. Step2: Moisten hands and shape chicken mixture, 2 tablespoons at a time, into flat, oval-shaped patties. Step3: Spread remaining 1/4 cup bread crumbs in a shallow dish. Dip patties in bread crumbs to coat. Step4: Heat olive oil in a large skillet over medium-high heat. Step5: Cook patties in hot oil until deeply browned on the bottoms, 5 to 6 minutes. Turn patties and cook until other sides are browned, 3 to 4 minutes more.",
        "images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3752216.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90",
        "ingredients":"1 pound extra-lean ground chicken, 0.5 cup Italian-seasoned bread crumbs, divided, 0.5 small onion, finely grated, 1 egg, 2 cloves garlic, minced, salt and ground black pepper to taste, 2 teaspoons olive oil","prep":"10 mins",
        "servings":"4",
        "total":"20 mins",
        "timestamp":"2024-01-14T22:10:18Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/35149/corn-dogs/",
        "title":"Homemade Corn Dogs",
        "cook":"20 mins",
        "description":"Make your own corn dogs using beef frankfurters skewered on sticks, dipped in corn batter, and fried until golden brown for a carnival treat at home.",
        "directions":"Step1: Combine cornmeal, flour, sugar, baking powder, salt, and pepper in a medium bowl; stir in milk and egg to make a batter. Step2: Heat oil in a deep fryer or large saucepan to 375 degrees F (190 degrees C). Meanwhile, pat frankfurters dry and insert a skewer into each one. Roll frankfurters in batter until well coated. Step3: Fry 2 or 3 corn dogs at a time in preheated oil until lightly browned, about 3 minutes. Drain on paper towels.",
        "images":"https://www.allrecipes.com/thmb/aTeCmNtBT1cVyI0UEjfl76W9PPc=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HomemadeCornDogs4x3-a10707a1c5e544adbe5fdd2013c8fc4f.jpg",
        "ingredients":"1 cup yellow cornmeal, 1 cup all-purpose flour, 0.25 cup white sugar, 4 teaspoons baking powder, 0.25 teaspoon salt, 0.125 teaspoon black pepper, 1 cup milk, 1 egg, 1 quart vegetable oil for frying, 2 (16 ounce) packages beef frankfurters, 16 wooden skewers",
        "prep":"20 mins",
        "servings":"16",
        "total":"40 mins",
        "timestamp":"2024-01-14T22:10:25Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/228126/caprese-salad-with-balsamic-reduction/",
        "title":"Caprese Salad with Balsamic Reduction",
        "cook":"10 mins",
        "description":"This caprese salad with sliced tomatoes, mozzarella, and fresh basil is finished with an easy homemade balsamic reduction for a standout summer salad",
        "directions":"Step1: Stir balsamic vinegar and honey together in a small saucepan and place over high heat. Bring to a boil, reduce heat to low, and simmer until mixture has reduced to 1/3 cup, about 10 minutes. Set aside to cool. Step2: Arrange alternating slices of tomato and mozzarella decoratively on a serving platter. Sprinkle with salt and black pepper, tuck basil leaves around slices, and drizzle with olive oil and the balsamic reduction.",
        "images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1018869.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90",
        "ingredients":"1 cup balsamic vinegar, 0.25 cup honey, 3 large tomatoes, cut into 1/2-inch slices, 1 (16 ounce) package fresh mozzarella cheese, cut into 1/4-inch slices, 0.25 teaspoon salt, 0.25 teaspoon ground black pepper, 0.5 cup fresh basil leaves, 0.25 cup extra-virgin olive oil",
        "prep":"15 mins",
        "servings":"4",
        "total":"25 mins",
        "timestamp":"2024-01-14T22:10:32Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/285151/campfire-bread-on-a-stick/",
        "title":"Campfire Bread on a Stick",
        "cook":"10 mins",
        "description":"This basic bread dough is great if you want to make bread on a stick over a campfire. Grill hot dogs at the same time and stuff them inside the baked bread.",
        "directions":"Step1: Combine flour, sugar, oil, yeast, and salt in a large bowl. Add 1 cup of water and start kneading. Continue kneading and adding water until you get an even dough that is very slightly sticky. Step2: Knead a further 10 minutes, or longer if you have the time and patience. Cover dough and let rise in a warm area until it has doubled in volume, about 1 hour. (The dough can be baked when it has doubled its volume). Step3: Have a few longish sticks or branches ready, about the thickness of a hotdog. Tear off a fistful of dough, roll it into a ball, then flatten it into a 4-inch round. Roll the dough around the end of the stick, so the edges will overlap. Step4: Put the dough end of the stick in the campfire. Try to find a hot area that is not actually burning. Cook, turning every so often, until the bread is dark on the outside and slides easily off the stick, about 10 minutes.",
        "images":"https://www.allrecipes.com/thmb/kzY3A3zK86BoXkVMEOXSxXnYzGE=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/1068930-9cf15cc930d44f6b96c2ac30236c741d.jpg",
        "ingredients":"8 cups all-purpose flour, 0.33333334326744 cup white sugar, 0.33333334326744 cup vegetable oil, 1 tablespoon active dry yeast, 1 tablespoon salt, 2 cups water, or as needed",
        "prep":"30 mins",
        "servings":"16",
        "total":"1 hr 40 mins",
        "timestamp":"2024-01-14T22:10:42Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/237358/hawaiian-ham-and-cheese-sliders/",
        "title":"Hawaiian Ham and Cheese Sliders",
        "cook":"35 mins",
        "description":"The best Hawaiian sliders with ham, cheese, sweet rolls, and a buttery poppy seed sauce. These are great for potlucks and quick and easy to prepare.",
        "directions":"Step1: Preheat the oven to 350 degrees F (175 degrees C). Spray a 9x13-inch baking dish with cooking spray. Step2: Melt butter in a saucepan over medium-low heat; cook and stir onion in the melted butter until softened, 5 to 10 minutes. Add mustard, poppy seeds, and Worcestershire sauce; cook and stir for 5 minutes. Step3: Arrange the roll bottoms in the prepared baking dish. Spoon 2/3 of the onion mixture over top. Add ham and cheese to each roll. Place the roll tops over the cheese layer, then brush the remaining onion mixture over top. Cover the dish with aluminum foil. Step4: Bake in the preheated oven for 15 minutes. Remove aluminum foil and bake until the roll tops are lightly browned, 5 to 10 minutes.",
        "images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F9281601.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90",
        "ingredients":"cooking spray (such as Crisco®), 0.5 cup butter, 1 onion, minced, 3 tablespoons Dijon mustard, 1 tablespoon poppy seeds, 2 teaspoons Worcestershire sauce, or more to taste, 1 (12 count) package Hawaiian sweet rolls, split, or more as needed, 1 pound sliced deli ham, or more as needed, 8 slices Swiss cheese, or more as needed","prep":"15 mins",
        "servings":"12",
        "total":"50 mins",
        "timestamp":"2024-01-14T22:11:03Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/221923/japanese-tamago-egg/",
        "title":"Japanese Tamago Egg",
        "cook":"10 mins",
        "description":"Tamago is a light, slightly sweet and savory Japanese rolled omelet also known as tamagoyaki — it will make a great addition to your sushi platter!",
        "directions":"Step1: Beat eggs thoroughly in a bowl; whisk in dashi stock, sugar, mirin, and soy sauce until sugar has dissolved. Step2: Lightly grease a nonstick skillet and heat over medium heat. Step3: Pour a thin layer of egg mixture into the hot pan and swirl to coat the pan. Cook until egg layer is firm on the bottom but still slightly liquid on top, about 1 minute. Then lift up one edge using a spatula and roll up the egg layer. Push omelet roll to one side of the skillet. Oil the skillet again and pour in another thin layer of egg, lifting the first omelet roll up slightly to allow the egg to flow underneath; roll up the first omelet in the new layer of egg and push omelet to the edge of the skillet as before. Repeat the process with the remaining egg mixture, oiling the pan each time if needed. Step4: Remove rolled omelet to a serving platter and cut into 6 equal pieces to serve.",
        "images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Fe82b049fa536913a5e2e024f55e4ca38%2F1690149236277tamago.jfif&q=60&c=sc&orient=true&w=160&poi=auto&h=90",
        "ingredients":"4 eggs, 0.25 cup prepared dashi stock, 1 tablespoon white sugar, 1 teaspoon mirin (Japanese sweet wine), 0.5 teaspoon soy sauce, 0.5 teaspoon vegetable oil, or more as needed",
        "prep":"15 mins",
        "servings":"6",
        "total":"25 mins",
        "timestamp":"2024-01-14T22:11:11Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/70019/egg-butter/",
        "title":"Egg Butter",
        "cook":"15 mins",
        "description":"Use this unusual egg and butter spread as a sandwich filling, or as a topping for crackers or bagels.",
        "directions":"Step1: Place the eggs into a saucepan in a single layer and fill with water to cover the eggs by 1 inch. Cover the saucepan and bring the water to a boil over high heat. Once the water is boiling, remove from the heat and let the eggs stand in the hot water for 15 minutes. Cool the eggs under cold running water. Peel, and remove yolks from white. Chop yolks; reserve whites for another use. Step2: Beat butter in a large bowl until soft and fluffy. Mix in the egg yolks, cayenne pepper, and Worcestershire sauce. Beat until smooth.",
        "images":"https://www.allrecipes.com/thmb/4O5nXf_QMWUgnSdcicnXgNuPzR0=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/1855884-232448c3967b4799acdd9a54535f32bb.jpg",
        "ingredients":"4 eggs, 0.5 cup butter, 1 pinch cayenne pepper, 6 drops Worcestershire sauce",
        "prep":"10 mins",
        "servings":"4",
        "total":"45 mins",
        "timestamp":"2024-01-14T22:11:18Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/214825/christys-awesome-hot-ham-and-cheese/",
        "title":"Christy's Awesome Hot Ham and Cheese",
        "cook":"10 mins",
        "description":"This ham and cheese sandwich is quickly made with Swiss cheese and deli ham grilled on whole grain bread for an easy, hot sandwich perfect for lunch.",
        "directions":"Step1: Gather all ingredients. Step2: Preheat a skillet over medium-high heat. Step3: Spread one side of each slice of bread with 1 teaspoon butter. Step4: Place one slice butter-side down in the hot skillet. Top with Swiss cheese and ham. Step5: Spread the unbuttered side of second slice of bread with mayonnaise and mustard; place it butter-side up on sandwich. Step6: Cook in the hot skillet until golden brown and cheese is melted, about 3 minutes per side.",
        "images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Fc313149f69d532a6344ca26b26284fda%2F167029116513716702911565581838075682778372651.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90",
        "ingredients":"2 slices whole grain bread, 2 teaspoons butter, 2 slices Swiss cheese, 2 thin slices deli ham, 1 teaspoon mayonnaise, 1 teaspoon whole grain mustard",
        "prep":"5 mins",
        "servings":"1",
        "total":"15 mins",
        "timestamp":"2024-01-14T22:11:25Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/84450/ukrainian-red-borscht-soup/",
        "title":"Ukrainian Red Borscht Soup",
        "cook":"40 mins",
        "description":"Borscht is a hearty beet soup with cabbage, potatoes, and garlic that's popular in Eastern Europe. This Ukrainian recipe includes pork for a delicious, comforting meal.",
        "directions":"Step1: Crumble sausage into a skillet set over medium-high heat. Cook and stir until no longer pink. Remove from the heat and set aside. Step2: Fill a large pot halfway with water (about 8 cups) and bring to a boil. Step3: Add sausage to pot, cover pot, and return to a boil. Add beets and simmer for 10 minutes. Add carrots and potatoes and continue to cook until potatoes are tender, about 10 minutes more. Stir in cabbage and tomatoes. Step4: Heat oil in a skillet over medium heat. Add onion and cook until tender. Stir in tomato paste and remaining 3/4 cup water until well blended; transfer to the pot. Step5: Add garlic to the soup, cover, and turn off the heat. Let stand 5 minutes. Stir in sugar and season with salt and pepper. Step6: Ladle into serving bowls. Garnish with sour cream and dill.",
        "images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F09%2F03%2FUkrainian-Red-Borscht-Soup.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90",
        "ingredients":"1 (16 ounce) package pork sausage, 3 medium beets, peeled and shredded, 3 carrots, peeled and shredded, 3 medium baking potatoes, peeled and cubed, 0.5 medium head cabbage, cored and shredded, 1 cup diced tomatoes, drained, 1 tablespoon vegetable oil, 1 medium onion, chopped, 1 (6 ounce) can tomato paste, 8.75 cups water, divided, or as needed, 3 cloves garlic, minced, 1 teaspoon white sugar, or to taste, salt and pepper to taste, 0.5 cup sour cream, for topping, 1 tablespoon chopped fresh parsley for garnish",
        "prep":"25 mins",
        "servings":"10",
        "total":"1 hr 5 mins",
        "timestamp":"2024-01-14T22:11:31Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/176132/slow-cooker-buffalo-chicken-sandwiches/",
        "title":"Slow Cooker Buffalo Chicken Sandwiches",
        "cook":"6 hrs",
        "description":"This crockpot Buffalo chicken recipe is super easy to prepare. Perfect for spicy sandwiches that will please anyone who loves Buffalo chicken wings!",
        "directions":"Step1: Place chicken breasts into the slow cooker; pour in 3/4 of the wing sauce and ranch dressing mix. Step2: Cover and cook on Low for 6 to 7 hours. Step3: Shred chicken in the cooker with two forks. Stir in butter. Step4: Pile shredded chicken and sauce onto hoagie rolls. Serve with remaining Buffalo sauce.",
        "images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F05%2F27%2F1113368-slow-cooker-buffalo-chicken-sandwiches-ReneePaj-1x1-1.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90",
        "ingredients":"4 skinless, boneless chicken breast halves, 1 (17.5 fluid ounce) bottle Buffalo wing sauce, divided, 0.5 (1 ounce) package dry ranch salad dressing mix, 2 tablespoons butter, 6 hoagie rolls, split lengthwise",
        "prep":"10 mins",
        "servings":"6",
        "total":"6 hrs 10 mins",
        "timestamp":"2024-01-14T22:11:40Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/14385/pasta-salad/",
        "title":"Pasta Salad",
        "cook":"10 mins",
        "description":"This pasta salad uses tri-colored spiral pasta, crunchy bell peppers, tomatoes, and an easy dressing to create a tasty and beautiful salad for six.",
        "directions":"Step1: Gather all ingredients. Step2: Bring a large pot of lightly salted water to a boil. Cook pasta in the boiling water, stirring occasionally, until tender yet firm to the bite, about 10 to 12 minutes; rinse under cold water and drain. Step3: Whisk Italian dressing and salad spice mix together until smooth. Combine pasta, tomatoes, bell peppers, and olives in a salad bowl. Step4: Pour dressing over salad and toss to coat. Step5: Refrigerate salad, 8 hours to overnight. Step6: Enjoy!",
        "images":"https://www.allrecipes.com/thmb/ai0Ge-DBA3ErjZFSqzBCsvJyXao=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/14385-pasta-salad-DDMFS-4x3-28eb5dbe00624780b36cabfef15ca183.jpg",
        "ingredients":"1 pound tri-colored spiral pasta, 1 (16 ounce) bottle Italian-style salad dressing, 6 tablespoons salad seasoning mix, 2 cups cherry tomatoes, diced, 1 green bell pepper, chopped, 1 red bell pepper, diced, 0.5 yellow bell pepper, chopped, 1 (2.25 ounce) can black olives, chopped",
        "prep":"20 mins",
        "servings":"6",
        "total":"8 hrs 30 mins",
        "timestamp":"2024-01-14T22:12:02Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/13313/best-cream-of-broccoli-soup/",
        "title":"Best Cream Of Broccoli Soup",
        "cook":"25 mins",
        "description":"This quick homemade cream of broccoli soup is the best, thanks to flavorful additions like celery and onions and a thick, but creamy, texture.",
        "directions":"Step1: Gather all ingredients. Step2: Melt 2 tablespoons butter in a medium stock pot over medium heat. Saute onion and celery until tender. Step3: Add broccoli and broth, cover, and simmer for 10 minutes. Step4: Pour the soup into a blender, filling the pitcher no more than halfway full. Hold down the lid of the blender with a folded kitchen towel, and carefully start the blender, using a few quick pulses to get the soup moving before leaving it on to puree. Puree in batches until smooth and pour into a clean pot. Alternately, you can use an immersion blender and puree the soup right in the cooking pot. Step5: Melt 3 tablespoons butter in a small saucepan over medium to medium-low heat; stir in flour and add milk. Stir until thick and bubbly, and add to soup. Season with pepper and serve. Step6: Serve hot and enjoy!",
        "images":"https://www.allrecipes.com/thmb/6YMt8BStDljJkjvYrx-0TfqDa44=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/13313-best-cream-of-broccoli-soup-AllrecipesMagazine-4x3-495e6329745545a28c2a9b4e6ee3fab6.jpg",
        "ingredients":"5 tablespoons butter, divided, 1 onion, chopped, 1 stalk celery, chopped, 3 cups chicken broth, 8 cups broccoli florets, 3 tablespoons all-purpose flour, 2 cups milk, ground black pepper to taste",
        "prep":"10 mins",
        "servings":"6",
        "total":"35 mins",
        "timestamp":"2024-01-14T22:12:10Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/236257/taco-bell-seasoning-copycat/",
        "title":"Taco Bell Seasoning Copycat",
        "cook":"10 mins",
        "description":"Copycat Taco Bell seasoning is fast and simple to make and will make your tacos taste like the popular Mexican chain for an easy taco Tuesday dinner.",
        "directions":"Step1: Whisk together onion flakes, flour, bouillon granules, garlic salt, cumin, paprika, chili powder, cayenne pepper, and sugar in a bowl.",
        "images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Fc66b1b87082ed9b2ff66ba033a3a4abf%2F1692044116558image.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90",
        "ingredients":"1 tablespoon dried onion flakes, 1 teaspoon all-purpose flour, 1 teaspoon beef bouillon granules, 1 teaspoon garlic salt, 1 teaspoon ground cumin, 1 teaspoon paprika, 1 teaspoon chili powder, 0.25 teaspoon cayenne pepper, 0.25 teaspoon white sugar",
        "prep":"10 mins",
        "servings":"4",
        "total":"10 mins",
        "timestamp":"2024-01-14T22:12:18Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/24264/sloppy-joes-ii/",
        "title":"Sloppy Joes",
        "cook":"30 mins",
        "description":"Sloppy Joes are easy to make with lean ground beef, basic pantry ingredients, and hamburger buns. A comforting classic the whole family will enjoy!",
        "directions":"Step1: Heat a large skillet over medium heat. Cook and stir lean ground beef in the hot skillet until some of the fat starts to render, 3 to 4 minutes. Add onion and bell pepper; continue to cook until vegetables have softened and beef is cooked through, 3 to 5 more minutes. Step2: Stir in ketchup, brown sugar, mustard, and garlic powder; season with salt and pepper. Reduce heat to low and simmer for 20 to 30 minutes. Step3: Divide meat mixture evenly among hamburger buns.",
        "images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F04%2F22%2F24264-sloppy-joes-dianne-1x1-1.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90",
        "ingredients":"1 pound lean ground beef, 0.25 cup chopped onion, 0.25 cup chopped green bell pepper, 0.75 cup ketchup, or to taste, 1 tablespoon brown sugar, or to taste, 1 teaspoon yellow mustard, or to taste, 0.5 teaspoon garlic powder, salt and ground black pepper to taste, 6 hamburger buns, split",
        "prep":"5 mins",
        "servings":"6",
        "total":"35 mins",
        "timestamp":"2024-01-14T22:12:26Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/231097/caldo-de-pollo/",
        "title":"Caldo de Pollo",
        "cook":"1 hr 50 mins",
        "description":"Caldo de pollo is a simple but richly-flavored chicken soup that's packed with vegetables and seasoned with garlic and lots of fresh cilantro.",
        "directions":"Step1: Place chicken legs into a large stockpot; pour water over chicken. Add minced garlic, salt, and garlic powder. Step2: Cover and bring to a boil over high heat. Reduce to a simmer and cook until chicken meat falls off the bones, 1 to 2 hours. Step3: Stir in chicken bouillon cube until dissolved; add carrots, potatoes, zucchini, chayote, and white onion. Reduce heat to medium-low and simmer until carrots and potatoes are tender, 45 minutes to 1 hour. Step4: Stir chopped cilantro into soup. Simmer for 5 minutes and serve.",
        "images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4873232.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90",
        "ingredients":"5 pounds chicken leg quarters, 2 gallons water, 2 tablespoons minced garlic, 2 tablespoons salt, 1 tablespoon garlic powder, 1 cube chicken bouillon, 4 large carrots, peeled and cut into large chunks, 4 large potatoes, peeled and cut into large chunks, 4 zucchini, cut into large chunks, 1 chayote, cut into large chunks, 1 large white onion, cut into large chunks, 0.5 bunch fresh cilantro, chopped",
        "prep":"20 mins",
        "servings":"8",
        "total":"2 hrs 10 mins",
        "timestamp":"2024-01-14T22:12:49Z"
    },
    {
        "url":"https://www.allrecipes.com/arugula-salad-with-stone-fruit-recipe-7506181",
        "title":"Arugula Salad with Stone Fruit",
        "cook":"20 mins",
        "description":"This juicy, vibrant arugula salad features fresh cherries, peaches, and nectarines for a summery flavor. For an extra touch of sweetness, opt for rosé vinegar, a rosé wine-based vinegar with a bright, fruity flavor.",
        "directions":"Step1: Whisk together olive oil, vinegar, salt, and pepper in a small bowl for the dressing. Step2: Arrange tomatoes, arugula, basil, nectarines, and peach slices on a large platter. Drizzle with half the dressing. Top with cherries, sea salt, and remaining dressing. Serve immediately.",
        "images":"https://www.allrecipes.com/thmb/ousao_BM3ZF_9wgqwymRN6Lbw4o=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/karen-rankin-d540d94de5d6483f9a39ae079acdfa5d.jpg",
        "ingredients":"2 tablespoon extra-virgin olive oil, 2 tablespoon red wine vinegar or rosé vinegar, 3/4 teaspoon salt, 1/2 teaspoon black pepper, 1 ½ cups red cherry tomatoes, halved, 1 ½ cups yellow cherry tomatoes, halved, 1 (5-oz. package) arugula, 3/4 cup fresh basil leaves, 2 medium nectarines, sliced, 1 large white peach, sliced, 1 cup Rainier or other yellow-flesh cherries,pitted and halved, 1/2 teaspoon flaky sea salt",
        "prep":"20 mins",
        "servings":"4",
        "total":"20 mins",
        "timestamp":"2024-01-14T22:12:56Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/237984/marinated-cucumber-onion-and-tomato-salad/",
        "title":"Marinated Cucumber, Onion, and Tomato Salad",
        "cook":"2 hrs",
        "description":"This summer-ready cucumber, tomato, and onion salad is marinated for two hours in a simple, zesty homemade dressing before it's served for tons of flavor.",
        "directions":"Step1: Gather all ingredients. Step2: Whisk water, vinegar, oil, sugar, salt, and pepper together in a large bowl until smooth. Step3: Add cucumbers, tomatoes, and onion and stir to coat. Step4: Cover bowl with plastic wrap; refrigerate for at least 2 hours. Step5: Enjoy!",
        "images":"https://www.allrecipes.com/thmb/YAtDpOzRdhBLvTylyi_Hv-Yd2tk=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/237984-marinated-cucumber-onion-and-tomato-salad-DDMFS-4x3-6bc28384ef344d7ca6459b4fefa3b019.jpg",
        "ingredients":"1 cup water, 0.5 cup distilled white vinegar, 0.25 cup vegetable oil, 0.25 cup sugar, 1 teaspoon salt, or to taste, 1 teaspoon freshly ground black pepper, or to taste, 3 cucumbers, peeled and sliced 1/4-inch thick, 3 tomatoes, cut into wedges, 1 onion, sliced and separated into rings",
        "prep":"15 mins",
        "servings":"6",
        "total":"2 hrs 15 mins",
        "timestamp":"2024-01-14T22:13:04Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/12997/baked-potato-soup-i/",
        "title":"Baked Potato Soup",
        "cook":"25 mins",
        "description":"This creamy baked potato soup is easy to make with leftover baked potatoes and loaded with crispy bacon bits, green onions, sour cream, and Cheddar.",
        "directions":"Step1: Place bacon in a large skillet and cook over medium-high heat, turning occasionally, until evenly browned, about 8 to 10 minutes. Drain bacon slices on paper towels; crumble and set aside. Step2: Meanwhile, melt butter in a stockpot or Dutch oven over medium heat. Gradually add flour, whisking until well-combined. Slowly pour in milk, whisking constantly until smooth and thickened. Step3: Add potatoes and onions and bring to a boil, stirring frequently. Reduce heat and simmer for 10 minutes. Step4: Stir in crumbled bacon, Cheddar cheese, sour cream, salt, and pepper. Continue cooking and stirring until cheese is melted.",
        "images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F02%2F5867379.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90",
        "ingredients":"12 slices bacon, 0.66666668653488 cup butter or margarine, 0.66666668653488 cup all-purpose flour, 7 cups milk, 4 large baked potatoes, peeled and cubed, 4 green onions, chopped, 1.25 cups shredded Cheddar cheese, 1 cup sour cream, 1 teaspoon salt, 1 teaspoon ground black pepper",
        "prep":"15 mins",
        "servings":"6",
        "total":"40 mins",
        "timestamp":"2024-01-14T22:13:11Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/13637/three-bean-salad/",
        "title":"Three Bean Salad",
        "cook":"12 hrs",
        "description":"This three bean salad made with green beans, wax beans, and kidney beans keeps well, serves a lot of people, and is great for summer picnics and cookouts.",
        "directions":"Step1: Gather all ingredients. Step2: Mix together green beans, wax beans, kidney beans, onion, sugar, vinegar, vegetable oil, salt, pepper, and celery seed. Chill in refrigerator for at least 12 hours. Step3: Enjoy!",
        "images":"https://www.allrecipes.com/thmb/O28Zdgk15jvbbQR8OO6GgLbA_eg=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/13637-three-bean-salad-DDMFS-4x3-411d1b4eab5b4d3c87ecaa92de784c67.jpg",
        "ingredients":"1 (15 ounce) can green beans, 1 pound wax beans, 1 (15 ounce) can kidney beans, drained and rinsed, 1 onion, sliced into thin rings, 0.75 cup white sugar, or to taste, 0.66666668653488 cup distilled white vinegar, 0.33333334326744 cup vegetable oil, 0.5 teaspoon salt, 0.5 teaspoon ground black pepper, 0.5 teaspoon celery seed",
        "prep":"15 mins",
        "servings":"16",
        "total":"12 hrs 15 mins",
        "timestamp":"2024-01-14T22:13:24Z"
    },
    {
        "url":"https://www.allrecipes.com/miso-noodle-soup-in-a-jar-recipe-8350566",
        "title":"Miso Noodle Soup in a Jar",
        "cook":"10 mins",
        "description":"Our version of miso noodle soup in a jar was inspired by recipes on TikTok for miso soup in a jar. Try this heat-and-eat recipe for a warming main to prep and tote all season long. Use jars labeled “microwave-safe” (check the bottoms) and never microwave the lids.",
        "directions":"Step1: Cut tofu into 1/2-inch planks. Heat oil in a large skillet over medium-high heat. Cook tofu, turning halfway through, until golden, 6 to 8 minutes. Cut tofu into cubes. Step2: Stir together green onions, miso paste, garlic, stock base, and ginger in a small bowl. Divide evenly among 3 microwave-safe pint-size canning jars with lids. Step3: Layer evenly with rice vermicelli noodles, tofu, mushrooms, and bok choy. Chill, covered, up to 5 days. To serve, see “Heat and Eat”. Garnish with sliced green onions.",
        "images":"https://www.allrecipes.com/thmb/7bMNYmg4ESa-7qKF3GeHmrlJEEI=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/julana-hale-2-8211c7c2d2b24548aa4c56ee160e8309.jpg",
        "ingredients":"12 ounces extra-firm tofu, 1 tablespoon vegetable oil , 1/4 cup sliced green onions , 3 tablespoon white miso paste , 2 cloves minced garlic , 1 tablespoon vegetable stock base , 1 tablespoon grated fresh ginger , 11/2 cups cooked rice vermicelli noodles , 1 cup thinly sliced shiitake mushrooms, 1 cup thinly sliced baby bok choy",
        "prep":"20 mins",
        "servings":"3",
        "total":"35 mins",
        "timestamp":"2024-01-14T22:13:36Z"
    },
    {
        "url":"https://www.allrecipes.com/loaded-steak-fries-recipe-7564469",
        "title":"Loaded Steak Fries",
        "cook":"40 mins",
        "description":"Skip going out to the bar, because these loaded steak fries are all you need. Frozen fries are baked, then topped with a homemade cheese sauce, marinated grilled steak, and fresh toppings.",
        "directions":"Step1: Place beer, Worcestershire sauce, red pepper flakes, and garlic in a resealable plastic bag. Squeeze in lime juice. Add steak, coat with marinade, squeeze out excess air, and seal the bag. Marinate in the refrigerator for at least 2 hours, or overnight. Step2: Preheat the oven to 425 degrees F (220 degrees C). Spread fries onto a baking sheet and spray with cooking spray.  Step3: Bake in the preheated oven until crisp, 25 to 30 minutes, or per package instructions. Step4: Meanwhile, make cheese sauce. Melt butter in a saucepan over medium heat; whisk in flour; whisk continuously until mixture turns golden and forms a smooth paste. Pour in half and half and stir until mixture thickens, 3 to 5 minutes. Stir in cheese until melted, 2 to 3 minutes more. Stir garlic powder, oregano, and dill into the sauce. Step5: Meanwhile, preheat an outdoor grill for medium-high heat and lightly oil the grate. Remove steak from the marinade and shake off excess. Discard remaining marinade. Cook steak on the preheated until firm and reddish-pink and juicy in the center, about 5 minutes per side for medium rare. An instant-read thermometer inserted into the center should read 130 degrees F (54 degrees C). Remove from the grill and let rest for 5 minutes before slicing. Step6: Place French fries evenly on a platter; pour cheese sauce over fries. Top with sliced steak, tomato, red onions, and thinly sliced jalapenos. Serve immediately.",
        "images":"https://www.allrecipes.com/thmb/6mj8M4OLhDSSs_E_GcHIX05C71E=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/MauraYarusRawlette-f6e95b344ed24dcb806916ab5c40b514.jpg",
        "ingredients":"1 cup light beer, 1/3 cup Worcestershire sauce, 1/2 teaspoon red pepper flakes, 1 teaspoon fresh garlic, 1 lime, 1 pound sirloin filet steaks, 1 (32 ounce) package frozen French fries, cooking spray",
        "prep":"15 mins",
        "servings":"4",
        "total":"2 hrs 55 mins",
        "timestamp":"2024-01-14T22:36:58Z"
    },
    {
        "url":"https://www.allrecipes.com/butternut-squash-fritters-recipe-7969440",
        "title":"These Test Kitchen-Approved Butternut Squash Fritters Are Simply Irresistible",
        "cook":"5 mins",
        "description":"Tasty butternut squash fritters are the perfect fall appetizer or snack.",
        "directions":"Step1: Gather all ingredients. Step2: Combine the squash, cheese, flour, eggs, thyme, salt, and pepper in a large bowl. Step3:   Heat 2 tablespoons oil in a large skillet over medium. Working in batches, drop batter by 3 tablespoon portions into hot oil. Flatten mounds into 3 inch circles. Step4: Cook until golden, 3 to 4 minutes, turning once. Step5: Sprinkle with salt immediately after removing from the skillet . Keep warm in a 200 degrees F (95 degrees C) oven while cooking remaining fritters. Add additional oil as needed during cooking. Serve warm.",
        "images":"https://www.allrecipes.com/thmb/0zw4UjU3H4t18DSG19wL5qCnc6Y=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sarah-brekke-5ffb9ca235cb459aab591cce26ae57c7.jpg",
        "ingredients":"3 cups shredded butternut squash, 1 cup shredded sharp white Cheddar cheese (4 ounces), 2/3 cup all-purpose flour, 2 eggs, lightly beaten, 1 1/2 teaspoons chopped fresh thyme, 1/2 teaspoon salt, plus more for sprinkling, 1/4 teaspoon freshly ground black pepper, 2 to 3 tablespoons vegetable oil",
        "prep":"10 mins","servings":"13","total":"15 mins","timestamp":"2024-01-14T22:37:19Z"
    },
    {
        "url":"https://www.allrecipes.com/cranberry-feta-pinwheels-recipe-8362033",
        "title":"Cranberry Feta Pinwheels",
        "cook":"10 mins",
        "description":"These cranberry feta pinwheels are perfect for holiday parties. With a cream cheese and feta filling, flecked with red and green, they’re an easy, make-ahead appetizer with only a few ingredients.",
        "directions":"Step1: Place bacon in a large skillet and cook over medium-high heat, turning occasionally, until evenly browned, about 10 minutes. Drain bacon slices on paper towels, until cool; chop into small pieces. Step2: Mix together cream cheese, feta, bacon, green peppers, cranberries, garlic powder, and onion powder in a medium bowl until combined. Step3: Spread evenly onto each tortilla. Roll up tortillas, then wrap each one tightly in aluminum foil. Chill in the refrigerator, at least 4 hours or overnight. Step4: To serve, remove foil; trim ends of tortilla rolls, and slice into 1-inch-thick pieces.",
        "images":"https://www.allrecipes.com/thmb/6mj8M4OLhDSSs_E_GcHIX05C71E=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/MauraYarusRawlette-f6e95b344ed24dcb806916ab5c40b514.jpg",
        "ingredients":"4 slices bacon, 1 (8 ounces) whipped cream cheese, softened, 1/2 cup crumbled feta, 1/2 cup chopped green peppers, 1/2 cup chopped dried cranberries, 1/2 teaspoon garlic powder, 1/2 teaspoon onion powder, 4 (8 inch) flour tortillas",
        "prep":"15 mins","servings":"15","total":"4 hrs 25 mins","timestamp":"2024-01-14T22:37:31Z"
    },
    {
        "url":"https://www.allrecipes.com/hot-cowgirl-dip-recipe-8411454",
        "title":"Meet Hot Cowgirl Dip: The Creamy, Cheesy Dip of 2023","cook":"20 mins",
        "description":"Our test kitchen called this creamy, spicy corn-and-cheese dip &#34;so delicious it’s dangerous.&#34; Take 2023's hottest trend—cowboy everything—to another level and make this recipe before the year ends.",
        "directions":"Step1: Gather all ingredients. Step2: Preheat oven to 375°F. Toss Monterey Jack cheese with cornstarch in a large bowl; reserve 1 cup of cheese mixture in a small bowl. Add cream cheese, cilantro, and 3/4 cup of the scallions to cheese mixture in large bowl; stir until evenly combined. Step3: Stir in black beans, corn, green chiles, salsa, taco seasoning, pickled jalapeños, and salt until combined. Step4: Spread mixture evenly in an 8-inch cast-iron skillet; top with reserved cheese mixture. Step5: Bake in preheated oven until cheese is melted and lightly golden in spots, about 20 minutes. Garnish with cilantro, pickled jalapeño slices, and remaining 1/4 cup scallions; top with tomatoes, pickled red onions, avocado, bacon, and fresh jalapenos, if using. Serve with tortilla chips.",
        "images":"https://www.allrecipes.com/thmb/Uw_tHATeKYW1sYOR499pxKv9a2U=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Renu-Dhar-headshot-366785e7acaa49d3a09775c3bfcf33ae.jpg",
        "ingredients":"8 ounces Monterey Jack cheese, shredded (about 2 cups), 1 tablespoon cornstarch, 1/2 cup (4 ounces) cream cheese, softened, 1/4 cup chopped fresh cilantro, plus more for garnish (from 1 [2 3/4 ounce] bunch), 1 cup thinly sliced scallions, divided (from 6 medium [3 ounces total] scallions), 1 (15 ounce) can black beans, drained, 1 (14.75 ounce) can fire-roasted corn, drained, 1 (4 ounce) can chopped hot green chiles (such as Hatch), 1/3 cup thick and chunky salsa (from 1 [16 ounce jar] ), 1 tablespoon taco seasoning mix, 1 tablespoon chopped pickled jalapeño slices, plus more whole slices for garnish, 1/2 teaspoon kosher salt, Chopped tomatoes, pickled red onions, chopped avocado, chopped cooked bacon, thinly sliced fresh jalapeño chiles, for topping (optional), Tortilla chips, for serving",
        "prep":"20 mins","servings":"8 (serving size: 1/2 cup)","total":"40 mins","timestamp":"2024-01-14T22:37:38Z"
    },
    {
        "url":"https://www.allrecipes.com/pumpkin-cheese-ball-recipe-7969895",
        "title":"Pumpkin Cheese Ball",
        "cook":"3 hrs",
        "description":"This pumpkin cheese ball is a classic make-ahead appetizer for the holidays. You can use your favorite cheese, e.g. smoked or flavored cheese and cream cheese are good options.",
        "directions":"Step1: Gather all ingredients. Step2: Combine cream cheese, hot pepper sauce, paprika, and garlic in a food processor. Process until well combined. Step3: Add 1 1/2 cups shredded cheese and process until cheese is finely chopped but still very visible. Step4: Sprinkle about 3 tablespoons of the remaining shredded cheese into a 4-inch pile on a large piece of plastic wrap, and top with a rounded scoop of the cheese ball mixture. Step5: Sprinkle the cheese ball mound with the remaining shredded cheese. Step6: Pull sides of plastic wrap up and over the cheese ball mixture to wrap tightly and shape into a ball. (If needed, wrap with an additional piece of plastic wrap to ensure the mixture is very tightly wrapped.) Step7: Wrap 4 wide rubber bands around the cheese ball, evenly spacing them to create the indentations that are found on a pumpkin. (Depending on the size of the rubber bands, you may need to double wrap each one to create indentations that are deep enough.) Step8: Chill cheese ball in the refrigerator at least 3 hours before serving to allow flavors to meld and the cream cheese to become firm. Step9: Before serving, remove rubber bands and unwrap cheese ball. Place a bell pepper stem on top of the pumpkin and gently press to adhere. Serve with crackers.",
        "images":"https://www.allrecipes.com/thmb/J5846u3LBKKdNv8SCUrmBB9H2Ck=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kathryn-hendrix-square-cac0dfa725e04692b20e8db50262bbbd.jpg",
        "ingredients":"2 (8-ounce) packages cream cheese, softened, 1 tablespoon bottled hot pepper sauce, 1 teaspoon paprika, 1/2 teaspoon minced garlic, 8 ounces finely shredded yellow Cheddar cheese (2cups), 1 stem from a bell pepper, Crackers",
        "prep":"20 mins","servings":"24","total":"3 hrs 20 mins","timestamp":"2024-01-14T22:38:11Z"
    },
    {
        "url":"https://www.allrecipes.com/chicken-almondine-recipe-8411102",
        "title":"Chicken Almondine",
        "cook":"15 mins",
        "description":"Chicken almondine is nothing more than dressed up chicken tenderloins in a buttery almond pan sauce. Made in one skillet, this chicken dish is something special.",
        "directions":"Step1: Add flour, Herbes de Provence, salt, and pepper to a large resealable plastic bag. Mix and toss gently in the bag to evenly distribute. Add chicken tenderloins, close the bag, and toss until coated with flour mixture. Step2: Melt butter in a large skillet over medium heat. When butter sizzles, add almonds and cook, stirring, until lightly browned, about 3 minutes, being careful not to burn. Step3: Pour skillet contents through a wire mesh sieve, trapping the almonds in the sieve and collecting the butter in a heat-proof bowl. Wipe the skillet clean with a paper towel, and return the butter to the skillet, reserving the almonds for later. Step4: When the butter is hot again, add floured and seasoned tenderloins. Cook until each side is browned, 3 to 4 minutes per side. Step5: Add only white parts of onions and minced garlic to the skillet around tenderloins; cook until fragrant, about 1 minute. Step6: Pour white wine and chicken broth around tenderloins, cover, reduce heat to low, and simmer until an instant-read thermometer inserted near the center of chicken reads 165 degrees F (74 degrees C), 5 to 8 minutes. Remove chicken from the skillet to a serving plate and keep warm. Step7: Increase the heat to medium. When liquid bubbles, return almonds to the skillet. Adjust seasoning, if necessary, and cook until sauce thickens slightly, 2 to 3 minutes (See Cook's Note.) Step8: Pour almonds and sauce over chicken tenderloins. Garnish with reserved sliced green onion tops.",
        "images":"https://www.allrecipes.com/thmb/L1H_OchE6ZL8f8a0qO23JUD2N_w=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/7069291-green-beans-almondine-France-C-4x3-1-890611b763894f4e9a933c865b740de4.jpg",
        "ingredients":"1/4 cup all purpose flour, 1/2 teaspoon Herbes de Provence, 1/2 teaspoon salt, or to taste, 1/4 teaspoon ground black pepper, or to taste, 8 chicken tenderloins, 5 Tablespoons unsalted butter, 1/2 cup sliced raw almonds, 3 green onions, sliced, white and green parts separated, 2 cloves garlic, minced, 1/2 cup white wine, 1/2 cup chicken broth",
        "prep":"15 mins","servings":"4","total":"30 mins","timestamp":"2024-01-14T22:38:20Z"
    },
    {
        "url":"https://www.allrecipes.com/tater-tot-taco-cups-recipe-8424353",
        "title":"Loaded Tater Tot Taco Cups",
        "cook":"30 mins",
        "description":"Crispy-baked loaded tater tot taco cups are filled with your favorite taco toppings are a great appetizer, or paired with rice and beans make a complete meal.",
        "directions":"",
        "images":"https://www.allrecipes.com/thmb/fh8eF2hUqSViyz-XEXULxwTo5a4=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/NicoleRussellSoupLovingNicole-9607577801804bd09ea93bbdb7fcae6d.jpg",
        "ingredients":"16 ounces golden tater tots, such as Ore-Ida® Golden Tater Tots (60 tots), 8 ounces lean ground beef, 1/2 (1 ounce) envelope taco seasoning, 1/2 cup shredded Cheddar cheese, 1/4 cup shredded lettuce, 1/4 cup salsa, or to taste, 1/4 cup sour cream, or to taste",
        "prep":"15 mins","servings":"6","total":"45 mins","timestamp":"2024-01-14T22:38:36Z"
    },
    {
        "url":"https://www.allrecipes.com/cheese-stuffed-tater-tots-recipe-7972531",
        "title":"Cheese-Stuffed Tater Tots",
        "cook":"5 mins",
        "description":"These cheese-stuffed tater tots are a fun appetizer for a casual get together. Serve with whatever dipping sauce you enjoy.",
        "directions":"Step1: Gather all ingredients. Step2: Combine eggs, flour, salt, pepper, paprika, and garlic powder in a large bowl. Step3: Place half of the hash browns in a food processor. Pulse briefly once or twice until most of the shreds are about 1/2-inch long. It’s fine if some of the shreds stay long. Step4: Add hash browns to the bowl with egg mixture. Repeat with remaining hash browns. Toss to coat. Step5: Divide hash brown mixture in thirty-two 1 1/2-tablespoon portions (a #40 scoop is great for this). Step6: Working over the sink, place a portion of the mixture in the palm of your hand. Place a cheese cube in the center. Step7: Close your hand to press the hash browns mixture around the cheese, pressing and shaping to form a short cylinder, squeezing out excess liquid as you go. Step8: Place shaped tots on a parchment lined baking sheet.When all tots are shaped, freeze until they hold their shape, 30 minutes. Step9: Heat oil in a large heavy saucepan over medium heat to 375 degrees F (190 degrees C). Fry 4 to 6 tots at a time until golden brown, 3 to 4 minutes per batch. Drain on paper towels. Keep fried tots warm in a 200 degree F (95 degrees C) oven while frying the rest. ",
        "images":"https://www.allrecipes.com/thmb/7bMNYmg4ESa-7qKF3GeHmrlJEEI=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/julana-hale-2-8211c7c2d2b24548aa4c56ee160e8309.jpg",
        "ingredients":"2 eggs, lightly beaten, 2 tablespoons all-purpose flour, 2 teaspoons kosher salt, 1/2 teaspoon ground black pepper, 1/2 teaspoon paprika, 1/4 teaspoon garlic powder, 1 (30-ounce) package frozen shredded hash brown potatoes, thawed, 4 ounces smoked Cheddar or gouda cheese, cut in 32 cubes, 1 quart peanut oil",
        "prep":"40 mins","servings":"4","total":"45 mins","timestamp":"2024-01-14T22:38:51Z"
    },
    {
        "url":"https://www.allrecipes.com/crab-rangoon-in-the-air-fryer-recipe-7511370",
        "title":"Crab Rangoon in the Air Fryer","cook":"8 mins",
        "description":"Crab rangoon turn extra crispy when cooked in the air fryer. Filled with crab, cream cheese, and spices these little crab puffs are a tasty Chinese-American treat.",
        "directions":"Step1: Stir together apricot spread, chili-garlic sauce, soy sauce, orange zest, and orange juice in a small bowl for the dipping sauce. Step2: Preheat air fryer to 350 degrees F (175 degrees C). Step3: Stir together cream cheese, crab, chives, Worcestershire, garlic, pepper, and salt in a bowl for the filling. Arrange 6 wonton wrappers on a work surface. Keep remaining wrappers covered until ready to use to prevent them from drying out. Step4: Spoon about 2 teaspoon crab filling in center of each wrapper. Lightly wet borders of wrapper with water. Bring together the 2 opposite corners of the wrapper over the filling and seal together. Bring remaining 2 corners up toward the center, sealing edges of the wrapper to enclose the filling. Repeat with remaining wrappers and filling. Step5: Working in batches if needed, coat dumplings with cooking spray and arrange in an even layer in the air fryer basket. Step6: Cook until dumplings are crispy and golden brown, about 8 minutes. Serve with sauce.",
        "images":"https://www.allrecipes.com/thmb/4h0_YlaJXW4aW-1j7nh4YgqxL4s=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1511x0:1513x2):format(webp)/277955air-fryer-crab-rangoonLindsay4x3-6f3ecae5ade64d7c9819cb8cac97da0a.jpg",
        "ingredients":"1/2 cup seedless apricot fruit spread, 1 tablespoon chili-garlic sauce, 1 tablespoon less-sodium soy sauce, 1/2 teaspoon orange zest, 2 tablespoons fresh juice (from 1 orange), 4 un cream cheese, 4 ounces fresh lump crabmeat, drained, 2 tablespoons chopped fresh chives, 2 teaspoon Worcestershire sauce, 1 clove garlic, grated (1/2 teaspoon), 1/4 teaspoon freshly ground black pepper, 1/8 teaspoon salt, 18 wonton wrappers",
        "prep":"30 mins","servings":"9","total":"38 mins","timestamp":"2024-01-14T22:38:58Z"
    },
    {
        "url":"https://www.allrecipes.com/caramel-cheetos-recipe-7971390",
        "title":"Caramel Cheetos","cook":"1 hr 5 mins",
        "description":"These caramel cheetos are the perfect salty-sweet snack. They feature cheese and caramel flavors and are irresistible.",
        "directions":"Step1: Preheat the oven to 250 degrees F (120 degrees C). Line a large rimmed baking sheet with parchment paper. Step2: Pour cheetos into a large bowl. Step3: Combine light corn syrup, brown sugar, and butter in a saucepan over medium high heat. Stir constantly and bring the mixture to a boil. Cook for 1 minute and then pour mixture over the cheetos. Step4: Working quickly, stir to coat cheetos with sugar mixture and pour them out onto the prepared baking sheet. Spread them out into an even layer. Step5: Bake in the preheated oven for 1 hour, stirring every 15 minutes. Remove from the oven and allow to cool completely. Break any clumps into small pieces. Serve immediately or store in an airtight container. ",
        "images":"https://www.allrecipes.com/thmb/bTp96bLWnN7r28uyGH0YEbH47rM=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/nicole-mclaughlin-portrait-129b390897334dedad8bf1ae0fc22633.jpg",
        "ingredients":"2 (8.5oz) bags crunchy cheese curls, such as cheetos, 1 cup light corn syrup, 1 cup brown sugar, 1 stick (8oz) butter",
        "prep":"5 mins","servings":"20","total":"1 hr 10 mins","timestamp":"2024-01-14T22:39:05Z"
    },
    {
        "url":"https://www.allrecipes.com/smoked-jalapeno-poppers-recipe-7969057",
        "title":"Smoked Jalapeno Poppers","cook":"2 hrs","description":"These smoked jalapeno poppers go great with brisket. If you've never had smoked cream cheese before, you are in for a treat.",
        "directions":"Step1: Preheat a smoker to 250 degrees F (120 degrees C) according to manufacturer’s directions using wood of choice. Step2: Mix cream cheese, Cheddar cheese, bacon bits, and steak seasoning in a bowl until evenly combined. Step3: Fill a piping bag with cream cheese mixture. Pipe mixture into hollowed-out jalapenos and place on a disposable baking sheet. Step4: Place baking sheet directly on the grate of the smoker. Smoke for 2 hours.",
        "images":"https://www.allrecipes.com/thmb/fh8eF2hUqSViyz-XEXULxwTo5a4=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/NicoleRussellSoupLovingNicole-9607577801804bd09ea93bbdb7fcae6d.jpg",
        "ingredients":"8 ounces cream cheese, softened, 1/4 cup shredded Cheddar cheese, 1/4 cup real bacon bits, 1 tablespoon Montreal steak seasoning, 12 fresh medium jalapenos. stems removed, and cored",
        "prep":"15 mins","servings":"6","total":"2 hrs 15 mins","timestamp":"2024-01-14T22:39:16Z"
    },
    {
        "url":"https://www.allrecipes.com/spicy-ranch-pretzels-recipe-8418620",
        "title":"Spicy Ranch Pretzels",
        "cook":"25 mins",
        "description":"These spicy ranch pretzels have a bit of a kick to them, plus that ranch flavor we all love. You only need 4 ingredients and a little bit of hands-on time to make them. They are a perfect snack for on the go, packed lunch, or watching a game.",
        "directions":"Step1: Preheat the oven to 350 degrees F (175 degrees C). Step2: Melt butter in a large microwave-safe bowl. Add ranch seasoning and Aleppo pepper. Pour in pretzel pieces. Toss to coat. Spread pretzels out in a single layer on a rimmed baking sheet.  Step3: Bake in the preheated oven for 15 minutes. Stir pretzels; bake for 10 minutes more.  Step4: Cool completely before storing in an airtight container.",
        "images":"https://www.allrecipes.com/thmb/w9Bf3cx3cOcm2KK5G1gindtoWBM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/8418575_Ranch-Pretzels_Nicole-Russell_4x3-ffe7912bfc514798bf67af8484899a0c.jpg",
        "ingredients":"1/4 cup unsalted butter, melted, 2 tablespoons dry ranch seasoning, 1/2 teaspoon crushed Aleppo pepper flakes, 9 ounces mini pretzels",
        "prep":"5 mins","servings":"9","total":"30 mins","timestamp":"2024-01-14T22:39:23Z"
    },
    {
        "url":"https://www.allrecipes.com/toy-box-tomato-ricotta-cheese-torta-recipe-7692905",
        "title":"“Toy Box” Tomato Ricotta Cheese Torta",
        "cook":"20 mins",
        "description":"For this gorgeous tomato torta, Chef John uses small colorful tomatoes you can find at any farmer’s market.",
        "directions":"Step1: Preheat the oven to 400 degrees F (200 degrees C). Grease a 9- or 10-inch pie dish with 1 tablespoon olive oil, and set aside. Step2: Add ricotta, egg, flour, baking powder, salt, black pepper, garlic, basil, oregano, and Parmigiano-Reggiano cheese to a mixing bowl, and stir thoroughly to combine; spoon into the prepared pie dish, and spread into an even layer. Step3: Bake in the preheated oven until the torta puffs up a bit, and the cheese firms up, about 20 minutes. A skewer inserted in the center should come out clean.  Step4: Let cool until just warm. Cover the top of the torta with halved cherry tomatoes. Drizzle with remaining olive oil, and season generously with sea salt. The torta can also be served at room temperature, or cold. The finished torta can also be drizzled with balsamic vinegar, or any vinegar, as well as freshly squeezed lemon.",
        "images":"https://www.allrecipes.com/thmb/Y-K__yi4PKJ19V6SIcMKilZ0l40=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7692905_Toy-Box-Tomato-Ricotta-Cheese-Torta_Chef-John_4x3-0f0d6d41e364485db551b083dd5bd4aa.jpg",
        "ingredients":"2 tablespoons olive oil, divided , 12 ounces (1 1/2 cups) ricotta cheese, 1 large egg, 1/4 cup all-purpose flour, 1/4 teaspoon baking powder, 1 teaspoon kosher salt, 1/4 teaspoon freshly ground black pepper, 1/2 clove garlic, crushed, optional, 1 tablespoon freshly chopped oregano, optional, 2 tablespoons freshly chopped basil, 1/4 cup grated Parmigiano-Reggiano cheese, 2 cups cherry tomatoes, halved, sea salt to taste",
        "prep":"10 mins","servings":"8","total":"30 mins","timestamp":"2024-01-14T22:39:31Z"
    },
    {
        "url":"https://www.allrecipes.com/the-best-beef-carpaccio-recipe-8403938",
        "title":"The Best Beef Carpaccio",
        "cook":"1 hr",
        "description":"This is the best beef carpaccio, and also easy to make at home. Cold, tender, rich beef, sliced paper thin and plated with a tangy, salty sauce, Parmesan shavings, briny capers, and baby arugula is a surprisingly simple but sophisticated appetizer.",
        "directions":"Step1: Wrap beef very tightly in plastic wrap and place in the freezer until just slightly firm, about 1 hour. Chill 4 large plates in the refrigerator until ready to serve.  Step2: Meanwhile, prepare sauce. Combine mayonnaise, 2 tablespoons lemon juice, anchovies, and 1/4 teaspoon pepper in the bowl of a food processor. Blend until smooth and set aside. Step3: Remove plastic wrap from beef. Using a very sharp knife, carefully slice paper-thin slices of beef. Arrange beef in a single layer divided among 4 chilled plates. Step4: Toss arugula with remaining lemon juice and pepper, olive oil, and salt. Place arugula mixture in the center of the beef.  Drizzle evenly with reserved sauce; sprinkle with capers and cheese. Serve immediately with baguette slices.",
        "images":"https://www.allrecipes.com/thmb/bTp96bLWnN7r28uyGH0YEbH47rM=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/nicole-mclaughlin-portrait-129b390897334dedad8bf1ae0fc22633.jpg",
        "ingredients":"1 pound beef tenderloin, 1/2 cup mayonnaise, 3 tablespoon lemon juice, divided, 2 anchovies, 1/2 teaspoon freshly ground black pepper, divided, 4 cups baby arugula, 1 tablespoon extra virgin olive oil, 1/4 teaspoon kosher salt, 1/4 cup capers, 1/2 cup shaved Parmesan cheese, baguette slices for serving (optional)",
        "prep":"20 mins","servings":"4","total":"1 hr 20 mins","timestamp":"2024-01-14T22:39:39Z"
    },
    {
        "url":"https://www.allrecipes.com/magic-meatball-crackers-recipe-7566818",
        "title":"Magic Meatball Crackers",
        "cook":"24 meatball crackers",
        "description":"Try these magic little meatball sliders served on toasty crackers. They are perfect crispy and salty bites of gooey cheese and rich meatball flavor.",
        "directions":"Step1: Preheat the oven to 325 degrees F (165 degrees C). Step2: Combine sirloin, oinon, garlic, milk, salt, pepper, basil, oregano, and egg in a bowl and mix. Stir in breadcrumbs until well combined. Spread meat mixture in a thin layer evenly on top of 24 crackers. Top with a slice of mozzarella cheese and 2nd cracker. Step3: Place crackers on a baking sheet and brush the tops evenly with olive oil. Step4: Bake in the preheated oven until meat is golden brown around the edges and cooked through and cheese is melted, 10 to 12 minutes. Step5: Serve with warm marinara sauce for dipping.",
        "images":"https://www.allrecipes.com/thmb/bTp96bLWnN7r28uyGH0YEbH47rM=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/nicole-mclaughlin-portrait-129b390897334dedad8bf1ae0fc22633.jpg",
        "ingredients":"1/2 lb. ground sirloin, 2 tablespoons minced onion, 1 clove garlic, minced, 3 tablespoons milk or half and half, 1 teaspoon kosher salt, 1/2 teaspoon freshly ground black pepper, 1teaspoon dried basil, 1/2 teaspoon dried oregano, 1 large egg, lightly beaten, 1/3 cup Italian seasoned breadcrumbs, 48 saltine crackers, 6 oz fresh mozzarella cheese, cut into 24 thin slices, 1/4 cup olive oil, ½ cup marinarasauce for serving, or as needed",
        "prep":"Preheat the oven to 325 degrees F (165 degrees C).","servings":"12","total":"0 mins","timestamp":"2024-01-14T22:39:46Z"
    },
    {
        "url":"https://www.allrecipes.com/the-best-hot-crab-dip-recipe-8414926",
        "title":"The Best Hot Crab Dip",
        "cook":"20 mins",
        "description":"This is THE best hot crab dip. I'm going to show you how to make what I consider the king of the hot dips, which begins, like most baked dips, with cream cheese, but the key ingredients I use really amplify that crabby flavor. Use the best lump crab you can find—but whether your budget has room for the finest fresh crab or just allows for canned crab, this easy baked dip will still be a hit at your party.",
        "directions":"Step1: Preheat the oven to 450 degrees F (230 degrees C). Step2: Stir cream cheese, sour cream, mayonnaise, ketchup, Worcestershire sauce, garlic, lemon zest and juice, seafood seasoning, paprika, hot sauce, freshly ground black pepper, cayenne, and 4 ounces shredded Cheddar cheese together in a bowl until well combined. Season with salt.  Step3: Add green onions and crab meat to the bowl; fold in gently with a spatula until evenly mixed.  Step4: Transfer into a baking dish or deep pie dish. Top with remaining 2 ounces shredded Cheddar and a shake of cayenne.  Step5: Bake in the preheated oven until dip is piping hot, about 20 minutes. Let rest 10 minutes before serving.  Step6: Serve with more green onions and sprinkle more cayenne on top if desired.",
        "images":"https://www.allrecipes.com/thmb/UnbbFjSjy_TNzid_wnuwg5-4wAw=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8414926_The-Best-Hot-Crab-Dip_Chef-John_4x3-5fab82f87d074a52880e1c6036c3976f.jpg",
        "ingredients":"2 (8 ounce) packages cream cheese, softened, 1/3 cup sour cream, 1/3 cup mayonnaise, 1/4 cup ketchup, 2 teaspoons Worcestershire sauce, 2 cloves garlic, minced, zest and juice from 1 lemon, 2 teaspoons seafood seasoning, such as OLD BAY® Seafood Seasoning, freshly ground black pepper to taste, 1 teaspoon hot sauce, cayenne pepper to taste, 6 ounces shredded white Cheddar cheese, divided, Salt to taste, 1/2 cup sliced green onions, 1 pound lump crab meat, drained, salt to taste",
        "prep":"15 mins","servings":"24","total":"45 mins","timestamp":"2024-01-14T22:39:54Z"
    },
    {
        "url":"https://www.allrecipes.com/frito-pie-recipe-7642500",
        "title":"Frito Pie",
        "cook":"10 mins",
        "description":"This frito pie, made with a quick homemade chili, is the perfect football season appetizer, easy to make and easy to customize.",
        "directions":"Step1: Heat a large skillet over medium-high heat. Cook and stir ground beef in the hot skillet until browned and crumbly, 5 to 7 minutes. Drain and discard grease. Stir in water, tomato paste, chili powder, cumin, onion powder, and garlic powder. Stir in beans; cook until heated through, about 3 minutes. Step2: Divide corn chips into 4 bowls, top with the chili mix, then sprinkle with diced onions, jalapeño slices, and Cheddar cheese. Serve immediately.",
        "images":"https://www.allrecipes.com/thmb/k7TyhWzw0GhpVxsgDkoNNNSHHts=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/3045758-fritos-pie-Rock_lobster-4x3-1-c74539f8ba044d08bf64765e9d51ffa3.jpg",
        "ingredients":"1/2 pound ground beef, 1/4 cup water, 1 tablespoon tomato paste, 1 tablespoon chili powder, 1/2 teaspoon ground cumin, 1/4 teaspoon onion powder, 1/4 teaspoon garlic powder, 1/4 cup chili beans",
        "prep":"15 mins","servings":"4","total":"25 mins","timestamp":"2024-01-14T22:40:04Z"
    },
    {
        "url":"https://www.allrecipes.com/pull-apart-onion-blue-cheese-and-bacon-bread-recipe-7567996",
        "title":"Pull-Apart Onion, Blue Cheese, and Bacon Bread",
        "cook":"1 hr 10 mins",
        "description":"This savory pull-apart loaf with onions, blue cheese, and bacon will ease you into fall with its robust flavors.",
        "directions":"Step1: Preheat the oven to 350 degrees F (175 degrees C). Line a 5x9-inch loaf pan with parchment paper, extending parchment beyond long edges of the pan. Step2: Cook bacon in a skillet over medium heat until crisp, about 8 minutes. Transfer to a paper towel-lined plate, reserving 1 tablespoons drippings in the skillet. Let bacon cool; then crumble. Step3: Cook onion in the bacon drippings over medium-low heat, covered, stirring occasionally, until tender, 13 to 15 minutes. Uncover and continue cooking, stirring frequently, until golden, 3 to 5 minutes. Stir in pepper; let cool. Stir in bacon, blue cheese, and thyme. Step4: Gently snip each roll into quarters, being careful not to deflate the dough. Arrange 1/3 of the dough pieces in the prepared pan. Top with 1/3 of onion mixture. Repeat layers two more times, ending with onion mixture. Drizzle with melted butter. Step5: Bake in the preheated oven until golden, about 45 minutes. An instant-read thermometer inserted into the center should register 190 degrees F to 200 degrees F (87 degrees C to 93 degrees C). Cool in the pan for 5 minutes, then use parchment overhang to carefully lift loaf from pan. Serve warm.",
        "images":"https://www.allrecipes.com/thmb/7bMNYmg4ESa-7qKF3GeHmrlJEEI=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/julana-hale-2-8211c7c2d2b24548aa4c56ee160e8309.jpg",
        "ingredients":"2 slices bacon, 1 onion, chopped (1 cup), 1/4 teaspoon black pepper, 1/2 cup crumbled blue cheese (2 ounces), 1/2 teaspoon chopped fresh thyme, 1/2 (3-lb.) pkg. frozen white roll dough (18 rolls), thawed, 1 tablespoons butter, melted",
        "prep":"20 mins","servings":"6","total":"5 mins","timestamp":"2024-01-14T22:40:13Z"
    },
    {
        "url":"https://www.allrecipes.com/baked-potato-chips-recipe-8421614",
        "title":"Baked Potato Chips",
        "cook":"20 mins",
        "description":"Homemade baked potato chips need only 3 ingredients, and once you perfect these you'll never go back to bagged potato chips again. This is a basic recipe, seasoned only with salt, but the possible flavor combinations are endless. You don’t even need to peel the potatoes!",
        "directions":"Step1: Preheat the oven to 400 degrees (200 degrees C). Line 2 baking sheets with paper towels. Step2: Using a mandoline, slice potatoes on the thinnest setting, about 1/8-inch thick. Place slices on the paper towel-lined baking sheets. Step3: Place a layer of paper towels over the potato slices. Let stand 5 minutes. Press down on paper towels to remove excess moisture. Step4: Discard paper towels. Place potato slices in a large bowl. Add oil and salt. Gently stir to combine. Step5: Line baking sheets with parchment paper. Divide potato slices between baking sheets in an even layer. Step6: Bake in the preheated oven for 10 minutes. Using tongs, flip each chip over. Bake until golden, about 10 minutes more. Step7: Remove chips from the oven and cool for 5 minutes; they will become more crisp as they cool.",
        "images":"https://www.allrecipes.com/thmb/fh8eF2hUqSViyz-XEXULxwTo5a4=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/NicoleRussellSoupLovingNicole-9607577801804bd09ea93bbdb7fcae6d.jpg",
        "ingredients":"1 pound Yukon gold potatoes, 2 teaspoons olive oil, 1/2 teaspoon sea salt",
        "prep":"10 mins","servings":"4","total":"40 mins","timestamp":"2024-01-14T22:40:20Z"
    },
    {
        "url":"https://www.allrecipes.com/cranberry-feta-pinwheels-with-jalapeno-recipe-8362250",
        "title":"Cranberry Feta Pinwheels with Jalapeño",
        "cook":"1 hr",
        "description":"These cranberry feta pinwheels with jalapeño are creamy and tangy with a little bit of sweet and a little bit of heat—a perfect appetizer and so very simple to make. Jalapeños can vary in spiciness, and they will determine the heat.",
        "directions":"Step1: Beat cream cheese and feta together in a bowl with an electric mixer until smooth. Stir in cranberries, jalapeños, walnuts, and thyme. Step2: Spread half the filling over a tortilla, leaving a 1/2-inch border around the edge. Roll up tightly and wrap tightly in plastic wrap. Repeat with remaining tortilla and filling. Refrigerate for at least 1 hour. Step3: To serve, trim the ends of the tortilla rolls, slice each roll into 1/2-inch pinwheels, and serve.",
        "images":"https://www.allrecipes.com/thmb/UtSOaW2u182PuWfzccLcyArjN38=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/8362033_Cranberry-Feta-Pinwheels_Chef-Mo_4x3-3dd06972d7ef48babbf30efa6e69124c.jpg",
        "ingredients":"8 ounces cream cheese, softened, 5 ounces feta cheese, crumbled, 1 cup dried cranberries, roughly chopped, 1/2 cup minced jalapeños, seeds and ribs removed, or to taste, 1/3 cup finely chopped walnuts, 2 teaspoons dried thyme, 2 1(0-inch) spinach flour wraps/tortillas (such as Mission®)",
        "prep":"15 mins","servings":"24","total":"1 hr 15 mins","timestamp":"2024-01-14T22:40:27Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/257545/zucchini-pizza-bites/",
        "title":"Zucchini Pizza Bites",
        "cook":"20 mins",
        "description":"Zucchini pizza bites are easy to make with just 4 main ingredients: zucchini slices, pepperoni, pizza sauce, and mozzarella for a cheesy pizza treat without the carbs.",
        "directions":"Step1: Preheat the oven to 375 degrees F (190 degrees C). Line a baking sheet with parchment paper. Step2: Spread zucchini slices in 1 layer on the prepared baking sheet. Step3: Bake in the preheated oven until zucchini is tender, about 15 minutes. Step4: Spoon pizza sauce over each zucchini slice and top with pepperoni and mozzarella cheese. Sprinkle herbs over each. Step5: Bake in the preheated oven until cheese is melted, about 5 minutes more.",
        "images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F5c1e9af4c77d07561bb750b8d58e7b98%2F1701815343795IMG_8773.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90",
        "ingredients":"2 zucchini, sliced, 0.25 cup pizza sauce, or as needed, 20 slices pepperoni, or as needed, 0.5 cup shredded mozzarella cheese, or as needed, 1 teaspoon dried parsley, or to taste",
        "prep":"10 mins","servings":"6","total":"30 mins","timestamp":"2024-01-14T22:40:37Z"
    },
    {
        "url":"https://www.allrecipes.com/air-fryer-crispy-pickle-chips-with-creole-dipping-sauce-recipe-7509784",
        "title":"Air Fryer Crispy Pickle Chips with Creole Dipping Sauce",
        "cook":"6 mins",
        "description":"Crispy pickle chips easily cooked in the air fryer. Serve with homemade Creole dipping sauce for a tasty snack.",
        "directions":"Step1: Preheat air fryer to 350 degrees F (175 degrees C). Lightly coat air fryer basket with cooking spray. Step2: Put flour in a shallow dish. In a second shallow dish, lightly beat eggs. In a third shallow dish, add panko. Pat pickle chips very dry. Coat pickles in flour, shaking off excess. Dip in eggs, allowing excess to drip off. Toss in panko, lightly pressing to adhere. Arrange pickles in the air fryer basket in an even layer (do not overcrowd), working in batches if needed. Step3: Cook until pickle chips are golden brown, about 6 minutes. Step4: Meanwhile, stir together mayonnaise, Creole mustard, lemon juice, and smoked paprika in a small bowl. Serve dipping sauce with pickles.",
        "images":"https://www.allrecipes.com/thmb/RhjwJX8SOBO8GDC1NhOcXPhAV44=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/emily-nienhaus-ab22eab56c744b0bba0e54dabf79b79e.jpg",
        "ingredients":"1/2 cup flour, 2 eggs, 1 cup panko bread crumbs, 1 (16-ounces) jar reduced-sodium dill picklechips, drained, 1/4 cup mayonnaise, 1 tablespoon Creole mustard",
        "prep":"15 mins","servings":"6","total":"21 mins","timestamp":"2024-01-14T22:40:45Z"
    },
    {
        "url":"https://www.allrecipes.com/salsa-macha-recipe-8386066",
        "title":"Salsa Macha",
        "cook":"5 mins",
        "description":"Salsa macha originated in the Mexican states of Veracruz and Oaxaca. It’s very similar in appearance to chili crisp but totally different in flavor. This salsa can be made as spicy as you like by adding more chilies de árbol or milder by adding less.",
        "directions":"Step1: Remove the stems and seeds from the chili peppers. Chop into 1/4-inch pieces. Set aside. Step2: Heat oil over medium heat until it begins to shimmer. Add sesame seeds and garlic. Cook, stirring constantly, until sesame seeds are browned and garlic has crisped up, about 5 minutes. Remove from heat. Add chili peppers and stir until combined. Let sit at room temperature until cool, about 10 minutes. Step3: Stir in vinegar, salt, and Mexican oregano. Pour mixture into a food processor and pulse several times until the salsa is combined, making sure not to over process. Stir in peanuts.",
        "images":"https://www.allrecipes.com/thmb/ozjMb9yOppioWnUth1iGEpZs5_0=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Yoly-2000-f2b74b9193484f96bfcaffec0e864fe1.jpg",
        "ingredients":"1 ancho chile peppers, 1 Guajillo chile peppers, 6 chile de árbol peppers, or to taste, 1 cup vegetable oil, 1 tablespoon sesame seeds, 4 garlic cloves, chopped, 1 teaspoon apple cider vinegar, 1/2 teaspoon salt, or to taste, 1/2 teaspoon Mexican oregano, 1/4 cup peanuts",
        "prep":"10 mins","servings":"8","total":"25 mins","timestamp":"2024-01-14T22:40:55Z"
    },
    {
        "url":"https://www.allrecipes.com/crispy-polenta-bites-with-jammy-tomato-topper-recipe-8347292",
        "title":"Crispy Polenta Bites with Jammy Tomato Topper",
        "cook":"35 mins",
        "description":"These crispy polenta bites with jammy tomato topper are a tasty vegetarian party app. With a few quick adjustments, this recipe can feed the meat lovers and vegans in your life, too.",
        "directions":"Step1: Put a rimmed baking sheet in oven. Preheat the oven to 450 degrees F (230 degrees C). Step2: Bring tomatoes, raisins, and red wine to a boil in a medium saucepan over medium-high heat. Reduce heat to low; simmer mixture, uncovered, until raisins are plump and most of liquid has evaporated, about 20 minutes. Remove from heat. Stir in honey, vinegar, thyme, and salt. Step3: Meanwhile, slice polenta into 1/4-inch-thick rounds. Gently toss polenta with oil in a large bowl. Remove baking sheet from oven. Arrange rounds in an even layer on baking sheet.  Step4: Bake polenta rounds in the preheated oven, turning halfway through, until lightly golden and crisp on both sides, about 15 minutes. Step5: To serve, top polenta rounds with goat cheese and tomato mixture. Garnish with thyme. Serve warm or at room temperature.",
        "images":"https://www.allrecipes.com/thmb/0zw4UjU3H4t18DSG19wL5qCnc6Y=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sarah-brekke-5ffb9ca235cb459aab591cce26ae57c7.jpg",
        "ingredients":"1 (28-ounce) can diced tomatoes, drained, 1/3 cup raisins, 1/4 cup dry red wine (such as Cabernet Sauvignon or Merlot), 1 teaspoon honey, 1 teaspoon balsamic vinegar, 1 teaspoon chopped fresh thyme, plus more for garnish, 1/4 teaspoon salt, 1 (16-ounce) tube refrigerated cooked polenta, 1 tablespoon olive oil, 1 (4-ounce) package goat cheese (chèvre), crumbled",
        "prep":"15 mins","servings":"24","total":"50 mins","timestamp":"2024-01-14T22:41:05Z"
    },
    {
        "url":"https://www.allrecipes.com/jalapeno-popper-pig-shots-recipe-7563404",
        "title":"Jalapeno Popper Pig Shots",
        "cook":"45 mins",
        "description":"These jalapeno popper pig shots are like edible shot glasses. The combination of salty crisp bacon, caramelized sausage, and the kick from the jalapeno is just perfect.",
        "directions":"Step1: Preheat the oven to 375 degrees F (190 degrees C) Step2: Combine cream cheese, Cheddar cheese, Cajun seasoning, and sour cream in a bowl. Seed and finely chop 1 jalapeno and add to cheese mixture. Stir until well combined. Place cheese mixture into a large ziplock bag.  Step3: Snip the corner of the bag and pipe about 2 teaspoons of cheese mixture onto each piece of sausage.  Wrap each sausage with bacon and place into mini muffin pan cups.  Slice remaining jalapenos into 24 thin slices and top each “shot” with a slice. Step4: Stir together bbq sauce, honey, and brown sugar in a small bowl.  Brush bbq mixture over pig shots and bake until the bacon gets crisp, about 45 minutes. Step5: Remove from oven and let cool before serving, 5 to 10 minutes. They will crisp slightly more after baking.",
        "images":"https://www.allrecipes.com/thmb/bTp96bLWnN7r28uyGH0YEbH47rM=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/nicole-mclaughlin-portrait-129b390897334dedad8bf1ae0fc22633.jpg",
        "ingredients":"1 lb smoked sausage, 4 oz. cream cheese, softened, 1 1/2 cup shredded sharp cheddar cheese, ½ teaspoon Cajun seasoning, 2 tablespoons sour cream, 3 jalapenos, 1lb thick cut bacon, 12 slices, cut in half , ¼ cup spicy bbq sauce, 1 tablespoon honey, 1 tablespoon brown sugar",
        "prep":"15 mins","servings":"12","total":"1 hr 5 mins","timestamp":"2024-01-14T22:41:12Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/220416/chef-johns-homemade-chicken-noodle-soup/",
        "title":"Chef John's Homemade Chicken Noodle Soup","cook":"20 mins","description":"This homemade chicken noodle soup is Chef John's soul-warming and deliciously simple recipe that uses a flavorful homemade roasted chicken stock.","directions":"Step1: Melt butter in a large soup pot over medium heat. Stir in carrot, onion, celery, thyme, and salt. Add chicken fat; cook and stir until onions turn soft and translucent, 5 to 6 minutes. Step2: Stir in roasted chicken broth and bring to a boil. Season with salt, if necessary. Step3: Stir in egg noodles; cook until tender, about 5 minutes. Step4: Add cooked chicken breast meat; simmer until heated through, about 5 minutes. Season with cayenne pepper, salt, and black pepper. Step5: Serve hot and enjoy!","images":"https://www.allrecipes.com/thmb/f51UnQQgJNYRemjNsH44pTMjD7I=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/220416-chef-johns-homemade-chicken-noodle-soup-DDMFS-4x3-8afe771a58604367a7357af555399332.jpg","ingredients":"1 tablespoon butter, 0.5 cup diced carrot, 0.5 cup diced onion, 0.5 cup diced celery, 0.25 teaspoon fresh thyme leaves, 1 pinch salt, 2 tablespoons melted chicken fat, 2 quarts roasted chicken broth (see footnote for recipe link), 4 ounces uncooked wide egg noodles, 2 cooked boneless chicken breast halves, cubed, 1 pinch cayenne pepper, salt and ground black pepper to taste","prep":"20 mins","servings":"8","total":"40 mins","timestamp":"2024-01-14T23:04:03Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/13096/cream-of-mushroom-soup-i/","title":"Cream of Mushroom Soup","cook":"30 mins","description":"Cream of mushroom soup is a favorite, and this recipe makes a classic one. Use any mushrooms you like: button, shiitake, cremini, or wild all work great.","directions":"Step1: Simmer mushrooms, broth, onion, and thyme in a large heavy saucepan until vegetables are tender, 10 to 15 minutes. Step2: Carefully transfer the hot mixture to a blender or food processor. Cover and hold lid down with a potholder; pulse until creamy but still with some chunks of vegetable. Step3: Melt butter in the same saucepan. Whisk in flour until smooth. Whisk in salt and pepper. Slowly whisk in half-and-half and mushroom mixture. Step4: Bring soup to a boil and cook, stirring constantly, until thickened. Step5: Stir in sherry. Taste and season with more salt and pepper if needed.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F94846.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"5 cups sliced fresh mushrooms, 1.5 cups chicken broth, 0.5 cup chopped onion, 0.125 teaspoon dried thyme, 3 tablespoons butter, 3 tablespoons all-purpose flour, 0.25 teaspoon salt, 0.25 teaspoon ground black pepper, 1 cup half-and-half, 1 tablespoon sherry","prep":"20 mins","servings":"6","total":"50 mins","timestamp":"2024-01-14T23:04:14Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/13113/rich-and-creamy-tomato-basil-soup/","title":"Rich and Creamy Tomato Basil Soup","cook":"35 mins","description":"Delicious tomato basil soup made with fresh tomatoes and tomato juice, blended with fresh basil leaves and thickened with heavy cream and butter.","directions":"Step1: Gather all ingredients. Step2: Place tomatoes and juice in a stockpot over medium heat; bring to a simmer. Cook until tomatoes have softened, about 30 minutes. Step3: Remove the pot from heat. Add basil leaves to the pot. Step4: Use an immersion blender to purée soup until smooth. Step5: Stir in heavy cream and butter. Cook and stir over medium heat until butter is melted, about 5 minutes. Do not boil. Season with salt and pepper. Step6: Serve hot and enjoy!","images":"https://www.allrecipes.com/thmb/zLyO0hqBX2Hxq_vRLUrJE8pPMo0=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/13113-rich-and-creamy-tomato-basil-soup-DDMFS-4x3-e7bc78ff4c6b4f999f9e178d97466e6f.jpg","ingredients":"4 tomatoes - peeled, seeded and diced, 4 cups tomato juice, 14 leaves fresh basil, 1 cup heavy whipping cream, 0.5 cup butter, salt and pepper to taste","prep":"10 mins","servings":"4","total":"45 mins","timestamp":"2024-01-14T23:04:24Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/13116/cabbage-fat-burning-soup/","title":"Cabbage Fat-Burning Soup","cook":"25 mins","description":"This weight-loss cabbage soup recipe uses tomatoes, bell peppers, carrots, onions, and chopped cabbage to make a filling, fat free, low-calorie soup.","directions":"Step1: Place celery, carrots, onions, cabbage, bell peppers, and green beans in a large soup pot. Step2: Add tomato juice, tomatoes, beef broth, and enough water to cover vegetables; add onion soup mix and stir to combine. Bring to a boil over medium heat; reduce heat to low and simmer until vegetables are tender, about 25 minutes.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F11%2F18%2F13116-Cabbage-Fat-Burning-Soup.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"10 stalks celery, chopped, 5 carrots, chopped, 3 onions, chopped, 2 green bell peppers, diced, 1 large head cabbage, chopped, 1 (15 ounce) can cut green beans, drained, 2 quarts tomato juice, 2 (16 ounce) cans whole peeled tomatoes, with liquid, 1 (14 ounce) can beef broth, cold water, to cover, 1 (1 ounce) envelope dry onion soup mix","prep":"20 mins","servings":"15","total":"45 mins","timestamp":"2024-01-14T23:04:31Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/13107/miso-soup/","title":"Miso Soup","cook":"10 mins","description":"This miso soup is easy to make in just 15 minutes with dashi stock, miso paste, silken tofu, and green onions for a deliciously savory appetizer.","directions":"Step1: Combine water and dashi granules in a medium saucepan over medium-high heat; bring to a boil. Reduce heat to medium and whisk in miso paste. Stir in tofu. Separate the layers of green onions, and add them to the soup. Simmer gently for 2 to 3 minutes before serving.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F04%2F22%2F13107-miso-soup-Melissa-Goff-1x1-1.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"4 cups water, 2 teaspoons dashi granules, 3 tablespoons miso paste, 1 (8 ounce) package silken tofu, diced, 2 green onions, sliced diagonally into 1/2 inch pieces","prep":"5 mins","servings":"4","total":"15 mins","timestamp":"2024-01-14T23:04:49Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/235589/chef-johns-creamy-mushroom-soup/","title":"Chef John's Creamy Mushroom Soup","cook":"1 hr 25 mins","description":"This mushroom soup is creamy, rich, and deliciously savory thanks to the caramelization of the mushrooms in butter that unlocks their earthy flavor.","directions":"Step1: Gather all ingredients. Step2: Melt butter in a large soup pot over medium-high heat. Sauté mushrooms and 1 pinch salt in the melted butter until mushrooms release their juices, 5 to 10 minutes. Reduce heat to medium-low and continue to cook, stirring often, until juices evaporate and mushrooms are caramelized, 15 to 25 minutes. Set aside a few attractive mushroom slices for garnish later, if desired. Step3: Add onion to the mushrooms; cook until onion is soft and translucent, about 5 minutes. Step4: Stir flour into the mushroom mixture and cook, stirring often, to remove the raw flour taste, about 2 minutes. Step5: Add thyme bundle and garlic cloves, then pour in 4 cups chicken broth and 1 cup water. Reduce heat to low and simmer for 1 hour. Remove and discard thyme bundle. Step6: Purée soup with a blender in batches until smooth and thick. Step7: Stir in cream. If too thick, add a little chicken broth or water. Season with salt and black pepper. Step8: Ladle into bowls, and garnish with reserved mushroom slices and thyme leaves.","images":"https://www.allrecipes.com/thmb/VsZtARMxhkALXYw_K7DRTNggowc=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/235589-chef-johns-creamy-mushroom-soup-DDMFS-4x3-14854a8dc51c4c4c80cc5631299a873b.jpg","ingredients":"0.25 cup unsalted butter, 2 (16 ounce) packages sliced fresh mushrooms, 1 pinch salt, 1 medium yellow onion, diced, 1.5 tablespoons all-purpose flour, 6 sprigs fresh thyme, tied in a bundle with kitchen twine, 2 cloves garlic, peeled, 4 cups chicken broth, or more to taste, 1 cup water, or more to taste, 1 cup heavy whipping cream, 1 salt and freshly ground black pepper to taste, 1 teaspoon fresh thyme leaves for garnish, or to taste","prep":"10 mins","servings":"6","total":"1 hr 35 mins","timestamp":"2024-01-14T23:04:56Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/154833/creamy-roasted-parsnip-soup/",
        "title":"Creamy Roasted Parsnip Soup","cook":"50 mins","description":"This parsnip soup is a delicious blend of roasted root vegetables, warm spices, and cream for a smooth, flavor-packed, comforting cold-weather soup.","directions":"Step1: Preheat the oven to 425 degrees F (220 degrees C). Step2: Place parsnips and carrots in a mixing bowl; sprinkle with 1 tablespoon olive oil and toss to coat. Season with salt and pepper. Spread vegetables evenly onto a baking sheet. Step3: Roast in the preheated oven until vegetables are tender and parsnips are golden brown, about 30 minutes. Step4: Heat remaining 1 tablespoon olive oil in a large saucepan over medium heat. Cook and stir onion and celery in hot oil until softened and onion is beginning to turn golden brown, about 5 minutes. Reduce heat to low; stir in butter, brown sugar, garlic, and roasted parsnips and carrots. Continue to cook and stir until vegetables are very soft and beginning to brown, about 5 to 10 minutes. Step5: Season with ginger, cardamom, allspice, nutmeg, and cayenne pepper; stir for 1 minute. Pour in chicken stock; bring to a boil over medium-high heat. Reduce heat to medium-low, partially cover, and simmer gently for 5 to 10 minutes. Step6: Working in batches, pour soup into a blender, filling the pitcher no more than halfway full. Hold down the lid of the blender with a folded kitchen towel and carefully start the blender, using a few quick pulses to get soup moving before leaving it on to purée. Pour blended soup into a clean pot. Step7: Stir in milk and cream. Return to a simmer over medium-low heat. Season with salt and pepper to serve.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Fa3e48f9c8a1a3bfeb70532e00a1d8756%2F170258093068082E4BB08-BBE4-4D8B-9ACC-A01366BA5B62.jpeg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"2 pounds parsnips, peeled and cut into 1/2 inch pieces, 3 carrots, peeled and cut into 1/2-inch pieces, 1 tablespoon olive oil, sea salt and ground black pepper to taste, 1 large onion, diced, 3 stalks celery, diced, 1 tablespoon butter, 1 tablespoon brown sugar, 3 cloves garlic, minced, 1 teaspoon ground ginger, 0.5 teaspoon ground cardamom, 0.5 teaspoon ground allspice, 0.5 teaspoon ground nutmeg, 0.25 teaspoon cayenne pepper, 4 cups chicken stock, 1 cup whole milk, 0.5 cup heavy cream","prep":"30 mins","servings":"10","total":"1 hr 20 mins","timestamp":"2024-01-14T23:05:12Z"
    },
    {
        "url":"https://www.allrecipes.com/classic-italian-pastina-soup-recipe-7971739","title":"Classic Italian Pastina Soup","cook":"1 hr 35 mins","description":"This classic Italian pastina soup has all the flavors you'd expect from homemade chicken soup.","directions":"Step1: Place chicken in a large pot and pour water over to cover.  Step2: Roughly chop 2 stalks of celery, 1 1/2 onions, and 2 carrots and add to pot with chicken. Season with 2 teaspoon salt and 1 teaspoon pepper and bring pot to a boil over high heat. Reduce the heat to medium-low and allow the chicken to simmer 1 hour, covered.  Step3: Remove chicken from the pot and allow to cool before removing and shredding the meat. Strain the stock and discard the solids. Reserve liquid and add water if necessary to measure 12 cups of liquid.  Wipe pot clean. Step4: Finely chop remaining celery, onion and carrot. Place pot over medium-high heat and add oil. Add chopped vegetables, remaining salt, pepper and garlic and cook frequently until vegetables are tender and onion is translucent (the veggies should not be browned). Add reserved stock and  chicken base and stir to combine. Bring mixture to a boil and reduce it to simmer.  Allow soup to simmer 10 minutes. Step5: Increase heat to high and bring to a boil. Add pasta and cook, stirring occasionally 15 minutes or until pasta is tender. Reduce heat to low and add chicken and season if desired. Cook 5 additional minutes.  Stir in chopped parsley and serve with grated Parmesan cheese.","images":"https://www.allrecipes.com/thmb/bTp96bLWnN7r28uyGH0YEbH47rM=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/nicole-mclaughlin-portrait-129b390897334dedad8bf1ae0fc22633.jpg","ingredients":"1          3-4 lb. whole chicken, neck and insides removed, 10-12   cups cold water, 3          stalks celery, divided, 2 medium white or yellow onions, peeled, divided, 3 large carrots, peeled, divided, 1 tablespoon kosher salt, plus more to taste, divided, 2          teaspoons pepper, divided, 2          tablespoons olive oil, 2          cloves garlic, minced, 1          tablespoon reduced sodium chicken base, such as Better than Bouillon, 1          cup pastina or other tiny pasta, such as stars, 1 tablespoon finely chopped parsley, or to taste (optional), 2 tablespoons freshly grated Parmesan Cheese, or to taste(optional)","prep":"20 mins","servings":"8","total":"1 hr 55 mins","timestamp":"2024-01-14T23:05:19Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/39544/garden-fresh-tomato-soup/","title":"Fresh Tomato Soup","cook":"30 mins","description":"This tomato soup recipe is quick and easy to make for homemade fresh tomato soup; perfect when summer tomatoes are ripe in gardens and farmers' markets.","directions":"Step1: Gather all ingredients. Step2: Combine tomatoes, chicken broth, garlic cloves, and a large slice of onion in a stockpot over medium heat. Bring to a boil, and gently simmer for about 20 minutes to blend flavors. Step3: Remove from heat and run the mixture through a food mill into a large bowl, or pan. Discard any stuff left over in the food mill. Step4: Melt butter over medium heat in the now empty stockpot. Stir in flour to make a roux by cooking, whisking constantly, until mixture turns medium brown. Step5: Gradually whisk in a bit of the tomato mixture to prevent lumps from forming, then stir in the rest. Step6: Season with sugar and salt to taste. Step7: Serve hot and enjoy!","images":"https://www.allrecipes.com/thmb/uLCRilf9wmxisY0llEOM8aYMWb4=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/39544-Garden-Fresh-Tomato-Soup-DDMFS-4x3-b8e94cf7ab8e42f4b79042fc0df55546.jpg","ingredients":"4 cups chopped fresh tomatoes, 2 cups chicken broth, 4 cloves garlic, 1 slice onion, 2 tablespoons butter, 2 tablespoons all-purpose flour, 2 teaspoons white sugar, or to taste, 1 teaspoon salt","prep":"5 mins","servings":"6","total":"35 mins","timestamp":"2024-01-14T23:05:28Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/8495600/creamy-chicken-ramen-soup-with-dill/","title":"Creamy Chicken Ramen Soup with Dill","cook":"10 mins","description":"Try this quick and easy creamy chicken ramen soup when you're not in the mood for cooking.","directions":"Step1: Bring water to a boil in a saucepan. Break up noodles and toss into boiling water. Cook until tender, about 3 minutes. Stir in chicken, sour cream, seasoning packet, and dill. Simmer until heated through. Serve garnished with green onions.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F33fb39db26a0e2a38886bda180b1d636%2F1674094823392IMG_9092.jpeg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"1.75 cups water, 1 (3 ounce) package chicken flavored ramen noodles, 1 (5 ounce) can canned chicken, drained, 2 tablespoons sour cream, 2 teaspoons dried dill weed, green onions for garnish (optional)","prep":"5 mins","servings":"1","total":"15 mins","timestamp":"2024-01-14T23:05:45Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/12997/baked-potato-soup-i/","title":"Baked Potato Soup","cook":"25 mins","description":"This creamy baked potato soup is easy to make with leftover baked potatoes and loaded with crispy bacon bits, green onions, sour cream, and Cheddar.","directions":"Step1: Place bacon in a large skillet and cook over medium-high heat, turning occasionally, until evenly browned, about 8 to 10 minutes. Drain bacon slices on paper towels; crumble and set aside. Step2: Meanwhile, melt butter in a stockpot or Dutch oven over medium heat. Gradually add flour, whisking until well-combined. Slowly pour in milk, whisking constantly until smooth and thickened. Step3: Add potatoes and onions and bring to a boil, stirring frequently. Reduce heat and simmer for 10 minutes. Step4: Stir in crumbled bacon, Cheddar cheese, sour cream, salt, and pepper. Continue cooking and stirring until cheese is melted.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F02%2F5867379.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"12 slices bacon, 0.66666668653488 cup butter or margarine, 0.66666668653488 cup all-purpose flour, 7 cups milk, 4 large baked potatoes, peeled and cubed, 4 green onions, chopped, 1.25 cups shredded Cheddar cheese, 1 cup sour cream, 1 teaspoon salt, 1 teaspoon ground black pepper","prep":"15 mins","servings":"6","total":"40 mins","timestamp":"2024-01-14T23:05:52Z"
    },
    {
        "url":"https://www.allrecipes.com/roasted-cherry-tomato-soup-recipe-8350397","title":"Roasted Cherry Tomato Soup","cook":"23 mins","description":"The roasting step for this roasted cherry tomato soup may sound time-consuming, but it is not. This easy, delicious soup will still be on the table in 30 minutes, and most of that time is hands-off.","directions":"Step1: Preheat the oven to 425 degrees F (220 degrees C). Line a sheet pan with foil. Step2: Spread vegetables out on the prepared pan. Drizzle with olive oil; toss to coat. Sprinkle salt and Italian seasoning evenly over vegetables. Step3: Roast vegetables in the preheated oven for 20 minutes. Step4: Fill a high powered blender (such as a Vitamix) halfway with roasted vegetables and any accumulated juices. Cover and hold lid down with a potholder; pulse a few times before leaving on to blend, about 45 seconds. Pour into a saucepan. Repeat with remaining roasted vegetables. Step5: Pour water into the soup; add cream. Stir to combine and cook until heated through, about 3 minutes. Taste and adjust seasonings. Step6: Ladle into soup bowls. Garnish with basil and thyme, and sprinkle with crushed red pepper flakes if desired. Serve immediately.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F57dcac78f94418cfa84071b29d1071dd%2F1698640469903Roasted-Cherry-Tomato-Soup.JPG&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"20 oz cherry tomatoes, 3 cloves garlic, peeled, 1 carrot, peeled and sliced into 1/4- inch thick sticks, 1/2 onion, peeled, 1 red bell pepper, seeded and cut into strips, 2 tablespoons olive oil, 1/2 teaspoon salt, 1 teaspoon Italian seasoning, 1/4 cup water, 1/2 cup cream, Basil leaves for garnish, Thyme sprigs for garnish, Crushed red pepper flakes (optional)","prep":"7 mins","servings":"4","total":"30 mins","timestamp":"2024-01-14T23:06:21Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/218804/turkey-carcass-soup/","title":"Turkey Carcass Soup","cook":"2 hrs","description":"This turkey carcass soup uses every last bit of your roasted turkey. It's loaded with vegetables and barley, making it perfect for a post-holiday meal.","directions":"Step1: Place turkey carcass into a large soup pot; pour in water and bring to a boil over medium heat. Reduce heat to a simmer, and cook until the remaining meat falls off the bones, about 1 hour. Step2: Remove turkey carcass from the pot. Remove and chop any remaining turkey meat. Discard carcass. Step3: Strain broth through a fine mesh strainer into a clean soup pot. Add chopped turkey to the strained broth and bring to a boil. Step4: Reduce heat and stir in tomatoes, potatoes, carrots, onion, celery, cabbage, barley, Worcestershire sauce, salt, parsley, basil, bay leaf, pepper, paprika, poultry seasoning, and thyme. Simmer until vegetables are tender, about 1 more hour. Step5: Remove bay leaf before serving.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F733f4212449d00e2e35dcf6c229758c5%2F1701024311774IMG_20231126_133113460.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"1 turkey carcass, 4 quarts water, 1 (28 ounce) can whole peeled tomatoes, chopped, 6 small potatoes, diced, 4 large carrots, diced, 1 large onion, diced, 2 stalks celery, diced, 1.5 cups shredded cabbage, 0.5 cup uncooked barley, 1 tablespoon Worcestershire sauce, 1.5 teaspoons salt, 1 teaspoon dried parsley, 1 teaspoon dried basil, 1 large bay leaf, 0.25 teaspoon freshly cracked black pepper, 0.25 teaspoon ground paprika, 0.25 teaspoon poultry seasoning, 1 pinch dried thyme","prep":"45 mins","servings":"12","total":"2 hrs 45 mins","timestamp":"2024-01-14T23:06:28Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/13313/best-cream-of-broccoli-soup/","title":"Best Cream Of Broccoli Soup","cook":"25 mins","description":"This quick homemade cream of broccoli soup is the best, thanks to flavorful additions like celery and onions and a thick, but creamy, texture.","directions":"Step1: Gather all ingredients. Step2: Melt 2 tablespoons butter in a medium stock pot over medium heat. Saute onion and celery until tender. Step3: Add broccoli and broth, cover, and simmer for 10 minutes. Step4: Pour the soup into a blender, filling the pitcher no more than halfway full. Hold down the lid of the blender with a folded kitchen towel, and carefully start the blender, using a few quick pulses to get the soup moving before leaving it on to puree. Puree in batches until smooth and pour into a clean pot. Alternately, you can use an immersion blender and puree the soup right in the cooking pot. Step5: Melt 3 tablespoons butter in a small saucepan over medium to medium-low heat; stir in flour and add milk. Stir until thick and bubbly, and add to soup. Season with pepper and serve. Step6: Serve hot and enjoy!","images":"https://www.allrecipes.com/thmb/6YMt8BStDljJkjvYrx-0TfqDa44=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/13313-best-cream-of-broccoli-soup-AllrecipesMagazine-4x3-495e6329745545a28c2a9b4e6ee3fab6.jpg","ingredients":"5 tablespoons butter, divided, 1 onion, chopped, 1 stalk celery, chopped, 3 cups chicken broth, 8 cups broccoli florets, 3 tablespoons all-purpose flour, 2 cups milk, ground black pepper to taste","prep":"10 mins","servings":"6","total":"35 mins","timestamp":"2024-01-14T23:06:39Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/8532956/dump-and-go-instant-pot-tortilla-soup/","title":"Dump-and-Go Instant Pot Tortilla Soup","cook":"20 mins","description":"This dump and go tortilla soup is ready in 30 minutes in the Instant Pot.. Perfect for busy weeknights. Serve with your favorite toppings.","directions":"Step1: Pour chicken broth, corn, black beans, chunk chicken, tomatoes with green chilies (with their juices), chili powder, seasoning salt, and garlic powder together in a multi-functional pressure cooker (such as Instant Pot®); stir to combine. Step2: Close and lock the lid. Select high pressure according to manufacturer's instructions; set timer for 5 minutes. Allow 10 to 15 minutes for pressure to build. Step3: Release pressure carefully using the quick-release method according to manufacturer's instructions, about 5 minutes. Unlock and carefully open the lid. Step4: Ladle the soup into serving bowls and top with tortilla strips, and shredded cheese, to taste.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F8addbb2788164e45fa151b14b6fd2cbe%2F167608198396394E84211-1077-446D-BC12-ADE1CA01ACFA.jpeg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"2 (14.5 ounce) cans chicken broth, 1 (15 ounce) can whole kernel corn, drained, 1 (15 ounce) can black beans, rinsed and drained, 2 (5 ounce) cans chicken breast chunks, drained, 1 (10 ounce) can diced tomatoes with green chile peppers (such as RO*TEL®), 0.5 teaspoon chili powder, 0.5 teaspoon seasoning salt, 0.5 teaspoon garlic powder, 1 (3.5 ounce) package tortilla strips, for garnish, 2 tablespoons shredded Mexican cheese blend, or to taste","prep":"5 mins","servings":"4","total":"30 mins","timestamp":"2024-01-14T23:06:51Z"
    },
    {
        "url":"https://www.allrecipes.com/5-ingredient-chicken-taco-soup-recipe-7966125","title":"5 Ingredient Chicken Taco Soup","cook":"10 mins","description":"Using only 5 ingredients this chicken taco soup is the perfect meal on a busy day. A premade rotisserie chicken, chicken broth, black beans, salsa, and frozen pepper and onion medley are all you need. Serve with tortilla chips to add some crunch.","directions":"Step1: Combine 1 can of black beans and ½ jar of salsa in a blender; blend until smooth. Step2: Combine black bean mixture, remaining can of black beans, remaining salsa. shredded chicken, pepper and onion medley, and chicken broth in a large pot and set over medium-high heat. Step3: Bring to a soft simmer and cook until warm, about 10 minutes.","images":"https://www.allrecipes.com/thmb/6mj8M4OLhDSSs_E_GcHIX05C71E=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/MauraYarusRawlette-f6e95b344ed24dcb806916ab5c40b514.jpg","ingredients":"4 cups cooked rotisserie chicken - skinned, boned, and meat shredded, 1 (32 fluid ounce) container low sodium chicken broth, 2 cans (15.5 ounce) reduced-sodium black beans, rinsed and drained, 1 jar 1lb thick and chunky salsa, 1 14.4 oz bag frozen tri-colored pepper and onion medley","prep":"15 mins","servings":"8","total":"25 mins","timestamp":"2024-01-14T23:07:14Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/12816/cioppino/","title":"Cioppino","cook":"40 mins","description":"This cioppino is a classic seafood stew with fish, shrimp, scallops, clams, mussels, and crab in a warm broth seasoned with basil, thyme, and oregano.","directions":"Step1: Melt butter in a large stockpot over medium-low heat. Add onions, parsley, and garlic. Cook and stir until onions are softened, 3 to 4 minutes. Step2: Add tomatoes to the pot (break them into chunks as you add them). Stir in chicken broth, wine, water, bay leaves, basil, thyme, and oregano. Cover and simmer for 30 minutes. Step3: Stir in cod, shrimp, scallops, clams, mussels, and crabmeat. Bring to boil; lower heat, cover, and simmer until clams open up, 5 to 7 minutes. Ladle soup into bowls and serve. Step4: Enjoy!","images":"https://www.allrecipes.com/thmb/iEIm6nfyrMWBNw80up6__8w2xeM=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/12816-cioppino-DDMFS-4x3-39531ec5acc749b9a797de26fa0047d5.jpg","ingredients":"0.75 cup butter, 2 onions, chopped, 1 bunch fresh parsley, chopped, 2 cloves garlic, minced, 2 (14.5 ounce) cans stewed tomatoes, 2 (14.5 ounce) cans chicken broth, 1.5 cups white wine, 1 cup water, 2 bay leaves, 1 tablespoon dried basil, 0.5 teaspoon dried thyme, 0.5 teaspoon dried oregano, 1.5 pounds cod fillets, cubed, 1.5 pounds large shrimp - peeled and deveined, 1.5 pounds bay scallops, 18 small clams, 18 mussels, cleaned and debearded, 1.5 cups crabmeat","prep":"10 mins","servings":"13","total":"50 mins","timestamp":"2024-01-14T23:07:22Z"
    },
    {
        "url":"https://www.allrecipes.com/real-lasagna-soup-recipe-7967799",
        "title":"Real Lasagna Soup","cook":"1 hr 25 mins",
        "description":"This incredible lasagna soup tastes exactly like a really good lasagna, but is a very rich, very meaty tomato soup.",
        "directions":"Step1: Fill a large pot with lightly salted water and bring to a rolling boil. Stir in lasagna noodles and return to a boil. Cook pasta uncovered, stirring occasionally, until just flexible, 4 to 5 minutes. Transfer noodles into cold water until cooled; drain very well. Step2: Preheat the oven to 475 degrees F (245 degrees C). Line a baking sheet with parchment paper, and grease parchment with 1 tablespoon olive oil. Step3: Cut noodles in half lengthwise. Arrange noodles in evenly overlapping rows on the prepared baking sheet. Brush with melted butter, and use fingers to rub some butter between the noodles. Step4: Bake noodles in the preheated oven until they are golden, blistered, and are beginning to brown with crispy outside edges. Let cool; cut into bite-sized pieces. Step5: Add 2 tablespoons olive oil to a soup pot, and place over high heat. Add beef and sausage. Use a spatula to break up the meat into small pieces; cook without stirring until liquid evaporates and meat begins to sizzle in its own fat, then continue to cook and stir until meat begins to brown, about 7 minutes. Step6: Add onions, garlic, tomato paste, red pepper flakes, dried oregano, black pepper, and kosher salt. Cook and stir until onions begin to turn translucent, 3 to 4 minutes. Step7: Stir in chicken broth, tomato sauce, and water. Bring to a simmer, reduce heat to medium low, and simmer for 45 minutes. Step8: In a bowl, stir ricotta cheese, mozzarella cheese, and Parmesan cheese together; set aside. Step9: Increase the heat under soup to medium high; stir in noodle pieces. Cook, stirring, until pasta is tender, about 10 minutes. Reduce heat to low, and stir in the 2 tablespoons Italian parsley. Step10: Serve in bowls with a scoop of cheese mixture, and sprinkle with freshly torn basil and Italian parsley if desired.",
        "images":"https://www.allrecipes.com/thmb/tZc0OkIPBacSmeW3KiniykfIY84=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7967799_Real-Lasagna-Soup_Chef-John_4x3-c7d7aac67f114a4a801e0363b99437bc.jpg","ingredients":"2 tablespoons olive oil, 1 pound lean ground beef, 6 ounces bulk Italian sausage or 1 Italian sausage link, casing removed, 1 cup diced yellow onion, 3 cloves garlic, minced, 2 tablespoons tomato paste, 1/4 teaspoon crushed red pepper flakes (optional), 1/4 teaspoon dried oregano, 1/2 teaspoon freshly ground black pepper, 1 1/2 teaspoons kosher salt, or to taste , 1 (24 ounce) jar prepared marinara sauce, or 3 cups homemade marinara, 4 cups chicken broth, 2 1/2 cups water","prep":"20 mins","servings":"6","total":"1 hr 45 mins","timestamp":"2024-01-14T23:07:29Z"
    },
    {
        "url":"https://www.allrecipes.com/chef-john-s-chicken-tortilla-soup-recipe-8378788",
        "title":"Chef John’s Chicken Tortilla Soup","cook":"5 hrs 45 mins",
        "description":"This chicken tortilla soup is one of the greatest chicken soup experiences known to man. The savory, aromatic, slightly spicy, and beautifully rich tomato chicken broth is made from scratch, and the soup is topped with all your favorite garnishes.",
        "directions":"Step1: Combine chicken, 1 onion, stems from the cilantro bunch, bay leaves, oregano, peppercorns, dried chili pods, and 3 quarts of water in a large soup pot set over medium-high heat. Bring to simmer, lower heat to medium-low, and simmer for 1 hour. Step2: Meanwhile, make the tortilla strips: Preheat the oven to 350 degrees F (180 degrees C). Line a baking sheet with a silicone mat or parchment paper. Step3: Cut tortillas in half, and then cut crosswise into 1/4-inch strips. Transfer tortilla strips to the prepared baking sheet and drizzle with oil. Add salt and toss well to coat, then spread strips out as evenly as possible. Step4: Bake in the preheated oven until golden brown and crispy, tossing once or twice during the cooking time, about 30 minutes. Set aside. Step5: Carefully remove chicken to a bowl. Reduce heat on broth to low. Step6: Let chicken rest until cool enough to pull off the meat. Shred chicken and refrigerate until needed. Step7: Add bones, skin, and all the scraps back to the pot of broth, and simmer on low heat for about 4 hours total. If broth reduces too much, just add a splash of water. Step8: Meanwhile, after about 2 hours, make the charred vegetable salsa: Preheat on the oven’s broiler for high heat and set a rack about 8 inches below the heating element. Line a baking sheet with foil and oil lightly; place remaining 2 onions, tomatoes, sweet red pepper, and jalapeno pepper on the prepared baking sheet. Step9: Broil vegetables until charred, 7 to 10 minutes. Add charred vegetables to the jar of a blender with garlic cloves, chipotle pepper, and 1 cup water, and blend until smooth. Step10: Pour pureed salsa into the pot, and raise heat to medium-low. Simmer broth for another 2 hours, stirring occasionally. Pass soup through a fine mesh strainer into a separate pot, squeezing the chicken to get all those nice juices; discard bones and skin in strainer. Season soup to taste with salt. Step11: Add cumin, shredded chicken, and juice from 1 lime. Simmer 15 to 30 minutes, stirring occasionally. Taste for seasoning, and serve with crispy tortilla strips. Garnish with sour cream, avocado, chopped cilantro, grated or crumbled Mexican cheese, additional lime juice, and a sprinkle of cayenne, if desired.",
        "images":"https://www.allrecipes.com/thmb/yVnkZXJYBK9vatT-dBg8GQm2N2c=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8378788_Chef-Johns-Tortilla-Soup_Chef-John_4x3-3742e7751e4f4a1abb00d309f5796781.jpg","ingredients":"1 whole chicken (4.5 pounds), 3 white onions, halved, divided, 1 bunch cilantro, rinsed well, 2 bay leaves, 1/2 teaspoon black peppercorns, 1 teaspoon Mexican oregano, 2 dried chili pepper pods, seeded, optional, 3 quarts water, 3 large tomatoes, 1 sweet red pepper, seeded, halved, 1 large or 2 small jalapeno peppers, seeded, halved, 6 peeled garlic cloves, 1 canned whole chipotle pepper in adobo sauce, 1 teaspoon ground cumin","prep":"30 mins","servings":"6","total":"6 hrs 15 mins","timestamp":"2024-01-14T23:07:37Z"
    },
    {
        "url":"https://www.allrecipes.com/southern-shrimp-ramen-recipe-7814275","title":"Southern Shrimp Ramen","cook":"25 mins","description":"This Southern shrimp ramen, with ginger, lemongrass, and collard greens, adds an unexpected southern twist to traditional ramen.","directions":"Step1: Heat oil in a Dutch oven over medium heat; add onions, carrots, ginger, lemongrass, and garlic, and sauté for 3 to 5 minutes. Stir in chopped collard greens and sauté for 3 to 5 minutes. Step2: Add vegetable broth, soy sauce and fish sauce. Bring to a simmer over medium heat, and cook for 10 to 12 minutes. Step3: Add ramen noodles, and cook for 3 minutes. Remove from heat, add shrimp and mushrooms, and cover. Allow the heat from the broth to cook shrimp until pink and opaque, 5 to 7 minutes. Season with salt and pepper.","images":"https://www.allrecipes.com/thmb/ahetqLeHl3YWSfSpYCV9gUjxt_8=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/CookingwithSheliaSheliaJohnson-911cfec63f3b433eb6a07f95f88edd77.jpeg","ingredients":"2 tablespoons grapeseed oil, 1/2 yellow onion, chopped, 1 carrot, cut into matchsticks, 1 tablespoon chopped fresh ginger, 1 tablespoon chopped fresh lemongrass or lemongrass powder, 1 tablespoon chopped fresh garlic, 4 to 6 fresh collard green leaves, chopped, 6 cups vegetable broth, 1/3 cup soy sauce, 1/3 cup fish sauce, 2 packages ramen, seasoning packet discarded, 1 pound raw shrimp, peeled and deveined, 1/2 cup sliced mushrooms, salt and freshly ground black pepper to taste","prep":"15 mins","servings":"4","total":"40 mins","timestamp":"2024-01-14T23:07:44Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/17846/incredibly-easy-chicken-and-noodles/","title":"Incredibly Easy Chicken and Noodles","cook":"20 mins","description":"My aunt's chicken and noodles soup recipe is wonderfully rich thanks to two types of canned condensed soup. It's so simple and easy to make.","directions":"Step1: Combine chicken broth, both condensed soups, and diced chicken in a large pot. Season with onion powder, seasoning salt, and garlic powder. Step2: Bring to a boil over high heat and stir in noodles. Reduce heat to low and simmer until desired consistency is reached, 20 to 30 minutes.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F05%2F19%2F5993154-incredibly-easy-chicken-and-noodles-Becky-Webster-1x1-1.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"3 (14.5 ounce) cans chicken broth, 1 (26 ounce) can condensed cream of chicken soup, 1 (10.75 ounce) can condensed cream of mushroom soup, 2 cups diced, cooked chicken breast meat, 2 teaspoons onion powder, 1 teaspoon seasoning salt, 0.5 teaspoon garlic powder, 2 (9 ounce) packages frozen egg noodles","prep":"10 mins","servings":"6","total":"30 mins","timestamp":"2024-01-14T23:07:57Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/16678/slow-cooker-taco-soup/","title":"Slow Cooker Taco Soup","cook":"8 hrs","description":"This crowd-pleasing taco soup recipe is packed with all the flavors you'd expect in a Tex-Mex chili, plus it's super easy to make in a slow cooker for a no fuss meal.","directions":"Step1: Gather all ingredients. Step2: In a medium skillet, cook the ground beef until browned over medium heat. Drain, and set aside. Step3: Place the ground beef, onion, chili beans, kidney beans, corn, tomato sauce, water, diced tomatoes, green chile peppers and taco seasoning mix in a slow cooker. Step4: Mix to blend, and cook on Low setting for 8 hours.","images":"https://www.allrecipes.com/thmb/EkqvGSajA3ytkpQFKMSv7ddDpQ4=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/16678-slow-cooker-taco-soup-ddmfs-beauty-3x4-4b64d4cf431c448bb86d440086e42e5a.jpg","ingredients":"1 pound ground beef, 1 onion, chopped, 1 (16 ounce) can chili beans, with liquid, 1 (15 ounce) can kidney beans with liquid, 1 (15 ounce) can whole kernel corn, with liquid, 1 (8 ounce) can tomato sauce, 2 cups water, 2 (14.5 ounce) cans peeled and diced tomatoes, 1 (4 ounce) can diced green chile peppers, 1 (1.25 ounce) package taco seasoning mix","prep":"10 mins","servings":"8","total":"8 hrs 10 mins","timestamp":"2024-01-14T23:08:03Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/26460/quick-and-easy-chicken-noodle-soup/","title":"Quick and Easy Chicken Noodle Soup","cook":"30 mins","description":"This easy chicken noodle soup recipe made with veggies and leftover chicken is warm, comforting, and ready to ladle into bowls in just over 30 minutes.","directions":"Step1: Melt butter in a large pot over medium heat. Add onion and celery and cook until just tender, about 5 minutes. Step2: Add chicken broth, vegetable broth, chicken, egg noodles, carrots, basil, oregano, salt, and pepper. Stir to combine and bring to a boil. Step3: Reduce heat and simmer for 20 minutes.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F05%2F16%2F26460-quick-and-easy-chicken-noodle-soup-allrecipes-1x1-1.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"1 tablespoon butter, 0.5 cup chopped onion, 0.5 cup chopped celery, 4 (14.5 ounce) cans chicken broth, 1 (14.5 ounce) can vegetable broth, 0.5 pound chopped cooked chicken breast, 1.5 cups egg noodles, 1 cup sliced carrots, 0.5 teaspoon dried basil, 0.5 teaspoon dried oregano, salt and ground black pepper to taste","prep":"10 mins","servings":"6","total":"40 mins","timestamp":"2024-01-14T23:08:17Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/13218/absolutely-ultimate-potato-soup/","title":"Absolutely Ultimate Potato Soup","cook":"30 mins","description":"This easy old-fashioned potato soup with bacon and cream lives up to its title as the ultimate potato soup.","directions":"Step1: Gather all ingredients. Step2: Place bacon in a Dutch oven and cook over medium-high heat, turning occasionally, until evenly browned, 5 to 10 minutes. Drain bacon pieces on paper towels. Drain off all but 1/4 cup of the bacon grease. Step3: Cook celery and onion in the reserved bacon drippings until onion is soft and translucent, about 5 minutes. Stir in garlic, and continue cooking for 1 to 2 minutes. Step4: Add cubed potatoes, and toss to coat. Sauté for 3 to 4 minutes. Return bacon to the pan, and add enough chicken stock to just cover the potatoes. Cover, and simmer until potatoes are tender, 15 to 20 minutes. Step5: Meanwhile, melt butter in a separate skillet over medium heat. Whisk in flour. Cook, stirring constantly, 1 to 2 minutes. Whisk in heavy cream, tarragon, and cilantro. Step6: Bring cream mixture to a boil, and cook, stirring constantly, until thickened, about 5 minutes. Add cream mixture to the potato mixture; stir to combine. Step7: Transfer about 1/2 of the soup to a blender and purée. Return to the Dutch oven. Adjust seasonings to taste. Step8: Serve hot and enjoy!","images":"https://www.allrecipes.com/thmb/_97cNOEKPnooMBWFlfqj-qDKW_E=/75x75/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/about_us_2-a0bff420cbd04abc9bfc18dba2a21f8f.jpeg","ingredients":"1 pound bacon, chopped, 2 stalks celery, diced, 1 onion, chopped, 3 cloves garlic, minced, 8 potatoes, peeled and cubed, 4 cups chicken stock, or enough to cover potatoes, 3 tablespoons butter, 0.25 cup all-purpose flour, 1 cup heavy cream, 1 teaspoon dried tarragon, 3 teaspoons chopped fresh cilantro, salt and freshly ground black pepper to taste","prep":"15 mins","servings":"8","total":"45 mins","timestamp":"2024-01-14T23:08:25Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/25473/the-perfect-basic-burger/","title":"The Perfect Basic Burger","cook":"15 mins","description":"These burger patties are simply seasoned and ready to grill in minutes. Enjoy on ciabatta, Kaiser, or potato rolls topped with your favorite condiments.","directions":"Step1: Preheat an outdoor grill for high heat and lightly oil grate. Step2: Whisk together egg, salt, and pepper in a medium bowl. Step3: Add ground beef and bread crumbs and mix with your hands or a fork until well blended. Step4: Form into four 3/4-inch-thick patties. Step5: Place patties on the preheated grill. Cover and cook 6 to 8 minutes per side, or to desired doneness. An instant-read thermometer inserted into the center should read at least 160 degrees F (70 degrees C). Step6: Serve hot and enjoy!","images":"https://www.allrecipes.com/thmb/cJokITJ9_AEjIDpK2YGMM18Ai7E=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg","ingredients":"1 large egg, 0.5 teaspoon salt, 0.5 teaspoon ground black pepper, 1 pound ground beef, 0.5 cup fine dry bread crumbs","prep":"5 mins","servings":"4","total":"20 mins","timestamp":"2024-01-14T23:19:59Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/260193/instant-pot-salsa-chicken/","title":"Instant Pot Salsa Chicken","cook":"25 mins","description":"This salsa chicken Instant Pot recipe uses frozen chicken breasts rubbed with taco seasoning, then cooked in salsa and broth for an easy Tex-Mex meal.","directions":"Step1: Place chicken breasts in a multi-functional cooker (such as Instant Pot). Sprinkle all sides with taco seasoning. Pour salsa and chicken broth on top. Step2: Close and lock the lid. Select Poultry setting; set the timer for 15 minutes. Allow 10 to 15 minutes for pressure to build. Step3: Release pressure using the natural-release method according to manufacturer's instructions, about 20 minutes. Unlock and remove the lid. Step4: Shred chicken and serve as desired.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F06%2F19%2F4604057-instant-pot-salsa-chicken-Buckwheat-Queen-1x1-1.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"1 pound frozen skinless, boneless chicken breast halves, 1 (1 ounce) packet taco seasoning mix, 0.5 cup salsa, 0.5 cup low-sodium chicken broth","prep":"5 mins","servings":"2","total":"50 mins","timestamp":"2024-01-14T23:20:06Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/246721/mississippi-roast-slow-cooker-pepperoncini-pot-roast/","title":"Mississippi Roast (Slow Cooker Pepperoncini Pot Roast)","cook":"8 hrs","description":"Mississippi pepperoncini roast — cooked with ranch and au jus mix along with pepperoncini peppers, of course, is an easy, zesty slow cooker recipe.","directions":"Step1: Place roast in a slow cooker. Form a pocket in the top of the roast and place butter, pepperoncini peppers, ranch dressing mix, and au jus mix in the pocket. Step2: Cook on Low for 8 hours.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F07%2F28%2FMississippi-Roast-Slow-Cooker-Pepperoncini-Pot-Roast-by-Buckwheat-Queen.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"1 (4 pound) beef chuck roast, 0.25 cup butter, 5 pepperoncini peppers, 1 (1 ounce) packet ranch dressing mix, 1 (1 ounce) packet dry au jus mix","prep":"10 mins","servings":"6","total":"8 hrs 10 mins","timestamp":"2024-01-14T23:20:22Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/255305/simple-chicken-mayo-with-parmesan-and-bread-crumbs/","title":"Simple Chicken Mayo with Parmesan and Bread Crumbs","cook":"20 mins","description":"This chicken breast recipe with mayonnaise, Parmesan cheese, bread crumbs, and herbs is incredibly juicy and delicious, plus quick and easy to make!","directions":"Step1: Preheat the oven to 425 degrees F (220 degrees C). Place chicken breasts in a baking pan. Step2: Mix Parmesan cheese and mayonnaise together in a bowl until well combined; spread evenly over chicken breasts. Coat with bread crumbs and sprinkle with herbes de Provence. Step3: Bake in the preheated oven until chicken breasts are no longer pink in the center and the juices run clear, 20 to 25 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F06%2F15%2F3969819-simple-chicken-mayo-with-parmesan-and-bread-crumbs-Marianne-4x3-1.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"2 skinless, boneless chicken breasts, 2.5 tablespoons grated Parmesan cheese, 2 tablespoons mayonnaise, or more to taste, 2 tablespoons bread crumbs, or more to taste, 1.5 teaspoons herbes de Provence","prep":"10 mins","servings":"2","total":"30 mins","timestamp":"2024-01-14T23:20:30Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/277019/baked-pork-chops-with-cream-of-mushroom-soup/","title":"Baked Pork Chops with Cream of Mushroom Soup","cook":"1 hr","description":"These baked pork chops with cream of mushroom soup are made in the oven with just 5 ingredients for an easy weeknight meal the whole family will love.","directions":"Step1: Gather all ingredients. Step2: Preheat the oven to 325 degrees F (165 degrees C). Step3: Place onion slices on the bottom of a glass baking dish. Lay pork chops over onions. Cover chops evenly with condensed soup. Step4: Add water and bouillon, breaking up the bouillon cubes to spread flavor. Cover the baking dish with aluminum foil. Step5: Bake pork chops in the preheated oven, stirring gravy once or twice, until no longer pink in the centers, about 1 hour. An instant-read thermometer inserted into the center of a chop should read at least 145 degrees F (63 degrees C).","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F9409441.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"0.5 yellow onion, sliced, 4 pork chops, 26 ounces condensed cream of mushroom soup, 0.25 cup water, 2 cubes beef bouillon","prep":"10 mins","servings":"4","total":"1 hr 10 mins","timestamp":"2024-01-14T23:20:38Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/240522/easy-rib-eye-roast/","title":"Easy Rib Eye Roast","cook":"1 hr 30 mins","description":"Rib-eye roast on the bone is always a crowd-pleaser. This easy five-ingredient recipe is a snap to prepare and carves up tender, juicy, and delicious.","directions":"Step1: Preheat the oven to 500 degrees F (260 degrees C). Step2: Beat butter and garlic together in a bowl. Step3: Poke several holes in rib eye with a sharp knife. Rub butter mixture all over meat and season with salt and pepper. Place rib eye fat-side up in a roasting pan. Step4: Roast in the preheated oven for 20 minutes. Step5: Reduce heat to 325 degrees F (165 degrees C) and continue cooking until rib eye is reddish-pink and juicy in the center, 1 1/2 to 2 hours. An instant-read thermometer inserted into the center will read 145 degrees F (63 degrees C) for medium.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7801460.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"1 cup softened butter, 6 cloves garlic, minced, 1 (4 pound) bone-in rib-eye beef roast, sea salt and cracked black pepper to taste","prep":"10 mins","servings":"8","total":"1 hr 40 mins","timestamp":"2024-01-14T23:20:53Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/235153/easy-baked-chicken-thighs/","title":"Easy Baked Chicken Thighs","cook":"30 mins","description":"These easy baked chicken thighs, seasoned with onion and garlic, take just 30 minutes to bake in the oven for a quick and delicious weeknight meal.","directions":"Step1: Preheat the oven to 375 degrees F (190 degrees C). Step2: Place chicken thighs in a baking dish; season both sides with garlic powder and onion flakes. Step3: Bake in the preheated oven until no longer pink at the bone and juices run clear, about 30 minutes. An instant-read thermometer inserted into thickest part of thigh, near the bone, should read 165 degrees F (74 degrees C).","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F05%2F18%2F4348465-easy-baked-chicken-thighs-Meoshia_P-1x1-1.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"4 chicken thighs, 4 teaspoons garlic powder, 4 teaspoons onion flakes","prep":"5 mins","servings":"4","total":"35 mins","timestamp":"2024-01-14T23:21:14Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/221071/simply-roasted-artichokes/","title":"Simply Roasted Artichokes","cook":"1 hr 20 mins","description":"Learn how to cook artichokes in the oven with this simple and delicious recipe from Chef John that emphasizes the natural flavor of the artichoke.","directions":"Step1: Preheat the oven to 425 degrees F (220 degrees C). Step2: Place artichokes stem-side down in a bowl and drizzle with lemon juice. Step3: Slightly separate the artichoke leaves with your hands. Insert a knife blade into the center of each artichoke to create a garlic clove-size space. Step4: Drizzle each artichoke with olive oil and press 1 clove of garlic into the center of each artichoke; season with salt. Step5: Tightly wrap each artichoke twice with heavy-duty aluminum foil; place in a baking dish. Step6: Bake in the preheated oven until sizzling, about 1 hour 20 minutes Step7: Serve hot and enjoy!","images":"https://www.allrecipes.com/thmb/g37b3vvRzBO3RE8UzghvMOK10_A=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/221071-simply-roasted-artichokes-DDMFS-4x3-8f5d534a63f34fa591e4c7de61934ed4.jpg","ingredients":"4 large whole artichokes, top 1 inch and stems removed, 0.25 cup fresh lemon juice, 0.25 cup olive oil, 4 cloves garlic, cloves peeled and crushed, kosher salt","prep":"5 mins","servings":"4","total":"1 hr 25 mins","timestamp":"2024-01-14T23:21:23Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/272660/baked-bbq-chicken-tenders/","title":"Baked BBQ Chicken Tenders","cook":"30 mins","description":"Baked BBQ tenders are simple to make with chicken tenders coated in barbecue and caramel sauce with Asian-flavored seasoning for a quick weekday meal.","directions":"Step1: Gather all ingredients. Preheat the oven to 375 degrees F (190 degrees C). Spray an 8x8-inch casserole dish with cooking spray. Step2: Stir together barbeque sauce, barbeque seasoning, and caramel sauce in a shallow dish until combined. Reserve 2 tablespoons mixture for basting. Step3: Dip each chicken tender into barbeque sauce mixture; coat thoroughly. Place in the prepared casserole dish. Step4: Bake in the preheated oven until chicken is no longer pink in the center and the juices run clear, about 25 minutes. Baste with reserved sauce and bake 5 minutes more. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F88be67051ed1390ec49b516dda7dea6e%2F1666844744512272660-baked-bbq-chicken-tenders-humblepieliving-002.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"cooking spray, 0.33333334326744 cup barbeque sauce (such as Sweet Baby Ray's® Hickory & Brown Sugar), 1.5 tablespoons Asian-flavored barbeque seasoning (such as Savory Spice® Asian Delight BBQ Rub), 1 tablespoon caramel sauce, 1 pound chicken tenders","prep":"5 mins","servings":"4","total":"35 mins","timestamp":"2024-01-14T23:21:39Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/14746/mushroom-pork-chops/","title":"Mushroom Pork Chops","cook":"30 mins","description":"Seasoned pork chops with cream of mushroom soup, chopped onions, and fresh mushrooms. A family-favorite recipe that's delicious and easy to make.","directions":"Step1: Season pork chops with salt, pepper, and garlic salt. Step2: Brown chops over medium-high heat in a large nonstick skillet. Add mushrooms and onion and sauté for one minute. Step3: Pour soup over chops. Cover, reduce the heat to medium-low, and simmer until chops are cooked through, 20 to 30 minutes.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F02%2F714402.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"4 pork chops, salt and ground black pepper to taste, 1 pinch garlic salt, or to taste, 0.5 pound fresh mushrooms, sliced, 1 onion, chopped, 1 (10.75 ounce) can condensed cream of mushroom soup","prep":"10 mins","servings":"4","total":"40 mins","timestamp":"2024-01-14T23:21:54Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/229032/parchment-baked-salmon/","title":"Parchment Baked Salmon","cook":"25 mins","description":"Cook salmon in parchment paper with lemon slices and basil leaves stuffed into the fillet for a no-fuss, healthy, and quick salmon dinner for two.","directions":"Step1: Preheat the oven to 400 degrees F (200 degrees C). Move an oven rack to the lowest position. Step2: Place salmon fillet, skin-side down, in the middle of a large piece of parchment paper; season with salt and black pepper. Cut two 3-inch slits into fillet with a sharp knife. Stuff chopped basil leaves into the slits. Spray fillet with cooking spray and arrange lemon slices on top. Step3: Fold the edges of parchment paper over fillet several times to seal it into an airtight packet. Place sealed packet onto a baking sheet. Step4: Bake in the preheated oven on the bottom rack until salmon flakes easily and flesh is pink and opaque with an interior of slightly darker pink color, about 25 minutes. An instant-read thermometer inserted into the thickest part of fillet should read at least 145 degrees F (65 degrees C). To serve, cut open the parchment paper and remove lemon slices before plating.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F52f4ec4edc24fda95babd84914c9922f%2F166147623390210715-AD1C-45B3-AB00-A13C627EF1E2.jpeg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"1 (8 ounce) salmon fillet, salt and ground black pepper to taste, 0.25 cup chopped basil leaves, olive oil cooking spray, 1 lemon, thinly sliced","prep":"15 mins","servings":"2","total":"40 mins","timestamp":"2024-01-14T23:22:07Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/236432/brown-sugar-ham-steak/","title":"Brown Sugar Ham Steak","cook":"20 mins","description":"This ham steak recipe is sweet and savory and cooks in minutes. You'll need just three ingredients, and it pairs beautifully with any number of sides.","directions":"Step1: Cook ham steak in a large skillet over medium heat until browned, 3 to 4 minutes per side. Step2: Remove ham from skillet; drain off any fat. Step3: Melt butter in the same skillet over medium-low heat. Stir in brown sugar. Step4: Return ham to skillet. Cook, turning ham often, until heated through and brown sugar has dissolved, about 10 minutes. Reduce heat if brown sugar/butter mixture starts to pop or splatter.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F05%2F21%2F4386478-brown-sugar-ham-steak-Zansheree-Knight-1x1-1.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"1 (8 ounce) bone-in fully cooked ham steak, 5 tablespoons butter, cubed, 5 tablespoons brown sugar","prep":"5 mins","servings":"2","total":"25 mins","timestamp":"2024-01-14T23:22:28Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/",
        "title":"Three-Ingredient Baked Chicken Breasts",
        "cook":"30 mins",
        "description":"This easy chicken breast recipe made with few ingredients uses butter and salt to flavor baked chicken for an easy main course for weeknight dinner.",
        "directions":"Step1: Preheat the oven to 350 degrees F (175 degrees C). Lightly butter a baking dish. Step2: Stir together melted butter and salt in a bowl. Step3: Arrange chicken in the prepared baking dish. Brush butter mixture onto chicken until thoroughly coated, pouring any extra over chicken. Step4: Bake in the preheated oven until no longer pink in the center and juices run clear, 30 to 45 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).",
        "images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F06%2F11%2F2267790-three-ingredient-baked-chicken-breasts-naples34102-1x1-1.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90",
        "ingredients":"0.25 cup butter, melted, 1 teaspoon salt, 4 skinless, boneless chicken breast halves",
        "prep":"10 mins","servings":"4","total":"40 mins","timestamp":"2024-01-14T23:22:36Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/83196/hamburger-jazz/","title":"Cheesy Hamburger Rice Casserole","cook":"4 servings","description":"This hamburger rice casserole with cheese is quick and easy comfort food. Get dinner on the table with just five ingredients!","directions":"Step1: Crumble the ground beef into a skillet over medium-high heat. Cook and stir until evenly browned. Drain off grease, and stir in the cream of mushroom soup, tomatoes, and uncooked rice. Cover, and simmer over low heat, stirring occasionally, until rice is cooked, about 15 minutes. Step2: Preheat the oven's broiler. When the rice is done cooking, transfer the contents of the skillet to a casserole dish. Cover with a layer of cheese. Step3: Broil until the cheese is melted and toasty. Season with salt and pepper to taste, and enjoy!","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2023%2F02%2F01%2F83196-Cheesy-Hamburger-Rice-Casserole1x1.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"1 pound ground beef, 1 (10.75 ounce) can cream of mushroom soup, 1 (14.5 ounce) can diced tomatoes with juice, 0.5 cup long grain white rice, 0.75 cup shredded mozzarella cheese, salt and pepper to taste","prep":"Crumble the ground beef into a skillet over medium-high heat. Cook and stir until evenly browned. Drain off grease, and stir in the cream of mushroom soup, tomatoes, and uncooked rice. Cover, and simmer over low heat, stirring occasionally, until rice is cooked, about 15 minutes.","servings":"4","total":"0 mins","timestamp":"2024-01-14T23:22:48Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/8495/chicken-cordon-bleu-i/","title":"Chicken Cordon Bleu","cook":"35 mins","description":"Chicken cordon bleu is made easy with this quick recipe. Chicken breasts are rolled up around ham and Swiss cheese, topped with seasoned bread crumbs, and baked.","directions":"Step1: Gather all ingredients. Step2: Preheat oven to 350 degrees F (175 degrees C). Coat a 7x11-inch baking dish with nonstick cooking spray. Step3: Pound chicken breasts to 1/4 inch thickness. Step4: Sprinkle each piece of chicken on both sides with salt and pepper. Place 1 Swiss cheese slice and 1 ham slice on top of each breast. Step5: Roll up each breast and secure with toothpicks. Step6: Place in the prepared baking dish and sprinkle chicken evenly with bread crumbs. Step7: Bake in the preheated oven until chicken is no longer pink, 30 to 35 minutes. Step8: Remove from the oven, and place 1/2 Swiss cheese slice on top of each breast. Step9: Return to the oven until cheese has melted, 3 to 5 minutes. Remove toothpicks and serve immediately.","images":"https://www.allrecipes.com/thmb/yvUbEhGbpKO64xXMxSciFajsveY=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8495-chicken-cordon-bleu-i-DDMFS-4x3-7dc7fc3c6c37438badf35f188172bd09.jpg","ingredients":"nonstick cooking spray, 4 skinless, boneless chicken breast halves, 0.25 teaspoon salt, 0.125 teaspoon ground black pepper, 6 slices Swiss cheese, 4 slices cooked ham, 0.5 cup seasoned bread crumbs","prep":"10 mins","servings":"4","total":"45 mins","timestamp":"2024-01-14T23:23:02Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/240208/simple-baked-chicken-breasts/","title":"Simple Baked Chicken Breasts","cook":"25 mins","description":"Learn how to bake chicken that's tender and juicy with this simple, 5-ingredient recipe for boneless, skinless chicken breasts. A bonus pan sauce adds flavor at the table!","directions":"Step1: Gather all ingredients. Step2: Preheat the oven to 400 degrees F (200 degrees C). Step3: Rub chicken breasts with olive oil and sprinkle both sides with salt and Creole seasoning. Place chicken in a broiler pan. Step4: Bake in the preheated oven for 10 minutes. Flip chicken and cook until no longer pink in the center and the juices run clear, about 15 minutes more. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C). Step5: Remove chicken to a plate. Step6: Pour chicken broth into the pan and scrape any browned bits off the bottom with a flat-edged wooden spatula. Add more broth if needed to dislodge the browned bits, but not too much or it will be watery. Step7: To serve, drizzle the pan sauce over the chicken.","images":"https://www.allrecipes.com/thmb/ovu6JqgWweSmRO7dIRYZ3uhz_rM=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/240208-simple-baked-chicken-breasts-DDMFS-4x3-74f701fc875a4af4be7ef889185c5f41.jpg","ingredients":"4 (5 ounce) skinless, boneless chicken breast halves, 2 tablespoons olive oil, 0.5 teaspoon coarse sea salt, or to taste, 1 pinch Creole seasoning (such as Tony Chachere's®), or more to taste, 1 tablespoon chicken broth, or more to taste","prep":"10 mins","servings":"4","total":"35 mins","timestamp":"2024-01-14T23:23:23Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/245367/pan-roasted-chicken-breasts/","title":"Pan-Roasted Chicken Breasts","cook":"15 mins","description":"This chicken breast skillet recipe is Chef John's version of pan-roasted chicken breasts that cook fast and stay juicy for an easy weeknight meal.","directions":"Step1: Gather all ingredients. Step2: Season chicken on both sides with salt and pepper. Step3: Heat olive oil in a heavy skillet over medium-high heat until it starts to shimmer. Place chicken breasts skin-side down in the skillet. Sprinkle with fresh herbs. Cook until the bottoms are well seared and golden brown, 5 to 6 minutes. Step4: Flip chicken breasts over and continue cooking until an instant-read thermometer inserted into the center of a breast reads 150 degrees F (66 degrees C), about 5 minutes. Step5: Add vinegar and cold butter to the pan with chicken. Shake the pan gently until butter melts and the internal temperature of chicken reads at least 165 degrees F (74 degrees C), 2 to 3 minutes more. Step6: Stir in 1 tablespoon chicken broth to thin sauce.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2023%2F02%2F20%2F245367_Pan-Roasted-Chicken-Breasts_step-1_ddmfs_4x3_1590.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"4 boneless chicken breast halves with skin, salt and freshly ground black pepper to taste, 2 tablespoons olive oil, 1 tablespoon chopped fresh herbs (thyme, parsley, rosemary), 0.25 cup apple cider vinegar, 4 tablespoons cold butter, cut into small pieces, 1 tablespoon chicken broth (or water), if needed to thin sauce","prep":"5 mins","servings":"4","total":"20 mins","timestamp":"2024-01-14T23:23:39Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/228630/slow-cooker-pork-and-sauerkraut/","title":"Slow Cooker Pork and Sauerkraut","cook":"8 hrs","description":"Pork and sauerkraut made in the slow cooker with whole pork tenderloin, baby potatoes, and prepared sauerkraut for a hearty, no-fuss one-pot meal.","directions":"Step1: Gather all ingredients. Step2: Place whole pork tenderloin into a slow cooker. Arrange potatoes around pork; pour sauerkraut and juice over pork and potatoes. Add 1 cup water, butter cubes, salt, and black pepper. Step3: Cook on Low until pork is tender, 8 to 10 hours. Add more water after 8 hours if mixture seems dry.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets-ucg.meredithcorp.io%2F1519d598bb9884c7b6fc49758a068be3%2F7555043.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"1 (1 pound) whole pork tenderloin, 1 (24 ounce) bag baby potatoes, unpeeled, 1 (20 ounce) can sauerkraut, undrained, 1 cup water, or more as needed, 0.25 cup butter, cubed, salt and ground black pepper to taste","prep":"10 mins","servings":"4","total":"8 hrs 10 mins","timestamp":"2024-01-14T23:23:48Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/245210/prosciutto-wrapped-pork-tenderloin-with-crispy-sage/","title":"Prosciutto-Wrapped Pork Tenderloin with Crispy Sage","cook":"35 mins","description":"Prosciutto-wrapped pork tenderloin with crispy sage is a quick and easy meal made with only 5 ingredients for a fancy dinner any night of the week.","directions":"Step1: Preheat oven to 350 degrees F (175 degrees C). Step2: Lightly season pork with salt and black pepper. Arrange about 6 sage leaves over tenderloin. Wrap prosciutto around tenderloin and sage, overlapping prosciutto slightly; wrap in plastic wrap and refrigerate to allow prosciutto to set on pork tenderloin, 5 to 10 minutes. Remove plastic wrap. Step3: Heat olive oil in a skillet over medium heat. Fry wrapped tenderloin in the hot oil until prosciutto is crispy and lightly browned on all sides, 8 to 10 minutes. Transfer wrapped tenderloin to a baking dish, reserving oil in the skillet. Step4: Bake tenderloin in the preheated oven until pork is cooked through, about 20 minutes. An instant-read thermometer inserted into the center should read at least 145 degrees F (63 degrees C). Step5: Heat reserved oil in the skillet over medium heat; fry remaining sage leaves until crispy, adding more oil as needed, about 5 minutes. Step6: Slice tenderloin and serve with crispy sage leaves.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F8864b55fd74dac29eb98f9c0a3e97f17%2F1691712994820IMG_8439.jpeg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"1 pound pork tenderloin, salt and ground black pepper to taste, 1 bunch fresh sage, leaves removed and stems discarded, divided, 6 ounces prosciutto, 1 tablespoon olive oil, or more as needed","prep":"10 mins","servings":"4","total":"50 mins","timestamp":"2024-01-14T23:23:57Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/231367/easy-crispy-baked-chicken/","title":"Easy Crispy Baked Chicken","cook":"45 mins","description":"This crispy baked chicken recipe uses seasoned crushed saltine crackers to make an easy crust for baked chicken that bakes up golden and crunchy.","directions":"Step1: Preheat the oven to 425 degrees F (220 degrees C). Grease a large baking dish. Step2: Mix together crushed crackers, seasoned salt, and garlic powder in a shallow bowl. Step3: Dip chicken breasts into melted margarine, then press into cracker mixture until coated. Arrange chicken in the prepared baking dish. Step4: Bake in the preheated oven until chicken breasts are no longer pink in the center and the juices run clear, 45 to 60 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (75 degrees C).","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1523473.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"2 cups crushed saltine crackers, 1 teaspoon seasoned salt, 1 pinch garlic powder, or to taste, 6 skinless, boneless chicken breast halves, 0.5 cup margarine, melted","prep":"15 mins","servings":"6","total":"1 hr","timestamp":"2024-01-14T23:24:09Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/201934/pan-seared-tilapia/","title":"Pan-Seared Tilapia","cook":"10 mins","description":"Learn how to cook tilapia with this simple, 15-minute recipe for pan-seared tilapia. This easy method produces delicious, flavorful fillets the whole family will enjoy.","directions":"Step1: Rinse tilapia fillets in cold water and pat dry with paper towels. Season both sides of each fillet with salt and pepper. Step2: Place flour in a shallow dish. Gently press each fillet into the flour to coat and shake off any excess. Step3: Heat olive oil in a large skillet over medium-high heat. Cook tilapia fillets in the hot oil, in batches if necessary, until fish flakes easily with a fork, about 4 minutes per side. Step4: Brush melted butter onto the tilapia fillets in the last minute before removing from the skillet. Step5: Drizzle fillets with lemon juice and garnish with parsley and thyme.","images":"https://www.allrecipes.com/thmb/dBLLXLhxGrPDR19l1ScWzu9AGB4=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/201934-pan-seared-tilapia-DDMFS-4x3-1dd0e315faf2477397af2a235e2c3ade.jpg","ingredients":"4 (4 ounce) tilapia fillets, salt and ground black pepper to taste, 0.5 cup all-purpose flour, 1 tablespoon olive oil, 2 tablespoons unsalted butter, melted, 1 tablespoon lemon juice, or to taste, 1 teaspoon chopped fresh flat-leaf parsley, or to taste, 0.5 teaspoon chopped fresh thyme, or to taste","prep":"5 mins","servings":"4","total":"15 mins","timestamp":"2024-01-14T23:24:19Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/85127/kielbasa-with-peppers-and-potatoes/","title":"Kielbasa with Peppers and Potatoes","cook":"30 mins","description":"An easy kielbasa recipe combines this smokey sausage with red and yellow bell peppers and potatoes. A simple, satisfying dish that everyone will love.","directions":"Step1: Heat oil in a pan over medium heat. Place kielbasa and potatoes in the pan. Cover and cook, stirring occasionally, until potatoes are tender, about 25 minutes. Step2: Mix bell peppers into the pan, and continue cooking until peppers are just tender, 5 minutes.","images":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F677450.jpg&q=60&c=sc&orient=true&w=160&poi=auto&h=90","ingredients":"1 tablespoon vegetable oil, 1 (16 ounce) package smoked kielbasa sausage, diced, 6 medium red potatoes, diced, 1 red bell pepper, sliced, 1 yellow bell pepper, sliced","prep":"10 mins","servings":"6","total":"40 mins","timestamp":"2024-01-14T23:24:26Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/222037/tater-tots-r-casserole/","title":"Tater Tot Casserole","cook":"40 mins","description":"This Tater Tot casserole is easy to make with ground beef, cream of mushroom soup, and lots of Cheddar cheese for a tasty comfort food classic.","directions":"Step1: Gather the ingredients. Preheat the oven to 350 degrees F (175 degrees C). Step2: Heat a large skillet over medium-high heat. Cook and stir ground beef in the hot skillet until completely browned and crumbly, 7 to 10 minutes. Stir in condensed soup; season with salt and black pepper. Step3: Transfer beef mixture to a 9x13-inch baking dish; layer tater tots evenly on top and sprinkle with Cheddar cheese. Step4: Bake in the preheated oven until tater tots are golden brown and hot, 30 to 45 minutes. Step5: Serve and enjoy!","images":"https://www.allrecipes.com/thmb/EYsPnKAn5msm6VBqRE2MqRYe45M=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/222037-tater-tot-casserole-VAT-hero-02-4x3-b2a2f3da9aa745d3ad8936edfd9eaf97.jpg","ingredients":"1 pound ground beef, 1 (10.5 ounce) can condensed cream of mushroom soup, salt and ground black pepper to taste, 1 (16 ounce) package frozen tater tots, 2 cups shredded Cheddar cheese","prep":"5 mins","servings":"4","total":"45 mins","timestamp":"2024-01-14T23:24:36Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/16448/simple-bbq-ribs/","title":"Simple BBQ Ribs","cook":"1 hr 45 mins","description":"This BBQ ribs recipe may be different than others you've tried, but for super tender ribs, give it a try! Lean, country-style pork ribs are boiled first, then baked.","directions":"Step1: Gather all ingredients. Step2: Place ribs in a large pot and cover with water. Stir in kosher salt, garlic powder, and pepper, and bring water to a boil over medium heat. Continue to boil until ribs are tender, 40 to 45 minutes. Step3: While the ribs are boiling, preheat the oven to 325 degrees F (165 degrees C). Step4: Remove ribs from the pot, and place them in a 9x13-inch baking dish. Pour barbeque sauce over ribs. Cover the baking dish with aluminum foil. Step5: Bake in the preheated oven until the internal temperature of the pork has reached 160 degrees F (70 degrees C), 1 to 1 1/2 hours. Step6: Serve hot and enjoy!","images":"https://www.allrecipes.com/thmb/RrOZTGr4w5U7zSZlAc39xLM6KSI=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/16448-simple-bbq-ribs-DDMFS-4x3-6c6ec5c3ddda485fbc8c855520ae8fc9.jpg","ingredients":"2.5 pounds country-style pork ribs, 2 tablespoons kosher salt, 1 tablespoon garlic powder, 1 teaspoon ground black pepper, 1 cup barbeque sauce","prep":"5 mins","servings":"4","total":"1 hr 50 mins","timestamp":"2024-01-14T23:24:47Z"
    },
    {
        "url":"https://www.allrecipes.com/recipe/235851/how-to-cook-trout/","title":"How to Cook Trout","cook":"10 mins","description":"This fresh trout recipe is seasoned, broiled, and served with the simplest butter-lemon sauce for a weeknight meal that couldn't be easier or quicker.","directions":"Step1: Melt butter in a saucepan over medium-low heat until butter smells toasted and is golden brown, about 1 minute. Turn off heat. Step2: Line a baking sheet with a piece of aluminum foil. Place trout onto foil; open trout so skin sides are down. Drizzle each trout with about 1/2 teaspoon melted butter. Generously season with salt and black pepper. Step3: Move an oven rack to 5 or 6 inches below the heat source and preheat the oven's broiler on high heat. Step4: Broil trout until opaque and barely firm to the touch, 2 or 3 minutes. Remove from oven. Step5: Return pan of remaining melted butter over high heat; stir in lemon juice and parsley. Bring butter sauce to a boil; whisk to combine. Step6: Serve trout on plates and drizzle with butter sauce.","images":"https://www.allrecipes.com/thmb/t-3zWhusslJuzc5eVTHMsj1M7Ew=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/235851-how-to-cook-trout-DDMFS-4x3-eccffaf522f7447c9f7865751624b86a.jpg","ingredients":"0.25 cup butter, 2 (8 ounce) whole trout, butterflied and deboned, salt and freshly ground black pepper to taste, 2 tablespoons freshly squeezed lemon juice, 2 tablespoons chopped fresh flat-leaf parsley","prep":"15 mins","servings":"2","total":"25 mins","timestamp":"2024-01-14T23:24:56Z"
    }
]

// function to convert the recipe times which are formatted in multiple ways such as "40 mins" or "1 hr 20 mins" into only minutes
const convertTimeStringToMinutes = (timeString) => {
    // regex are formats to match the strings of recipe times
    const hoursMinutesRegex = /(\d+)\s*hrs?\s*(\d*)\s*min/;
    const hoursOnlyRegex = /(\d+)\s*hrs?/;
    const minutesOnlyRegex = /(\d+)\s*min/;

    // if timeString.match(hoursMinutesRegex) - string is hr and min
    let match = timeString.match(hoursMinutesRegex);

    if (match) {
        const hours = match[1] ? parseInt(match[1], 10) : 0;
        const minutes = match[2] ? parseInt(match[2], 10) : 0;
        return hours * 60 + minutes;
    }

    // if timeString.match(hoursOnlyRegex) - string is hr
    match = timeString.match(hoursOnlyRegex);

    if (match) {
        const hours = match[1] ? parseInt(match[1], 10) : 0;
        return hours * 60;
    }

    // if timeString.match(minutesOnlyRegex) - string is min
    match = timeString.match(minutesOnlyRegex);

    if (match) {
        const minutes = match[1] ? parseInt(match[1], 10) : 0;
        return minutes;
    }

    return 0; // default to 0 if the format doesn't match
};

function FridgeToFoodMainPage({ savedRecipes, setSavedRecipes }) {
    const [selectedIngredient, setSelectedIngredient] = useState(null);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [selectedAllergies, setSelectedAllergies] = useState([]);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isDairyFree, setIsDairyFree] = useState(false);
    const [isGlutenFree, setIsGlutenFree] = useState(false);

    // function changes the saved value of the slider when the slider is used
    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
        console.log("Slider value changed: " + newValue);
        //filteredRecipes(newValue);
    };

    // function adds new selected ingredients into the list of selected ingredients
    // and removes ingredients that are unselected 
    const handleIngredientChange = (newValue, actionMeta) => {
        if (actionMeta.action === 'select-option' || actionMeta.action === 'remove-value') {
          setSelectedIngredients(newValue ? newValue.map((option) => option.value) : []);
        }

        if (actionMeta.action === 'select-option') {
          setSelectedIngredient(newValue[newValue.length]);
        } else {
          setSelectedIngredient(null);
        }
    };  
      
    console.log(selectedIngredients);

    // this function updates the array of selected allergies when an allergy checkbox is clicked (button toggles from selected to unselected)
    // if the allergy passed into the function is already contained in the array, it is removed
    // if the allergy is not in the array, it is added into it 
    const handleAllergyChange = (allergy) => {
        setSelectedAllergies((prevSelected) => {
            let updatedAllergies;

            // adds/removes eggs and mayo from the allergy list since if you're allergic to eggs, you're also allergic to mayo
            if (allergy === 'Eggs') {
                updatedAllergies = (prevSelected.includes('Eggs')) 
                ? prevSelected.filter((selected) => selected !== 'Eggs' && selected !== 'Mayo') 
                : [...prevSelected, 'Eggs', 'Mayo'];
            }
            // adds/removes all foods containing soy from allergies list
            else if (allergy === 'Soy') {
                updatedAllergies = (prevSelected.includes('Soy')) 
                ? prevSelected.filter((selected) => selected !== 'Soy' && selected !== 'Tofu' && selected !== 'Miso') 
                : [...prevSelected, 'Soy', 'Tofu', 'Miso'];
            }
            // adds/removes all types of shellfish from the allergies list
            else if (allergy === 'Shellfish') {
                updatedAllergies = (prevSelected.includes('Shellfish')) 
                ? prevSelected.filter((selected) => 
                    selected !== 'Shellfish' 
                    && selected !== 'Lobster' 
                    && selected !== 'Shrimp'
                    && selected !== 'Crab'
                    && selected !== 'Clams'
                    && selected !== 'Mussels'
                    && selected !== 'Scallops'
                    ) 
                : [...prevSelected, 'Shellfish', 'Lobster', 'Shrimp', 'Crab', 'Clams', 'Mussels', 'Scallops'];
            }
            // adds/removes all types of fish from the allergies list
            else if (allergy === 'Fish') {
                updatedAllergies = (prevSelected.includes('Fish')) 
                ? prevSelected.filter((selected) => 
                    selected !== 'Fish' 
                    && selected !== 'Salmon' 
                    && selected !== 'Tuna' 
                    && selected !== 'Trout'
                    && selected !== 'Halibut'
                    && selected !== 'Cod'
                    && selected !== 'Tilapia'
                    && selected !== 'Anchovies'
                    ) 
                : [...prevSelected, 'Fish', 'Salmon', 'Tuna', 'Trout', 'Halibut', 'Cod', 'Tilapia', 'Anchovies'];
            }
            else if (prevSelected.includes(allergy)) {
                // If selected, remove it from the state
                updatedAllergies = prevSelected.filter((selected) => selected !== allergy);
            } else {
                // If not selected, add it to the state
                updatedAllergies = [...prevSelected, allergy];
            }
        
            console.log("Selected allergies:", updatedAllergies);
            return updatedAllergies;
        });
    };
      

    const filteredRecipes = () => {
        const time = sliderValue;

        const filteredRecipes = recipes.filter((recipe) => {
            let hasRestrictedFood = false;
            const recipeTotalMinutes = convertTimeStringToMinutes(recipe.total);
            //console.log("recipe total:" + recipe.total + "recipe min:" + recipeTotalMinutes);
            const recipeIngredients = recipe.ingredients.split(',').map((ingredient) => ingredient.trim().toLowerCase());
    
            // check if any selected ingredients are present in the recipe's ingredients
            const hasSelectedIngredients = selectedIngredients.length === 0 || selectedIngredients.some(
                (selectedIngredient) =>
                    recipeIngredients.some(
                        (recipeIngredient) =>
                        recipeIngredient.includes(selectedIngredient.toLowerCase())
                )
            );

            // searches for the allergy ingredients in the recipe's ingredient list
            // if any allergy ingredient is found, it returns true
            const hasAllergies = selectedAllergies.some((selectedAllergy) =>
                recipeIngredients.some((recipeIngredient) => 
                    recipeIngredient.includes(selectedAllergy.toLowerCase()
                )
            ));

            // searches for the dietary restriction's restricted foods in the recipe's ingredient list
            // if any restricted ingredient is found, it returns true
            // OR allows the hasRestrictedFood variable to return true if any restricted ingredient from any dietary res is found
            if (isVegan) {
                console.log("is vegan:" + isVegan);
                hasRestrictedFood = hasRestrictedFood || (NOvegan.some((NOveganIng) =>
                    recipeIngredients.some((recipeIngredient) => 
                        recipeIngredient.includes(NOveganIng.toLowerCase())
                    )
                ))
            }
            else if (isVegetarian) {
                console.log("is vegetarian:" + isVegetarian);
                hasRestrictedFood = hasRestrictedFood || (NOvegetarian.some((NOvegIng) =>
                    recipeIngredients.some((recipeIngredient) => 
                        recipeIngredient.includes(NOvegIng.toLowerCase())
                    )
                ))
            }
            if (isDairyFree) {
                console.log("is dairy-free:" + isDairyFree);
                hasRestrictedFood = hasRestrictedFood || (NOdairy.some((NOdairyIng) =>
                    recipeIngredients.some((recipeIngredient) => 
                        recipeIngredient.includes(NOdairyIng.toLowerCase())
                    )
                ))
            }
            if (isGlutenFree) {
                console.log("is gluten-free:" + isGlutenFree);
                hasRestrictedFood = hasRestrictedFood || (NOgluten.some((NOgluten) =>
                    recipeIngredients.some((recipeIngredient) => 
                        recipeIngredient.includes(NOgluten.toLowerCase())
                    )
                ))
            }

            // filters recipes based on time from the slider
            // recipes must have min 1 selected ingredient, not have allergy or dietary restriction ingredients 
            // and be equal to or under the selected time
            if (time === 0 || time === undefined) {
                return hasSelectedIngredients && !hasAllergies && !hasRestrictedFood;
            }
            else {
                const isWithinTimeLimit = recipeTotalMinutes <= time;
                return hasSelectedIngredients && isWithinTimeLimit && !hasAllergies && !hasRestrictedFood;
            }
            
        });
        
        return filteredRecipes;
    };
    
    //console.log(filteredRecipes());
  
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center pt-4 px-4'>
                <h1 className='mx-auto'>&nbsp;&nbsp;&nbsp;Fridge to Food</h1>
                <Link to={{ pathname: '/saved-recipes' }}>
                    <BiSolidFoodMenu className='saved-btn'/>
                </Link>
            </div>
            <h5 className='d-flex justify-content-center mt-4 mb-4'>
                Enter all ingredients you currently have to receive recipes that you can start cooking right away!
                <br/>Use the filter feature to filter recipes by time, allergies, and dietary restrictions
            </h5>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 offset-3'>
                    <Select
                        className='select'
                        classNames={{
                            control: () => 'select-control'
                        }}
                        options={ingredientsList}
                        value={selectedIngredient}
                        onChange={handleIngredientChange}
                        isClearable
                        isSearchable
                        isMulti
                        placeholder="Enter Ingredients"
                    />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-1 offset-8 text-right mt-2'>
                        <button
                            onClick={() => setModalIsOpen(true)}
                            className='filter-btn'
                        >Filter</button>
                    </div>
                </div>
            </div>
            <div className='modal-container'>
                <div>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                        className="modal-shape"
                        
                    >
                        <div className='modal-content'>
                            <h4>Filter Results</h4>
                            <hr/>
                            <h5 className='mt-3'>Time</h5>
                            <h6>
                                {`Select the MAXIMUM amount of time in minutes for the recipes (select 0 to show recipes of all times)`}
                            </h6>
                            <Box sx={{ width: "100%" }}>
                                <Slider
                                value={sliderValue}
                                aria-label="Custom marks"
                                defaultValue={20}
                                step={10}
                                valueLabelDisplay="auto"
                                onChange={handleSliderChange}
                                />
                            </Box>
                            <h5 className='mt-4'>Allergies</h5>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <FormControlLabel control={<Checkbox checked={selectedAllergies.includes('Nuts')} onChange={() => handleAllergyChange('Nuts')}/>} className="checkbox" label="Nuts" />
                                        <FormControlLabel control={<Checkbox checked={selectedAllergies.includes('Shellfish')} onChange={() => handleAllergyChange('Shellfish')}/>} className="checkbox" label="Shellfish" />
                                        <FormControlLabel control={<Checkbox checked={selectedAllergies.includes('Fish')} onChange={() => handleAllergyChange('Fish')}/>} className="checkbox" label="Fish" />
                                    </div>
                                    <div className='col-6'>
                                        <FormControlLabel control={<Checkbox checked={selectedAllergies.includes('Eggs')} onChange={() => handleAllergyChange('Eggs')}/>} className="checkbox" label="Eggs" />
                                        <FormControlLabel control={<Checkbox checked={selectedAllergies.includes('Soy')} onChange={() => handleAllergyChange('Soy')}/>} className="checkbox" label="Soy" />
                                        <FormControlLabel control={<Checkbox checked={selectedAllergies.includes('Sesame')} onChange={() => handleAllergyChange('Sesame')}/>} className="checkbox" label="Sesame" />
                                    </div>
                                </div>
                            </div>
                            <h5 className='mt-4'>Dietary Restrictions</h5>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <FormControlLabel control={<Checkbox checked={isVegan} onChange={() => setIsVegan(!isVegan)}/>} className="checkbox" label="Vegan" />
                                        <FormControlLabel control={<Checkbox checked={isGlutenFree} onChange={() => setIsGlutenFree(!isGlutenFree)}/>} className="checkbox mt-2" label="Gluten-free" />
                                    </div>
                                    <div className='col-6'>
                                        <FormControlLabel control={<Checkbox checked={isVegetarian} onChange={() => setIsVegetarian(!isVegetarian)}/>} className="checkbox" label="Vegetarian" />
                                        <FormControlLabel control={<Checkbox checked={isDairyFree} onChange={() => setIsDairyFree(!isDairyFree)}/>} className="checkbox mt-2" label="Dairy-free" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        
            <div className='container mt-4'>
                <div className='row'>
                    {filteredRecipes().map((recipe, index) => (
                    <div className='col-4'>
                        <div className='recipe-card' key={index}>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <img src={recipe.images} alt={`Recipe ${index + 1}`} style={{maxWidth: "100%", maxHeight: "120px"}}></img>
                                </div>
                                <div>
                                    <div className='heart-btn'>
                                        <ToggleButton recipe={recipe} savedRecipes={savedRecipes} setSavedRecipes={setSavedRecipes}/>
                                    </div>
                                    <div className='pot-btn'>
                                        {/* target="_blank" opens link in new tab */}
                                        <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                                            <PiCookingPotBold size="25px"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='recipe-title mb-1'>{recipe.title}</div>
                            <h6>{recipe.description}</h6>
                            <h6>Time: {recipe.total}</h6>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default FridgeToFoodMainPage;