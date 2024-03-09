import { BASE_API_URL } from "./config";
import { getJSON, sendJSON } from "./helpers";
import { RES_PER_PAGE } from "./config";
import { KEY } from "./config";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    currentPage: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
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

    if (state.bookmarks.some((bookmark) => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
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

    state.search.currentPage = 1;
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

export const updateServing = function (newServings) {
  state.recipe.ingredients.forEach((ingre) => {
    ingre.quantity = (ingre.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = newServings;
};

const saveBookmarksOnLocalStorege = function () {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  // Add Bookmark
  state.bookmarks.push(recipe);
  console.log(state.bookmarks);

  // Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) {
    state.recipe.bookmarked = true;
  }

  saveBookmarksOnLocalStorege();
};

export const deleteBookmark = function (id) {
  const index = state.bookmarks.findIndex((element) => element.id === id);
  state.bookmarks.splice(index, 1);

  if (id === state.recipe.id) state.recipe.bookmarked = false;

  saveBookmarksOnLocalStorege();
};

const getBookmarkFromLocalStorege = function () {
  const data = localStorage.getItem("bookmarks");
  if (data) state.bookmarks = JSON.parse(data);
};

getBookmarkFromLocalStorege();

// Function to clear all bookmarks / We're not using this function for now
// const clearBookMarks = function () {
//   localStorage.clear("bookmarks");
// };

// clearBookMarks();

export const uploadRecipes = async function (newRecipe) {
  // console.log(Object.entries(newRecipe));
  try {
    const ingredients = Object.entries(newRecipe)
      .filter((entry) => {
        return entry[0].startsWith("ingredient") && entry[1] !== "";
      })
      .map((ingredient) => {
        const ingredientArray = ingredient[1].replaceAll("", "").split(",");

        if (ingredientArray.length !== 3)
          throw new Error(
            "Wrong ingredit format! Please use the correct format"
          );
        const [quantity, unit, description] = ingredientArray;

        return {
          quantity: quantity ? +quantity : null,
          unit,
          description,
        };
      });
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };

    const data = await sendJSON(`${BASE_API_URL}?key=${KEY}`, recipe);
    console.log(data);
  } catch (err) {
    throw err;
  }
};
