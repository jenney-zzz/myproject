<template>
    <div id="tmpl">
        <comman :val="num"></comman>
    </div>
</template>
<script>
    import comman from "../comman/comman.vue";
    export default {
        components:{
            comman
        },
        data(){
            return{
                num:0,
            }
        },
        created(){
            this.num=this.$route.params.id5;
        },
    }
</script>
<style scoped>

</style>