<script setup>
import DartCodeSnippt from '../../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        Conditions and Loops
    </div>

    <DartCodeSnippt codeTitle="If-Else-If condition">
        <pre>
/*
If-Else-If condition
*/

void main(){
    // If-Else-If condition
  int monthNo = 9;
  if(monthNo==1){
    print("January");
  } else if(monthNo==2){
    print("February");
  } else if(monthNo==3){
    print("March");
  } else if(monthNo==4){
    print("April");
  } else if(monthNo==5){
    print("May");
  } else if(monthNo==6){
    print("Jun");
  } else if(monthNo==7){
    print("July");
  } else if(monthNo==8){
    print("August");
  } else if(monthNo==9){
    print("September");
  } else if(monthNo==10){
    print("October");
  } else if(monthNo==11){
    print("November");
  } else{
    print("December");
  }

  // Find Larges Number Among 3 Numbers
  int numOne = 100;
  int numTwo = 49;
  int numThree = 200;
  if(numOne>numTwo && numOne>numThree){
    print("Larger Number Is: $numOne");
  } else if(numTwo>numOne && numTwo>numThree){
    print("Larger Number Is: $numTwo");
  }else{
    print("Larger Number Is: $numThree");
  }
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>