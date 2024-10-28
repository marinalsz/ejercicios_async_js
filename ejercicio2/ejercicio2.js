const getPokemons = async () => {
  try {
    const id = Math.floor(Math.random() * 151) + 1;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const dataJSON = await res.json();
    const imagen = document.querySelector(".random-image");
    imagen.src = dataJSON.sprites.front_default;
    imagen.alt = dataJSON.name;
  } catch (error) {
    console.error(error);
  }
};

getPokemons();
