<template>
    <div>
        <vue-navbar :items="items"></vue-navbar>
        <div class="container">
            <component :is="selectedComponent" ></component>
        </div>
        <vue-footer></vue-footer>
    </div>
</template>

<script>
    const firebase = require('firebase');
    
    const data = require("./data");
    const logos = data.logos();

    const Home = require("./pages/Home.vue");
    const Projects = require("./pages/Projects.vue");
    const Quote = require("./pages/Quote.vue");


    let aItems = [];
    firebase.database().ref('sections').once('value').then(function(snapshot) {
        var oItems = snapshot.val();
        for (key in oItems) {
            aItems.push(oItems[key]);
            aItems['_id'] = key;
        }
        console.log(aItems);
    });

    module.exports = { 
            props:['selectedComponent'],
            data: function() {
                return {
                    items: aItems,
                    // logos: logos
                };
            },
            components: {
                home: Home,
                projects: Projects,
                note: Quote
            },
        };
   
</script>

<style scoped>

</style>