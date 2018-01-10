<template>
    <div class="row">
       <app-quote v-for="quote in quotes" @click.native="deleteQuote(this)">{{quote}}</app-quote>
    </div>
</template>

<script>
   module.exports = {
       props: ['quotes','deleteQuote'],
    }
</script>

<style scoped>
  
</style>