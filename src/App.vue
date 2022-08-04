<template>  
   <div id="app">
     <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      
    </nav>-->
    <app-header></app-header>
    <app-footer></app-footer>
    <h1>{{title}}</h1>
      <ninjas> </ninjas>
    <router-view/>
  </div>
</template>

<script>

import ninjas from './ninjas.vue'
import header from './components/header.vue'
import footer from './components/footer.vue'

export default {
  components:{ninjas},
  components:{
    'app-header': header,
    'app-footer': footer
  },
  data() {
   return {
    title: 'Hello World',
   }    
   
  }
}
</script>

<style>
h1{
  color:purple;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>