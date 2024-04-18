<script setup>
import DartCodeSnippt from '../../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        Dart Data Types
    </div>
    <DartCodeSnippt codeTitle="List">
        <pre>
import 'dart:io';

void main(){
    // ================================[ List ]================================
    List&lt;String&gt; nameList = ['Supriya', "Sudipta", "Soumen", "Tom"];
    print("Name List is: $nameList");
    print("3 Item in name list is: ${nameList[2]}");

    int lengthOfNameList = nameList.length;
    print("Name List Length: $lengthOfNameList");

}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>