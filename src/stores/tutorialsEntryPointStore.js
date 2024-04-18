import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTutorialEntryPoint = defineStore("tutorialEntryPointStore", () => {
    let tutorialLanguage = ref(null);
    let tutorialCode = ref(null);

    const setTutorialData = (lang, code) =>{
        tutorialLanguage.value = lang;
        tutorialCode.value = code;
    }


    const removeTutorialData = () =>{
        console.warn('removeTutorialData');
    }

    return {
        tutorialLanguage,
        tutorialCode,
        setTutorialData,
        removeTutorialData,
    };

})