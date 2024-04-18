<script setup>
import DartTutoiral from '../Tutorials/DartTutorial/DartTutorial.vue';
import FlutterTutorial from '../Tutorials/FlutterTutorial/FlutterTutorial.vue';
import DartCodeSnippet from "../../components/CodeSnippet/DartCodeSnippet.vue";

import { useTutorialEntryPoint } from "../../stores/tutorialsEntryPointStore.js";
const tutorialEntryPointStore = useTutorialEntryPoint();
import { ref } from "vue";
</script>

<template>
    <header class="FlxM XLT Tcapital Tbold">
      code snippits
    </header>
    <aside>
      <DartTutoiral></DartTutoiral>
      <FlutterTutorial ></FlutterTutorial>
    </aside>
    <section>
      <div v-if="tutorialEntryPointStore.tutorialLanguage=='dart'">
        <DartCodeSnippet
        :code="tutorialEntryPointStore.tutorialCode" 
        :codeTitle="tutorialEntryPointStore.tutorialTitle" 
        />
      </div>
      <div v-else class="container">
        Code Snippits Are Displayed Here
        <DartCodeSnippet
          :code="null" 
          :codeTitle="null" 
          />
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