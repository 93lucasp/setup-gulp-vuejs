<template>
    <div class="navBar">
        navbar
        {{userName}}
      
    </div>
</template>

<script>
    // import UserDetail from './UserDetail.vue';
    // import UserEdit from './UserEdit.vue';

    module.exports =  {
        props: {
            userName: String
            // userName: {
            //     type: String,
            //     required: true,
            //     // default: "ALEX"
            // },
            // userAge: Number,
            // resetFn: Function
        },
        // data: function() {
        //     return {
        //         name: "Luca",
        //         age: 24
        //     }
        // },
        methods: {
            changeName() {
                this.userName="Alexnavbar";
                
            },
            
        },
        // components: {
        //     appUserDetail: UserDetail,
        //     appUserEdit: UserEdit
        // }
    }
</script>

<style scoped>
   
</style>
