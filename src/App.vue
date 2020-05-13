<template>
  <v-app style="background-color: rgb(214, 214, 214)">

    <!-- Navigation -->
    <div>

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

</style>
