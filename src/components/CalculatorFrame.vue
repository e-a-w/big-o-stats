<script setup lang="ts">
import DividerLine from "./DividerLine.vue";
import { useCalculatorStore } from "@/stores/calculator";

export interface Props {
  calculator: any;
}

const props = defineProps<Props>();
const store = useCalculatorStore();
const notation = () => {
  const notation = props.calculator.notation.replaceAll("n", store.inputSize);

  return notation.replaceAll(/[1c]/gi, store.constant);
};
</script>

<template>
  <section class="card max-w-md h-full">
    <h2 class="font-semibold text-xl">
      {{ calculator.type }} time: {{ calculator.notation }}
    </h2>
    <DividerLine />
    <h4>
      <span class="text-blue-500 font-normal">{{ notation() }}</span> =
      <span class="text-purple-600 font-normal">{{
        Math.round(calculator.calculation(store.inputSize, store.constant))
      }}</span>
    </h4>
    <DividerLine />
    <p>
      {{ calculator.description }}
    </p>
    <DividerLine v-if="calculator.example" />
    <p v-if="calculator.example">
      <strong>Example: </strong>{{ calculator.example }}
    </p>
  </section>
</template>
