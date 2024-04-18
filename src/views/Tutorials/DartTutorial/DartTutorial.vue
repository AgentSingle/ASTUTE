<script setup>
import { ref, onMounted } from 'vue';
import NestedCard from '../../../components/Cards/ListCard/NestedCard.vue';
import { useTutorialEntryPoint } from "../../../stores/tutorialsEntryPointStore.js";
const tutorialEntryPointStore = useTutorialEntryPoint();

import { Basics } from '../DartTutorial/1_Besics/0_Besics.js';
const setTutorialBesics = (tute, title) => {
    tutorialEntryPointStore.setTutorialData('dart', Basics[tute], title);
}

import { ConditionsAndLoops } from '../DartTutorial/2_Conditions_and_Loops/0_ConditionsAndLoop.js';
const setTutorialConditionsAndLoop = (tute, title) => {
    tutorialEntryPointStore.setTutorialData('dart', ConditionsAndLoops[tute], title);
}

</script>

<template>
    <NestedCard buttonName="Dart Tutorial">
        <NestedCard buttonName="Dart Basics">
            <button @click="setTutorialBesics('1d1', 'Dart Besic')">Dart Besic</button>
            <button @click="setTutorialBesics('2d1', 'Variables')">Variables</button>
            <button @click="setTutorialBesics('3d1', 'Data Types')">Data Types</button>
            <button @click="setTutorialBesics('4d1', 'Comments')">Comments</button>
            <button @click="setTutorialBesics('5d1', 'Operators')">Operators</button>
            <button @click="setTutorialBesics('6d1', 'Input')">Input</button>
            <button @click="setTutorialBesics('7d1', 'String')">String</button>
        </NestedCard>
        <NestedCard buttonName="Dart Conditions and Loops">
            <button @click="setTutorialConditionsAndLoop('1d2', 'Conditions')">Conditions</button>
            <button @click="setTutorialConditionsAndLoop('2d2', 'Assert')">Assert</button>
        </NestedCard>
    </NestedCard>
</template>

<style scoped>
button{
    width: 100%;
    height: 3.5rem;
    border: 1px solid gray;
    box-sizing: border-box;
    border-radius: 0.5rem;
    text-align: left;
    padding: 0.5rem;
}
</style>
