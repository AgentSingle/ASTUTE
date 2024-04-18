import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTutorialEntryPoint = defineStore("tutorialEntryPointStore", () => {
    let tutorialLanguage = ref(null);
    let tutorialCode = ref(null);
    let tutorialTitle = ref('Code are Displayed Here.');

    const setTutorialData = (lang, code, title) =>{
        tutorialLanguage.value = lang;
        tutorialCode.value = code;
        tutorialTitle.value = title;
    }

    const removeTutorialData = () =>{
        console.warn('removeTutorialData');
    }

    return {
        tutorialLanguage,
        tutorialCode,
        tutorialTitle,
        setTutorialData,
        removeTutorialData,
    };

})