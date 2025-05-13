const button = document.getElementById('myButton');
const colorPicker = document.getElementById('colorPicker');

function saveColorPreference(color) {
  localStorage.setItem('preferredColor', color);
}

function getColorPreference() {
  return localStorage.getItem('preferredColor') || 'blue'; // default color
}

// Set initial color from localStorage
button.style.backgroundColor = getColorPreference();
colorPicker.value = getColorPreference();

button.addEventListener('click', () => {
  // Trigger bounce animation
  button.classList.add('animated-bounce');
  setTimeout(() => button.classList.remove('animated-bounce'), 500);
});

colorPicker.addEventListener('change', (e) => {
  const color = e.target.value;
  button.style.backgroundColor = color;
  saveColorPreference(color);
}); 