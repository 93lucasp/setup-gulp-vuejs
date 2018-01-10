<template>
     <div class="component">

       

        <div class="container">
            <button class="btn btn-primary" @click="selectedComponent = 'appBlue'">Load Blue Template</button>
            <button class="btn btn-success" @click="selectedComponent = 'appGreen'">Load Green Template</button>
            <button class="btn btn-danger" @click="selectedComponent = 'appRed'">Load Red Template</button>
            <hr>
            <component :is="selectedComponent">ciao</component>
        </div>
        
    </div>
</template>

<script>

  const Blue = require("../components/home/Blue.vue");
  const Green = require("../components/home/Green.vue");
  const Red = require("../components/home/Red.vue");

  module.exports = {
    data: function() {
      return {

        selectedComponent: "appBlue"
      };
    },
    methods: {
      // changeName() {
      //   this.name = "Alex";
      // }
    },
    components: {
      appBlue: Blue,
      appGreen: Green,
      appRed: Red
    },
    props: [ 'changePage' ]
  };
</script>

<style scoped>

</style>