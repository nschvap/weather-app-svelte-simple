<script lang="js">
  import { writable } from "svelte/store";
  import { setWeatherData } from "../stores/weatherData";
  import { error } from "@sveltejs/kit";
  import { IconSearch } from "@tabler/icons-svelte";

  const API_KEY = "a0b3f80fa0c7a9ba36648383401ef4a0";
  let CITY_NAME = "";

  // api key a0b3f80fa0c7a9ba36648383401ef4a0
  // api link https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}

  let errorObject = writable({ exist: false, message: null });

  const fetchData = async (e) => {
    e.preventDefault();

    if(!CITY_NAME) return errorObject.set({ exist: true, message: "Ingresa el nombre de una zona para buscar." });

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          CITY_NAME
        )}&appid=${API_KEY}`
      ).then((res) => {
        if (res.ok) return res.json();
        else throw new Error("No se pudo encontrar el clima de esa zona.");
      });

      setWeatherData(res);
      errorObject.set({ exist: false, message: null });
      console.log(res);
    } catch (error) {
      errorObject.set({ exist: true, message: error.message });
      console.log("NOT FOUND LOL");
    }
  };

  let displayError = { exist: false, message: null };

  $: errorObject.subscribe((val) => (displayError = val));
</script>

{#if displayError.exist}
  <div
    class="px-3 py-1 lg:w-1/3 text-white bg-red-500 text-center rounded-tr-lg rounded-br-lg rounded-bl-lg mx-auto"
  >
    {displayError.message}
  </div>
{/if}
<div
  class="flex justify-center items-center p-4 bg-slate-900/20 backdrop-blur-md rounded-lg border-[1px] border-blue-900/20 w-full lg:w-1/2 mx-auto mt-3"
>
  <form on:submit={fetchData} class="w-full flex">
    <input
      type="text"
      bind:value={CITY_NAME}
      class="w-full px-3 py-1 bg-white rounded-tl-lg rounded-bl-lg outline-none focus:bg-zinc-200 text-black text-md mx-auto"
    />
    <button
      on:click={fetchData}
      class="bg-blue-500 px-3 py-1 rounded-tr-lg rounded-br-lg text-white
      hover:brightness-75 duration-200 active:brightness-100 active:duration-0"
      ><IconSearch size={30} color="white" />
    </button>
  </form>
</div>
