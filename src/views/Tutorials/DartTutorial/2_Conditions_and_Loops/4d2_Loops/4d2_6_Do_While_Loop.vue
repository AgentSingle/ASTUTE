<script setup>
import DartCodeSnippt from '../../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        Dart Loops
    </div>

    <DartCodeSnippt codeTitle="Do While Loop">
        <pre>
/*
do{
    statement1;
    statement2;
    .
    .
    .
    statementN;
}while(condition);
*/

void main(){
  // Print 1 to 10
  int i = 1;
  do{
    print('drop of water...');
    print(i);
    i++;
  } while(i<=10);


  // Print 1 to 10
  int number = 0;
  do{
    print("are you ok?");
    number--;
  } while(number>1);
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>