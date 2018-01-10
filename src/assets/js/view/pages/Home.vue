<template>
     <div class="component">
       <vue-navbar :items="items.navBar" :logo="logos.main"></vue-navbar>
        <div class="container">
            <button class="btn btn-primary" @click="selectedComponent = 'appBlue'">Load Blue Template</button>
            <button class="btn btn-success" @click="selectedComponent = 'appGreen'">Load Green Template</button>
            <button class="btn btn-danger" @click="selectedComponent = 'appRed'">Load Red Template</button>
            <hr>
            <component :is="selectedComponent">ciao</component>
        </div>
        <vue-footer></vue-footer>
    </div>
</template>

<script>
  const data = require("../data");
  let items = data.items();
  let logos = data.logos();
  const Blue = require("../components/home/Blue.vue");
  const Green = require("../components/home/Green.vue");
  const Red = require("../components/home/Red.vue");
  module.exports = {
    data: function() {
      return {
        items: items,
        logos: logos,
        selectedComponent: "appBlue"
      };
    },
    methods: {
      changeName() {
        this.name = "Alex";
      }
    },
    components: {
      appBlue: Blue,
      appGreen: Green,
      appRed: Red
    }
  };
</script>

<style scoped>

</style>