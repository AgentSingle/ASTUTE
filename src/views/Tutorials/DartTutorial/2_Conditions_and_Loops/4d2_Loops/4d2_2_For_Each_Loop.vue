<script setup>
import DartCodeSnippt from '../../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        Dart Loops
    </div>

    <DartCodeSnippt codeTitle="For Each Loop">
        <pre>
void main(){
  List&lt;String&gt; fruits = ['Mango', 'Strawberry', 'banana', 'cherry'];
  fruits.forEach((name) => print(name));

  int total = 0;
  <code>List&lt;int&gt; numbers = [1, 2, 3, 4, 4, 6];</code>
  numbers.forEach((element) => total= total+element);
  print(total);
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>