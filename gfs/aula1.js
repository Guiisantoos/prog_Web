console.log("testestestestestestestesteststestes")

const data = [
    {
        image: "https://picsum.photos/310/301",
        description: "Eu sou uma imagem"
    }, {
        image: "https://picsum.photos/311/302",
        description: "Eu sou uma imagem"
    }, {
        image: "https://picsum.photos/312/303",
        description: "Eu sou uma imagem"
    }, {
        image: "https://picsum.photos/313/304",
        description: "Eu sou uma imagem"
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
    <button>Mais</button>
    </div>

`).join("")

container.innerHTML=cardHTML;
}
console.log("Container")