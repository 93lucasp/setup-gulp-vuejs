var Vue = require('vue')
var Firebase = require('firebase');
// DEFAULT COMPONENTS
var _config = {

    apiKey: "AIzaSyBmGWaBB-M3Gh3u5McXH_4V-MVWgvAxfHk",
    authDomain: "starteed-blog-admin.firebaseapp.com",
    databaseURL: "https://starteed-blog-admin.firebaseio.com",
    projectId: "starteed-blog-admin",
    storageBucket: "starteed-blog-admin.appspot.com",
    messagingSenderId: "545788930297",

    language: "it",

}

const firebase = Firebase.initializeApp(_config);
// DEFAULT COMPONENTS

// imorting files
var Items = require('./components/shared/items.vue')
var NavBar = require('./components/layout/navbar.vue')
var Footer = require('./components/layout/footer.vue')
    // create components
Vue.component('vue-footer', Footer);
Vue.component('vue-navbar', NavBar);
Vue.component('vue-items', Items);

// PROJECTS COMPONENTS

// imorting files
var Project = require('./components/projects/project.vue')
    // create components
Vue.component('vue-project', Project);


// QUOTE COMPONENTS

// imorting files
var QuoteGrid = require('./components/quote/QuoteGrid.vue')
var Header = require('./components/quote/Header.vue')
var Quote = require('./components/quote/Quote.vue')
var New = require('./components/quote/New.vue')
    // create components
Vue.component('app-quote-grid', QuoteGrid);
Vue.component('app-quote', Quote);
Vue.component('app-new-quote', New);
Vue.component('app-header', Header);


var App = require('./App.vue')

Vue.component('vue-app', App);
new Vue({
    el: '#app',
})