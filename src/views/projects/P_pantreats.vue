<template>
  <blog-styles>
    
    <!-- Page contents -->
    <div class="proj-description">
      <!-- Title Card -->
      <project-title-card :info="info" :light="true"/>

      <!-- Project Summary -->
      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Problem Context</div>
        <p>Problem was to develop a website that allowed us to tackle interesting UX/UI challenges. Team decided to design and implement a recipe website that provides recipes based on what you have in your pantry.</p>
        <p>Goal was to explore accessibility and usability of our design over the course of a semester, and progress through the UX lifecycle from concept to design to implementation and finally evaluation.</p>
      </div>

      
      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Design Work</div>
        <p>Developed a series of documents to capture design and interactve requirements. </p>
        <p>Performed cognitive walkthroughs and heuristic evaluations to measure the usability of wireframes and prototypes. </p>
        <p>Learned about a variety of UI laws, patterns/anti-patterns.</p>
        <p>Interviewed real users and integrated feedback into the final product.</p>
      </div>

      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Technical Details</div>
        <p>First experience with VueJS, Firebase for hosting/database.</p>
        <p>Simple component-based approach, pages rely on a database class for content.</p>
        <p>Relied on the Vue Material toolkit for UI elements such as buttons.</p>
      </div>

      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Retrospective</div>
        <p>Great project for learning about UX/UI processes and standards. However, the code is a little older, and cannot work without Firebase being up and running.</p>
        <p>Ideally should've used a mock database, or otherwise wrapped all calls inside of a class or subsystem to allow for easier local testing.</p>
        <p>Choice of primary colors made sense, but their use could've been a little better.</p>
      </div>

      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">UI Iteration</div>
        <img class="proj-img" :src="require(`@/assets/pantreats/wireframes.png`)" style="max-width: 700px;"/>
        <img class="proj-img" :src="require(`@/assets/pantreats/pantreats.png`)" style="max-width: 700px;"/>
      </div>

    </div>
  </blog-styles>
</template>

<script>
import ProjInfo from '../../store/project_info.js';
import BlogStyles from '../../components/BlogStyles.vue';
import ProjectTitleCard from '../../components/ProjectTitleCard.vue';

export default {
  name: 'P_pantreats',
  components: { BlogStyles, ProjectTitleCard },
  data() {
    return {
      info: ProjInfo.projects[0],
    };
  },
};
</script>

<style scoped>
.proj-card {
  background-image: url('~@/assets/pantreats/pantreats.png');
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