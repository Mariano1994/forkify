import * as model from "./model.js";
import recipesView from "./views/recipesView.js";
import searchView from "./views/searchView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipesView.renderSpinner();

    await model.loadRecipe(id);

    // Rendering Recipe
    recipesView.render(model.state.recipe);

    // Functionality to render the recipe
  } catch (err) {
    recipesView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);
    console.log(model.state.search.results);
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  recipesView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
