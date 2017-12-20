<template>
    <div class="navbar">
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
        // methods: {
        //     changeName() {
        //         this.name="Alex";
                
        //     },
        //     resetName() {
        //         this.name = "Luca";
        //     },
        //     changeAge() {
        //         this.age = 30;
        //     }
            
        // },
        // components: {
        //     appUserDetail: UserDetail,
        //     appUserEdit: UserEdit
        // }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
