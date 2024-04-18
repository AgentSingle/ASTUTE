<script setup>
import DartCodeSnippt from '../../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        Dart Data Types
    </div>
    <DartCodeSnippt codeTitle="Statically Typed">
        <pre>
import 'dart:io';

void main(){
    // =============================[ Statically Typed ]==========================
  var myStaticalTypedData = 50;
  // myStaticalTypedData = "I love dart"; // This Will Throw Error
  print(myStaticalTypedData);

}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>