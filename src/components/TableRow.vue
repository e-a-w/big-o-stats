<script setup lang="ts">
import { useCalculatorStore } from "@/stores/calculator";

export interface Props {
  calculator: any;
}

const store = useCalculatorStore();
const props = defineProps<Props>();
</script>

<template>
  <tr>
    <th scope="row" class="font-light border border-gray-400 p-2">
      {{ calculator.type }}
    </th>
    <td class="border border-gray-400 p-2">{{ calculator.notation }}</td>
    <td class="border border-gray-400 p-2">
      {{ Math.round(calculator.calculation(store.inputSize, store.constant)) }}
    </td>
  </tr>
</template>
