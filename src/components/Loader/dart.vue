<script setup>
let props = defineProps({
    dartText: String,
})
</script>
<template>
    <div class="DartTutorialDetails">
        <div class="CircularIndicator">
            <div class="indicatorOne">
                <div class="DartTutorial">
                    {{ dartText }}
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
.DartTutorialDetails{
    position: absolute;
    transform: rotateZ(0deg);
    z-index: 100;
    width: 100%;
    height: 100%;
}
.CircularIndicator{
    position: fixed;
    height: 2rem;
    width: 2rem;
    bottom: 12rem;
    left: calc(50% - 1rem);
    content: "";
    border-radius: 50%;
    border: 2px solid #ffffffc6;;
    box-sizing: border-box;
}
.indicatorOne{
    position: absolute;
    right: calc(1rem - 3px);
    bottom: -5vh;
    height: 5vh;
    width: 3px;
    background-color: #ffffffc6;
    display: flex;
    align-items: center;
    justify-content: center;
}
.DartTutorial{
    position: absolute;
    display: flex;
    white-space: nowrap;
    bottom: -3.8rem;
    background-color: #303232a6;
    border: 1px solid #fff;
    padding: 1rem;
    box-shadow: 0 0 2rem #00ff6e;
    border-radius: 0.5rem;
    z-index: 100;
    font-size: 1.6rem;
    font-weight: bold;
    text-shadow: 1px 1px #242323;
    transition: all 0.8s;
}
/* .DartTutorial{
    position: absolute;
    display: flex;
    white-space: nowrap;
    left: 10%;
    bottom: 10%;
    background-color: #303232a6;
    border: 1px solid #fff;
    padding: 1rem;
    box-shadow: 0 0 2rem #00ff6e;
    border-radius: 0.5rem;
    z-index: 100;
    font-size: 1.6rem;
    font-weight: bold;
    text-shadow: 1px 1px #242323;
}
.indicatorOne{
    position: absolute;
    top: calc(50% - 1.5px);
    width: 3vw;
    right: -3vw;
    height: 3px;
    background-color: #ffffffc6;
}
.indicatorTwo{
    position: absolute;
    right: 0;
    bottom: 0;
    height: 5vh;
    width: 3px;
    background-color: #ffffffc6;
}
.indicatorTwo::after{
    position: absolute;
    height: 2rem;
    width: 2rem;
    left: calc(-1rem + 1.5px);
    top: -2rem;
    content: "";
    border-radius: 50%;
    border: 2px solid #ffffffc6;
    box-sizing: border-box;
} */
</style>