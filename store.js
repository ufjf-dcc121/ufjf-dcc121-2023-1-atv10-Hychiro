const store =  {estado: [0,1,2,3]};

export function addVal(valor){
    store.estado.push(valor);
}
export function getItems() {
    return [...store.estado];
}
export function remover() {
    store.estado.pop()
}