<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="postsByTag.length" class="layout">
      <PostList :posts="postsByTag"/>
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
        <Spinner />
    </div>
  </div>
</template>

<script>
import getPosts from '@/composables/getPosts';
import Spinner from '@/components/Spinner.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import PostList from '@/components/PostList.vue';
import TagCloud from '@/components/TagCloud.vue';

export default {
  components: { PostList, Spinner, TagCloud },
  setup() {
    const route = useRoute()
    const { posts, error, load } = getPosts()

    load()

    const postsByTag = computed(() => {
      return posts.value.filter(post => post.tags.includes(route.params.tag))
    })

    return { postsByTag, posts, error }
  }
}
</script>

<style>
  .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>