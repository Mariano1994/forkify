class SearchView {
  _parentElement = document.querySelector(".search");
  getQuery() {
    return this._parentElement.querySelector(".search__field").value;
  }

  _clearInput() {
    this._parentElement.querySelector(".search__field").value = "";
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", (event) => {
      event.preventDefault();
      handler();
      this._clearInput();
    });
  }
}

export default new SearchView();
