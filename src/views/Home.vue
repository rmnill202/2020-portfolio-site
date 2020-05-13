<template>
  <div class="homepage-div">
    <!-- Intro - Statement, degrees -->
    <div class="homepage-intro">
      <div class="display-3">Hi, I'm Robert Nill</div>
      <div class="headline">Software Engineer <v-btn tile depressed small class="resume-button">View Resume (PDF)</v-btn> </div>
      <!-- <div class="headline">Employment history</div> -->
      <!-- <div v-for="e in info.prof_experience">{{e.date}} - {{e.title}}</div> -->
      <!-- <div>TO DO - Resume link or history?</div> -->
      
    </div>

    <!-- Skillsets, looking for -->
    <div class="homepage-skills">
      <div class="display-1" style="margin-top: 20px">Skills</div>
      <skills-panel :size="75"/>
      
    </div>

    <!-- Portfolio -->
    <div class="homepage-portfolio">

      <div class="project-bg">
        
      </div>
        
    </div>

    
  </div>
</template>

<script>
import HomeInfo from '../store/home_info.js';
import SkillsPanel from '../components/SkillsPanel.vue';

export default {
  name: 'home',
  components: { SkillsPanel, },
  data() {
    return {
      info: HomeInfo,
    };
  },
};
</script>

<style>
/* Assume default styling applies to larger screens */
.homepage-div {
  display: grid;
  row-gap: 25px;

  grid-template-columns: 45% 5% 50%;
  margin: 0px 20px;
}

.homepage-skills {
  grid-column-start: 3;
  grid-column-end: 4;
}

.homepage-portfolio {
  grid-column-start: 1;
  grid-column-end: 4;
  margin: 0px -20px;
}

.resume-button {
  margin-left: 80px;
}

.project-bg {
  
  min-height: 1500px;
  background-image: url('~@/assets/m_bg_01.svg'), url('~@/assets/m_bg_02.svg'), url('~@/assets/m_bg_03.svg'); 
  background-repeat: repeat-x, repeat-x, repeat-x;
  background-position: center top, 55% -5px, 45% -25px; 
  background-size: 1120px, 1020px, 820px;
}

@media screen and (max-width: 1039px) {
  .homepage-div {
    grid-template-columns: 100%;
    margin: 0px;
    text-align: center;
  }

  .homepage-skills, .homepage-portfolio {
    grid-column-start: 1;
    grid-column-end: 2;
    margin: 0px;
  }

  .resume-button {
    margin: auto;
  }
}
</style>
