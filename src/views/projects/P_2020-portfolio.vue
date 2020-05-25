<template>
  <blog-styles>
    
    <!-- Page contents -->
    <div class="proj-description">
      <!-- Title Card -->
      <project-title-card :info="info"/>

      <!-- Project Summary -->
      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">New Decade, New Website</div>
        <p>Sought to build upon my previous portfolio with a more thought-out color scheme, flat design and more interactive elements. After experimenting with animations and color schemes, I ended up with a design that reflects one of my favorite sights: the sunset.</p>
      </div>

      
      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Approach</div>
        <p>Built on lightweight VueJS/Webpack boilerplate through Vue CLI. </p>
        <p>Expanded to add features such as dynamic page routing through config files, improving extensibility and allowing for easy page content modification.</p>
        <p>Added pre-rendering to improve client-side performance. Decided this was a better choice than SSR, since this website is static content and has very few pages.</p>
      </div>

      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Retrospective</div>
        <p>I'm very happy with the color scheme, but I would have liked to experiment with parallaxing.</p>
        <p>Having the site content figured out early on (images, text, etc) helped to avoid wheel-spinning. </p>
        <p>Learned a lot about CSS animations in the context of performance, such as object properties that perform well when transitioned due to GPU acceleration. </p>
        <p>Big thanks to all the friends that provided feedback and tested on OSes/devices that I don't physically have access to! </p>
      </div>

      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Design Iteration</div>
        <p>Started with low fidelity sketches, proceeded to refine the layout and color over during implementation. </p>
        <img class="proj-img" :src="require(`@/assets/2020-portfolio/early_03.png`)" style="max-width: 700px;"/>
        <img class="proj-img" :src="require(`@/assets/2020-portfolio/early_04.png`)" style="max-width: 700px;"/>
        <img class="proj-img" :src="require(`@/assets/2020-portfolio/final_01.png`)" style="max-width: 700px;"/>
      </div>

    </div>

  </blog-styles>
</template>

<script>
import ProjInfo from '../../store/project_info.js';
import BlogStyles from '../../components/BlogStyles.vue';
import ProjectTitleCard from '../../components/ProjectTitleCard.vue';

export default {
  name: 'P_2020-portfolio',
  components: { BlogStyles, ProjectTitleCard },
  data() {
    return {
      info: ProjInfo.projects[6],
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
  font-size: 1.1rem;
}
</style>