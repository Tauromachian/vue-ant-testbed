<template>
  <div>
    <a-button :loading="disabled" text @click="cancelClick">
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
.margin-left-8px {
  margin-left: 8px;
}
</style>
