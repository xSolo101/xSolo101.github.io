function showFilter(){
document.getElementById("newContent").style.display = "none";    
document.getElementById("filterContent").style.display = "block";
}

function showAddNew(){
 document.getElementById("filterContent").style.display = "none";
 document.getElementById("newContent").style.display = "block";
}

function addNewArticle() {
    const title = document.getElementById("inputHeader").value.trim();
    const text = document.getElementById("inputArticle").value.trim();

    let type = "";
    let markerText = "";

    if (document.getElementById("opinionRadio").checked) {
        type = "opinion";
        markerText = "Opinion";
    } else if (document.getElementById("recipeRadio").checked) {
        type = "recipe";
        markerText = "Recipe";
    } else if (document.getElementById("lifeRadio").checked) {
        type = "update";       
        markerText = "Update"; 
    }

    const article = document.createElement("article");
    article.className = type;

    const marker = document.createElement("span");
    marker.className = "marker";
    marker.textContent = markerText;

    const h2 = document.createElement("h2");
    h2.textContent = title;

    const p = document.createElement("p");
    p.textContent = text;

    article.appendChild(marker);
    article.appendChild(h2);
    article.appendChild(p);

    document.getElementById("articleList").appendChild(article);
}



function filterArticles() {

    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;

    const articles = document.querySelectorAll("#articleList article");

    articles.forEach(article => {

        if (
            (article.classList.contains("opinion") && showOpinion) ||
            (article.classList.contains("recipe") && showRecipe) ||
            (article.classList.contains("update") && showUpdate)
        ) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }

    });
}
