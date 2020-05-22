<template>
  <div style="position: relative; height: 100%;">

    <!-- Background -->
    <!-- <div class="proj-background"/> -->
    
    <!-- Page contents -->
    <div class="proj-description">
      <!-- Title Card -->
      <div class="proj-card">
        <div class="display-2">{{info.title}}</div>
        <div class="headline">{{info.start_date}} - {{info.end_date}}</div>
        <div class="icon-container">
          <div class="tag-icon body-2" v-for="tag in info.tags">
            {{tag.text}} <v-icon small style="margin-left: 5px">{{tag.icon}}</v-icon>
          </div>
        </div>
      </div>

      <!-- Project Summary -->
      <div class="headline section-title">Section Title</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam erat magna, dignissim ac accumsan id, vehicula vitae nulla. Praesent in imperdiet tellus. Cras eleifend, mi sed ornare tincidunt, mi velit fermentum est, eu varius lacus felis et dolor. Vivamus interdum sit amet tortor nec tristique. Nam ut vestibulum felis. Aliquam urna mauris, convallis at lorem sed, auctor cursus risus. Maecenas efficitur eget est sed sagittis. In eu molestie mi, in laoreet leo. Cras gravida pharetra turpis, ac porttitor tortor laoreet quis. Praesent consequat porta dui sit amet ultricies. Vestibulum bibendum augue non purus laoreet, at bibendum odio fermentum.</div>

      <div class="section-left-image">
        <img class="proj-img" :src="require(`@/assets/cat_03.jpg`)" />
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam erat magna, dignissim ac accumsan id, vehicula vitae nulla. Praesent in imperdiet tellus. Cras eleifend, mi sed ornare tincidunt, mi velit fermentum est, eu varius lacus felis et dolor. Vivamus interdum sit amet tortor nec tristique. Nam ut vestibulum felis. Aliquam urna mauris, convallis at lorem sed, auctor cursus risus. Maecenas efficitur eget est sed sagittis. In eu molestie mi, in laoreet leo. Cras gravida pharetra turpis, ac porttitor tortor laoreet quis. Praesent consequat porta dui sit amet ultricies. Vestibulum bibendum augue non purus laoreet, at bibendum odio fermentum.</div>
      </div>
    </div>

  </div>
</template>

<script>
import ProjInfo from '../../store/project_info.js';

export default {
  name: 'P_10',
  data() {
    return {
      info: ProjInfo.projects[9],
    };
  },
};
</script>

<style>
.proj-card {
  position: relative;
  width: 100%;
  /* min-height: 300px; */
  text-align: right;
  padding: 30px 75px 30px 0px;

  background-color: var(--v-bg_accent_03-base);
  background-image: url('~@/assets/cat_03.jpg');
  background-position: center center;
  background-size: cover; /* contain or cover */
}

.proj-description {
  margin-left: 250px;
  position: relative;
  margin-right: 15px;
  margin-bottom: 50px;
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
  margin-bottom: 5px;
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
  background-color: #fff;
  margin: 5px 5px 0px 0px;
}

@media screen and (max-width: 1039px) { 
  .proj-description {
    margin-left: 15px;
  }

  .proj-card {
    padding: 30px 30px 30px 0px;
  }

}

@media screen and (max-width: 599px) { 
  .proj-description {
    margin-left: 15px;
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