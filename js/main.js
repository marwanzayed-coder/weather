// Get Weather details
let input = document.getElementById("input"),
  btn = document.getElementById("btn"),
  result = document.querySelector(".result .container");

btn.addEventListener("click", getInputVal);

function getInputVal() {
  let city = input.value.toLowerCase();
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44&units=metric`;
  fetchData(url);
}

async function fetchData(url) {
  try {
    let myData = await fetch(url);
    let data = await myData.json();
    // Clear Data In result container
    result.innerHTML = "";
    // Create Main Div
    let div = document.createElement("div");
    div.className = "weather";

    // Create Heading One (Country And City)
    let heading_one = document.createElement("h1"),
      heading_text = document.createTextNode(
        `${data.name}, ${data.sys.country}`
      );

    // Append Text Variable On In heading_one
    heading_one.appendChild(heading_text);

    let divParg = document.createElement("div");

    // Create temperature Paragraph (Country And City)
    let temperature = document.createElement("p"),
      temperature_text = document.createTextNode(
        `Temperature: ${Math.floor(data.main.temp)}°`
      );

    // Append Text Variable On In heading_one
    temperature.appendChild(temperature_text);

    // Create Humidity Paragraph (Country And City)
    let humidity = document.createElement("p"),
      humidity_text = document.createTextNode(
        `Humidity: ${Math.floor(data.main.humidity)}%`
      );

    // Append Text Variable On In heading_one
    humidity.appendChild(humidity_text);

    // Create temperature Paragraph (Country And City)
    let max_temperature = document.createElement("p"),
      max_temperature_text = document.createTextNode(
        `Max Temperature: ${Math.floor(data.main.temp_max)}°`
      );

    // Append Text Variable On In heading_one
    max_temperature.appendChild(max_temperature_text);

    // Create Humidity Paragraph (Country And City)
    let min_temperature = document.createElement("p"),
      min_temperature_text = document.createTextNode(
        `Min Temperature: ${Math.floor(data.main.temp_min)}°`
      );

    // Append Text Variable On In heading_one
    min_temperature.appendChild(min_temperature_text);

    // Append heading_one Variable On In Main Div
    div.appendChild(heading_one);

    // Append temperature Variable On In Main Div
    divParg.appendChild(temperature);

    // Append Humidity Variable On In Main Div
    divParg.appendChild(humidity);

    // Append Max temperature Variable On In Main Div
    divParg.appendChild(min_temperature);

    // Append Min temperature Variable On In Main Div
    divParg.appendChild(max_temperature);

    div.appendChild(divParg);

    // Append Main Div Variable On In Page
    result.appendChild(div);
  } catch (reason) {
    // Create Main Div
    let div = document.createElement("div");
    div.className = "error";

    // Create Heading One (Error Text)
    let heading_one = document.createElement("h1"),
      heading_text = document.createTextNode(
        "Sorry the weather failed to fetch. Please try again or check if the city name is correct"
      );

    // Append Text Variable On In heading_one
    heading_one.appendChild(heading_text);

    // Append heading_one Variable On In Main Div
    div.appendChild(heading_one);

    // Append Main Div Variable On In Page
    result.appendChild(div);
    console.log(`Reason: ${reason}`);
  }
}

let up = document.querySelector(".up");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    up.style.display = "flex";
  } else {
    up.style.display = "none";
  }
};

up.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
