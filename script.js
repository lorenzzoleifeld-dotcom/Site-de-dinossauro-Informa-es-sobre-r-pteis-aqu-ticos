const dinossauros = [
    {
    nome: "Tiranossauro Rex",
    tipo: "terrestre",
    periodo: "cretaceo"

    },
    {
    nome: "Mosassauro",
    tipo: "aquatico",
    periodo: "cretaceo-superior"
    },
    {
    nome: "Ictiossauro",
    tipo: "aquatico",
    periodo: "triassico"
    },
    {
    nome: "Velociraptor",
    tipo: "terrestre",
    periodo: "cretaceo-superior"
    },
    {
    nome: "Pterodactilo",
    tipo: "aereo",
    periodo: "jurassico-superior"
    }
]
const input = document.querySelector(".input")
const botao = document.querySelector("#btn")
const resultado = document.querySelector(".resultados")
const selectPeriodo = document.getElementById("periodo")
const selectTipo = document.getElementById("tipo")
botao.addEventListener("click", () => {
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
   
    if(dinossauroEncontrado.length > 0) {
    const dinossaurosPassados = dinossauroEncontrado.map(dino => `${dino.nome} - ${dino.tipo} - ${dino.periodo} `)
    resultado.textContent = dinossaurosPassados.join(", ")
    } else {
        resultado.textContent = "Dinossauro não encontrado."
    }
    
  

})
