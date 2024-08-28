function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-prompt");
  let apiKey = "c7bafob10t4b2f7e01b7bfdba1fa34ec";
  let context =
    "You are an expert chef and you enjoy writing very delicious recipes. Your mission is to write tasty recipes with tips in basic HTML. Do NOT ever include the recipe title at the top of the recipe. Do NOT include the html title at the top of the recipe. Make sure to follow the user instructions. Please sign the recipe with 'Shecodes AI' inside a <strong> element at the bottom of the recipe";
  let prompt = `User instructions: Generate a recipe about ${promptInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a tasty recipe for ${promptInput.value} give me a second...</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let poemFormElement = document.querySelector("#recipe-generator-form");
poemFormElement.addEventListener("submit", generateRecipe);
