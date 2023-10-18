const listaItems = [
    {
        id:1,
        nome:"daniel"
    },
    {
        id:2,
        nome:"joao"
    },
    {
        id:3,
        nome:"maria"
    }
]

function listarItens(){
    let armazenaItens = document.querySelector("#listaItens")  //ul
    armazenaItens.innerHTML = "" //zera

    for(let i=0; i<listaItems.length;i++){  //roda cada objeto da array
        const item = listaItems[i] 
        const elemento = document.createElement("li")
        elemento.className = "list-group-item list-group-item-info text-center m-1"
        elemento.textContent = item.nome
        armazenaItens.appendChild(elemento)
    }
}

function criarItem(){
    const item = document.querySelector("#nomeItem")
    let armazenaItens = document.querySelector("#listaItens")  //ul
        const elemento = document.createElement("li")
        elemento.className = "list-group-item list-group-item-info text-center m-1"
        elemento.textContent = item.value
        armazenaItens.appendChild(elemento)
}

listarItens()