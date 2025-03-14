//Função para mostrar os cards na categoria selecionada

//Selecionei todos os links do Featured Menu
const featuredMenu = document.querySelectorAll("#featured-menu li a");

//Selecionei todas as categorias da sessao (category-section)
const categorySections = document.querySelectorAll(".category-section");

//Para cada item dentro da Sessao do Menu ele adiciona ou remove a classe "active"
featuredMenu.forEach((item) => {
  //Adiciona funçao de click para cada link
  item.addEventListener("click", function (event) {
    //impede o comportamento padrão do navegador (não recarrega a página)
    event.preventDefault();

    //Remove a classe "active" de todos os menus
    featuredMenu.forEach((item) => item.classList.remove("active"));
    categorySections.forEach((section) => section.classList.remove("active"));

    //Adiciona a classe "active para o item clicado"
    this.classList.add("active");

    //Obtém o valor do atributo "data-category"
    const category = this.dataset.category;

    //Seleciona a seção da categoria correspondente ao valor do "data-category"
    const activeSection = document.querySelector(
      `.category-section.${category}`
    );

    //Se a seção correspondente for encontrada, adiciona a classe "active" a ela
    if (activeSection) {
      activeSection.classList.add("active");

      if (category === "random") {
        randomItems(activeSection);
      } else {
        const items = activeSection.querySelectorAll(".ui-card");
        items.forEach((item) => (item.style.display = "block"));
      }
    }
  });
});




//Funçao para embaralhar os .Ui-card no random
function randomItems(section) {
  const items = section.querySelectorAll(".ui-card");

  //Embaralha os itens do array
  const shuffledItems = Array.from(items).sort(() => 0.5 - Math.random());

  //Esconde todos os itens primeiro
  shuffledItems.slice(2).forEach((item) => (item.style.display = "none"));

  //Exibe apenas os dois selecionados aleatoriamente
  shuffledItems.slice(0, 3).forEach((item) => (item.style.display = "block"));
}

//Adiciona a classe "active" ao primeiro menu do Featured Menu, como se fosse um Default Menu
document.querySelector(".category-section.random").classList.add("active");

//Exibe aleatoriamente 2 itens na categoria random por padrão
randomItems(document.querySelector(".category-section.random"));




//Funcao dos botao adicionar no Featured Menu na seção Shop

//Seleciono todos os elementos do shop
const randomSection = document.querySelector(".random");
const catSection = document.querySelector(".cat");
const dogsSection = document.querySelector(".dogs");
const fishSection = document.querySelector(".fish");
const birdsSection = document.querySelector(".birds");

//Crio a Função para os botoes
function addAndRemove(event) {
  // Verifica se o clique foi no botão de adicionar (+) ou remover (-)
  if (
    event.target.classList.contains("btn-action-add") ||
    event.target.classList.contains("btn-action-remove")
  ) {
    const quantityElement = event.target
      .closest(".btn-add")
      .querySelector(".quantity"); // Encontra o elemento da quantidade

    let quantity = parseInt(quantityElement.textContent); // Pega o valor atual da quantidade

    if (event.target.classList.contains("btn-action-add")) {
      quantityElement.textContent = quantity + 1; // Aumenta a quantidade
    } else if (
      event.target.classList.contains("btn-action-remove") &&
      quantity > 1
    ) {
      quantityElement.textContent = quantity - 1; // Diminui a quantidade, e não permite valores negativos
    }
  }
}

//Chamo a função para os botoes
randomSection.addEventListener("click", addAndRemove);
catSection.addEventListener("click", addAndRemove);
dogsSection.addEventListener("click", addAndRemove);
fishSection.addEventListener("click", addAndRemove);
birdsSection.addEventListener("click", addAndRemove);




//Validação do formulário

const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const span = document.querySelectorAll(".span-required");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //Validação se email possui a estrutura de um email

//Acionar o erro
function setError(index) {
  campos[index].style.border = "1px solid red";
  span[index].style.display = "block";
}

//Remover o erro
function removeError(index) {
  campos[index].style.border = "";
  span[index].style.display = "none";
}

//Validação do nome e sobrenome, se caso for menor que 3 caracteres chama a função SetError, se não se mantém o normal
function nameValidate() {
  if (campos[0].value.length < 3) {
    setError(0);
  } else {
    removeError(0);
  }
}
function lastNameValidate() {
  if (campos[1].value.length < 3) {
    setError(1);
  } else {
    removeError(1);
  }
}

//Validação de email usando a estrutura do emailRegex
function emailValidate() {
  if (!emailRegex.test(campos[2].value)) {
    setError(2);
  } else {
    removeError(2);
  }
}




//Funcao Toggle menu para mobile
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navResponsive = document.querySelector(".nav-responsive");
  const menuLinks = document.querySelectorAll(".nav-responsive a");

  //Quando o Toggle menu for clicado, adciona o .active na classe que foi alterado para display Block no css
  menuToggle.addEventListener("click", function () {
    navResponsive.classList.toggle("active");
  });

  //Para cada link dentro do menu de navegação
  menuLinks.forEach((link) => {
    //Quando qualquer link dentro do menu de navegação for clicado
    link.addEventListener("click", function () {
      //Remove a classe .active para que seja escondido
      navResponsive.classList.remove("active");
    });
  });
});




//Função que altera o display search para mobile
function toggleSearch() {
  const input = document.querySelector(".btn-search");

  input.style.border = "1px solid black";

  //Altera a classe .active no motao, tanto para ativar ou desativar
  input.classList.toggle("active");
}
