<template>
  <a-dropdown :trigger="['click']" v-model="internalFilterMenu">
    <a-button type="primary"> {{ title }} </a-button>
    <template #overlay>
      <a-card>
        <div class="content-wrapper">
          <slot />
        </div>
        <div class="actions-wrapper">
          <action-buttons
            @cancel-click="filterMenu = false"
            @accept-click="onClick"
          ></action-buttons>
        </div>
      </a-card>
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
  padding: 0 2em;
  overflow: scroll;
}

.actions-wrapper {
  position: sticky;
  bottom: 0;
  padding: 1em 2em;
  border-top: 1px solid #f0f0f0;
}
</style>
