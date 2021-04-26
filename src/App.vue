<template>
    <div id="text">
        {{text}}
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

#text {
    color: red;
}
</style>