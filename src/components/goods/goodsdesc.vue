<template>
    <div id="tmpl">
        这是商品描述列表组件页面{{num}} <br/>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                num:0,
            }
        },
        created(){
            this.num=this.$route.params.id4;
        }
    }
</script>
<style scoped>

</style>