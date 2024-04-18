<script setup>
import { ref, onMounted } from 'vue';
import NestedCard from '../../../components/Cards/ListCard/NestedCard.vue';
import { useTutorialEntryPoint } from "../../../stores/tutorialsEntryPointStore.js";
const tutorialEntryPointStore = useTutorialEntryPoint();

import { Basics } from '../DartTutorial/1_Besics/0_Besics.js';
const setTutorial = (tute, title) => {
    tutorialEntryPointStore.setTutorialData('dart', Basics[tute], title);
}
</script>

<template>
    <NestedCard buttonName="Dart Tutorial">
        <NestedCard buttonName="Basics">
            <button @click="setTutorial('1d1', 'Dart Besic')">Dart Besic</button>
            <button @click="setTutorial('2d1', 'Variables')">Variables</button>
            <button>Data Types</button>
            <button>Comments</button>
            <button>Operators</button>
            <button>Input</button>
            <button>String</button>
        </NestedCard>
    </NestedCard>
</template>

<style scoped>
button{
    width: 100%;
    height: 4rem;
    border: 1px solid gray;
    box-sizing: border-box;
    border-radius: 0.5rem;
}
</style>
