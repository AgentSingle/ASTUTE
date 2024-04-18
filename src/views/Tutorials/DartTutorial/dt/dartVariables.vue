<script setup>
import DartCodeSnippet from "../../../../components/CodeSnippet/DartCodeSnippet.vue";
import { besic } from "./1tute";
</script>

<template>
    <div>
        <DartCodeSnippet
        :code="besic.code" 
        :codeTitle="besic.codeTitle" 
        />
    </div>
</template>