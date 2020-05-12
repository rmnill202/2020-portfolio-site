<template>
  <div class="homepage-div">
    <!-- Intro - Statement, degrees -->
    <div class="homepage-intro">
      <div class="display-3">Hi, I'm Robert Nill</div>
      <div class="headline">Software Engineer</div>
      <div class="headline">Actively looking for work</div>
      <!-- <div class="headline">Employment history</div> -->
      <div v-for="e in info.prof_experience">{{e.date}} - {{e.title}}</div>
    </div>

    <!-- Skillsets, looking for -->
    <div class="homepage-skills">
      <div class="headline">Skills</div>
      <div>Software Design</div>
      <div>Software Process</div>
      <div>Web Development</div>
      <div>Computer Graphics</div>
      <div>UX/UI Design</div>

      <!-- <div v-for="t in triangles">
        {{polygonText(t)}}
      </div> -->
      
    </div>

    <!-- Portfolio -->
    <div class="homepage-portfolio">
      <!-- <svg width="120%" height="160px" style="position: absolute; margin-left: -40px; margin-top: -5px; fill: #999999">
        <defs>
          <pattern id="mountain_03"  x="0" y="0" width="375" height="160" patternUnits="userSpaceOnUse">
            <polygon v-for="t in triangles" :points="polygonText(t)"/>
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#mountain_03)"></rect>
      </svg>

      <svg width="120%" height="160px" style="position: absolute; margin-left: 10px; margin-top: 5px; fill: #696969">
        <defs>
          <pattern id="mountain_02"  x="0" y="0" width="375" height="160" patternUnits="userSpaceOnUse">
            <polygon v-for="t in triangles" :points="polygonText(t)"/>
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#mountain_02)"></rect>
      </svg>

      <svg width="100%" height="180px" style="position: absolute; margin-left: -20px; fill: black">
        <defs>
          <pattern id="mountain_01"  x="0" y="0" width="375" height="180" patternUnits="userSpaceOnUse">
            <polygon v-for="t in triangles" :points="polygonText(t)"/>
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#mountain_01)"></rect>
        <rect x="0" y="160" width="100%" height="100%" fill="black"></rect>
      </svg> -->

      <!-- <div style="position: absolute; display: flex; width: 100%"> -->
        <!-- <svg width="100%" height="300px" style="position: absolute; fill: black; background-repeat: repeat-x">
          <defs>
            <pattern id="mountain_01"  x="0" y="0" width="1865" height="100%" patternUnits="userSpaceOnUse">
                <path stroke="black" d="M290.56,182.44,252.5,220.5,129,97,17.5,208.5v539h1867v-539l-.67-.67L1782.5,106.5,1641.67,247.33l-2.17,2.17-57-57-60.26,60.26-140-140L1351,144l-93.5-93.5L1150.73,157.26l-100-100-115,115-93.5-93.51L772,149l-30-30-58.76,58.76L549.74,44.26,395,199l-60.5-60.5C331.51,141.48,311.41,161.59,290.56,182.44Z" transform="translate(-17 -43.56)"/>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#mountain_01)"></rect>
        </svg> -->
        <!-- <svg width="100%" height="300px" style="position: absolute; fill: black; transform: translate(-50%)">
          <defs>
            <pattern id="mountain_01"  x="0" y="0" width="1865" height="100%" patternUnits="userSpaceOnUse">
                <path stroke="black" d="M290.56,182.44,252.5,220.5,129,97,17.5,208.5v539h1867v-539l-.67-.67L1782.5,106.5,1641.67,247.33l-2.17,2.17-57-57-60.26,60.26-140-140L1351,144l-93.5-93.5L1150.73,157.26l-100-100-115,115-93.5-93.51L772,149l-30-30-58.76,58.76L549.74,44.26,395,199l-60.5-60.5C331.51,141.48,311.41,161.59,290.56,182.44Z" transform="translate(-17 -43.56)"/>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#mountain_01)"></rect>
        </svg> -->
      <!-- </div> -->

      <div class="project-bg">
        Hello world!
      </div>


      <!-- <svg xmlns="http://www.w3.org/2000/svg" id="Layer_3" data-name="Layer 3" viewBox="0 0 1920 704.44"> -->
        
        
      </svg>
    </div>

    
  </div>
</template>

<script>
import HomeInfo from '../store/home_info.js';

