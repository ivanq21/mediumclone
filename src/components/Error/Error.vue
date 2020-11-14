<template>
  <div class="error">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'McvError',
  props: {
    msg: {
      type: String,
      required: false,
      default: 'Something went wrong',
    },
  },
};
</script>