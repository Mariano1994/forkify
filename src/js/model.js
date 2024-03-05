import { BASE_API_URL } from "./config";
import { getJSON } from "./helpers";
import { RES_PER_PAGE } from "./config";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    currentPage: 1,
    resultsPerPage: RES_PER_PAGE,
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
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.currentPage) {
  state.search.currentPage = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};
