<template>
    <div id="tmpl">
        <!-- 图片分类部分-->
        <div id="cate">
            <ul v-bind="{style:'width:'+ulwidth+'px'}">
                <li>全部</li>
                <li v-for="item in cates" @click="getlist(item.id)">{{item.title}}</li>
            </ul>
        </div>
        <!-- 图片列表部分-->
        <ul id="imglist">
           <li v-for="item in list">
                <router-link v-bind="{to:'/photo/photoinfo/'+item.id}">
               <!--<router-link to="/photo/photoinfo37">-->
                    <!-- item.id是传入的实参如37，放到main.js中的id2中保存，
                    然后在photoinfo中以this.$route.pramas.id2来获取这个实参37并赋值给num，
                    在getinfo中的url中就可以使用这个this.num来向服务器请求数据-->
                    <img v-lazy="item.img_url">
                    <div id="desc">
                        <h5>{{item.title}}</h5>
                        <p>{{item.zhaiyao}}</p>
                    </div>
                </router-link>
           </li>
        </ul>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    export default {
        data: function () {
            return{
                cates:[],
                ulwidth:"",
                list:[],
            }
        },
        created(){
            this.getcates();
            this.getlist(0);
        },
        methods:{
//            图片列表部分
            getlist:function(cateid){
                cateid=cateid||0;  //0表示加载全部图片，防止忘记传参数，页面出现bug
                var url=this.comman.apipublic+'/api/getimages/'+cateid;
                this.$http.get(url).then(function (res) {
                    var data=res.body;
                    if(data.status!=0){
                        Toast(data.message);
                        return;
                    }
                    this.list=data.message;
                })
            },
//            图片分类部分
            getcates:function(){
                var url=this.comman.apipublic+'/api/getimgcategory';
                this.$http.get(url).then(function (res) {
                    var data=res.body
                    if(data.status!=0){
                        Toast(data.message);
                        return;
                    }
                    this.cates=data.message;
                    //动态设置ul的宽度
                    var ulli=62;
                    var count=data.message.length+1;
                    this.ulwidth=count*ulli;
                })
            }
        },

    }
</script>
<style scoped>
    /*1.0 图片分类*/
    #cate{
        width: 375px;
        max-width: 375px;
        overflow-x: auto;
    }
    #cate ul{
        margin: 0px;
        padding-left: 10px;
    }
    #cate li{
        cursor: pointer;
        list-style: none;
        display: inline-block;
        color:#0094ff;
        font-size: 14px;
        padding-left: 6px;
    }
    /*2.0 实现图片列表样式*/
    #imglist{

    }
    #imglist ul {
        padding-left: 0px;
    }
    #imglist li{
        list-style:none;
        position: relative ;
    }
    #imglist img{
        width:100%;
        height: 300px;
    }

    #desc{
        width: 100%;
        background-color: rgba(0,0,0,0.2);
        position: absolute;
        bottom: 2px;
        left: 0px;
    }

    #desc h5{
        color: #ffffff;
        font-weight: bold;
    }
    #desc p{
        color:#fff;
    }

    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
</style>