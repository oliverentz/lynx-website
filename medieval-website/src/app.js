const header = require('./components/header');

function init() {
    const app = document.getElementById('app');
    app.appendChild(header());
}

document.addEventListener('DOMContentLoaded', init);