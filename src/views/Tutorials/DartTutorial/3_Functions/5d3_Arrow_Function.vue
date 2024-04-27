<script setup>
import { defineAsyncComponent } from 'vue';
const DartCodeSnippt = defineAsyncComponent(() =>
  import('../../../../components/CS/DartCodeSnippt.vue')
)
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
      Arrow Function
    </div>

    <DartCodeSnippt codeTitle="Arrow Function">
        <pre>
/*
returnType functionName(parameters...) => expression;
*/

void main(){
  double areaOfRectangle = area(10, 12);
  print(areaOfRectangle);
}

double area(double length, double width) => length*width;
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>