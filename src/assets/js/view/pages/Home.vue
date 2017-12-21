<template>
    <div class="component">
       <vue-navbar :userName="name" :items="items.navBar" :logo="logos.main"><vue-footer></vue-footer></vue-navbar>
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
                age: 24,
                items: {
                    navBar: ['link1','link2','link3','link4'],
                    footer: ['link1','link2','link3','link4'],
                },
                logos: {
                    main: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Bass_logo.svg/170px-Bass_logo.svg.png',

                }
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
