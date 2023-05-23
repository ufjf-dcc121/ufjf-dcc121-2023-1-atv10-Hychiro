const formulario = document.forms.entrada;
formulario.addEventListener('submit', envia);

function envia(evento) {
    evento.preventDefault();
    console.log('forms enviado');
}
