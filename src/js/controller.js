import * as model from "./model.js";
import recipesView from "./views/recipesView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";
import bookmarksView from "./views/bookmarksView.js";
import addRecipesView from "./views/addRecipesView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipesView.renderSpinner();

    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

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

    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};
const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  model.updateServing(newServings);

  // recipesView.render(model.state.recipe);
  recipesView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1) Add or Remove bookmark based on the conditions
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }
  // 2) Update the recipe View
  recipesView.update(model.state.recipe);

  //  3) Render bookmarks

  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddNewRecipe = async function (newRecipe) {
  try {
    await model.uploadRecipes(newRecipe);
  } catch (error) {
    console.error(error);
    addRecipesView.renderError(error.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipesView.addHandlerRender(controlRecipes);
  recipesView.addHandlerUpdateServings(controlServings);
  recipesView.addHandlerAddBookMark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClickButton(controlPagination);
  addRecipesView.addHandlerUploadFormData(controlAddNewRecipe);
};
init();
