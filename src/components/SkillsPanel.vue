<template>
  <div style="text-align: left; margin: 0px 37.5px 0px 37.5px">
    <!-- <div style="width: 150px; height: 150px;">
      <img class="diamond_img" src="~@/assets/placeholder.jpeg"/>
      <div class="diamond_text">Raytracer</div>
      <div class="bottom_text">Click for more!</div>
    </div> -->
    
    <div class="skill-grid">
      <!-- <div style="width: 300px; height: 300px;">
        <div class="diamond_div" style="position: absolute; margin-top: 75px">
          <div class="diamond_secondary"/>
          <div class="diamond_text">Raytracer</div>
        </div>
        <div class="diamond_div" style="position: absolute; margin-top: 150px; margin-left: 75px">
          <div class="diamond_secondary"/>
          <div class="diamond_text">Raytracer</div>
        </div>
        <div class="diamond_div" style="position: absolute; margin-left: 75px">
          <div class="diamond_secondary"/>
          <div class="diamond_text">Raytracer</div>
        </div>
        <div class="diamond_div" style="position: absolute; margin-top: 75px; margin-left: 150px;">
          <div class="diamond_secondary"/>
          <div class="diamond_text">Raytracer</div>
        </div>
      </div>
      <div style="width: 300px; height: 300px;">
        <div class="diamond_div" style="position: absolute; margin-top: 75px">
          <div class="diamond_secondary"/>
          <div class="diamond_text">Raytracer</div>
        </div>
        <div class="diamond_div" style="position: absolute; margin-top: 150px; margin-left: 75px">
          <div class="diamond_secondary"/>
          <div class="diamond_text">Raytracer</div>
        </div>
        <div class="diamond_div" style="position: absolute; margin-left: 75px">
          <div class="diamond_secondary"/>
          <div class="diamond_text">Raytracer</div>
        </div>
        <div class="diamond_div" style="position: absolute; margin-top: 75px; margin-left: 150px;">
          <div class="diamond_secondary"/>
          <div class="diamond_text">Raytracer</div>
        </div>
      </div> -->
      <div class="diamond_div" v-for="(s, index) in skills" 
        :style="getStyle(index)">
        <div class="diamond_secondary"/>
        <div class="diamond_text">Raytracer</div>
      </div>

      <!-- <div class="diamond_div">
        <div class="diamond_secondary"/>
        <div class="diamond_text">Raytracer</div>
      </div> -->
      <!-- <div class="diamond_div">
        <div class="diamond_secondary"/>
        <div class="diamond_text">Raytracer</div>
      </div>
      <div class="diamond_div">
        <div class="diamond_secondary"/>
        <div class="diamond_text">Raytracer</div>
      </div> -->
    </div>
    
  </div>
</template>

<script>
import HomeInfo from '../store/home_info.js';

export default {
  name: 'skills_panel',
  props: ['size', ],
  data() {
    return {
      skills: HomeInfo.skills,
      // FULL - clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      // 4/4 - clip-path: polygon(50% 0%, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 0);
      // 3/4 - clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 50%, 50% 50%);
      // 2/4 - clip-path: polygon(50% 0, 100% 0, 100% 100%, 100% 100%, 50% 100%, 50% 50%);
      // 1/4 - clip-path: polygon(50% 0, 100% 0, 100% 50%, 100% 50%, 100% 50%, 50% 50%);
      // 
    };
  },
  methods: {
    getStyle(index) {
      // if(index % 4 == 0) {
      //   return 'margin-top: 75px;  margin-right: -37.5px; margin-left: -37.5px';
      // }
      // if(index % 4 == 1) {
      //   return 'margin-top: 150px; margin-right: -37.5px; margin-left: -37.5px';
      // }
      // if(index % 4 == 2) {
      //   return 'margin-top: 75px; margin-right: -37.5px; margin-left: -37.5px';
      // }
      // if(index % 4 == 3) {
      //   return 'margin-top: 0px; margin-right: -37.5px; margin-left: -37.5px';
      // }

      // if(index % 5 == 0) {
      //   return 'margin-top: 75px;  margin-right: -37.5px; margin-left: -37.5px';
      // }
      // if(index % 5 == 1) {
      //   return 'margin-top: 150px; margin-right: -37.5px; margin-left: -37.5px';
      // }
      // if(index % 5 == 2) {
      //   return 'margin-top: 0px; margin-right: -37.5px; margin-left: -112.5px';
      // }
      // if(index % 5 == 3) {
      //   return 'margin-top: 75px; margin-right: -37.5px; margin-left: -37.5px';
      // }
      // if(index % 5 == 4) {
      //   return 'margin-top: 150px; margin-right: -37.5px; margin-left: -37.5px';
      // }

      
      if(index % 3 == 0) {
        return 'margin-top: 75px;  margin-right: -37.5px; margin-left: -37.5px';
      }
      if(index % 3 == 1) {
        return 'margin-top: 150px; margin-right: -37.5px; margin-left: -37.5px';
      }
      if(index % 3 == 2) {
        return 'margin-top: 0px; margin-right: -37.5px; margin-left: -112.5px';
      }
    }
  }
};
</script>

<style>
.skill-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}

.diamond_div {
  /* background-image: url('~@/assets/placeholder.jpeg'); */
  background-color: #d2d2d2;
  height: 150px;
  width:  150px;
  background-size: 150px 150px;
  clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%); 
  transition: all 0.5s;
}

.diamond_text {
  height:150px; 
  width: 150px;
  line-height: 150px;
  position: absolute; 
  text-align: center;
  color: #fff;
  transition: color 0.25s;
}

.diamond_secondary {
  background-color: #82a97f;
  height: 150px;
  width:  150px;
  background-size: 150px 150px;
  position: absolute;
  /* clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%);  */
  /* clip-path: polygon(0 74%, 100% 55%, 100% 100%, 0% 100%); */
  /* clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%); */
  /* clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 0); */

  /* clip-path: polygon(50% 0%, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 0); */
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 100% 100%, 50% 100%, 50% 50%);
  transition: all 0.5s;
}

.diamond_div:hover .diamond_secondary {
  /* clip-path: polygon(100% 0, 100% 100%, 0 100%); */
  /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0); */

  /* clip-path: polygon(50% 0, 100% 0, 100% 100%, 100% 100%, 50% 100%, 50% 50%); */
}

/* .diamond_div:hover {
  background-image: url('~@/assets/cat_02.jpg');
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); 
}


.diamond_div:hover .diamond_text {
  color: rgba(255, 255, 255, 0);
}

.bottom_text {
  height: 150px; 
  width: 150px;
  position: absolute; 
  text-align: center;
  color: rgba(255, 255, 255, 0);
}

.diamond_div:hover .bottom_text {
  height: 150px; 
  width: 150px;
  position: absolute; 
  text-align: center;
  color: rgba(255, 255, 255, 255);
  transition: color 0.25s;
}



.diamond_img {
  position: absolute;
  width: 150px; 
  clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%); 
  transition: clip-path 0.5s;
}

.diamond_img:hover {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); 
}  */

</style>
