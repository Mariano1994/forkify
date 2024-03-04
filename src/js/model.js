import { BASE_API_URL } from "./config";
import { getJSON } from "./helpers";

export const state = {
  recipe: {},
};

// Function to fecthing Data from an external API
export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${BASE_API_URL}/${id}`);

    // Based on the  fetching result we create a new recipe object with only need information

    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    throw err;
  }
};
