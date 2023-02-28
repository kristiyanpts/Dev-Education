async function attachEvents() {
  let submit = document.getElementById("submit");
  let location = document.getElementById("location");
  let forecast = document.getElementById("forecast");
  let weatherSymbols = {
    Sunny: "&#x2600;",
    "Partly sunny": "&#x26C5;",
    Overcast: "&#x2601;",
    Rain: "&#x2614;",
    Degrees: "&#176;",
  };
  let current = document.getElementById("current");
  let upcoming = document.getElementById("upcoming");

  submit.addEventListener("click", async function (event) {
    event.preventDefault();
    let city = location.value;
    let code = null;
    try {
      let locationsResponse = await fetch(
        "http://localhost:3030/jsonstore/forecaster/locations"
      );
      let locations = await locationsResponse.json();
      for (const location of locations) {
        if (location.name === city) {
          code = location.code;
        }
      }
      if (code === null) {
        forecast.innerHTML = "Error";
        return;
      }
      try {
        forecast.style.display = "block";
        let forecastTodayResponse = await fetch(
          `http://localhost:3030/jsonstore/forecaster/today/${code}`
        );
        let forecastThreeResponse = await fetch(
          `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`
        );
        let todayData = await forecastTodayResponse.json();
        let threeData = await forecastThreeResponse.json();

        let divCurrent = document.createElement("div");
        divCurrent.setAttribute("class", "forecasts");
        divCurrent.innerHTML = `
        <span class="condition symbol">${
          weatherSymbols[todayData.forecast.condition]
        }</span>
        <span class="condition">
        <span class="forecast-data">${todayData.name}</span>
        <span class="forecast-data">${todayData.forecast.low}/${
          todayData.forecast.high
        }</span>
        <span class="forecast-data">${todayData.forecast.condition}</span>
        </span>
        `;

        let divForecastInfo = document.createElement("div");
        divForecastInfo.setAttribute("class", "forecast-info");
        for (let i = 0; i < threeData.forecast.length; i++) {
          let divForecast = document.createElement("span");
          divForecast.setAttribute("class", "upcoming");
          divForecast.innerHTML = `
            <span class="symbol">${
              weatherSymbols[threeData.forecast[i].condition]
            }</span>
            <span class="forecast-data">${threeData.forecast[i].low}/${
            threeData.forecast[i].high
          }</span>
            <span class="forecast-data">${
              threeData.forecast[i].condition
            }</span>
            `;
          divForecastInfo.appendChild(divForecast);
        }
        upcoming.appendChild(divForecastInfo);
        current.appendChild(divCurrent);
      } catch (error) {
        forecast.innerHTML = "Error";
      }
    } catch (error) {
      forecast.innerHTML = "Error";
    }
  });
}

attachEvents();
