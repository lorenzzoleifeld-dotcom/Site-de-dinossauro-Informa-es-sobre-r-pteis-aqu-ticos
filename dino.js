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
    pagina: "dino.html",
    descriçao: "Foi um dos maiores carnívoros da hístoria, e um dos dinossauros mais famosos, possuia cerca de 60 dentes afiados, braços proporcionalmente pequenos, porém robustos, pesava cerca de 6 a 9 toneladas, e viveu no final do período cretáceo.",
    descoberta: "Os primeiros fósseis encontrados foram no ano de 1874, em Colorado, mas os fósseis iniciais só foram desenterrados no ano de 1902, em Wyoming, que foi nomeada 3 anos depois, pelo paleontólogo Henry Fairfield Osborn.",
    paleoecologia: "Estuda como o Trex interagia com o seu ecossistema. Vivia no antigo continente ilha de Laramidia, na América do Norte, acredita se que ele viveu entre 66 e 68 milhões de anos atrás, e que exercia forte controle populacional sobre grandes herbívoros"
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
    imagem: "imgs/mosassauro.png",
    descriçao: "Foi um dos maiores répteis marinhos do período Cretáceo Superior, medindo entre 12 e 18 metros e pesando até 15 toneladas, possuia vários dentes afiados, nadadeiras robustas, mandíbulas articuladas e corpo hidrodinâmico, seu nome significa 'lagarto do rio Mosa', em homenagem a Holanda, onde foram encontrados os primeiros fósseis.",
    descoberta: "Foi descoberto em 1764, no Monte Saint Peter, quando fragmentos de crânio foram escavados, próximo ao rio Mosa, na Holanda, e foi em 1808 que o famoso cientista Georges Cuvier analisou e determinou que se tratava de um réptil gigante extinto, que ajudou a consolidar o conceito de extinção na ciência.",
    paleoecologia: "Revela que ele dominou os oceanos no final do período Cretáceo Superior como um predador de topo, a cerca de 80 a 68 milhões de anos atrás, eles ocupavam mares rasos e quentes do planeta, com tamanhos que variavam entre 3 e 17 metros, caçavam tartarugas, grandes peixes, cefalópodes, e até Mosassauros."
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
    imagem: "imgs/velociraptor.png",
    descriçao: "Foi um dinossauro carnívoro de porte médio a pequeno que viveu no período Cretáceo Superior, ele era razoalmente pequeno e leve, pesando cerca de 20kg, tinha uma garra curva e retratíl, medindo cerca de 6,5cm, e era um predador bem rápido, podendo atingit até 64km/h.",
    descoberta: "Foi descoberto no dia 11 de agosto do ano de 1923, pelo explorador Peter Kaisen, durante uma expedição do Museu Americano de História Natural às Falésias Flamejantes, no Deserto de Gobi, na Mongólia, foi descrito oficialmente um ano depois, em 1924.",
    paleoecologia: "Estuda como ele interagia com seu habitat e outros animais, tinha uma visão binocular, e garras que serviam para agarrar e imobilizar presas de pequeno porte, fósseis de seu antebraço revela que era coberto por penas, indicando que eram animais de sangue quente e de alta atividade metabólica."
    },
    {
    id: "pterodactilo",
    nome: "Pterodáctilo",
    tipo: "aereo",
    periodo: "Jurássico-Superior",
    genero: "Pterodactylus",
    familia: "Pterodactylidae",
    dieta: "carnívoro",
    ovos: "2",
    peso: "3kg",
    altura: "0,5 metros",
    comprimento: "1 metro",
    imagem: "imgs/pterodactilo.png",
    descriçao: "Foi um réptil voador que viveu no final do período Jurássico Superior, há cerca de 150 milhões de anos atrás, contia um bico estreito, com cerca de 90 dentes, e, diferente dos filmes, sua envergadura tinha aproximadamente 0.50 centímetros a 1,50 metros",
    descoberta: "Os primeors fósseis foram encontrados no final do século XVIII(18), na região da Baviera, na Alemanha, e, no Brasil, foram descobertas mais de 40 espécies de Pterodáctilos, no Paraná e no Ceará",
    paleoecologia: "Era um réptil voador, que viveu no final do período Jurássico Superior, era especializado em caçar peixes e pequenos animais em ambientes aquáticos, provavelmente captura suas presas enquanto voava a cima da água ou quando caminhava em águas rasas na beira de lagos"
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
    imagem: "imgs/anquilossauro.png",
    descriçao: "Foi um herbívoro que viveu no final do período Cretáceo, a cerca de 68 milhões de anos atrás na América do Norte, pode atingi até 10 metros de comprimento, e é conhecido e famoso pelo seu corpo blindado e por sua poderosa maçã óssea na ponta da cauda.",
    descoberta: "Foi descoberto em 1906, na Formação Hell Creek, em Montana (EUA), por uma expedição liberada pelo paleontólogo Barnum Brown, seu nome científico é Ankylosaurus Magniventris.",
    paleoecologia: "Era um herbívoro de grande porte (6 a 9 metros), habitou a América do Norte no final do período Cretáceo, vivia em florestas, planícies de inundação, em climas quentes e úmidos e próximos aos rios."
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
const descobertaDino = document.getElementById("descoberta-dino")
const descricaoDino = document.getElementById("descricao-dino")
const paleoecologiaDino = document.getElementById("paleoecologia-dino")
familiaDino.textContent =  dinoEncontrado.familia
nomeDino.textContent = dinoEncontrado.nome;
imagemDino.src = dinoEncontrado.imagem;
dietaDino.textContent = dinoEncontrado.dieta;
alturaDino.textContent = dinoEncontrado.altura;
pesoDino.textContent = dinoEncontrado.peso;
generoDino.textContent = dinoEncontrado.genero;
ovosDino.textContent = dinoEncontrado.ovos;
comprimentoDino.textContent = dinoEncontrado.comprimento;
descobertaDino.textContent = dinoEncontrado.descoberta;
descricaoDino.textContent = dinoEncontrado.descriçao;
paleoecologiaDino.textContent = dinoEncontrado.paleoecologia;
eraDino.textContent = dinoEncontrado.periodo.replaceAll("-", " ")
