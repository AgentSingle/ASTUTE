<script setup>
import DartActionLinks from '../../../components/Actions/DartActions/DartActionLinks.vue';
</script>

<template>
    <header class="FlxM XLT Tcapital Tbold">
        Dart Tutorial
    </header>
    <aside>
        <DartActionLinks></DartActionLinks>
    </aside>
    <section>
        <RouterView />
    </section>
</template>

<style>
header {
    grid-column: 1 / 18;
    grid-row: 1 / 2;
    min-height: 5rem;
    background: var(--gradient-header);
}

aside {
    grid-column: 1 / 4;
    grid-row: 2 / 18;
    border-right: 1px solid gray;
    box-sizing: border-box;
}

section {
    /* height: calc(100vh - 5rem); */
    max-height: calc(100vh - 5rem);
    grid-column: 4 / 18;
    grid-row: 2 / 18;
}
</style>
