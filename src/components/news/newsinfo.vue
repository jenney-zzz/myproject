<template>
    <div id="tmpl">
        <div>
            <p>1季度多家房企……</p>
            <p><span>2015-04-16</span><span>1次浏览</span><span>分类：经济民生</span></p>
        </div>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui'
    export default {
        data: function () {
            return {
                id:13,
                msg:{

                }
            }
        },
        created: function () {
            const id=this.$route.params.id;//获取浏览器中传入的真正的值，此id要与main.js中路由中的id一致{path:'/news/newsinfo:id',component:newsinfo}
//            console.log(id);
            this.getmsg();
        },
        methods:{
            getmsg: function () {
                const url='http://www.lovegf.cn:8899/api/getnew/'+this.val;
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