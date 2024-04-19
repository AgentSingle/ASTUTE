<script setup>
import { useTutorialEntryPoint } from "../../../../stores/tutorialsEntryPointStore.js";
const tutorialEntryPointStore = useTutorialEntryPoint();

import IfCondition from "./1d2_Conditions/1d2__0_if.vue";
import IfElseCondition from "./1d2_Conditions/1d2__1_if_else.vue";
import IfElseIfCondition from "./1d2_Conditions/1d2__2_if_elese_if.vue";
import SwithchCase from "./1d2_Conditions/1d2__3_swithch_case.vue";
</script>

<template>
    <IfCondition v-if="tutorialEntryPointStore.tutorialCode=='1d2'"></IfCondition>
    <IfElseCondition v-else-if="tutorialEntryPointStore.tutorialCode=='1d2_1'"></IfElseCondition>
    <IfElseIfCondition v-else-if="tutorialEntryPointStore.tutorialCode=='1d2_2'"></IfElseIfCondition>
    <SwithchCase v-else-if="tutorialEntryPointStore.tutorialCode=='1d2_3'"></SwithchCase>
</template>

<style scoped></style>