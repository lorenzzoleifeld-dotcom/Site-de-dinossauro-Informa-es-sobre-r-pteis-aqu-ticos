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
    {
    id: "meganeura",
    nome: "Meganeura",
    tipo: "aereo",
    periodo: "Carbonífero",
    genero: "Meganeura",
    familia: "Meganeuridae",
    dieta: "Carnívora",
    ovos: "200",
    peso: "0,3 kg",
    altura: "0,75 metros",
    comprimento: "0,45 metros",
    imagem: "imgs/meganeura.webp",
    descriçao: "Foi um inseto voador gigante, e, somente sua envergadura podia medir até 75cm, viveu no período Carbonífero, há cerca de 300 milhões de anos atrás, na época dos insetos gigantes, possuia espinhos especiais em sua pata, que serviam para imobilizar as suas presas. Era tão grande que podia ter o tamanho de um falcão, comia outros insetos, o que significava que era carnívora, seu nome significa 'nervos grandes', por conta de ter muitos nervos, seu nome científico é Meganeura,  viveu nas regiões da Europa e da América do Norte, e era tão gigante que podia medir do tamanho de um falcão.",
    decoberta: "Seu primeiro fóssil foi encontrado no século XIX, no ano de 1880, nas minas de carvão em Commentry, na região da atual França. Seus fósseis foram encontrados originalmente pelo palentólogo francês Charles Brongniart, que descreveu e nomeou o inseto voador gigante no ano de 1885. Outros fósseis seus foram encontrados um século depois, no ano de 1979, na região de Derbyshare, no país do Reino Unido, seu fóssil original está no Museu Nacional de História Natural de Paris, na França.",
    paleoecologia: "Sua paleoecologia estuda principalmente a área de seu Habitat e Clima, que estuda principalmente o ambiente onde vivia e sua Influência de Oxigênio, tendo um tamanho enorme, seu Nicho ecológico e Dieta, que estuda que era um Superpredador voraz e ágil, que outros insetos comiam e sua caça a outras insetos, e sua Competição e sua Extinção, que estuda a sua Ausência de rivais aéreos e como foi extinguida, o que significa que, nos ares, não tinha nenhum rival a seu nível.",
    badge: "Tipo: Inseto Voador Gigante",
    alt: "Meganeura"
    },
    {
    id: "helicoprion",
    nome: "Helicoprion",
    tipo: "aquatico",
    periodo: "Permiano",
    genero: "Helicoprion",
    familia: "Helicoprionidae",
    dieta: "Carnívoro",
    ovos: "2",
    peso: "350kg",
    altura: "2 metros",
    comprimento: "8 metros",
    imagem: "imgs/helicoprion.jpg",
    descriçao: "Foi um gênero de peixe que viveu no período Permiano, em todo o mundo, ele é conhecido principalmente pela sua espiral dentária, que podem conter vários dentes, os dentes mais antigos e menores da espiral vão para o centro dela. QUando cientistas acharam os primeiros fósseis dele não acharam onde sua espiral dentária podia ficar, acharam que era na sua cauda, nas suas costas, e até no seu focinho, porém, fósseis mais recentes indicam que essa espiral dentária ficava em sua mandíbula, ela servia para triturar e prender peixes em sua boca, a fechando e triturando eles, seu nome científico é Helicoprion, e como tinha ossos cartilaginosos, seus fósseis se decompõem rapidamente.",
    descoberta: "Os primeiros fósseis dele foram encontrados no ano de 1899 nos Montes Urais, na região da atual Rússia, pelo paleontólogo Andrzej P. Karpinski, inicialmente, os cientistas acharam que sua espiral dentária era um amonite, e nao sabiam onde ficava, porém, somente um século depois que paleontólogos descobriram que se tratava se uma espiral dentária e que se localizava na parte inferior de sua mandíbula, acredita-se que podia medir entre 10 a 12 metros de comprimento, e que viveu a cerca de 300 milhões de anos atrás.",
    paleoecologia: "Sua paleoecologia revela um predador ápice dos oceanos do final do período Paleozoico, fazendo parte de uma das famílias mais semelhantes aos tubarões atuais, onde estuda principalmente sua Ecologia e Alimentação, que estudava seu mecanismo de corte e a posição de seus dentes, seu Tamanho e sua Anatomia,que estuda seu tamanho médio, e sua Adaptação e sua Extinção, que estuda principalmente que foi um dos poucos peixes que sobreviveram a extinção em massa do período Permiano-Triássico (uma das maiores extinções em massa que o planeta Terra já presenciou).",
    badge: "Tipo: Peixe Gigante",
    alt: "Helicoprion"
    },
    {
    id: "patagotitan",
    nome: "Patagotitan",
    tipo: "terrestre",
    periodo: "Cretáceo Superior",
    genero: "Patagotitan",
    familia: "Titanosauridae",
    dieta: "Herbívoro",
    ovos: "30",
    peso: "60T",
    altura: "8 metros",
    comprimento: "35 metros",
    imagem: "imgs/patagotitan.jpg",
    descriçao: "Foi um dinossauro gigante, podendo medir até 38 metros de comprimento e sendo até 2,5 vezes mais comprido do que o Tiranossauro Rex, fazia parte da familia dos Titanosauros, e, apesar do seu tamanho, seus ovos tinham tamanhos dos de avestruzes, tendo aproximadante 15 cm de altura, o que significa que os seus filhotes precisavam crescer muito. Usava seu comprido pescoço para pegar plantas no alto de coníferas, viveu na região da atual América do Sul, seu nome científico é Patagotitan Mayorus, apenas seu fêmur podia medir até 2,5 metros de altura, e pesar até 550 kg, e seu nome significava 'Titã da Patagônia'.",
    descoberta: "Foi descoberto por acaso no século XXI, no ano de 2010, quando um trabalhador rural chamado Aurelio Hernández avistou a ponta de um osso gigante saindo do chão na Patagônia argentina, ele achou na fazenda La Fecha, na província de Chubut, próximo a Trelew, quando tropeçou num fóssil, as escavações em massa aconteceram nos anos de 2013-2015, sob a liderança dos palentólogos José Luis Carballido e Diego Pol, eles escavaram o local e descobriram que não era apenas um fóssil, e sim um real cemitério pré-histórico, contendo mais de 200 fósseis, e foi no ano de 2017 que ele foi anunciado e oficialmente batizado, com o nome de Patagotitan Mayorus.",
    paleoecologia: "Sua paleoecologia revela que ele viveu em uma Patagônia verdejante, quente e úmida, marcada por grandes planícies de inundação, também estuda seu Clima e Geografia, que estuda seu ambiente, sua atividade geológica e seu clima, sua Flora (alimento), que estuda suas Florestas de Coníferas, suas Plantas primitivas e a Inovação Evolutiva, sua Fauna Coexistente e seus Predadores, que estuda outros herbívoros e a ameaça dos predadores, e sua Dinâmica Populacional e adultos 'Invencíveis', que estuda eles adultos e eles filhotes, que revela que eles adultos e eles filhotes tinham uma grande diferença, e que precisavam crescer muito por conta do tamanho de seus ovos."
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
