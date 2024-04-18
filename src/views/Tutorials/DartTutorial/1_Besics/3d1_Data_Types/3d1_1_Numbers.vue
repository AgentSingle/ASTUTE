<script setup>
import DartCodeSnippt from '../../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        Dart Data Types
    </div>
    <DartCodeSnippt codeTitle="Numbers">
        <pre>
import 'dart:io';

void main(){
  // ================================[ Numbers ]================================
  int num1 = 100;
  double num2 = 15.5;
  num num3 = 20;
  num num4 = 50.4;

  num sum = num1 + num2 + num3 + num4;

  print("Number One Is: $num1 | Type Is: ${num1.runtimeType}");
  print("Number Two Is: $num2 | Type Is: ${num2.runtimeType}");
  print("Number Three Is: $num3 | Type Is: ${num3.runtimeType}");
  print("Number Four Is: $num4 | Type Is: ${num4.runtimeType}");
  print("Sum Of Those Numbers Is: $sum | Type Is: ${sum.runtimeType}");

  // Round Double Value To 2 Decimal Places
  double price = 12.4568745;
  print("Product Price Is: ${price.toStringAsFixed(2)}");

}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>