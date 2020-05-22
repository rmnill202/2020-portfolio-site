<template>
  <div style="position: relative; height: 100%">
    <div class="left-background"></div>
    <div class="right-background"></div>
    <div class="about-background"></div>
    <div class="about-page">
      <div class="display-2 about-title font-weight-thin">Howdy!</div>
      <div class="about-section">Studied Software Engineering (BS) and Computer Science (MS) at RIT between 2015 and 2020. </div>
      <div class="about-section">Passionate about web development, software architecture/design and graphics programming. </div>
      <div class="about-section">My hobbies outside of software development include music performance, movies and cooking. </div>
      <div class="about-section-2 headline">Currently looking for work as of May 2020</div>

      <div class="link-section" v-for="site in info.links"><a :href="site.link">{{site.title}}</a></div>
    </div>
  </div>
</template>

<script>
import HomeInfo from '../store/home_info.js';

export default {
  name: 'about',
  data() {
    return {
      info: HomeInfo,
    }
  }
};
</script>

<style>
.about-page {
  position: relative;
  text-align: left;
  max-width: 730px;
  margin: 0 auto 25px auto;
  padding: 0 15px 0 15px;
  color: var(--v-bg_text-base);
}

.about-section {
  margin-bottom: 10px;
}

.about-section-2 {
  margin-top: 25px;
  margin-bottom: 15px;
  text-align: center;
}

.link-section {
  text-align: center;
}

.link-section a {
  color:var(--v-link_color-base);
}

.about-title {
  text-align: center;
  margin-bottom: 25px;
}

/* @keyframes fade-in-anim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
} */

.about-background {
  position: absolute;
  bottom: 0px;
  width: 100%;
  min-height: 300px;

  background-color: var(--v-bg_accent_03-base);

  mask-image: url('~@/assets/bg_01.png');
  mask-repeat: repeat-x;
  mask-position: center top;
  mask-size: 1022px;

  background-repeat: repeat-x;
  background-position: center top;
  background-size: 1022px;
  
  /* animation: fade-in-anim 0.25s ease 1; */
}

/* .left-background {
  position: absolute;
  left: -375px;
  height: 100%; 
  min-width: 600px;

  background-color: var(--v-bg_accent_02-base);

  mask-image: url('~@/assets/bg_02.png');
  mask-repeat: repeat-y;
  mask-position: left top;
  mask-size: 522px;

  background-repeat: repeat-y;
  background-position: left top;
  background-size: 522px;
}

.right-background {
  position: absolute;
  right: 0px;
  height: 100%; 
  min-width: 150px;

  background-color: var(--v-bg_accent_02-base);

  mask-image: url('~@/assets/bg_02.png');
  mask-repeat: repeat-y;
  mask-position: left top;
  mask-size: 522px;

  background-repeat: repeat-y;
  background-position: left top;
  background-size: 522px;
} */

</style>
