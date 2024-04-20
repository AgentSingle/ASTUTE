<script setup>
import { useTutorialEntryPoint } from "../../../../stores/tutorialsEntryPointStore.js";
const tutorialEntryPointStore = useTutorialEntryPoint();

import Loops from "./4d2_Loops/4d2_0_Loops.vue";
import ForLoop from "./4d2_Loops/4d2_1_For_Loop.vue";
import ForEachLoop from "./4d2_Loops/4d2_2_For_Each_Loop.vue";
import ForInLoop from "./4d2_Loops/4d2_3_For_In_Loop.vue";
import FindListKeyValue from "./4d2_Loops/4d2_4_Find_List_KeyValue.vue";
import WhileLoop from "./4d2_Loops/4d2_5_While_Loop.vue";
import DoWhileLoop from "./4d2_Loops/4d2_6_Do_While_Loop.vue";
</script>

<template>
    <Loops v-if="tutorialEntryPointStore.tutorialCode=='4d2'"></Loops>
    <ForLoop v-else-if="tutorialEntryPointStore.tutorialCode=='4d2_1'"></ForLoop>
    <ForEachLoop v-else-if="tutorialEntryPointStore.tutorialCode=='4d2_2'"></ForEachLoop>
    <ForInLoop v-else-if="tutorialEntryPointStore.tutorialCode=='4d2_3'"></ForInLoop>
    <FindListKeyValue v-else-if="tutorialEntryPointStore.tutorialCode=='4d2_4'"></FindListKeyValue>
    <WhileLoop v-else-if="tutorialEntryPointStore.tutorialCode=='4d2_5'"></WhileLoop>
    <DoWhileLoop v-else-if="tutorialEntryPointStore.tutorialCode=='4d2_6'"></DoWhileLoop>
</template>

<style scoped></style>