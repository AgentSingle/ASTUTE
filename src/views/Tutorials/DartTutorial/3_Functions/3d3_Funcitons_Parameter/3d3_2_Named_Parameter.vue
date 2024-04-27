<script setup>
import { defineAsyncComponent } from 'vue';
const DartCodeSnippt = defineAsyncComponent(() =>
  import('../../../../../components/CS/DartCodeSnippt.vue')
)
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
      Named Parameter
    </div>

    <DartCodeSnippt codeTitle="Named Parameter">
        <pre>
          /*
Named Parameter In Dart
*/

void main(){
  printInfo(age: 18, name: "Jenny");
  printInfo(name: "Bob Coder");

  printDetails(age: 18, name: "Jenny", gender: "Female");

  printDetailsAgain("Jenny", "Female");
}

//Named Parameter
void printInfo({String? name, int? age}){
  print("$name, your age is: $age");
}

// Use Of Required In Named Parameter
void printDetails({required String name, required String gender, required int age}) {
  print('''
  Check your details:
  Name: $name,
  Age: $age,
  Gender: $gender
  ''');
}

// Use Of Optional Parameter
void printDetailsAgain(String name, String gender, [int? age]) {
  print('''
  Check your details:
  Name: $name,
  Age: $age,
  Gender: $gender
  ''');
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>