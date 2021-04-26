<template>
    <div class="App">
        <h2>{{text}}</h2>
    </div>
</template>
<script>
export default {
    data() {
        return {
            text: '恭喜你，从零开始搭建了vue！'
        }
    }
}
</script>
<style>
@import './assets/css/index.css';

h2 {
    text-align: center;
    color: red;
}
</style>