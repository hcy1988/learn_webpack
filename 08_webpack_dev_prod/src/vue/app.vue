<template>
  <h1>h1 is in here</h1>
  <h2>{{firstName}}</h2>
  <h2>{{lastName}}</h2>
  <h2>{{fullName}}</h2>
  <hello-world></hello-world>
</template>

<script>
import HelloWorld from './HelloWorld.vue';
  export default {
    data() {
      return {
        firstName: "Huang",
        lastName: "Chuanyan"
      }
    },
    computed: {
      fullName: function() {
        return this.firstName + " " + this.lastName;        
      }
    },
    components: {
      HelloWorld,
    }
  }
</script>

<style scoped>
  h1 {
    color: gray;
  }
  h2 {
    color: #444444;
  }
</style>