export default {
  name: 'home',
  data() {
    return {
      info: HomeInfo,
      // triangles: [
      //   // {start: 0, scale: 1, y_offset: 0},
      //   {start: 0, scale:   0.5, y_offset:    0},
      //   {start: 9, scale:   0.6, y_offset:    3},
      //   {start: 30, scale:  0.4, y_offset:   -5},
      //   {start: 45, scale:  0.2, y_offset:   -10},
      //   {start: 43, scale:  0.7, y_offset:    10},
      //   {start: 60, scale:  1,   y_offset:    20},
      //   {start: 80, scale:  0.8, y_offset:    15},

      // ],
      // svg_size: 60.0,
      triangles: [
        // {start: 0, scale: 1, y_offset: 0},
        {start: 0,  scale:   0.5, y_offset:    0},
        {start: 27, scale:   0.6, y_offset:    9},
        {start: 90, scale:  0.4, y_offset:    -15},
        {start: 135, scale:  0.2, y_offset:    -30},
        {start: 129, scale:  0.7, y_offset:     30},
        {start: 180, scale:  1,   y_offset:    60},
        {start: 240, scale:  0.8, y_offset:    36},

      ],
      svg_size: 180.0,
    };
  },
  methods: {
    polygonText(tri) {


      let half = (this.svg_size / 2.0);
      let full =  this.svg_size;
      let scale = tri.scale;
      let yo = tri.y_offset;

      let full_diff = full - (full * scale);
      let half_diff = half - (half * scale);

      

      // let p1 = `${tri.start}                                ${full}`;
      // let p2 = `${tri.start}                                ${(half * scale) + full_diff}`;
      // let p3 = `${tri.start + (half * scale) + half_diff}   ${full_diff}`;
      // let p4 = `${tri.start + (full * scale) + full_diff}   ${(half * scale) + full_diff}`;
      // let p5 = `${tri.start + (full * scale) + full_diff}   ${full}`;

      let test = full - (half + half_diff);

      let p1 = `${tri.start}                   ${full}`;
      let p2 = `${tri.start}                   ${yo + half + half_diff}`;
      let p3 = `${tri.start + (half * scale)}  ${yo + half + half_diff - test}`;
      let p4 = `${tri.start + (full * scale)}  ${yo + half + half_diff}`;
      let p5 = `${tri.start + (full * scale)}  ${full}`;


      // let p1 = `${tri.start}                    ${(full * scale)}`;
      // let p2 = `${tri.start}                    ${(half * scale) + yo}`;
      // let p3 = `${(tri.start + half) * scale}   ${yo}`;
      // let p4 = `${(tri.start + full) * scale}   ${(half * scale) + yo}`;
      // let p5 = `${(tri.start + full) * scale}   ${(full * scale)}`;

      // return `<polygon points="${p1}, ${p2}, ${p3}, ${p4}, ${p5}"/>`;
      return `${p1}, ${p2}, ${p3}, ${p4}, ${p5}`;
    }
  }
};
</script>

<style>
.homepage-div {
  margin: 20px;
}

.homepage-intro {
  text-align: left;
}

.project-bg {
  
  min-height: 1500px;
  background-image: url('~@/assets/m_bg_01.svg'), url('~@/assets/m_bg_02.svg'), url('~@/assets/m_bg_03.svg'); 
  background-repeat: repeat-x, repeat-x, repeat-x;
  background-position: center top, 55% -5px, 45% -25px; 
  background-size: 1120px, 1020px, 820px;

  /* min-height: 1500px;
  background-image: url('~@/assets/m_bg_01.svg'), url('~@/assets/m_bg_02.svg'), url('~@/assets/m_bg_03.svg'); 
  background-repeat: repeat-x, repeat-x, repeat-x;
  background-position: center top, 55% -5px, 45% -25px; 
  background-size: 1120px, 1120px, 1120px; */
/* 
  min-height: 1500px;
  background-image: url('~@/assets/altm_04.svg');
  background-repeat: repeat-x;
  background-position: center top;
  background-size: 1920px; */

  /* background: url('~@/assets/mntn_01.svg') 0 top repeat-x,
    url('~@/assets/mntn_01.svg') center top repeat-x; */
}

/* If screen >= 960px*/
@media screen and (min-width: 960px) {
  .homepage-div {
    display: grid;
    grid-template-columns: 45% 10% 45%;
    row-gap: 25px;
  }

  .homepage-skills {
    grid-column-start: 3;
    grid-column-end: 4;
  }

  .homepage-portfolio {
    grid-column-start: 1;
    grid-column-end: 4;
  }
}
</style>
