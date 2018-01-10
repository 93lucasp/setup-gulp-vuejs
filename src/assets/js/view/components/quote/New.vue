<template>
    <div class="row">
        <div class="col-lg-6 mx-auto">
            <form action="">
                <label for="">Quote</label>
                <textarea name="" class="form-control" v-model="quote" ></textarea>
                <button class="btn btn-primary" @click.prevent="addQuote(quote);clean()">Add</button>
            </form>
        </div>
    </div>
</template>

<script>
   module.exports = {
        data: function () {
            return {
                quote: '',
                counter: 0
            };
        },
        methods: {
            clean() {
                this.quote = '';
            }
        },
        props: ['addQuote'],
        // destroyed() {
        //     console.log('Destroyed!');
        // },
        // deactivated() {
        //     console.log('Deactivated!');
        // },
        // activated() {
        //     console.log('Activated!');
        // }
    }
</script>

<style>
</style>