<template>
  <a-dropdown :trigger="['click']" v-model="internalFilterMenu">
    <a-button type="primary"> {{ title }} </a-button>
    <template #overlay>
      <a-menu class="content-wrapper">
        <slot />
        <action-buttons
          @cancel-click="filterMenu = false"
          @accept-click="onClick"
        ></action-buttons>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
import Vue from "vue";

import ActionButtons from "./ActionButtons.vue";

export default Vue.extend({
  components: { ActionButtons },
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
  data() {
    return {
      internalFilterMenu: false,
    };
  },
  computed: {
    filterMenu: {
      get(): boolean {
        if (this.value) {
          return this.value;
        } else {
          return this.internalFilterMenu;
        }
      },
      set(val: boolean): void {
        this.internalFilterMenu = val;
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

<style scoped>
.content-wrapper {
  height: 600px;
  padding: 2em;
  overflow: scroll;
}
</style>
