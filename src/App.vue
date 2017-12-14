<template>
  <div id="app">
    <component-a event="hi,boy" v-on:child-said="sonSaid"></component-a>
    <h3>son said:{{sonWords}}</h3>
    <h1>{{msg}}</h1>
    <span><input type="text" v-model="newTodo" v-on:keyup.enter="addTodo()"><button
      @click="addTodo()">添加</button></span>
    <ul>
      <li v-for="item in todos"><span>{{item.action}}</span><input type="checkbox" v-bind:checked="item.finished"
                                                                   v-model="item.finished"></li>
    </ul>
  </div>
</template>

<script>
  import Store from './store';
  import ComponentA from './components/ComponentA';
  import {myEventBus} from './event-bus';

  export default {
    data() {
      return {
        msg: 'this is a todo list.',
        newTodo: '',
        sonWords: '',
        todos: Store.fetch()
      }
    },
    components: {ComponentA},
    created: function () {
      // myEventBus.$on('child-said', function (msg) {
      //   console.log("msg:"+msg);
      //   this.sonWords = msg;
      // })
    }
    ,
    methods: {
      addTodo: function () {
        this.todos.push({action: this.newTodo, finished: false})
        this.newTodo = '';
      },
      sonSaid:function (sonMsg) {
        console.log("sonMsg:"+sonMsg);
        this.sonWords = sonMsg;
      }
    }
    ,
    watch: {
      todos: {
        handler: function (items) {
          Store.save(items)
        }
        ,
        deep: true
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  li {
    list-style-type: none;
    margin: 10px
  }
</style>
