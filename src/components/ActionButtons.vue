<template>
  <div class="d-flex">
    <a-button
      :loading="disabled"
      text
      @click="cancelClick"
      :class="{ 'ml-auto': alignRight }"
    >
      <span class="btnfont">{{ cancelButtonText }}</span>
    </a-button>
    <a-button
      type="primary"
      class="margin-left-8px"
      :loading="disabled"
      @click="acceptClick"
    >
      <span class="btnfont">{{ acceptButtonText }}</span>
    </a-button>
  </div>
</template>

<script>
export default {
  name: "ActionButtons",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    cancelButtonText: {
      type: String,
      default: "Cancel",
    },
    acceptButtonText: {
      type: String,
      default: "Accept",
    },
    alignRight: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    acceptClick() {
      this.$emit("accept-click");
    },
    cancelClick() {
      this.$emit("cancel-click");
    },
  },
};
</script>

<style scoped>
.d-flex {
  display: flex;
}

.ml-auto {
  margin-left: auto;
}

.margin-left-8px {
  margin-left: 8px;
}
</style>
