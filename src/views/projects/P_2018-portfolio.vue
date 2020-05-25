<template>
  <blog-styles>
    
    <!-- Page contents -->
    <div class="proj-description">
      <!-- Title Card -->
      <project-title-card :info="info" :light="true"/>

      <!-- Project Summary -->
      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Problem Context</div>
        <p>Wanted to build a SPA website to showcase my academic work. Meant to replace a bland, difficult to update site from freshman year.</p>
      </div>

      
      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Approach</div>
        <p>Started with whiteboarded sketches, moved onto wireframes for desktop/mobile screen sizes.</p>
        <p>Gradually implemented each major section, detailed results with pull requests on GitHub.</p>
        <p>Simple data-driven design; updating the site content is easy, just need to update a metadata file!</p>
        <p>Used CSS media queries and Vuetify's breakpoint classes to ensure the website is responsive and works on mobile.</p>
      </div>

      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Retrospective</div>
        <p>It works! Small, simple, but not very visually interesting. </p>
        <p>Liked the diamond-based UI elements, but non-traditional buttons need to be accompanied by more clear indicators such as icons or drop shadows. </p>
        <p>Started the design before figuring out all of the site content, occasionally ran into the issue of "... what do I actually put here?" </p>
      </div>

      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">UI Iteration</div>
        <img class="proj-img" :src="require(`@/assets/2018-portfolio/wireframes.png`)" style="max-width: 700px;"/>
        <img class="proj-img" :src="require(`@/assets/2018-portfolio/data_model.png`)" style="max-width: 700px;"/>
        <img class="proj-img" :src="require(`@/assets/2018-portfolio/live_example.png`)" style="max-width: 700px;"/>
      </div>

    </div>
  </blog-styles>
</template>

<script>
import ProjInfo from '../../store/project_info.js';
import BlogStyles from '../../components/BlogStyles.vue';
import ProjectTitleCard from '../../components/ProjectTitleCard.vue';

export default {
  name: 'P_2018-portfolio',
  components: { BlogStyles, ProjectTitleCard },
  data() {
    return {
      info: ProjInfo.projects[1],
    };
  },
};
</script>

<style scoped>
.proj-card {
  background-image: url('~@/assets/2018-portfolio/preview.png');
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