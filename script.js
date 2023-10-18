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
        
        // creates delete button
        const button = document.createElement("button")
        button.innerHTML = "A"
        button.className = "btn btn-danger btn-sm rounded-0"
        
        //appends
        armazenaItens.appendChild(elemento)
        elemento.appendChild(button)
    }
}

function criarItem(){
    const item = document.querySelector("#nomeItem")
    let armazenaItens = document.querySelector("#listaItens")  //ul
        const elemento = document.createElement("li")
        elemento.className = "list-group-item list-group-item-info text-center m-1"
        elemento.textContent = item.value
        
        //creates button
        const button = document.createElement("button")
        button.innerHTML = "A"
        button.className = "btn btn-danger btn-sm rounded-0"
        
        //appends
        armazenaItens.appendChild(elemento)
        elemento.appendChild(button)
}

listarItens()