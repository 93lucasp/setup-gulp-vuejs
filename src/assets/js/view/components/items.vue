<template>
    <div class="navBar wow slideInLeft">
        navbar
        {{userName}}
      
    </div>
</template>

<script>
    // import UserDetail from './UserDetail.vue';
    // import UserEdit from './UserEdit.vue';

    module.exports =  {
        props: {
            navBarItems: Array
            // userName: {
            //     type: String,
            //     required: true,
            //     // default: "ALEX"
            // },
            // userAge: Number,
            // resetFn: Function
        },
        data: function() {
            return {
                links: ['link1','link2', 'link3', 'link4'],
                access: ['login','signup']
            }
        },
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
