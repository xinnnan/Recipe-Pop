const form =document.querySelector('form');
const searchResults = document.querySelector('.search-btn');
 const container = document.querySelector('.container');
 let userInput = '';

 const ID = `c50c1562`;
 const API_KEY = `c2e86842aa5d1d87b803c3338b6c09fc`;

 form.addEventListener('submit', (e) => {
    e.preventDefault();
    userInput = e.target.querySelector('input').value;
    console.log(userInput);
  fetchData();
 })

 async function fetchData() {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=c50c1562&app_key=c2e86842aa5d1d87b803c3338b6c09fc&q=${userInput}`;
    const response = await fetch(url);
    const data = await response.json();
   createContent(data.hits);
    console.log(data);
 }

 function createContent(results) {
    let userInput ='';
    results.map(result => {
        userInput +=

        `<div class="item">
        <img src="${result.recipe.image}"> 
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
          <a class='view-btn' href=${result.recipe.url}>View Recipes</a>
        </div>
         <p class="recipe-description">${result.recipe.calories.toFixed(2)} Calories</p>
         </div>`
    })
    container.innerHTML = userInput;
}


function refreshPage(){
   window.location.reload();
} 
