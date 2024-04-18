<script setup>
import { useTutorialEntryPoint } from "../../../../stores/tutorialsEntryPointStore.js";
const tutorialEntryPointStore = useTutorialEntryPoint();
import DartCodeSnippt from '../../../../components/CS/DartCodeSnippt.vue';

import Constant from "./2d1_Variables/2d1_1_Constant.vue";
import NamingConvention from "./2d1_Variables/2d1_2_Naming_Convention.vue";

</script>

<template>
    <Constant v-if="tutorialEntryPointStore.tutorialCode=='2d1_1'"></Constant>
    <NamingConvention v-else-if="tutorialEntryPointStore.tutorialCode=='2d1_2'"></NamingConvention>
    <DartCodeSnippt v-else-if="tutorialEntryPointStore.tutorialCode=='2d1'" codeTitle="Syntax">
        <pre>
void main(){
    // ==========[ Syntax ]==========
    var name = "Supriya";
    String address = "Some Address";
    num age = 25;
    num height = 5.5;
    bool isMarried = false;
  
    print("My Name Is: $name | Type Is:` + "${name.runtimeType}" +`");
    print("My Address Is: $address | Type Is:` + "${address.runtimeType}" +`");
    print("My Age Is: $age | Type Is: ` +"${age.runtimeType}" +`");
    print("My Height Is: $height | Type Is: ` + "${height.runtimeType}"+ `");
    print("My Is Married Is: $isMarried | Type Is:` +"${isMarried.runtimeType}"+`");

}
        </pre>
    </DartCodeSnippt>

    <!-- <DartCodeSnippt codeTitle="Dart Constant">
        <pre>
void main(){
    // ==========[ Dart Constant ]==========
    const pi = 3.14;
    // pi = 4.45; // Not possible
    print("Value of PI is: $pi");
}
        </pre>
    </DartCodeSnippt>

    <DartCodeSnippt codeTitle="Naming Convention Example">
        <pre>
void main(){
    // ==========[ Naming Convention Example ]==========
    var fullname = "Supriya Singh"; // Not Standard Way
    var fullName = "Supriya Singh"; // Standard Way
}
        </pre>
    </DartCodeSnippt> -->
</template>

<style scoped></style>