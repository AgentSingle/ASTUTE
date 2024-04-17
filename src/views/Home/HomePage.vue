<script setup>

</script>

<template>
    <header class="FlxM XLT Tcapital Tbold">
    agent single Coding Tutorial
    </header>
    <nav>
     Navigation Bar
    </nav>
    <section>
        <RouterLink :to="{name: 'Dart'}">
            <button>
                Learn Dart
            </button>
        </RouterLink>
    </section>
</template>

<style scoped>
header {
  grid-column: 1 / 18;
  grid-row: 1 / 2;
  min-height: 5rem;
  background: var(--gradient-header);

}

section {
  /* height: calc(100vh - 5rem); */
  max-height: calc(100vh - 5rem);
  grid-column: 1 / 18;
  grid-row: 2 / 18;
}
</style>