<template>
    <div id="tmpl">
        <div>
            <p v-text="msg.title"></p>
            <!--{{id}}-->
            <p><span>{{msg.add_time|datefmt('YYYY-MM-DD')}}</span><span>{{msg.click}}次浏览</span><span>分类：经济民生</span></p>
            <div v-html="msg.content"></div>
        </div>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    export default {
        data: function () {
            return {
                num:0,
                msg:{

                }
            }
        },
        created: function () {
            this.num=this.$route.params.id1;//获取浏览器中传入的真正的值,然后赋值 传给data中的num并写入url地址中
            // 也就是浏览器最后面的值，这里也是newslist中router-link中的item.id的值
            // 此id要与main.js中路由中的id一致{path:'/news/newsinfo:id',component:newsinfo}
            this.getmsg();
        },
        methods:{
            getmsg () {
                const url=this.comman.apipublic+'/api/getnew/'+this.num;
                this.$http.get(url).then(function (res) {
                    if (res.body.status != 0) {
                        Toast(res.body.message);
                        return;
                    }
                    this.msg=res.body.message[0];
                })
            }
        }
    }
</script>
<style scoped>

</style>