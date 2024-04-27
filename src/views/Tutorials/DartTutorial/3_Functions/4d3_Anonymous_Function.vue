<script setup>
import { defineAsyncComponent } from 'vue';
const DartCodeSnippt = defineAsyncComponent(() =>
  import('../../../../components/CS/DartCodeSnippt.vue')
)
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
      Anonymous Function
    </div>

    <DartCodeSnippt codeTitle="Anonymous Function">
        <pre>
/*
(parameterList){
// statements
}
*/

void main() {
// Anonymous function
  var cube = (int number) {
    return number * number * number;
  };

  print("The cube of 2 is ${cube(2)}");
  print("The cube of 3 is ${cube(3)}");
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>