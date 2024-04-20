<script setup>
import Loader from "../../components/Loader/Base.vue";
import DartTutoiral from '../Tutorials/DartTutorial/DartTutorial.vue';
import FlutterTutorial from '../Tutorials/FlutterTutorial/FlutterTutorial.vue';
import VisualizeDartCode from '../../views/Tutorials/DartTutorial/VisualizeDartCode.vue';

import { useTutorialEntryPoint } from "../../stores/tutorialsEntryPointStore.js";
const tutorialEntryPointStore = useTutorialEntryPoint();
</script>

<template>
    <header class="FlxM XLT Tcapital Tbold">
      code snippits
    </header>
    <aside>
      <DartTutoiral></DartTutoiral>
      <hr>
      <FlutterTutorial ></FlutterTutorial>
      <hr>
    </aside>
    <section>
      <div v-if="tutorialEntryPointStore.tutorialLanguage=='dart'">
        <VisualizeDartCode></VisualizeDartCode>
      </div>
      <div v-else class="container">
        <!-- Code Snippits Are Come Here -->
        <Loader></Loader>
      </div>
    </section>
</template>

<style scoped>
header {
    grid-column: 1 / 18;
    grid-row: 1 / 2;
    min-height: 5rem;
    background: var(--gradient-header);
    color: var(--light);
}
aside{
    grid-column: 1 / 4;
    grid-row: 2 / 18;
    padding: 1rem;
    border-right: 1px solid gray;
    box-sizing: border-box;
    overflow-y: scroll;
}
section {
    /* height: calc(100vh - 5rem); */
    max-height: calc(100vh - 5rem);
    grid-column: 4 / 18;
    grid-row: 2 / 18;
    padding: 1rem;
    overflow-y: scroll;
}
</style>