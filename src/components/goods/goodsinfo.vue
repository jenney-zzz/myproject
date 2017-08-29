<template>
    <div id="tmpl">
        <!--1.0 商品轮播图-->
        <div class="silder">
            <slider :imgs="lb"></slider>
        </div>
    </div>
</template>
<script>
    import {Toast} from "mint-ui";
    import slider from "../public/slider.vue";
    export default {
        components:{
            slider,
        },
        data(){
            return{
                num:0,
                lb:[],
            }
        },
        created(){
            this.num=this.$route.params.id3;
            this.getlb();
        },
        methods:{
            getlb(){
                var url=this.comman.apipublic+ '/api/getthumimages/'+this.num;
                this.$http.get(url).then(function (res) {
                    var data=res.body;
                    console.log(data);
                    if(data.status!=0){
                        Toast(data.message);
                        return;
                    }
                    this.lb=data.message;
                })
            }
        }
    }
</script>
<style scoped>

</style>