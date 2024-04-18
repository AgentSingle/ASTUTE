<script setup>
import DartCodeSnippt from '../../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        Dart Data Types
    </div>
    <DartCodeSnippt codeTitle="Runes">
        <pre>
import 'dart:io';

void main(){
    // ================================[ Runes ]================================
  // Unicode values of String
  String runesValue = "Ola";
  print(runesValue.runes);

}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>