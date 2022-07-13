import { defineStore } from "pinia";

export const useCalculatorStore = defineStore({
  id: "calculator",
  state: () => ({
    inputSize: 2,
    constant: 1,
    staticInputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    calculators: [
      {
        type: "constant",
        notation: "O(1)",
        description:
          "Algorithms which always take the same amount of time to compute, no matter the input size.",
        example: "Removing one element from the end of a stack/queue.",
        calculation: function (input: number, constant: number): number {
          return constant;
        },
      },
      {
        type: "logarithmic",
        notation: "O(log(n))",
        description:
          "Algorithms with complexity log(n) increase their runtime very slowly compared to the input size. Computer programmers usually use logarithms of base 2.",
        example: "Binary search.",
        calculation: function (input: number): number {
          return Math.log2(input);
        },
      },
      {
        type: "linear",
        notation: "O(n)",
        description:
          "Algorithms which take proportionally longer to complete as the input grows.",
        example: "Iterating through an array.",
        calculation: function (input: number, constant: number): number {
          return input * constant;
        },
      },
      {
        type: "linearithmic",
        notation: "O(n log(n))",
        description:
          "Algorithms with n log(n) time complexity are slightly less efficient than those with linear complexity. They are used in many sorting algorithms.",
        example: "Merge sort.",
        calculation: function (input: number): number {
          return input * Math.log2(input);
        },
      },
      {
        type: "quadratic",
        notation: "O(n^2)",
        description:
          "Also referred to as 'n squared', and seen most often in nested loops.",
        example: "Bubble sort.",
        calculation: function (input: number): number {
          return input ** 2;
        },
      },
      {
        type: "cubic",
        notation: "O(n^3)",
        description: "Similar to quadratic complexity, but worse.",
        calculation: function (input: number): number {
          return input ** 3;
        },
      },
      {
        type: "polynomial",
        notation: "O(n^c)",
        description:
          "Similar to quadratic & cubic complexity. Toggle the constant to see how this changes!",
        calculation: function (input: number, constant: number): number {
          return input ** constant;
        },
      },
      {
        type: "exponential",
        notation: "O(2^n)",
        description:
          "Exponential times get very slow very fast, and are rarely optimal.",
        example: "Fibonacci sequence.",
        calculation: function (input: number): number {
          return 2 ** input;
        },
      },
      {
        type: "factorial",
        notation: "O(n!)",
        description:
          "Factorial time complexity is the multiplication of all positive integers less than the input size. The complexity grows extremely quickly, and should be avoided.",
        example: "Permutations of a string.",
        calculation: function (input: number): number {
          if (input === 0) {
            return 1;
          } else {
            return input * this.calculation(input - 1, 1);
          }
        },
      },
    ],
  }),
  getters: {
    calculatorTypes: (state) => {
      return state.calculators.map((c) => c.type);
    },
    calculationSeries: (state) => {
      return [
        {
          name: "complexity",
          data: state.calculators.map((c) =>
            Math.round(c.calculation(state.inputSize, state.constant))
          ),
        },
      ];
    },
    dataPairs: (state) => {
      return state.calculators.map((c) => ({
        name: c.type,
        data: state.staticInputs.map((i) => [
          i,
          Math.round(c.calculation(i, 1)),
        ]),
      }));
    },
  },
  actions: {
    // calculate(calculator: unknown) {
    //   return (this.inputSize = value);
    // },
  },
});
