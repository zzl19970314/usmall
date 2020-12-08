<template>
<div> <el-button type='primary' @click="willAdd">添加</el-button>
<v-add :info='info' ref='one'></v-add>
<v-list @edit='edit($event)'></v-list></div>
</template>

<script>
import vAdd from './components/add'
import vList from './components/list'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    vAdd,
    vList
},
data() {
return {
info:{isShow:false,
isAdd:true,
title:'菜单添加11'}
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
// 点击添加
    willAdd(){
        this.info.isShow = !this.info.isShow
        this.info.isAdd=true
        this.info.title='菜单添加'
        this.$refs.one.empty()
    },
    // 编辑
    edit(e){
        // console.log(e)
        // this.info.isShow =true
        this.info={
            isShow:true,
            isAdd:false,
            title:'菜单编辑'
        }
        console.log(this.$refs.one)
        this.$refs.one.look(e)
}
}
}
</script>
<style>
</style>