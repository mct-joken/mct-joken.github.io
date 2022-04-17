<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Tailwindcss from "./Tailwindcss.svelte";

  import Home from "./pages/Home.svelte";
  import Topbar from "./components/Topbar.svelte";
  import Activity from "./pages/Activity.svelte";
  import Achievement from "./pages/Achievement.svelte";
  import Join from "./pages/Join.svelte";
  import Memberlist from "./pages/Memberlist.svelte";
  import Works from "./pages/Works.svelte";
</script>

<Tailwindcss/>

<Router>
  <div class="w-screen h-screen">
    <main class="w-full sm:w-2/3 mx-auto">
      <Topbar/>
      <!--  ここからルーティング    -->

      <Route path="activity">
        <Activity/>
      </Route>

      <Route path="achievement">
        <Achievement/>
      </Route>

      <Route path="works">
        <Works/>
      </Route>

      <Route path="members">
        <Memberlist/>
      </Route>

      <Route path="join">
        <Join/>
      </Route>

      <Route path="">
        <Home/>
      </Route>

    </main>
    <footer class="text-center">
      <p>(C) 2022 松江高専 情報科学研究部</p>
    </footer>
  </div>
</Router>

<style>
    main {
        max-width: 700px;
    }
</style>

