<script setup lang="ts">
import TableRow from "@/components/TableRow.vue";
import { useCalculatorStore } from "@/stores/calculator";

const store = useCalculatorStore();
const columns = ["name", "notation", "calculation"];
</script>

<template>
  <div class="card">
    <table
      class="table-auto bg-gray-50 border border-gray-400 border-collapse w-10/12 my-10"
    >
      <thead
        class="w-full p-3 pl-10 bg-gradient-to-r from-gray-800 to-gray-400 text-gray-100"
      >
        <tr>
          <th
            v-for="col in columns"
            :key="col"
            scope="col"
            class="font-semibold border border-gray-400 p-2"
          >
            {{ col }}
          </th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          v-for="calculator in store.calculators"
          :key="calculator.type"
          :calculator="calculator"
        />
      </tbody>
    </table>
  </div>
</template>
