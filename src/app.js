const featuredMenu = document.querySelectorAll("#featured-menu li a")
const categorySections = document.querySelectorAll(".category-section")

featuredMenu.forEach(item => {
    item.addEventListener("click", function(event) {
        event.preventDefault()

        featuredMenu.forEach(item => item.classList.remove("active"))
        categorySections.forEach(section => section.classList.remove("active"))

        this.classList.add("active")

        const category = this.dataset.category

        const activeSection = document.querySelector(`.category-section.${category}`)

        if (activeSection) {
            activeSection.classList.add("active")
        }
    })
})

document.querySelector( ".category-section.random").classList.add("active")