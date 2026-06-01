const dinossauros = [
    {
    nome: "Tiranossauro Rex",
    tipo: "terrestre",
    periodo: "cretáceo"

    },
    {
    nome: "Mosassauro",
    tipo: "aquatico",
    periodo: "cretaceo superior"
    },
    {
    nome: "Ictiossauro",
    tipo: "aquatico",
    periodo: "triassico"
    },
    {
    nome: "Velociraptor",
    tipo: "terrestre",
    periodo: "cretaceo superior"
    },
    {
    nome: "pterodactilo",
    tipo: "aereo",
    periodo: "jurassico superior"
    }
]
const input = document.querySelector(".input")
const botao = document.querySelector("#btn")
const resultado = document.querySelector(".resultados")
botao.addEventListener("click", () => {
    const busca = input.value.trim().toLowerCase()
    const dinossauroEncontrado = dinossauros.find(dino => dino.nome.toLowerCase().includes(busca))
    if(dinossauroEncontrado) {
        resultado.textContent = `${dinossauroEncontrado.nome}`
    } else {
        resultado.textContent = "Dinossauro não encontrado."
    }
})
