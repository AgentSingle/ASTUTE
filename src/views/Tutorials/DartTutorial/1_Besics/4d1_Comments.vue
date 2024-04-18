<script setup>
import DartCodeSnippt from '../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        Dart Comments
    </div>

    <DartCodeSnippt codeTitle="Comments">
        <pre>
void main(){
  // This is Single Line Comments
  /*
  This is Multiline
  comment
  */

  /// Documentation comment
  print("This is Comment example");
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>