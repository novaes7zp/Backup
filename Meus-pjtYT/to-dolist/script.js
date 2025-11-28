
function adcTarefa() {

    let inputTarefa = document.getElementById('tarefaid').value

    let li = document.createElement('li')

    li.innerHTML = `${inputTarefa} <span onclick="btndelete(this)"><i class="fa-solid fa-trash"></i></span>`

    document.getElementById('listas').appendChild(li)

}

function btndelete(li) {

    li.parentElement.remove()
}