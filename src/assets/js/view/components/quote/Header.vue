<template>
    <div>
       <div class="progress">
            <div class="progress-bar text-center" style="" :style="{width: (quoteCount / maxQuotes) * 100 + '%'}">
                <div>{{quoteCount}} / {{maxQuotes}}</div>
            </div>
        </div>
    </div>
</template>

<script>
   module.exports = {
       props: ['quoteCount', 'maxQuotes']
    }
</script>

<style>
</style>