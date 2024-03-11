 {
    let randUrl = "www.themealdb.com/api/json/v1/1/categories.php";
    let xhr = fetch(randUrl)
      .then(function (promise) {
        return promise.json();
      })
      .then(function (randommeals) {
        const plateName = randommeals.meals[0].strMeal;
        const plateCat = randommeals.meals[0].strCategory;
        const plateArea = randommeals.meals[0].strArea;
        const plateRecipe = randommeals.meals[0].strInstructions;
        const plateImgSrc = randommeals.meals[0].strMealThumb;}
      
      
      async function AlphabetOrder()
      async function CountryOrder()
      async function FoodType()