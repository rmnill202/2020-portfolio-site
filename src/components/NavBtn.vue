<template>
  <router-link :to="linkTo" class="btn-main anim-border"> <div class="font-weight-light">{{text}}</div> </router-link>
</template>

<script>
export default {
  name: 'nav-btn',
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
  /* background-color:#000; */
  color: var(--v-navbar_text-base);
  margin-left:  15px;
  margin-right: 15px;
  /* width: 85px; */
  margin-top: 15px;

  width: 100px;
}

.font-weight-light {
  letter-spacing: 2px;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 2rem;
  font-family: "Roboto", sans-serif;
}

/* .anim-border::before,  */
.anim-border::after {
  content: "";
  position: absolute;
  display: block;
  /* Our "border" is actually the background color */
  /* background-color: #1976d2; */
  /* background-color: #b3d4fc; */
  background-color: var(--v-navbar_color-base);
}

/* .anim-border::before {
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;

  transform: scaleY(0.75);
  transition: transform 0.25s cubic-bezier(.63,-0.51,0,.95);
  transform-origin: bottom;
}
.anim-border:hover::before {
  transform: scaleY(0.25);
} */

.anim-border::after {
  bottom: 0;
  width: 100%;
  height: 2px;

  /* Bezier curves! */
  transform: scaleX(0.0);
  transform-origin: center;
  transition: transform 0.1s ease;
}
.anim-border:hover::after {
  transform: scaleX(0.5);
  transition: transform 0.25s ease;
}

.router-link-exact-active.anim-border::after {
  transform: scaleX(1.0);
  transition: transform 0.25s ease;
}

</style>