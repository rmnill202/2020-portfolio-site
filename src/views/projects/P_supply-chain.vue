<template>
  <blog-styles>
    
    <!-- Page contents -->
    <div class="proj-description">
      <!-- Title Card -->
      <project-title-card :info="info" :dark="true"/>

      <!-- Project Summary -->
      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Problem Context</div>
        <p>Goal to quickly reveal supply chain problems to Wegmans employees when store shelves are emptied.</p>
        <p>RIT Software Engineering capstone project taking place over two semesters.</p>
      </div>

      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Responsibilities</div>
        <p>Took charge for the development of the mobile app and early UX/UI tasks such as wireframing. </p>
        <p>Relied on close customer collaboration to develop a user-flow for the mobile app part of the project.</p>
        <p>Produced and presented wireframes and prototypes, made with LucidChart and Figma, to our customers during weekly meetings, used feedback to iterate design.</p>
        <p>Wireframes were expanded in terms of depth with annotations and multiple examples, while breadth was improved by highlighting the flow between wireframes based on what elements are interacted with. </p>
        <p>Completed work across a multi-tier system built on Microsoft technologies; C#, Xamarin, Azure DevOps.</p>
        <p>Composited the team's results together in Adobe Illustrator for our final poster. </p>
      </div>

      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Retrospective</div>
        <p>Exciting and impactful work, great team composition. </p>
        <p>Xamarin had a little bit of a learning curve, but cross-platform support was useful. </p>
        <p>Resources available in the workplace versus personally allow for easier testing; for example, I don't personally own an iPhone, which makes testing personal projects on iPhone difficult. </p>
      </div>

      <div class="desc-section">
        <div class="display-1 section-title font-weight-light">Design Work</div>
        <img class="proj-img" :src="require(`@/assets/supply-chain/wireframes_01.png`)" style="max-width: 700px;"/>
        <img class="proj-img" :src="require(`@/assets/supply-chain/wireframes_02.png`)" style="max-width: 900px;"/>
        <img class="proj-img" :src="require(`@/assets/supply-chain/wireframes_03.png`)" style="max-width: 900px;"/>
        <img class="proj-img" :src="require(`@/assets/supply-chain/wireframes_04.png`)" style="max-width: 900px;"/>
        <img class="proj-img" :src="require(`@/assets/supply-chain/poster_content.png`)" style="max-width: 900px;"/>
      </div>



    </div>
  </blog-styles>
</template>

<script>
import ProjInfo from '../../store/project_info.js';
import BlogStyles from '../../components/BlogStyles.vue';
import ProjectTitleCard from '../../components/ProjectTitleCard.vue';

export default {
  name: 'P_tigercenter',
  components: { BlogStyles, ProjectTitleCard },
  data() {
    return {
      info: ProjInfo.projects[2],
    };
  },
};
</script>

<style scoped>
.proj-card {
  background-image: url('~@/assets/supply-chain/poster_content.png');
  /* background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('~@/assets/supply-chain/poster_content.png'); */
  /* background-position: center center;
  background-size: cover;  */
}

img {
  display: block; 
  margin: auto;
  width: 100%;
  padding: 5px;
}

p {
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 1.1rem;
}
</style>