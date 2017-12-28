var Vue = require('vue')
var Home = require('./pages/Home.vue')

var Projects = require('./pages/Projects.vue')
var Items = require('./components/items.vue')
var NavBar = require('./components/navbar.vue')
var Footer = require('./components/footer.vue')
var Project = require('./components/project.vue')
Vue.component('vue-footer', Footer);
Vue.component('vue-navbar', NavBar);
Vue.component('vue-items', Items);
Vue.component('vue-project', Project);
Vue.component('vue-navbar', NavBar);
Vue.component('vue-home', Home);


new Vue({
    el: '#app',
    render: function(createElement) {
        return createElement(Home)
    }
})

new Vue({
    el: '#projects',
    render: function(createElement) {
        return createElement(Projects)
    }
})