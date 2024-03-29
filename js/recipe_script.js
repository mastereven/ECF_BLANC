async function GetRecipe() {
  const cat = new URLSearchParams(document.location.search).get("id");
  let RecipeUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${cat}`;

  let xhr = fetch(RecipeUrl)
    .then(function (promise) {
      return promise.json();
    })
    .then(function (SuccessRecipe) {
      let htmlRecipePart = document.getElementById("ChoosenCategory");

      for (let c of SuccessRecipe.meals) {
        let plateName = c.strMeal;
        let plateCat = c.strCategory;
        let plateOrigin = c.strArea;
        let plateIngredientMeasure = [];
        for (let i = 1; i < 21; i++) {
          if (!c[`strIngredient${i}`]) break;
          let ingredient = c[`strIngredient${i}`];
          let measure = c[`strMeasure${i}`];
          let ingredientMeasure = `${ingredient}` + ` ` + `${measure}`;
          console.log(ingredientMeasure);
          if (ingredientMeasure) {
            plateIngredientMeasure.push(ingredientMeasure);
          }
        }
        htmlRecipePart.innerHTML += `
          <div class="Recipe">
            <h1>${plateName}</h1><br>
            <h2>Catégorie : ${plateCat}<br>
            Zone géographique : ${plateOrigin}<br><br> 
            </h2>
            <h1>Ingrédients:<br><br>- ${plateIngredientMeasure.join(
              `.<br>-`
            )}</h1>
          </div>`;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
GetRecipe();
