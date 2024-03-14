async function GetCatPage() {
  let tagUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";
  let xhr = fetch(Url)
    .then(function (promise) {
      return promise.json();
    })
    .then(function (tagmeals) {
      const Tags = tagmeals.meals[0].strCategory;
      let TextinTags = document.getElementById("tagsFood").innerHTML;

      //     let altimg = `GretaEat ${plateName} image`;
      //     let TextforRandomfood = `
      //       <div class="tags">
      //         <img src="${plateImgSrc}" alt ="${altimg}" title="${plateName}" width="200" height="200">
      //         <h2>${plateName}</h2>
      //         <br>
      //         <div id="cat">
      //         Categoryzed on our site by the tag:
      //         ${plateCat}
      //         </div>
      //         <br>
      //         It as an ${plateArea} origin.
      //         <br>
      //         To prepare it, you have to:
      //         <br>
      //         ${plateRecipe}
      //       </div>
      //     </section>`;
      //     document.getElementById("randomfood").innerHTML = TextforRandomfood;
    })
    .catch((err) => {
      console.log(err);
    });
}

// async function AlphabetOrder()
// async function CountryOrder()
// async function tags()

//https://www.themealdb.com/api/json/v1/1/categories.php
// cette url à fetch pour avoir la list de toutes les catégoris avec les éléments les décrivants etc


//les scripts ici concernent la page ou jai toutes mes catégories de listé

// https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
// --->Url à fetcher pour avoir la promesse d'une catégorie au clique d'un boutton 

//https://www.themealdb.com/api/json/v1/1/categories.php
// cette url à fetch pour avoir la list de toutes les catégoris avec les éléments les décrivants etc