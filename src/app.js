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









