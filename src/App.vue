<template>
  <v-app>
    <div class="app-container" style="position: inherit">

    <!-- Parallaxed background -->
    <!-- <div class="parallax_section parallax_layer_1">
      <div class="project-bg"/>
    </div> -->
    <div class="parallax_section parallax_layer_3">
      <div class="bg-3"/>
    </div>
    <div class="parallax_section parallax_layer_2">
      <div class="bg-2"/>
    </div>
    <div class="parallax_section parallax_layer_1">
      <div class="bg-1">
        <!-- <div class="bg-fill"></div> -->
      </div>
    </div>

    <!-- Navigation -->
    <div > <!-- style="position: sticky; top: 0" -->

      <!-- Navigation Bar -->
      <v-toolbar flat color="transparent" min-height="64px" height="64px"> <!--  height="100px" -->

        <!-- Icon / Social links -->
        <div class="hidden-xs-only">
          <v-btn class="mx-2" icon>
            <v-icon style="font-size: 30px">fab fa-github-square</v-icon>
          </v-btn>
          <v-btn class="mx-2" icon>
            <v-icon style="font-size: 30px">fab fa-linkedin</v-icon>
          </v-btn>
        </div>
        <v-spacer/>

        <!-- Navigation buttons -->
        <v-toolbar-items class="hidden-xs-only" style="height: 50px;"> <!--  align-self: end; -->
          <v-btn v-for="link in pageLinks" :to="link.linkTo" text>{{link.text}}</v-btn>
        </v-toolbar-items>

        <!-- Hamburger menu - Appears on smaller screens only -->
        <v-btn icon class="hidden-sm-and-up" @click="drawerOpen = !drawerOpen">
          <v-icon>fas fa-bars</v-icon>
        </v-btn>
        
      </v-toolbar>

      <!-- Drawer - Mobile -->
      <v-navigation-drawer v-model="drawerOpen" absolute temporary>
        <v-list> 
          <v-list-item v-for="link in pageLinks" :to="link.linkTo">  <v-list-item-content>{{link.text}}</v-list-item-content>  </v-list-item>
          <v-list-item to="/">   <v-list-item-content>GitHub</v-list-item-content>   </v-list-item>
          <v-list-item to="/">   <v-list-item-content>LinkedIn</v-list-item-content>   </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>

    <!-- Page Contents -->
    <router-view/>
    </div>


    

  </v-app>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      drawerOpen: false,
      pageLinks: [
        {text: 'Portfolio',   linkTo: '/',      },
        {text: 'About Me',    linkTo: '/about', },
        {text: 'Blog',        linkTo: '/blog',  },
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

.app-container {
  position:inherit;
  background-color: rgb(214, 214, 214);
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 1px;
}

.parallax_section {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -100;
}

/* 1 + (translateZ * -1) / perspective */

.parallax_layer_1 {
  transform: translateZ(-5px) scale(6.2);
}

.parallax_layer_2 {
  transform: translateZ(-6px) scale(7.2);
}

.parallax_layer_3 {
  transform: translateZ(-7px) scale(8.2);
}

.project-bg {
  margin-top: 450px;
  position: absolute;
  width: 110%;
  min-height: 500px;
  background-image: url('~@/assets/m_bg_01.svg'), url('~@/assets/m_bg_02.svg'), url('~@/assets/m_bg_03.svg'); 
  background-repeat: repeat-x, repeat-x, repeat-x;
  background-position: center top, 55% -5px, 45% -25px; 
  background-size: 1120px, 1020px, 820px;
}

.bg-1 {
  margin-top: 400px;
  position: absolute;
  width: 110%;
  /* min-height: 500px; */
  min-height: 300px;
  background-image: url('~@/assets/m_bg_01.svg');
  background-repeat: repeat-x;
  background-position: center top;
  /* transform: scaleZ(0.5); */
  /* background-size: 1120px; */
}

.bg-2 {
  margin-top: 350px;
  position: absolute;
  width: 110%;
  /* min-height: 500px; */
  min-height:300px;
  background-image: url('~@/assets/m_bg_02.svg');
  background-repeat: repeat-x;
  background-position: center top;
  /* background-size: 1120px; */
}

.bg-3 {
  margin-top: 300px;
  position: absolute;
  width: 110%;
  /* min-height: 500px; */
  min-height:300px;
  background-image: url('~@/assets/m_bg_03.svg');
  background-repeat: repeat-x;
  background-position: center top;
  /* background-size: 1120px; */
}

</style>
