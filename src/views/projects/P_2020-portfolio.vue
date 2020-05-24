<template>
  <blog-styles>
    
    <!-- Page contents -->
    <div class="proj-description">
      <!-- Title Card -->
      <div class="proj-card">
        <div class="display-2 font-weight-light">{{info.title}}</div>
        <div class="headline font-weight-light">{{info.start_date}} - {{info.end_date}}</div>
        <div class="icon-container">
          <div class="tag-icon body-2 " v-for="tag in info.tags">
            {{tag.text}} <v-icon small class="tag-icon-inner">{{tag.icon}}</v-icon>
          </div>
        </div>
      </div>

      <!-- Project Summary -->
      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">New Decade, New Website</div>
        <p>A new decade has begun, and with graduation in sight a new website seemed to be in order. Carrying over the same geometric motif from its previous iteration, this website adds a more thought out color schemed and foregoes the SPA style in favor of simpler and smaller pages.</p>
        <p>With this website, I wanted to expand upon the aesthetics and flesh out the interactive elements. By adding various animations and experimenting with a few different color schemes, I ended up with a design that reflects one of my favorite sights: the sunset.</p>
        <p>This website is built on the VueJS/Webpack setup that the Vue CLI provides, which is my favored way to go about front-end in my free time. I did experiment with using a plugin for pre-rendering each webpage, which was a great experience, although it did take some work to get dynamic routes setup since much of the website is dynamically populated by config files. </p>
      </div>

      <!--
      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Design</div>
        <p>My designs usually start with a series of low fidelity sketches, either on whiteboard or in a sketchbook. They aren't the prettiest, but the goal is to understand the layout of important information and how users may interact with and understand those elements on various screen sizes. I usually proceed to wireframes and eventually annotate them before working on the final product, but this time I decided to jump right into implementation. </p>
        <p>I went through several iterations of both layout, using the Material based UI toolkit Vuetify as a base at first. After getting a vague idea of how the website would look in practice, I experimented with a few different color schemes until I found something I really liked.</p>
        <img class="proj-img" :src="require(`@/assets/2020-portfolio/early_03.png`)" style="max-width: 700px;"/>
        <img class="proj-img" :src="require(`@/assets/2020-portfolio/early_04.png`)" style="max-width: 700px;"/>
        <img class="proj-img" :src="require(`@/assets/2020-portfolio/final_01.png`)" style="max-width: 700px;"/>
      </div>

      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Lessons and Future Work</div>
        <p>I'm more familiar with CSS-based animations, such as object properties that perform well when transitioned due to GPU acceleration. </p>
        <p>There is quite a lot I wish to improve; I'd love to add a parallax effect to the pages, and make my project/blog pages a little more visually engaging. </p>
      </div> -->

    </div>

  </blog-styles>
</template>

<script>
import ProjInfo from '../../store/project_info.js';
import BlogStyles from '../../components/BlogStyles.vue';

export default {
  name: 'P_2020-portfolio',
  components: { BlogStyles },
  data() {
    return {
      info: ProjInfo.projects[9],
    };
  },
};
</script>

<style scoped>
.proj-card {
  background-image: url('~@/assets/proj_portfolio.png');
}

img {
  display: block; 
  margin: auto;
  width: 100%;
  padding: 5px;
}

p {
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 1.2rem;
}
</style>