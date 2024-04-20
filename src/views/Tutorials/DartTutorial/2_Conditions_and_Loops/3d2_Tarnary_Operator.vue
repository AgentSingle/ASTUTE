<script setup>
import DartCodeSnippt from '../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        Dart Conditions and Loops
    </div>

    <DartCodeSnippt codeTitle="Tarnery Operator">
        <pre>
void main(){
  // condition ? expressionIfTrue : expressionIfFalse

  int num1 = 10;
  int num2 = 15;
  int max = (num1>num2) ? num1: num2;
  print("The larges number is: $max");

  print((num2>num1) ? num2 : num1);
  print((num1>num2) ? num1 : num2);
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>