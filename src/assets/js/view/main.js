var Vue = require('vue')
var Home = require('./pages/Home.vue')

Vue.component('vue-message', Home);


new Vue({
    el: '#app',
    render: function(createElement) {
        return createElement(Home)
    }
})