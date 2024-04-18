<script setup>
import { ref, onMounted, defineProps, watch } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-dart'; // Import Dart language module

const props = defineProps({
  codeTitle: String,
});

// let code = ref('');
let codeRef = ref(null); // Define codeRef

const highlightCode = () => {
    setTimeout(() => {
        Prism.highlightElement(codeRef.value);
    }, 8);
};

onMounted(() => {
    //   code.value = props.code;
    highlightCode();
});

</script>

<template>
    <div class="CodeWrapper">
    <div class="SnippitTitle">{{ codeTitle }}</div>
        <pre><code :class="`language-dart`" ref="codeRef"><slot></slot></code></pre>
    </div>
</template>

<style>
/* @import 'prismjs/themes/prism-coy.css'; */
/* @import 'prismjs/themes/prism-dark.css'; */
/* @import 'prismjs/themes/prism-funky.css'; */
/* @import 'prismjs/themes/prism-okaidia.css'; */
/* @import 'prismjs/themes/prism-solarizedlight.css'; */
@import 'prismjs/themes/prism-twilight.css';
@import 'prismjs/themes/prism-tomorrow.css';

.CodeWrapper {
    width: calc(100% - 2rem);
    padding: 0.5rem 1rem;
}

.SnippitTitle {
    text-transform: capitalize;
    font-weight: bold;
}

pre {
    overflow-x: auto;
    /* Enable horizontal scrolling */
    font-size: 1.2rem;
    border-radius: 1rem;
    padding: 0 2rem;
    min-height: calc(80vh - 7rem);
}
</style>
