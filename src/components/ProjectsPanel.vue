<template>
  <div class='projects-panel-div'>
    <div class="proj-grid">

      <div v-for="(p, index) in projs" class="diamond-container"> 
        <button class="proj-diamond-div">
          <div :class="`proj-diamond-fill fill-1`" /> <!-- :style="`background-color: ${s.color}`" -->
          <div class="proj-diamond-text">{{p.title}}</div>
          <div class="diamond-details">
            {{p.summary}}
          </div>
        </button>
        <v-btn class="test-btn" :to="`/project/${p.id}`" tile depressed block>Read More Here</v-btn>
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
      projs: ProjectInfo.projects,
    };
  },
  
};
</script>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(5, 20%);
}







.projects-panel-div {
  text-align: left; 
  margin: 0px 37.5px 0px 37.5px;
}

.proj-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}
.diamond-container {
  position: relative; 
  width: 250px; 
  height: 300px
}

.diamond-container:nth-child(1n + 1) {
margin-top: 75px;  margin-right: -37.5px; margin-left: -37.5px;
}
.diamond-container:nth-child(2n + 0) {
margin-top: 0px; margin-right: -37.5px; margin-left: -37.5px;
}


.proj-diamond-div {
  position: absolute;
  background-image: url('~@/assets/placeholder.jpeg');
  flex-direction: column;
  background-color: #d2d2d2;
  height: 250px;
  width:  250px;
  background-size: 250px 250px;
  clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%); 
  transition: all 0.5s;
}
.proj-diamond-div:hover {
  background-color: #c4c4c4;
}
.proj-diamond-div:focus { 
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); 
  z-index: 9998;
  border-color:transparent!important;
  outline:none;
}

.proj-diamond-div:focus + .test-btn {
  pointer-events: all; 
  bottom: 0px;
  z-index: 9998;
  
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); 
  filter: opacity(100%);
  
}
.test-btn {
  position: absolute;
  bottom: 0px;
  
  clip-path: polygon(50% 50%,50% 50%,50% 50%,50% 50%);
  transition: all 0.5s;
  transition-delay: 0.25s;
  filter: opacity(0%);
}


.proj-diamond-text {
  width: 250px;
  margin-top: 100px;
  padding-left: 25px;
  padding-right: 25px;
  position: absolute; 
  text-align: center;
  color: rgba(255, 255, 255, 255);
  transition: color 0.25s;

  pointer-events: none;
}
.proj-diamond-div:focus .proj-diamond-text {
  color: rgba(255, 255, 255, 0);
}

.diamond-details {
  padding: 5px 5px 5px 10px;
  width: 250px;
  position: absolute; 
  text-align: left;
  color: rgba(255, 255, 255, 0);
  transition: color 0.25s;
  pointer-events: none;
}
.proj-diamond-div:focus .diamond-details {
  color: rgba(255, 255, 255, 255);
}

.fill-1 { 
  clip-path: polygon(50% 50%,50% 50%,50% 50%,50% 50%);
}

.proj-diamond-div:focus .fill-1 {
  clip-path: polygon(-100% 50%, 50% -100%, 200% 50%, 50% 200%);
}

.proj-diamond-fill {
  background-color: #82a97f;
  height: 250px;
  width:  250px;
  background-size: 250px 250px;
  position: absolute;
  transition: all 0.5s;
}

</style>
