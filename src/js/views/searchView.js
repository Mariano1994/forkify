class SearchView {
  #parentElement = document.querySelector(".search");
  getQuery() {
    return this.#parentElement.querySelector(".search__field").value;
  }

  #clearInput() {
    this.#parentElement.querySelector(".search__field").value = "";
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener("submit", (event) => {
      event.preventDefault();
      handler();
      this.#clearInput();
    });
  }
}

export default new SearchView();
