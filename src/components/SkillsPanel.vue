<template>
  <div class="skill-div">
    <div class="skill-grid">

      <div  v-for="(s, index) in skills" class="skill-diamond-container">
        <div class="skill-diamond" :tabindex="1 + index">
          <div :class="`diamond-fill-${s.v}`" /> <!-- :style="`background-color: ${s.color}`" -->
          <div class="diamond-text">{{s.title}}</div>
          <div class="diamond-details">
            <div> {{detailStr(s)}} </div>
          </div>
          <div class="diamond-icon"><v-icon class="icon-inner">fas fa-plus</v-icon></div>
        </div>
        <div class="diamond-shadow"></div>
        <div class="diamond-closer"/>
      </div>
      

    </div>
  </div>
</template>

<script>
import HomeInfo from '../store/home_info.js';

export default {
  name: 'skills_panel',
  data() {
    return {
      skills: HomeInfo.skills,
    };
  },
  methods: {
    detailStr(skill) {
      let str = skill.sub[0];

      for(let i = 1; i < skill.sub.length; i++) {
        str += (`, ${skill.sub[i]}`);
      }

      return str;
    }
  }
  
};
</script>

<style scoped>

.skill-div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 100px;
}

.skill-grid {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 160px);
}

.skill-diamond-container {
  position: relative;
  width: 0px;
  height: 150px;
  margin-top: -65px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.skill-diamond-container {
  grid-column-start: 1;
  grid-column-end:   3;
}



.skill-diamond {
  /* background-image: url('~@/assets/placeholder.jpeg'); */
  position: absolute;
  flex-direction: column;
  background-color: var(--v-primary_accent_01-base);
  height: 150px;
  width:  150px;
  background-size: 150px 150px;
  clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%); 
  cursor: pointer;
  transition: clip-path 0.25s, z-index 0.05s step-end;
  z-index: 1;
  will-change: clip-path, z-index;
}
.skill-diamond:hover {
  background-color: var(--v-primary_accent_02-base);
  clip-path: polygon(50% 5%,95% 50%,50% 95%,5% 50%); 
  transition: all 0.25s;
}
.skill-diamond:focus { 
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); 
  z-index: 9999;
  /* pointer-events: none; Allows the second click to de-focus */
  border-color:transparent!important;
  outline:none;
  transition: clip-path 0.25s, z-index 0.05s step-start;
}

.diamond-closer {
  position: absolute;
  height: 150px;
  width: 150px;
  pointer-events: none;
}
.skill-diamond:focus ~ .diamond-closer {
  pointer-events: all;
  z-index: 10000;
  cursor: pointer;
}


.diamond-text {
  width: 150px;
  margin-top: 50px;
  padding-left: 25px;
  padding-right: 25px;
  position: absolute; 
  top: 0;
  text-align: center;
  color: var(--v-primary_text-base);
  transition: opacity 0.25s;
  will-change: opacity;
  opacity: 1;

  pointer-events: none;
  -webkit-user-select: none;
  
}
.skill-diamond:focus .diamond-text {
  opacity: 0;
}

.icon-inner {
  color: var(--v-primary_icon_inner-base);
}

.diamond-icon {
  display: flex;
  justify-content: center;
  position: absolute; 
  background-color: var(--v-primary_icon-base);
  clip-path: polygon(50% 10%,90% 50%,50% 90%,10% 50%);
  width: 50px;
  height: 50px;
  margin-left: 50px;
  bottom:0;
  text-align: center;
  opacity: 1;
  transition: transform 0.25s;
  will-change: transform;
  transition-delay: 0.05s;
  pointer-events: none;
}
.skill-diamond:hover .diamond-icon {
  transition: transform 0.25s;
  transform: translate(0px, -5px);
}
.skill-diamond:focus .diamond-icon {
  /* opacity: 0; */
  transition: transform 0.25s;
  transform: translate(60px, 10px) rotate(45deg);
  /* clip-path: polygon(50% 50%,50% 50%,50% 50%,50% 50%); */
}

