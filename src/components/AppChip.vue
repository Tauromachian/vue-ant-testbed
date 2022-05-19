<template>
  <span class="chip">{{ text }}</span>
</template>

<script>
export default {
  name: "AppChip",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.chip {
  background: #e0e0e0;
  border-radius: 16px;
  font-size: 14px;
  height: 32px;
  padding: 0.2em 1em;
}
</style>
