<template>
  <div>
    <div class="cuntry">
      <input type="text" v-model="City" />
      <button @click="fetchWeather()">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>

    <div v-if="weatherData" class="box">
      <div class="top">
        <div class="left">
          <img
            :src="getWeatherIconUrl(weatherData.current.condition.icon)"
            alt=""
          />
          <h1>{{ weatherData.current.temp_c }}°C</h1>
        </div>

        <div class="right">
          <h1>
            {{ weatherData.location.name }},
            {{ weatherData.location.country }}
          </h1>
          <p>Feels like: {{ weatherData.current.feelslike_c }}°C</p>
          <p>{{ weatherData.current.condition.text }}</p>
        </div>
      </div>

      <div class="bottom">
        <div class="icons">
          <div class="col">
            <i class="fa-solid fa-wind"></i>
            <p>{{ weatherData.current.wind_kph }}KpH</p>
          </div>
          <div class="col">
            <i class="fa-regular fa-compass"></i>
            <p>{{ weatherData.current.wind_dir }}</p>
          </div>
          <div class="col">
            <i class="fa-solid fa-cloud-rain"></i>
            <p>{{ weatherData.current.precip_mm }}%</p>
          </div>
          <div class="col">
            <i class="fa-solid fa-cloud"></i>
            <p>{{ weatherData.current.cloud }}%</p>
          </div>
          <div class="col">
            <div class="uv">
              <i class="fa-solid fa-u"></i> <i class="fa-solid fa-v"></i>
            </div>
            <p>{{ weatherData.current.uv }}%</p>
          </div>
          <div class="col">
            <i class="fa-solid fa-droplet"></i>
            <p>{{ weatherData.current.humidity }}%</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="cuntry">
        <p>Loading weather data...</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      weatherData: null,
      City: ["cairo"],
      //   iconsrc: this.weatherData.current.condition.icon,
    };
  },

  methods: {
    async fetchWeather() {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=643502edb52c4881851154653240303&q=${this.City}&aqi=no`
        );
        this.weatherData = response.data;
        console.log(`OK`);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    },
    getWeatherIconUrl(iconCode) {
      // Construct the URL for the weather icon using the icon code from the API response
      return `http:${iconCode}`;
    },
  },
};
// console.log(this.weatherData);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "../SCSS/comps/comp-weather";
</style>
