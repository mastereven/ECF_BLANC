async function GetUrlCategory() {
  const cat = new URLSearchParams(document.location.search).get("c");
  let CategoryUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`;
  let xhr = fetch(CategoryUrl)
    .then(function (promise) {
      return promise.json();
    })
    .then(function (SuccessCategory) {
      let htmlCorrectCat = document.getElementById("ChoosenCategory");
      for (i = 0; i < SuccessCategory.meals.length - 1; i++) {
        let plateId = SuccessCategory.meals[i].idMeal;
        let plateName = SuccessCategory.meals[i].strMeal;
        let plateImgSrc = SuccessCategory.meals[i].strMealThumb;
        htmlCorrectCat.innerHTML += `
        <a href="Recipe.html?id=${plateId} id="vigntext">
                <div class="tagsFood">
                    <p class="vignette"><img src="${plateImgSrc}" alt="${plateName} width="150" height="150"><br>${plateName}</p>
                </div>
            </a>
            <style>

            </style>`;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

GetUrlCategory();
