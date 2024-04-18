<script setup>
import DartCodeSnippt from '../../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        Dart Data Types
    </div>
    <DartCodeSnippt codeTitle="String">
        <pre>
import 'dart:io';

void main(){
    // ================================[ String ]================================
  String schoolName = "D.B.N. Vidyaniketan";
  String schoolAddress = "School Address, Pin-124525";

  print("School name is: $schoolName and address is $schoolAddress");

  // Create a multi-line string
  String multiLineString = '''
  Here we learn various data types of
  dart language such as
  Number, String, Booleans, Lists, Maps, Sets, Runes, Null
  ''';
  print(multiLineString);

  // Special character in String
  print("Good morning \nto all of you.");
  print("Good morning \tto all of you.");

  // raw String
  String rawString = r"This is an exam of \traw string";
  print(rawString);

  // Convert String to Int
  String intString = "10";
  int convertedInt = int.parse(intString);
  print("Conversion Value: $convertedInt | Type Of: ${convertedInt.runtimeType}");

  // Convert String to Double
  String stringDouble = "127.8001";
  double convertedDouble = double.parse(stringDouble);
  print("Converted Value: $convertedDouble | Type Of: ${convertedDouble.runtimeType}");

  // Convert Int to String
  int intValue = 127;
  String convertedString = intValue.toString();
  print("Converted Value: $convertedString | Type Of: ${convertedString.runtimeType}");

  //Convert double to int
  double doubleNumber =10.01;
  int doubleToInt = doubleNumber.toInt();
  print("The Value: $doubleToInt | Type Of: ${doubleToInt.runtimeType}");
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>