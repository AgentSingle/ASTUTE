<script setup>
import { useTutorialEntryPoint } from "../../../../stores/tutorialsEntryPointStore.js";
const tutorialEntryPointStore = useTutorialEntryPoint();

import { defineAsyncComponent } from 'vue';
const FuncitonsParameter = defineAsyncComponent(() =>
  import('./3d3_Funcitons_Parameter/3d3_0_Funcitons_Parameter.vue')
)
const PositionalParameter = defineAsyncComponent(() =>
  import('./3d3_Funcitons_Parameter/3d3_1_Positional_Parameter.vue')
)
const NamedParameter = defineAsyncComponent(() =>
  import('./3d3_Funcitons_Parameter/3d3_2_Named_Parameter.vue')
)
</script>

<template>
  <FuncitonsParameter v-if="tutorialEntryPointStore.tutorialCode=='3d3'"></FuncitonsParameter>
  <PositionalParameter v-else-if="tutorialEntryPointStore.tutorialCode=='3d3_1'"></PositionalParameter>
  <NamedParameter v-else-if="tutorialEntryPointStore.tutorialCode=='3d3_2'"></NamedParameter>
</template>

<style scoped></style>