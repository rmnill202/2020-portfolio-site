<template>
  <div>
    <div style="position: absolute; width: 100%">
    </div>
    <div class="bg-wrapper">
      <div class="stars-01"></div>
      <div class="bg-3"></div>
      <div class="bg-2"></div>
      <div class="bg-1"></div>
      <div class="stars-02"></div>
    </div>
    

    <div class="homepage-div">
      <!-- Intro - Statement, degrees -->
      <div class="homepage-intro">
        <div class="display-3 intro-name">Hi, I'm Robert Nill</div>
        <div class="headline">Software Engineer </div>
        <v-btn tile depressed small class="resume-button" :href="`${publicPath}/2020_Nill_Software_Engineer_Resume.pdf`">View Resume (PDF)</v-btn>
        <!-- <div class="headline">Employment history</div> -->
        <!-- <div v-for="e in info.prof_experience">{{e.date}} - {{e.title}}</div> -->
        <!-- <div>TO DO - Resume link or history?</div> -->
        
      </div>

      <!-- Skillsets, looking for -->
      <div class="homepage-skills">
        <skills-panel/>
      </div>

      <!-- Portfolio -->
      <div class="homepage-portfolio">
        <projects-panel/>
      </div>

      
    </div>
  </div>
</template>

<script>
import HomeInfo from '../store/home_info.js';
import SkillsPanel from '../components/SkillsPanel.vue';
import ProjectsPanel from '../components/ProjectsPanel.vue';

export default {
  name: 'home',
  components: { SkillsPanel, ProjectsPanel },
  data() {
    return {
      info: HomeInfo,
      publicPath: process.env.BASE_URL
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
  margin: auto 0px auto auto;
}

.homepage-intro {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: min-content min-content;
  max-width: 450px;
}
.intro-name {
  grid-column-start: 1;
  grid-column-end: 3;
}

.bg-wrapper {
  position: absolute;
  width: 100%;
  pointer-events: none;
}

.project-bg {
  /* position: absolute; */
  position: sticky;
  top: 50px;
  width: 100%;
  min-height: 500px;
  background-image: url('~@/assets/m_bg_01.svg'), url('~@/assets/m_bg_02.svg'), url('~@/assets/m_bg_03.svg'); 
  background-repeat: repeat-x, repeat-x, repeat-x;
  background-position: center top, 55% -5px, 45% -25px; 
  background-size: 1120px, 1020px, 820px;
}

.bg-layer-1 {
  position: sticky;
  top: 95px;
  width: 100%;
  height: 50px;
  /* transform: translateZ(-1px) scale(1.2); */
}
.bg-layer-2 {
  position: sticky;
  top: 100px;
  width: 100%;
  height: 50px;
}
.bg-layer-3 {
  position: sticky;
  top: 115px;
  width: 100%;
  height: 50px;
}

.bg-1 {
  position: absolute;
  margin-top: 500px;
  top: 50px;
  width: 100%;
  min-height: 500px;
  background-image: url('~@/assets/m_bg_01.svg'), url('~@/assets/m_bg_01.svg');
  background-repeat: repeat-x, repeat-x;
  background-position: center top, center top;
  background-size: 1122px, 1120px;
  
  animation: bg-anim-1 2s ease 1;
}

.bg-2 {
  position: absolute;
  margin-top: 500px;
  top: 25px;
  width: 100%;
  min-height:500px;
  background-image: url('~@/assets/m_bg_02.svg'), url('~@/assets/m_bg_02.svg');
  background-repeat: repeat-x, repeat-x;
  background-position: center top, center top;
  background-size: 1022px, 1020px;

  animation: bg-anim-2 2.5s ease 1;
}

.bg-3 {
  position: absolute;
  margin-top: 500px;
  top: 0px;
  width: 100%;
  min-height:500px;
  background-image: url('~@/assets/m_bg_03.svg'), url('~@/assets/m_bg_03.svg');
  background-repeat: repeat-x, repeat-x;
  background-position: center top, center top;
  background-size: 822px, 820px;

  animation: bg-anim-3 3.25s ease 1;
}



@keyframes bg-anim-1 {
  0% {
    transform: translate(0, 50px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes bg-anim-2 {
  0% {
    transform: translate(0, 50px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes bg-anim-3 {
  0% {
    transform: translate(0, 50px);
  }
  100% {
    transform: translate(0, 0);
  }
}

/* .bg-1 {
  position: absolute;
  top: 50px;
  width: 100%;
  min-height: 500px;
  background-image: url('~@/assets/m_bg_01.svg'), url('~@/assets/m_bg_01.svg');
  background-repeat: repeat-x, repeat-x;
  background-position: center top, center top;
  background-size: 1122px, 1120px;
  
}

.bg-2 {
  position: absolute;
  top: 70px;
  width: 100%;
  min-height:500px;
  background-image: url('~@/assets/m_bg_02.svg'), url('~@/assets/m_bg_02.svg');
  background-repeat: repeat-x, repeat-x;
  background-position: center top, center top;
  background-size: 1022px, 1020px;
}

.bg-3 {
  position: absolute;
  top: 100px;
  width: 100%;
  min-height:500px;
  background-image: url('~@/assets/m_bg_03.svg'), url('~@/assets/m_bg_03.svg');
  background-repeat: repeat-x, repeat-x;
  background-position: center top, center top;
  background-size: 822px, 820px;
} */

@keyframes star-anim-01 {
  0% {
    opacity: 0;
    transform: translate(0px, 50px);
  }
  100% {
    opacity: 0.3;
    transform: translate(0, 0);
  }
}

@keyframes star-anim-02 {
  0% {
    opacity: 0;
    transform: translate(0px, 25px);
  }
  100% {
    opacity: 0.15;
    transform: translate(0, 0);
  }
}

.stars-01 {
  position: absolute;
  width: 100%;
  min-height: 700px;
  background-image: url('~@/assets/Stars_01.png');
  background-repeat: repeat-x;
  background-position: center top;
  background-size: 1770px;

  margin-top: 100px;
  opacity: 0.3;
  animation-delay: 0.5s;
  animation: star-anim-01 2.5s ease 1;
}

.stars-02 {
  position: absolute;
  width: 100%;
  min-height: 700px;
  background-image: url('~@/assets/Stars_s.png');
  background-repeat: repeat;
  background-position: center top;
  background-size: 1750px;

  margin-top: 100px;
  opacity: 0.15;
  animation-delay: 0.25s;
  animation: star-anim-02 3.5s ease 1;
}


.project-panel {
  /* min-height: 500px; */
  background-color: black;
  margin-top: 250px;
}

/* Smaller Screens */
@media screen and (max-width: 1039px) {
  .homepage-div {
    grid-template-columns: 100%;
    margin: 0px;
    text-align: center;
  }

  .homepage-intro {
    margin: 0px auto;
  }

  .homepage-skills, .homepage-portfolio {
    grid-column-start: 1;
    grid-column-end: 2;
    margin: 0px;
  }

}

@media screen and (max-width: 599px) { 
  .homepage-intro {
    grid-template-columns: 100%;
  }
  .intro-name {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  .resume-button {
    margin: auto;
  }
}

@media screen and (max-width: 480px) {
  .homepage-intro {
    max-width: 300px;
  }
}
</style>
