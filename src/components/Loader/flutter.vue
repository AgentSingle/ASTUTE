<script setup>
let props = defineProps({
    flutterText: String,
})
</script>
<template>
    <div class="FlutterTutorialDetails">
        <div class="CircularIndicator">
            <div class="indicatorOne">
                <div class="indicatorTwo">
                    <div class="FlutterTutorial">
                        {{ flutterText }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
.FlutterTutorialDetails {
    position: absolute;
    transform: rotateZ(0deg);
    z-index: 100;
    width: 100%;
    height: 100%;
}

.CircularIndicator {
    position: fixed;
    height: 2rem;
    width: 2rem;
    top: 20rem;
    left: 35%;
    content: "";
    border-radius: 50%;
    border: 2px solid #bcbcbcdf;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
}

.indicatorOne {
    position: absolute;
    width: 3px;
    height: 16vh;
    transform: rotateZ(-35deg);
}

.indicatorOne::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 7vh;
    left: 0;
    top: 0;
    background-color: #bcbcbcdf;
}

.indicatorTwo{
    position: absolute;
    width: 4vw;
    height: 3px;
    top: 0;
    right: -2vw;
    transform: rotateZ(35deg);
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}
.indicatorTwo::after {
    content: '';
    position: absolute;
    width: 2vw;
    height: 3px;
    top: 0;
    background-color: #bcbcbcdf;
}
.FlutterTutorial{
    position: absolute;
    display: flex;
    white-space: nowrap;
    top: -2rem;
    right: 4vw;
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

</style>