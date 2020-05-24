<template>
  <div>
      <slot style="position: relative; height: 100%;"/>
  </div>
</template>

<script>
export default {
  name: 'blog_styles',
};
</script>

<style >
.proj-card {
  position: relative;
  width: 100%;
  /* min-height: 300px; */
  text-align: right;
  padding: 30px 75px 30px 0px;

  background-color: var(--v-bg_accent_03-base);
  background-position: center center;
  background-size: cover; /* contain or cover */
  color: white;
}

.proj-description {
  max-width: 1000px;
  margin: 0px auto 50px auto;
  position: relative;
  background-color: rgba(0, 0, 0, 0.075);
  color: white;
  font-weight: 300;
  padding: 10px 10px;
}

.proj-background {
  position: absolute;
  top: 0;
  left: -245px;
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

.section-title {
  text-align: center;
  margin-top: 35px;
  margin-bottom: 35px;
}

.proj-img {
  width: auto; 
  max-width: 100%;
}

.section-left-image {
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 45px;
  grid-gap: 25px;
}

.icon-container {
  margin-top: 150px;
}

.tag-icon {
  display: inline-block;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.527);
  margin: 5px 5px 0px 0px;
}

.tag-icon-inner {
  margin-left: 5px;
  color: #fff !important;
}

@media screen and (max-width: 1039px) { 
  .proj-description {
    margin: 0px 50px 50px 50px;
  }

  .proj-card {
    padding: 30px 30px 15px 15px;
  }

}

@media screen and (max-width: 650px) { 
  .proj-description {
    margin: 0px 20px 50px 20px;
  }
  
  .proj-card {
    text-align: center;
    padding: 20px 15px 20px 15px;
  }

  .section-left-image {
    grid-template-columns: auto;
    justify-items: center;
  }

  .icon-container {
    margin-top: 100px;
  }

  .tag-icon {
    min-width: 200px;
  }
}
</style>