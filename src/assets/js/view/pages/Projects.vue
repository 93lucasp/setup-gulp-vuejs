<template>
     <div class="component">
       <vue-navbar :userName="name" :items="items.navBar" :logo="logos.main"></vue-navbar>

        <div class="container mt-4">
            <div class="row">
                <div class="col-lg-4" v-for="project in listProjects">
                    <vue-project :projects="project" ></vue-project>
               </div>
            </div>
        </div>
        <vue-footer></vue-footer>
    </div>
</template>

<script>

const data = require('../data');
let items = data.items(); 
let logos = data.logos(); 
let listProjects = data.listProjects(); 
module.exports =  {
   data: function(){
       return {
           items: items,
           logos: logos,
           listProjects: listProjects,
           
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