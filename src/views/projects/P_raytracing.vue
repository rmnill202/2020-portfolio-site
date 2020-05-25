<template>
  <blog-styles>
    
    <!-- Page contents -->
    <div class="proj-description">
      <!-- Title Card -->
      <project-title-card :info="info" :light="true"/>

      <!-- Project Summary -->
      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Problem Context</div>
        <p>Worked on a few different ray/path tracing renderers for personal and academic purposes.</p>
        <p>Implementations based on either Java or C++/OpenGL. </p>
      </div>

      
      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">My Work</div>
        <p>Initially experimented with path tracing by following "Ray Tracing in A Weekend".</p>
        <p>Wrote a more extensive Whitted-style ray tracer for my CSCI-711 term-long project. </p>
        <p>Wrote a simpler ray caster with C++ and OpenGL compute shaders for better performance later on, as part of a separate class. </p>
      </div>
      

      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Retrospective</div>
        <p>Should have gone with C++ and OpenGL for the term-long project as well; would have significantly improved performance.</p>
        <p>Would have loved to spend some additional time implementing more advanced concepts; additional spatial data structures, photon mapping, etc...</p>
        <p>Ray tracers are a fun little project, great for learning more about both graphics and software design.</p>
      </div>

      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Software Design</div>
        <p>Term-long raytracer based on a simple but extensible software design.</p>
        <img class="proj-img" :src="require(`@/assets/raytracing/older_design.png`)" style="max-width: 900px;"/>
        <img class="proj-img" :src="require(`@/assets/raytracing/design.png`)" style="max-width: 900px;"/>
      </div>

      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Results</div>
        <img class="proj-img" :src="require(`@/assets/raytracing/reflection.png`)" style="max-width: 900px;"/>
        <img class="proj-img" :src="require(`@/assets/raytracing/ward.png`)" style="max-width: 900px;"/>
        <img class="proj-img" :src="require(`@/assets/raytracing/raycaster.png`)" style="max-width: 900px;"/>
      </div>

    </div>
  </blog-styles>
</template>

<script>
import ProjInfo from '../../store/project_info.js';
import BlogStyles from '../../components/BlogStyles.vue';
import ProjectTitleCard from '../../components/ProjectTitleCard.vue';

export default {
  name: 'P_raytracing',
  components: { BlogStyles, ProjectTitleCard },
  data() {
    return {
      info: ProjInfo.projects[3],
    };
  },
};
</script>

<style scoped>
.proj-card {
  background-image: url('~@/assets/raytracing/ward.png');
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