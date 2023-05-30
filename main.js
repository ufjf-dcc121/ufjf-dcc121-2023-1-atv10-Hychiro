import {estado} from "./store.js";

const formulario = document.forms.entrada;

formulario.addEventListener('submit', envia);
atualiza();
function envia(evento) {
    evento.preventDefault();
    console.log('forms enviado');
    estado++;
    atualiza();
}
function atualiza() {
    const ol = document.querySelector('ol');
    ol.innerHTML = `<li>${estado}</li>`;
}