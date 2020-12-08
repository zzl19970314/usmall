<template>
<div><el-button type="primary" @click="willAdd">添加</el-button>
<v-add :info='info' ref="one"></v-add>
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
info:{
    isShow:false,
    title:'角色添加',
    isAdd:true
}
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
willAdd(){
    this.info.isShow=!this.info.isShow
    this.info.title='角色添加'
    this.info.isAdd=true
},// 编辑
    edit(id){
        this.info.isShow = true
         this.info.title='角色修改',
        this.info.isAdd = false
        this.$refs.one.look(id)
    }
},
}
</script>
<style>
</style>