<template>
  <div class="about-page">
    
    <div class="display-2 about-title">Howdy!</div>
    <div class="about-section">Studied Software Engineering (BS) and Computer Science (MS) at RIT between 2015 and 2020. </div>
    <div class="about-section">Passionate about web development, software architecture/design and graphics programming. </div>
    <div class="about-section">My hobbies outside of software development include music performance, movies and cooking. </div>
    <div class="about-section-2 headline">Currently looking for work as of May 2020</div>

    <div class="link-section" v-for="site in info.links"><a :href="site.link">{{site.title}}</a></div>
    
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
  margin-top: 15px;
  margin-bottom: 20px;
  text-align: center;
}

.link-section {
  text-align: center;
}

.link-section a {
  color:var(--v-link_color-base);;
}

.about-title {
  text-align: center;
  margin-bottom: 15px;
}

</style>
