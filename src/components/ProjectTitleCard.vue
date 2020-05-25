<template>
  <div class="proj-card">
    <div :class="light ? 'light-title' : (dark ? 'dark-title' : '')">
      <div class="display-2 font-weight-light">{{info.title}}</div>
      <div class="headline font-weight-light">{{info.start_date}} - {{info.end_date}}</div>
    </div>
    <div class="icon-container">
      <div class="tag-icon body-2 " v-for="tag in info.tags">
        {{tag.text}} <v-icon small class="tag-icon-inner">{{tag.icon}}</v-icon>
      </div>
    </div>
    <div>
      <reg-btn v-for="link in info.links" :linkTo="link.link" :text="link.text" class="proj-button"/>
    </div>
  </div>
</template>

<script>
import RegBtn from './RegBtn.vue';

export default {
  name: 'project-title-card',
  components: { RegBtn },
  props: ['info', 'light', 'dark'],
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.btn-main {
  color: var(--v-navbar_text-base);
  padding-left: 10px; padding-right: 10px;
}
</style>
