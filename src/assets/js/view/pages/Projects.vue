<template>
    <div class="position-relative">
     <div class="component">
     
        <div class="container mt-4">
            <div class="row">
                <div class="col-lg-4" v-for="project in listProjects">
                    <vue-project :projects="project"></vue-project>
               </div>
            </div>
        </div>
       
    </div>
    </div>
    
</template>

<script>
    const data = require("../data");
    
    let listProjects = data.listProjects();
    module.exports = {
        data: function() {
            return {
            listProjects: listProjects
            };
        }
    };
</script>

<style scoped>

</style>