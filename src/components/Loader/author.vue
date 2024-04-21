<script setup></script>
<template>
    <div class="AuthorDetails">
        <div class="CircularIndicator">
            <div class="indicatorOne">
                <div class="indicatorTwo">
                <div class="Author">
                    Author: Sudipta Mandal
                </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.AuthorDetails{
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
    top: calc(50% - 4rem);
    left: 55%;
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
    height: 14vh;
    transform: rotateZ(35deg);
}

.indicatorOne::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 6vh;
    left: 0;
    top: 0;
    background-color: #bcbcbcdf;
}
.indicatorTwo{
    position: absolute;
    width: 4vw;
    height: 3px;
    top: 0;
    left: -2vw;
    transform: rotateZ(-35deg);
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}
.indicatorTwo::after {
    content: '';
    position: absolute;
    width: 2vw;
    height: 3px;
    right: 0;
    background-color: #bcbcbcdf;
}
.Author{
    position: absolute;
    display: flex;
    white-space: nowrap;
    top: -2rem;
    left: 4vw;
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