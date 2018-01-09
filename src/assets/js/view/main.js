var Vue = require('vue')
var Home = require('./pages/Home.vue')

var Projects = require('./pages/Projects.vue')
var Items = require('./components/items.vue')
var NavBar = require('./components/navbar.vue')
var Footer = require('./components/footer.vue')
var Project = require('./components/project.vue')
var Title = require('./components/title.vue')
var Title2 = require('./components/title2.vue')
Vue.component('vue-footer', Footer);
Vue.component('vue-navbar', NavBar);
Vue.component('vue-items', Items);
Vue.component('vue-project', Project);
Vue.component('vue-navbar', NavBar);
Vue.component('vue-home', Home);
Vue.component('vue-title', Title);
Vue.component('vue-title2', Title2);


$(document).ready(function() {
    if ($('body').hasClass('home')) {
        new Vue({
            el: '#home',
            render: function(createElement) {
                return createElement(Home)
            }
        })
    } else if ($('body').hasClass('projects')) {
        new Vue({
            el: '#projects',
            render: function(createElement) {
                return createElement(Projects)
            }
        })
    }
});