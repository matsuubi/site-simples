'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    // Alterna entre tema escuro e claro
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    // Altera o texto do botão dependendo do tema
    let classname = document.body.className;
    if (classname === "light-theme") {
        switcher.textContent = "Dark"; // Se for claro, coloca "Dark"
    } else {
        switcher.textContent = "Light"; // Se for escuro, coloca "Light"
    }
});
