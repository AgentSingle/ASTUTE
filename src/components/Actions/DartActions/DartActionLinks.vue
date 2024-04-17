<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="AsideLinksContainer">
        <RouterLink :to="{name: 'DartTutorial'}">
            defalut
        </RouterLink>
    </div>
</template>

<style scoped>
.AsideLinksContainer{
    width: calc(100% - 2rem);
    height: 100%;
    display: flex;
    padding: 1rem;
}
</style>