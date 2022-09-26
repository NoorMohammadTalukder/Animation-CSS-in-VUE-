<template>
   
        <transition-group tag="ul" name="user-list">
            <li v-for="data in users" :key="data" @click="removeUser(data)">
                {{data}}
            </li>

        </transition-group>
   
    <input type="text" v-model="name">
    <button @click="addUser(name)">Add User</button>
</template>

<script>
export default {
    data(){
        return{
            users:["Rana", "Kamal", "Riaz"],
            name:"",
        }
    },
    methods:{
        removeUser(x){
            // alert()
            this.users=this.users.filter(user=>user!==x)

        },
        addUser(x){
            this.users.unshift(x);
            this.name="";
        }
        
    }
}
</script>
<style scoped>
ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
li{
    padding: 1rem;
    border: 1px solid red;
}
.user-list-enter-from{
    opacity: 0;
    transform: translateX(-50px);
}
.user-list-enter-active{
    transition: all 1s ease-out;
}
.user-list-enter-to{
    opacity: 1;
    transform: translateX(0);
}
.user-list-leave-from{
    opacity: 1;
    transform: translateX(1);
}
.user-list-leave-active{
    transition: all 1s ease-out;
}
.user-list-leave-to{
    opacity: 0;
    transform: translateX(-50px);
}
</style>