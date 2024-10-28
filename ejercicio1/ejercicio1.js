const getCharacters = async () => {
  try {
    const res = await fetch("https://thronesapi.com/api/v2/Characters");
    const dataJSON = await res.json();
    printCharacters(dataJSON);
  } catch (error) {
    console.error(error);
  }
};

const printCharacters = (characters) => {
  characters.forEach((character) => {
    const option = document.createElement("option");
    option.innerText = character.fullName;
    option.value = character.imageUrl;
    document.querySelector("#character-list").appendChild(option);
    const lista = document.getElementById("character-list");
    const imagen = document.querySelector(".character-image");
    lista.addEventListener("change", (event) => {
        const imageUrl = event.target.value;
        imagen.src = imageUrl;
        imagen.alt = lista.selectedOptions[0].textContent;
    });
  });
};

getCharacters();
