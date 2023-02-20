const grid = document.querySelector(".grid-container");
const container2 = document.querySelector("#container2");
const aTag = document.querySelector("a");

async function getCars() {
  const response = await fetch("http://localhost:5000/cars");
  const cars = await response.json();
  console.log(cars);
  for (let i = 0; i < cars.length; i++) {
    const card = document.createElement("div");
    const brand = document.createElement("p");
    brand.innerText = cars[i].brand;
    const model = document.createElement("p");
    model.innerText = cars[i].model;
    const img = document.createElement("img");
    img.src = cars[i].img;
    grid.appendChild(card);
    card.appendChild(img);
    card.appendChild(brand);
    card.appendChild(model);
  }
}

getCars();

aTag.addEventListener("click", () => {
  container2.style.display = "block";
});
