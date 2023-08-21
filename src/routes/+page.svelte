<script>
  import "../app.css";
  import DisplayData from "../components/display-data.svelte";
  import SearchComponent from "../components/search-component.svelte";
  import { weatherData } from "../stores/weatherData";

  let displayData = weatherData;
  $: weatherData.subscribe((v) => (displayData = v));
</script>

<main class="min-h-screen put-bg-here flex items-center flex-col justify-center px-3">
  <h1 class="text-2xl lg:text-4xl font-black text-zinc-800 text-center pb-3">
    Weather App SvelteKit
  </h1>
  <SearchComponent />
  {#if displayData.hasOwnProperty("name")}
    <DisplayData data={displayData} />
  {:else}
    <h2 class="text-center text-white text-2xl font-black mt-5">No hay informacion todavia...</h2>
  {/if}
</main>
