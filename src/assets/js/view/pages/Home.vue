<template>
    <div class="component">
       <vue-navbar :userName="name" :items="items.navBar" :logo="logos.main"></vue-navbar>

        <div class="container mt-4">
            <div class="row">
                <div class="col-lg-4" v-for="project in listProjects">
                    <vue-project :projects="project" ></vue-project>
               </div>
            </div>
        </div>
        <vue-footer></vue-footer>
    </div>
</template>

<script>
var listProjects = [
    {
        title: 'Title',
        abstract: 'lorem ipsum bla bla bla bla this is an abstract',
        img: 'https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg',
        goal: 100000,
        raised: 34000
    },
    {
        title: 'Title1',
        abstract: 'lorem ipsum bla bla bla bla this is an abstract1111',
        img: 'https://i.pinimg.com/736x/73/de/32/73de32f9e5a0db66ec7805bb7cb3f807--navy-blue-houses-blue-and-white-houses-exterior.jpg',
        goal: 1000000,
        raised: 64000
    },
    {
        title: 'Title2',
        abstract: 'lorem ipsum bla bla bla bla this is an abstract222',
        img: 'https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15',
        goal: 1000000,
        raised: 12000
    },
    {
        title: 'Title3',
        abstract: 'lorem ipsum bla bla bla bla this is an abstract 333',
        img: 'https://static.dezeen.com/uploads/2017/08/clifton-house-project-architecture_dezeen_hero-1.jpg',
        goal: 450000,
        raised: 21000
    },
    {
        title: 'Title4',
        abstract: 'lorem ipsum bla bla bla bla this is an abstract 4444',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Winchester_House_Front.jpg/1200px-Winchester_House_Front.jpg',
        goal: 100000,
        raised: 34000
    }
];
var items = {
    navBar: ['link1','link2','link3','link4'],
    footer: ['link5','link6','link7','link8'],
};
var logos = {
    main: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Bass_logo.svg/170px-Bass_logo.svg.png',
};

module.exports =  {
    data: function() {
        return {
            items: items,
            logos: logos,
            listProjects: listProjects
        }
    },
    methods: {
        changeName() {
            this.name="Alex";
            
        }
    },
}
</script>

<style scoped>

</style>
