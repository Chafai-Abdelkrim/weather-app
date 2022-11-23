import './styles.css';

const form = document.getElementById('search');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.querySelector('search-input');
    getWeather(userInput.value);
    userInput.value = '';
});
