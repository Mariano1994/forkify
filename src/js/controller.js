import * as model from "./model.js";
import recipesView from "./views/recipesView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

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
    resultsView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);
    resultsView.render(model.getSearchResultsPage());
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  recipesView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
