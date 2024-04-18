<script setup>
import DartCodeSnippt from '../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        Dart Comments
    </div>

    <DartCodeSnippt codeTitle="Comments">
        <pre>
void main(){
    var age = 25;
    // assert(age!=25);
    print("Age Should be 25");
}
        </pre>
    </DartCodeSnippt>
</template>

<style scoped></style>