<script setup></script>
<template>
    <div class="AuthorDetails">
        <div class="Author">
            Author: Sudipta Mandal
            <div class="indicatorOne">
                <div class="indicatorTwo"></div>
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
.Author{
    position: absolute;
    display: flex;
    white-space: nowrap;
    right: -5rem;
    top: calc(50% - 9vh - 2rem);
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
    bottom: -3vh;
    height: 3vh;
    left: 50%;
    width: 3px;
    background-color: #ffffffc6;
}
.indicatorTwo{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 5vh;
    height: 3px;
    background-color: #ffffffc6;
    /* transform: rotateZ(90deg); */
}
.indicatorTwo::after{
    position: absolute;
    height: 2rem;
    width: 2rem;
    top: calc(-1rem + 1.5px);
    left: -2rem;
    content: "";
    /* background-color: rgb(30, 29, 29); */
    border-radius: 50%;
    border: 2px solid #ffffffc6;
    box-sizing: border-box;
}
</style>