<template>
  <div class="blog-posts" >
    <div class="blog-post-preview" v-for="post in posts" 
      :style="`background-color: var(--v-bg_accent_01-base);`">
      <div class="display-1">{{post.title}}</div>
      <div class="subtitle-1 post-date">{{post.date}}</div>
      <div class="blog-summary">{{post.summary}}</div>
      <v-btn class="blog-button" color="primary" :to="`/blog/${post.id}`">Read</v-btn>
    </div>
  </div>
</template>

<script>
import Listing from '../store/blog_listing.js';

export default {
  name: 'blog',
  data() {
    return {
      posts: Listing.posts
    };
  }
};
</script>

<style>
.blog-posts {
  margin: 35px;
}

.blog-post-preview {
  max-width: 500px;
  padding: 15px;
  position: relative;
}

.post-date {
  position: absolute;
  right: 15px;
  top: 15px;
}

.blog-button {
  position: absolute;
  right: 15px;
  bottom: 15px;
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
