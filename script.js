const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
    let results = fruit.filter(item => item.toLowerCase().includes(str.toLowerCase()));
    return results;
}

function searchHandler(e) {
    let inputVal = e.target.value;
    if (inputVal === '') {
        clearSuggestions();
    } else {
        let results = search(inputVal);
        showSuggestions(results, inputVal);
    }
}

function clearSuggestions() {
    suggestions.innerHTML = '';
    suggestions.classList.remove('has-suggestions');
}

function showSuggestions(results, inputVal) {
    suggestions.innerHTML = ''; // Clear previous suggestions
    results.forEach(result => {
        let li = document.createElement('li');
        li.textContent = result;
        suggestions.appendChild(li);
    });
    suggestions.classList.toggle('has-suggestions', results.length > 0);
}

function useSuggestion(e) {
    if (e.target.tagName === 'LI') {
        input.value = e.target.textContent;
        clearSuggestions();
    }
}

input.addEventListener('input', searchHandler); // Updates as user types
suggestions.addEventListener('click', useSuggestion); // Acts as button
