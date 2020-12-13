<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="手机号" :label-width="width">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="width">
          <el-input v-model="form.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="width">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="width">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="hide">取 消</el-button>
        <el-button type="primary" @click="update" >修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import {reqmemberListOne, reqmemberEdit} from "../../../util/request";
export default {
  props: ["info"],
  computed: {
    ...mapGetters({
      vipList: "vip/list",
    }),
  },
  components: {},
  data() {
    return {
      width: "160px",
      // isShow: true,
      form: {
        uid:"",
        nickname: "",
        phone:"",
        password:"",
        status: 1,
      },

      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    // 重置
    empty() {
      this.form = {
        nickname: "",
        phone:"",
        password:"",
        status: 1,
      };
    },
    // 隐藏弹框
    hide(){
      this.info.isShow=false
    },
    //添加
    // add() {
    //   // 由于后端要的数据是字符串数组，而获取到的是数组，所以需要stringify转换一下
    //   reqmemberAdd(this.form).then((res) => {
    //     this.empty()
    //     this.hide()
    //   });
    // },

    ...mapActions({
      requestmemberList: "vip/requestmemberList",
    }),
    // 获取一条数据
    look(uid) {
      reqmemberListOne({ uid: id }).then((res) => {
        this.form = res.data.list;
        this.from.password=""
        this.form.uid = id;
      });
    },
    update() {

      reqmemberEdit(this.form).then((res) => {
        this.requestmemeberList();
        this.hide()
      });
    },
  },
  mounted() {
    if (this.vipList.length == 0) {
      this.requestmemberList();
    }
    console.log(this.vipList);
  },
};
</script>
<style scoped>
</style>