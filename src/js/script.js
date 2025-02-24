const cartoesPokemon = document.querySelectorAll('.cartao-pokemon');
const listaPokemon = document.querySelectorAll('.pokemon');


listaPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () => {

        cartoesPokemon.forEach(cartao => cartao.classList.remove('aberto'));
        listaPokemon.forEach(pokemon => pokemon.classList.remove('ativo'));

        const idPokemon = pokemon.attributes.id.value;
        const cartaoPokemon = document.getElementById('cartao-' + idPokemon);
        cartaoPokemon.classList.add('aberto');

        pokemon.classList.add('ativo');

    })
});

const musicaFundo = document.getElementById('musica-fundo');

function iniciarMusica() {
    musicaFundo.play().catch(error => {
        console.error('Erro ao tentar reproduzir automaticamente a música de fundo: ', error);
    });

}

document.body.addEventListener('click', iniciarMusica);

