<template>
  <v-app>

    <!-- Navigation -->
    <div > <!-- style="position: sticky; top: 0" -->

      <!-- Navigation Bar -->
      <v-toolbar flat color="transparent" min-height="64px" height="64px"> <!--  height="100px" -->

        <!-- Icon / Social links -->
        <div>
          <v-btn class="mx-2" icon href="https://github.com/rmnill202/">
            <v-icon style="font-size: 30px">fab fa-github-square</v-icon>
          </v-btn>
          <v-btn class="mx-2" icon href="https://www.linkedin.com/in/robert-nill-096b64112/">
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
        </v-list>
      </v-navigation-drawer>
    </div>


    <!-- Page Contents -->
    <router-view/>

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
