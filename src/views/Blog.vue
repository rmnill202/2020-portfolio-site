<template>
<div>
  <div class="about-background"></div>
  <div class="blog-posts" >
    <div class="blog-post-wrapper" v-for="post in posts">
      <div class="blog-post-preview">
        <div class="display-1">{{post.title}}</div>
        <div class="subtitle-1 post-date">{{post.date}}</div>
        <div class="blog-summary">{{post.summary}}</div>
        <!-- <v-btn class="blog-button" color="primary" :to="`/blog/${post.id}`">Read</v-btn> -->
        <router-btn class="blog-button" color="primary" :linkTo="`/blog/${post.id}`" text="Read"></router-btn>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import Listing from '../store/blog_listing.js';
import RouterBtn from '../components/RouterBtn.vue';

export default {
  name: 'blog',
  components: {RouterBtn},
  data() {
    return {
      posts: Listing.posts
    };
  }
};
</script>

<style scoped>
.blog-posts {
  padding: 35px;
  position: relative;
}

.blog-post-preview {
  /* max-width: 500px;
  width: 100%; */
  padding: 15px;
  position: relative;
  color: var(--v-card_text-base);
  background-color: var(--v-card_background-base);
  /*border-bottom-color: var(--v-card_accent-base);
  border-bottom-style: solid; */
  /* linear-gradient(90deg, rgba(5,54,105,1) 0%, rgba(223,70,70,1) 50%); */
}

.blog-post-wrapper {
  display: inline-block;
  padding: 1px 2px 2px 1px;
  background: linear-gradient(175deg, rgba(5,54,105,0.35) 0%, rgba(223,70,70,0.35) 100%);
  max-width: 500px;
  width: 100%;
}

.post-date {
  position: absolute;
  right: 15px;
  top: 15px;
}

.blog-button {
  position: absolute;
  right: 10px;
  bottom: 15px;
  width: 100px;
  color: var(--v-card_text-base);
  background-color: var(--v-card_accent_2-base);
}

.blog-button::before {
  background-color: var(--v-card_accent-base);
  transform: scaleX(1.0);
}

.blog-summary {
  margin-top: 10px;
}

.about-background {
  position: absolute;
  bottom: 0px;
  width: 100%;
  min-height: 300px;

  background-color: var(--v-bg_accent_03-base);

  mask-image: url('~@/assets/bg_01.png');
  mask-repeat: repeat-x;
  mask-position: center top;
  mask-size: 1022px;

  background-repeat: repeat-x;
  background-position: center top;
  background-size: 1022px;
}

@media screen and (max-width: 599px) { 
  .post-date, .blog-button {
    position: relative;
    top: 0;
    right: 0;
  }

  .blog-button {
    width: 150px;
    margin-top: 15px;
  }

  .blog-post-preview {
    text-align: center;
  }

  .blog-summary {
    text-align: left;
  }
}

</style>
