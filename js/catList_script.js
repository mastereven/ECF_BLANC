async function GetUrlCategory() {
  let CategoriesUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";
  let xhr = fetch(CategoriesUrl)
    .then(function (promise) {
      return promise.json();
    })
    .then(function (tagmeals) {
      let plateImgSrc = tagmeals.categories.strCategoryThumb;
      let htmlTags = document.getElementById("TypeFood");
      for (let c of tagmeals.categories) {
        let CategoryUrl = `category.html?c=${c.strCategory}`;
        htmlTags.innerHTML += `
        
        
            <a href="${CategoryUrl}">
                <div class="tagsFood">
                    <p href="${CategoryUrl}"><img src="${c.strCategoryThumb}" alt="${c.strCategory} width="150" height="150""><br>${c.strCategory}</p>
                </div>
            </a>`;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

GetUrlCategory();

// async function AlphabetOrder()
// async function CountryOrder()
// async function tags()

// https://www.themealdb.com/api/json/v1/1/categories.php
// cette url à fetch pour avoir la list de toutes les catégoris avec les éléments les décrivants etc

// les scripts ici concernent la page ou jai toutes mes catégories de listé
// www.themealdb.com/api/json/v1/1/list.php?c=list
// je choppe ma cat au click
// https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
// --->Url à fetcher pour avoir la promesse d'une catégorie au clique d'un boutton
