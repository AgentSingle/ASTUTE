<script setup>
let props = defineProps({
    cardTitle: String,
})
</script>

<template>
    <button class="XXXLT Tcapital Tbold">
    {{ cardTitle }}
    </button>
</template>

<style scoped>
button{
    min-height: 100px;
    min-width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    background: var(--gradient-header);
    color: var(--light);
    transition: all 0.5s;
}
button:hover{
    background: var(--gradient-header-reverse);
}
</style>