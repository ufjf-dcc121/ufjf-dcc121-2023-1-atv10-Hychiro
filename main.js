import store from "./store.js";

const formulario = document.forms.entrada;

formulario.addEventListener('submit', envia);

atualiza();

function envia(evento) {
    evento.preventDefault();
    console.log('forms enviado');
    const n= formulario.valor.value;
    store.estado.push(n);
    formulario.valor.value = "";
    formulario.valor.focus();
    atualiza();
}
function atualiza() {
    const ol = document.querySelector('ol');
    ol.innerHTML = "";
    for (let i = 0; i < store.estado.length; i++) {
        const li = document.createElement('li');
        li.textContent = store.estado[i];
        ol.appendChild(li);
    }

}