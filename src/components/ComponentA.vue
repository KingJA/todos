<template>
  <div>
    <h1>Dad said:{{msg}}</h1>
    <button @click="receiver()">receive from father</button>
    <button @click="sender()">send to father</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '',
        sendMsg: 'hello, fahter'
      }
    },
    props: ['event'],
    methods: {
      receiver: function () {
        this.msg = this.event;
      },
      sender: function () {
        console.log("sender")
        this.$emit('child-said', this.sendMsg);
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: #5896ff;
  }

</style>
