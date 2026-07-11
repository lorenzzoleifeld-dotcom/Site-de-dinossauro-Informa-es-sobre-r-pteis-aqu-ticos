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
    },
    {
    id: "seymouria",
    nome: "Seymouria",
    tipo: "aquatico",
    periodo: "permiano",
    genero: "Seymouria",
    familia: "Seymouriidae",
    dieta: "Onívoro",
    ovos: "200",
    peso: "1,4 kg",
    altura: "0,2 metros",
    comprimento: "0,6 metros",
    imagem: "imgs/seymouria.jpg",
    descriçao: "Foi um animal que viveu no período Permiano, na América do Norte e na Europa, tinha uma cabeça triangular, típico dos anfíbios, porém também tinha 4 patas, que serviam para o deixar em pé, mas como um animal pode ser anfíbio e terrestre ao mesmo tempo? Bom, a resposta para isso é que, em sua infância, era uma pequena larva aquática, e quando adulto, ganhava pernas fortes para se manter no chão, se alimentava principalmente de plantas trituradas, e mastigava o alimento com seus dentes afiados.",
    descoberta: "Seu primeiro fóssil foi achado no ano de 1904, na cidade de Seymour, no Condado de Baylor, no estado do Texas, nos EUA, tem uma caracterísitca bem intrigante, que, quando pequenp, era aquático, e quando crescia, 'desbloqueava' uma nova habilidade, andar em terra firme, também há fósseis encontrados na Europa, porém, principalmente nos EUA.",
    paleoecologia: "Estuda principalmente sua locomoção e seus sentidos, onde estuda a sua estrutura do crânio e do ouvido, e também seus membros, também estuda seu habitat, reprodução, seu papel na cadeia alimentar, seu ciclo de vida, sua distribuição, e sua adaptação terrestre, tinha cerca de 60 cm de comprimento, sendo praticamente do tamanho de uma palma da mão.",
    badge: "Tetrapóde Terrestre"
    },
    {
    id: "archelon",
    nome: "Arquelônio",
    tipo: "aquatico",
    periodo: "cretáceo superior",
    genero: "Archelon",
    familia: "Protostegidae",
    dieta: "Carnívoro",
    ovos: "60",
    peso: "3T",
    altura: "1 metro",
    comprimento: "4,6 metros",
    imagem: "imgs/arquelônio.jpg",
    descriçao: "Foi uma tartaruga marinha gigante, podendo medir até 4m de comprimento, e 1,6 metros de altura, viveu no final do período Cretáceo Superior, e, para botar ovos, ia até a terra firme e cavava um ninho na areia, onde colocava seus ovos. Diferente das tartarugas atuais, não conseguia recolher seus membros, sendo um alvo facíl para Mosassauros famintos, usava seus mebros para se locomover suavemente sobre as águas, e tinha uma carapaça gigante, medindo até 2 metros de comprimento",
    descoberta: "Foi nomeada com o nome 'Archelon' pela primeira vez em 1895, pelo paleontólogo norte-americano George Reber Wieland, porém, os fósseis reais dele foram encontrados na formação Pierre Shale, em Dakota do Sul, EUA, começou a ser estudado e descrito no ano de 1896. Outros fóssies também foram encontrados na mesma região na década de 1970, tinha um esqueleto gigante, e podia medir até 4,6 metros de comprimento.",
    paleoecologia: "Estuda principalmente seu habitat, que estudava sua estrutura óssea e onde habitou, sua dieta e alimentação, que estuda suas mandíbulas, seus bicos e suas presas, suas adaptações físicas, que estuda sua carapaça, suas nadadeiras e sua cauda, e seu comportamento e sua ecologia, que estuda seu tamanho colossal e seu ciclo de vida. ",
    badge: "Tartaruga Marinha Gigante"
    },
    {
    id: "gliptodon",
    nome: "Gliptodonte",
    tipo: "terrestre",
    periodo: "Neógeno",
    genero: "Gliptodon",
    familia: "Chlamyphoridae",
    dieta: "Herbívoro",
    ovos: "0",
    peso: "2T",
    altura: "1,5 metros",
    comprimento: "3 metros",
    imagem: "imgs/gliptodonte.jpg",
    descriçao: "Foi um tetrapóde terrestre, podendo medir até 3 metros de comprimento, diferente de outros dinossauros, era mamífero, então, não botava ovos, tinha uma carapaça enorme, podendo medir até 2 metros de comprimento, sendo formada por placas ósseas camadas osteodermes, foi extinto recentemente, há cerca de 10 mil anos atrás, viveu no período Neógeno até o Quaternário, sua carapaça podia servir de abrigo para humanos, e seu nome significa 'dentes esculpidos'.",
    descoberta: "Há registros de vários fósseis dele na América do Sul, sendo encontrado principalmente na região do Brasil, Uruguai e Argentina, no Brasil, foi encontrado fósseis dele em Alegrete, no Rio Grande do Sul, no Urugiai, nas regiões de Soriano e Carmelo, com fósseis de cerca de 10 mil anos atrás, e na Argentina na região Metropolitana de Buenos Aires, com fósseis de até 21 mil anos atrás.",
    paleoecologia: "Estuda principalmente características importantes dele, como sua Alimentação e Dentição, que estudava sua dieta e seus dentes, seu Habitat e sua Distribuição, que estudava seu bioma e seu clima, sua Anatomia e Defesa, que estudava sua calda com clava e sua carapaça, e sua Interação com a Megafauna e sua Extinção, que estudava principalmente a sua extinção e suas evidências.",
    badge: "Tetrapóde Terrestre"
    },
     {
    id: "psitacossauro",
    nome: "Psitacossauro",
    tipo: "Terrestre",
    periodo: "Cretáceo Inferior",
    genero: "Psittacosaurus",
    familia: "Psittacosauridae",
    dieta: "Herbívoro",
    ovos: "25",
    peso: "50kg",
    altura: "0,75 metros",
    comprimento: "2 metros",
    imagem: "imgs/psitacossauro.jpg",
    descriçao: "Foi um dinossauro que viveu no período Cretáceo Inferior, na região da Ásia, há cerca de 100 milhões de anos atrás, seu nome significava 'lagarto-papagaio', inspirado em seu bico curvado, perfeito para cortar plantas. Tinha uma pedra em seu estômago chamada Gastrólito, que ajudava em sua digestão e a cortar plantas mais resistentes, tinha penas parecidas com a de sua parte superior de sua cauda, que provavelmente servia para atrair parceiros, e seu nome científico era Psittacosaurus.",
    descoberta: "Seus fósseis foram encontrados principalmente na região da Ásia, nos países da Mongólia e China, ele é um dos dinossauros mais compreendidos pela ciência moderna, que revolucionou a paleontologia moderna e mudou o que sabemos sobre a aparência e a biologia desses animais, principalmente por seus tecidos moles, evolução das pernas, comportamento social, pela sua anatomia intacta etc.",
    paleoecologia: "A sua paleoecologia estuda principalmente seu Habitat e Dieta, que estuda seu ambiente, sua alimentação e sua digestão, seu Comportamento e sua Reprodução, que estuda sua vida em grupo, sua adaptação e sua locomoção, sua Anatomia, sua Camuflagem e Pele, que estuda principalmente seu Tegumento e sua Camuflagem, que graças a isso, sabe-se que ele era coberto de escamas comuns.",
    badge: "Tipo: Dinossauro",
    alt: "Psitacossauro"
    },
    {
    id: "titanoboa",
    nome: "Titanoboa",
    tipo: "aquatica",
    periodo: "Paleógeno",
    genero: "Titanoboa",
    familia: "Boidae",
    dieta: "Carnívora",
    ovos: "0",
    peso: "1T",
    altura: "1 metro",
    comprimento: "13 metros",
    imagem: "imgs/titanoboa.jpg",
    descriçao: "Foi uma cobra gigante, podendo medir até 13 metros de comprimento, tinha 3 vezes mais vértebras do que as cobras atuias, diferente das cobras de hoje em dia, não tinha veneno, porém, invés de matar suas presas aplicando veneno, se enrolava nelas, quebrando seus ossos. Viveu no período Paleógeno, na América do Sul, convivia com tartarugas e crocodilos gigantes, que podiam fazer parte de sua refeição diária, e seu nome científico é Titanoboa Cerrejonensis.",
    descoberta: "Seus primeiros fósseis foram encontrados no século XXI, no ano de 2007, por uma equipe internacional de cientistas na mina de carvão em céu aberto de Cerrejón, em La Guajira, na Colômbia, por isso seu nome científico é Titanoboa Cerrejonensis, inspirado na cidade onde foi descoberta, viveu nos pântanos da América do Sul, com temperaturas que podiam variar entre 30 e 34 graus, que facilitava a distribuição do calor corporal, tendo sangue frio.",
    paleoecologia: "Sua paleoecologia estuda principalmente sua Ecologia e Habitat, que estuda a temperatura média da região onde vivia, que animais comia, e sua dieta e alimentação, que é um ponto bem interessante, porque, na sua época, no período Paleógeno, estava no topo da cadeia alimentar, e, invés de usar veneno, esmagava suas presas, a imobilizando, se enrolando-a e destruindo seus ossos, e passava a maior parte do tempo na água para emboscar suas presas.",
    badge: "Tipo: Serpente Gigante",
    alt: "Titanoboa"
    },
    {
    id: "deinocheirus",
    nome: "Deinocheirus",
    tipo: "terrestre",
    periodo: "Cretáceo Superior",
    genero: "Deinocheirus",
    familia: "Deinocheiridae",
    dieta: "Onívoro",
    ovos: "20",
    peso: "7T",
    altura: "4 metros",
    comprimento: "11 metros",
    imagem: "imgs/deinocheirus.jpg",
    descriçao: "Foi um dinossauro que viveu no período Cretáceo, na Ásia, na região onde é a atual Mongólia, tinha uma corcova parecida com a dos camelos, e podia andar tanto em 2 e tanto em 4 patas. Ele era onívoro, o que significa que se alimentava de plantas e pequenos répteis, igual os Psitacossauros, tinham uma pedra chamada Gastrólito em seu estômago, que ajudava a cortar plantas mais resistentes, tinha 1 par de braços com garras afiadas, que serviam para cortar plantas =, para se defender de outros animais e para capturar outros répteis, seu nome científico é Deinocheirus Mirificus, e seu nome significa 'mão terrível'.",
    descoberta: "Os seus primeiros fósseis foram encontrados no século XX, no ano de 1965, no Deserto de Gobi, no País da atual Mongólia, por uma pessoa chamada Zofia Kielan-Jaworowska. Por até 50 anos, a única informação que os cientistas sabiam de Deinocheirus era que tinha um par de braços com garras afiadas, mas foi em 2006 que descobriram um esqueleto completo dele, descobrindo que era onívoro, tinha um Gastrólito em seu estômago, e que media até 11 metros de comprimento.",
    paleoecologia: "Estuda seu ambiente pantanoso e arborizado, que ditava um estilo de vida semiaquático e onívoro, onde era altamente especializado, também estuda seu Nicho Ecológico e Dieta Onívora, onde estuda seu focinho largo e achatado, parecido com o de um pato, suas Adaptações Físicas e Compartilhamento de Habitat, qque estuda seu tamanho colossal sem sobrecarregar seu peso, e sua Pressão Predatória, que estuda que o Deinocheirus não estava no topo da sua cadeia alimentar de sua região.",
    badge: "Tipo: Dinossauro Terópode",
    alt: "Deinocheirus"
    },

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
    observer.observe(card)
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
