<script lang="js">
  import {
    IconDropletHalf2Filled,
    IconMoodPlus,
    IconTemperature,
    IconWind,
  } from "@tabler/icons-svelte";

  export let data;
</script>

<div
  class="flex flex-col justify-center items-center p-4 bg-slate-900/20 backdrop-blur-md rounded-lg border-[1px] border-blue-900/20 max-w-1/2 mx-auto mt-5"
>
  <div class="flex gap-x-3 items-center">
    <img
      src="https://raw.githubusercontent.com/stefangabos/world_countries/master/data/flags/64x64/{data.sys.country.toLowerCase()}.png"
      alt={data.name}
    />
    <div class="flex flex-col items-center">
      <h3 class="text-center text-zinc-800 text-2xl font-black">{data.name}</h3>
      <p class="text-zinc-700 italic font-light text-md">{data.weather[0].main}</p>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center mt-2">
    <div class="grid grid-cols-2 gap-5 w-full">
      <p
        class="text-md text-zinc-800 font-light flex gap-x-3 items-center italic"
      >
        <IconWind size={30} color={"black"} />
        {data.wind.speed}km/h
      </p>
      <p
        class="text-md text-zinc-800 font-light flex gap-x-3 items-center italic"
      >
        <IconTemperature size={30} color={"black"} />
        {(data.main.temp - 273.15).toFixed(2)} °C
      </p>
    </div>
    <div class="grid grid-cols-2 gap-5 w-full mt-2">
      <p
        class="text-md text-zinc-800 font-light flex gap-x-3 items-center italic"
      >
        <IconDropletHalf2Filled size={30} color="black" />
        {data.main.humidity}% Hum.
      </p>
      <p
        class="text-md text-zinc-800 font-light flex gap-x-3 items-center italic"
      >
        <IconMoodPlus size={30} color={"black"} />
        Feels Like {(data.main.feels_like - 273.15).toFixed(2)} °C
      </p>
    </div>
  </div>
</div>
