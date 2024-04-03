async function GetUrlCategory() {
  let CategoriesUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";
  let xhr = fetch(CategoriesUrl)
    .then(function (promise) {
      return promise.json();
    })
    .then(function (tagmeals) {
      let plateImgSrc = tagmeals.categories.strCategoryThumb;
      let htmlTags = document.getElementById("ChoosenCategory");
      for (let c of tagmeals.categories) {
        let CategoryUrl = `category.html?c=${c.strCategory}`;
        htmlTags.innerHTML += `
        <a href="${CategoryUrl}">
        <div class="tagsFood">
            <a href="${CategoryUrl}">
                <div id="textAndImage">
                    <img src="${c.strCategoryThumb}" alt="${c.strCategory} width=" 150" height="150"">
                        <p>${c.strCategory}</p>
                            </div>
                        </a>
                    </div>
                </a>`;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

GetUrlCategory();
