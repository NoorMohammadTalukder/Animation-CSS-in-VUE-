<template>
  <div class="container"> 
    <users-list></users-list>
  </div>
  <div class="container">
    <div class="block" :class="{animate : animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition name="para"
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @enter-cancelled="enterCancel"
    @leave-cancelled="leaveCancel"
    >
      <p v-if="paraIsVisible">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nemo quidem natus aliquid temporibus suscipit possimus, quod iure, non quaerat aperiam minus earum cum amet sint accusamus maxime id sit.</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <!-- <transition name="modal"> -->
      <base-modal @close="hideDialog" :open="dialogIsVisible">
        <p>This is a test dialog!</p>
        <button @click="hideDialog">Close it!</button>
      </base-modal>
  <!-- </transition> -->
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
  <div class="container">
    <transition name="btn">
      <button @click="showUser" v-if="!userAreVisible">Show user</button>
      <button @click="hideUser" v-else>Hide user</button>
    </transition>
  </div>
</template>  

<script>

import UsersList from './components/UsersList.vue';
export default {
    components:{UsersList},
    data() {
        return {
            dialogIsVisible: false,
            animatedBlock: false,
            paraIsVisible: false,
            userAreVisible: false,
            enterInterval: null,
            leaveInterval: null,
        };
    },
    methods: {
        enterCancel() {
        },
        leaveCancel() {
        },
        beforeEnter(el) {
            el.style.opacity = 0;
        },
        enter(el, done) {
            let round = 1;
            this.enterInterval = setInterval(() => {
                el.style.opacity = round * 0.1;
                round++;
                if (round > 10) {
                    clearInterval(this.enterInterval);
                    done();
                }
            }, 20);
        },
        leave(el, done) {
            let round = 1;
            this.leaveInterval = setInterval(function () {
                el.style.opacity = 1 - round * 0.1;
                round++;
                if (round > 10) {
                    clearInterval(this.leaveInterval);
                    done();
                }
            }, 20);
        },
        animateBlock() {
            this.animatedBlock = true;
        },
        showDialog() {
            this.dialogIsVisible = true;
        },
        hideDialog() {
            this.dialogIsVisible = false;
        },
        toggleParagraph() {
            this.paraIsVisible = !this.paraIsVisible;
        },
        showUser() {
            this.userAreVisible = true;
        },
        hideUser() {
            this.userAreVisible = false;
        }
    },
  
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 1s ease-in-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate{
  /* transform: translateX(-50px); */
  animation: slide 1s ease-out forwards ;
}
@keyframes slide {
  0%{
    transform: translateX(0) scale(1) ;
    background-color: red ;
  }
  50%{
    transform: translateX(-150px) scale(1.20);
    background-color: green ;
  }
  100%{
    transform: translateX(-0) scale(1.5);
    background-color: wheat ;
  
  }
 
}

.v-enter-from{
    opacity: 0.1;
    transform: translateY(-50px) ;
  }
.v-enter-active{
    transition: all 1s ease-out;
  }
.v-enter-to{
  opacity: 1;
    transform: translateY(0) ;
  }
.v-leave-from{
  opacity: 1;
    transform: translateY(0) ;
  }
.v-leave-active{
    transition: all 1s ease-in;
  }
.v-leave-to{
  opacity: 0.1;
    transform: translateY(-50px) ;
  }


  .btn-enter-from{
    opacity: 0.1;
    transform: translateY(-50px) ;
  }
.btn-enter-active{
    transition: all 1s ease-out;
  }
.btn-enter-to{
  opacity: 1;
    transform: translateY(0) ;
  }
.btn-leave-from{
  opacity: 1;
    transform: translateY(0) ;
  }
.btn-leave-active{
    transition: all 1s ease-in;
  }
.btn-leave-to{
  opacity: 0.1;
    transform: translateY(-50px) ;
  }
</style>