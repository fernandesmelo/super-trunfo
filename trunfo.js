var card1 = {
    nome: "Bulbasauro",
    imagem:
      "http://3.bp.blogspot.com/-lLJxgTnOUG4/UjHdC6caiuI/AAAAAAAAEio/zS0fVdg1Ty4/s1600/001-BulbasaurShyni.png",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  var card2 = {
    nome: "Darth Vader",
    imagem:
      "https://modobrincar.rihappy.com.br/wp-content/uploads/2022/10/quem-e-darth-vader-topo.jpg",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 2
    }
  };
  var card3 = {
    nome: "Shiryu de Dragão",
    imagem:
      "https://i.pinimg.com/736x/f2/3c/21/f23c21f8bb1963190a1d2629ab2e1f80.jpg",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 10
    }
  };
  
  var cards = [card1, card2, card3];
  var cardMachina;
  var cardPlayer;
  
  function sortearCarta() {
    var numberCardMachina = parseInt(Math.random() * 3);
    cardMachina = cards[numberCardMachina];
  
    var numberCardPlayer = parseInt(Math.random() * 3);
    while (numberCardMachina == numberCardPlayer) {
      numberCardPlayer = parseInt(Math.random() * 3);
    }
    cardPlayer = cards[numberCardPlayer];
    console.log(cardPlayer);
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    showCardPlayer();
    // showOptions();
  }
  
  function showOptions() {
    var options = document.getElementById("opcoes");
    var optionText = "";
    for (var atributo in cardPlayer.atributos) {
      optionText += `<input type="radio" name="atributo" value=${atributo} > ${atributo}  `;
    }
    options.innerHTML = optionText;
  }
  
  function getAttribSelected() {
    var radioAttrib = document.getElementsByName("atributo");
    for (i = 0; i < radioAttrib.length; i++) {
      if (radioAttrib[i].checked == true) {
        return radioAttrib[i].value;
      }
    }
  }
  
  function jogar() {
    var attribSelected = getAttribSelected();
  
    var elementResult = document.getElementById("resultado");
    var cardPlayerResult = cardPlayer.atributos[attribSelected];
    var cardMachinaResult = cardMachina.atributos[attribSelected];
  
    if (cardPlayerResult > cardMachinaResult) {
      elementResult.innerHTML = "<p class='resultado-final'>You Win!!</p>";
    } else if (cardMachinaResult > cardPlayerResult) {
      elementResult.innerHTML = "<p class='resultado-final'>You Lose!!</p>";
    } else {
      elementResult.innerHTML = "<p class='resultado-final'>Draw!</p>";
    }
    document.getElementById("btnJogar").disabled = true;
    console.log(cardMachina);
  }
  
  function showCardPlayer() {
    var divCardPlayer = document.getElementById("carta-jogador");
    divCardPlayer.style.backgroundImage = `url(${cardPlayer.imagem})`;
    var frame =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHtml = '<div id="opcoes" class="carta-status">';
  
    var optionText = "";
    for (var atributo in cardPlayer.atributos) {
      optionText += `<input type="radio" name="atributo" value=${atributo} > ${atributo} ${cardPlayer.atributos[atributo]} <br> `;
    }
  
    var nome = `<p class="carta-subtitle">${cardPlayer.nome}</p>`;
    divCardPlayer.innerHTML = frame + nome + tagHtml + optionText + "</div>";
    showCardMachina();
  }
  
  function showCardMachina() {
    var divCardMachina = document.getElementById("carta-maquina");
    divCardMachina.style.backgroundImage = `url(${cardMachina.imagem})`;
    var frame =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHtml = '<div id="opcoes" class="carta-status">';
  
    var optionText = "";
    for (var atributo in cardMachina.atributos) {
      optionText += `<p name="atributo" value=${atributo} > ${atributo} </p>`;
    }
  
    var nome = `<p class="carta-subtitle">${cardMachina.nome}</p>`;
    divCardMachina.innerHTML = frame + nome + tagHtml + optionText + "</div>";
  }
  