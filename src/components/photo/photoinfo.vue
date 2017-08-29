<template>
    <div id="tmpl">
        <!-- 详情页描述-->
        <div id="desc">
            <div class="title">
                <h4>{{info.title}}</h4>
                <p>
                    <span>{{info.add_time|datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
                    <span>{{info.click}}次浏览</span>
                </p>
                <p class="line"></p>
            </div>
        </div>
        <!-- 九宫格图片-->
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

        <p v-html="info.content"></p>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    export default {
        data(){
            return{
                num:0,
                info:{},
                imgs:{}
            }
        },
        created(){
            this.num=this.$route.params.id2;//获取点击的图片的id
            console.log(this.num);
            this.getlist();
        },
        methods:{
            getlist(){
                var url=this.comman.apipublic+'/api/getimageInfo/'+this.num;
                this.$http.get(url).then(function (res) {
                    if(res.body.status!=0){
                        Toast(res.body.message);
                        return;
                    }
                    this.info=res.body.message[0];
                })
            }
        }
    }
</script>
<style scoped>
    /*图片详情样式*/
    #desc{
        padding: 10px;
    }
    #desc  .title h4{
        color: #0094ff;
    }

    #desc .title p{
        color:rgba(0,0,0,0.4);
        margin-top: 10px;
    }

    #desc .title .line{
        width: 100%;
        height: 1px;
        border-bottom: 1px solid rgba(0,0,0,0.4);
    }
</style>