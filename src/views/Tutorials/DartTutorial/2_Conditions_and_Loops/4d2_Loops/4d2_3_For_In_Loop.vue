<script setup>
import DartCodeSnippt from '../../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
  <div class="FlxM XLT Tbold Tupper">
      Dart Loops
  </div>

    <DartCodeSnippt codeTitle="For In Loop in Dart">
        <pre>
void main() {
  List&lt;String&gt; names = ['Rimpa', 'Mou', 'Pritam', 'Ambar'];
  for (String name in names){
    print(name);
  }
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>