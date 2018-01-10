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



// page to pass
var App = require('./App.vue')

Vue.component('vue-app', App);
// PROJECTS PAGE

// page to pass

// imorting components
var Project = require('./components/projects/project.vue')
    // create components
Vue.component('vue-project', Project);


// QUOTE PAGE

// page to pass

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

var Home = require('./pages/Home.vue')
var Projects = require('./pages/Projects.vue')
var Note = require('./pages/Quote.vue')

new Vue({
    el: '#app',

})