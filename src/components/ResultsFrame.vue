<script setup lang="ts">
import { useCalculatorStore } from "@/stores/calculator";

const calculatorStore = useCalculatorStore();

const setInputSize = (e: Event): void => {
  const n = parseFloat((e.target as HTMLInputElement).value);

  if (n >= 0) calculatorStore.inputSize = n;
};

const setConstant = (e: Event): void => {
  const n = parseFloat((e.target as HTMLInputElement).value);

  if (n >= 0) calculatorStore.constant = n;
};
</script>

<template>
  <aside
    class="w-full flex flex-wrap gap-5 justify-center fixed top-[50px] left-0 bg-gray-200/80 z-10 py-2 px-10"
  >
    <div class="flex justify-center items-center gap-2">
      <h2 class="font-semibold">Input size (n):</h2>
      <input
        type="number"
        min="0"
        class="border border-gray-600 rounded-sm px-3 py-1 w-26"
        @change="setInputSize"
        :value="calculatorStore.inputSize"
      />
    </div>
    <div class="flex justify-center items-center gap-2">
      <h2 class="font-semibold">Constant (c):</h2>
      <input
        type="number"
        min="0"
        class="border border-gray-600 rounded-sm px-3 py-1 w-26"
        @change="setConstant"
        :value="calculatorStore.constant"
      />
    </div>
  </aside>
</template>

<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  opacity: 1;
  visibility: visible;
  cursor: pointer;
}
</style>
