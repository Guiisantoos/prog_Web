console.log("testestestestestestestesteststestes")

const data = [
    {
        image: "https://picsum.photos/310/301",
        description: "Eu sou uma imagem",
            titulo:"sou1"
    }, {
        image: "https://picsum.photos/311/302",
        description: "Eu sou uma imagem",
        titulo:"sou2"
    }, {
        image: "https://picsum.photos/312/303",
        description: "Eu sou uma imagem",
        titulo:"sou3"
    }, {
        image: "https://picsum.photos/313/304",
        description: "Eu sou uma imagem",
        titulo:"sou4"
    }
]

const container = document.getElementById("cardsContainer")

function loadPage() {
    console.log("Cliquei");
    const cardHTML = data.map(card =>
        `
<div class="card">
    <img src="${card.image}" alt="imagem aleatória">
    <p>${card.description}</p>
    <button class ="btn-more" data-titulo=${card.titulo}>Mais</button>
    </div>

`).join("")

container.innerHTML=cardHTML;

container.addEventListener('click', (event)=>{

    console.log("Cliquei")
    if (event.target.classList.contains("btn-more")){
        console.log(event.target.dataset.titulo)
    }
})
}
console.log("Container")