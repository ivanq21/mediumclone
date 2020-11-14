<template>
  <div class="home-page">
    <mcv-banner />
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <mcv-feed-toggler />
          <mcv-feed :api-url="apiUrl" />
        </div>
        <div class="col-md-3"><mcv-popular-tags /></div>
      </div>
    </div>
  </div>
</template>

<script>
import McvFeed from '@/components/Feed/Feed';
import McvFeedToggler from '@/components/FeedToggler/FeedToggler';
import McvPopularTags from '@/components/PopularTags/PopularTags';
import McvBanner from '@/components/Banner/Banner';

export default {
  name: 'McvGlobalFeed',
  components: {
    McvFeed,
    McvPopularTags,
    McvBanner,
    McvFeedToggler,
  },
  data() {
    return {
      apiUrl: '/articles',
    };
  },
};
</script>