const parametros = new URLSearchParams(window.location.search)
const id = parametros.get("id")
const dinossauros = [
    {
    id: "trex",
    nome: "Tiranossauro Rex",
    tipo: "terrestre",
    periodo: "cretaceo",
    altura: "3,5m",
    comprimento: "12m",
    ovos: "20",
    familia: "Tyrannosauridae",
    peso: "9T",
    dieta: "presas vivas",
    genero: "Tyrannosaurus",
    imagem: "imgs/rex.png",
    pagina: "dino.html"
    },
    {
    id: "mosassauro",
    nome: "Mosassauro",
    tipo: "aquatico",
    periodo: "cretaceo-superior",
    genero: "Mosasaurus",
    familia: "Mosasauridae",
    dieta: "carnivoro",
    ovos: "0",
    peso: "15T",
    altura: "2m",
    comprimento: "15m",
    imagem: "imgs/mosassauro.png"
    },
    {
    id: "ictiossauro",
    nome: "Ictiossauro",
    tipo: "aquatico",
    periodo: "triassico",
    genero: "Ichthyosaurus",
    familia: "Ichthyosauridae",
    dieta: "carnivoro",
    ovos: "0",
    peso: "100kg",
    altura: "0,8cm",
    comprimento: "3m",
    imagem: "imgs/ictiossauro.png"
    },
    {
    id: "velociraptor",
    nome: "Velociraptor",
    tipo: "terrestre",
    periodo: "cretaceo-superior",
    genero: "Velociraptor",
    familia: "Dromaeosauridae",
    dieta: "carnivoro",
    ovos: "5",
    peso: "20kg",
    altura: "0.6m",
    comprimento: "2m",
    imagem: "imgs/velociraptor.png"
    },
    {
    id: "pterodactilo",
    nome: "Pterodactilo",
    tipo: "aereo",
    periodo: "jurassico-superior",
    genero: "Pterodactylus",
    familia: "Pterodactylidae",
    dieta: "carnivoro",
    ovos: "2",
    peso: "3kg",
    altura: "0,5m",
    comprimento: "1m",
    imagem: "imgs/pterodactilo.png"
    },
    {
    id: "gigantossauro",
    nome: "Gigantossauro",
    tipo: "terrestre",
    periodo: "cretaceo-superior",
    genero: "Gigantosaurus",
    familia: "Carcharodontosauridae",
    dieta: "carnivoro",
    ovos: "20",
    peso: "8T",
    altura: "4m",
    comprimento: "13m",
    imagem: "imgs/gigantossauro.png"
    },
    {
    id: "anquilossauro",
    nome: "Anquilossauro",
    tipo: "terrestre",
    periodo: "cretaceo",
    genero: "Ankylosaurus",
    familia: "Ankylosauridae",
    dieta: "herbívoro",
    ovos: "2",
    peso: "8T",
    altura: "2m",
    comprimento: "10m",
    imagem: "imgs/anquilossauro.png"
    },
    {
    id: "plesiossauro",
    nome: "Plesiossauro",
    tipo: "aquatico",
    periodo: "cretaceo",
    genero: "Plesiosaurus",
    familia: "Plesiosauridae",
    dieta: "carnivoro",
    ovos: "0",
    peso: "700kg",
    altura: "1m",
    comprimento: "5m",
    imagem: "imgs/plesiossauro2.png"
    }
]
const card = document.querySelectorAll(".card-dino")
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show")
        }
    })
})
card.forEach(card => {
    observer.observe(card);
})

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
    card.addEventListener("click", () => {
        window.location.href = `dino.html?id=${dino.id}`
    })
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
input.addEventListener("input", () => {
    pesquisar()
})



botao.addEventListener("click", () => {
    pesquisar()
})
