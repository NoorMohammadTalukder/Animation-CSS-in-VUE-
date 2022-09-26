import { createApp } from 'vue';
import { createRouter,createWebHistory } from 'vue-router';
import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import x from './components/pages/AllUsers.vue';
import CourseGoal from './components/pages/CourseGoal.vue'

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/users",component:x
        },
        {
            path:"/goals",component:CourseGoal
        }
    
    ]
       
})
const app = createApp(App);

app.component('base-modal', BaseModal);
app.use(router);

app.mount('#app');
