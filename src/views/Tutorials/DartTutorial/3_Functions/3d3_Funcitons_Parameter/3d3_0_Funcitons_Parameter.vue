<script setup>
import { defineAsyncComponent } from 'vue';
const DartCodeSnippt = defineAsyncComponent(() =>
  import('../../../../../components/CS/DartCodeSnippt.vue')
)
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
      Functions Parameter
    </div>

    <DartCodeSnippt codeTitle="Functions Parameter">
        <pre>
/*
// here a and b are parameters
void add(int a, int b) {
}

Functional Parameter Are Two Types:
1) Positional Parameter
  a) Without Default Value
  b) With Default Value
2) Named Parameter
  a) Required Parameter
  b) Optional Parameter
*/
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>