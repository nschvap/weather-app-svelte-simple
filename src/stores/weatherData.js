import { writable } from "svelte/store";

export const weatherData = writable({});

export const setWeatherData = (newData) => {
  weatherData.set(newData);
};
