/* script.js */
let selectedIngredients = [];

function selectIngredient(ingredient) {
  // Toggle selection: if ingredient is selected, deselect it, and vice versa
  if (selectedIngredients.includes(ingredient)) {
    selectedIngredients = selectedIngredients.filter(item => item !== ingredient);
  } else {
    selectedIngredients.push(ingredient);
  }

  // Update the input field to display selected ingredients
  document.getElementById('selected-ingredients').value = selectedIngredients.join(', ');

  // Toggle the 'selected' class to style the card
  const card = document.querySelector(`.ingredient-card:contains(${ingredient})`);
  card.classList.toggle('selected');
}

document.getElementById('recipe-search-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const ingredients = selectedIngredients.join(',');
  window.location.href = `recipes2.html?ingredients=${ingredients}`;
});
const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(category => {
    const categoryName = category.querySelector('h3');
    const ingredients = category.querySelector('.category-ingredients');

    categoryName.addEventListener('click', () => {
        if (ingredients.style.display === 'none' || ingredients.style.display === '') {
            ingredients.style.display = 'block';
        } else {
            ingredients.style.display = 'none';
        }
    });
});