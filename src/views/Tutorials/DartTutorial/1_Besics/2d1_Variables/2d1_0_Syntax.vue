<script setup>
import DartCodeSnippt from '../../../../../components/CS/DartCodeSnippt.vue';
</script>

<template>
    <div class="FlxM XLT Tbold Tupper">
        Variables
    </div>
    <DartCodeSnippt codeTitle="Syntax">
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
</template>

<style scoped></style>