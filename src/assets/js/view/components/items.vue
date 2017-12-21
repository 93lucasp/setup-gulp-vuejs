<template>
    <div>
        <li v-for="item in items">
            <a v-bind:href="item + '.html'"> {{ item }} </a>
        </li>
    </div>
       
</template>

<script>
    // import UserDetail from './UserDetail.vue';
    // import UserEdit from './UserEdit.vue';

    module.exports =  {
        props: {
            items: Array,
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
                // links: ['link1','link2', 'link3', 'link4'],
                // access: ['login','signup'],
                
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
