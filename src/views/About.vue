<template>
  <div style="position: relative; height: 100%">
    <div class="about-background"></div>
    <div class="about-page">
      <div class="display-2 about-title font-weight-thin">About Me</div>
      <!-- <div class="about-section font-weight-light">Studied Software Engineering (BS) and Computer Science (MS) at RIT between 2015 and 2020. </div> -->
      <!-- <div class="about-section font-weight-light">Passionate about web development, software architecture/design and graphics programming. </div>
      <div class="about-section font-weight-light">My hobbies outside of software development include music performance, movies and cooking. Maybe all at the same time.</div> -->

      <div class="about-section font-weight-light">I studied Software Engineering (BS) and Computer Science (MS) at RIT between 2015 and 2020, taking a few software co-ops during my time around the Northeastern US. </div>

      <div class="about-section font-weight-light">Outside of work, I love to tinker! I've got a couple 3D printers, a workbench made out of a 95% off IKEA kitchen door, and am self-taught in FreeCAD!</div>

      <div class="about-section font-weight-light">You can check out some of my projects on Twitter, such as:
        <ul> 
          <li>LED control system for lighting around my apartment</li>
          <li>Designing small form factor PCs</li>
          <li>Making a very janky sandblaster for some prototype PC parts</li>
          <li>Building PCs (you may notice a pattern here)</li>
          <li>Custom cable making for PCs (there's definitely a pattern)</li>
        </ul>
      </div>

      <div class="about-section font-weight-light">In my downtime I love to play games with friends, go disc golfing, or rock climb at my local gym.</div>



      <!-- <div class="link-section" v-for="site in info.links"><a :href="site.link">{{site.title}}</a></div> -->

      <div class="link-section">
        <a v-for="site in info.links" :key="site.link" class="link-block" :href="site.link">
          <img :src="require(`@/assets/${site.icon}`)" />
        </a>
      </div>
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

<style scoped>
.about-page {
  position: relative;
  text-align: left;
  max-width: 730px;
  margin: 0 auto 25px auto;
  padding: 0 15px 0 15px;
  color: var(--v-bg_text-base);
}

.about-section {
  margin-bottom: 36px;
}

.about-section-2 {
  margin-top: 25px;
  margin-bottom: 15px;
  text-align: center;
}

.link-section {
  margin-top: 200px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* max-width: 1200px; */
}

.link-section a {
  color:var(--v-link_color-base) !important;
}

.about-title {
  text-align: center;
  margin-bottom: 25px;
}

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
}

.link-block {
  /* background-color: rgb(255, 255, 255); */
  width: 120px;
  height: 120px;
  margin: 16px;
  /* :src="require(`@/assets/2018-portfolio/wireframes.png`) */
  /* --link-block-icon: '~@/assets/icons/linkedin.svg'; */

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background-color: #1f032725;

  transition: all 0.25s cubic-bezier(.72,.01,.19,.94);
}
.link-block:hover {
  /* background-color: rgba(255, 255, 255, 0.288); */
  background-color: #37094483;
}
.link-block img {
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform: scale(90%);
  transition: transform 0.55s cubic-bezier(.72,.01,.19,.94);
}
.link-block:hover img {
  transform: scale(100%);
}
</style>
