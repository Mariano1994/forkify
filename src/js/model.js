import { BASE_API_URL } from "./config";
import { getJSON } from "./helpers";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
  },
};

// Function to fecthing Data from an external API
export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${BASE_API_URL}${id}`);

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

// Serach Funcionatily
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${BASE_API_URL}?search=${query}`);
    console.log(data);

    state.search.results = data.data.recipes.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });

    // console.log(state.search.results);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
