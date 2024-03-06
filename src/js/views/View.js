import icons from "../../img/icons.svg";

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  update(data) {
    this._data = data;
    const updatedMarkup = this._generateMarkup();

    const newDOM = document
      .createRange()
      .createContextualFragment(updatedMarkup);

    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const currentElements = Array.from(
      this._parentElement.querySelectorAll("*")
    );

    newElements.forEach((newElement, index) => {
      const currentElement = currentElements[index];

      // Updates changed Texts
      if (
        !newElement.isEqualNode(currentElement) &&
        newElement.firstChild?.nodeValue.trim() !== ""
      ) {
        currentElement.textContent = newElement.textContent;
      }

      // Updates changed Atrributs
      if (!newElement.isEqualNode(currentElement)) {
        Array.from(newElement.attributes).forEach((attribute) =>
          currentElement.setAttribute(attribute.name, attribute.value)
        );
      }
    });
  }

  // FUNCTION TO CREATE A SPINNER
  renderSpinner() {
    const markup = `<div class="spinner">
  <svg>
    <use href="${icons}#icon-loader"></use>
  </svg>
  </div> 
  `;
    this._clear;
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._ErrorMessage) {
    const markup = `
          <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
        `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderSuccessMessage(message = this._SuccessMessage) {
    const markup = `
    <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
    this._clear;
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
