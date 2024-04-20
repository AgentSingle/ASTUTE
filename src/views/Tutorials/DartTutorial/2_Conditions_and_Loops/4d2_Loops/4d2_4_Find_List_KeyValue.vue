<script setup>
import DartCodeSnippt from '../../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        Dart Conditions and Loops
    </div>

    <DartCodeSnippt codeTitle="Find Key,Value of List">
        <pre>
void main(){
    List&lt;String&gt; names = ['Rimpa', 'Mou', 'Pritam', 'Ambar'];
    names.asMap().forEach((key, value) => print("Key: $key, Value: $value"));
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>