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
        <div class="display-1 section-title font-weight-light">Problem Context</div>
        <p>Goal to create painterly effect with OSL/GLSL.</p>
        <p>Implementation based on voronoi-based pixellation, with texture mapping to give the end result a canvas look.</p>
      </div>

      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Context</div>
        <img class="proj-img" :src="require(`@/assets/shaders/lily.png`)" style="max-width: 900px;"/>
        <img class="proj-img" :src="require(`@/assets/shaders/golissano.png`)" style="max-width: 900px;"/>
        <img class="proj-img" :src="require(`@/assets/shaders/ritchie.png`)" style="max-width: 900px;"/>
        <img class="proj-img" :src="require(`@/assets/shaders/hand.png`)" style="max-width: 900px;"/>
      </div>

    </div>
  </blog-styles>
</template>

<script>
import ProjInfo from '../../store/project_info.js';
import BlogStyles from '../../components/BlogStyles.vue';

export default {
  name: 'P_painterly',
  components: { BlogStyles },
  data() {
    return {
      info: ProjInfo.projects[5],
    };
  },
};
</script>

<style scoped>
.proj-card {
  background-image: url('~@/assets/shaders/lily.png');
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