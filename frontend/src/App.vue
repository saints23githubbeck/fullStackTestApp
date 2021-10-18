<template>
  <div id="app">
    <Header />
    <ClientComponent msg="Client management  Application"/>
   
  </div>
</template>

<script>
import ClientComponent from './components/ClientComponent.vue'
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    ClientComponent,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
