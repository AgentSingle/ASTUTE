<script setup>
import DartCodeSnippt from '../../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        Dart Conditions and Loops
    </div>

    <DartCodeSnippt codeTitle="For Loop">
        <pre>
/* for(initialization; condition; increment/decrement){
    statements;
}
*/
void main(){
  for (int i=1; i<=15; i++){
    print(i);
  }
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>