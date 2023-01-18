var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function() {
  var searchInput = document.getElementById("search-input").value;
  var searchedElements = document.getElementsByClassName(searchInput);
  for (var i = 0; i < searchedElements.length; i++) {
    if (searchedElements[i].id === searchInput) {
      console.log(searchedElements[i]);
    }
  }
});