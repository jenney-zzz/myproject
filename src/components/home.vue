<template>
    <div id="tmpl">
        <!-- 轮播图部分-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list">
                <img :src="item.img" alt=""/>
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格部分-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">
                        <router-link to="/news/newslist">新闻资讯</router-link>
                    </div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"></span>
                    <div class="mui-media-body">
                        <router-link to="/photo/photolist">图片分享</router-link>
                    </div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">
                        <router-link to="/goods/goodslist">商品购买</router-link>
                    </div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">
                        <router-link to="/message/messagelist">留言反馈</router-link>
                    </div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">
                        <router-link to="/video/videolist">视频专区</router-link>
                    </div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">
                        <router-link to="/callme/callmelist">联系我们</router-link>
                    </div></a></li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    export default{
        data: function () {
            return {
                list:[ ]
            }
        },
        created(){
        this.getimgs()
    },
    methods:{
        getimgs(){
            this.$http.get(this.comman.apipublic+'/api/getlunbo')
                    .then(function (res) {
                        if(res.body.status!=0){
                            Toast(res.body.message);
                            return;
                        }
                        this.list=res.body.message;
                    })
        }
    }
    }
</script>
<style scoped>
    /*轮播图的样式*/
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
    /*九宫格样式*/
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border-top: none;
        border-left: none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border-right: none;
        border-bottom: none;
    }
    /*新闻列表的样式*/
    .mui-icon-home:before{
        content:"";
        background-image: url("../../statics/imgs/1.png");
        width: 50px;
        height: 50px;
        display: block;
        background-repeat: round;
    }
</style>