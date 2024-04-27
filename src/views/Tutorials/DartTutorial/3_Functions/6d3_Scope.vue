<script setup>
import { defineAsyncComponent } from 'vue';
const DartCodeSnippt = defineAsyncComponent(() =>
  import('../../../../components/CS/DartCodeSnippt.vue')
)
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
       Scope In Function
    </div>

    <DartCodeSnippt codeTitle="Scope">
        <pre>
/*
1) Method Scope
2) Global Scope
*/

// Global Scope
String question = "Is she get some one?";
void main(){
  print(question);

  // Method Scope
  String text = "Yes she got her beloved.";
  print(text);
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>