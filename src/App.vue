<template>
  <div>
    <mcv-header />
    <router-view />
  </div>
</template>

<script>
import McvHeader from '@/components/Header/Header';
import { actionTypes } from '@/store/modules/auth';
export default {
  name: 'App',
  components: {
    McvHeader,
  },
  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser);
  },
};
</script>