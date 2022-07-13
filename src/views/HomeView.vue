<script setup lang="ts">
import CalculatorFrame from "@/components/CalculatorFrame.vue";
import { useCalculatorStore } from "@/stores/calculator";

const store = useCalculatorStore();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-5 md:grid md:grid-cols-2 md:justify-items-center xl:grid xl:grid-cols-3"
  >
    <CalculatorFrame
      v-for="calculator in store.calculators"
      :key="calculator.type"
      :calculator="calculator"
    />
  </div>
</template>
