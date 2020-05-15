<template>
  <div class='projects-panel-div'>

    <div class="project-grid">
      <div class="project-diamond" v-for="(p, index) in projs"> 

        <button class="project-diamond-clickable"> <!-- :style="`background-color: ${p.color}`" -->
        <!-- <button class="project-diamond-clickable" :style="`background-image: url(${require(`@/assets/${p.image}`)})`"> -->
          <div :class="`project-diamond-fill`" /> 
          <div class="project-diamond-title">{{p.title}}</div>
          <div class="project-diamond-details">
            {{p.summary}}
          </div>
        </button>
        <v-btn class="project-diamond-link" :to="`/project/${p.id}`" tile depressed block>Read More Here</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectInfo from '../store/project_info.js';

export default {
  name: 'projects_panel',
  data() {
    return {
      projs: ProjectInfo.projects.slice().reverse(),
    };
  },
  
};
</script>

<style scoped>
.projects-panel-div {
  display: flex;
  justify-content: center;
}

/** LARGER SCREENS **/
.project-grid {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(5, 210px);
  /* margin-right: 200px; */
}






.project-diamond {
  position: relative;
  height: 200px;
  width:  0px; /* This prevents the parent div from overlapping other diamonds! */
  margin-top: -90px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .project-diamond:hover .project-diamond-clickable {
  background-color: blue;
} */

.project-diamond-clickable {
  position: absolute;
  /* background-image: url('~@/assets/placeholder.jpeg'); */
  flex-direction: column;
  background-color: #332e2e;
  height: 200px;
  width:  200px;
  clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%); 
  background-size: 200px 200px;
  transition: all 0.75s;
}
.project-diamond-clickable:hover {
  background-color: #332e2e;
}
.project-diamond-clickable:focus { 
  clip-path: polygon(-100% 50%, 50% -100%, 200% 50%, 50% 200%);
  z-index: 9998;
  border-color:transparent!important;
  outline:none;
  pointer-events: none;
}
.project-diamond-fill {
  background-color: #82a97f;
  height: 200px;
  width:  200px;
  background-size: 200px 200px;
  position: absolute;
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
  text-align: center;
  color: rgba(255, 255, 255, 255);
  transition: color 0.25s;
  pointer-events: none;
}
.project-diamond-clickable:focus .project-diamond-title {
  color: rgba(255, 255, 255, 0);
}

.project-diamond-details {
  padding: 5px 5px 5px 10px;
  width: 200px;
  position: absolute; 
  text-align: left;
  color: rgba(255, 255, 255, 0);
  transition: color 0.25s;
  pointer-events: none;
}
.project-diamond-clickable:focus .project-diamond-details {
  color: rgba(255, 255, 255, 255);
}

.project-diamond-link {
  position: absolute;
  bottom: -36px;
  /* transform: rotate(-90deg); This works, but I'm not vibing with it as much!
  left: 36px; */
  z-index: 9998;
  
  clip-path: polygon(50% 50%,50% 50%,50% 50%,50% 50%);
  transition: all 0.5s;
  transition-delay: 0.25s;
  filter: opacity(0%);
  width: 200px;
}
.project-diamond-clickable:focus + .project-diamond-link {
  pointer-events: all; 
  bottom: -36px;
  /* transform: rotate(-90deg);
  left: 36px; */
  
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); 
  filter: opacity(100%);
}


/** SMALLER SCRENS **/
@media screen and (max-width: 1039px) {
  .project-grid {
    grid-template-columns: repeat(2, 210px);
  }

  .projects-panel-div {
    margin-top: 150px;
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
      /* margin-bottom: 150px; */
      /* margin-right: 150px; */
      margin-bottom: 50px;
      margin-right: 25px;
    }

    .project-diamond:nth-child(2) {
      /* margin-bottom: 100px;
      margin-right: 450px; */
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
    margin-top: -100px;
    margin-right: 10px;
  }

  .project-diamond:nth-child(4) {
    grid-column-start: 3;
    grid-column-end:   4;
    margin-bottom: 10px;
    margin-right: 10px;
  }

  .project-diamond:nth-child(5) {
    grid-column-start: 1;
    grid-column-end:   3;
    grid-row-start: 4;
    grid-row-end: 5;
    margin-top: -95px;
    margin-right: 5px;
  }
  .project-diamond:nth-child(6) {
    grid-column-start: 2;
    grid-column-end:   4;
    grid-row-start: 4;
    grid-row-end: 5;
  }
  .project-diamond:nth-child(7) {
    grid-column-start: 3;
    grid-column-end:   5;
    grid-row-start: 4;
    grid-row-end: 5;
  }
  .project-diamond:nth-child(10) {
    margin-bottom: 40px;
  }
  .project-diamond:nth-child(12) {
    margin-top: -110px;
  }
}


</style>
