const parametros = new URLSearchParams(window.location.search)
const id = parametros.get("id")
const dinossauros = [
    {
    id: "trex",
    nome: "Tiranossauro Rex",
    tipo: "terrestre",
    periodo: "cretáceo",
    altura: "3,5 metros",
    comprimento: "12 metros",
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
    periodo: "cretáceo-superior",
    genero: "Mosasaurus",
    familia: "Mosasauridae",
    dieta: "carnívoro",
    ovos: "0",
    peso: "15T",
    altura: "2 metros",
    comprimento: "15 metros",
    imagem: "imgs/mosassauro.png"
    },
    {
    id: "ictiossauro",
    nome: "Ictiossauro",
    tipo: "aquatico",
    periodo: "triássico",
    genero: "Ichthyosaurus",
    familia: "Ichthyosauridae",
    dieta: "carnívoro",
    ovos: "0",
    peso: "100kg",
    altura: "0,8 centímetros",
    comprimento: "3 metros",
    imagem: "imgs/ictiossauro.png"
    },
    {
    id: "velociraptor",
    nome: "Velociraptor",
    tipo: "terrestre",
    periodo: "cretáceo-superior",
    genero: "Velociraptor",
    familia: "Dromaeosauridae",
    dieta: "carnívoro",
    ovos: "5",
    peso: "20kg",
    altura: "0.6 metros",
    comprimento: "2 metros",
    imagem: "imgs/velociraptor.png"
    },
    {
    id: "pterodactilo",
    nome: "Pterodactilo",
    tipo: "aereo",
    periodo: "jurássico-superior",
    genero: "Pterodactylus",
    familia: "Pterodactylidae",
    dieta: "carnívoro",
    ovos: "2",
    peso: "3kg",
    altura: "0,5 metros",
    comprimento: "1 metro",
    imagem: "imgs/pterodactilo.png"
    },
    {
    id: "gigantossauro",
    nome: "Gigantossauro",
    tipo: "terrestre",
    periodo: "cretáceo-superior",
    genero: "Gigantosaurus",
    familia: "Carcharodontosauridae",
    dieta: "carnívoro",
    ovos: "20",
    peso: "8T",
    altura: "4 metros",
    comprimento: "13 metros",
    imagem: "imgs/gigantossauro.png"
    },
    {
    id: "anquilossauro",
    nome: "Anquilossauro",
    tipo: "terrestre",
    periodo: "cretáceo",
    genero: "Ankylosaurus",
    familia: "Ankylosauridae",
    dieta: "herbívoro",
    ovos: "2",
    peso: "8T",
    altura: "2 metros",
    comprimento: "10 metros",
    imagem: "imgs/anquilossauro.png"
    },
    {
    id: "plesiossauro",
    nome: "Plesiossauro",
    tipo: "aquatico",
    periodo: "cretáceo",
    genero: "Plesiosaurus",
    familia: "Plesiosauridae",
    dieta: "carnívoro",
    ovos: "0",
    peso: "700kg",
    altura: "1 metro",
    comprimento: "5 metros",
    imagem: "imgs/plesiossauro2.png"
    }
]

const dinoEncontrado = dinossauros.find(dino => dino.id === id)
console.log(dinoEncontrado)
const nomeDino = document.getElementById("nome-dino")
const imagemDino = document.getElementById("imagem-dino")
const eraDino = document.getElementById("era-dino")
const familiaDino = document.getElementById("familia-dino")
const comprimentoDino = document.getElementById("comprimento-dino")
const generoDino = document.getElementById("genero-dino")
const ovosDino = document.getElementById("ovos-dino")
const alturaDino = document.getElementById("altura-dino")
const pesoDino = document.getElementById("peso-dino")
const dietaDino = document.getElementById("dieta-dino")
familiaDino.textContent =  dinoEncontrado.familia
nomeDino.textContent = dinoEncontrado.nome;
imagemDino.src = dinoEncontrado.imagem;
dietaDino.textContent = dinoEncontrado.dieta;
alturaDino.textContent = dinoEncontrado.altura;
pesoDino.textContent = dinoEncontrado.peso;
generoDino.textContent = dinoEncontrado.genero;
ovosDino.textContent = dinoEncontrado.ovos;
comprimentoDino.textContent = dinoEncontrado.comprimento;
eraDino.textContent = dinoEncontrado.periodo.replaceAll("-", " ")
