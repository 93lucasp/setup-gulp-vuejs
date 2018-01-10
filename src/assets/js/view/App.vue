<template>
    <div>
        <vue-navbar :items="items.navBar" :logo="logos.main" ></vue-navbar>
        <div class="container">
            <component :is="selectedComponent" ></component>
        </div>
        <vue-footer></vue-footer>
    </div>
</template>

<script>
const data = require("./data");
  let items = data.items();
  let logos = data.logos();

  const Home = require("./pages/Home.vue");
  const Projects = require("./pages/Projects.vue");
  const Quote = require("./pages/Quote.vue");
  module.exports = {
      props:['selectedComponent'],
    data: function() {
      return {
        items: items,
        logos: logos,
      };
    },
    
    components: {
      home: Home,
      projects: Projects,
      note: Quote
    },
    methods: {
          
        }
  };
</script>

<style scoped>

</style>