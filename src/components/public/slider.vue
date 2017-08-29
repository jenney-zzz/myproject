<template>
    <div id="tmpl">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in imgs">
                <img :src="item.img" alt=""/>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    export default {
        props:['imgs'],
        data(){
            return{

            }
        },
    }
</script>
<style scoped>
    .mint-swipe {
        height: 300px;
    }

    .mint-swipe-item {
        background-color: red;
        width: 100%;
        height: 300px;
    }

    .mint-swipe-item img {
        width: 100%;
        height: 300px;
        display: block;
    }
</style>