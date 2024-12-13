<template>
  <div class="home">
    <div v-if="error" class="error">Could not fetch the data</div>
    <ListView :playlists="documents" />
  </div>
</template>

<script>
import ListView from '@/components/ListView.vue';
import getCollection from '@/composables/getCollection';

export default {
  name: 'HomeView',
  components: { ListView },
  setup() {
    const { documents, error } = getCollection('playlists')

    return { documents, error }
  }
}
</script>
