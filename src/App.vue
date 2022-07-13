<script setup lang="ts">
import ResultsFrame from "./components/ResultsFrame.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="header-nav">
    <nav class="flex gap-5">
      <RouterLink to="/">Calculators</RouterLink>
      <RouterLink to="/graph">Graph</RouterLink>
      <RouterLink to="/table">Table</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <ResultsFrame />

  <main class="relative pb-20 flex flex-col justify-center items-center w-full">
    <RouterView />
  </main>
</template>

<style></style>
