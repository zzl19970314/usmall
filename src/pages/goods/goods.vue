<template>
  <div>
    <div>
      <el-button type="primary" @click="willAdd">添加</el-button>
      <!-- 添加 -->
      <v-add :info="info" ref="one"></v-add>
      <!-- 列表 -->
      <v-list @edit="edit($event)"></v-list>
    </div>
  </div>
</template>

<script>
import vList from './components/list'
import vAdd from './components/add'
export default {
  components: {
    vList,
    vAdd
  },
  data() {
    return {
        info:{
            isShow:false,
            title:'商品管理添加',
            isAdd:true
        }
    };
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {
    willAdd(){
      this.info.isShow=!this.info.isShow
      this.info.title='商品管理添加'
      this.info.isAdd=true
      this.$refs.one.empty(0)
    },
    edit(id){
        this.info.isShow=!this.info.isShow
      this.info.title='商品管理修改'
      this.info.isAdd=false
      this.$refs.one.look(id)
    }
  }
};
</script>
<style></style>
