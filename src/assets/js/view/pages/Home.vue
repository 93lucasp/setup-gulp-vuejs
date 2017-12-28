<template>
     <div class="component">
       <vue-navbar :items="items.navBar" :logo="logos.main"></vue-navbar>

        <div class="container mt-4">
            <div class="row">
                ciaoo questa è la home

            </div>
        </div>
        <vue-footer></vue-footer>
    </div>
</template>

<script>

const data = require('../data');
let items = data.items(); 
let logos = data.logos(); 
module.exports =  {
   data: function(){
       return {
           items: items,
           logos: logos,

       }
   },
    methods: {
        changeName() {
            this.name="Alex";
            
        }
    },
}
</script>

<style scoped>
</style>