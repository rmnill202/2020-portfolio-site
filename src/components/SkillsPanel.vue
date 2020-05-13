<template>
  <div style="text-align: left; margin: 0px 37.5px 0px 37.5px">

    <div class="skill-grid">
      <button class="diamond-div" v-for="(s, index) in skills">
        <div :class="`diamond-fill fill-${s.v}`" :style="`background-color: ${s.color}`"/>
        <div class="diamond-text">{{s.title}}</div>
        <div class="diamond-details">
          <div v-for="sub in s.sub"> {{sub}}</div>
        </div>
      </button>
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
      // 4/4 - clip-path: polygon(50% 0%, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 0);
      // 3/4 - clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 50%, 50% 50%);
      // 2/4 - clip-path: polygon(50% 0, 100% 0, 100% 100%, 100% 100%, 50% 100%, 50% 50%);
      // 1/4 - clip-path: polygon(50% 0, 100% 0, 100% 50%, 100% 50%, 100% 50%, 50% 50%); 
    };
  },
  methods: {
    
  }
};
</script>

<style>
.skill-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}

.diamond-div:nth-child(1n + 1) {
margin-top: 75px;  margin-right: -37.5px; margin-left: -37.5px;
}
.diamond-div:nth-child(2n + 0) {
margin-top: 0px; margin-right: -37.5px; margin-left: -37.5px;
}


    



.diamond-div {
  /* background-image: url('~@/assets/placeholder.jpeg'); */
  flex-direction: column;
  background-color: #d2d2d2;
  height: 150px;
  width:  150px;
  background-size: 150px 150px;
  clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%); 
  transition: all 0.5s;
}
.diamond-div:hover {
  background-color: #c4c4c4;
}
.diamond-div:focus { 
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); 
  z-index: 9999;
  pointer-events: none; /* Allows the second click to de-focus */
}


.diamond-text {
  /* height:150px;  */
  width: 150px;
  /* line-height: 150px; */
  margin-top: 50px;
  padding-left: 25px;
  padding-right: 25px;
  position: absolute; 
  text-align: center;
  color: rgba(255, 255, 255, 255);
  transition: color 0.25s;

  pointer-events: none;
}
.diamond-div:focus .diamond-text {
  color: rgba(255, 255, 255, 0);
}

.diamond-details {
  width: 150px;
  position: absolute; 
  text-align: center;
  color: rgba(255, 255, 255, 0);
  transition: color 0.25s;
  pointer-events: none;
}
.diamond-div:focus .diamond-details {
  color: rgba(255, 255, 255, 255);
}


.fill-4 {
  clip-path: polygon(5% 50%, 50% 5%, 95% 50%, 50% 95%);
}
.fill-3 { 
  clip-path: polygon(15% 50%, 50% 15%, 85% 50%, 50% 85%);
}
.fill-2 { 
  clip-path: polygon(25% 50%, 50% 25%, 75% 50%, 50% 75%);
  
}
.fill-1 { 
  
}

.diamond-div:focus .fill-1, .diamond-div:focus .fill-2, .diamond-div:focus .fill-3, .diamond-div:focus .fill-4 {
  /* clip-path: polygon(50% 0%, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 0); */
  /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0); */
  clip-path: polygon(-100% 50%, 50% -100%, 200% 50%, 50% 200%);
}


.diamond-fill {
  background-color: #82a97f;
  height: 150px;
  width:  150px;
  background-size: 150px 150px;
  position: absolute;
  transition: all 0.5s;
}

/* .diamond-secondary {
  background-color: #82a97f;
  height: 150px;
  width:  150px;
  background-size: 150px 150px;
  position: absolute;
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 100% 100%, 50% 100%, 50% 50%);
  transition: all 0.5s;
} */

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
