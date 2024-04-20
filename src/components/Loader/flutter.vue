<script setup></script>
<template>
    <div class="FlutterTutorialDetails">
        <div class="FlutterTutorial">
            Flutter Tutorial
            <div class="indicatorOne">
                <div class="indicatorTwo"></div>
            </div>
        </div>
    </div>
</template>



<style scoped>
.FlutterTutorialDetails{
    position: absolute;
    transform: rotateZ(0deg);
    z-index: 100;
    width: 100%;
    height: 100%;
}
.FlutterTutorial{
    position: absolute;
    display: flex;
    white-space: nowrap;
    left: 30%;
    top: 7%;
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
    top: 0;
    height: 5vh;
    width: 3px;
    background-color: #ffffffc6;
    /* transform: rotateZ(45deg); */
}
.indicatorTwo::after{
    position: absolute;
    height: 2rem;
    width: 2rem;
    left: calc(-1rem + 1.5px);
    bottom: -2rem;
    content: "";
    /* background-color: rgb(30, 29, 29); */
    border-radius: 50%;
    border: 2px solid #ffffffc6;
    box-sizing: border-box;
}
</style>