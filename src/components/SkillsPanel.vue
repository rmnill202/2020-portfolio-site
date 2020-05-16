<template>
  <div class="skill-div">
    <div class="skill-grid">

      <div  v-for="(s, index) in skills" class="skill-diamond-container">
        <button class="skill-diamond">
          <div :class="`diamond-fill fill-${s.v}`" :style="`background-color: ${s.color}`"/>
          <div class="diamond-text">{{s.title}}</div>
          <div class="diamond-details">
            <div v-for="sub in s.sub"> {{sub}}</div>
          </div>
          <div class="diamond-icon"><v-icon>fas fa-expand-arrows-alt</v-icon></div>
        </button>
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
  background-color: #d2d2d2;
  height: 150px;
  width:  150px;
  background-size: 150px 150px;
  clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%); 
  transition: all 0.5s;
}
.skill-diamond:hover {
  background-color: #c4c4c4;
}
.skill-diamond:focus { 
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); 
  z-index: 9999;
  pointer-events: none; /* Allows the second click to de-focus */
  border-color:transparent!important;
  outline:none;
}


.diamond-text {
  width: 150px;
  margin-top: 50px;
  padding-left: 25px;
  padding-right: 25px;
  position: absolute; 
  top: 0;
  text-align: center;
  color: rgba(255, 255, 255, 255);
  transition: color 0.25s;

  pointer-events: none;
}
.skill-diamond:focus .diamond-text {
  color: rgba(255, 255, 255, 0);
}

.diamond-icon {
  width: 150px;
  margin-top: 110px;
  padding-left: 25px;
  padding-right: 25px;
  position: absolute; 
  top: 0;
  text-align: center;
  opacity: 1;
  transition: opacity 0.25s;

  pointer-events: none;
}
.skill-diamond:focus .diamond-icon {
  opacity: 0;
}

.diamond-details {
  width: 150px;
  position: absolute; 
  top: 0;
  text-align: center;
  color: rgba(255, 255, 255, 0);
  transition: color 0.25s;
  pointer-events: none;
  margin-top: 5px;
}
.skill-diamond:focus .diamond-details {
  color: rgba(255, 255, 255, 255);
}

.fill-5 {
  clip-path: polygon(-100% 50%, 50% -100%, 200% 50%, 50% 200%);
  
  /* clip-path: polygon(-35% 115%, 115% -35%, 200% 50%, 50% 200%); */
}

.fill-4 {
  clip-path: polygon(-45% 105%, 105% -45%, 200% 50%, 50% 200%);
  
  /* clip-path: polygon(-35% 115%, 115% -35%, 200% 50%, 50% 200%); */
}
.fill-3 { 
  clip-path: polygon(-35% 115%, 115% -35%, 200% 50%, 50% 200%);

  
  /* clip-path: polygon(-25% 125%, 125% -25%, 200% 50%, 50% 200%); */
}
.fill-2 { 
  
  clip-path: polygon(-25% 125%, 125% -25%, 200% 50%, 50% 200%);
  
  /* clip-path: polygon(-15% 135%, 135% -15%, 200% 50%, 50% 200%); */
}


.skill-diamond:focus .fill-2, .skill-diamond:focus .fill-3, .skill-diamond:focus .fill-4 {
  /* clip-path: polygon(-100% 50%, 50% -100%, 200% 50%, 50% 200%); */
  clip-path: polygon(-100% 50%, 50% -100%, 200% 50%, 50% 200%);
}



.diamond-fill {
  background-color: #82a97f;
  height: 150px;
  width:  150px;
  background-size: 150px 150px;
  position: absolute;
  top: 0;
  transition: all 0.5s;
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
