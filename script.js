const place = document.querySelector("input");
const btn = document.querySelector("#btn");
const feel = document.querySelector(".feel");
const degree = document.querySelector(".degree");
const iconImage = document.getElementById("weatherIcon");

btn.addEventListener("click", () => {
  const loc = place.value.trim();

  const weather = async () => {
    try {
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${loc}&aqi=no`
      );
      const data = await res.json();
      console.log(data);
      degree.innerHTML = `${data.current.temp_c}° C`;
      feel.innerHTML = `Feels like ${data.current.feelslike_c}° C`;
      const condition = data.current.condition.text.toUpperCase();
      const iconURL = data.current.condition.icon;
      iconImage.src = iconURL;

      let vgImg = "";
      if (condition.includes("rain")) {
        vgImg = "images/rain.jpg";
      } else if (condition.includes("cloud")) {
        vgImg = "images/cloudy.jpg";
      } else {
        vgImg = "images/patly.jpg";
      }
    } catch (error) {
      console.log("Error fetching weather:", error);
    }
  };
  weather();
});
