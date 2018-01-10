<template>
    
     <a v-bind:href="item + '.html'" > {{ item }} </a>
       <!-- @click.prevent="changePage(item)" -->
</template>

<script>
    module.exports =  {
        props: ['item'],
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