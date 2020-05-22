<template>
  <div class="blog-post-container">
    <div class="intro">
      <div class="display-2 font-weight-thin">{{post.title}}</div>
      <div class="headline font-weight-light post-date">{{post.date}}</div>
      <div class="subtitle font-weight-light">{{post.summary}}</div>
    </div>
    
    <div class="blog-sec font-weight-light">I've been thinking about making a blog for quite a while now, and I guess this is the best time to do it! There's a lot of stuff that I'm passionate about, whether or not that stuff is related to my profession, and it might be cool to have a place to capture my interests, thoughts and moods. </div>

    <div class="blog-sec font-weight-light">My hopes are that this place becomes (1) something I can share with people, and (2) something I can look back on like a journal. I'll also be posting some  project summaries under the portfolio/homepage of the website; personal projects, classwork, professional experiences. That's still in progress as well, but I should probably host this site ASAP anyways!</div>
  </div>
</template>

<script>
import Listing from '../../store/blog_listing.js';

export default {
  name: 'blog',
  data() {
    return {
      post: Listing.posts[0]
    };
  }
};
</script>

<style scoped>
.blog-post-container {
  margin: 0 auto;
  max-width: 800px;
  color: var(--v-bg_text-base);
}

.intro {
  text-align: center;
  border-bottom-color: var(--v-primary-base);
  border-bottom-style: solid;
  padding-bottom: 15px;
}

.blog-sec {
  margin-top: 15px;
}

.post-date {
  margin-top: 25px;
  margin-bottom: 5px;
}

@media screen and (max-width: 999px) { 
  .blog-post-container {
    padding: 0 25px;
  }
}

@media screen and (max-width: 599px) { 
  .blog-post-container {
    padding: 0 10px;
  }
}

</style>
