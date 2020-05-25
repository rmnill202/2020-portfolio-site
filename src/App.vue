<template>
  <!-- <v-app style="background-color: var(--v-background-base)"> -->
  <!-- <v-app style="background: linear-gradient(180deg, rgba(223,152,70,1) 0%, rgba(223,70,125,1) 33%);"> -->
    <!-- <v-app style="background: linear-gradient(180deg, rgba(223,152,70,1) 0%, rgb(223, 70, 70) 33%);"> -->
  <!-- <v-app style="background: linear-gradient(180deg, #053669 0%, rgb(223, 70, 70) 500px);"> -->
  <!-- <v-app style="background: linear-gradient(180deg, #053669 0%, rgb(223, 70, 70) 500px, rgb(223, 70, 70) 700px, #290036 1200px);"> -->
  <v-app style="background: linear-gradient(180deg, #053669 0%, rgb(223, 70, 70) 500px);">

    <!-- Navigation -->
    <div> <!-- style="position: sticky; top: 0" -->
      <div style="text-align: center; margin-bottom: 50px; margin-top: 50px">
        <nav-btn v-for="l in pageLinks" :linkTo="l.linkTo" :text="l.text"/>
      </div>
    </div>

    <!-- Page Contents -->
    <router-view/>
    
  </v-app>
</template>

<script>
import NavBtn from './components/NavBtn.vue';

export default {
  name: 'App',
  components: { NavBtn },
  data() {
    return {
      drawerOpen: false,
      pageLinks: [
        {text: 'Portfolio',   linkTo: '/',      icon: 'fas fa-briefcase'},
        {text: 'About',       linkTo: '/about', icon: 'fas fa-address-card'},
        {text: 'Contact',       linkTo: '/contact', icon: 'fas fa-address-card'},
        {text: 'Blog',        linkTo: '/blog',  icon: 'fas fa-comments'},
      ]
    };
  },

};
</script>

<style>
.name-links {
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}


/* .project-bg {
  
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 500px;
  background-image: url('~@/assets/m_bg_01.svg'), url('~@/assets/m_bg_02.svg'), url('~@/assets/m_bg_03.svg'); 
  background-repeat: repeat-x, repeat-x, repeat-x;
  background-position: center top, 55% -5px, 45% -25px; 
  background-size: 1120px, 1020px, 820px;
} */

</style>
