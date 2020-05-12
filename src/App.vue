<template>
  <v-app style="background-color: rgb(214, 214, 214)">

    <!-- Navigation -->
    <div>

      <!-- Navigation Bar -->
      <v-toolbar flat color="transparent"> <!--  height="100px" -->

        <!-- Icon / Social links -->
        <!-- <div class="name-links">
          <div class="headline" style="color: white; margin: auto">Robert Nill</div>
          <div style="margin: auto">
            <v-btn class="mx-2" icon small dark color="white">
              <v-icon style="font-size: 30px">fab fa-github-square</v-icon>
            </v-btn>
            <v-btn class="mx-2" icon small dark color="white">
              <v-icon style="font-size: 30px">fab fa-linkedin</v-icon>
            </v-btn>
          </div>
        </div> -->
        <!-- <div class="headline" style="color: white; margin: auto">Robert Nill</div> -->
        <div class="hidden-xs-only">
          <v-btn class="mx-2" icon dark color="white">
            <v-icon style="font-size: 30px">fab fa-github-square</v-icon>
          </v-btn>
          <v-btn class="mx-2" icon dark color="white">
            <v-icon style="font-size: 30px">fab fa-linkedin</v-icon>
          </v-btn>
        </div>
        <v-spacer/>

        <!-- Navigation buttons -->
        <v-toolbar-items class="hidden-xs-only" style="height: 50px;"> <!--  align-self: end; -->
          <v-btn v-for="link in pageLinks" :to="link.linkTo" text color="white">{{link.text}}</v-btn>
        </v-toolbar-items>

        <!-- Hamburger menu - Appears on smaller screens only -->
        <!-- <v-app-bar-nav-icon class="hidden-sm-and-up" color="white" @click="drawerOpen = !drawerOpen"/> -->
        <v-btn icon class="hidden-sm-and-up" color="white" @click="drawerOpen = !drawerOpen">
          <v-icon>fas fa-bars</v-icon>
        </v-btn>
        
      </v-toolbar>

      <!-- Drawer - Mobile -->
      <v-navigation-drawer v-model="drawerOpen" absolute temporary color="white">
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
