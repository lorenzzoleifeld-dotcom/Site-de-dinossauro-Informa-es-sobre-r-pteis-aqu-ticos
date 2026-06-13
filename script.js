const dinossauros = [
    {
    nome: "Tiranossauro Rex",
    tipo: "terrestre",
    periodo: "cretaceo",
    imagem: "imgs/rex.png"

    },
    {
    nome: "Mosassauro",
    tipo: "aquatico",
    periodo: "cretaceo-superior",
    imagem: "imgs/mosassauro.png"
    },
    {
    nome: "Ictiossauro",
    tipo: "aquatico",
    periodo: "triassico",
    imagem: "imgs/ictiossauro.png"
    },
    {
    nome: "Velociraptor",
    tipo: "terrestre",
    periodo: "cretaceo-superior",
    imagem: "imgs/velociraptor.png"
    },
    {
    nome: "Pterodactilo",
    tipo: "aereo",
    periodo: "jurassico-superior",
    imagem: "imgs/pterodactilo.png"
    },
    {
    nome: "Gigantossauro",
    tipo: "terrestre",
    periodo: "cretaceo-superior",
    imagem: "imgs/gigantossauro.png"
    },
    {
    nome: "Anquilossauro",
    tipo: "terrestre",
    periodo: "cretaceo",
    imagem: "imgs/anquilossauro.png"
    },
    {
    nome: "Plesiossauro",
    tipo: "aquatico",
    periodo: "cretaceo",
    imagem: "imgs/plesiossauro2.png"
    }
]
const mensagem = document.querySelector(".sem-resultados")
const cards = document.querySelector(".cards")
const input = document.querySelector(".input")
const botao = document.querySelector("#btn")
const selectPeriodo = document.getElementById("periodo")
const selectTipo = document.getElementById("tipo")
function renderizarCards(dinossauros) {
    cards.innerHTML = ""
dinossauros.forEach((dino) => {

    const card = document.createElement("div")
    const nome = document.createElement("h3")
    const imagem = document.createElement("img")
    const divImagem = document.createElement("div")
    divImagem.classList.add("imagem")
    card.classList.add("card")
    nome.classList.add("nome")
    imagem.classList.add("imagem")
    imagem.src = dino.imagem;
    nome.textContent = dino.nome;
    card.appendChild(imagem)
    card.appendChild(nome)
    cards.appendChild(card)
})}
renderizarCards(dinossauros)
function pesquisar() {
    const periodoSelecionado = selectPeriodo.value
    const tipoSelecionado = selectTipo.value
    const busca = input.value.trim().toLowerCase()
    const dinossauroEncontrado = dinossauros.filter(dino => dino.nome.toLowerCase().includes(busca) && (
        periodoSelecionado === "todos" ||
        dino.periodo === periodoSelecionado
    )
    &&
    (
        tipoSelecionado === "todos" ||
        dino.tipo === tipoSelecionado
    )
) 
    console.log("Busca:", busca)
    console.log("Resultado:", dinossauroEncontrado.length)
    if(dinossauroEncontrado.length > 0) {
    mensagem.style.display = "none"
    cards.style.display = "grid"
    renderizarCards(dinossauroEncontrado)
    } else {
        cards.style.display = "none"
        mensagem.style.display = "block"
        
    }
    
}
input.addEventListener("keydown", (event) => {
   if(event.key === "Enter") {
    pesquisar()
   }
})



botao.addEventListener("click", () => {
    pesquisar()
})
