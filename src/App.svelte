<script lang="ts">
  import Tailwindcss from "./Tailwindcss.svelte";
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import Topbar from "./components/Topbar.svelte";
  import Activity from "./pages/Activity.svelte";
  import Achievement from "./pages/Achievement.svelte";
  import Join from "./pages/Join.svelte";
  import Memberlist from "./pages/Memberlist.svelte";
  import Works from "./pages/Works.svelte";
  import NotFound from "./pages/404.svelte" 
  import Footer from "./components/Footer.svelte"

  const routes = {
    "/":  Home,
    "/achievement": Achievement,
    "/join": Join,
    "/works": Works,
    "/members": Memberlist,
    "/activity": Activity,
    "*": NotFound
  }
</script>

<Tailwindcss/>

<div class="w-screen h-screen">
  <main class="w-full sm:w-2/3 mx-auto">
    <Topbar/>
    <Router routes={routes} />
      <!-- <Activity/>
      <Achievement/>
      <Works/>
      <Memberlist/>
      <Join/>
      <Home/> -->
    <Footer/>
  </main>
</div>

<style>
    main {
        max-width: 700px;
    }
</style>

