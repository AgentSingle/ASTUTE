<script setup>
import { useTutorialEntryPoint } from "../../../../stores/tutorialsEntryPointStore.js";
const tutorialEntryPointStore = useTutorialEntryPoint();


import Types from "./3d1_Data_Types/3d1_0_Types.vue";
import Numbers from "./3d1_Data_Types/3d1_1_Numbers.vue";
import String from "./3d1_Data_Types/3d1_2_String.vue";
import Boolean from "./3d1_Data_Types/3d1_3_Boolean.vue";
import List from "./3d1_Data_Types/3d1_4_List.vue";
import Sets from "./3d1_Data_Types/3d1_5_Sets.vue";
import Maps from "./3d1_Data_Types/3d1_6_Maps.vue";
import Runes from "./3d1_Data_Types/3d1_7_Runes.vue";
import StaticallyTyped from "./3d1_Data_Types/3d1_8_Statically_Typed.vue";
import DynamicallyTyped from "./3d1_Data_Types/3d1_9_Dynamically_Typed.vue";

</script>

<template>
    <Types v-if="tutorialEntryPointStore.tutorialCode=='3d1'"></Types>
    <Numbers v-else-if="tutorialEntryPointStore.tutorialCode=='3d1_1'"></Numbers>
    <String v-else-if="tutorialEntryPointStore.tutorialCode=='3d1_2'"></String>
    <Boolean v-else-if="tutorialEntryPointStore.tutorialCode=='3d1_3'"></Boolean>
    <List v-else-if="tutorialEntryPointStore.tutorialCode=='3d1_4'"></List>
    <Sets v-else-if="tutorialEntryPointStore.tutorialCode=='3d1_5'"></Sets>
    <Maps v-else-if="tutorialEntryPointStore.tutorialCode=='3d1_6'"></Maps>
    <Runes v-else-if="tutorialEntryPointStore.tutorialCode=='3d1_7'"></Runes>
    <StaticallyTyped v-else-if="tutorialEntryPointStore.tutorialCode=='3d1_8'"></StaticallyTyped>
    <DynamicallyTyped v-else-if="tutorialEntryPointStore.tutorialCode=='3d1_9'"></DynamicallyTyped>
</template>

<style scoped></style>