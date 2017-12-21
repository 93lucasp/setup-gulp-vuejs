<template>
    <div class="component">
       <vue-navbar :userName="name"></vue-navbar>
    {{name}}
        <button @click="changeName()">change my name</button>
    
        <hr>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <!-- <app-user-detail 
                    :userName="name" 
                    :userAge="age"
                    @nameWasReset="name = $event" 
                    :resetFn="resetName"></app-user-detail> -->
                </div>
                <div class="col-lg-6">
                    <!-- <app-user-edit 
                    :userAge="age"
                    :changeUserAge="changeAge"
                    @ageWasEdited="age = $event"
                    ></app-user-edit> -->
                </div>
            </div>
        </div>
        <vue-footer></vue-footer>
    </div>
</template>

<script>
var navbar = require('../components/navbar.vue'),
footer = require('../components/footer.vue');

    // import UserDetail from './UserDetail.vue';
    // import navbar from './components/navbar.vue';

     module.exports =  {
         components: {
            vueNavbar: navbar,
            vueFooter: footer
        },
        data: function() {
            return {
                name: "Luca",
                age: 24
            }
        },
        methods: {
            changeName() {
                this.name="Alex";
                
            }
            // resetName() {
            //     this.name = "Luca";
            // },
            // changeAge() {
            //     this.age = 30;
            // }
            
        },
        // components: {
        //     appUserDetail: UserDetail,
        //     appUserEdit: UserEdit
        // }
    }
</script>

<style scoped>
   
</style>
