const place = document.querySelector("input");
const btn = document.querySelector("#btn");
const feel = document.querySelector(".feel");
const degree = document.querySelector(".degree");
const iconImage = document.querySelector(".icon");

function weather() {
  const loc = place.value.trim();

  const temp = async () => {
    try {
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${loc}&aqi=no`
      );
      const data = await res.json();
      console.log(data);
      degree.innerHTML = `${data.current.temp_c}° C`;
      feel.innerHTML = `Feels like ${data.current.feelslike_c}° C`;
      const condition = data.current.condition.text.toLowerCase();
      // const iconURL = data.current.condition.icon;
      // iconImage.src = iconURL;

      switch (data.current.condition.text) {
        case "Partly Cloudy":
          iconImage.innerHTML = `<img src='./amcharts_weather_icons_1.0.0/animated/cloudy.svg' alt="weatherIcon" width="200"/>`;
          break;
        case "Mist":
          iconImage.innerHTML = `<img src='./amcharts_weather_icons_1.0.0/animated/snowy-1.svg' alt="weatherIcon" width="200"/>`;
          break;
        case "Sunny":
          iconImage.innerHTML = `<img src='./amcharts_weather_icons_1.0.0/animated/snowy-1.svg' alt="weatherIcon" width="200"/>`;
          break;
        case "Overcast ":
          iconImage.innerHTML = `<img src='./amcharts_weather_icons_1.0.0/animated/rainy-1.svg' alt="weatherIcon" width="200"/>`;
          break;
          default:
            iconImage.innerHTML = `<img src='./amcharts_weather_icons_1.0.0/animated/cloudy-day-3.svg' alt="weatherIcon" width="200"/>`;
      }
    } catch (error) {
      (degree.innerHTML = "Please give a correct location"), error;
      feel.innerHTML = "";
    }
  };
  temp();
}

place.addEventListener("keyup", (e) => {
  if (e.key === "Enter") weather();
});
btn.addEventListener("click", weather);
