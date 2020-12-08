// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入静态资源
import './assets/css/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//导入仓库
import store from './store/index'
Vue.prototype.$preImg = 'http://localhost:3000'
    /* eslint-disable no-new */
new Vue({
        el: '#app',
        router,
        store,
        components: { App },
        template: '<App/>'
    })
    //图片保存路径