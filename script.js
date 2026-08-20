console.log("MEU JS ESTÁ FUNCIONANDO")
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
    paleoecologia: "Sua paleoecologia revela que ele viveu em uma Patagônia verdejante, quente e úmida, marcada por grandes planícies de inundação, também estuda seu Clima e Geografia, que estuda seu ambiente, sua atividade geológica e seu clima, sua Flora (alimento), que estuda suas Florestas de Coníferas, suas Plantas primitivas e a Inovação Evolutiva, sua Fauna Coexistente e seus Predadores, que estuda outros herbívoros e a ameaça dos predadores, e sua Dinâmica Populacional e adultos 'Invencíveis', que estuda eles adultos e eles filhotes, que revela que eles adultos e eles filhotes tinham uma grande diferença, e que precisavam crescer muito por conta do tamanho de seus ovos.",
    badge: "Tipo: Dinossauro",
    alt: "patagotitan",
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
    {
    id: "elasmossauro",
    nome: "Elasmossauro",
    tipo: "aquatico",
    periodo: "Cretáceo Superior",
    genero: "Elasmosaurus",
    familia: "Elasmosauridae",
    dieta: "Carnívoro",
    ovos: "0",
    peso: "3T",
    altura: "2 metros",
    comprimento: "10 metros",
    imagem: "imgs/elasmossauro.jpg",
    descriçao: "Foi um reptíl marinho que viveu no período Cretáceo Superior, há cerca de 80 milhões de anos atrás. Tinha um pescoço bastante comprido, podendo medir até 8 metros de comprimento, que podia ter 70 vértebras, e 18 ossos em sua cauda. Ele era principalmente carnívoro, usando seu pescoço para dar bote em cardumes e pegar peixes no fundo do mar, igual os Plesiossauros, dava a luz na água, não botando ovos. Tinha 4 membros, que usava para se locomover suavemente sobre as águas, que ficavam próximo a sua cabeça, e praticamente metade do seu corpo era composto principalmente pelo seu pescço, sendo uns dos animais com pescoços mais compridos que já habitaram a Terra, viveu na região da atual América do Norte, e seu nome científico é Elasmosaurus.",
    descoberta: "Seu primeiro fóssil foi descoberto no século XIX, no início do ano de 1867 pelo médico Theophilus H. Turner na região de Fort Wallace, no estado do Kansas, no país dos Estados Unidos. Ao reconstruir o esqueleto dele, os paleontólogos colocaram acidentalmente seu crânio da ponta da cauda, acreditando que o seu pescoço comprido era, na verdade, uma cauda sinuosa. Logo depois, o erro bizarro foi corrigido pelo palentólogo Joseph Leidy. O rival da pessoa que descobriu o fóssil usou esse erro que reconstruição para ridiculariza-lo publicamente, essa 'guerra' foi conhecida como 'A Guerra dos Ossos', sendo a luta entre dois cientistas conhecidos como Cope e Othniel Charles Marsh.",
    paleoecologia: "Sua paleoecologia revela um predador marinho altamente especializado, que habitava mares abertos e rasos do período Cretáceo Superior, com destaque para o Mar Interior Ocidental, e estuda principalmente sua Estratégia de Caça e Dieta, que estuda a sua Camuflagem e Aproximação e a sua Armadilha de Dentes, o Uso de Gastrólitos, que estuda como isso auxiliava na sua digestão e seu Controle de Flutuabilidade, sua Locomoção Eficiente, que estuda como ele usava seus quatro membros para 'voar' na água, e seus Predadores e Concorrentes, que estuda que eram vulneráveis a ataques de Mosassauros e tubarões pre-históricos, e sua Reprodução, que estuda que davam filhotes na água, igual aos Plesiossauros.",
    badge: "Tipo: Reptíl Marinho",
    alt: "Elasmossauro"
    },
    {
    id: "heliobatis",
    nome: "Heliobátis",
    tipo: "aquatico",
    periodo: "Paleógeno",
    genero: "Heliobatis",
    familia: "Dasyatidae",
    dieta: "Carnívoro",
    ovos: "0",
    peso: "1 kg",
    altura: "0,001 metro",
    comprimento: "0,040",
    imagem: "imgs/heliobatis.jpg",
    descriçao: "Foi uma arraia aquática que viveu no período Paleógeno, há cerca de 50 milhões de anos atrás. Nadava e caçava suas presas principalmente em rios e lagos lamacentos, onde caçava e se locomovia suavemente sobre ás águas. Uma curiosidade muito impressioante sua é que, em sua cauda, tinha 3 espinhs especiais, que funcionava como uma 'autodefesa' para principalmente se defender de suas presas, aplicando nelas para se defender. Se alimentava principalmente de pequenos crustáceos, tinha ossos cartilaginosos, o que dificulta a caça de seus óssos, por serem muitos frágeis e se decomporem rápidos. Seu nome científico é Heliobatis Radians, por conta de seu formado parecer uma flor florecendo, e viveu na atual região da América do Norte, no sudoeste dos EUA, no estado de Wyoming.",
    descoberta: "Sua descoberta aconteceu no final do século XIX, no ano de 1877, conhecida como 'A Guerra dos Ossos', sendo uma batalha entre os palentólogos Cope e Othniel Charles Marsh, que, por conta disso, também foram encontrados e descobertos várias outras espécies de animais pré-históricos e fósseis antigos, onde também foi descoberto o Elasmossauro, sendo um reptíl marinho com pescoço longo, chegando até 7 metros de comprimento. Seus fósseis foram descobertos na formação Green River, no estado de Wyoming, nos EUA. Marsh batizou ele como Heliobatis Radians, que significa 'raia do sol', que vem da linguagem grega. Atualmente, seu nome está situado no Peabody Museum of Natural History na Universidade de Yale, no país dos Estados Unidos.",
    paleoecologia: "Revela que foi um gênero extinto de arraia, da família Dasyatidae, que viveu no período Eoceno Inferior, que está dentro do período Paleógeno, também revela que ele habitava o antigo Fossil Lake, que é um sistema de lagos subtropicais de água doce que hoje compõe a Formação Green RIver, em Wyoming, nos Estados Unidos. Estuda principalmente suas Características Paleoecológicas, onde estuda fortemente seu Habitat, sua Dieta, seu Tamanho e Defesa, e sua Coexistência, que estuda do que esse animal se alimentava, de qual era seu tamanho, como se defendia, e com quem compartilhava as águas do seu haitat natural, habitava com outra arraia também extinta, que foi descoberta e descrita no ano de 2004. no século XXI (21).",
    badge: "Tipo: Arraia Marinha",
    alt: "Heliobátis"
    },
    {
    id: "oviraptor",
    nome: "Oviraptor",
    tipo: "terrestre",
    periodo: "Cretáceo Superior",
    genero: "Oviraptor",
    familia: "Oviraptoridae",
    dieta: "Onívora",
    ovos: "15",
    peso: "40 kg",
    altura: "1 metro",
    comprimento: "2 metros",
    imagem: "imgs/oviraptor.webp",
    descriçao: "Foi um dinossauro que viveu no período Cretáceo Superior, há cerca de 70 milhões de anos atrás. Para botar ovos, fazia um ninho e os organizava em círculo, colocando os na beira dele. Inicialmente, os cientistas acreditaram que botavam os ovos e tentavam os destruir, porém, mais tarde, descobriram que ele tentava os proteger, e não destrui-los. Protegia seus ovos sentando no meio do ninho e espalhando suas pernas felpudas sobre eles, para principalmente os proteger e os aquecer, seu nome significa 'Ladrão de Ovos', justamente por causa de os cientistas inicialmente acharem que roubava ovos, e seu nome científico é Oviraptor, e 'Ovi' significa ovo e 'Raptor' ladrão. Viveu na região da atual Ásia, onde seus fósseis foram encontrados numa formação chamada Djadokhta.",
    descoberta: "Seu fóssil original foi encontrado no início do século XX, no ano de 1923, no Deserto de Gobi, no país da atual Mongóla. Foi encontrado sobre um ninho, e, inicialmente, foi acusado de roubar ovos de outros dinossauros, ganhando o nome de 'ladrão de ovos', porém, décadas depois, embriões fossilizados provaram que os ovos eram seus e ele estava, na verdade, chocando-os. Quem o encontrou se chama George Olsen, que também foi o encontrador do primeiro fóssil na região da Mongólia, e somente em 1993, foi descoberto que não roubava ovos, e sim, protegia-os. Tinha aparência de uma ave, com um bico forte e postura de choco, com braços longos cobertos de penas que serviam perfeitamente para cobrir e aquecer os ovos no ninho, tendo um comportamento idêntico das aves atuais.",
    paleoecologia: "Sua paleoecologia revela como esse animal vivia, se alimentava e interagia com um dos ecossistemas mais fascinantes do período Cretáceo Superior. E estuda principalmente o seu Habitat, onde estuda que habitava campos de dunas, um clima sazonal e que enfrentava fortes tempestades de areia, seu Nicho Ecológico e Dieta Onívora, que estuda principalmente sua Flexibilidade alimentar, sua Mandíbula Trituradora e que comia pequenas presas, e sua Vizinhança, que estuda que convivia diariamente com herbívoros abundantes e predadores e competidores de auto nível, sendo um deles o Velociraptor, que era o principal predador de pequeno porte do local. O Oviraptor também dividia o seu espaço com outros pequenos terópodes velozes, como o Byronosaurus e mamíferos multiberculados que saíam à noite.",
    badge: "Tipo: Dinossauro",
    alt: "Oviraptor"
    },
    {
    id: "mutaburrassauro",
    nome: "Mutaburrassauro",
    tipo: "Terrestre",
    periodo: "Cretáceo Inferior",
    genero: "Muttaburrasaurus",
    familia: "Rhabdodontidae",
    dieta: "Herbíviro",
    ovos: "30",
    peso: "3T",
    altura: "3 metros",
    comprimento: "8 metros",
    imagem: "imgs/mutaburrassauro.jpg",
    descriçao: "Foi um ornitópode que viveu no final do período Cretáceo Inferior, a aproximadamente 112 milhões de anos atrás. Podia andar sobre 2 ou 4 patas, indicando que era um ornitópode, grupo de dinossauros que podem andar sobre 2 ou 4 patas. Não há evidências de que tinha um gastrólito, ele era herbívoro, e seu bico era tão forte que podia cortar plantas resistentes com ele. Tinha um calombo ósseo em seu focinho, que funcionava como uma sacola que enchia de ar, mas porque um ornitópode precisaria de um 'calombo ósseo' em seu focinho? Bom, provavelmente esse calombo ósseo servia para atrair parceiros e se exibir no meio de outros animais. Viveu na região da atual Oceania, no país da atual Austrália, passava a maior parte de seu tempo em 2 patas, e seu nome científico é Muttaburrasaurus Iangdoni.",
    descoberta: "Seus primeiros fósseis foram encontrados por puro acaso no ano de 1963, na Austrália. SUa descoberta envolvia um fazendeiro atento, uma longa preparação e estudos científicos recentes. Foi descoberto por um fazendeiro local da cidade de Muttaburra, chamado Doug Langdon, perto do RIo Thomson, quando avistou rochas com formatos muito incomuns no chão. Quando notou que era algo extraordinário, ele guardou um fragmento em sua bolsa de sela, voltou para a sua casa e disse à esposa que havia 'encontrado um monstro'. Sua escavação aconteceu no ano de 1981, cm cientistas encontrando o esqueleto de Muttaburrasaurus com 60% do corpo preservado, e somente no mesmo ano, 18 anos depois, foi apresentado ao mundo, pelos cientistas Alan Bartholomai e Ralph Molnar.",
    paleoecologia: "Revela que ele vivia em um dos ambientes mais fascinantes e extremos da Era dos Dinossauros, e que estuda principalmente o seu Clima Polar Dinâmico, que estuda que vivia  em um clima sazonal e temperado, tendo Verões úmids e amenos e Invernos escuros e rigorosos, seu Habitat e a sua Vegetação, que estuda que seus sedimentos indicam que ele habitava planícies costeiras e florestas úmidas próximas ao Mar de Eromanga, suas adaptações de Sobrevivência, qye estuda sua Migração, sua Vocalização e sua Resistência Alimentar, e sua Convivência e Predadores, que estuda que ele dividia território com uma fauno icônica, incluindo Herbívoros, como o Kunbarrasaurus e imensos saurópodes pescoçudos, e também com predadores, sendo o principal o AUstralovenator, que era um carnívoro rápido de garras afiadas que habitava a sua mesma região.",
    badge: "Tipo: Ornitópode",
    alt: "Mutaburrassauro"
    },
    {
    id: "dunkleosteus",
    nome: "Dunkleosteus",
    tipo: "Aquático",
    periodo: "Devoniano Superior",
    genero: "Dunkleosteus",
    familia: "Dunkleosteidae",
    dieta: "Carnívoro",
    ovos: "0",
    altura: "1 metro",
    comprimento: "4 metros",
    imagem: "imgs/dunkleosteus.webp",
    descriçao: "Foi um peixe blindado que viveu há cerca de 400 milhões de anos atrás, no período Devoniano Superior. Tinha um maxilar forte, que tinha um par de lâminas ósseas afiadas no lugar de seus dentes (que não tinha, o que significa que no lugar dos dentes havia uma lâmina óssea). Usava essas lâminas para triturar e comer as suas presas. Viveu no período do Supercontinente chamado Pangéia, o que significa que vivia em todo o mundo, e não em uma região específica. No período em que viveu, o dia na Terra tinha 400 dias, por causa primeiramente da quantidade de anos atrás e porque a Terra está desacelerando ao longo do tempo. Seu nome científico é Dunkleosteus Terrelli, e seu nome significa 'osso de Dunkle', em homenagem ao descobridor e pelo especialista chamado David Dunkle. Seu corpo era formato inteiramente por placas ósseas que funcionavam como um escudo, e tinha cerca de 4 metros de comprimento.",
    descoberta: "Sua descoberta envolveu cientistas amadores, confusões taxonômicas e uma grande obra nas estradas dos Estados Unidos. Seus primeiros fósseis foram encontrados pelo hoteleiro e palentólogo amador Jay Terrell, junto com seu filho. Descobriram quando caminhavam perto do Lago Erie, na cidade de Sheffield Lake, no estado de Ohio (EUA), no século XIX, do ano de 1867. Seus fósseis foram coletados por Terrell e foram doados e descritos originalmente pelo geólogo John Strong Newberry, no ano de 1873, e, durante quase 1 século, acreditou-se que ele era apenas uma espécie de outro grupo chamada Dinichthys Terrelli. Com o passar das décadas, novos fósseis bem mais reservados foram surgindo na região de Ohio, principalmente nos Xistos de Cleveland. Foi oficialmente batizado de Dunkleosteus Terrelli, homenageando tanto David Dunkle quanto o descobridor original, Jay Terreli, no ano de 1956, aproximadamente 1 século depois de sua descoberta.",
    paleoecologia: "Sua paleoecologia estuda especificamente o estilo de vida, as relações biológicas e o ambiente marinho em que ele viveu há 360 milhões de anos atrás, no período Devoniano SUperior, que estuda principalmente a Dinâmica da Mordida e Dieta, que revela que ele abria a sua boca em somente 20 milissegundos, sendo 6 vezes menor do que o tempo normal de reação humana, seu Hábito de Regurgitação, que revela que seus fósseis são encontrados frequentemente em bolos de ossos e conchas semi-digeridas, sua Locomoção e sua Ocupação do Espaço, que revela que ele não tinha ossos no resto do corpo, e que tinha um crânio pesado, e suas Condições do Oceano Devoniano, que estuda a química das rochas onde o Dunkleosteus foi enterrado, que revela que ele vivia em um mar de águas quentes e tropicais, mas que sofria com zonas mortas anóxicas, que significa que o fundo do oceano frequentemente ficava sem oxigênio.",
    badge: "Tipo: Peixe Blindado",
    alt: "Dunkleosteus"
    },
    {
    id: "diplodoco",
    nome: "Diplodoco",
    tipo: "Terrestre",
    periodo: "Jurássico Superior",
    genero: "Diplodocus",
    familia: "Diplodocidae",
    dieta: "Herbívoro",
    ovos: "30",
    peso: "30T",
    altura: "3 metros",
    comprimento: "26 metros",
    imagem: "imgs/diplodoco.jpg",
    descriçao: "Foi um dinossauro que viveu no período Jurássico SUperior, há cerca de 150 milhões de anos atrás. Ele era um saurópode, que significa que era um dinossauro herbívoro, quadrúpede e com pescoço comprido. Ele tinha uma cauda longa, que podia ser usada para se defender de predadores, e seu pescoço comprido servia para alcançar folhas de árvores altas. Viveu na região da atual América do Norte, sua cauda também servia para não permitir que caísse para a frente, por causa do peso de seu pescoço. Tinha espinhos em sua cauda, pescoço e costa do tamanho de um lápis, que serviam para se defender de predadores. Tinha cerca de 26 metros de comprimento, sendo do tamanho de uma baleia azul, seu nome científico é Diplodocus Longus, que significa 'Vigas duplas', por conta de seu osso ter mais uma camada. Cientistas discutem a ideia de que apoiavam sua cauda no chão e ficavam em 2 patas, mas não há evidências, e podiam pesar várias toneladas, por conta de seu peso.",
    descoberta: "Seus fósseis foram descobertos no século XIX, no ano de 1877, na região do Colorado, nos Estados Unidos, pelo palentólogo americano Othniel Charles Marsh. Ele descobriu o fóssil de Diplodoco, e, na época, ele acreditava que era um dinossauro aquático, e que vivia em rios e lagos, mas atualmente, os cientistas acreditam que ele vivia em terra firme, e que se alimentava de plantas altas. Seu fóssil foi encontrado em uma formação chamada Morrison Formation, que é uma formação geológica do período Jurássico Superior, que se estende por vários estados dos Estados Unidos (EUA), como Colorado, Montana, Dakota do Sul, Wyoming, Utah e Oklahoma. O fóssil de Diplodoco foi encontrado em um leito de rio seco, e foi o primeiro fóssil de saurópode encontrado na América do Norte. O fóssil original está localizado no Museu de História Natural de Yale, nos Estados Unidos, no meio da guerra conhecida como 'A Guerra dos Ossos', que foi uma disputa entre os palentólogos Othniel Charles Marsh e Edward Drinker Cope.",
    paleoecologia: "Sua paleoecologia revela que ele vivia em um ambiente de planícies aluviais, com rios e lagos, e que se alimentava de plantas altas, como coníferas e cicadófitas, e estuda principalmente o seu Habitat e Vegetação, que estuda que ele vivia em planícies aluviais, com rios e lagos, e se alimentava de plantas altas, como coníferas etc. Também estuda a sua Locomoção e Comportamento, que estuda que ele se Locomovia em bandos, e que se locomovia lentamente, sua Defesa e Predadores, que estuda que ele tinha uma cauda longa e espinhosa para se defender de predadores, como o Allosaurus. Estuda também a sua Cauda e Pescoço, que estuda que ele tinha uma cauda longa e espinhosa para se defender de predadores, e que seu pescoço comprido servia para alcançar folhas de árvores altas, e sua Extinção, que estuda que ele foi extinto no final do período Cretáceo, há cerca de 66 milhões de anos atrás, provavelmente por causa do impacto de um asteroide que causou a extinção em massa dos dinossauros.",
    badge: "Tipo: Dinossauro",
    alt: "Diplodoco"
    },
    {
    id: "maiassaura",
    nome: "Maiassaura",
    tipo: "Terrestre",
    periodo: "Cretáceo Superior",
    genero: "Maiasaura",
    familia: "Hadrosauridae",
    dieta: "Herbívoro",
    ovos: "40",
    peso: "4T",
    altura: "3 metros",
    comprimento: "9 metros",
    imagem: "imgs/maiasaura.jpg",
    descriçao: "Foi um dinossauro que viveu no período Cretáceo Superior, há cerca de 80 milhões de anos atrás, ele era herbívoro, o que significa que comia plantas e folhas, seu nome significa 'lagarto boa mãe', o que significa que cuidava muito bem de seus filhotes. Ele fazia ninhos pertos uns dos outros, com 7 metros de distância, o que dificultava bastante a locomoção desse dinossauro, pois tinha 9 metros de comprimento. Viveu na região da atual América do Norte, e fazia seus ninhos em formato de vulcão usando lama, e vários fósseis seus foram encontrados ao redor da América do Norte (principalmente na região de Montana, EUA), seu nome científico é Maiasaura Peeblesorum, e somente seu significado diz que existia mais fêmeas desse dinossauro.",
    descoberta: "Sua descoberta ocorreu em meados do século XX, na região de Montana, no país dos Estados Unidos, que foi liderada por Laurie Trexler. Seus fósseis foram oficialmente descritos no ano de 1979 pelos palentólogos Jack Horner e Robert Makela. Seu achado revelou ninhos, ovos e filhotes fossilizados, provando pela primeira vez que alguns dinossauros cuidavam de sua prole e viviam em colônias. Seus fósseis foram descobertos na Formação Two Medicine, perto de Chouteau e Bynum, em Montana (EUA), em uma área apelidada de 'Montanha de Ovo', onde achou fósseis adultos, juvenis, embriões e ninhos organizados em círculos com cascas pisoteadas, que mudou a visão de que os dinossauros apenas abandonavam os ovos após a postura.",
    paleoecologia: "Revela que a Maiasaura viveu em grandes rebanhos sociais, em ambientes de planícies e florestas úmidas, e demonstrou cuidado parental inédito, que estuda principalmente seu Ambiente e Habitat, que estuda sua Localização, o Clima e vegetação de onde vivia, seu Comportamento Social e Reprodução, que estuda que tinha ninhos em colônia, que cuidava de seus filhotes e que vivia em rebanho, e sua Interação com Outros Animais, que estuda principalmente sua Alimentação, os predadores que convivia diariamente, e sua defesa, que estuda que ela/e tinha 4 toneladas e a força de seu grupo serviam como proteção principal contra ataques, o que demonstra uma excelente defesa em bando desses dinossauros.",
    badge: "Tipo: Dinossauro",
    alt: "Maiassaura"
    },
    {
    id: "tiktaalik",
    nome: "Tiktaalik",
    tipo: "Aquático",
    periodo: "Devoniano Superior",
    genero: "Tiktaalik",
    familia: "Elpistostegidae",
    dieta: "Carnívoro",
    ovos: "1000",
    peso: "30kg",
    altura: "0,20 metros",
    comprimento: "3 metros",
    imagem: "imgs/tiktaalik.jpg",
    descriçao: "Foi um peixe anfíbio que viveu durante o período Devoniano Superior, há cerca de 375 milhões de anos atrás. Fazia parte do grupo dos primeiros anfíbios da história da Terra, tendo cabeça triangular, olhos virados para cima, membros robustos e pescoço móvel. Também tinha escamas e membros, e era parente próximo dos tetrapódes, o que significa que podia sair da água e ir para a terra firme. Tinha pulmões e branquias, oque permitia que nadasse em lagos e em margens de rios lamacentas. Sua descoberta revolucionou a ciência moderna, descobrindo como os anfíbios ocuparam a Terra a cerca de 400 milhões de anos atrás e como viviam. Foi descoberto no ártico, e moradores de lá deram seu nome como Tiktaalik, que significa 'lagarto grande da água doce'",
    descoberta: "Sua descoberta ocorreu no início do século XXI, no ano de 2004, no Ártico do Canadá (ilha Ellesmere) por uma equipe de cientistas liderada por Neil Shubin e Ted Daeschler, com os resultados oficiais publicados na revista científica Nature em abril de 2006. O fóssil tem cerca de 375 milhões de anos (no período Devoniano) e representa uma importante forma transicional na evolução dos vertebrados. Esses paleontólogos escolheram intencionalmente procurar rochas no ártico canadense formadas em antigas áreas de água doce, prevendo encontrar fósseis do período exato da transição entre peixes e animais terrestres. Possuia escamas, guelras e nadadeiras com raios, e possuia também nadadeiras com estrutura óssea.",
    paleoecologia: "Revela que foi um peixe sarcopterígio do Devoniano Superior (há cerca de 375 milhões de anos atrás) que habitava ecossistemas de águas rasas, margens de rios meandrantes e pântanos tropicais perto do equador antigo, que estuda principalmente seu Ambiente e Clima, que estuda seu Habitat, suas Condições da água e sua Vegetação emergente, suaas Adaptações Morfológicas e Comportamentais, que estuda seu Modo de vida bentônico, seu Respirador duplo e sua Cabeça e pescoço, e seu Papel na Cadeia Alimentar, que estuda principalmente seu Nivel trófico, que revela que era um predador de topo de grande porte para o seu nicho, e sua dieta, que revela que se alimentava de peixes menores e invertebrados que se concentravam nas águas rasas marginais.",
    badge: "Tipo: Peixe",
    alt: "Tiktaalik"
    },
    {
    id: "parassaurolofo",
    nome: "Parassaurolofo",
    tipo: "Terrestre",
    periodo: "Cretáceo Superior",
    genero: "Parasaurolophus",
    familia: "Hadrosauridae",
    dieta: "Herbívoro",
    ovos: "20",
    peso: "3T",
    altura: "4 metros",
    comprimento: "10 metros",
    imagem: "imgs/parassaurolofo.jpg",
    descriçao: "Foi um dinossauro que viveu há cerca de 70 milhões de anos atrás, no período Cretáceo Superior. Ele era herbívoro, o que significa que comia plantas e folhas. Ele é extremamente famoso principalmente por que viveu no mesmo período do que o Tiranossauro Rex, porque viveu na mesma região que ele (América do Norte), e por causa que tinha uma crista em sua cabeça, que, diferente de como as pessoas pensam, não é uma alcunha, e sim, uma crista, que servia para emitir sons para atrair parceiros. Inicialmente, cientistas acreditaram que sua crista servia para, quando estivesse pegando plantas submersas na água, conseguisse respirar por ela, porém, atualmente, sabemos que sua crista não servia para ele respirar, e sim, emitir sons. Seu nome científico é Parasaurolophus, e é um dos dinossauros mais amados e famosos entre as pessoas.",
    descoberta: "Foi descoberto no início do século XX, no ano de 1920, na região do Canadá, quando uma equipe da Universidade de Toronto encontrou um esqueleto parcial com crânio em Alberta, sendo nomeado em 1922 pelo palentólogo William Parks. Foi encontrado na Formação Dinosaur Park, na cidade de Alberta (EUA), outros fósseis adicionais seus foram achados posteriormente na cidade de Novo México e Utah, reforçando mais ainda o estudo sobre esse dinossauro.",
    paleoecologia: "Revela ue ele viveu durante o período Cretáceo Superior (há cerca de 75 milhões de anos atrás) em ambientes de planícies aluviais, florestas tropicais e subtropicais úmidas da América do Norte, integrando ecossistemas ricos em vegetação ribeirinha, que estuda principalmente seu Habitat e Clima, que estuda sua região geográfica, seu ambiente predominante, e o nível do mar de onde vivia, sua Dieta e Alimentação, que estuda que eram Herbívoros especializados, os seus bicos e dentes e sua postura alimentar, e sua Ecologia Comportamental e suas Cristas, ue estuda sua comunicação sonora, seu reconhecimento social, e que vivia em manadas, ou seja, em grupos.",
    badge: "Tipo: Dinossauro",
    alt: "Parassaurolofo"
    },
    {
    id: "estiracossauro",
    nome: "Estiracossauro",
    tipo: "Terrestre",
    periodo: "Cretáceo Superior",
    classificacao: {
    genero: "Styracosaurus",
    familia: "Ceratopsidae",
    },
    dieta: "Herbívoro",
    ovos: "30",
    peso: "2T",
    altura: "2 metros",
    comprimento: "5,5 metros",
    imagem: "imgs/estiracossauro.jpg",
    descriçao: "Foi um dinossauro que viveu durante o período Cretáceo Superior na América do Norte há cerca de 75 milhões de anos atrás. Ele é conhecido principalmente por ter uma das golas ósseas mais elaboradas entre os animais pré-históricos, que podiam ter uma variedade de espinhos grandes e pequenos. Tinha chifres em suas bochechas e chifres nasais em sua cabeça, que podiam medar até 60 cm de altura, que eram coloridos, que provavelmente serviam para atrair parceiros. Tinha um depósito de fósseis chamadas jazidas palentológicas, que ajudavam os cientistas a descobrir que andavam em grupo. Tinha um bico forte, que era perfeito para cortar plantas como as palmeiras. Espinhos na sua gola podiam ser mais compridos do que seus chifres nasais, seu nome científico é Styracosaurus, e, por conta de seus vários espinhos, seu nome significa 'lagarto com espinhos'.",
    descoberta: "Seu primeiro fóssil foi encontrado no início no século XX, no ano de 1913, na província de Alberta, no Canadá. Seu primeiro fóssil foi coletado por C. M. Sternberg e nomeado pelo palentólogo Lawrence Lambe. Seu fóssil foi encontrado na Formação Dinosaurs Park (Parque Provincial dos Dinossauros), em Albera, no Canadá. Seu esqueleto quase completo foi desenterrado em 1915 por Barnum Brown para o Museu Americano de História Natural. Seus fósseis tem mais de 74,4 milhões de anos, o que significa que esse dinossauro viveu durante o período Cretáceo Superior (Campaiano). Ele tinha um grande chifre no focinho, e uma gola óssea no pescoço enfeitado com quatro a seis longos espinhos, tinha cerca de 5,5 metros de comprimento e pesava entre 1,8 e 2,7 toneladas. Acredita-se que viviam em grandes grupos ou manadas, devido a locais com vários fósseis reunidos.",
    paleoecologia: "Sua paleoecologia revela que ele viveu no final do período cretáceo, há cerca de 75 a 70 milhões de anos atrás, habitando a América do Norte em regiões de várzeas e rios costeiros, que estuda principalmente o Ambient e Vida em Grupo, que estuda o local e clima de onde vivia, seu comportamento social, e com quem convivia, ou seus vizinhos de habitat, e Sua Alimentação e Anatomia, que estuda principalmente sua dieta herbívora, que revels que tinha um bico pontiagudo, que ajudava a cortar plantas baixas, como samambaias e palmeiras, e sua defesa e exibição, que revela que seu grande chifre do nariz e os espinhos no seu pescoço serviam para assustar rivais, atrair parceiros ou se defender.",
    badge: "Tipo: Dinossauro",
    alt: "Estiracossauro"
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

