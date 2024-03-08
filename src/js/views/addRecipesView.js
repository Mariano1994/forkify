import View from "./View";
import icons from "../../img/icons.svg";

class AddRecipeView extends View {
  _parentElement = document.querySelector(".upload");

  _window = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay");

  _buttonToOpenModal = document.querySelector(".nav__btn--add-recipe");
  _buttonToCloseModal = document.querySelector(".btn--close-modal");

  constructor() {
    super();
    this._addHandlerOpenModal();
    this._addHandlerCloseModal();
  }

  toggleWindow() {
    this._overlay.classList.toggle("hidden");
    this._window.classList.toggle("hidden");
  }

  _addHandlerOpenModal() {
    this._buttonToOpenModal.addEventListener(
      "click",
      this.toggleWindow.bind(this)
    );
  }

  _addHandlerCloseModal() {
    this._buttonToCloseModal.addEventListener(
      "click",
      this.toggleWindow.bind(this)
    );

    this._overlay.addEventListener("click", this.toggleWindow.bind(this));
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
