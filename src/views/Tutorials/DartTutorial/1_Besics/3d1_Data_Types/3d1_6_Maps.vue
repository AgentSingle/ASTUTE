<script setup>
import DartCodeSnippt from '../../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        Dart Data Types
    </div>
    <DartCodeSnippt codeTitle="Maps">
        <pre>
import 'dart:io';

void main(){
    // ================================[ Maps ]================================
    Map&lt;int, String&gt; country = {
        1: "India",
        2: "USA",
        3: "USSR",
        4: "UAE",
        5: "Bhutan",
    };
    print(country);
    print(country[5]);

}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>