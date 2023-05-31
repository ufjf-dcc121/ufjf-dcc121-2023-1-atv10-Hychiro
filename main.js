import { addVal, getItems, remover } from "./store.js";

const formulario = document.forms.entrada;

formulario.addEventListener('submit', envia);
formulario.remover.addEventListener('click', remove)
atualiza();

function remove() {
    console.log('remove clickado!');
    remover();
    atualiza();
}


function envia(evento) {
    evento.preventDefault();
    console.log('forms enviado');
    const n= formulario.valor.value;
    addVal(n);
    formulario.valor.value = "";
    formulario.valor.focus();
    atualiza();
}
function atualiza() {
    const ol = document.querySelector('ol');
    ol.innerHTML = "";

    const itens = getItems();

    for (let i = 0;i < itens.length;i++) {
        const li = document.createElement('li');
        li.textContent = itens[i];
        ol.appendChild(li);
    }
    itens.push("Boom")
}