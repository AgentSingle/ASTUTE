<script setup>
import { ref, onMounted } from 'vue';
import Author from './author.vue';
import Dart from './dart.vue';
import flutter from './flutter.vue';

const myArray = ref(['Explore', 'Learn', 'Apply', 'Go Forword', 'Win']);
let mainText = ref("Explore");

// ADJUST SIZE OF THE LOADER
let LoaderWrapper = ref(null);
onMounted(() => {
    setSize();
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * myArray.value.length);
        mainText.value = myArray.value[randomIndex];
    }, 2000);
})
const setSize = () => {
    let loader = LoaderWrapper.value;
    let parent = loader.parentElement.parentElement;
    let loaderChild = loader.firstChild;
    let height = parent.getBoundingClientRect().height;
    let width = parent.getBoundingClientRect().width;
    loader.style.height = `calc(${height}px - 3rem)`;
    loader.style.width = `calc(${width}px - 3rem)`;
    let smallNumber = 0;
    if (width >= height) {
        smallNumber = height;
    }
    else {
        smallNumber = width;
    }
    loaderChild.style.height = `calc(${smallNumber}px - 4rem)`;
    loaderChild.style.width = `calc(${smallNumber}px - 4rem)`;

}
window.addEventListener("resize", function () {
    setSize();
})
</script>

<template>
    <div class="LoaderWrapper" ref="LoaderWrapper">
        <div class="Loader">
            <flutter></flutter>
            <div class="LoaderInnerWrapper">
                <div class="LoaderFirstChild">
                    <div class="maintext">{{ mainText }}</div>
                    <Author></Author>
                </div>
                <Dart></Dart>
            </div>
        </div>
    </div>
</template>

<style scoped>
.LoaderWrapper {
    display: flex;
    min-height: 20rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-content: center;
    position: relative;
    /* background-color: rgb(213, 213, 255); */
}

.Loader {
    /* background-color: #212121; */
    border-radius: 50%;
    color: white;
    position: relative;
}

.LoaderInnerWrapper {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    /* background-color: rgba(16, 16, 144, 0.355); */
    border-radius: 50%;
    border: 5rem solid rgb(68, 68, 85);
    box-sizing: border-box;
    border-bottom: 5rem solid transparent;
    border-top: 5rem solid transparent;
    position: relative;
}

.LoaderInnerWrapper::after {
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    height: 100%;
    width: 100%;
    /* background-color: yellow; */
    border-radius: 50%;
    outline: 0.5rem solid #ffffff;
    border: 1rem solid rgb(24, 24, 29);
    box-sizing: border-box;
    border-bottom: 1rem solid transparent;
    border-top: 1rem solid transparent;
    transform: rotateZ(15deg);
    box-shadow: 0 0 5rem cyan;
}

.LoaderFirstChild {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    outline: 1rem solid #787878;
    border: 10rem solid #00780067;
    box-sizing: border-box;
    border-left: 10rem solid transparent;
    border-right: 10rem solid transparent;
    position: relative;
    transform: rotateZ(15deg);
    box-shadow: 0 0 5rem cyan;
    display: flex;
    align-items: center;
    justify-content: center;
}

.LoaderFirstChild::after {
    content: "";
    height: 100%;
    width: 100%;
    border-radius: 50%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgb(30, 29, 29);
    outline: 0.5rem solid #b8b8b8;
    border: 6rem solid #484546;
    box-sizing: border-box;
    border-right: 6rem solid transparent;
    border-left: 6rem solid transparent;
    transform: rotateZ(-15deg);
    box-shadow: 0 0 10rem cyan;
    /* display: flex;
    align-items: center;
    justify-content: center; */
}
.maintext{
    position: absolute;
    color: #fff;
    z-index: 1000;
    transform: rotateZ(-15deg);
    font-size: 2.5rem;
    font-weight: bold;
}
</style>

<style scoped>
.AuthorDetails{
    position: absolute;
    transform: rotateZ(-15deg);
    z-index: 100;
    width: 100%;
    height: 100%;
}
.AuthorIndicator{
    position: absolute;
    right: 40%;
    top: 3.5rem;
    height: 30%;
    width: 3px;
    transform: rotateZ(30deg);
    background-color: #9997979f;
}
.AuthorIndicator::after{
    position: absolute;
    left: -1rem;
    bottom: 0;
    content: "";
    height: 2rem;
    width: 2rem;
    background-color: rgb(30, 29, 29);
    border-radius: 50%;
    border: 1px solid #9997979f;
    box-sizing: border-box;
}
.Author{
    position: absolute;
    display: flex;
    white-space: nowrap;
    right: 0;
    background-color: #96d5d5a6;
    border: 1px solid #fff;
    padding: 1rem;
    box-shadow: 0 0 2rem #00ff6e;
    border-radius: 0.5rem;
    z-index: 100;
    font-size: 1.6rem;
    font-weight: bold; 
}
</style>