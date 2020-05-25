<template>
  <a :href="linkTo" class="btn-main anim-border"> 
    <span class="title font-weight-light btn-text">{{text}}</span> 
  </a>
</template>

<script>
export default {
  name: 'reg-btn',
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
  color: var(--v-navbar_text-base);
  padding-left:  7px;
  padding-right: 7px;
  text-align: center;
}

.btn-text {
  position: relative;
}

.anim-border::before {
  content: "";
  position: absolute;
  display: block;
  background-color: var(--v-navbar_color-base);
}

.anim-border::before {
  bottom: 0;
  width: 100%;
  height: 100%;
  left: 0px;

  /* Bezier curves! */
  transform: scaleX(1.0);
  opacity: 0.9;
  transform-origin: bottom;
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.anim-border:hover::before {
  transform: scaleX(0.9);
  opacity: 0.5;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.anim-border:active::before {
  transform: scaleX(0.0);
  transition: transform 0.1s ease;
}

</style>