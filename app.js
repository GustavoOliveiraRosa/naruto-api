// Importando requisitos
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());


// Definindo endpoint principal
app.get('/', function(req, res) {
  var wellcome = 
    {
      nome: "HISOKA NARUTO API", 
      repositorio: "123", 
      desenvolvedor: "Gustavo de Oliveira Rosa", 
      Objetivo: "Criar uma API que retornará informações a respeito de personagens selecionados do anime NARUTO.",
      Creditos_Info: "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_Naruto",
    }
  ;

  res.send(JSON.stringify(wellcome));
});


var personagens = [
  {id:"1", name: "Naruto Uzumaki (うずまき ナルト Uzumaki Naruto?)", descricao: "É o protagonista da série Naruto. Ele foi o primeiro personagem criado por Kishimoto e foi concebido com muitas características de outros personagens de mangás shōnen. Na série, Naruto tem a ambição de se tornar Hokage, o líder da Vila da Folha. Por ele ser o hospedeiro de Kurama, a raposa de nove caudas que atacou Konoha, ele é desprezado pelos outros habitantes.[10] Ele compensa isso com sua personalidade alegre e brincalhona, e ao longo da série, consegue fazer amizade com muitos ninjas estrangeiros e de Konoha. Ele desenvolve uma relação especialmente próxima com Sasuke Uchiha e uma afeição de carinho profundo por Sakura Haruno, dois de seus companheiros ninja do Time 7.[11] Com o fim da quarta guerra Shinobi, Naruto termina se casando com Hinata e tiveram dois filhos Boruto Uzumaki e Himawari. A dubladora do personagem na versão original do anime é Junko Takeuchi e na versão brasileira é Úrsula Bezerra", geral:"true"},
  {id:"2", name: "Sasuke Uchiha", descricao: "É um dos membros do Time 7. Ele foi criado para ser um rival de Naruto, bem como um 'gênio legal', que Kishimoto acreditava ser parte integrante de uma rivalidade ideal. Ele é um dos poucos membros remanescentes do clã Uchiha junto com seu irmão, Itachi Uchiha, que matou o resto de sua família.[15] Devido a isso, o único desejo de Sasuke é matar seu irmão, e ele desenvolve uma personalidade fria e distante. Suas interações com seus companheiros de time, todos considerados preciosos por ele, fazem com que ele se concentrar menos em sua vingança no início da série. Durante um encontro com seu irmão, na Parte I, Sasuke é facilmente derrotado, o que o leva a deixar a aldeia em busca de mais poder e ir atrás de Orochimaru.[11] Seus companheiros tentarem resgatá-lo de Orochimaru é uma das partes principais do enredo da Parte II. Com fim da quarta guerra Shinobi, Sasuke admite que perde para Naruto e confia a Naruto para que este se torne Hokage. Com o passar de alguns anos, Sasuke não chegou a se casar com Sakura, mas tiveram uma filha chamada Sarada. Embora nunca presente em Konoha, Sasuke se torna em um pai ausente na família. O dublador do personagem na versão original do anime é Noriaki Sugiyama e na versão brasileira Robson Kumode", geral:"true"},
  {id:"3", name: "Sakura Haruno", descricao:"É é a única garota do Time 7. Kishimoto a criou como a heroína da série, apesar de ter admitido ter pouca percepção de como uma heroína ideal deveria ser. Quando criança, Sakura era irritada pelas outras crianças por causa de sua grande testa, uma característica que Kishimoto usou para dar ênfase à personagem. Ela logo recebeu consolo de Ino Yamanaka.[18] Conforme as duas cresciam, elas se distanciaram bastante devido ao afeto que ambas tinham por Sasuke Uchiha. Durante a maior parte da Parte I, Sakura é apaixonada por Sasuke e rejeita Naruto.[19] Porém, quando Sasuke deixa a vila, Naruto promete a Sakura que um dia o traria de volta. Após ele ter sido impedido pelo Quarteto do Som, Sakura decide ficar mais forte através de um treinamento com Tsunade. Na Parte II, com 16 anos, Sakura desenvolveu suas técnicas de batalha e adquiriu uma força bruta equivalente a de dez homens.[20] Logo na primeira saga da parte II, no arco do resgate ao Kazekage, ela protagonizou um de seus mais épicos momentos de participação durante a história e ao lado de Chiyo, uma Kunoichi veterana de Sunakagure enfrentaram juntas Sasori, neto de Chiyo, em um duelo repleto de cenas importantes para a evolução pessoal e amadurecimento de Sakura como ninja. A aliança entre as duas formidáveis kunoichis acabou lhes rendendo a vitória e uma importante pista do paradeiro de Sasuke, que até então era um mistério para todos. Depois da invasão de Pain, Sai revela a Sakura dos reais sentimentos de Naruto, que a leva a tomar uma drástica decisão, só que não foi capaz de superar seus sentimentos e é salva por Naruto quando quase ia ser morta por Sasuke. Com o início da quarta guerra Shinobi, ela se junta na guerra e luta ao lado de Naruto e Sasuke e adquire o Byakugou de Tsunade. Com o fim da guerra, Sakura ficou cuidando de Sarada, a sua filha desempenhando seu papel como pai e mãe, já que Sasuke embarcou numa missão importante para garantir a segurança da família e do mundo ninja, e isso acabou tornando-o numa pessoa ausente. A dubladora da personagem na versão original do anime é Chie Nakamura e na versão brasileira Tatiane Keplmair.", geral:"true"},
  {id:"4", name: "Kakashi Hatake", descricao: "É o líder do Time 7 e sensei de Naruto, Sasuke e Sakura. Originalmente, Kishimoto pretendia introduzir Kakashi mais cedo na série e o criou como uma pessoa tranquila que fosse capaz de manter os membros do Time 7 calmos e seguros. Seu pai, Sakumo Hatake, cometeu suicídio após ser criticado por todos por ter aberto mão de uma missão para salvar seus amigos. Com o passar do tempo, Kakashi conhece Minato Namikaze – pai de Naruto Uzumaki –, que foi seu mestre durante algum tempo. Kakashi trata a sua posição como líder de uma forma separada dos outros membros, e por conta disso está sempre atrasado para reuniões. Em um Gaiden do seu passado, é mostrado que esse é o resultado de um acidente em que Kakashi presenciou a suposta morte de seu amigo Obito Uchiha, que lhe deu seu Sharingan e lhe passou muitos de seus hábitos, incluindo seus atrasos constantes.[23] Com o Sharingan de Obito, Kakashi conquistou uma reputação como um ninja poderoso e habilidoso, além do apelido 'Kakashi, o Ninja Copiador' (コピー忍者のカカシ Kopī Ninja no Kakashi?).[24] Apesar de ensinar todos os três membros do Time 7 no início da série, Kakashi depois se foca no treinamento de Sasuke conforme a história continua, ensinando a ele a técnica Chidori; no entanto, ele foi incapaz de impedir que Sasuke deixasse a vila para procurar Orochimaru na sua busca por poder.[25] Na parte II (em Naruto Shippuuden), Kakashi desenvolve o Sharingan a ponto de criar o Mangekyou Sharingan, o que lhe possibilita criar Kamui, o jutsu de absorção. Depois da invasão de Pain em sua aldeia, Kakashi toma para si a responsabilidade de matar Sasuke porque ele acredita que falhou como professor e líder do time 7, mas é impedido por Naruto. Na Quarta Grande Guerra Ninja, Obito confia a Kakashi o jutsu ocular Sharingan e consegue derrotar Kaguya, a deusa dos primórdios. Com o fim da guerra, Kakashi se torna Hokage. O dublador do personagem na versão original do anime é Kazuhiko Inoue; na versão brasileira, ele é dublado por Élcio Sodré", geral:"true"},
  {id:"5", name: "Sai Yamanaka", descricao: "É um ninja que se junta ao Time 7 na Parte II. Por ter que substituir Sasuke na equipe, Kishimoto foi cuidadoso com sua concepção para fazê-lo se destacar.[28] Como membro da 'Fundação' desde criança, foi treinado para não possuir ou demonstrar qualquer tipo de emoção ou compaixão. No entanto, após passar o tempo junto com Naruto Uzumaki, ele passa a criar laços com outras pessoas, o que desde então se tornou seu principal objetivo na série.[29] As tentativas de Sai em se aproximar dos outros envolvem dar nome de animais a eles; porém, ele geralmente diz o que realmente acha da pessoa e acaba apelidando-os com nomes como 'gordo' e 'feio'. Ele aprende com seus erros e tenta fazer o contrário, por exemplo, chamando Ino Yamanaka de 'moça bonita'. Quando não está tentando se relacionar com os outros, passa seu tempo pintando e desenhando. Seus talentos artísticos servem também para lutar, pois através da infusão de chakra em seu pincel, ele pode fazer seus desenhos ganharem vida. Em algumas vezes ele acaba sendo enganado por Sakura quando ela sorri para Sai, só que de mentira. [31] O dublador do personagem na versão original do anime é Satoshi Hino e no Brasil é Marcus Pejón. Se casou com Ino Yamanaka e teve um filho cujo nome é Inojin Yamanaka, que assim como o pai, desenha muito bem. ", geral:"true"},
  {id:"6", name: "Yamato", descricao: "É conhecido por Kakashi como Tenzou (テンゾウ Tenzō?) e originalmente chamado de Kinoe (甲?) é apresentado durante a Parte II da série como um membro da ANBU e um substituto temporário para Kakashi Hatake como o líder do Time 7. Após o retorno de Kakashi, ele permanece na equipe em uma posição de liderança adicional. 'Yamato' não é seu nome verdadeiro, mas sim um codinome atribuído a ele com o fim de juntar ao Time 7 dado por Tsunade.[32] Diferente de Kakashi, que se importa mais com seus companheiros do que com o sucesso das missões, ele disse que deixaria para trás qualquer um que se tornasse um fardo à conclusão da missão, pois segundo ele um ninja deve ser capaz de cuidar de si próprio.[33] Quando criança, Yamato foi sequestrado por Orochimaru, que fez experiências com ele a fim de reproduzir as habilidades do Primeiro Hokage. No entanto, como Orochimaru foi forçado a deixar a Vila da Folha antes de terminar seus testes, ele nunca soube se Yamato havia obtido a técnica Mokuton, que lhe permite manipular livremente a madeira. Depois ele é treinado por Danzo e também desenvolve o elemento madeira em que assume o codinome Kinoe, no Filler. Essa foi a principal razão para ele ingressar no Time 7, pois com suas habilidades poderia controlar Naruto caso Kurama, a Raposa de Nove Caudas que fica dentro dele, despertasse.[34] O dublador do personagem na versão original do anime é Rikiya Koyama e o dublador Brasileiro é Glauco Marques.", geral:"true"},
  {id:"7", name: "Kiba Inuzuka", descricao: "É um membro do time 8 caracterizado por uma série de características caninas tais como ser muito protetor de seus companheiros e ter sentidos extremamente aguçados, como o olfato. O que mais evidencia sua ligação com os cães é a constante presença de seu cachorro ninja (忍犬 ninken?), Akamaru. Kiba é extremamente fiel a seu cão, sendo relutante em abandoná-lo e até colocando a si mesmo em perigo para protegê-lo.[36] Em troca da devoção de Kiba, Akamaru luta junto dele; ele usa seus sentidos aguçados para dar vantagem a Kiba e ajuda-o no trabalho em equipe com diversos ataques físicos. Devido a Akamaru ser naturalmente melhor equipado para o combate, Kiba normalmente modifica suas próprias habilidades no início de uma batalha, fazendo suas garras crescerem e passando a andar sob seus quatro membros para aumentar a sua velocidade.[37] Ele também pode aumentar drasticamente o seu olfato, e na segunda metade da série, ele pode usá-lo para detectar coisas que os cães não conseguem.[38] O dublador do personagem na versão original do anime é Kōsuke Toriumi e na brasileira é Fábio Lucindo.", geral:"true"},
  {id:"8", name: "Akamaru", descricao: "Não disponivel ainda", geral:"true"},
  {id:"9", name: "Hinata Hyūga", descricao: "Não disponivel ainda", geral:"true"},
  {id:"10", name: "Shino Aburame", descricao: "Não disponivel ainda", geral:"true"},
  {id:"11", name: "Kurenai Yūhi", descricao: "Não disponivel ainda", geral:"true"},
  {id:"12", name: "Neji Hyūga", descricao: "Não disponivel ainda", geral:"true"},
  {id:"13", name: "Tenten", descricao: "Não disponivel ainda", geral:"true"},
  {id:"14", name: "Rock Lee", descricao: "Não disponivel ainda", geral:"true"},
  {id:"15", name: "Might Guy", descricao: "Não disponivel ainda", geral:"true"},
  {id:"16", name: "Ino Yamanaka", descricao: "Não disponivel ainda", geral:"true"},
  {id:"17", name: "Shikamaru Nara", descricao: "Não disponivel ainda", geral:"true"},
  {id:"18", name: "Chōji Akimichi", descricao: "Não disponivel ainda", geral:"true"},
  {id:"19", name: "Asuma Sarutobi", descricao: "Não disponivel ainda", geral:"true"},
  {id:"20", name: "Time Taka", descricao: "Não disponivel ainda", geral:"true"},
  {id:"21", name: "Suigetsu Hōzuki", descricao: "Não disponivel ainda", geral:"true"},
  {id:"22", name: "Karin Uzumaki", descricao: "Não disponivel ainda", geral:"true"},
  {id:"23", name: "Juugo", descricao: "Não disponivel ainda", geral:"true"},
  {id:"24", name: "Orochimaru", descricao: "Não disponivel ainda", geral:"true"},
  {id:"25", name: "Kabuto Yakushi", descricao: "Não disponivel ainda", geral:"true"},
  {id:"26", name: "Jirōbō", descricao: "Não disponivel ainda", geral:"true"},
  {id:"27", name: "Kidōmaru", descricao: "Não disponivel ainda", geral:"true"},
  {id:"28", name: "Sakon e Ukon", descricao: "Não disponivel ainda", geral:"true"},
  {id:"29", name: "Tayuya", descricao: "Não disponivel ainda", geral:"true"},
  {id:"30", name: "Kimimaro Kaguya", descricao: "Não disponivel ainda", geral:"true"},
  {id:"31", name: "Madara Uchiha", descricao: "Não disponivel ainda", geral:"true"},
  {id:"32", name: "Tobi", descricao: "Não disponivel ainda", geral:"true"},
  {id:"33", name: "Pain", descricao: "Não disponivel ainda", geral:"true"},
  {id:"34", name: "Konan", descricao: "Não disponivel ainda", geral:"true"},
  {id:"35", name: "Zetsu", descricao: "Não disponivel ainda", geral:"true"},
  {id:"36", name: "Deidara Tsukuri", descricao: "Não disponivel ainda", geral:"true"},
  {id:"37", name: "Sasori", descricao: "Não disponivel ainda", geral:"true"},
  {id:"38", name: "Itachi Uchiha", descricao: "Não disponivel ainda", geral:"true"},
  {id:"39", name: "Kisame Hoshigaki", descricao: "Não disponivel ainda", geral:"true"},
  {id:"40", name: "Kakuzu", descricao: "Não disponivel ainda", geral:"true"},
  {id:"41", name: "Hidan", descricao: "Não disponivel ainda", geral:"true"},
  {id:"42", name: "Konohamaru Sarutobi", descricao: "Não disponivel ainda", geral:"true"},
  {id:"43", name: "Jiraiya", descricao: "Não disponivel ainda", geral:"true"},
  {id:"44", name: "Shizune", descricao: "Não disponivel ainda", geral:"true"},
  {id:"45", name: "Rin Nohara", descricao: "Não disponivel ainda", geral:"true"},
  {id:"46", name: "Yugao Uzuki", descricao: "Não disponivel ainda", geral:"true"},
  {id:"47", name: "Anko Mitarashi", descricao: "Não disponivel ainda", geral:"true"},
  {id:"48", name: "Kushina Uzumaki", descricao: "Não disponivel ainda", geral:"true"},
  {id:"49", name: "Shisui Uchiha", descricao: "Não disponivel ainda", geral:"true"},
  {id:"50", name: "Danzou Shimura", descricao: "Não disponivel ainda", geral:"true"},
  {id:"51", name: "Hashirama Senju", descricao: "Não disponivel ainda", geral:"true"},
];

app.get('/geral', function (req, res) {

  var personagem =  personagens.filter(function(person) {
    return person.geral == "true";
  });

  res.send(JSON.stringify(personagem));

});

app.get('/narutouzumaki', function (req, res) {

  var personagem =  personagens.filter(function(person) {
    return person.id == "1";
  });

  res.send(JSON.stringify(personagem));

});

app.get('/sasukeuchiha', function (req, res) {

  var personagem =  personagens.filter(function(person) {
    return person.id == "2";
  });

  res.send(JSON.stringify(personagem));

});


app.listen(8001, function () {
  console.log('Servidor rodando na porta 8000.');
});