<script setup>
import { defineAsyncComponent } from 'vue';
const DartCodeSnippt = defineAsyncComponent(() =>
  import('../../../../components/CS/DartCodeSnippt.vue')
)
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
      FuncitonsOverview
    </div>

    <DartCodeSnippt codeTitle="FuncitonsOverview">
        <pre>
/*
returnType functionName(parameter1, parameter2, ...){
  function body
}
*/

void printName(){
  print("My name Agent Single");
}
// this is our main function.
void main(){
  printName();
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>