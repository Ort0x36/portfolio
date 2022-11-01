const nameTitle = document.querySelector("#title");
const lName = nameTitle.innerHTML;


function writeName(nome) {
    setTimeout( () => {
    const nameL = nome.split('');
    nameTitle.innerHTML='';
    nameL.forEach( (letra, index) => {
        setTimeout(function (){
            nameTitle.innerHTML += letra;
        }, 110 * index)
    })}, 1000)
}
