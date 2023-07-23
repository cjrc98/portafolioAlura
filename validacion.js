//Haz tú validación en javascript acá

const morado = document.querySelector(".title__colors__item--morado");
const azul = document.querySelector(".title__colors__item--azul");
const verde = document.querySelector(".title__colors__item--verde");
const negro = document.querySelector(".title__colors__item--negro");
const amarillo = document.querySelector(".title__colors__item--amarillo");
const cambioClase = (color,stringColor) => {
    color.addEventListener("click", () => {
        const profile = document.querySelector(".title__profile");
        profile.className = '';
        profile.classList.add("title__profile");
        profile.classList.add(stringColor);
    })
}

cambioClase(morado,"morado");
cambioClase(azul,"azul");
cambioClase(verde,"verde");
cambioClase(negro,"negro");
cambioClase(amarillo,"amarillo");