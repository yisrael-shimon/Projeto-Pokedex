document.addEventListener("DOMContentLoaded", function() {
    const pokemons = document.querySelectorAll(".pokemon");
    const cartoesPokemon = document.querySelectorAll(".cartao-pokemon");
  
    pokemons.forEach((pokemon) => {
      pokemon.addEventListener("click", () => {
        // Remove a classe 'aberto' de todos os cartões
        cartoesPokemon.forEach((cartao) => {
          cartao.classList.remove("aberto");
        });
  
        // Adiciona a classe 'aberto' ao cartão correspondente ao Pokémon clicado
        const idPokemonSelecionado = pokemon.id;
        const cartaoPokemonParaAbrir = document.getElementById(`cartao-${idPokemonSelecionado}`);
        cartaoPokemonParaAbrir.classList.add("aberto");
  
        // Remove a classe 'ativo' de todos os itens da lista
        pokemons.forEach((pokemon) => {
          pokemon.classList.remove("ativo");
        });
  
        // Adiciona a classe 'ativo' ao Pokémon clicado na lista
        pokemon.classList.add("ativo");
      });
    });
  });
  