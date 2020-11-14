<template>
  <ul class="error-messages">
    <li v-for="msg in errorMessages" :key="msg">
      {{ msg }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'McvValidationErrors',
  props: {
    validationErrors: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorMessages() {
      return Object.keys(this.validationErrors).map((name) => {
        const msg = this.validationErrors[name].join(', ');
        return `${name} ${msg}`;
      });
    },
  },
};
</script>