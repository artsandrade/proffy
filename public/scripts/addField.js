//Procurar botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar ação
function cloneField(){

    //Duplicar campos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    
    const fields = newFieldContainer.querySelectorAll("input")

    fields.forEach(function(field){

        field.value=""
    })
    //Colocar campos duplicados na página
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}


