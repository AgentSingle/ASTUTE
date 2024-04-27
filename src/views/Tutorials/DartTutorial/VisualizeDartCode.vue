<script setup>
import { defineAsyncComponent } from 'vue';

// =====================[ DART BESIC ]=====================
import Besic from "../DartTutorial/1_Besics/1d1_Besic.vue";
import Variables from "../DartTutorial/1_Besics/2d1_Variables.vue";
import DataTypes from "../DartTutorial/1_Besics/3d1_Data_Types.vue";
import Comments from "../DartTutorial/1_Besics/4d1_Comments.vue";
import Operators from "../DartTutorial/1_Besics/5d1_Operator.vue";
import Inputs from "../DartTutorial/1_Besics/6d1_Input.vue";
import String from "../DartTutorial/1_Besics/7d1_String.vue";

// =====================[ DART CONDITIONS & LOOPS ]=====================
import Conditions from "../DartTutorial/2_Conditions_and_Loops/1d2_Conditions.vue";
import Assert from "../DartTutorial/2_Conditions_and_Loops/2d2_Assert.vue";
import TarnaryOperator from "../DartTutorial/2_Conditions_and_Loops/3d2_Tarnary_Operator.vue";
import Loops from "../DartTutorial/2_Conditions_and_Loops/4d2_Loops.vue";
import BreakandContinue from "../DartTutorial/2_Conditions_and_Loops/5d2_Break_and_Continue.vue";
import TryCatch from "../DartTutorial/2_Conditions_and_Loops/6d2_Try_Catch.vue";

// =====================[ DART FUNCTIONS ]=====================
const FuncitonsOverview = defineAsyncComponent(() =>
  import('../DartTutorial/3_Functions/1d3_Funcitons_Overview.vue')
)
const FuncitonsTypes = defineAsyncComponent(() =>
  import('../DartTutorial/3_Functions/2d3_Funcitons_Types.vue')
)
const FuncitonsParameter = defineAsyncComponent(() =>
  import('../DartTutorial/3_Functions/3d3_Funcitons_Parameter.vue')
)
const AnonymousFunction = defineAsyncComponent(() =>
  import('../DartTutorial/3_Functions/4d3_Anonymous_Function.vue')
)
const ArrowFunction = defineAsyncComponent(() =>
  import('../DartTutorial/3_Functions/5d3_Arrow_Function.vue')
)
const ScopeInFunction = defineAsyncComponent(() =>
  import('../DartTutorial/3_Functions/6d3_Scope.vue')
)
const DartMath = defineAsyncComponent(() =>
  import('../DartTutorial/3_Functions/7d3_Math.vue')
)

import { useTutorialEntryPoint } from "../../../stores/tutorialsEntryPointStore.js";
const tutorialEntryPointStore = useTutorialEntryPoint();
</script>

<template>
    <!-- =====================[ DART BESIC ]===================== -->
    <div>
        <Besic v-if="tutorialEntryPointStore.tutorialCode=='1d1'"></Besic>
        <Variables></Variables>
        <DataTypes></DataTypes>
        <Comments v-if="tutorialEntryPointStore.tutorialCode=='4d1'"></Comments>
        <Operators v-else-if="tutorialEntryPointStore.tutorialCode=='5d1'"></Operators>
        <Inputs v-else-if="tutorialEntryPointStore.tutorialCode=='6d1'"></Inputs>
        <String></String>
    </div>

    
    <!-- =====================[ DART CONDITIONS & LOOPS ]===================== -->
    <div>
        <Conditions></Conditions>
        <Assert v-if="tutorialEntryPointStore.tutorialCode=='2d2'"></Assert>
        <TarnaryOperator v-if="tutorialEntryPointStore.tutorialCode=='3d2'"></TarnaryOperator>
        <Loops></Loops>
        <BreakandContinue v-if="tutorialEntryPointStore.tutorialCode=='5d2'"></BreakandContinue>
        <TryCatch v-if="tutorialEntryPointStore.tutorialCode=='6d2'"></TryCatch>
    </div>

    <!-- =====================[ DART FUNCTION ]===================== -->
    <div>
        <FuncitonsOverview v-if="tutorialEntryPointStore.tutorialCode=='1d3'"></FuncitonsOverview>
        <FuncitonsTypes v-if="tutorialEntryPointStore.tutorialCode=='2d3'"></FuncitonsTypes>
        <FuncitonsParameter></FuncitonsParameter>
        <AnonymousFunction v-if="tutorialEntryPointStore.tutorialCode=='4d3'"></AnonymousFunction>
        <ArrowFunction v-if="tutorialEntryPointStore.tutorialCode=='5d3'"></ArrowFunction>
        <ScopeInFunction v-if="tutorialEntryPointStore.tutorialCode=='6d3'"></ScopeInFunction>
        <DartMath v-if="tutorialEntryPointStore.tutorialCode=='7d3'"></DartMath>
    </div>
</template>

<style scoped>
</style>./1_Besics/5d1_Operator.vue/index.js