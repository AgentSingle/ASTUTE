<script setup>
import DartCodeSnippt from '../../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        String & It's Method
    </div>
    <DartCodeSnippt codeTitle="String">
        <pre>
void main(){
    // ============================[ String ]=============================
  String textOne = 'This is single line string';
  String textTwo = "This is single line string inside 'double quotes'";
  String textThree = """
  Multiline string example:
  This is tutorial on dart string.
  """;

  print(textOne);
  print(textTwo);
  print(textThree);
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>