async function GetFoodByCountry() {
  const letters = document.querySelectorAll(".wichLetter");
  letters.forEach((letters) => {
    letters.addEventListener("click", function (event) {
      let htmlCorrectCat = document.getElementById("results");
      htmlCorrectCat.innerHTML = "";
      let choosenLetter = this.textContent;
      console.log(choosenLetter);
      let UrlFoodLetter = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${choosenLetter}`;

      //chercher bouffe par lettre

      let xhr = fetch(UrlFoodLetter)
        .then(function (promise) {
          return promise.json();
        })
        .then(function (SuccessCategory) {
          for (i = 0; i < SuccessCategory.meals.length - 1; i++) {
            let plateId = SuccessCategory.meals[i].idMeal;
            let plateName = SuccessCategory.meals[i].strMeal;
            let plateImgSrc = SuccessCategory.meals[i].strMealThumb;
            htmlCorrectCat.innerHTML += `
                    <a href="Recipe.html?id=${plateId}">
                          <div class="tagsFood">
                              <p><img src="${plateImgSrc}" alt="${plateName} width="150" height="150"><br>${plateName}</p>
                          </div>
                      </a>`;
          }
        });
    });
  });
}

GetFoodByCountry();
