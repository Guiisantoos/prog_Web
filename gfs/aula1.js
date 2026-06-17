const apiUrl = 'https://petadopt.onrender.com/pet/pets?page=1&limit=45';

const container = document.getElementById('cardsContainer');
const btnCarregar = document.getElementById('btnCarregar');

btnCarregar.addEventListener('click', async () => {
    container.innerHTML = '<p class="mensagem">Buscando pets na API...</p>';

    try {
        const resposta = await fetch(apiUrl);
        const data = await resposta.json();
        const pets = data.pets;

        const cardsHTML = pets.map((pet) => `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="https://media1.tenor.com/m/QelqzjctS3gAAAAd/baby-67-kid.gif">
                </div>
                <div class="flip-card-back">
          </button>
                </div>
            </div>
        </div>
                <div class="card">
<iframe width="315" height="315" src="https://www.youtube.com/embed/II5uhJTVqFw?si=hDzZ32YvSpkBYZrc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                </div>
            </div>
        </div>
      <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="${pet.images[0]}" alt="${pet.name}">
                </div>

                <div class="flip-card-back">
                    <h1>${pet.name}</h1>
                    <p>Cor: ${pet.color}</p>
                    <button class="btn-comprar" data-titulo="${pet.name}">
            Adotar
          </button>
                </div>
            </div>
        </div>
    `).join('');

        container.innerHTML = cardsHTML;
    } catch (erro) {
        console.error(erro);
        container.innerHTML = '<p class="mensagem">Erro ao buscar dados na API.</p>';
    }
});

container.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-comprar')) {
        const titulo = event.target.dataset.titulo;
        alert(`Você clicou em ${titulo}`);
    }
});