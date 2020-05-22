<template>
  <div class="blog-posts" >
    <div class="blog-post-preview" v-for="post in posts">
      <div class="display-1">{{post.title}}</div>
      <div class="subtitle-1 post-date">{{post.date}}</div>
      <div class="blog-summary">{{post.summary}}</div>
      <!-- <v-btn class="blog-button" color="primary" :to="`/blog/${post.id}`">Read</v-btn> -->
      <router-btn class="blog-button" color="primary" :linkTo="`/blog/${post.id}`" text="Read"></router-btn>
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
  margin: 35px;
}

.blog-post-preview {
  max-width: 500px;
  padding: 15px;
  position: relative;
  color: var(--v-card_text-base);
  background-color: var(--v-card_background-base);
  border-bottom-color: var(--v-card_accent-base);
  border-bottom-style: solid;
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
}

.blog-button::before {
  background-color: var(--v-card_accent-base);
}

.blog-summary {
  margin-top: 10px;
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
