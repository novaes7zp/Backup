
function btnadc() {
    const error = document.getElementById('erro')
    const adc = document.getElementById('inputTarefa').value

    if(adc !== "") {

        const li = document.createElement('li')

        li.innerHTML = `${adc} <span><i class="fa-solid fa-trash"></i></span>`

        document.getElementById('listas').appendChild(li)
        
        

    }else if(adc === ""){
        error.innerHTML = "Escreva sua tarefa!"
        inputTarefa.id = "erroinput"

    }
    
}