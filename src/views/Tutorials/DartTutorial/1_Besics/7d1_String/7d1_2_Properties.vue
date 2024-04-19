<script setup>
import DartCodeSnippt from '../../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        String & It's Method
    </div>
    <DartCodeSnippt codeTitle="String Properties">
        <pre>
void main(){
    // ============================[ String Properties ]==========================
  String spString = 'it is a string';
  print(spString.codeUnits);
  print(spString.isEmpty);
  print(spString.isNotEmpty);
  print("Length of the string is: ${spString.length}");
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>