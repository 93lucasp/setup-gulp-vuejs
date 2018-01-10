<template>
       <div class="col-lg-3">
           <div class="panel panel-default">
                <slot></slot>
           </div>
       </div>
</template>

<script>
   module.exports = {
       props: ['deleteQuote'],
    }
</script>

<style scoped>
    .panel {
        border: 1px solid #000;
        padding: 1em;
        text-align: center;
        margin: 1em;
        border-radius: 4px;
    }
</style>