<template>
  <blog-styles>
    
    <!-- Page contents -->
    <div class="proj-description">
      <!-- Title Card -->
      <project-title-card :info="info" :light="true"/>

      <!-- Project Summary -->
      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Problem Context</div>
        <p>Worked with RIT's student IT office (SITO) to maintain and extend the functionality of Tiger Center, a student information website.</p>
      </div>

      
      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">My Work</div>
        <p>Focused primarily on front-end Angular, with some back-end Java/Spring work when tasks required full-stack changes.</p>
        <p>Fixed a wide variety of student-submitted bugs, improved front-end performance and eliminated repetitive HTML with media queries and design refinement.</p>
        <p>Worked closely with other teams, ensured front-end was able to handle API changes and additions in other codebases.</p>
      </div>

      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Retrospective</div>
        <p>Highly collaborative team, worked very well together! </p>
        <p>Glad I was able to work with certain languages/tech concepts in a professional environment (Angular, Spring, more CI/CD experience). </p>
      </div>

    </div>
  </blog-styles>
</template>

<script>
import ProjInfo from '../../store/project_info.js';
import BlogStyles from '../../components/BlogStyles.vue';
import ProjectTitleCard from '../../components/ProjectTitleCard.vue';

export default {
  name: 'P_tigercenter',
  components: { BlogStyles, ProjectTitleCard },
  data() {
    return {
      info: ProjInfo.projects[4],
    };
  },
};
</script>

<style scoped>
.proj-card {
  background-image: url('~@/assets/tigercenter/preview.png');
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