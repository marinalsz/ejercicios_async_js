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
  const list = document.getElementById("character-list");
  characters.forEach((character) => {
    const option = document.createElement("option");
    option.innerText = character.fullName;
    option.value = character.imageUrl;
    list.appendChild(option);
  });
  list.addEventListener("change", (event) => {
    const imagen = document.querySelector(".character-image");
    const imageUrl = event.target.value;
    if (imageUrl) {
      imagen.src = imageUrl;
      imagen.alt = list.selectedOptions[0].textContent;
    } else {
      imagen.src =
        "https://seeklogo.com/images/G/game-of-thrones-logo-20E37C96FE-seeklogo.com.png";
      imagen.alt = "GOT icon";
    }
  });
};

getCharacters();
