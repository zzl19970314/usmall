<template>
  <div>
    <el-dialog
      :title="info.title"
      :visible.sync="info.isShow"
    >
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="width">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" :label-width="width">
          <el-date-picker
          v-model="begintime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
        </el-form-item>
        
       
        <el-form-item label="一级分类" :label-width="width">
          <el-select
            v-model="form.first_cateid"
            placeholder="--请选择--"
            @change="changeCate"
          >
            <el-option label="顶级菜单" :value="0"> </el-option>
            <el-option
              v-for="item in cateList"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级分类" :label-width="width">
          <el-select v-model="form.second_cateid" placeholder="--请选择--">
            <el-option label="顶级菜单" :value="0"></el-option>
            <!-- 动态循环添加数据  菜单分类 -->
            <el-option
              v-for="item in secondCate"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品规格" :label-width="width">
          <el-select
            v-model="form.goodsid"
            placeholder="--请选择--"
          >
            <el-option label="顶级菜单" :value="0"></el-option>
            <!-- 动态循环添加数据  菜单分类 -->
            <el-option
              v-for="item in specList"
              :key="item.id"
              :label="item.specsname"
              :value="item.id"
            ></el-option>
          </el-select>
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
        <el-button @click="info.isShow = false">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd"
          >添 加</el-button
        >
        <el-button type="primary" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import {
  reqseckAdd,
  reqseckListOne,
  reqseckEdit
} from "../../../util/request";
export default {
  props: ["info"],
  computed: {
    ...mapGetters({
      cateList: "cate/list",
      specList: "specs/list"
    })
  },
  components: {},
  data() {
    return {
      width: "160px",
      secondCate: [],
      secondSpec: [],
      // isShow: true,
      form: {
        title:"",
        begintime:"",
        endtime:"",
        first_cateid: 0,
        second_cateid: 0,
        goodsid: "",
        status: 1
      },
      defaultProps: {
        children: "children",
        label: "label"
      },

       pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        begintime: '',
        endtime: ''
    };
  },
  methods: {
    // 新增属性
    addAttr() {
      this.arrAttr.push({
        value: ""
      });
    },
    // 删除属性
    delAttr(index) {
      this.arrAttr.splice(index, 1);
    },
    ...mapActions({
      requestcateList: "cate/requestcateList",
      requestseckList: "cate/requestseckList"
    }),

    // 重置
    empty() {
      this.form = {
        title:"",
        begintime:"",
        endtime:"",
        first_cateid: 0,
        second_cateid: 0,
        goodsid: "",
        status: 1
      };
    },
    // 隐藏弹框
    hide() {
      this.info.isShow = false;
    },
    // 修改二级分类
    changeCate() {
      this.secondCate = this.cateList.find(item => {
        return item.id == this.form.first_cateid;
      }).children;
    },
    //添加
    add() {
      reqseckAdd(this.form).then(res => {
        this.empty();
        this.hide();
      });
    },

    ...mapActions({
      requestcateList: "cate/requestcateList",
      requestspecsList: "specs/requestspecsList",
      requestseckList: "seck/requestseckList",
    }),
    // 获取一条数据
    look(id) {
      reqseckListOne({ id: id }).then(res => {
        this.form = res.data.list;
        this.form.id = id;
        console.log(this.form);
      });
    },
    update() {
      reqseckEdit(this.form).then(res => {
        // this.requestcateList();
        this.hide();
      });
    }
  },
  mounted() {
    this.requestcateList();
    this.requestspecsList();
    this.requestseckList();
  }
};
</script>
<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  border: 2px dashed #ccc;
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
