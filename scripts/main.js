const planetSelect = document.querySelector(".select");
const btn = document.querySelector("button");
const massInput = document.querySelector("input");
const imageEl = document.querySelector(".planet-image");
const textEl = document.querySelector("#text");
const textContainer = document.querySelector("#text-container");
const imageContainer = document.querySelector("#img-container");
const weightEl = document.querySelector("#weight");

// const planets = [
//     "Mercury",
//     "Venus",
//     "Earth",
//     "Moon",
//     "Mars",
//     "Jupiter",
//     "Saturn",
//     "Uranus",
//     "Neptune",
//     "Pluto"
// ]

// weight = mass * acc;
const planets = {
    "MERCURY": {image: "./images/mercury.png", acc: 5},
    "VENUS": {image: "./images/venus.png", acc: 5},
    "EARTH": {image: "./images/earth.png", acc: 9.8},
    "MOON": {image: "./images/moon.png", acc: 5},
    "MARS": {image: "./images/mars.png", acc: 5},
    "JUPITER": {image: "./images/jupiter.png", acc: 5},
    "SATURN": {image: "./images/saturn.png", acc: 5},
    "URANUS": {image: "./images/uranus.png", acc: 5},
    "NEPTUNE": {image: "./images/neptune.png", acc: 5},
    "PLUTO": {image: "./images/pluto.png", acc: 5}
}

createSelectOptions();
btn.addEventListener("click", clickBtn);

function createSelectOptions() {
    // planets.forEach(planet => {
    // })

    for(let planet in planets) {
        const option = document.createElement("option");
        // option.classList.add("uppercase")
        option.innerHTML = planet;
        // option.value = planet;
        planetSelect.appendChild(option);
    }
}

function clickBtn() {
    const mass = Number(massInput.value);
    const planet = planetSelect.value; 
    const image = planets[planet]?.image || "";
    const acc = planets[planet]?.acc || 0;

    textContainer.classList.replace("hidden", "flex");
 
    if (mass && image && acc) {
        imageContainer.classList.replace("hidden", "flex");
        imageEl.setAttribute("src", image);

        const weight = mass * acc;
        weightEl.innerHTML = `<span>${weight} N</span>`;
        weightEl.classList.replace("hidden", "grid");
        
        textEl.innerHTML = `The weight of the object on <span style="font-weight: 700;">${planet}</span>`;
        console.log("Everything okay for calculation. ", "Weight is ", weight);
    } 
    
    if (!planet) {
        imageContainer.classList.replace("flex", "hidden");
        textEl.innerHTML = "You did not choose a planet yet";
        weightEl.classList.replace("grid", "hidden");
        console.log("No planet");
    }
    
    if (!mass) {
        textEl.innerHTML = "Mass is required";
        weightEl.classList.replace("grid", "hidden");
        console.log("No mass");
    } 
    
    // imageEl.setAttribute("src", image);

    console.log({mass, planet, image});
}