<template>
  <div>
    <div style="position: absolute; width: 100%">
    </div>
    <div class="bg-wrapper">
      <div class="stars-01"></div>
      <div class="bg-3"></div>
      <div class="bg-2"></div>
      <div class="bg-1"></div>
      <div class="fill-back"><div class="fill-back-inner"></div></div>
      <div class="stars-03"></div>
    </div>

    <div class="homepage-div">
      <!-- Intro - Statement, degrees -->
      <div class="homepage-intro">
        <div class="display-3 intro-name font-weight-thin">Hi, I'm Robert Nill</div>
        <div class="headline font-weight-thin">Senior Software Engineer </div>
        <reg-btn class="resume-button" :linkTo="`${publicPath}/2022_Nill_Software_Engineer_Resume.pdf`" text="Resume"/> 
      </div>

      <!-- Skillsets, looking for -->
      <div class="homepage-skills">
        <div class="display-2 font-weight-thin">Skillsets</div>
        <skills-panel/>
      </div>

      <!-- Portfolio -->
      <div class="homepage-portfolio">
        <div class="display-2 font-weight-thin" style="margin-top: 150px; margin-bottom: 150px">Select Works</div>
        <projects-panel style="margin-bottom: 100px"/>
      </div>

      
    </div>
  </div>
</template>

<script>
import HomeInfo from '../store/home_info.js';
import SkillsPanel from '../components/SkillsPanel.vue';
import ProjectsPanel from '../components/ProjectsPanel.vue';
import NavBtn from '../components/NavBtn.vue';
import RegBtn from '../components/RegBtn.vue';

export default {
  name: 'home',
  components: { SkillsPanel, ProjectsPanel, NavBtn, RegBtn },
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
  /* display: grid; */
  row-gap: 25px;

  grid-template-columns: 45% 5% 50%;
  margin: 0px 20px;
}

.display-2 {
  color: var(--v-bg_text-base);
}

.homepage-skills {
  text-align: center;
  grid-column-start: 3;
  grid-column-end: 4;
}

.homepage-portfolio {
  grid-column-start: 1;
  grid-column-end: 4;
  margin: 0px -20px;
  position: relative;
  text-align: center;
}

.resume-button {
  /* margin: auto 0px auto auto; */
  margin-left:  15px;
  margin-right: 20px;
}

.homepage-intro {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;;
  grid-template-columns: 100%;
  grid-template-rows: min-content min-content;
  max-width: 450px;
  color: var(--v-bg_text-base);

  margin: auto;
  margin-bottom: 100px;
}
.intro-name {
  margin-bottom: 16px;
}

.bg-wrapper {
  position: absolute;
  width: 100%;
  pointer-events: none;
  top: 0;
  height: 100%;

  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
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

/* .bg-1 {
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
} */



/* Mask Based */

.bg-1 {
  position: absolute;
  margin-top: 500px;
  top: 50px;
  width: 100%;
  min-height: 500px;

  background-color: var(--v-bg_accent_03-base);

  mask-image: url('~@/assets/bg_01.png');
  mask-repeat: repeat-x;
  mask-position: center top;
  mask-size: 1122px;

  background-repeat: repeat-x;
  background-position: center top;
  background-size: 1122px;
  
  animation: bg-anim-1 2s ease 1;
  /* transform: scale(2, 1); */
}

.bg-2 {
  position: absolute;
  margin-top: 500px;
  top: 25px;
  width: 100%;
  min-height:500px;

  background-color: var(--v-bg_accent_02-base);

  mask-image: url('~@/assets/bg_02.png');
  mask-repeat: repeat-x;
  mask-position: center top;
  mask-size: 1022px;

  background-repeat: repeat-x;
  background-position: center top;
  background-size: 1022px;

  animation: bg-anim-2 2.5s ease 1;
  /* transform: scale(2, 1); */
}

.bg-3 {
  position: absolute;
  margin-top: 500px;
  top: 0px;
  width: 100%;
  min-height:500px;

  background-color: var(--v-bg_accent_01-base);

  mask-image: url('~@/assets/bg_03.png');
  mask-repeat: repeat-x;
  mask-position: center top;
  mask-size: 822px;

  background-repeat: repeat-x;
  background-position: center top;
  background-size: 822px;

  animation: bg-anim-3 3.25s ease 1;
  /* transform: scale(2, 1); */
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
  background-image: url('~@/assets/stars_t.png');
  background-repeat: repeat-x;
  background-position: center top;
  background-size: 1770px;

  margin-top: 0px;
  opacity: 0.3;
  animation-delay: 0.5s;
  animation: star-anim-01 2.5s ease 1;
  /* filter: invert() opacity(0.5); */
}
.stars-03 {
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-image: url('~@/assets/stars_t.png');
  background-repeat: repeat;
  background-position: center top;
  background-size: 770px;
  background-clip: content-box;

  padding-top: 900px;
  opacity: 0.1;
  /* filter: invert() opacity(0.5); */
}

.fill-back {
    position: absolute;
    width: 100%;
    height: 100%;
    padding-top: 900px;
}

.fill-back-inner {
  height: 100%;
  background-color: var(--v-bg_accent_03-base);
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
    margin-bottom: 200px;
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
    margin-bottom: 150px;
  }
  .intro-name {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  .resume-button {
    margin: auto;
    justify-self: center;
    width: 150px;
  }
}

@media screen and (max-width: 480px) {
  .homepage-intro {
    max-width: 300px;
    margin-bottom: 150px;
  }
}
</style>
