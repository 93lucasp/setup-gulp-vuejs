<template>
    <div class="vue-navBar d-flex align-items-center">
        <div class="container d-flex align-items-center">
            <a href="/"><img :src="logo" alt="" class="logo"> </a>
            <div class="ml-auto">
                <ul>
                    <li v-for="item in items">
                        <vue-items :item="item"></vue-items>
                    </li>
                    
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

module.exports = {
  props: {
    items: Array,
    logo: String
  },
  data: function() {
    return {
    };
  },
  methods: {
    changeName() {
      this.userName = "Alexnavbar";
    }
  }
};
</script>

<style scoped>
