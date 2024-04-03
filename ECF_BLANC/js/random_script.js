async function randomtrigger() {
  let randUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
  let xhr = fetch(randUrl)
    .then(function (promise) {
      return promise.json();
    })
    .then(function (randommeals) {
      const plateName = randommeals.meals[0].strMeal;
      const plateCat = randommeals.meals[0].strCategory;
      const plateArea = randommeals.meals[0].strArea;
      const plateRecipe = randommeals.meals[0].strInstructions;
      const plateImgSrc = randommeals.meals[0].strMealThumb;
      let TextinRandomfood = document.getElementById("randomfood").innerHTML;
      let altimg = `GretaEat ${plateName} image`;
      let TextforRandomfood = `
        <div class="Random">
          <img src="${plateImgSrc}" alt ="${altimg}" title="${plateName}" width="200" height="200">
          <h2>${plateName}</h2>
          <br>
          <div id="cat">
          Categoryzed on our site by the tag:
          ${plateCat}
          </div>
          <br>
          It as an ${plateArea} origin.
          <br>
          To prepare it, you have to:
          <br>
          ${plateRecipe}
        </div>
      </section>`;
      document.getElementById("randomfood").innerHTML = TextforRandomfood;
    })
    .catch((err) => {
      console.log(err);
    });
}
