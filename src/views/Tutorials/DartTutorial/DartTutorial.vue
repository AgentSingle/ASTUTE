<script setup>
import { ref, onMounted } from 'vue';
import NestedCard from '../../../components/Cards/ListCard/NestedCard.vue';
import { useTutorialEntryPoint } from "../../../stores/tutorialsEntryPointStore.js";
const tutorialEntryPointStore = useTutorialEntryPoint();

const setTutorialBesics = (tute) => {
    tutorialEntryPointStore.setTutorialData('dart', tute);
}

const setTutorialConditionsAndLoop = (tute) => {
    tutorialEntryPointStore.setTutorialData('dart', tute);
}

</script>

<template>
    <NestedCard buttonName="Dart Tutorial" backGround="var(--gradient-header)">
        
        <!-- DART BASIC -->
        <NestedCard buttonName="Dart Basics" backGround="var(--gradient-one)">
            <button @click="setTutorialBesics('1d1')">Dart Besic</button>

            <NestedCard buttonName="Variables">
                <ol>
                    <li @click="setTutorialBesics('2d1')">Syntax</li>
                    <li @click="setTutorialBesics('2d1_1')">Constant</li>
                    <li @click="setTutorialBesics('2d1_2')">Naming Convention</li>
                </ol>
            </NestedCard>

            <NestedCard buttonName="Data Types">
                <ol>
                    <li @click="setTutorialBesics('3d1')">Types</li>
                    <li @click="setTutorialBesics('3d1_1')">Numbers</li>
                    <li @click="setTutorialBesics('3d1_2')">String</li>
                    <li @click="setTutorialBesics('3d1_3')">Boolean</li>
                    <li @click="setTutorialBesics('3d1_4')">List</li>
                    <li @click="setTutorialBesics('3d1_5')">Sets</li>
                    <li @click="setTutorialBesics('3d1_6')">Maps</li>
                    <li @click="setTutorialBesics('3d1_7')">Runes</li>
                    <li @click="setTutorialBesics('3d1_8')">Statically Typed</li>
                    <li @click="setTutorialBesics('3d1_9')">Dynamically Typed</li>
                </ol>
            </NestedCard>
            <button @click="setTutorialBesics('4d1')">Comments</button>
            <button @click="setTutorialBesics('5d1')">Operators</button>
            <button @click="setTutorialBesics('6d1')">Input</button>
            <button @click="setTutorialBesics('7d1')">String</button>
        </NestedCard>
        <NestedCard buttonName="Dart Conditions and Loops">
            <button @click="setTutorialConditionsAndLoop('1d2')">Conditions</button>
            <button @click="setTutorialConditionsAndLoop('2d2')">Assert</button>
        </NestedCard>
    </NestedCard>
</template>

<style scoped>
button{
    width: 100%;
    min-height: 3.5rem;
    border: 1px solid gray;
    box-sizing: border-box;
    border-radius: 0.5rem;
    text-align: left;
    padding: 0.5rem;
}
ol{
    list-style-type: none;
    counter-reset: list-counter;
}
ol li{
    background-color: #fcebff;
    min-height: 3rem;
    padding: 0.5rem;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.4rem;
    counter-increment: list-counter;
    list-style-type: none;
}
ol li:nth-child(even){
    background-color: #ffdddd;
}
</style>
