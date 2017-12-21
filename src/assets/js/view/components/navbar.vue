<template>
    <div class="vue-navBar d-flex align-items-center">
        <div class="container d-flex align-items-center">
            <a href="" ><img :src="logo" alt="" class="logo"> </a>
            <div class="ml-auto">
                
                <ul>
                    <vue-items :items="items" ></vue-items>
                    <!-- <li v-for="item in items">
                        <a v-bind:href="item"> {{ item }} </a>
                    </li> -->
                </ul>
                <ul class="access">
                    <li>
                        <a href=""> Login </a>
                    </li>
                    <li>
                        <a href=""> Signup </a>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
</template>

<script>
// import UserDetail from './UserDetail.vue';
// import UserEdit from './UserEdit.vue';

module.exports = {
  props: {
    userName: String,
    items: Array,
    logo: String
    // userName: {
    //     type: String,
    //     required: true,
    //     // default: "ALEX"
    // },
    // userAge: Number,
    // resetFn: Function
  },
  data: function() {
    return {
    //   links: ["link1", "link2", "link3", "link4"],
    //   access: ["login", "signup"]
    };
  },
  methods: {
    changeName() {
      this.userName = "Alexnavbar";
    }
  }
  // components: {
  //     appUserDetail: UserDetail,
  //     appUserEdit: UserEdit
  // }
};
</script>

<style scoped>

</style>
