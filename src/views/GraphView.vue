<script setup lang="ts">
import { useCalculatorStore } from "@/stores/calculator";

const store = useCalculatorStore();
const options = {
  xaxis: {
    categories: store.calculatorTypes,
  },
  legend: {
    show: false,
  },
  plotOptions: {
    bar: {
      distributed: true,
      dataLabels: {
        position: "top",
      },
    },
  },
  theme: {
    palette: "palette10",
    monochrome: {
      enabled: false,
    },
  },
};

const lineOptions = {
  xaxis: {
    type: "numeric",
  },
  yaxis: {
    max: 200,
  },
};
</script>

<template>
  <div class="card">
    <h2 class="font-semibold text-center">Live Graph</h2>
    <apexchart
      class="w-full max-w-lg"
      type="bar"
      :options="options"
      :series="store.calculationSeries"
    ></apexchart>
  </div>

  <div class="mt-14 card">
    <h2 class="font-semibold text-center">Static Graph</h2>
    <apexchart
      class="w-full max-w-lg"
      type="line"
      :options="lineOptions"
      :series="store.dataPairs"
    ></apexchart>
  </div>
</template>

<style></style>
