<script setup>
import DartCodeSnippt from '../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        Dart Inputs
    </div>

    <DartCodeSnippt codeTitle="Inputs">
        <pre>
import 'dart:io';

void main(){
  // String User Input
  print("Enter Your Name: ");
  String? name = stdin.readLineSync();
  print("Hi I'm $name");

  // Integer User Input
  print("Enter Your Age: ");
  var age = stdin.readLineSync();
  try{
    int.parse(age!);
    print("My Age Is: $age");
  }catch(e){
    print("invalid input");
  }

  // double input (floating point input)
  print('Enter Your Exam Marks: ');
  var marks = stdin.readLineSync();
  try{
    double.parse(marks!);
    print("You got $marks% marks");
  }catch(e){
    print("invalid input");
  }
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>