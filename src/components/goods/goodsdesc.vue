<template>
    <div id="tmpl">
        <h4 v-text="info.title"></h4>
        <p class="line"></p>
        <p v-html="info.content"></p>
    </div>
</template>
<script>
    import {Toast} from "mint-ui";
    export default {
        data(){
            return{
                num:0,
                info:{},
            }
        },
        created(){
            this.num=this.$route.params.id4;
            this.getinfo();
        },
        methods:{
            getinfo(){
                var url =this.comman.apipublic +'/api/goods/getdesc/'+this.num;
                this.$http.get(url).then(function (res) {
                    if(res.body.status!=0){
                        Toast(res.body.message);
                        return;
                    }
                    this.info=res.body.message[0];
                })
            }

        },
    }
</script>
<style scoped>
    #tmpl{
        padding: 5px;
    }
    #tmpl h4{
        color: #0094ff;
    }
    #tmpl .line{
        height: 1px;
        border:1px solid rgba(0,0,0,0.3);
    }
</style>