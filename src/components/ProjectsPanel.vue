<template>
  <div class='projects-panel-div'>

    <div class="project-grid">
      <div class="project-diamond" v-for="(p, index) in projs"> 

        <div class="project-diamond-clickable" :tabindex="1 + skill_len + index"> <!-- :style="`background-color: ${p.color}`" -->
          <!-- <div :class="`project-diamond-fill`" />  -->
          <div class="project-diamond-title">{{p.title}}</div>
          <div class="project-diamond-details">
            {{p.summary}}
          </div>
          <div class="project-diamond-icon"><v-icon class="icon-inner">fas fa-plus</v-icon></div>
        </div>
        <v-btn class="project-diamond-link" :to="`/project/${p.id}`" tile depressed block tabindex="-1">Read More Here</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectInfo from '../store/project_info.js';
import HomeInfo from '../store/home_info.js';

export default {
  name: 'projects_panel',
  data() {
    return {
      projs: ProjectInfo.projects.slice().reverse(),
      skill_len: HomeInfo.skills.length
    };
  },
  
};
</script>

<style scoped>
.projects-panel-div {
  display: flex;
  justify-content: center;
  margin-top: -120px;
}

.project-grid {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(5, 205px);
  /* margin-right: 200px; */
}

.project-diamond {
  position: relative;
  height: 200px;
  width:  0px; /* This prevents the parent div from overlapping other diamonds! */
  margin-top: -95px;
  display: flex;
  justify-content: center;
  align-items: center;
}


.project-diamond-clickable {
  position: absolute;
  flex-direction: column;
  background-color: var(--v-primary-base);
  height: 200px;
  width:  200px;
  clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%); 
  background-size: 200px 200px;
  transition: clip-path 0.5s, z-index 0.5s step-end;
  cursor: pointer;
  z-index: 1;
}
.project-diamond-clickable:hover {
  clip-path: polygon(50% 5%,95% 50%,50% 95%,5% 50%); 
  transition: clip-path 0.25s;
}
.project-diamond-clickable:focus { 
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  z-index: 9998;
  border-color:transparent!important;
  outline:none;
  transition: clip-path 0.25s, z-index 0.5s step-start;
}
.project-diamond-fill {
  background-color: var(--v-primary_accent_01-base);
  height: 200px;
  width:  200px;
  background-size: 200px 200px;
  position: absolute;
  top: 0;
  transition: all 0.75s;
  clip-path: polygon(50% 50%,50% 50%,50% 50%,50% 50%);
}

.project-diamond-clickable:focus .project-diamond-fill {
  clip-path: polygon(-100% 50%, 50% -100%, 200% 50%, 50% 200%);
}
.project-diamond-title {
  width: 200px;
  margin-top: 80px;
  padding-left: 25px;
  padding-right: 25px;
  position: absolute; 
  top: 0;
  text-align: center;
  color: var(--v-primary_text-base);
  opacity: 1;
  transition: opacity 0.25s;
  pointer-events: none;
  -webkit-user-select: none;
}
.project-diamond-clickable:focus .project-diamond-title {
  opacity: 0;
}

.icon-inner {
  color: var(--v-primary_icon_inner-base);
}

.project-diamond-icon {
  display: flex;
  justify-content: center;
  position: absolute; 
  background-color: var(--v-primary_icon-base);
  clip-path: polygon(50% 10%,90% 50%,50% 90%,10% 50%);
  width: 50px;
  height: 50px;
  margin-left: 75px;
  bottom:0;
  text-align: center;
  opacity: 1;
  transition: transform 0.5s, opacity 0.5s;
  transition-delay: 0.15s;
  pointer-events: none;
}
.project-diamond-clickable:hover .project-diamond-icon {
  transition: transform 0.25s;
  transform: translate(0px, -8px);
}
.project-diamond-clickable:focus .project-diamond-icon {
  opacity: 0;
  transform: translate(0px, 15px) rotate(135deg);
  transition: opacity 0.25s, transform 0.25s;
  /* transform: translate(60px, 10px) rotate(45deg); */
  /* clip-path: polygon(50% 50%,50% 50%,50% 50%,50% 50%); */
}

