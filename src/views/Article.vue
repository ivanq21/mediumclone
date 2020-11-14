<template>
  <div class="article-page">
    <div class="banner">
      <div class="container" v-if="article">
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <router-link
            :to="{
              name: 'userProfile',
              params: { slug: article.author.username },
            }"
          >
            <img :src="article.author.image" alt="" />
          </router-link>
          <div class="info">
            <router-link
              :to="{
                name: 'userProfile',
                params: { slug: article.author.username },
              }"
            >
              <span>{{ article.author.username }}</span>
            </router-link>
            <span class="date">{{ article.createdAt }}</span>
          </div>
          <span v-if="isAuthor">
            <router-link
              class="btn btn-outline-secondary btn-small"
              :to="{ name: 'editArticle', params: { slug: article.slug } }"
            >
              Edit Article
            </router-link>
            <button
              @click="deleteArticle"
              class="btn btn-outline-danger btn-small"
            >
              Delete Article
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="container page">
      <div class="loader" v-if="isLoading"><mcv-loading /></div>
      <div class="error" v-if="error"><mcv-error :message="error" /></div>
      <div class="row article-content" v-if="article">
        <div class="col-xs-12">
          <div>
            <p>{{ article.body }}</p>
          </div>
          TAGLIST
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { actionTypes as articleActionTypes } from '@/store/modules/article';
import { getterTypes as authGetterTypes } from '@/store/modules/auth';
import { mapState, mapGetters } from 'vuex';

import McvLoading from '@/components/Loading/Loading';
import McvError from '@/components/Error/Error';

export default {
  name: 'McvArticle',
  components: {
    McvLoading,
    McvError,
  },
  mounted() {
    this.$store.dispatch(articleActionTypes.getArticle, {
      slug: this.$route.params.slug,
    });
    console.log('route: ', this.$route);
    console.log('router: ', this.$router);
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.article.isLoading,
      error: (state) => state.article.error,
      article: (state) => state.article.data,
    }),
    ...mapGetters({
      currentUser: authGetterTypes.currentUser,
    }),
    isAuthor() {
      if (!this.article || !this.currentUser) {
        return false;
      }
      return this.currentUser.username === this.article.author.username;
    },
  },
  methods: {
    deleteArticle() {
      return this.$store
        .dispatch(articleActionTypes.deleteArticle, {
          slug: this.$route.params.slug,
        })
        .then(() => this.$router.push({ name: 'globalFeed' }));
    },
  },
};
</script>