.diamond-details {
  width: 150px;
  position: absolute; 
  top: 0;
  text-align: center;
  color: var(--v-primary_text-base);
  opacity: 0;
  transition: opacity 0.25s;
  will-change: opacity;
  pointer-events: none;
  margin-top: 5px;
  -webkit-user-select: none;
}
.skill-diamond:focus .diamond-details {
  opacity: 1;
}


.diamond-fill-2, .diamond-fill-3, .diamond-fill-4 {
  background-color: var(--v-primary-base);
  height: 150px;
  width:  150px;
  background-size: 150px 150px;
  position: absolute;
  top: 0;
  transition: transform 0.5s;
  will-change: transform;
  /* transform: translate(0, 0); */
}

.diamond-fill-2 {
  transform: translate(0, 100px);
}

.diamond-fill-3 {
  transform: translate(0, 50px);
}

.skill-diamond:focus .diamond-fill-2, .skill-diamond:focus .diamond-fill-3, .skill-diamond:focus .diamond-fill-4 {
  transform: translate(0, 0);
}



.diamond-shadow {
  background-color: #000000a6;
  height: 160px;
  width:  160px;
  background-size: 160px 160px;
  position: absolute;
  top: 5px;
  transition: clip-path 0.25s, z-index 0.05s step-end;
  will-change: clip-path, z-index;
  clip-path: polygon(50% 5%,95% 50%,50% 95%,5% 50%); 
  z-index: 0;
  pointer-events: none;
}
.skill-diamond:hover + .diamond-shadow {
  clip-path: polygon(50% 10%,90% 50%,50% 90%,10% 50%); 
  transition: clip-path 0.25s, z-index 0.25s;
}
.skill-diamond:focus + .diamond-shadow {
  /* clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%); */
  clip-path: polygon(0 10%, 100% 10%, 100% 100%, 0 100%); 
  /* animation: shadow-index-delay 0.25s linear; */
  /* z-index: 2; */
  transition: clip-path 0.25s, z-index 0.05s step-start;
  z-index: 9900;
}


/* Larger screens */
@media screen and (min-width: 481px) {  
  
  .skill-diamond-container:nth-child(1) {
    grid-column-start: 1;
    grid-column-end:   3;
    grid-row-start:   1;
    grid-row-end:     2;
  }
  .skill-diamond-container:nth-child(2) {
    grid-column-start: 2;
    grid-column-end:   4;
    grid-row-start:   1;
    grid-row-end:     2;

    margin-bottom: 5px;
  }

  .skill-diamond-container:nth-child(3) {
    grid-column-start: 1;
    grid-column-end:   2;
    /* margin-left: 15px; */

    margin-bottom: 25px;
  }
  .skill-diamond-container:nth-child(4) {
    grid-column-start: 2;
    grid-column-end:   3;
  }
  .skill-diamond-container:nth-child(5) {
    grid-column-start: 3;
    grid-column-end:   4;
    /* margin-bottom: 25px; */
  }

  .skill-diamond-container:nth-child(6) {
    grid-column-start: 1;
    grid-column-end:   3;
    grid-row-start:   3;
    grid-row-end:     4;
  }
  .skill-diamond-container:nth-child(7) {
    grid-column-start: 2;
    grid-column-end:   4;
    grid-row-start:   3;
    grid-row-end:     4;
  }
  .skill-diamond-container:nth-child(8) {
    grid-column-start: 1;
    grid-column-end:   4;
    /* margin-left: 20px; */
  }
}

/* Smaller screens */
@media screen and (max-width: 599px) { 


  .skill-diamond-container {
    margin-top: -70px;
  }
}

@media screen and (max-width: 480px) {
  .skill-grid {
    grid-template-columns: repeat(2, 150px);
  }

  .skill-diamond-container {
    margin-top: -70px;
  }

  .skill-diamond-container:nth-child(3n + 0) {
    grid-column-start: 1;
    grid-column-end:   3;
  }
  .skill-diamond-container:nth-child(3n + 1) {
    grid-column-start: 1;
    grid-column-end:   2;
  }
  .skill-diamond-container:nth-child(3n + 2) {
    grid-column-start: 2;
    grid-column-end:   3;
  }
}

</style>
