<script setup>
import { useTutorialEntryPoint } from "../../../../stores/tutorialsEntryPointStore.js";
const tutorialEntryPointStore = useTutorialEntryPoint();
import DartCodeSnippt from '../../../../components/CS/DartCodeSnippt.vue';

import Syntax from "./2d1_Variables/2d1_0_Syntax.vue";
import Constant from "./2d1_Variables/2d1_1_Constant.vue";
import NamingConvention from "./2d1_Variables/2d1_2_Naming_Convention.vue";

</script>

<template>
    <Syntax v-if="tutorialEntryPointStore.tutorialCode=='2d1'"></Syntax>
    <Constant v-else-if="tutorialEntryPointStore.tutorialCode=='2d1_1'"></Constant>
    <NamingConvention v-else-if="tutorialEntryPointStore.tutorialCode=='2d1_2'"></NamingConvention>
</template>

<style scoped></style>