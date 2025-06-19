const viajes = [
  {
    title: "SEVILLA",
    description: "Da un paseo en coche de caballo y descubre los encantos de esta preciosa ciudad",
    img: "./assets/sevilla.jpg"
  },
  {
    title: "PONTEVEDRA",
    description: "Disfruta de un precioso atardecer mientras das un paseo por este precioso paisaje",
    img: "./assets/pontevedra.jpg"
  },
  {
    title: "TOLEDO",
    description: "Ven a conocer las escaleras mecánicas más largas de España",
    img: "/assets/toledo.jpg"
  }
];

function renderViajesList() {
  const viajesList = document.getElementById("recomendados");

  viajes.forEach(viaje => {
    const article = document.createElement("article");
    article.innerHTML = `
      <h3> ${viaje.title}</h3>
      <p> ${viaje.description}</p>
      <img src= ${viaje.img}>
    `;
    viajesList.appendChild(article);
  });
}
renderViajesList();

const cities = [
  "Madrid",
  "Barcelona",
  "Valencia",
  "Sevilla",
  "Bilbao",
  "Granada",
  "Malaga",
  "Palma de Mallorca",
  "Alicante",
  "Zaragoza"
];

function renderCitiesList() {
  const citiesList = document.getElementById("ciudadSelect");

  cities.forEach(city => {
    const option = document.createElement("option");
    option.innerHTML = `${city}`;
    citiesList.appendChild(option);
  });
}
renderCitiesList(cities);
