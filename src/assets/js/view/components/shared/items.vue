<template>
    <div>
        <li v-for="item in items">
            <a v-bind:href="item + '.html'"> {{ item }} </a>
        </li>
    </div>
</template>

<script>
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
            }
        },
        methods: {
            changeName() {
                this.userName="Alexnavbar";
                
            },
        },
    }
</script>

<style scoped>
</style>