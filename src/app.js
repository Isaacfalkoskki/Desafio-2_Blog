//Selecionei todos os links do Featured Menu
const featuredMenu = document.querySelectorAll("#featured-menu li a")

//Selecionei todas as categorias da sessao (category-section)
const categorySections = document.querySelectorAll(".category-section")


//Para cada item dentro da Sessao do Menu ele adiciona ou remove a classe "active"
featuredMenu.forEach(item => {

    //Adiciona funçao de click para cada link
    item.addEventListener("click", function(event) {
        //impede o comportamento padrão do navegador (não recarrega a página)
        event.preventDefault()

        //Remove a classe "active" de todos os menus
        featuredMenu.forEach(item => item.classList.remove("active"))
        categorySections.forEach(section => section.classList.remove("active"))

        //Adiciona a classe "active para o item clicado"
        this.classList.add("active")

        //Obtém o valor do atributo "data-category"
        const category = this.dataset.category

        //Seleciona a seção da categoria correspondente ao valor do "data-category"
        const activeSection = document.querySelector(`.category-section.${category}`)

        //Se a seção correspondente for encontrada, adiciona a classe "active" a ela
        if (activeSection) {
            activeSection.classList.add("active")
        }
    })
})

//Adiciona a classe "active" ao primeiro menu do Featured Menu, como se fosse um Default Menu
document.querySelector( ".category-section.random").classList.add("active")



//Validação do formulário

const form = document.getElementById("form")
const campos = document.querySelectorAll(".required")
const span = document.querySelectorAll(".span-required")
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;  //Validação se email possui a estrutura de um email

//Acionar o erro
function setError(index) {
    campos[index].style.border = "1px solid red"
    span[index].style.display = "block"
    
}

//Remover o erro
function removeError(index) {
    campos[index].style.border = ""
    span[index].style.display = "none"
}


//Validação do nome e sobrenome, se caso for menor que 3 caracteres chama a função SetError, se não se mantém o normal
function nameValidate() {
    if(campos[0].value.length < 3) {
        setError(0)
    }
    else {
        removeError(0)
    }
}
function lastNameValidate() {
    if(campos[1].value.length < 3) {
        setError(1)
    }
    else {
        removeError(1)
    }
}

//Validação de amil usando a estrutura do emailRegex
function emailValidate() {
    if(!emailRegex.test(campos[2].value)) {
        setError(2)
    }
    else {
        removeError(2)
    }
}




document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navResponsive = document.querySelector(".nav-responsive");
    const menuLinks = document.querySelectorAll(".nav-responsive a")

    

    menuToggle.addEventListener("click", function() {
        
        navResponsive.classList.toggle("active");
        
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            navResponsive.classList.remove("active");
        })
    })
});









