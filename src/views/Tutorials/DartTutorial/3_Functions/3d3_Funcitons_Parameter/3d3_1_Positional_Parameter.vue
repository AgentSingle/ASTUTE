<script setup>
import { defineAsyncComponent } from 'vue';
const DartCodeSnippt = defineAsyncComponent(() =>
  import('../../../../../components/CS/DartCodeSnippt.vue')
)
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
      Positional Parameter
    </div>

    <DartCodeSnippt codeTitle="Positional Parameter">
        <pre>
/*
Positional Parameter In Dart
*/

void main(){
  printDetails("Agent", "Single");

  bilDue("Vijay", "Malia");
}

void printDetails(String firstName, String lastName){
  print("User Full Name: $firstName $lastName");
}

// Providing Default Value On Positional Parameter
void bilDue(String firstName, String lastName, [String msg ="you don't pay your credit card bill."]){
  print("$firstName $lastName, $msg");
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>