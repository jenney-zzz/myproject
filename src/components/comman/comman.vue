<template id="tmpl">
    <div>
        <div id="title">
            <h3>提交评论</h3>
            <p class="p"></p>
            <textarea placeholder="请输入评论内容" v-model="content"></textarea>
            <mt-button type="primary" size="large" @click="postcomman()">发表</mt-button>
        </div>
        <div id="list">
            <h3>评论详情</h3>
            <p class="p"></p>
            <div class="desc" v-for="(item,index) in list">
                <div>
                    <span>第{{index+1}}楼</span>
                    <span>用户名：{{item.user_name}}</span>
                    <span>时间：{{item.add_time|datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
                </div>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell" v-text="item.content"></li>
                </ul>
            </div>
        </div>
        <mt-button type="primary" size="large" plain @click="getmore">获取更多</mt-button>
        <!--{{val}}-->
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    export default {
        props:['val'],  //接收父组件newsinfo所传的值
        data: function () {
            return {
                content:"",
                list:[],
                pageindex:1
            }
        },
        created(){
            this.postcomman(this.pageindex);
            this.getlist(this.index);
        },
        methods:{

            //获取评论数据
            getlist:function(pageindex){
                pageindex=pageindex||1;
                var url=this.comman.apipublic+'/api/getcomments/'+this.val+'?pageindex='+pageindex;
                this.$http.get(url).then(function (res) {
                    if(res.body.status!=0){
                        Toast(res.body.message);
                        return;
                    }
                    this.list=res.body.message;
                })
            },
            //提交评论数据
            postcomman: function () {
                if(this.content.length<=0){
                    Toast("您输入的评论内容不能为空");
                    return;//没有输入内容就返回，以下内容就不执行
                }
                var url=this.comman.apipublic+'/api/postcomment/'+this.val;
                this.$http.post(url,{content:this.content},{emulataJSON:true}).then(function (res) {
                    //因为api文档中提交评论信息，无论是否提交成功status都是0
                    Toast(res.body.message);
                    var arr=[{"user_name":"匿名用户","add_time":new Date(),"content":this.content}];
                    this.list=arr.concat(this.list);
                    this.content=""; //提交评论后，填写评论区置空
                })
            },
            getmore:function(){
                this.pageindex++;
                this.postcomman(this.pageindex);
            }
        }
    }
</script>
<style scoped>
    #title {
        padding: 5px;
    }

    .p {
        height: 1px;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }


    /*2.0 评论列表的样式*/

    #list {
        padding: 5px;
    }

    .desc {
        padding: 5px;
        color: #6d6d72;
        font-size: 15px;
        background-color: rgba(0, 0, 0, 0.1);
    }
</style>