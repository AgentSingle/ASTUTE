<script setup>
import { ref, defineEmits } from "vue";
let props = defineProps({
    buttonName: String,
})

// const emit = defineEmits(["nestedCardResponse"]);

let isVisable = ref(false);
const setVisibilityStatus = () => {
    isVisable.value = !isVisable.value;
}
</script>

<template>
    <div class="NestedCardWrapper">
        <button @click="setVisibilityStatus">
            {{ buttonName }}
        </button>
        <div class="NestedCardChildWrapper">
            <slot v-if="isVisable"></slot>
        </div>
    </div>
</template>

<style scoped>
.NestedCardWrapper {
    display: flex;
    flex-direction: column;
    grid-gap: 0.5rem;
    padding: 0.5rem 0;
}

.NestedCardWrapper button {
    min-width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    background: var(--gradient-header);
    color: var(--light);
    transition: 0.5s ease-in;
    text-align: left;
}

.NestedCardWrapper button:hover {
    background: var(--gradient-header-reverse);
}

.NestedCardChildWrapper {
    margin-right: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
}
</style>