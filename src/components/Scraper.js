/* // Scraper.js

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function fetchHTML(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching HTML content: ${error}`);
    throw error;
  }
}

async function extractRecipeInfo(html) {
  const $ = cheerio.load(html);
  const recipeLinks = [];

  // Find all recipe links on the page
  $('a.recipes-card__title-link').each((index, element) => {
    const link = $(element).attr('href');
    recipeLinks.push(link);
  });

  // Extract recipe information for each link
  const recipes = [];
  for (const link of recipeLinks) {
    try {
      const recipeHtml = await fetchHTML(link);
      const recipe$ = cheerio.load(recipeHtml);

      const title = recipe$('h1.recipe-title').text();
      const ingredients = [];

      // Extract recipe ingredients
      recipe$('li.ingredient').each((index, element) => {
        const ingredient = recipe$(element).text();
        ingredients.push(ingredient);
      });

      const recipe = {
        title,
        ingredients,
        link,
      };

      recipes.push(recipe);
    } catch (error) {
      console.error(`Error extracting recipe info from ${link}: ${error}`);
    }
  }

  return recipes;
}

async function scrapeAllRecipes() {
  try {
    const url = 'https://www.allrecipes.com/recipes-a-z-6735880';
    const html = await fetchHTML(url);
    const recipes = await extractRecipeInfo(html);

    if (recipes.length === 0) {
      console.log('No recipes found.');
      return;
    }

    // Save recipes to a JSON file
    const filePath = 'recipes.json';
    fs.writeFileSync(filePath, JSON.stringify(recipes, null, 2));

    console.log(`Recipes saved to ${filePath}`);
  } catch (error) {
    console.error('Error scraping recipes:', error);
  }
}

// Call the function to scrape and save recipes
//scrapeAllRecipes();

export { fetchHTML, extractRecipeInfo, scrapeAllRecipes };
 */