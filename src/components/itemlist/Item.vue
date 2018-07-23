<template>
  <li>{{ value }}</li>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      require: true
    }
  }
};
</script>
