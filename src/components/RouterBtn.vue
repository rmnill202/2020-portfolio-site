<template>
  <router-link :to="linkTo" class="btn-main anim-border"> 
    <div class="btn-text">{{text}}</div> 
  </router-link>
</template>

<script>
export default {
  name: 'router-btn',
  props: ['linkTo', 'text'],
  data() {
    return {

    };
  },
}
</script>

<style scoped>
.btn-main {
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: var(--v-primary_text-base);
  background-color: var(--v-card_accent_3-base);
  padding-left:  7px;
  padding-right: 7px;
  text-align: center;
  /* height: 36px; */
}

.btn-text {
  position: relative;
  padding-top: 5px;
  padding-bottom: 5px;
}

.anim-border::before {
  content: "";
  position: absolute;
  display: block;
  background-color: var(--v-card_accent-base);
}

.anim-border::before {
  bottom: 0;
  width: 100%;
  height: 100%;
  left: 0px;

  /* Bezier curves! */
  transform: scaleX(1);
  /* opacity: 0.9; */
  transform-origin: top;
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.anim-border:hover::before {
  transform: scaleX(0.8);
  /* opacity: 0.5; */
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.anim-border:active::before {
  transform: scaleX(0.0);
  transition: transform 0.1s ease;
}

</style>