<template>
<div class="box">
    <div class="con">
        <h3>登录</h3>
        <div class="inp"><input type="text"></div>
        <div class="inp"><input type="text"></div>
        <div class="inp"><button>登录</button></div>
    </div>
</div>
</template>

<script>
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
}
</script>
<style scoped>
.box{
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right,#563443,#303D60);
}
.con{
    width: 400px;
    height: 300px;
    background: #fff;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    overflow: hidden;
}
.con h3{
    text-align: center;
    margin-top: 20px;
    font-size: 20px;
}
.con .inp{
    width: 60%;
    height: 30px;
    margin: 30px auto ;
    border: 1px solid black;
   
}
.inp input{
    width: 100%;
    height: 30px;   
}
.inp button{
    width: 100%;
    height: 30px;
    background: #409EFF;
    color: #fff;
    outline: none;
    border:none;
}
</style>>