<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <p>{{$store.state.name}}</p>
      <p>{{$store.getters.newName}}</p>
      <p>{{$store.state.age}}</p>
      <button @click='add'>增加年龄</button>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
  methods: {
    add(){
      this.$store.commit('addAge',10)
    }
  },
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
