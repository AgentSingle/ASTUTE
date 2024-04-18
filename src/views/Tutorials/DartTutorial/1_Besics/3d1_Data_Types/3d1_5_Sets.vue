<script setup>
import DartCodeSnippt from '../../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        Dart Data Types
    </div>
    <DartCodeSnippt codeTitle="Sets">
        <pre>
import 'dart:io';

void main(){
    // ================================[ Sets ]================================
    Set&lt;String&gt; weekdays = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
    print(weekdays);

}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>