<template>
    
        <div class="project">
            <div class="project__header" :style="{ backgroundImage: 'url(' + projects.img + ')' }"></div>
            <div class="row p-4">
                <div class="col-lg-12 mb-3">
                    <div class="project__title text-center">
                        {{projects.title}}
                    </div>
                </div>
                <div class="col-lg-12 mb-3">
                    <div class="project__abstract">
                        {{projects.abstract}}
                    </div>
                </div>
                <div class="col-lg-6 mb-3">
                    <div class="project__goal">
                        goal: {{projects.goal}}
                    </div>
                </div>
                <div class="col-lg-6 mb-3">
                    <div class="project__raised">
                        raised: {{projects.raised}}
                    </div>
                </div>
            </div>
            
            
            
           
        </div>
  
    
       
</template>

<script>
    // import UserDetail from './UserDetail.vue';
    // import UserEdit from './UserEdit.vue';

    module.exports =  {
        props: {
            projects: Object,
            // userName: {
            //     type: String,
            //     required: true,
            //     // default: "ALEX"
            // },
            // userAge: Number,
            // resetFn: Function
        },
      
    }
</script>

<style scoped>
    .project__header {
        background-size: cover;
        width: 100%;
        height: 16em;
    }
    .project__raised,.project__goal {
        color: blue;
    }
</style>