.project-diamond-details {
  padding: 5px 5px 5px 5px;
  width: 200px;
  position: absolute; 
  top: 0;
  text-align: left;
  color: var(--v-primary_text-base);
  opacity: 0;
  transition: opacity 0.25s;
  pointer-events: none;
  -webkit-user-select: none;
}
.project-diamond-clickable:focus .project-diamond-details {
  opacity: 1;
}

.project-diamond-link {
  position: absolute;
  bottom: 0px;
  z-index: 9998;
  transition: filter 0.5s, visibility 0.5s;
  transition-delay: 0.25s;
  filter: opacity(0%);
  width: 200px;
  visibility: hidden;
}
.project-diamond-clickable:focus + .project-diamond-link {
  bottom: 0px;
  filter: opacity(100%);
  visibility: visible;
}


/** SMALLER SCREENS **/
@media screen and (max-width: 1039px) and (min-width: 481px) {
  .project-grid {
    grid-template-columns: repeat(2, 205px);
  }

  .projects-panel-div {
    margin-top: 120px;
  }

  .project-diamond:nth-child(3n + 1) {
    grid-column-start: 1;
    grid-column-end:   3;
  }
  .project-diamond:nth-child(3n + 2) {
    grid-column-start: 1;
    grid-column-end:   2;
  }
  .project-diamond:nth-child(3n + 0) {
    grid-column-start: 2;
    grid-column-end:   3;
  }

  .project-diamond:nth-child(1) {
    margin-bottom: 50px;
    margin-right: 25px;
  }

  .project-diamond:nth-child(2) {
    margin-top: -110px;
    margin-right: 30px;
  }

  .project-diamond:nth-child(3) {
    margin-bottom: 10px;
    margin-left: 15px;
  }

  .project-diamond:nth-child(4) {
    margin-bottom: 5px;
  }
  
}

/** LARGER SCREENS **/
@media screen and (min-width: 1040px) {
  .project-diamond:nth-child(3n + 1) {
    grid-column-start: 2;
    grid-column-end:   4;
  }
  .project-diamond:nth-child(3n + 2) {
    grid-column-start: 2;
    grid-column-end:   3;
  }
  .project-diamond:nth-child(3n + 0) {
    grid-column-start: 3;
    grid-column-end:   4;
  }

  .project-diamond:nth-child(1) {
    grid-column-start: 1;
    grid-column-end:   5;
    margin-bottom: 150px;
    margin-right: 150px;
  }

  .project-diamond:nth-child(2) {
    grid-column-start: 1;
    grid-column-end:   5;
    margin-bottom: 100px;
    margin-right: 450px;
  }

  .project-diamond:nth-child(3) {
    grid-column-start: 2;
    grid-column-end:   3;
    margin-top: -130px;
    margin-right: 10px;
  }

  .project-diamond:nth-child(4) {
    grid-column-start: 3;
    grid-column-end:   4;
    margin-bottom: 20px;
    margin-right: 10px;
  }

  .project-diamond:nth-child(5) {
    grid-column-start: 1;
    grid-column-end:   3;
    grid-row-start: 4;
    grid-row-end: 5;
    margin-top: -105px;
    margin-right: 35px;
  }
  .project-diamond:nth-child(6) {
    grid-column-start: 2;
    grid-column-end:   4;
    grid-row-start: 4;
    grid-row-end: 5;
    margin-top: -100px;
  }
  .project-diamond:nth-child(7) {
    grid-column-start: 3;
    grid-column-end:   5;
    grid-row-start: 4;
    grid-row-end: 5;
    margin-bottom: 5px;
  }
  .project-diamond:nth-child(10) {
    margin-bottom: 40px;
  }
  .project-diamond:nth-child(12) {
    margin-top: -110px;
  }
}

@media screen and (max-width: 480px) {
  .project-grid {
    grid-template-columns: repeat(3, 100px);
  }

  .projects-panel-div {
    margin-top: 120px;
  }


  .project-diamond:nth-child(2n + 1) {
    grid-column-start: 1;
    grid-column-end:   3;
  }
  .project-diamond:nth-child(2n + 0) {
    grid-column-start: 2;
    grid-column-end:   4;
  }
}


</style>
