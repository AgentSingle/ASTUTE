<script setup>
import { ref, onMounted, defineProps, watch } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-dart'; // Import Dart language module

const props = defineProps({
  code: undefined,
});

const code = ref('');

let codeRef = ref(null); // Define codeRef

const highlightCode = () => {
  Prism.highlightElement(codeRef.value);
};

onMounted(() => {
  code.value = props.code;
  highlightCode();
});
// watch(code, ()=>{
//   highlightCode();
// })
</script>

<template>
  <div class="CodeWrapper">
    <pre>
      <code :class="`language-dart`" ref="codeRef">{{ code }}</code>
    </pre>
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

pre {
  overflow-x: auto; /* Enable horizontal scrolling */
  font-size: 1.2rem;
  border-radius: 1rem;
  padding: 0 2rem;
}
</style>
