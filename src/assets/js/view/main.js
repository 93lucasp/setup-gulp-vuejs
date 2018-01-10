var Vue = require('vue')

// DEFAULT COMPONENTS

// imorting cpmonents
var Items = require('./components/shared/items.vue')
var NavBar = require('./components/layout/navbar.vue')
var Footer = require('./components/layout/footer.vue')
    // create components
Vue.component('vue-footer', Footer);
Vue.component('vue-navbar', NavBar);
Vue.component('vue-items', Items);
Vue.component('vue-navbar', NavBar);


// HOME PAGE

// page to pass
var Home = require('./pages/Home.vue')


// PROJECTS PAGE

// page to pass
var Projects = require('./pages/Projects.vue')
    // imorting components
var Project = require('./components/projects/project.vue')
    // create components
Vue.component('vue-project', Project);


// QUOTE PAGE

// page to pass
var Note = require('./pages/Quote.vue')
    // imorting cpmonents
var QuoteGrid = require('./components/quote/QuoteGrid.vue')
var Header = require('./components/quote/Header.vue')
var Quote = require('./components/quote/Quote.vue')
var New = require('./components/quote/New.vue')
    // create components
Vue.component('app-quote-grid', QuoteGrid);
Vue.component('app-quote', Quote);
Vue.component('app-new-quote', New);
Vue.component('app-header', Header);


$(document).ready(function() {
    if ($('body').hasClass('home')) {
        new Vue({
            el: '#home',
            render: function(createElement) {
                return createElement(Home)
            }
        })
    } else if ($('body').hasClass('note')) {
        new Vue({
            el: '#note',
            render: function(createElement) {
                return createElement(Note)
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