<script setup>
import { useTutorialEntryPoint } from "../../../../stores/tutorialsEntryPointStore.js";
const tutorialEntryPointStore = useTutorialEntryPoint();

import String from "./7d1_String/7d1__0_String.vue";
import Concatenation from "./7d1_String/7d1_1_Concatenation.vue";
import Properties from "./7d1_String/7d1_2_Properties.vue";
import Methods from "./7d1_String/7d1_3_Methods.vue";
</script>

<template>
    <String v-if="tutorialEntryPointStore.tutorialCode=='7d1'"></String>
    <Concatenation v-else-if="tutorialEntryPointStore.tutorialCode=='7d1_1'"></Concatenation>
    <Properties v-else-if="tutorialEntryPointStore.tutorialCode=='7d1_2'"></Properties>
    <Methods v-else-if="tutorialEntryPointStore.tutorialCode=='7d1_3'"></Methods>
</template>

<style scoped></style>