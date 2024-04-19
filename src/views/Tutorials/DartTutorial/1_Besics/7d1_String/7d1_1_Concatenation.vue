<script setup>
import DartCodeSnippt from '../../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        String & It's Method
    </div>
    <DartCodeSnippt codeTitle="String Concatenation">
        <pre>
void main(){
    // ==========================[ String Concatenation ]=========================
  String firstName = "Supriya";
  String lastName = "Singh";

  print("Using +, Full Name Is: " +firstName+ " "+lastName);
  print("Using interpolation, Full Name Is: $firstName $lastName");
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>