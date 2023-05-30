import store from "./store.js";

const formulario = document.forms.entrada;

formulario.addEventListener('submit', envia);
atualiza();
function envia(evento) {
    evento.preventDefault();
    console.log('forms enviado');
    store.estado++;
    atualiza();
}
function atualiza() {
    const ol = document.querySelector('ol');
    ol.innerHTML = `<li>${store.estado}</li>`;
}