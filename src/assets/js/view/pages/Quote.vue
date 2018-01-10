<template>
    <div>
        <div class="container"> 
            <app-header :maxQuotes="maxQuote" :quoteCount="quotes.length"></app-header>
            <app-new-quote :addQuote="addQuote" ></app-new-quote>
            <app-quote-grid :quotes="quotes" :deleteQuote="deleteQuote"></app-quote-grid>
        </div>
    </div>
</template>

<script>
 
    module.exports = {
        data: function() {
            return {
            quotes: [],
            maxQuote: 10
            };
        },
        methods: {
            addQuote(quote) {
            if (this.quotes.length < 10) {
                if (quote != "") {
                this.quotes.push(quote);
                } else {
                alert("please write something");
                }
            } else {
                alert("lease remove a quote first ");
            }
            },
            deleteQuote(quote) {
            var index = this.quotes.indexOf(quote);
            this.quotes.splice(index, 1);
            }
        }
    };
</script>

<style>

</style>
