<script setup>
import DartCodeSnippt from '../../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        Variables
    </div>
    <DartCodeSnippt codeTitle="Dart Constant">
        <pre>
void main(){
    // ==========[ Dart Constant ]==========
    const pi = 3.14;
    // pi = 4.45; // Not possible
    print("Value of PI is: $pi");
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>