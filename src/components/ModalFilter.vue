<template>
  <div>
    <slot name="activator">
      <a-button type="primary" @click="filterMenu = true">
        Open Filter
      </a-button>
    </slot>

    <a-modal
      :title="title"
      v-model="filterMenu"
      :close-on-content-click="false"
      @ok="onClick"
    >
      <slot />
    </a-modal>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Filter",
    },
  },
  computed: {
    filterMenu: {
      get(): boolean {
        return this.value;
      },
      set(val: boolean): void {
        this.$emit("input", val);
      },
    },
  },
  methods: {
    onClick(): void {
      this.$emit("click:accept");
    },
  },
});
</script>

<style lang="scss" scoped></style>
