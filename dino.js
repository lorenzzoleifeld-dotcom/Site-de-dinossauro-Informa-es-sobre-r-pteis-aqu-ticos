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
    dieta: "Carnívoro",
    genero: "Tyrannosaurus",
    imagem: "imgs/rex.png",
    descriçao: "Foi um dos maiores carnívoros da hístoria, e um dos dinossauros mais famosos, possuia cerca de 60 dentes afiados, braços proporcionalmente pequenos, porém robustos, pesava cerca de 6 a 9 toneladas, e viveu no final do período Cretáceo.",
    descoberta: "Os primeiros fósseis encontrados foram no ano de 1874, em Colorado, mas os fósseis iniciais só foram desenterrados no ano de 1902, em Wyoming, que foi nomeado 3 anos depois, pelo paleontólogo Henry Fairfield Osborn.",
    paleoecologia: "Estuda como o Trex interagia com o seu ecossistema. Vivia no antigo continente da ilha de Laramidia, na América do Norte, acredita se que ele viveu entre 66 e 68 milhões de anos atrás, e que exercia forte controle populacional sobre grandes herbívoros.",
    badge: "Tipo: Dinossauro",
    alt: "Tiranossauro rex"
    },
    {
    id: "mosassauro",
    nome: "Mosassauro",
    tipo: "aquatico",
    periodo: "Cretáceo Superior",
    genero: "Mosasaurus",
    familia: "Mosasauridae",
    dieta: "Carnívoro",
    ovos: "0",
    peso: "15T",
    altura: "2 metros",
    comprimento: "15 metros",
    imagem: "imgs/mosassauro.png",
    descriçao: "Foi um dos maiores répteis marinhos do período Cretáceo Superior, medindo entre 12 e 18 metros e pesando até 15 toneladas, possuia vários dentes afiados, nadadeiras robustas, mandíbulas articuladas e corpo hidrodinâmico, seu nome significa 'lagarto do rio Mosa', em homenagem a Holanda, onde foram encontrados os primeiros fósseis.",
    descoberta: "Foi descoberto em 1764, no Monte Saint Peter, quando fragmentos de crânio foram escavados, próximo ao rio Mosa, na Holanda, e foi em 1808 que o famoso cientista Georges Cuvier analisou e determinou que se tratava de um réptil gigante extinto, que ajudou a consolidar o conceito de extinção na ciência.",
    paleoecologia: "Revela que ele dominou os oceanos no final do período Cretáceo Superior como um predador de topo, a cerca de 80 a 68 milhões de anos atrás, eles ocupavam mares rasos e quentes do planeta, com tamanhos que variavam entre 3 e 17 metros, caçavam tartarugas, grandes peixes, cefalópodes, e até eles mesmos.",
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
    dieta: "Carnívoro",
    ovos: "0",
    peso: "100kg",
    altura: "0,8 metros",
    comprimento: "3 metros",
    imagem: "imgs/ictiossauro.png",
    descriçao: "Foi um réptil marinho pré-histórico cujo nome significa 'lagarto peixe', surgiram no início do período Triássico e foram extintos no período Cretáceo Superior, a cerca de 250 a 90 milhões de anos atrás, seu corpo tinha formato de fuso, que reduzia drasticamente o atrito com a água, tinham olhos gigantescos, e uma nadadeira dorsal carnuda (sem ossos), possuia um focinho alongado e estreito, comparado com outros répteis daquele tempo.",
    descoberta: "Foram descobertos no início do século XIX (19), quando a humanidade sequer tinha criado a palavra 'dinossauro', foram descobertos oficialmente no ano de 1811 a 1812, nos penhascos de Lyme Regis, no país da Inglaterra, foram descobertos pelos paleontólogos Joseph Anning (de 15 anos) e Marry Anning (de apenas 12 anos), o termo 'Ichthyosaurus' (lagarto-peixe) foi criado somente 11 anos depois, no ano de 1821 pelo geólogo Charles Konig.",
    paleoecologia: "Revela como esses répteis marinhos alcançavam um sucesso evolutivo estrondoso, dominando os oceanos do mundo por mais de 150 milhões de anos, eles ocupavam o nicho ecológico que hoje pertence aos tubarões e golfinhos, funcionando como predadores de alta velocidade em mar aberto, a maioria deles tinham focinhos longos e finos, e com dentes pequenos, eles se alimentavam de lulas primitivas e amonites, tinham olhos gigantescos, que serviam para o proteger da pressão esmagadora do oceano.",
    badge: "Tipo: Reptíl marinho",
    alt: "Ictiossauro"
    },
    {
    id: "velociraptor",
    nome: "Velociraptor",
    tipo: "terrestre",
    periodo: "Cretáceo Superior",
    genero: "Velociraptor",
    familia: "Dromaeosauridae",
    dieta: "carnívoro",
    ovos: "5",
    peso: "20kg",
    altura: "0.6 metros",
    comprimento: "2 metros",
    imagem: "imgs/velociraptor.png",
    descriçao: "Foi um dinossauro carnívoro de porte médio a pequeno, que viveu no período Cretáceo Superior, ele era razoalmente pequeno e leve, pesando cerca de 20kg, tinha uma garra curva e retratíl, medindo cerca de 6.5cm, e era um predador bem rápido, podendo atingir até 64km/h.",
    descoberta: "Foi descoberto no dia 11 de Agosto no ano de 1923, pelo explorador Peter Kaisen, durante uma expedição do Museu Americano de História Natural às Falésias Flamejantes, no Deserto de Gobi, na Mongólia, foi descrito oficialmente um ano depois, em 1924.",
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
    descriçao: "Foi um réptil voador que viveu no final do período Jurássico Superior, há cerca de 150 milhões de anos atrás, contia um bico estreito, com cerca de 90 dentes, e, diferente dos filmes, sua envergadura tinha aproximadamente 0.50 centímetros a 1,50 metros.",
    descoberta: "Os primeiros fósseis foram encontrados no final do século XVIII (18), na região da Baviera, na Alemanha, e, no Brasil, foram descobertas mais de 40 espécies de Pterodáctilos, no Paraná e no Ceará.",
    paleoecologia: "Era um réptil voador, que viveu no final do período Jurássico Superior, era especializado em caçar peixes e pequenos animais em ambientes aquáticos, provavelmente capturava suas presas enquanto voava a cima da água ou quando caminhava em águas rasas na beira de lagos.",
    badge: "Tipo: Reptíl voador",
    alt: "Pterodáctilo"
    },
    {
    id: "gigantossauro",
    nome: "Gigantossauro",
    tipo: "terrestre",
    periodo: "Cretáceo Superior",
    genero: "Gigantosaurus",
    familia: "Carcharodontosauridae",
    dieta: "carnívoro",
    ovos: "20",
    peso: "8T",
    altura: "4 metros",
    comprimento: "13 metros",
    imagem: "imgs/gigantossauro.png",
    descriçao: "Foi um dos maiores dinossauros carnívoros terrestres que já existiram na hístoria da Terra, viveu no período Cretáceo Superior, na região que atualmente corresponde à Patagônia, na Argentina, seu nome significa 'lagarto gigante do Sul', e superava o Tiranossauro Rex em comprimento, embora o T-rex fosse ligeramente mais robusto e pesado, podia alcançar incriveis 13 metros de comprimento e 4 metros de altura.",
    descoberta: "Foi descoberto no dia de 25 de julho do ano de 1993, na província de Neuquén, em Patagônia, na Argentina, por Rúben Dario Carollini, e recebeu o nome de Gigantosaurus Caronilli, em homenagem ao descobridor dele, o fóssil estava 70% preservado, incluindo ossos como fêmur, pelve, tíbia, entre outros ossos. Hoje, os fósseis estão localizados no Museu Municipal Ernesto Bachmann, em Villa El Chocón, na Argentina.",
    paleoecologia: "Reconstrói o nicho ecológico, o comportamento e o ambiente onde vivia Gigantossauro, ele ocupava de forma absoluta a cadeia Alimentar, sendo rival de Tiranossauro rex, que era mais robusto e pesado, eles caçavam em grupos familiares ou matilhas temporárias para cercar, cansar e abater Titanossauros jovens, idosos ou doentes, pesava cerca de 8 toneladas, e tinha endotermia (sangue quente).",
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
    dieta: "Herbívoro",
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
    descriçao: "São répteis marinhos antigos que viviam nos oceanos, possuia membros poderosos em forma de remo, que possibilitam que nade na água em alta velocidade, tinha um pescoço alongado e flexível para pegar rapidamente outros peixes, ele podia medir até 3,5 metros de comprimento e tinham parentescos que viviam somente em terra firme.",
    descoberta: "Foram descritas em 1821 por William Conybearee e Henry Tomas De La Beche, mas somente dois anos depois, Mary Anning descobriu um fóssil quase completo do Plesiossauro, revelendo sua verdadeira aparência, inclusive com Ictiossauro, Plesiossauro e Pterosdauro, seu nome significa 'quase réptil', porque originalmente, não é considerado dinossauro.",
    paleoecologia: "Estuda como eles interagiam com o ecossistema dos oceanos do Mesozóico, há cerca de 203 a 66 milhões de anos atrás, diferente de como as pessoas pensam, ele não era um dinossauro, mas sim um réptil marinho altamente especializados que dividiam os mares com Ictiossauros e Mosassauros, tinham pescoços extremamente longos e cabeças proporcionalmente pequenas.",
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
    descoberta: "Seu primeiro fóssil foi achado no ano de 1904, na cidade de Seymour, no Condado de Baylor, no estado do Texas, nos EUA, tem uma característica bem intrigante, que, quando pequeno, era aquático, e quando crescia, 'desbloqueava' uma nova habilidade, andar em terra firme, também há fósseis encontrados na Europa, porém, principalmente nos EUA.",
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
    descriçao: "Foi um inseto voador gigante, e, somente sua envergadura podia medir até 75cm, viveu no período Carbonífero, há cerca de 300 milhões de anos atrás, na época dos insetos gigantes, possuia espinhos especiais em sua pata, que serviam para imobilizar as suas presas. Era tão grande que podia ter o tamanho de um falcão, comia outros insetos, o que significava que era carnívora, seu nome significa 'nervos grandes', por conta de ter muitos nervos, seu nome científico é Meganeura, e viveu nas regiões da Europa e da América do Norte.",
    descoberta: "Seu primeiro fóssil foi encontrado no século XIX, no ano de 1880, nas minas de carvão de Commentry, na região da atual França. Seus fósseis foram encontrados originalmente pelo palentólogo francês Charles Brongniart, que descreveu e nomeou o inseto voador gigante no ano de 1885. Outros fósseis seus foram encontrados um século depois, no ano de 1979, na região de Derbyshare, no país do Reino Unido, seu fóssil original está no Museu Nacional de História Natural de Paris, na França.",
    paleoecologia: "Sua paleoecologia estuda principalmente a área de seu Habitat e Clima, que estuda principalmente o ambiente onde vivia e sua Influência de Oxigênio, tendo um tamanho enorme, seu Nicho ecológico e Dieta, que estuda que era um Superpredador voraz e ágil, que outros insetos ele comia e sua caça a outras insetos, e sua Competição e sua Extinção, que estuda a sua Ausência de rivais aéreos e como foi extinguido, o que significa que, nos ares, não tinha nenhum rival a seu nível.",
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
    paleoecologia: "Sua paleoecologia revela que ele viveu em uma Patagônia verdejante, quente e úmida, marcada por grandes planícies de inundação, também estuda seu Clima e Geografia, que estuda seu ambiente, sua atividade geológica e seu clima, sua Flora (alimento), que estuda suas Florestas de Coníferas, suas Plantas primitivas e a Inovação Evolutiva, sua Fauna Coexistente e seus Predadores, que estuda outros herbívoros e a ameaça dos predadores, e sua Dinâmica Populacional e adultos 'Invencíveis', que estuda eles adultos e eles filhotes, que revela que eles adultos e eles filhotes tinham uma grande diferença, e que precisavam crescer muito por conta do tamanho de seus ovos.",
    badge: "Tipo: Dinossauro",
    alt: "Patagotitan"
    },
    {
    id: "heliophyllum",
    nome: "Heliophyllum",
    tipo: "aquatico",
    periodo: "Devoniano",
    genero: "Heliophyllum",
    familia: "Zaphrentidae",
    dieta: "Carnívoro",
    ovos: "500.000",
    peso: "0,050 kg",
    altura: "0,06 metros",
    comprimento: "0,06 metros",
    imagem: "imgs/heliophyllum.jpg",
    descriçao: "Foi um tipo de coral rugoso que viveu principalmente no período Devoniano, quando o dia na Terra durava aproximadamente 400 a 410 dias. Isso acontece porque a Terra está desacelerando sua velocidade ao longo do tempo, e terá uma hora que parará de girar por completo. Tinha formato de chifre, que servia para se prender no fundo do mar para comer partículas microscópicas com seus vários tentáculos, ele era invertebrado, o que significa que não tinha ossos, como as águas-vivas etc. Tinha uma camada mole sobre seu esqueleto, chamada de pólipo, podia medir 6cm de altura e 6cm de comprimento, porque sua altura e comprimento são iguais, e a correnteza na água afetava a direção onde se posicionava.",
    descoberta: "Foi descoberto em meados do século XIX, no ano de 1851, sua descrição foi feita pelos renomados paleontólogos franceses Henri Milne-Edwards e Jules Haime, seu nome científico é Heliophyllum Halli, em homenagem a James Hall, sendo considerado o 'pai' da palentologia de Nova York, que forneceu muitos fósseis nos Estados Unidos, Helios significa Sol, e Phyllon significa folha, é como se fosse raios brilhantes do Sol. Seus fósseis foram encontrados no estado de Nova York, nos Estados Unidos, e em Ontário, no Canadá, e foi em 1963 que o palentólogo americano John West Wells usou os fósseis dele para fazer uma grande descoberta, ele percebeu que as microlinhas correspondiam a taxa de crescimento diárias e anuais, e que o período em que viveu tinha 400 dias de duração.",
    paleoecologia: "Sua paleoecologia revela como esse animal interagia com o seu ecossistema nos oceanos há cerca de 400 milhões de anos atrás, que estuda seu Habitat e Condições Ambientais, que estuda os Mares Rasos e Quentes, as Águas Agitadas a Moderadas que vivia, e o Substrato Semirrígido, seu Estilo de Vida e Nicho Ecológico, que estuda seu Bêntico e Séquil estilo de vida, seus Predadores de Suspensão, e a sua Competição por Espaço, suas Adaptações ao Meio Ambiente, que estuda a sua forma de Chifre Antissecagem, e o Mutualismo Opcional, e suas Interações Biológicas e Parasitiso, que estuda os Epibiontes e seu Parasitismo por Vermes, que revela que cientistas já encontraram tubos fósseis de vermes parasitas grudados em seu corpo.",
    badge: "Tipo: Coral Rugoso",
    alt: "Heliophyllum"
    },
    
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
