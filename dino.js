const parametros = new URLSearchParams(window.location.search)
const id = parametros.get("id")
const dinossauros = [
    {
    id: "trex",
    nome: "Tiranossauro Rex",
    tipo: "terrestre",
    periodo: "Cretáceo Superior",
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
    paleoecologia: "Estuda como o Trex interagia com o seu ecossistema. Vivia no antigo continente ilha de Laramidia, na América do Norte, acredita se que ele viveu entre 66 e 68 milhões de anos atrás, e que exercia forte controle populacional sobre grandes herbívoros",
    badge: "Tipo: Dinossauro",
    alt: "Tiranossauro rex"
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
    paleoecologia: "Revela que ele dominou os oceanos no final do período Cretáceo Superior como um predador de topo, a cerca de 80 a 68 milhões de anos atrás, eles ocupavam mares rasos e quentes do planeta, com tamanhos que variavam entre 3 e 17 metros, caçavam tartarugas, grandes peixes, cefalópodes, e até Mosassauros.",
    badge: "Tipo: Reptíl marinho",
    alt: "Mosassauro"
    },
    {
    id: "ictiossauro",
    nome: "Ictiossauro",
    tipo: "aquatico",
    periodo: "Triássico Superior",
    genero: "Ichthyosaurus",
    familia: "Ichthyosauridae",
    dieta: "carnívoro",
    ovos: "0",
    peso: "100kg",
    altura: "0,8 centímetros",
    comprimento: "3 metros",
    imagem: "imgs/ictiossauro.png",
    descriçao: "Foi um réptil marinho pré-histórico cujo nome significa 'lagarto peixe', surgiram no início do período Triássico e foram extintos no período Cretáceo Superior, a cerca de 250 a 90 milhões de anos atrás, seu corpo tinha formato de fuso, que reduzia drasticamente o atrito com a água, tinham olhos gigantescos, e uma nadadeira dorsal carnuda (sem ossos), possuia um focinho alongado e estreito, comparado com outros répteis daquele tempo.",
    descoberta: "Foram descobertos no início do século XIX (19), quando a humanidade sequer tinha criado a palavra 'dinossauro', foram descobertos oficialmente no ano de 1811 a 1812, nos penhascos de Lyme Regis, no país da Inglaterra, foram descobertos pelos paleontólogos Joseph Anning (de 15 anos) e Marry Anning (de apenas 12 anos), o termo 'Ichthyosaurus' (lagarto-peixe) foi criado somente 11 anos depois, no ano de 1821 pelo geólogo Charles Konig.",
    paleoecologia: "Revela como esses répteis alcançavam um sucesso evolutivo estrondoso, dominando os oceanos do mundo por mais de 150 milhões de anos, eles ocupavam o nicho ecológico que hoje pertence aos tubarões e golfinhos, funcionando como predadores de alta velocidade em mar aberto, a maioria deles tinham focinhos longos e finos, e com dentes pequenos, eles se alimentavam de lulas primitivas e amonites, tinha olhos gigantescos, que serviam para o proteger da pressão esmagadora do oceano.",
    badge: "Tipo: Reptíl marinho",
    alt: "Ictiossauro"
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
    descriçao: "Foi um dinossauro carnívoro de porte médio a pequeno que viveu no período Cretáceo Superior, ele era razoalmente pequeno e leve, pesando cerca de 20kg, tinha uma garra curva e retratíl, medindo cerca de 6.5cm, e era um predador bem rápido, podendo atingit até 64km/h.",
    descoberta: "Foi descoberto no dia 11 de agosto do ano de 1923, pelo explorador Peter Kaisen, durante uma expedição do Museu Americano de História Natural às Falésias Flamejantes, no Deserto de Gobi, na Mongólia, foi descrito oficialmente um ano depois, em 1924.",
    paleoecologia: "Estuda como ele interagia com seu habitat e outros animais, tinha uma visão binocular, e garras que serviam para agarrar e imobilizar presas de pequeno porte, fósseis de seu antebraço revela que era coberto por penas, indicando que eram animais de sangue quente e de alta atividade metabólica.",
    badge: "Tipo: Dinossauro",
    alt: "Velociraptor"
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
    paleoecologia: "Era um réptil voador, que viveu no final do período Jurássico Superior, era especializado em caçar peixes e pequenos animais em ambientes aquáticos, provavelmente captura suas presas enquanto voava a cima da água ou quando caminhava em águas rasas na beira de lagos",
    badge: "Tipo: Reptíl voador",
    alt: "Pterodáctilo"
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
    imagem: "imgs/gigantossauro.png",
    descriçao: "Foi um dos maiores dinossauros carnívoros terrestres que já existiram na hístoria da Terra, viveu no período Cretáceo Superior na região que atualmente corresponde à Patagônia, na Argentina, seu nome significa 'lagarto gigante do sul', e superava o Tiranossauro Rex em comprimento, embora o T-rex fosse ligeramente mais robusto e pesado, podia alcançar incriveis 13 metros de comprimento e 4 metros de altura.",
    descoberta: "Foi descoberto no dia de 25 de julho do ano de 1993, na província de Neuquén, em Patagônia, na Argentina, por Rúben Dario Carollini, e recebeu o nome de Gigantossauro caronilli, em homenagem ao descobridor dele, o fóssil estava 70% preservado, incluindo ossos como fêmur, pelve, tíbia entre outros ossos. Hoje, os fósseis estão localizados no Museu Municipal Ernesto Bachmann, em Villa El Chocón, na Argentina.",
    paleoecologia: "Reconstrói o nicho ecológico, o comportamento e o ambiente onde vivia Gigantossauro, ele ocupava de forma absoluta a cadeia Alimentar, sendo rival de Tiranossauro rex, que era mais robusta e pesado, eles caçavam em grupos familiares ou matilhas temporárias para cercar, cansar e abater titanossauros jovens, idosos ou doentes, pesava cerca de 8 toneladas, e tinha endotermia (sangue quente).",
    badge: "Tipo: Dinossauro",
    alt: "Gigantossauro"
    },
    {
    id: "anquilossauro",
    nome: "Anquilossauro",
    tipo: "terrestre",
    periodo: "Cretáceo Superior",
    genero: "Ankylosaurus",
    familia: "Ankylosauridae",
    dieta: "herbívoro",
    ovos: "2",
    peso: "8T",
    altura: "2 metros",
    comprimento: "10 metros",
    imagem: "imgs/anquilossauro.png",
    descriçao: "Foi um herbívoro que viveu no final do período Cretáceo, a cerca de 68 milhões de anos atrás na América do Norte, pode atingir até 10 metros de comprimento, e é conhecido e famoso pelo seu corpo blindado e por sua poderosa maçã óssea na ponta da cauda, também há uma armadura em seu corpo que torna a sua pele extremamente resistente.",
    descoberta: "Foi descoberto em 1906, na Formação Hell Creek, em Montana (EUA), por uma expedição liberada pelo paleontólogo Barnum Brown, seu nome científico é Ankylosaurus Magniventris.",
    paleoecologia: "Era um herbívoro de grande porte (6 a 9 metros), habitou a América do Norte no final do período Cretáceo, vivia em florestas, planícies de inundação, em climas quentes e úmidos e próximos aos rios.",
    badge: "Tipo: Dinossauro",
    alt: "Anquilossauro"
    },
    {
    id: "plesiossauro",
    nome: "Plesiossauro",
    tipo: "aquatico",
    periodo: "Cretáceo Inferior",
    genero: "Plesiosaurus",
    familia: "Plesiosauridae",
    dieta: "carnívoro",
    ovos: "0",
    peso: "700kg",
    altura: "1 metro",
    comprimento: "5 metros",
    imagem: "imgs/plesiossauro2.png",
    descriçao: "São répteis marinhos antigos que viviam nos oceanos, possuia membros poderosos em forma de remo que possibilitam que nade na água em alta velocidade, tinha um pescoço alongado e flexível para pegar rapidamente outros peixes, ele podia medir até 3,5 metros de comprimento e tinham parentescos que viviam somente em terra firme",
    descoberta: "Foram descritas em 1821 por William Conybearee e Henry Tomas De La Beche, mas somente dois anos depois, Mary Anning descobriu um fóssil quase completo do plesiossauro, revelendo sua verdadeira aparência, inclusive com Ictiossauro, Plesiossauro e Pterosdauro, seu nome significa 'quase réptil', porque originalmente, não é considerado dinossauro",
    paleoecologia: "Estuda como eles interagiam com o ecossistema dos oceanos do Mesozoico, há cerca de 203 a 66 milhões de anos atrás, diferente de como as pessoas pensam, ele não era um dinossauro, mas sim um réptil marinho altamente especializados que dividiam os mares com Ictiossauros e Mosassauros, tinham pescoços extremamente longos e cabeças proporcionalmente pequenas.",
    badge: "Tipo: Reptíl marinho",
    alt: "Plesiossauro"
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
    badge: "Tipo: Tetrapóde Terrestre",
    alt: "Seymouria"
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
    descriçao: "Foi uma tartaruga marinha gigante, podendo medir até 4m de comprimento, e 1,6 metros de altura, viveu no final do período Cretáceo Superior, e, para botar ovos, ia até a terra firme e cavava um ninho na areia, onde colocava seus ovos. Diferente das tartarugas atuais, não conseguia recolher seus membros, sendo um alvo facíl para Mosassauros famintos, usava seus membros para se locomover suavemente sobre as águas, e tinha uma carapaça gigante, medindo até 2 metros de comprimento.",
    descoberta: "Foi nomeada com o nome 'Archelon' pela primeira vez em 1895, pelo paleontólogo norte-americano George Reber Wieland, porém, os fósseis reais dele foram encontrados na formação Pierre Shale, em Dakota do Sul, EUA, começou a ser estudado e descrito no ano de 1896. Outros fóssies também foram encontrados na mesma região na década de 1970, tinha um esqueleto gigante, e podia medir até 4,6 metros de comprimento.",
    paleoecologia: "Estuda principalmente seu habitat, que estudava sua estrutura óssea e onde habitou, sua dieta e alimentação, que estuda suas mandíbulas, seus bicos e suas presas, suas adaptações físicas, que estuda sua carapaça, suas nadadeiras e sua cauda, seu comportamento e sua ecologia, que estuda seu tamanho colossal e seu ciclo de vida.",
    badge: "Tipo: Tartaruga Marinha Gigante",
    alt: "Arquelônio"
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
    descriçao: "Foi um tetrapóde terrestre, podendo medir até 3 metros de comprimento, diferente de outros dinossauros, era mamífero, então, não botava ovos, tinha uma carapaça enorme, podendo medir até 2 metros de comprimento, sendo formada por placas ósseas chamadas osteodermes, foi extinto recentemente, há cerca de 10 mil anos atrás, viveu no período Neógeno até o Quaternário, sua carapaça podia servir de abrigo para humanos, e seu nome significa 'dentes esculpidos'.",
    descoberta: "Há registros de vários fósseis dele na América do Sul, sendo encontrado principalmente na região do Brasil, Uruguai e Argentina, no Brasil, foi encontrado fósseis dele em Alegrete, no Rio Grande do Sul, no Uruguai, nas regiões de Soriano e Carmelo, com fósseis de cerca de 10 mil anos atrás, e na Argentina na região Metropolitana de Buenos Aires, com fósseis de até 21 mil anos atrás.",
    paleoecologia: "Estuda principalmente características importantes dele, como sua Alimentação e Dentição, que estudava sua dieta e seus dentes, seu Habitat e sua Distribuição, que estudava seu bioma e seu clima, sua Anatomia e Defesa, que estudava sua calda com clava e sua carapaça, e sua Interação com a Megafauna e sua Extinção, que estudava principalmente a sua extinção e suas evidências.",
    badge: "Tipo: Tetrapóde Terrestre",
    alt: "Gliptodonte"
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
    }

    
]

const dinoEncontrado = dinossauros.find(dino => dino.id === id)
console.log(dinoEncontrado)
const badgeDino = document.querySelector(".badge-dino")
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
badgeDino.textContent = dinoEncontrado.badge;
eraDino.textContent = dinoEncontrado.periodo.replaceAll("-", " ")
imagemDino.onerror = () => {
    imagemDino.src = "imgs/sem-imagem.webp";
    
    const aviso = document.createElement("p")
    aviso.textContent = "Imagem não encontrada"
    imagemDino.parentElement.appendChild(aviso)

}
