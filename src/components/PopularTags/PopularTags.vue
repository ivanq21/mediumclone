<template>
  <div>
    <mcv-loading v-if="isLoading" />
    <mcv-error v-if="error" :msg="error" />
    <div class="sidebar" v-if="popularTags">
      <p>Popular tags</p>
      <div class="tag-list">
        <router-link
          class="tag-default tag-pill"
          v-for="tag in popularTags"
          :key="tag"
          :to="{ name: 'tag', params: { slug: tag } }"
        >
          {{ tag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from '@/store/modules/popularTags';
import McvLoading from '@/components/Loading/Loading';
import McvError from '@/components/Error/Error';

export default {
  name: 'McvPopularTags',
  components: {
    McvLoading,
    McvError,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.popularTags.isLoading,
      error: (state) => state.popularTags.error,
      popularTags: (state) => state.popularTags.data,
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags);
  },
};
</script>